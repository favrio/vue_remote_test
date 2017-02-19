import Msg from './Msg'

const install = (Vue) => {
  Vue.component(Msg.name, Msg)
}

export default {
  version: '0.0.1',
  install
}