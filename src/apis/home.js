import httpInstance from "@/utils/http";
function getBannerAPI(){
  return httpInstance({
    url:'/home/banner'
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
function getNewthingAPI(){
  return httpInstance({
    url:'/home/new'
  })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
function getHotAPI(){
  return httpInstance({
    url:'/home/hot'
  })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}
export {getBannerAPI,getNewthingAPI,getHotAPI,getGoodsAPI}
