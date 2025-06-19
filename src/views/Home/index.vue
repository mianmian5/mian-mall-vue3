<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNewthing from './components/HomeNewthing.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNewthing />
  <HomeHot />
  <homeProduct />
  <HomePanel title="新鲜好物" sub-title="1111">
    <div>我是新鲜好物插槽内容</div>
  </HomePanel>
  <HomePanel title="新鲜好物2" sub-title="1111">
    <div>我是新鲜好物2插槽内容</div>
  </HomePanel>
</template>
