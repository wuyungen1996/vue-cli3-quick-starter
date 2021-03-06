import apiList from '../api/index'

const install = function (Vue) {
  if (install.installed) return
  install.installed = true

  Object.defineProperties(Vue.prototype, {
    $api: {
      get () {
        return apiList
      }
    }
  })
}

export default {
  install
}
