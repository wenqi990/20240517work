<script>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// options API 寫法
export default{
    // components => 放能在 <template> 中當標籤使用的元件或方法
    components:{
        RouterView,
    },
    setup() {
    const keyword = ref('');
    const router = useRouter();

    const search = () => {
      switch (keyword.value.trim()) {
        case '美食':
          scrollToBlock('block1');
          break;
        case '景點':
          scrollToBlock('block2');
          break;
        case '住宿':
          scrollToBlock('block3');
          break;
        default:
          // 其他情況的處理，或者給用戶提供反饋
          console.log("找不到相應區塊");
          alert("找不到相關資料");
          break;
      }
    };

    const scrollToBlock = (blockId) => {
      const block = document.getElementById(blockId);
      if (block) {
        block.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return {
      keyword,
      search
    };
  }
}
</script>

<template>

    <div class="headerArea">
      <img src="/public/imags/活動/location.png" alt="" width="50px">
    <RouterLink class="routerItem" to="/">Home</RouterLink>
    <RouterLink class="routerItem" to="/hotel">住宿</RouterLink>
    <RouterLink class="routerItem" to="/Attractions">景點</RouterLink>
    <RouterLink class="routerItem" to="/TainanFood">食物</RouterLink>
    <RouterLink class="routerItem" to="/Activity">活動</RouterLink>
    <!-- <RouterLink class="routerItem" to="/Footer">Footer</RouterLink> -->
    <!-- <RouterLink class="routerItem" to="/Map">Map</RouterLink> -->
    <div class="search">
        <input type="text" placeholder="搜尋" v-model="keyword">
        <label></label>
        <button type="button" class="btn btn-dark"  @click="search">搜尋</button>
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