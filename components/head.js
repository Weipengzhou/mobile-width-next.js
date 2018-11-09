import NextHead from 'next/head'
import { string } from 'prop-types'
const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no" />
    <meta name="baidu-site-verification" content="hMF9xpWYyj" />
    {props.url ? <link rel="canonical" href={`http://${props.url}`} /> : ''}
    <link rel="icon" sizes="192x192" href="/static/favicon.ico" />
    <link rel="apple-touch-icon" href="/static/favicon.ico" />
    <link rel="mask-icon" href="/static/favicon.ico" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="/static/css/reset.css"></link>
    <link href="https://cdn.bootcss.com/antd-mobile/2.1.10/antd-mobile.css" rel="stylesheet"></link>
    <script src='/static/js/rem.js'></script>
    <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
    {/* <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" /> */}
    <p style={{'display':'none'}}><script src="https://s5.cnzz.com/z_stat.php?id=1275304955&web_id=1275304955" language="JavaScript"></script></p>
  </NextHead>

)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
