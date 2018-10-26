import wepy from 'wepy';

export default class TouchMixin extends wepy.mixin {

  data = {
    tStartPointX: 0, // 记录开始滑动点的pageX，坐标点x
    tStartPointY: 0, // 记录开始滑动点的pageY，坐标点y
    movePageX: 0, // 记录移动的x距离
    movePageY: 0, // 记录移动的y距离
    currentPage: '',
    JTouch: 'true'
  }

  onLoad(opt) {
    this.JTouch = opt.JTouch ? opt.JTouch : 'true'
    const pages = getCurrentPages()
    this.currentPage = `/${pages[0].route}`
  }

  methods = {
    touchStart(e) {
      this.tStartPointX = e.touches[0].pageX
      this.tStartPointY = e.touches[0].pageY
    },
    touchMove(e) {
      this.movePageX = e.touches[0].pageX
      this.movePageY = e.touches[0].pageY
      // 向右滑动并且y坐标在10以内的差值才会执行
      if(this.tStartPointX < this.movePageX && this.movePageX - this.tStartPointX >= 80 && Math.abs(this.movePageY - this.tStartPointY) < 5) {
        if(this.JTouch === 'true') {
          wx.navigateTo({
            url: this.currentPage
          })
          wx.switchTab({
            url: this.currentPage
          })
        }
      }
    },
    touchEnd(e) {
    }
  }
}