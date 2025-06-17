import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout';
export const useCategoryStore =defineStore('category',()=>{
  const list = ref([])

  const getCategory = async()=>{
    const res = await getCategoryAPI()
    list.value = res.result

  }

  return {list,getCategory}

})
