<script>
import { RouterLink, RouterView } from 'vue-router'
// options API 寫法
export default{
    // components => 放能在 <template> 中當標籤使用的元件或方法
    components:{
        RouterView,
    }
}
</script>

<template>

    <div class="headerArea">
    <RouterLink class="routerItem" to="/">Home</RouterLink>
    <RouterLink class="routerItem" to="/hotel">Hotel</RouterLink>
    <RouterLink class="routerItem" to="/Attractions">Attractions</RouterLink>
    <RouterLink class="routerItem" to="/TainanFood">Food</RouterLink>
    <RouterLink class="routerItem" to="/Activity">Activity</RouterLink>
　　
    </div>

  
</template>

<style scoped lang="scss">
.headerArea{
  widows: 100%;
  height: 100%;
  background: rgb(140, 128, 128);

  .routerItem{
    color:azure;
    font-size:24px;
    margin: 0 1%;
    text-decoration: none;
  }
}
</style>