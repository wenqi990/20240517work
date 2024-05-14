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
      <img src="/public/imags/活動/location.png" alt="" width="50px">
    <RouterLink class="routerItem" to="/">Home</RouterLink>
    <RouterLink class="routerItem" to="/hotel">Hotel</RouterLink>
    <RouterLink class="routerItem" to="/Attractions">Attractions</RouterLink>
    <RouterLink class="routerItem" to="/TainanFood">Food</RouterLink>
    <RouterLink class="routerItem" to="/Activity">Activity</RouterLink>
    <!-- <RouterLink class="routerItem" to="/Footer">Footer</RouterLink> -->
    <!-- <RouterLink class="routerItem" to="/Map">Map</RouterLink> -->
    <div class="search">
        <input type="text" placeholder="搜尋">
        <label></label>
        <button type="button" class="btn btn-dark">搜尋</button>
      </div>
    </div>


</template>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.headerArea{
  display: flex;
  justify-content: center;
  align-items: center;
  widows: 100%;
  height: 52%;
  background: rgb(192, 183, 183);
  
  
  .routerItem{
    color:rgb(27, 27, 26);
    font-size:24px;
    text-decoration: none;
    padding: 20px;
    // margin-right: 20px;
    
    &:hover{
      color: darkgoldenrod;
      background-color: azure;
  }
  
}

img{
  margin-right: 20px;
  
}

.search{
margin-left: 100px;
margin-right: -300px;

input{
  position: relative;
  width: 200px;
  height: 30px;
  padding: 0 10px;
  // border-radius: 10px;
  font-size: 1.2rem;
  border: none;
  margin-right: 10px;
  border-bottom: 2px solid #000000;
  background-color: transparent;
  // display: none;
  color: rgb(27, 27, 26);
  &:focus{
      outline: none;
  
}
&::placeholder {
  font-weight: bold;
  // opacity: 0.5;
  color: rgb(0, 0, 0);
}
}
button{
  width: 50px;
  height: 33px;
  border-radius: 10px;
  margin-bottom: 5px;
  // border: none;
//   &:focus{
//       outline: 2px solid #9fd1fa;
// }
}
}
}
</style>