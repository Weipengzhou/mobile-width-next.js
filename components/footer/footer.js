import Link from 'next/link'
import footer from './footer.less'

const Footer=()=>(<footer>
        <div className='hotCity'>
            <div className='cc'>热门城市</div>
            <Link as={`/beijing`} href={`/shouye?id=beijing`}><a>北京</a></Link>
            <Link as={`/shanghai`} href={`/shouye?id=shanghai`}><a>上海</a></Link>
            <Link as={`/guangzhou`} href={`/shouye?id=guangzhou`}><a>广州</a></Link>
            <Link as={`/shenzhen`} href={`/shouye?id=shenzhen`}><a>深圳</a></Link>
           
            <br/>
            <Link as={`/nanjing`} href={`/shouye?id=nanjing`}><a>南京</a></Link>
            <Link as={`/suzhou`} href={`/shouye?id=suzhou`}><a>苏州</a></Link>
            <Link as={`/hangzhou`} href={`/shouye?id=hangzhou`}><a>杭州</a></Link>
            <Link as={`/zhengzhou`} href={`/shouye?id=zhengzhou`}><a>郑州</a></Link>
        
        </div>
        <div className='top'>
             <a href='http://www.zxjmy.com'>电脑版</a>
             <a href='/gywm' className='two'>关于我们</a>
             <a href='/flsm'>法律声明</a>
             <a href='/map'>网站地图</a>
        </div>
        <div className='bottom'>
            <a href='tel:400-0606-129'>400-0606-129</a>
            <p>Copyright © 2017 金蚂蚁装修网 保留所有权利</p>
            <p>ICP备案：豫ICP备17030941号-2 <a href='/baojia'>免费报价</a><a href='/sheji'>免费家居设计</a></p>
        </div>

       <style>{footer}</style>
</footer>)


export default Footer;