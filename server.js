const express = require('express')
const next = require('next')
const compression = require('compression')
const querystring = require("querystring");
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  if (!dev) {
    server.use(compression()) //gzip
  }
  //免费设计
  server.get('/sheji', (req, res) => {

    const actualPage = '/sheji'
    const queryParams = {
      id: req.params.id
    }
    app.render(req, res, actualPage, queryParams)
  })
  //免费报价
  server.get('/baojia', (req, res) => {

    const actualPage = '/baojia'
    const queryParams = {
      id: req.params.id
    }
    app.render(req, res, actualPage, queryParams)
  })
  //免费验房
  server.get('/yanfang', (req, res) => {

    const actualPage = '/yanfang'
    const queryParams = {
      id: req.params.id
    }
    app.render(req, res, actualPage, queryParams)
  })

  //关于我们
  server.get('/gywm', (req, res) => {

    const actualPage = '/gywm'
    const queryParams = {
      id: req.params.id
    }
    app.render(req, res, actualPage, queryParams)
  })

  //法律声明
  server.get('/flsm', (req, res) => {

    const actualPage = '/flsm'
    const queryParams = {
      id: req.params.id
    }
    app.render(req, res, actualPage, queryParams)
  })

  //文章详情页
  server.get('/a/:id([0-9]+)', (req, res) => {
    console.log('请求啊-------------------------------------------')
    console.log(req.params.id)
    const actualPage = '/article'
    const queryParams = {
      id: req.params.id
    }
    app.render(req, res, actualPage, queryParams)
  })
  

 

  //装修百科首页
  server.get('/bk', (req, res) => {

    const actualPage = '/bkdetail'
    const queryParams = {
      id: 'bk'
    }
    app.render(req, res, actualPage, queryParams)
  })
  // 装修百科列表页
  server.get('/bk/:id', (req, res) => {

    const actualPage = '/bklist'
    const queryParams = {
      id: 'bk',
      lei:req.params.id
    }
    queryParams['info']=req.query
    app.render(req, res, actualPage, queryParams)
  })

  //装修攻略首页
  server.get('/gl', (req, res) => {

    const actualPage = '/bkdetail'
    const queryParams = {
      id: 'gl'
    }
    app.render(req, res, actualPage, queryParams)
  })
  // 装修攻略列表页
  server.get('/gl/:id', (req, res) => {

    const actualPage = '/bklist'
    const queryParams = {
      id: 'gl',
      lei:req.params.id
    }
    queryParams['info']=req.query
    app.render(req, res, actualPage, queryParams)
  })
 
  //装修资讯首页
  server.get('/zx', (req, res) => {

    const actualPage = '/bkdetail'
    const queryParams = {
      id: 'zx'
    }
    app.render(req, res, actualPage, queryParams)
  })
  // 装修资讯列表页
  server.get('/zx/:id', (req, res) => {

    const actualPage = '/bklist'
    const queryParams = {
      id: 'zx',
      lei:req.params.id
    }
    queryParams['info']=req.query
    app.render(req, res, actualPage, queryParams)
  })
  // 效果图列表
  server.get('/xgt', (req, res) => {

    const actualPage = '/xgt'
    const queryParams = {
      id: req.params.id
    }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/xgt/:id([a-z]+)', (req, res) => {
    const actualPage = '/xgt_xq'
    const queryParams = {
      id: req.params.id
    }
    queryParams['info']=req.query
    app.render(req, res, actualPage, queryParams)
  })
  //效果图详情页
  server.get('/xgt/:id([0-9]+)', (req, res) => {

    const actualPage = '/xiaoguotu'
    const queryParams = {
      id: req.params.id
    }
    app.render(req, res, actualPage, queryParams)
  })


  var arr = { "anshan": "鞍山", "anshun": "安顺", "anyang": "安阳", "anqing": "安庆", "ankang": "安康", "beijing": "北京", "baoding": "保定", "baotou": "包头", "bengbu": "蚌埠", "baoji": "宝鸡", "binzhou": "滨州", "bozhou": "亳州", "changchun": "长春", "chongqing": "重庆", "chengdu": "成都", "changzhou": "常州", "changsha": "长沙", "changzhi": "长治", "cangzhou": "沧州", "chizhou": "池州", "chuzhou": "滁州", "changshu": "常熟", "chenzhou": "郴州", "chengde": "承德", "chifeng": "赤峰", "dalian": "大连", "dongguan": "东莞", "deyang": "德阳", "dongying": "东营", "datong": "大同", "daqing": "大庆", "ezhou": "鄂州", "fuzhou": "抚州", "foshan": "佛山", "fuyang": "阜阳", "guiyang": "贵阳", "guangzhou": "广州", "ganzhou": "赣州", "hefei": "合肥", "hangzhou": "杭州", "haikou": "海口", "h": "呼和浩特", "huizhou": "惠州", "harbin": "哈尔滨", "huainan": "淮南", "huian": "淮安", "huangshi": "黄石", "huzhou": "湖州", "hengyang": "衡阳", "heze": "菏泽", "hanzhong": "汉中", "heyuan": "河源", "huangshan": "黄山", "hulun": "呼伦贝尔", "huaihua": "怀化", "handan": "邯郸", "hengshui": "衡水", "jinan": "济南", "jinhua": "金华", "jiaxing": "嘉兴", "jinz": "锦州", "jingzhou": "荆州", "jiangmen": "江门", "jian": "吉安", "jiaozuo": "焦作", "jiangyin": "江阴", "jiujiang": "九江", "jining": "济宁", "jieyang": "揭阳", "jilin": "吉林", "jincheng": "晋城", "jingdezhen": "景德镇", "jinjiang": "晋江", "kunming": "昆明", "kunshan": "昆山", "kaifeng": "开封", "langfang": "廊坊", "linyi": "临沂", "liuan": "六安", "lanzhou": "兰州", "luoyang": "洛阳", "luohe": "漯河", "luzhou": "泸州", "lishui": "丽水", "liupanshui": "六盘水", "lianyungang": "连云港", "leshan": "乐山", "liuzhou": "柳州", "liaocheng": "聊城", "mianyang": "绵阳", "maoming": "茂名", "meishan": "眉山", "ningbo": "宁波", "nanjing": "南京", "nanchang": "南昌", "nanning": "南宁", "nantong": "南通", "nanyang": "南阳", "nanchong": "南充", "ningde": "宁德", "nanping": "南平", "puyang": "濮阳", "panzhihua": "攀枝花", "panjin": "盘锦", "pingdingshan": "平顶山", "putian": "莆田", "qingdao": "青岛", "qinhuangdao": "秦皇岛", "quanzhou": "泉州", "qinzhou": "钦州", "qianjiang": "潜江", "quzhou": "衢州", "qingyuan": "清远", "qiqihar": "齐齐哈尔", "qujing": "曲靖", "rizhao": "日照", "shijiazhuang": "石家庄", "shenzhen": "深圳", "suzhou": "苏州", "shanghai": "上海", "shenyang": "沈阳", "shaoxing": "绍兴", "shaoguan": "韶关", "shangrao": "上饶", "shiyan": "十堰", "suizhou": "随州", "shantou": "汕头", "suqian": "宿迁", "shanwei": "汕尾", "shangqiu": "商丘", "suzhouu": "宿州", "sanmenxia": "三门峡", "shaoyang": "邵阳", "sanya": "三亚", "yaiyuan": "太原", "tianjin": "天津", "tangshan": "唐山", "tz": "台州", "taizhouu": "泰州", "taian": "泰安", "tongren": "铜仁", "wlmq": "乌鲁木齐", "wuxi": "无锡", "wuhan": "武汉", "wenzhou": "温州", "weihai": "威海", "wuhu": "芜湖", "weifang": "潍坊", "xian": "西安", "xiamen": "厦门", "xining": "西宁", "xinyang": "信阳", "xuzhou": "徐州", "xianning": "咸宁", "xuchang": "许昌", "xiangtan": "湘潭", "xiangyang": "襄阳", "xinxiang": "新乡", "xiantao": "仙桃", "xinyu": "新余", "xianyang": "咸阳", "xiaogan": "孝感", "xingtai": "邢台", "yinchuan": "银川", "yancheng": "盐城", "yuncheng": "运城", "yichang": "宜昌", "yantai": "烟台", "yangzhou": "扬州", "yiwu": "义乌", "yulin": "玉林", "yueyang": "岳阳", "yiyang": "益阳", "yongzhou": "永州", "yuxi": "玉溪", "yichun": "宜春", "yingkou": "营口", "yulinn": "榆林", "yibin": "宜宾", "zhengzhou": "郑州", "zhoukou": "周口", "zhongshan": "中山", "zunyi": "遵义", "zhaoqing": "肇庆", "zigong": "自贡", "zhangjiagang": "张家港", "zhuhai": "珠海", "zhanjiang": "湛江", "zhoushan": "舟山", "zhumadian": "驻马店", "zhangjiakou": "张家口", "zhangzhou": "漳州", "zibo": "淄博", "zhuzhou": "株洲", "zhenjiang": "镇江" }
  //地区首页
  server.get('/:id', (req, res) => {
    var info = arr[req.params.id];
    if (info) {
      const actualPage = '/shouye'
      const queryParams = {
        id: req.params.id
      }
      app.render(req, res, actualPage, queryParams)
    } else {
      return handle(req, res)
    }

  })
  //公司列表
  server.get('/:id/gs', (req, res) => {

    const actualPage = '/gs'
    var key ='lei'
    const queryParams = {
      id: req.params.id,
    }
    queryParams[key]=req.query
 
    app.render(req, res, actualPage, queryParams)
  })
  //首页
  server.get('/', (req, res) => {

    const actualPage = '/index'
   
    const queryParams = {
      id: req.params.id,
    }

 
    app.render(req, res, actualPage, queryParams)
  })

    //网站地图
    server.get('/map', (req, res) => {

      const actualPage = '/map'
     
      const queryParams = {
        id: req.params.id,
      }
  
   
      app.render(req, res, actualPage, queryParams)
    })
  
    //提交成功
    server.get('/success', (req, res) => {

      const actualPage = '/success'
     
      const queryParams = {
        id: req.params.id,
      }
  
   
      app.render(req, res, actualPage, queryParams)
    })
  //公司详情页
  server.get('/:id/gs/:key([0-9]+)', (req, res) => {

    const actualPage = '/gs_index'
    const queryParams = {
      id: req.params.id,
      key:req.params.key
    }
    app.render(req, res, actualPage, queryParams)
  })
  //公司介绍页
  server.get('/:id/gs/:key([0-9]+)/jieshao', (req, res) => {

    const actualPage = '/jieshao'
    const queryParams = {
      id: req.params.id,
      key:req.params.key
    }
    app.render(req, res, actualPage, queryParams)
  })
  //公司效果图列表页
  server.get('/:id/gs/:key([0-9]+)/anli', (req, res) => {

    const actualPage = '/gs_xgtlist'
    const queryParams = {
      id: req.params.id,
      key:req.params.key
    }
    app.render(req, res, actualPage, queryParams)
  })
    //公司效果图详情页
    server.get('/:id/gs/:key([0-9]+)/anli/:pid([0-9]+)', (req, res) => {

      const actualPage = '/gs_xgt'
      const queryParams = {
        id: req.params.id,
        key:req.params.key,
        pid:req.params.pid
      }
      app.render(req, res, actualPage, queryParams)
    })

  //公司设计师列表页
  server.get('/:id/gs/:key([0-9]+)/sheji', (req, res) => {

    const actualPage = '/design'
    const queryParams = {
      id: req.params.id,
      key:req.params.key
    }
    app.render(req, res, actualPage, queryParams)
  })
  //公司设计师详情页
  server.get('/:id/gs/:key([0-9]+)/sheji/:zid([0-9]+)', (req, res) => {

    const actualPage = '/designer'
    const queryParams = {
      id: req.params.id,
      key:req.params.key,
      zid:req.params.zid
    }
    app.render(req, res, actualPage, queryParams)
  })

  //装修公司工地列表
  server.get('/:id/gs/:key([0-9]+)/gongdi', (req, res) => {

    const actualPage = '/gongdi'
    const queryParams = {
      id: req.params.id,
      key:req.params.key
    }
    app.render(req, res, actualPage, queryParams)
  })
  //装修公司工地详情页
  server.get('/:id/gs/:key([0-9]+)/gongdi/:zid([0-9]+)', (req, res) => {

    const actualPage = '/gdxq'
    const queryParams = {
      id: req.params.id,
      key:req.params.key,
      zid:req.params.zid
    }
    app.render(req, res, actualPage, queryParams)
  })




  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3001, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3001')
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})