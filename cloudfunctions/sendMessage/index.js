// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const {
    OPENID
  } = cloud.getWXContext()

  const result = await cloud.openapi.subscribeMessage.send({
    touser: OPENID,
    page: `/pages/blog-comment/blog-comment?blogId=${event.blogId}`,
    data: {
      thing4: {
        value: '评价完成'
      },
      thing2: {
        value: event.content
      }
    },
    templateId: '2ZPUJuzC1PkBrF711aqOvzuVafFZfKwl7_RxCjrKQwo',
    formId: event.formId
  })
  return result
}