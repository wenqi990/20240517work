<script setup>
import { onMounted, ref } from "vue";

const pictures = ref([
  { image: "/public/imags/活動/1.jpg", link: "https://www.youtube.com/watch?v=6RBYmR5GesQ&ab_channel=%E6%BB%BE%E7%9F%B3%E5%94%B1%E7%89%87ROCKRECORDS", alt: "Image 1" },
  { image: "/public/imags/活動/2.webp", link: "https://www.youtube.com/watch?v=NjdqQyC7Rkc&ab_channel=MilkMilkxi", alt: "Image 2" },
  { image: "/public/imags/活動/3.jpg", link: "https://www.youtube.com/shorts/n9B-ctjfob4", alt: "Image 3" }
]);

const links = ref([

{ link: "https://www.tainan.gov.tw/News_Content.aspx?n=13370&s=8636970"},
{ link: "https://www.twtainan.net/zh-tw/event/activitydetail/6447"},
{ link: "https://www.twtainan.net/zh-tw/event/activitydetail/6435"},
{ link: "https://www.twtainan.net/zh-tw/event/activitydetail/6428"} ,
{ link: "https://dragonboat.tainan.gov.tw/"},
{ link: "https://www.twtainan.net/zh-tw/event/activitydetail/6348"},

]);

const selectedImage = ref("");
const selectedLink = ref("");
const selectedAlt = ref("");

const setRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * pictures.value.length);
  selectedImage.value = pictures.value[randomIndex].image;
  selectedLink.value = pictures.value[randomIndex].link;
  selectedAlt.value = pictures.value[randomIndex].alt;
};

onMounted(setRandomImage);

const images = ref([
  { image: "/public/imags/活動/4.jpg", alt: "Image 1" },
  { image: "/public/imags/活動/5.jpg", alt: "Image 2" },
  { image: "/public/imags/活動/6.jpg", alt: "Image 3" } ,
  { image: "/public/imags/活動/7.jpg", alt: "Image 4" },
  { image: "/public/imags/活動/8.webp", alt: "Image 5" },
  { image: "/public/imags/活動/9.jpg", alt: "Image 6" }
]);

let events = ref(null);
let searchKeyword = ref("");
let searchResults = ref([]);
let showNoResults = ref(false);

onMounted(async () => {
  let response = await fetch("/public/檔案/event_zh-tw.json");
  let data = await response.json();
  events.value = data;
});

const searchEvent = () => {
  searchResults.value = events.value.filter(event =>
    event.title.toLowerCase().includes(searchKeyword.value.trim().toLowerCase())
  );
  showNoResults.value = searchResults.value.length === 0;
};

const handleEnterKey = (event) => {
  if (event.key === 'Enter') searchEvent();
};

const handleBackspaceKey = (event) => {
  if (event.key === 'Backspace') {
    searchResults.value = [];
    showNoResults.value = false;
  }
};

</script>

<template>
  <div class="header">
    <img src="/public/imags/活動/123.jpg" alt="" width="100%" height="50%">
  </div>

  <div class="container">
    <div class="inputColumn">

      <input  type="text" v-model="searchKeyword" placeholder="輸入標題關鍵字" @keyup.enter="handleEnterKey" @keyup="handleBackspaceKey">
        
      <div class="search-results">
        <article v-if="searchResults.length > 0">
        
          <div class="card1" v-for="(result, index) in searchResults" :key="index">
            <img :src="result.image" class="card-img-top" :alt="result.alt">
            <div class="card-body">
              <h5 class="card-title">{{ result.title }}</h5>
              <p class="card-text">{{ result.post_time }}</p>
              <a :href="links[index].link" class="btn btn-outline-info">Go somewhere</a>
            </div>
          </div>
        </article>
      
        <p v-show="showNoResults">沒有符合搜尋條件的結果。</p> 
      </div>
    </div>

  
    <section class="section">

      <a :href="selectedLink" target="_blank" class="random-image-container">
    <img class="ad_img" :src="selectedImage" :alt="selectedAlt" title="無法關閉的廣告廣告"/>
  </a>
      
      <div class="container2">
        <h2>活動資訊</h2>
        <div class="card__container">
        
          <div class="card__article" v-for="(item, index) in events" :key="index">
            
            <img :src="images[index % images.length].image" class="card__img" :alt="images[index % images.length].alt">
            <div class="card__data">
              <span class="card__description">{{ item.post_time }}</span>
              <h2 class="card__title">{{ item.title }}</h2>
              <a :href="links[index].link" class="card__button">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>



</template>


<style>

:root {
  /*========== Colors ==========*/
  /*Color mode HSL(hue, saturation, lightness)*/
  /* HSL(色相角度但不加單位0~360, 色彩飽和度0~100%, 色彩亮度0~100%)，色相 （Hue）、亮度/明度（Lightness）、飽和度（Saturation） */
  --first-color: hsl(82, 60%, 28%);
  --title-color: hsl(0, 0%, 15%);
  --text-color: hsl(0, 0%, 35%);
  --container-color: hsl(0, 0%, 100%);

  /*========== Font and typography ==========*/
  /*.5rem = 8px | 1rem = 16px ...*/
  --h2-font-size: 1.25rem;
  --small-font-size: .813rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header {
  width: 100%;
  /* position: relative; */
}

.container {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}

.inputColumn {
  width: 30%;
  
  input {
    margin-top: 2rem;
    margin-left: -10rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 1rem;
    &:focus{
      outline: 2px solid #9fd1fa;
}
  }
}

.search-results {
  margin-top: 1rem;
  margin-left: -8.5rem;
  

}


  .card-body{
    position: relative;
    width: 202px;
    margin-left: -24px;
    margin-top: -15px;
    padding: 18px 2px;
    background-color: rgb(255, 255, 255);
    z-index: 5;
    border-radius: 0 0 3% 3%;
    text-align: center;
      h5{
        padding-bottom: 5px;
        font-weight: bold;
    }
  }



/*=============== BASE ===============*/

body {
  color: var(--text-color);
  background-color: rgb(242, 242, 242);
}



img {
  display: block;
  max-width: 100%;
  height: auto;
}

/*=============== CARD ===============*/


.section{
position: relative;
margin-block: 45px 0;
margin-inline: 90px 0;
margin-bottom: 100px;
.random-image-container {
  
  position: absolute;
  /* transform: translateY(-550px); */
  left: 45px;
  z-index: 1;
  /* width: 120px;
  height: 600px; */
  margin-left: -336.5px;
  display: block;
  margin-top: 50px;
}
.ad_img {
  
  display: inline-block;
  width: 200px;
  height: 600px;
  object-fit: cover;
}
.container2 {
    flex-wrap: wrap; 
    display: grid; 
    place-items: center;
    
    h2{
    text-align: center;
    margin: 2rem 0;
    font-weight: bold;
    
  }
  .card__container {
    display: flex;
    gap: 3.5rem;
    flex-wrap: wrap;
    width: 1100px;
    /* grid-template-columns: 200px 200px 200px; */
    
  .card__article {
    position: relative;
    overflow: hidden;
    
    

      /* Naming animations in hover */
      /* 指定了當滑鼠懸停時.card__data的樣式 */
      &:hover .card__data {
        animation: show-data 1s forwards;
        opacity: 1;
        transition: opacity .3s;
      }

      /* 白色小卡動時，底部不會消失 */
      &:hover {
        animation: remove-overflow 2s forwards;
        }

      /* 鼠標離開時，小卡片收起來的時候底部不會消失 */
      &:not(:hover) {
            animation: show-overflow 2s forwards;
          }
          
      /* 隱藏頂部 */
      &:not(:hover) .card__data {
          animation: remove-data 1s forwards;
          }

          .card__img {
          width: 328px;
          border-radius: 1.5rem;
          /* mask: radial-gradient(30px at 30px 30px,#0000 98%,#000) -30px -30px; */
          /* border: 0.5rem solid white; */
        }

        .card__data {
          width: 280px;
          background-color: var(--container-color);
          padding: 1.5rem 2rem;
          box-shadow: 0 8px 24px hsla(0, 0%, 0%, .15);
          border-radius: 1rem;
          position: absolute;
          /* bottom: -9rem; */
          left: 0;
          right: 0;
          margin-inline: auto;
          opacity: 0;
          /* 指定過渡效果的延遲時間和持續時間 */
          transition: opacity 1s 1s;
          background-color: white;
          .card__description {
          display: block;
          font-size: var(--small-font-size);
        }

        .card__title {
          font-size: var(--h2-font-size);
          color: var(--title-color);
          margin-bottom: .75rem;
        }

          .card__button {
            text-decoration: none;
            font-size: var(--small-font-size);
            font-weight: 500 px;
            color: var(--first-color);

              &:hover {
              text-decoration: underline;
            }
          }
        }
        }
    }
}
}
/* Card animation */
@keyframes show-data {
  50% {
    transform: translateY(-12rem);
  }
  100% {
    transform: translateY(-9rem);
  }
}

 /* 結束動畫時，卡片底部露出外面 */
@keyframes remove-overflow {
  to {
    overflow: initial;
  }
}

@keyframes remove-data {
  0% {
    transform: translateY(-9rem);
  }
  50% {
    transform: translateY(-12rem);
  }
  100% {
    transform: translateY(.5rem);
  }
}

@keyframes show-overflow {
  0% {
    overflow: initial;
    pointer-events: none;
  }
  50% {
    overflow: hidden;
  }
}

</style>
