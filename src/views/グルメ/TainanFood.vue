<script>
import Footer from '../../views/Footer.vue';
export default{
    data(){
    return{
      selectedDistrict: '', 
      selectedAddress: '', 
      selectedName: '', 
      districts: ['--請選擇--'], 
      addresses: [], 
      names: [], 
      tainanArr: [],
      selectedShop: null,
      images: [
        { src: "/public/imags/食物/1.png", alt: "Image 1" },
        { src: "/public/imags/食物/2.png", alt: "Image 1" },
        { src: "/public/imags/食物/3.png", alt: "Image 1" },
        { src: "/public/imags/食物/4.png", alt: "Image 1" },
        { src: "/public/imags/食物/5.png", alt: "Image 1" },
        { src: "/public/imags/食物/6.png", alt: "Image 1" },
        { src: "/public/imags/食物/7.png", alt: "Image 1" },
        { src: "/public/imags/食物/8.png", alt: "Image 1" },
        { src: "/public/imags/食物/9.png", alt: "Image 1" },
        { src: "/public/imags/食物/91.png", alt: "Image 1" },
        // Add more images as needed
      ],
      currentIndex: 0,
      intervalId: null,
          };
    },
    computed: {
        selectedShopImage() {
            if (this.selectedShop) {
                return `/public/imags/食物/${this.selectedShop.name}.jpg`;
            } else {
                return '/public/imags/貓.gif';
            }
        }
    },
    mounted () {
      this.fetchFoodData();
      this.startCarousel();
    },
    methods: {
      fetchFoodData() {
        fetch('./public/檔案/shops_zh-tw.json')
        .then((res) => res.json()) 
        .then((data) => { 
          if (data && Array.isArray(data)) { 
            this.tainanArr = data; 
            this.districts = ['--請選擇--', ...new Set(data.map((item) => item.district))];  
            this.updateDistrictData(this.selectedDistrict); 
            this.prepareShopInfo();
            } else {
            console.error("Data is not defined or is not an array."); 
          }
        })
        .catch((error) => {
          console.error("Error fetching food data:", error); 
        });
        
    },
    updateDistrictData(district) {
      const filteredData = this.tainanArr.filter((item) => item.district === district); 
      this.addresses = filteredData.map((item) => item.address); 
      this.names = filteredData.map((item) => item.name);
    },
    districtChanged() { 
      // 地區下拉式選單改變時的方法
      if (this.selectedDistrict === '--請選擇--') {
        this.selectedAddress = ''; 
        this.selectedName = '';
        this.selectedShop = null;
      } else{
      this.updateDistrictData(this.selectedDistrict); 
        this.selectedAddress = ''; 
        this.selectedName = '';
        this.selectedShop = null;
        }
      },
    addressChanged() { 
      // 地址下拉式選單改變時的方法
      this.selectedAddress = this.$refs.selectAddress.value; // 更新選擇的地址
      this.selectedName = this.names[this.addresses.indexOf(this.selectedAddress)];
      this.selectedShop = this.tainanArr.find((item) => item.address === this.selectedAddress);
       // 根據所選的地址更新所選的名稱
    },
    nameChanged() { 
      // 名稱下拉式選單改變時的方法
      this.selectedName = this.$refs.selectName.value; // 更新選擇的名稱
      this.selectedAddress = this.addresses[this.names.indexOf(this.selectedName)]; // 根據所選的名稱更新所選的地址
      this.selectedShop = this.tainanArr.find((item) => item.name === this.selectedName);
    },
    googleMapLink(address) {
        // 使用店家的地址来拼接Google地图的URL
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    },
    startCarousel() {
      this.intervalId = setInterval(this.nextImage, 1000); // 2 seconds interval
    },
    stopCarousel() {
      clearInterval(this.intervalId);
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    
  },
  beforeDestroy() {
    this.stopCarousel();
        },
        components: { Footer },
        setup(){
        return {}
    }
    }
    </script>

<template>
    <div class="carousel">
    <img v-for="(image, index) in images" :src="image.src" :alt="image.alt" :key="index" :class="{ active: index === currentIndex }">
  </div>
    <div class="atama">
      <img src="/public/imags/食物/tainanfood.jpg" alt="" width="60%" height="500px" >
    </div>
    
    <div class="dataArea">
      <select v-model="selectedDistrict" @change="districtChanged" ref="selectDistrict"> 
      <option v-for="district in districts" :value="district">{{ district }}</option>
    </select>
    <select v-model="selectedAddress" @change="addressChanged" ref="selectAddress"> 
      <option v-for="address in addresses" :value="address">{{ address }}</option>
    </select>
    <select v-model="selectedName" @change="nameChanged" ref="selectName"> 
      <option v-for="name in names" :value="name">{{ name }}</option>
    </select>
  </div>
  
  <div class="card">
    <div class="card-content font-effect-fire">
  <div v-if="selectedShop" class="shop-item">
    <p v-if="selectedShop">店名: {{ selectedShop.name }}</p>
    <p v-if="selectedShop">概括: {{ selectedShop.summary }}</p>
    <p v-if="selectedShop">介紹: {{ selectedShop.introduction }}</p>
    <p v-if="selectedShop">營業時間: {{ selectedShop.open_time }}</p>
    <p v-if="selectedShop">
      <span class="material-symbols-outlined" @click="makeCall">call</span>訂餐電話: <span>{{ selectedShop.tel }}</span>
    </p>
    <p v-if="selectedShop">
      <a :href="googleMapLink(selectedShop.address)" target="_blank">Are U Ready?</a>
    </p>
  </div>
</div>
    <div class="card-image">
      <img :src="selectedShopImage" alt="你渴望力量嗎">
  </div>
    </div>
    <!-- <div class="asidesu"></div> -->

    <div class="topJpg">
        <a class="topImg" href="#">
            <img src="/public/imags/首頁/top.png" style="width: 50px;height: 50px;">
        </a>
        <!-- 回底部按鈕 -->
        <!-- window.scrollTo(水平位置,垂直位置) 是一個 JavaScript 函數，用於控制流覽器視窗的滾動位置。 -->
        <!-- return false  => 阻止默認行為的發生(原本的href="#" 是他的默認行為(為true) -->
        <a class="bottomImg" href="#" onclick="window.scrollTo(0, document.body.scrollHeight); return false;">
            <img src="/public/imags/首頁/bottom.png" style="width: 50px;height: 50px;">
        </a>
    </div>

    <Footer></Footer>
</template>

<style scoped lang="scss">

.topJpg{
    width: 50px;
    height: 110px;
    position: relative;
    position: fixed;
    right: 1px;
    bottom: 10px;
    z-index: 999;

    .topImg{
        position: absolute;
        top:0;
        right:0;
        transition: 0.5s;

        // 鼠標移到按鈕時放大
        &:hover{
            scale: 1.05;
        }
        // 鼠標移到按鈕時縮小
        &:active{
            scale: 0.95;
        }

    }

    .bottomImg{
        position: absolute;
        top:55px;
        right: 0;
        transition: 0.2s;

        // 鼠標移到按鈕時放大
        &:hover{
            scale: 1.05;
        }
        // 鼠標移到按鈕時縮小
        &:active{
            scale: 0.95;
        }
    }

}

.carousel {
  display: flex;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.carousel img {
  margin: 0 10px; /* 调整图像之间的间距 */
  width: 100px; /* 图片宽度 */
  height: auto; /* 高度自动调整 */
  transition: transform 0.5s ease-in-out; /* 添加过渡效果 */
  background-color: transparent;
}

.carousel img.active {
  transform: scale(1.2); /* 放大当前图像 */
  opacity: 0.8; /* 降低不透明度 */
}

.atama{
  
  display: flex;
    width: 100%;
    height: 60dvh;
    justify-content: center;
    align-items: center;
    
    
    img {
        width: 823px;
        height: 438px;
    }
}

.atama::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background-image: url('/public/imags/食物/pexels-padrinan-19670.jpg'); /* 背景图片路径 */
    background-size: cover;
    background-position: center;
    opacity: 1.5; /* 调整透明度以达到不完全覆盖的效果 */
    z-index: -1; /* 确保背景图在下方 */
}

.dataArea{
  display: flex;
    width: 100%;
    height: 6dvh;
    // border: 1px solid black;
    justify-content: center;
    align-items: center;

    select {
        margin-left: 1%;
    }
}
.card {
  display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 5% 16%;
    
    
  }

  .card::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('/public/imags/食物/uploadFile_1464598688203.jpg'); /* 背景图片路径 */
    background-size: cover;
    background-position: center;
    opacity: 0.5; /* 调整透明度以达到不完全覆盖的效果 */
    z-index: 0;
  }
.card-content {
    position: relative;
    z-index: 2; 
    
}
.card-image {
  flex: 1;
  z-index: 2;
}

.card-image img {
        width: 823px;
        height: 438px;
        // border: 1px solid black;
        margin: 0;
        margin-top: 3%;
        z-index: 2;
        transition: transform 0.3s ease;
    }
.card-image img:hover {
  transform: scale(1.1); /* 放大 10% */
    }
.asidesu {
  position: relative;
  bottom: 0;
  width: 100%;
  height: 15dvh;
  background: rgb(140, 128, 128);
    }
.font-effect-fire {
  font-family: "Sofia", sans-serif;
  font-size: 25px;
    }
</style>