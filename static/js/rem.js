!function (e, t) { function i() { var t = r.getBoundingClientRect().width; (function () { for (var e = navigator.userAgent, t = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"), i = !0, a = 0; a < t.length; a++)if (e.indexOf(t[a]) > 0) { i = !1; break } return i })() && t < 2047 && (t = t > 540 ? 540 : t); var i = t / 7.5; r.style.fontSize = i + "px", s.rem = e.rem = i } var a, n = e.document, r = n.documentElement, o = n.querySelector('meta[name="viewport"]'), d = n.querySelector('meta[name="flexible"]'), l = 0, m = 0, s = t.flexible || (t.flexible = {}); if (o) { console.warn("将根据已有的meta标签来设置缩放比例"); var p = o.getAttribute("content").match(/initial\-scale=([\d\.]+)/); p && (m = parseFloat(p[1]), l = parseInt(1 / m)) } else if (d) { var c = d.getAttribute("content"); if (c) { var u = c.match(/initial\-dpr=([\d\.]+)/), f = c.match(/maximum\-dpr=([\d\.]+)/); u && (l = parseFloat(u[1]), m = parseFloat((1 / l).toFixed(2))), f && (l = parseFloat(f[1]), m = parseFloat((1 / l).toFixed(2))) } } if (!l && !m) { e.navigator.appVersion.match(/android/gi); var v = e.navigator.appVersion.match(/iphone/gi), h = (e.navigator.appVersion.match(/ipad/gi), e.devicePixelRatio); m = 1 / (l = v ? h >= 3 && (!l || l >= 3) ? 3 : h >= 2 && (!l || l >= 2) ? 2 : 1 : 1) } if (r.setAttribute("data-dpr", l), !o) if ((o = n.createElement("meta")).setAttribute("name", "viewport"), o.setAttribute("content", "initial-scale=" + m + ", maximum-scale=" + m + ", minimum-scale=" + m + ", user-scalable=no"), r.firstElementChild) r.firstElementChild.appendChild(o); else { var g = n.createElement("div"); g.appendChild(o), n.write(g.innerHTML) } e.addEventListener("resize", function () { clearTimeout(a), a = setTimeout(i, 300) }, !1), e.addEventListener("pageshow", function (e) { e.persisted && (clearTimeout(a), a = setTimeout(i, 300)) }, !1), "complete" === n.readyState ? n.body.style.fontSize = 14 * l + "px" : n.addEventListener("DOMContentLoaded", function (e) { n.body.style.fontSize = 14 * l + "px" }, !1), i(), s.dpr = e.dpr = l, s.refreshRem = i, s.rem2px = function (e) { var t = parseFloat(e) * this.rem; return "string" == typeof e && e.match(/rem$/) && (t += "px"), t }, s.px2rem = function (e) { var t = parseFloat(e) / this.rem; return "string" == typeof e && e.match(/px$/) && (t += "rem"), t } }(window, window.lib || (window.lib = {}))
window.onload = function () {
  var script = document.createElement('script');
  script.src = "http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=408841";
  document.body.appendChild(script);
}
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}
if (!window.Promise) {
  document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"' + '>' + '<' + '/' + 'script>');
}
(function(){
  var bp = document.createElement('script');
  var curProtocol = window.location.protocol.split(':')[0];
  if (curProtocol === 'https') {
      bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
  }
  else {
      bp.src = 'http://push.zhanzhang.baidu.com/push.js';
  }
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(bp, s);
})();//百度统计代码