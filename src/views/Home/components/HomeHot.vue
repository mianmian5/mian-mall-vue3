<script setup>
import HomePanel from './HomePanel.vue'
import { ref,onMounted } from 'vue';
import { getHotAPI } from '@/apis/home';
const list = ref([])
const getHot=async()=>{
  const res = await getHotAPI()
  list.value = res.result
  console.log('人气推荐res',res)
}
onMounted(()=>{
  getHot()
})
</script>

<template>
  <HomePanel title="人气推荐" sub-title="1111">
    <ul class="goods-list">
        <li v-for="item in list" :key="item.id">
          <RouterLink :to="`/detail/${item.id}`">
            <img v-pic-lazy="item.picture" alt="" />
            <p class="name">{{ item.title }}</p>
            <p class="price">{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
  </HomePanel>
</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
