import { WxHttp } from '@/public/wxHttp'

export default {
  // 获取创意列表
  getInnovationDetail: (params = {}) => WxHttp.get('/idea/detail', params),
  // 发布创意
  postInnovation: (params = {}) => WxHttp.post('/idea/submission', params),
  // 上传用户头像和昵称
  putUserInfo: (params = {}) => WxHttp.put('/user/update', params),
  // 点赞
  postLike: (params = {}) => WxHttp.post(`/like/_save?id=${params.id}`, params),
  // 取消点赞
  postUnLike: (params = {}) => WxHttp.post(`/like/_cancel?id=${params.id}`, params),
}
