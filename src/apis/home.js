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
export {getBannerAPI,getNewthingAPI}
