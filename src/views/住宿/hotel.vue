<script>
export default {
    data() {
        return {
            selectedCity: '',
            selectedPrice: '',
            cities: [],
            prices: [],
            tainanArr: [],
            currentPage: 1, // 當前的頁數
            pageSize: 9, // 一頁最多 9 張
            photos: [
                "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1611214904/blog/hjyutoscnzdeknfmhwfp.jpg",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/08/b7/8a/hotel-exterior.jpg?w=1200&h=-1&s=1",
                "https://media.vogue.com.tw/photos/5db7e21022a7000008dc94f0/master/w_1600%2Cc_limit/2019091245213073.jpg",
                "https://www.gomag.com.tw/upload/1552464887-2091549859_l.jpg",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/139851546.jpg?k=e83384474084d3dcfc47b0adb2d536efa6dd975932014a67648d1ae416afb0cb&o=&hp=1",
                "https://today-obs.line-scdn.net/0hZM2AkUkeBWIPOBOMDVN6NStuBg08VBZhaw5UcFhdPTwiD0M9O18dBnhvXFV2CkIyM1YeACo5WFBnCRdmN1xNB3g/w644",
                "https://www.niusnews.com/upload/posts/posts_image3_101106_1616996992.jpg",
                "https://storage.googleapis.com/smiletaiwan-cms-cwg-tw/article/202010/article-5f8437cee7bd7.jpg",
                "https://img.asiayo.com/img/landlord/B005495/desc_SnNFWHSJaPraLy.jpeg"
            ],
            
        };
    },
    mounted() {
        fetch('./public/檔案/hotel_C_f.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.tainanArr = data.XML_Head.Infos.Info.filter((item) =>
                    item.Add.includes('臺南')
                );
                this.cities = [...new Set(this.tainanArr.map((item) => item.Town))];
                this.prices = [...new Set(this.tainanArr.map((item) => item.LowestPrice))];
            });
    },
    methods: {
        cityChanged() {
            this.selectedCity = this.$refs.selectCity.value;
        },
        priceChanged() {
            const city = this.selectedCity;
            const price = this.selectedPrice;
            if (price === "a") {
                for (let j = 0; j < this.tainanArr.length; j++) {
                    let price1 = this.tainanArr[j].LowestPrice;
                    if (this.tainanArr[j].Town === city && price1 < 4000) {
                        console.log(this.tainanArr[j]);
                    }
                }
            } else if (price === "b") {
                for (let j = 0; j < this.tainanArr.length; j++) {
                    let price1 = this.tainanArr[j].LowestPrice;
                    if (this.tainanArr[j].Town === city && price1 >= 4000 && price1 <= 7000) {
                        console.log(this.tainanArr[j]);
                    }
                }
            } else if (price === "c") {
                for (let j = 0; j < this.tainanArr.length; j++) {
                    let price1 = this.tainanArr[j].LowestPrice;
                    if (this.tainanArr[j].Town === city && price1 > 7000) {
                        console.log(this.tainanArr[j]);
                    }
                }
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() { // 首先檢查當前頁碼 (this.currentPage) 是否小於總頁數 (this.totalPages)。
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        // getRandomPhoto() {
        //     // 使用 Math.random() 生成一個隨機索引
        //     let randomIndex = Math.floor(Math.random() * this.photos.length);   
            
        //     // 返回隨機照片的網址
        //     return this.photos[randomIndex];

        // },
    },
    computed: { // 1.監聽多變數觸發事件 2.會產生一個值 3.只要變數沒動，就不會再 run 一次
        filteredHotels() {
            const city = this.selectedCity;
            const price = this.selectedPrice;
            let filtered = this.tainanArr; // 直接返回所有臺南的飯店資料

            if (city) { // 如果選擇了 "區"，則進行區域篩選
                if (price === "a") {
                    filtered = filtered.filter(item => item.Town === city && item.LowestPrice < 4000);
                } else if (price === "b") {
                    filtered = filtered.filter(item => item.Town === city && item.LowestPrice >= 4000 && item.LowestPrice <= 7000);
                } else if (price === "c") {
                    filtered = filtered.filter(item => item.Town === city && item.LowestPrice > 7000);
                }
            } else { // 如果未選擇 "區"，則返回所有臺南的飯店資料
                if (price === "a") {
                    filtered = filtered.filter(item => item.LowestPrice < 4000);
                } else if (price === "b") {
                    filtered = filtered.filter(item => item.LowestPrice >= 4000 && item.LowestPrice <= 7000);
                } else if (price === "c") {
                    filtered = filtered.filter(item => item.LowestPrice > 7000);
                }
            }

            return filtered;
        },
        totalPages() { // 計算屬性的作用是計算分頁後的總頁數，以便在分頁功能中使用。
            return Math.ceil(this.filteredHotels.length / this.pageSize); // Math.ceil() 是 JavaScript 中的一個內建函式，用於取得大於或等於給定數字的最小整數。它將傳入的數字向上取整為最接近的整數。使用 Math.ceil() 函式將這個除法結果向上取整，確保總頁數總是一個大於等於實際計算值的整數。
        },
        paginatedHotels() {
            const start = (this.currentPage - 1) * this.pageSize; // 它計算了當前頁面上的飯店資料的起始索引，即 start。這是通過將當前頁碼減一乘以每頁顯示的飯店數量來實現的。
            const end = start + this.pageSize; // 它計算了當前頁面上的飯店資料的結束索引，即 end。這是將起始索引 start 加上每頁顯示的飯店數量來實現的。
            return this.filteredHotels.slice(start, end); // 它使用 slice() 方法從篩選後的飯店資料陣列 filteredHotels 中取出從 start 到 end 範圍的飯店資料，然後將這個範圍的資料作為結果返回。.slice(start, end) 是 JavaScript 陣列的一個方法，用於從陣列中選擇一個子集，並返回一個新的陣列，包含從開始索引 (start) 到結束索引 (end) 之間的元素（但不包括結束索引的元素）。
        },
    },
}
</script>

<template>
    <div class="pictureArea">
        <img src="https://image.pandafishstory.com/content/%E5%8F%B0%E5%8D%97%E9%A3%AF%E5%BA%97%E6%8E%A8%E8%96%A6.jpg"
            alt="台南飯店">
    </div>

    <div class="searchArea">
        <select v-model="selectedCity" @change="cityChanged" ref="selectCity">
            <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
        </select>

        <select v-model="selectedPrice" @change="priceChanged">
            <option value="">請選擇價格</option>
            <option value="a">4000以下</option>
            <option value="b">4000~7000</option>
            <option value="c">7000以上</option>
        </select>
    </div>

    <div class="bootstrapArea">
        <div v-for="(item, index) in paginatedHotels" :key="index" class="card">
            <div class="row g-0 flex-row">
                <div class="col-md-5">
                    <img :src="this.photos[index]" class="img-fluid rounded-start" alt="飯店">
                </div>
                <div class="col-md-7">
                    <div class="card-body">
                        <p class="card-text"> 飯店名稱：{{ item.Name }} </p>
                        <p class="card-text"> 地址：{{ item.Add }} </p>
                        <p class="card-text"> 最優惠價格：{{ item.LowestPrice }} </p>
                        <p class="card-text"> 電話：{{ item.Tel }} </p>
                        <p class="card-text"> {{ item.Parkinginfo }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <span>{{ currentPage }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>


    <div class="footerArea"></div>

</template>

<style scoped lang="scss">
.pictureArea {
    display: flex;
    width: 100%;
    height: 60dvh;
    // border: 1px solid black;
    justify-content: center;
    align-items: center;

    img {
        width: 823px;
        height: 438px;
    }
}

.searchArea {
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

.bootstrapArea {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    padding: 0% 16%;

    .row {
        width: 100%;
        height: 100%;
        border: 1px solid black;
        margin: 0;
        margin-top: 3%;
    }

    p {
        font-size: 19px;
    }
}

.pagination {
    display: flex;
    width: 100%;
    height: 15dvh;
    border: 1px solid black;
    justify-content: center;
    align-items: center;

    button {
        width: 6rem;
        height: 3rem;
        border-radius: 6px;
    }

    span {
        margin: 0% 3%;
        font-size: 3rem;
    }
}

.footerArea {
    width: 100%;
    height: 15dvh;
    border: 1px solid black;
    background: rgb(140, 128, 128);
}


</style>