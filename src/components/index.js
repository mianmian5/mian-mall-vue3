import ImageView from './ImageView/index.vue'
import MianMallSku from './MianMallSku/index.vue'
// const { install } = require("element-plus");

export const componentPlugin={
  install(app){
    app.component('ImageView',ImageView)
    app.component('MianMallSku',MianMallSku)
  }
}
