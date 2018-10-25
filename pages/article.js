import { Component } from 'react'
import Link from 'next/link'
import Head from '../components/head'
import stylesheet from '../components/article/article.less'
import Nav from '../components/nav/nav'
import Footer from '../components/footer/footer'
import { Pagination, Icon, Tabs, WhiteSpace } from 'antd-mobile';
import * as apis from '../redux/api'
import Select from '../components/select/select';
import BottomNav from '../components/bottomNav/bottomNav';
import {connect} from 'react-redux';
import * as action from '../redux/actions';
import { bindActionCreators } from 'redux';
class Article  extends Component{
    componentDidMount() {
        window._bd_share_config = {
            common : {
                bdText : `${this.props.data.articles.article.title}`,	
                bdDesc : `${this.props.data.articles.article.content}`,	
                bdUrl : `http://m.zxjmy.com/a/${this.props.data.articles.article.id}`, 
            },
            share : [{
                "bdSize" : 16
            }],
            slide : [{	   
                bdImg : 0,
                bdPos : "right",
                bdTop : 100
            }],
            image : [{
                viewType : 'list',
                viewPos : 'top',
                viewColor : 'black',
                viewSize : '16',
                viewList : ['qzone','tsina','huaban','tqq','renren']
            }],
            selectShare : [{
                "bdselectMiniList" : ['qzone','tqq','kaixin001','bdxc','tqf']
            }]
        };
        this.props.defaultCity(localStorage.getItem('city'))
        
    }
    
   
    render(){
        const {articles,hot_articles}=this.props.data
        const navcity=this.props.city?this.props.city:this.props.default?this.props.default:'zhengzhou'
         return (
            <div className='Article'>
                <Head title={`${articles.article.title}_金蚂蚁装修网手机端`} description={`金蚂蚁装修网手机端（m.zxjmy.com）为您免费分享关于《${articles.article.title}》的文章。如果大家喜欢这篇文章，希望大家能把《${articles.article.title}！》分享给您的朋友们哦！`} url={`www.zxjmy.com/a/${articles.article.id}`} />
                <Nav title={articles.catePath.length==1?`${articles.catePath[0].name}`: articles.catePath.length==2?`${articles.catePath[1].name}`: articles.catePath.length==3? `${articles.catePath[2].name}`:''}  navUrl={articles.catePath.length==1?`/${articles.catePath[0].cate_pinyin}`: articles.catePath.length==2?`/${articles.catePath[0].cate_pinyin}/${articles.catePath[1].cate_pinyin}`: articles.catePath.length==3? `/${articles.catePath[0].cate_pinyin}/${articles.catePath[2].cate_pinyin}`:''}><a style={{ color: '#333', fontSize: '14px' }} onClick={() => (window.history.back())}><Icon type="left" size='md' /> </a>
                <Select/>
                </Nav>
                <div className='center'>
                {articles.catePath.length==1? <p><a href={`/${navcity}`}>首页</a> > <a href={`/${articles.catePath[0].cate_pinyin}`} style={{color:'#666'}}> {articles.catePath[0].name}</a></p>: articles.catePath.length==2?<p><a href={`/${navcity}`}>首页</a> ><a href={`/${articles.catePath[0].cate_pinyin}`} style={{color:'#666'}}> {articles.catePath[0].name}</a>><a href={`/${articles.catePath[0].cate_pinyin}/${articles.catePath[1].cate_pinyin}`}  style={{color:'#666'}}>  {articles.catePath[1].name} </a></p>: articles.catePath.length==3?<p> <a href={`/${navcity}`}>首页</a> > <a href={`/${articles.catePath[0].cate_pinyin}`} style={{color:'#666'}}> {articles.catePath[0].name}</a>><a href={`/${articles.catePath[0].cate_pinyin}/${articles.catePath[1].cate_pinyin}`}  style={{color:'#666'}}>  {articles.catePath[1].name} </a>><a href={`/${articles.catePath[0].cate_pinyin}/${articles.catePath[2].cate_pinyin}`} style={{color:'#666'}}>  {articles.catePath[2].name} </a></p>:''}
               
            
                <h1>{articles.article.title}</h1>
                <div className="info">
                    <span className="time">{articles.article.created_at}</span>
                    <span className="source">来源：金蚂蚁装修网</span>
                </div>
                <div className="content" dangerouslySetInnerHTML={{ __html:` ${articles.article.content}`}}></div>
                <div className="bdsharebuttonbox bdshare-button-style0-16" data-bd-bind="1533892531330">
                    <a href="#" className="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
                    <a href="#" className="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
                    <a href="#" className="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
                </div>
                <div className="bottom">
                   <h2 style={{fontWeight:'500',fontSize:'12px'}}>
                   <span>声明：本文发自金蚂蚁装修网，如本站文章和转稿涉及版权等问题，请作者及时联系本站，我们会尽快处理。</span>
                    <span> 标题：装修合同注意事项，不看会后悔！</span>
                    <a href={`/a/${articles.article.id}`}> 本文地址：http://m.zxjmy.com/a/{articles.article.id}</a>
                   </h2>
                </div>
              
                <div className='tj'>
                    <div className='header'>
                        <a className='title'>相关推荐</a>
                    </div>
                    <ul className='list'>
                        {hot_articles.map((e, i) => (
                            <li key={i} className='clearfix'>
                            <Link href={`/a/${e.id}`}><a>
                                <div className='img'>
                                    <img src={`http://www.zxjmy.com${e.img}`}  alt={e.title}/>
                                </div>
                                <div className="right">
                                    <p className='biaoti'>
                                      {e.title}
                                    </p>
                                    <p className='info'>
                                        <time>浏览次数:{e.views}</time>
                                        <span>{e.label_name}</span>
                                    </p>
                                </div>
                            </a></Link></li>
                        ))}
                    </ul>
                </div>
                </div>
                <Footer />
                <BottomNav/>
                <style>{stylesheet}</style>
               
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { default:state.defaultCity}
  }
  function mapDispatchToProps(dispatch) {
    return {
      ...bindActionCreators(action, dispatch)
    }
  }
  

Article.getInitialProps = async function (context) {
   
    const { id } = context.query
 
    const res = await apis.getArticle({article_id:id})
    const data = await res
    
    return { id: id ,data:data}

}
export default connect(mapStateToProps,mapDispatchToProps)(Article);