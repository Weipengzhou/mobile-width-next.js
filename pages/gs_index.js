import Link from 'next/link'
import Head from '../components/head'
import { Component } from 'react'
import stylesheet from '../components/gs_index/gs_index.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon } from 'antd-mobile';
import * as apis from '../redux/api'
import Select from '../components/select/select';
import BottomNav from '../components/bottomNav/bottomNav';

class GsIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            case: [{}, {}, {}],
            design: [{}, {}, {}, {}, {}, {}]
        }
    }
 
    render() {
        const {companies} =this.props.shows
      
        return (
            <div className='Gs_index'>
                <Head title={`${companies.name}_金蚂蚁装修网手机端`} description={`金蚂蚁装修网手机端（m.zxjmy.com）为您推荐宏利装饰装潢，并且为您免费提供宏利装饰装潢的装修案例,装修工地施工现场,设计团队以及设计作品`} url={`${this.props.id}.zxjmy.com/gs/${this.props.ojbkey}`}/>
                <Nav title={companies.name} city={this.props.id} navUrl={`/${this.props.id}/gs/${this.props.ojbkey}`}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())} ><Icon type="left" size='md' /> </a><Select/></Nav>
                <div className='tou'>
                    <div className='center'>
                        <div className='logo'>
                            <img src={`http://www.zxjmy.com${companies.company_logo}`} alt={companies.name}/>
                        </div>
                        <div className='info'>
                            <h1>{companies.name}</h1>
                            <p>口碑值:{companies.public_praise}</p>
                            <span className='score'></span>
                        </div>
                    </div>
                   
                </div>
                <div className='address'>
                    <p className="dz" >{companies.address}<em className="icon"></em></p>
                    <span className="line"></span>
                    <a href='tel:400-0606-129'>  <em className="con-phone"></em></a>

                </div>
                <div className='case'>
                <h2 style={{fontWeight:'500'}}> <p className="title">装修案例<Link href={`/${this.props.id}/gs/${this.props.ojbkey}/anli`}><a >更多></a></Link></p></h2>
                    <div className='case-show'>
                        <ul className='clearfix case-slide'>
                        {this.props.shows.cases.map((e, index) => (
                                <li key={index}>
                                    <Link href={`/${this.props.id}/gs/${this.props.ojbkey}/anli/${e.id}`} >
                                        <a>
                                            <div className='img'>
                                                <img src={`http://www.zxjmy.com${e.path}`} alt={e.title} />
                                            </div>
                                            <div className='case-detail'>
                                                <p className='case-title'>{e.title}</p>
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='design_team'>
                    <p className="title">设计团队<Link href={`/${this.props.id}/gs/${this.props.ojbkey}/sheji`}><a >更多></a></Link></p>
                    <div className='team-slide'>
                        <ul className='team-list'>
                            {this.props.shows.designers.map((e, index) => (<li key={index}>
                                <Link href={`/${this.props.id}/gs/${this.props.ojbkey}/sheji/${e.id}`}><a><div className='img-box'><img src={`http://www.zxjmy.com${e.profile}`} alt={e.name} /></div><span>{e.name}</span></a></Link>
                            </li>))}
                        </ul>
                    </div>
                </div>
                <div className='gs_gd'>
                    <p className="title">装修工地<Link href={`/${this.props.id}/gs/${this.props.ojbkey}/gongdi`}><a >更多></a></Link></p>
                    <div className='gd_center clearfix'>
                        <ul>
                            {this.props.shows.constructs.map((e, index) => (
                                <li key={index}>
                                    <Link href={`/${this.props.id}/gs/${this.props.ojbkey}/gongdi/${e.id}`}>
                                        <a>
                                            <div className='img'>
                                               <img src={`http://www.zxjmy.com${e.path}`} alt={e.housing_estate} />
                                            </div>
                                            <div className='info'>

                                                <div className='totle'>
                                                    <span className='name'>{e.housing_estate}</span>
                                                </div>
                                                <div className='totle'>

                                                    <span className='bao'>{e.city} | {e.sort==1?'半包':'全包'} </span>
                                                </div>
                                                <div className='totle'>

                                                    <span className='pic'>施工图:{e.img_count}套</span>
                                                    <span className='statu'>{e.type==1?'准备开工':e.type==2?'水电阶段':e.type==3?'泥木阶段':e.type==4?'油漆阶段':e.type==5?'竣工阶段':'准备开工'}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </li>))}
                        </ul>
                    </div>
                </div>
                <div>

                </div>
                <div className='about'>
                   <p className="title">公司信息<Link href={`/${this.props.id}/gs/${this.props.ojbkey}/jieshao`}><a>更多></a></Link></p>
                    <p className='content'>
                       {companies.intro}   </p>
                </div>
                <Footer />
                <BottomNav/>
                <style>
                    {stylesheet}
                </style>
            </div>
        )
    }
}

GsIndex.getInitialProps = async function (context) {
     
     const {id,key} =context.query
    const res = await apis.getCompanyInfo({company_id:key});
    
	const data = await res;
	return {
            shows:data,
            id:id,
            ojbkey:key
	}

}

export default GsIndex