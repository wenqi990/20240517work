<script>

export default{
    data(){
    return{
      selectedDistrict: '', 
      selectedAddress: '', 
      selectedName: '', 
      districts: [], 
      addresses: [], 
      names: [], 
      tainanArr: [],
      selectedShop: null,
      shopImages: {
        
        '和興冰果部': '/imags/food/和興冰果部.jpg',
        '牧大畜牧場': '/imags/food/牧大畜牧場.jpg',
        
      }
            };
    },
    computed: {
    // 根据选定的店家名称获取相应的图片路径
    selectedShopImage() {
      return process.env.BASE_URL + this.shopImages[this.selectedName] || '';
    }
  },
    mounted () {
      this.fetchFoodData();
      
    },
    methods: {
      fetchFoodData() {
        fetch('./public/檔案/shops_zh-tw.json')
        .then((res) => res.json()) 
        .then((data) => { 
          if (data && Array.isArray(data)) { 
            this.tainanArr = data; 
            this.districts = ['--請選擇--', ...new Set(data.map(item => item.district))];  
            this.updateDistrictData(this.selectedDistrict); 
            } else {
            console.error("Data is not defined or is not an array."); 
          }
        })
        .catch((error) => {
          console.error("Error fetching hotel data:", error); 
        });
        
    },
    updateDistrictData(district) {
      const filteredData = this.tainanArr.filter(item => item.district === district); 
      this.addresses = filteredData.map(item => item.address); 
      this.names = filteredData.map(item => item.name);
    },
    districtChanged() { 
      // 地區下拉式選單改變時的方法
      if (this.selectedDistrict === '--請選擇--') {
        // 如果選擇了預設值，清空地址和名稱的選擇
        this.selectedAddress = ''; 
        this.selectedName = '';
        this.selectedShop = null;
      } 
      this.updateDistrictData(this.selectedDistrict); // 更新地區相關資料
        },
    addressChanged() { 
      // 地址下拉式選單改變時的方法
      this.selectedAddress = this.$refs.selectAddress.value; // 更新選擇的地址
      this.selectedName = this.names[this.addresses.indexOf(this.selectedAddress)]; // 根據所選的地址更新所選的名稱
    },
    nameChanged() { 
      // 名稱下拉式選單改變時的方法
      this.selectedName = this.$refs.selectName.value; // 更新選擇的名稱
      this.selectedAddress = this.addresses[this.names.indexOf(this.selectedName)]; // 根據所選的名稱更新所選的地址
      this.selectedShop = this.tainanArr.find(item => item.name === this.selectedName);
    },
    
    }
  }
    
    </script>

<template>
    <div class="atama">
      <img src="/public/imags/食物/food.jpg" alt="" width="100%" height="500px">
    </div>
    
    <div>
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
  
    <div class="shop">
      <div v-if="selectedShop" class="shop-item">
        <img :src="`/imags/food/${selectedShopImage}`" alt="" style="max-width: 200px;">
      <p>店名: {{ selectedShop.name }}</p>
      <p>概括: {{ selectedShop.summary }}</p>
      <p>介紹: {{ selectedShop.introduction }}</p>
      <p>營業時間: {{ selectedShop.open_time }}</p>
      <p>訂餐電話: {{ selectedShop.tel }}</p>
      </div>
    </div>
    
</template>

<style scoped lang="scss">
.shop-image {
  text-align: center; /* 让图像居中显示 */
  margin-bottom: 20px; /* 添加一些底部间距 */
}
</style>