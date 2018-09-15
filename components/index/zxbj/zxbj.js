import { createForm, formShape } from 'rc-form';
import { Picker, List} from 'antd-mobile';
import arrayTreeFilter from 'array-tree-filter';
import  district  from '../../data/city_data';
import {connect} from 'react-redux';
import * as action from '../../../redux/actions';
import { bindActionCreators } from 'redux';
 import {Toast} from 'antd-mobile'
class Form extends React.Component {
    state = {
        pickerValue: [],
        visible: false,
    };
    static propTypes = {
        form: formShape,
    };

    submit = () => {
        this.props.form.validateFields((error, value) => {
           if(value.area==''){
                Toast.fail('请输入您的姓名 !!!', 1);
            }else if(!value.phone.match(/^1[0-9]{10}$/)){
                Toast.fail('请输入正确的手机号码 !!!', 1);
            }else{
                this.props.indexBaojia({city:value.district,house_area:value.area,phone_num:value.phone})
            }
        
          //  
        });
    }
    getSel() {
        const value = this.state.pickerValue;
        if (!value) {
            return '';
        }
        const treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level]);
        return treeChildren.map(v => v.label).join(',');
    }
    render() {
        let errors;
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div>
                <div className='index-form'>
                   
                    <div className='form-list-box'><span className='area'></span><input {...getFieldProps('area',{ initialValue: ''})} placeholder='您的姓名' /></div>
                    <div className='form-list-box'><span className='phone'></span><input {...getFieldProps('phone',{ initialValue: ''})} placeholder='输入手机号码获取报价结果' /></div>
                    <button onClick={this.submit}>立即获取</button>
                </div>

            </div>
        );
    }
}
function mapStateToProps(state) {
    return { }
  }
function mapDispatchToProps(dispatch) {
    return {
      ...bindActionCreators(action, dispatch)
    }
 }
const Index = createForm()(Form);
export default connect(mapStateToProps, mapDispatchToProps)(Index)