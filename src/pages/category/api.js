import { WxHttp } from '@/public/wxHttp'

export default {
  // 获取品类树
  getCategoryTree: (params = {}) => WxHttp.get('/cate/tree', params),
  // 获取问卷（问题
}
