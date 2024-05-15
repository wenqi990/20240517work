<script>
import Footer from '../../views/Footer.vue';

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
                "https://www.gomag.com.tw/upload/1552464887-2091549859_l.jpg",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/139851546.jpg?k=e83384474084d3dcfc47b0adb2d536efa6dd975932014a67648d1ae416afb0cb&o=&hp=1",
                "https://i0.wp.com/woohoteltw.com/wp-content/uploads/2024/03/3fbdf493742514e8e73d8fed9b27bb58.webp?resize=1009%2C672&ssl=1",
                "https://today-obs.line-scdn.net/0hZM2AkUkeBWIPOBOMDVN6NStuBg08VBZhaw5UcFhdPTwiD0M9O18dBnhvXFV2CkIyM1YeACo5WFBnCRdmN1xNB3g/w644",
                "https://www.niusnews.com/upload/posts/posts_image3_101106_1616996992.jpg",
                "https://storage.googleapis.com/smiletaiwan-cms-cwg-tw/article/202010/article-5f8437cee7bd7.jpg",
                "https://img.asiayo.com/img/landlord/B005495/desc_SnNFWHSJaPraLy.jpeg",
                "https://hips.hearstapps.com/hmg-prod/images/%E5%8F%B0%E5%8D%97%E7%B6%89%E6%BA%AA%E5%AE%89%E5%B9%B3%E9%A3%AF%E5%BA%97-%E6%88%BF%E8%99%9F303-%E6%B8%AF%E5%B2%B8-%E9%9B%99%E4%BA%BA%E6%88%BFs-658e5084c3eb1.jpg",
                "https://hips.hearstapps.com/hmg-prod/images/399279100-755793543234123-6516782647033679722-n-658e70c584db9.jpg?crop=1.00xw:0.668xh;0,0.299xh&resize=980:*"
            ],
            historyRecords: [], // 用於存儲歷史紀錄的數組
        };
    },
    mounted() { // 當 Vue 實例的 mounted() 方法被調用時，該組件的 DOM 元素已經被加載，並且可以進行 DOM 相關的操作，如獲取資料、設置計時器或者觸發事件等。
        fetch('./public/檔案/hotel_C_f.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.tainanArr = data.XML_Head.Infos.Info.filter((item) =>
                    item.Add.includes('臺南') // 表示對 data.XML_Head.Infos.Info 中的每個項目應用一個過濾器函數。對於每個項目 item，箭頭函數 => 後面的代碼 item.Add.includes('臺南') 表示檢查 item 的 Add 屬性是否包含字符串 '臺南'。如果是，則保留該項目；如果不是，則將其從結果中去除。
                );
                // new Set() 是創建 Set 物件的語法。例如，new Set([1, 2, 3, 3, 4, 4, 5]) 會創建一個包含 [1, 2, 3, 4, 5] 的 Set 物件，自動去除了重複的值。
                // map 方法，該方法會對陣列中的每個元素都調用一次指定的函式，並將每次呼叫的結果組成一個新的陣列返回。
                // this.tainanArr 陣列中的每個元素都取出 Town 屬性的值，並將這些值組成一個新的陣列返回。
                this.cities = [...new Set(this.tainanArr.map((item) => item.Town))];
                this.prices = [...new Set(this.tainanArr.map((item) => item.LowestPrice))];
            });
    },
    methods: {
        cityChanged() {
            this.selectedCity = this.$refs.selectCity.value; // 這個元素或組件被設置了 ref="selectCity"，所以當程式碼執行時，this.$refs.selectCity 就會返回這個元素或組件，從而可以使用 .value 來取得它的值。
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
        addToHistory(item) {
            if (this.historyRecords.length < 5) {
                this.historyRecords.push(item);
            } else {
                // 如果歷史紀錄已滿，則刪除第一個卡片
                this.historyRecords.shift();
                // 將新的卡片添加到最後
                this.historyRecords.push(item);
            }
        },
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
    components: { Footer },
    setup() {
        return {}
    }
}
</script>

<template>
    <!-- 卡片後方的背景 -->
    <div class="bg">
        <img src="/public/imags/Hotel img/艾爾登住宿.jpg">
    </div>

    <div class="pictureArea">
        <img src="https://d3f9k0n15ckvhe.cloudfront.net/wp-content/uploads/2021/10/forest-lake_1440x520.png" alt="湖泊">
    </div>

    <!-- 篩選欄位 -->
    <div class="searchArea">
        <!-- v-model 指令將選擇的城市與 selectedCity 變數進行雙向綁定，當選擇改變時，@change 事件會觸發 cityChanged 方法。 -->
        <!-- @符號是v-on指令的縮寫形式，用於監聽DOM事件並執行對應的事件處理函數。 -->
        <select v-model="selectedCity" @change="cityChanged" ref="selectCity">
            <!-- v-for="city in cities"：用於在模板中遍歷一個數據陣列（這裡是cities），對於cities陣列中的每個元素，Vue.js會生成一個<option>元素。 -->
            <!-- 使用 v-for 遍歷一個陣列時，應該為每個循環中的元素提供一個唯一的 key 值，這樣 Vue.js 才能正確地跟踪每個元素的變化、移動和更新。這就是 :key 屬性的作用，它確保在 DOM 中的每個列表元素都具有唯一的標識符，從而幫助 Vue.js 更有效地更新 DOM。 -->
            <!-- : 是一種簡寫方式，用來表示 v-bind 屬性。 -->
            <!-- 綁定value屬性的動態值，用於設置每個<option>元素的值。在下拉選單中，選中某個選項時，其對應的值就是city中的元素值。 -->
            <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
        </select>

        <select v-model="selectedPrice" @change="priceChanged">
            <option value="">請選擇價格</option>
            <option value="a">4000以下</option>
            <option value="b">4000~7000</option>
            <option value="c">7000以上</option>
        </select>
    </div>

    <!-- bootstrap的水平卡片 -->
    <div class="bootstrapArea">
        <!-- 用於遍歷 paginatedHotels 陣列中的每一個元素，並生成相應的 HTML 元素。item 是當前遍歷的元素，index 是該元素在陣列中的索引。 -->
        <!-- 當卡片被點擊時觸發的事件，調用了 addToHistory 方法，將點擊的酒店信息添加到歷史紀錄中。 -->
        <div v-for="(item, index) in paginatedHotels" :key="index" class="card" @click="addToHistory(item)">
            <div class="row g-0 flex-row">
                <div class="col-md-5">
                    <!-- @click="showHotelDetails(item)" 是一個 Vue.js 中的事件監聽器，它會在使用者點擊卡片中的圖片時觸發 showHotelDetails 方法。這個方法用於顯示酒店的詳細信息，並且以 item（即當前遍歷的酒店項目）作為參數傳遞。 -->
                    <img :src="this.photos[index]" class="img-fluid rounded-start" alt="飯店"
                        @click="showHotelDetails(item)">
                </div>
                <div class="col-md-7">
                    <div class="card-body">
                        <p class="card-text"> 飯店名稱：{{ item.Name }} </p>
                        <p class="card-text"> 地址：{{ item.Add }} </p>
                        <p class="card-text"> 最優惠價格：{{ item.LowestPrice }} </p>
                        <p class="card-text"> 電話：{{ item.Tel }} </p>
                        <p class="card-text"> {{ item.Parkinginfo }} </p>
                        <p class="card-text"> 電子郵件：{{ item.IndustryEmail }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 上一頁 下一頁 -->
    <div class="pagination">
        <!-- :disabled="currentPage === 1" 用於禁用按鈕，如果當前頁碼等於 1，則此按鈕將被禁用。 -->
        <!-- 與 == 運算符相比，=== 運算符不會進行類型轉換。這意味著如果兩個操作數的類型不同，即使它們的值相同，=== 運算符也會返回 false。這使得 === 運算符更加嚴格和可預測，並且在進行比較時更安全。 -->
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <span>{{ currentPage }}</span>
        <!-- :disabled="currentPage === totalPages" 用於禁用按鈕，如果當前頁碼等於總頁數，則此按鈕將被禁用。 -->
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>

    <!-- 換頁線 -->
    <div class="lineArea"></div>

    <h1>歷史紀錄</h1>

    <!-- 歷史紀錄 -->
    <div class="wrapperArea">
        <!-- v-for="(item, index) in historyRecords"：用於遍歷 historyRecords 陣列中的每一個元素。item 是當前遍歷的元素，index 是該元素在陣列中的索引。 -->
        <div v-for="(item, index) in historyRecords" :key="index" class="card">
            <!-- :src 屬性使用了動態綁定，根據 index 從 photos 陣列中獲取圖片的 URL。:alt 屬性也是動態綁定，它設置了圖片的替代文本，通常是該圖片的描述或名稱。 -->
            <img :src="this.photos[index]" class="card-img-top" :alt="item.Name">
            <div class="card-body">
                <p class="card-text">{{ item.Name }}</p>
            </div>
        </div>
    </div>

    <!-- <div class="footerArea"></div> -->

    <Footer></Footer>
</template>

<style scoped lang="scss">
.pictureArea {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
    }
}

.searchArea {
    margin-top: 20px;
    display: flex;
    width: 100%;
    height: 9dvh;
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
    justify-content: center;
    align-items: center;
    padding: 0% 16%;

    .flex-row {
        //卡片的外框
        width: 100%;
        height: 100%;
        margin: 0;
        margin-top: 3%;
        border-radius: 6px;
        background: rgba(0, 0, 0, 0.789);
        z-index: 1;
        transition: 0.3s linear; // 動畫時間變成線性成長

        &:hover {
            scale: 1.1;
        }
    }




    p {
        // 卡片裡面的文字
        font-size: 16px;
        color: white;
    }

    .img-fluid {
        // 照片的大小
        width: 100%;
        height: 100%;
    }

    .card {
        border: none;
        background: rgba(255, 255, 255, 0);
    }
}

.pagination {
    display: flex;
    width: 100%;
    height: 15dvh;
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

.lineArea {
    width: 100%;
    border: 1px solid black;
}

h1 {
    display: flex;
    margin-top: 3%;
    justify-content: center;
    align-items: center;
}

.wrapperArea {
    display: flex;
    width: 100%;
    height: 58dvh;
    justify-content: center;


    .card {
        width: 18rem;
        height: 50dvh;
        line-height: 110px;
        text-align: center;
        background-color: white;
        margin: 3% 1%;
        border: 2px solid black;
    }

    .card-body {
        display: flex;
        font-size: 1rem;
        background: white;
        justify-content: center;
        align-items: center;

    }

    .card-text {
        font-size: 20px;
    }
}

.bg {
    position: fixed;
    bottom: 0;
    z-index: -999;
    opacity: 0.8;

    img {
        width: 100dvw;

    }
}
</style>