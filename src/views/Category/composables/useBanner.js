//封装轮播图逻辑
import { ref } from "vue"
import {getBannerAPI} from '@/apis/home'
import { onMounted } from "vue"

export function UseBanner(){
  const bannerlist = ref([])
  const getBanner=async()=>{
    const res = await getBannerAPI( {params: { distributionSite: '2' }})
    console.log('banner',res)
    bannerlist.value = res.result
  }
  onMounted(()=>getBanner())
  return{
    bannerlist
  }
}

