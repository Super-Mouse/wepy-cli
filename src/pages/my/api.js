import { WxHttp } from '@/public/wxHttp'

export default {
  // 获取品类树
  getUserInfo: (params = {}) => WxHttp.get('/user/info', params),
  // 获取问卷（问题
}
