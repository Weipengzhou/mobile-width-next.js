import Link from 'next/link'
import {Component} from 'react'
import Head from '../components/head'
import Nav from '../components/nav/nav'
import city from '../components/city/city.less';
import Footer from '../components/footer/footer';
import { Icon } from 'antd-mobile';

import * as apis from '../redux/api'
const Row = (props) => (
    <div>
        {props.lists.map((a, i) => (
            <section className='row' key={i}>
                <header className="row-hd">{a.title}</header>
                <ul className={`hot-citys clearfix ${a.name}`} id={a.id}>
                    {a.list.map((e, index) => (<li key={index}><Link as={`/${e.id}`} href={`/shouye?id=${e.id}`} ><a>{e.name}</a></Link></li>))}
                </ul>
            </section>
        ))}
    </div>
)

class  Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: '郑州',
            id: 'zhengzhou',
            lists: [{
                title: '热门城市', name: 'col-3', id: '', list: [{ name: '北京', id: 'beijing' }, { name: '上海', id: 'shanghai' }, { name: '广州', id: 'guangzhou' }, { name: '深圳', id: 'shenzhen' },
                { name: '南京', id: 'nanjing' }, { name: '苏州', id: 'suzhou' }, { name: '杭州', id: 'hangzhou' }, { name: '郑州', id: 'zhengzhou' }]
            },
            {
                title: '按字母排序', name: 'col-5', id: '', list: [{ name: 'A', id: '#A' }, { name: 'B', id: '#B' }, { name: 'C', id: '#C' }, { name: 'D', id: '#D' }, { name: 'E', id: '#E' }, { name: 'F', id: '#F' }, { name: 'G', id: '#G' }, { name: 'H', id: '#H' }, { name: 'I', id: '#I' }, { name: 'J', id: '#J' }, { name: 'K', id: '#K' }, { name: 'L', id: '#L' }, { name: 'M', id: '#M' }, { name: 'N', id: '#N' },
                { name: 'O', id: '#O' }, { name: 'P', id: '#P' }, { name: 'Q', id: '#Q' }, { name: 'R', id: '#R' }, { name: 'S', id: '#S' }, { name: 'T', id: '#T' }, { name: 'U', id: '#U' },
                { name: 'V', id: '#V' }, { name: 'W', id: '#W' }, { name: 'X', id: '#X' }, { name: 'Y', id: '#Y' }, { name: 'Z', id: '#Z' }]
            },
            { title: 'A', name: 'col-3', id: 'A', list: [{ name: '鞍山', id: 'anshan' }, { name: '安顺', id: 'anshun' }, { name: '安阳', id: 'anyang' }, { name: '安庆', id: 'anqing' }, { name: '安康', id: 'ankang' },] },
            { title: 'B', name: 'col-3', id: 'B', list: [{ name: '北京', id: 'beijing' }, { name: '保定', id: 'baoding' }, { name: '包头', id: 'baotou' }, { name: '蚌埠', id: 'bengbu' }, { name: '宝鸡', id: 'baoji' }, { name: '滨州', id: 'binzhou' }, { name: '亳州', id: 'bozhou' }] },
            { title: 'C', name: 'col-3', id: 'C', list: [{ name: '长春', id: 'changchun' }, { name: '重庆', id: 'chongqing' }, { name: '成都', id: 'chengdu' }, { name: '常州', id: 'changzhou' }, { name: '长沙', id: 'changsha' }, { name: '长治', id: 'changzhi' }, { name: '沧州', id: 'cangzhou' }, { name: '池州', id: 'chizhou' }, { name: '滁州', id: 'chuzhou' }, { name: '常熟', id: 'changshu' }, { name: '郴州', id: 'chenzhou' }, { name: '承德', id: 'chengde' }, { name: '赤峰', id: 'chifeng' }] },
            { title: 'D', name: 'col-3', id: 'D', list: [{ name: '大连', id: 'dalian' }, { name: '东莞', id: 'dongguan' }, { name: '德阳', id: 'deyang' }, { name: '东营', id: 'dongying' }, { name: '大同', id: 'datong' }, { name: '大庆', id: 'daqing' }] },
            { title: 'E', name: 'col-3', id: 'E', list: [{ name: '鄂州', id: 'ezhou' }] },
            { title: 'F', name: 'col-3', id: 'F', list: [{ name: '福州', id: 'fuzhou' }, { name: '佛山', id: 'foshan' }, { name: '阜阳', id: 'fuyang' }, { name: '抚州', id: 'fuzhou' }] },
            { title: 'G', name: 'col-3', id: 'G', list: [{ name: '贵阳', id: 'guiyang' }, { name: '广州', id: 'guangzhou' }, { name: '赣州', id: 'ganzhou' }] },
            { title: 'H', name: 'col-3', id: 'H', list: [{ name: '合肥', id: 'hefei' }, { name: '杭州', id: 'hangzhou' }, { name: '海口', id: 'haikou' }, { name: '呼和浩特', id: 'h' }, { name: '惠州', id: 'huizhou' }, { name: '哈尔滨', id: 'harbin' }, { name: '淮南', id: 'huainan' }, { name: '淮安', id: 'huian' }, { name: '黄石', id: 'huangshi' }, { name: '湖州', id: 'huzhou' }, { name: '衡阳', id: 'hengyang' }, { name: '菏泽', id: 'heze' }, { name: '汉中', id: 'hanzhong' }, { name: '河源', id: 'heyuan' }, { name: '黄山', id: 'huangshan' }, { name: '呼伦贝尔', id: 'hulun' }, { name: '怀化', id: 'huaihua' }, { name: '邯郸', id: 'handan' }, { name: '衡水', id: 'hengshui' }] },
            { title: 'J', name: 'col-3', id: 'J', list: [{ name: '济南', id: 'jinan' }, { name: '金华', id: 'jinhua' }, { name: '嘉兴', id: 'jiaxing' }, { name: '锦州', id: 'jinz' }, { name: '荆州', id: 'jingzhou' }, { name: '江门', id: 'jiangmen' }, { name: '吉安', id: 'jian' }, { name: '焦作', id: 'jiaozuo' }, { name: '江阴', id: 'jiangyin' }, { name: '九江', id: 'jiujiang' }, { name: '济宁', id: 'jining' }, { name: '揭阳', id: 'jieyang' }, { name: '吉林', id: 'jilin' }, { name: '晋城', id: 'jincheng' }, { name: '景德镇', id: 'jingdezhen' }, { name: '晋江', id: 'jinjiang' }] },
            { title: 'K', name: 'col-3', id: 'K', list: [{ name: '昆明', id: 'kunming' }, { name: '昆山', id: 'kunshan' }, { name: '开封', id: 'kaifeng' }] },
            { title: 'L', name: 'col-3', id: 'L', list: [{ name: '廊坊', id: 'langfang' }, { name: '临沂', id: 'linyi' }, { name: '六安', id: 'liuan' }, { name: '兰州', id: 'lanzhou' }, { name: '洛阳', id: 'luoyang' }, { name: '漯河', id: 'luohe' }, { name: '泸州', id: 'luzhou' }, { name: '丽水', id: 'lishui' }, { name: '六盘水', id: 'liupanshui' }, { name: '连云港', id: 'lianyungang' }, { name: '乐山', id: 'leshan' }, { name: '柳州', id: 'liuzhou' }, { name: '聊城', id: 'liaocheng' }] },
            { title: 'M', name: 'col-3', id: 'M', list: [{ name: '绵阳', id: 'mianyang' }, { name: '茂名', id: 'maoming' }, { name: '眉山', id: 'meishan' }] },
            { title: 'N', name: 'col-3', id: 'N', list: [{ name: '宁波', id: 'ningbo' }, { name: '南京', id: 'nanjing' }, { name: '南昌', id: 'nanchang' }, { name: '南宁', id: 'nanning' }, { name: '南通', id: 'nantong' }, { name: '南阳', id: 'nanyang' }, { name: '南充', id: 'nanchong' }, { name: '宁德', id: 'ningde' }, { name: '南平', id: 'nanping' }] },
            { title: 'P', name: 'col-3', id: 'P', list: [{ name: '濮阳', id: 'puyang' }, { name: '攀枝花', id: 'panzhihua' }, { name: '盘锦', id: 'panjin' }, { name: '平顶山', id: 'pingdingshan' }, { name: '莆田', id: 'putian' }] },
            { title: 'Q', name: 'col-3', id: 'Q', list: [{ name: '青岛', id: 'qingdao' }, { name: '秦皇岛', id: 'qinhuangdao' }, { name: '泉州', id: 'quanzhou' }, { name: '钦州', id: 'qinzhou' }, { name: '潜江', id: 'qianjiang' }, { name: '衢州', id: 'quzhou' }, { name: '清远', id: 'qingyuan' }, { name: '齐齐哈尔', id: 'qiqihar' }, { name: '曲靖', id: 'qujing' }] },
            { title: 'R', name: 'col-3', id: 'R', list: [{ name: '日照', id: 'rizhao' }] },
            { title: 'S', name: 'col-3', id: 'S', list: [{ name: '石家庄', id: 'shijiazhuang' }, { name: '深圳', id: 'shenzhen' }, { name: '苏州', id: 'suzhou' }, { name: '上海', id: 'shanghai' }, { name: '沈阳', id: 'shenyang' }, { name: '绍兴', id: 'shaoxing' }, { name: '韶关', id: 'shaoguan' }, { name: '上饶', id: 'shangrao' }, { name: '十堰', id: 'shiyan' }, { name: '随州', id: 'suizhou' }, { name: '汕头', id: 'shantou' }, { name: '宿迁', id: 'suqian' }, { name: '汕尾', id: 'shanwei' }, { name: '商丘', id: 'shangqiu' }, { name: '宿州', id: 'suzhouu' }, { name: '三门峡', id: 'sanmenxia' }, { name: '邵阳', id: 'shaoyang' }, { name: '三亚', id: 'sanya' }] },
            { title: 'T', name: 'col-3', id: 'T', list: [{ name: '太原', id: 'yaiyuan' }, { name: '天津', id: 'tianjin' }, { name: '唐山', id: 'tangshan' }, { name: '台州', id: 'tz' }, { name: '泰州', id: 'taizhouu' }, { name: '泰安', id: 'taian' }, { name: '铜仁', id: 'tongren' }] },
            { title: 'W', name: 'col-3', id: 'W', list: [{ name: '乌鲁木齐', id: 'wlmq' }, { name: '无锡', id: 'wuxi' }, { name: '武汉', id: 'wuhan' }, { name: '温州', id: 'wenzhou' }, { name: '威海', id: 'weihai' }, { name: '芜湖', id: 'wuhu' }, { name: '潍坊', id: 'weifang' }] },
            { title: 'X', name: 'col-3', id: 'X', list: [{ name: '西安', id: 'xian' }, { name: '厦门', id: 'xiamen' }, { name: '西宁', id: 'xining' }, { name: '信阳', id: 'xinyang' }, { name: '徐州', id: 'xuzhou' }, { name: '咸宁', id: 'xianning' }, { name: '许昌', id: 'xuchang' }, { name: '湘潭', id: 'xiangtan' }, { name: '襄阳', id: 'xiangyang' }, { name: '新乡', id: 'xinxiang' }, { name: '仙桃', id: 'xiantao' }, { name: '新余', id: 'xinyu' }, { name: '咸阳', id: 'xianyang' }, { name: '孝感', id: 'xiaogan' }, { name: '邢台', id: 'xingtai' }] },
            { title: 'Y', name: 'col-3', id: 'Y', list: [{ name: '银川', id: 'yinchuan' }, { name: '盐城', id: 'yancheng' }, { name: '运城', id: 'yuncheng' }, { name: '宜昌', id: 'yichang' }, { name: '烟台', id: 'yantai' }, { name: '扬州', id: 'yangzhou' }, { name: '义乌', id: 'yiwu' }, { name: '玉林', id: 'yulin' }, { name: '岳阳', id: 'yueyang' }, { name: '益阳', id: 'yiyang' }, { name: '永州', id: 'yongzhou' }, { name: '玉溪', id: 'yuxi' }, { name: '宜春', id: 'yichun' }, { name: '营口', id: 'yingkou' }, { name: '榆林', id: 'yulinn' }, { name: '宜宾', id: 'yibin' }] },
            { title: 'Z', name: 'col-3', id: 'Z', list: [{ name: '郑州', id: 'zhengzhou' }, { name: '周口', id: 'zhoukou' }, { name: '中山', id: 'zhongshan' }, { name: '遵义', id: 'zunyi' }, { name: '肇庆', id: 'zhaoqing' }, { name: '自贡', id: 'zigong' }, { name: '张家港', id: 'zhangjiagang' }, { name: '珠海', id: 'zhuhai' }, { name: '湛江', id: 'zhanjiang' }, { name: '舟山', id: 'zhoushan' }, { name: '驻马店', id: 'zhumadian' }, { name: '张家口', id: 'zhangjiakou' }, { name: '漳州', id: 'zhangzhou' }, { name: '淄博', id: 'zibo' }, { name: '株洲', id: 'zhuzhou' }, { name: '镇江', id: 'zhenjiang' }] },
            ]
        }
    }
  

   render(){
       const domain =this.props.shows?this.props.shows.domain:'/'
    return (
        <div className='cityChose'>
            <Head title="金蚂蚁装修网手机端_推荐口碑好的装修公司免费室内装修报价,室内装修效果图大全,房子装修设计图片大全" description='金蚂蚁装修网手机端（m.zxjmy.com）致力于为全国装修业主打造一个良好的互联网装修平台并为业主推荐口碑好的装修公司免费提供室内装修报价,室内装修效果图大全,房子装修设计图片大全.'  url={'www.zxjmy.com'}/>
            <Nav title="切换城市" navUrl={`/`}><a style={{ color: '#333', fontSize: '14px' }}  onClick={()=>(window.history.back())}><Icon type="left"  size='md'/> </a></Nav>
            <div className='citypage' style={{marginBottom:'0.2rem'}}>
                <div className='current-city'>
               <span>当前定位:<Link href={`/${domain}`}><a>{this.props.shows?this.props.shows.city:'定位中...'}</a></Link></span>
                </div>
                <Row lists={this.state.lists} />
            </div>
            <Footer/>
   
            <style>{city}</style>
        </div>
    )
   }
}


Index.getInitialProps = async function (context) {
    const res = await apis.citySelect();
   
    const data = await res;
	return {
            shows: data.city,
          
	}

}




export default Index