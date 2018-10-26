import wepy from 'wepy';
import logUtil from '@/public/weixinAppReport'

export default class LogMixin extends wepy.mixin {

  data = {
    log: null,
    utm_source: '',
    utm_term: ''
  }

  onLoad(opt) {
    /** 
     * 
     * 统计分享上报埋点信息
     * pname: WXAPP_SHARE_VIEW
     * pparam: utm_source=100000&utm_term=userid
     * 
    */
    this.utm_source = opt.utm_source
    this.utm_term = opt.utm_term
    let pparamStr = ''
    if(opt.utm_source || opt.utm_term) {
      pparamStr = `utm_source=${opt.utm_source}&utm_term=${opt.utm_term}`
    }
    if(opt.tagId) {
      pparamStr += `&tagId=${opt.tagId}`
    }
    this.log = logUtil.init()
    this.log.set({
      siteId:'JA2018_5131263', //子午线里获取站点编号，必填
      pageId: opt && opt.articleId, //页面标识，默认为空，必填
      page_id: opt && opt.articleId, //页面标识，默认为空，必填
      openid: wx.getStorageSync('storeUserId'),
      pname: (opt.utm_source || opt.utm_term) ? 'WXAPP_SHARE_VIEW' : '',
      pparam: pparamStr
    })
  }

  onHide() {
    this.log.pageUnload()
  }

  onUnload() {
    this.log.pageUnload()
  }

  onShow(opt) {
    opt && opt.scene && logUtil.setScene(opt.scene)
    this.log.pv()
  }

  // 首页推文手动触发上报
  indexTweetsLog(articleToday) {
    let articleIds = []
    for(let v of articleToday) {
      articleIds.push(v.articleId)
    }
    this.log.pv({
      pageId: articleIds.join(), //页面标识，默认为空，必填
      openid: wx.getStorageSync('storeUserId'),
      pname: (this.utm_source || this.utm_term) ? 'WXAPP_SHARE_VIEW' : '',
      pparam: 'WXAPP_INDEX_ARTICLES_VIEW'
    })
  }
}