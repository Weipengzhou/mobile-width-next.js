import { createForm, formShape } from 'rc-form';
import { Picker, List } from 'antd-mobile';
import arrayTreeFilter from 'array-tree-filter';
import district from '../data/city_data';
import { connect } from 'react-redux';
import * as action from '../../redux/actions';
import { bindActionCreators } from 'redux';
import {Toast} from 'antd-mobile'
class Form extends React.Component {
    state = {
        pickerValue: [],
        visible: false,
        count: 60,
        liked: true
    };
    static propTypes = {
        form: formShape,
    };

    post = () => {
        this.props.form.validateFields((error, value) => {
        
            if(value.sms!==''){
               this.props.submitBaojia({city:value.district,house_area:value.area,phone_num:value.phone,source:'报价',token:this.props.token,code:value.sms})
            }else{
                Toast.fail('请输入验证码 !!!', 1);
            }
        })
    }
    getSel() {
        const value = this.state.pickerValue;
        if (!value) {
            return '';
        }
        const treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level]);
        return treeChildren.map(v => v.label).join(',');
    }
    handleClick = () => {
        this.props.form.validateFields((error, value) => {
            if(value.area ==''){
                Toast.fail('请输入您的姓名 !!!', 1);
            }else if(!value.phone.match(/^1[0-9]{10}$/)){
                Toast.fail('请输入正确的手机号码 !!!', 1);
            }else{
                if (this.state.liked) {
                    this.state.liked = false;
                    this.props.getCode({phone_num:value.phone})
                    this.timer = setInterval(function () {
                        var count = this.state.count;
                        count -= 1;
                        if (count < 1) {
                            this.setState({
                                liked: true
                            });
                            count = 60;
                            clearInterval(this.timer)
                        }
                        this.setState({
                            count: count
                        });
                    }.bind(this), 1000);
                }
            }
        });
       
    }
    componentWillUnmount = () => { clearInterval(this.timer) }
    render() {
        let errors;
        var text = this.state.liked ? '获取验证码' : this.state.count + '秒后重新获取';
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div>
                <div className='baojia-form'>
                   
                    <div className='form-list-box'><span className='area'></span><input {...getFieldProps('area', { initialValue: '' })} placeholder='您的称呼' /></div>
                    <div className='form-list-box'><span className='phone'></span><input {...getFieldProps('phone', { initialValue: '' })} placeholder='输入手机号，报价结果将发送您的手机' /></div>
                    <div className='form-list-box' style={{ border: 'none' }}>
                        <span className='sms'></span><input style={{ width: '2.7rem', float: 'left' }}{...getFieldProps('sms', { initialValue: '' })} placeholder='输入验证码' />
                        <button onClick={this.handleClick} style={{ width: '2.55rem', float: 'right' }}>{text}</button>
                    </div>
                    <button onClick={this.post}>立即计算</button>
                </div>


            </div>
        );
    }
}
function mapStateToProps(state) {
    return {token:state.token}
}
function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(action, dispatch)
    }
}
const Index = createForm()(Form);
export default connect(mapStateToProps, mapDispatchToProps)(Index)