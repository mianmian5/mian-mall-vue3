//封装分类数据业务逻辑
import { ref } from "vue"
import { onMounted } from "vue"
import { getTopCategoryAPI } from "@/apis/category"
import { onBeforeRouteUpdate } from "vue-router"
import { useRoute } from "vue-router"

export function useCategory(){
  const list1 = ref({})
  const route = useRoute()
  const getCategory=async(id)=>{
    const res = await getTopCategoryAPI(id)
    list1.value = res.result
    console.log('111',list1.value)
    console.log('res',res)
  }
  onMounted(()=>{getCategory(route.params.id)})
  onBeforeRouteUpdate((to)=>{
    getCategory(to.params.id)
  })
  return {list1}
}

