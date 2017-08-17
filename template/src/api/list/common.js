/**
 * @author walid
 * @description commonApi 模块
 * @date 2016/03/16
 */

import Api from '../axios'

const apiURL = {
  // 提交表单信息
  //
  // 
  getJson: 'package.json'
}

export default {
  getJson (obj) {
    return Api.post(apiURL.getJson, obj)
  }
}
