<script>
export default {
  data() {
    return {
      // 定義組件的資料
      selectedDistrict: '', // 選擇的地區
      selectedAddress: '', // 選擇的地址
      selectedName: '', // 選擇的名稱
      districts: [], // 所有地區的列表
      addresses: [], // 所有地址的列表
      names: [], // 所有名稱的列表
      tainanArr: [], // 從服務器獲取的台南景點資料
    };
  },
  mounted() { 
    // 在組件被加載後執行的方法
    this.fetchHotelData(); // 加載台南景點資料
  },
  methods: { 
    fetchHotelData() {  
      // 從服務器獲取台南景點資料的方法
      fetch('./public/檔案/attractions_zh-tw.json') // 發送獲取資料的請求
        .then((res) => res.json()) // 解析服務器的回應為 JSON 格式
        .then((data) => { 
          if (data && Array.isArray(data)) { // 確認獲取的資料是一個陣列
            this.tainanArr = data; // 將獲取的資料存儲到組件的資料中
            this.districts = ['--請選擇--', ...data.map(item => item.district)];  // 添加預設值到地區的下拉式選單中
            this.updateDistrictData(this.selectedDistrict); // 更新地區相關的資料
          } else {
            console.error("Data is not defined or is not an array."); // 如果獲取的資料不是陣列，輸出錯誤信息
          }
        })
        .catch((error) => {
          console.error("Error fetching hotel data:", error); // 如果獲取資料失敗，輸出錯誤信息
        });
    },
    updateDistrictData(district) {
      // 更新地區相關資料的方法
      const filteredData = this.tainanArr.filter(item => item.district === district); // 從台南景點資料中篩選出與選擇的地區相關的資料
      this.addresses = filteredData.map(item => item.address); // 更新地址列表
      this.names = filteredData.map(item => item.name); // 更新名稱列表

      // 去除重複的地區
      const uniqueDistricts = Array.from(new Set(this.districts)); // 使用 Set 將地區列表去重
      this.districts = uniqueDistricts; // 更新地區列表
    },
    districtChanged() { 
      // 地區下拉式選單改變時的方法
      if (this.selectedDistrict === '--請選擇--') {
        // 如果選擇了預設值，清空地址和名稱的選擇
        this.selectedAddress = ''; 
        this.selectedName = '';
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
    },
  },
};
</script>


<template>
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

  <div class="card" style="width: 18rem;">
  <img src="/public/imags/景點類圖片/南鯤鯓代天府.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</template>

<style scoped lang="scss"></style>
