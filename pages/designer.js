import Link from 'next/link'
import Head from '../components/head'
import stylesheet from '../components/designer/designer.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon } from 'antd-mobile';
import * as apis from '../redux/api'
import Select from '../components/select/select';
import BottomNav from '../components/bottomNav/bottomNav';
const Designer = (props) => {
    const {companies,designerInfo,constructs} =props.shows.designerDetail

    return (
        
        <div className='Designer'>
            <Head title={`${companies.name}设计师${designerInfo.name}_${companies.city}金蚂蚁装修网手机端`} description={`${companies.name}设计师${designerInfo.name}_${companies.city}金蚂蚁装修网手机端`} url={`${props.id}.zxjmy.com/gs/shejishi/${props.zid}`}/>
            <Nav title={`设计师${designerInfo.name}`} navUrl={`/${props.id}/gs/${props.ojbkey}/sheji/${props.zid}`} city={props.id}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' /> </a><Select/></Nav>
            <div className='top clearfix'>
                <div className="img">
                    <img src={`http://www.zxjmy.com${designerInfo.profile}`} alt={designerInfo.name} />
                </div>
                <p className='name'>{designerInfo.name}</p>
                <p className='er'>设计师 | {designerInfo.experiences}年经验</p>
                <p className='about'>{designerInfo.introduct} </p>
    
            </div>
            <div className='list'>
                <p className="title">案例作品</p>
                <ul>
                    {constructs.data.map((e, index) => (
                        <li key={index}>
                            <Link href={`/${props.id}/gs/${props.ojbkey}/gongdi/${e.id}`}><a>
                                <div className="img">
                                    <img src={`http://www.zxjmy.com${e.path}`} alt={e.housing_estate}/>
                                </div>
                                <div className="case-detail">
                                    <p className="case-title">{e.housing_estate}</p></div>
                            </a></Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
            <BottomNav/>
            <style>
                {stylesheet}
            </style>
        </div>
    )
}


Designer.getInitialProps = async function (context) {


    const { id, key ,zid} = context.query
    const res = await apis.getDesign({ designer_id:zid });

    const data = await res;
    return {
        shows: data,
        id: id,
        ojbkey: key,
        zid:zid
    }

}

export default Designer;