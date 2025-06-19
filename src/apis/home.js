import httpInstance from "@/utils/http";
function getBannerAPI(){
  return httpInstance({
    url:'/home/banner'
  })
}
export {getBannerAPI}
