import { WxHttp } from '@/public/wxHttp'

export default {
  // 获取创意列表
  getInnovations: (params = {}) => WxHttp.get('/idea/list', params),
  // 获取问卷（问题
}
