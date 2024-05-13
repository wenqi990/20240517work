<script>
export default {
    data() {
        return {
            selectedCity: '',
            selectedPrice: '',
            cities: [],
            prices: [],
            tainanArr: [],
            currentPage: 1,
            pageSize: 9,
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
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
    },
    computed: {
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
        totalPages() {
            return Math.ceil(this.filteredHotels.length / this.pageSize);
        },
        paginatedHotels() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.filteredHotels.slice(start, end);
        },
    },
}
</script>

<template>
    <div class="pictureArea">
        <img src="https://image.pandafishstory.com/content/%E5%8F%B0%E5%8D%97%E9%A3%AF%E5%BA%97%E6%8E%A8%E8%96%A6.jpg" alt="台南飯店">
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
        <div v-for="(hotel, index) in paginatedHotels" :key="index" class="card">
            <img src="https://image.pandafishstory.com/content/%E5%8F%B0%E5%8D%97%E9%A3%AF%E5%BA%97%E6%8E%A8%E8%96%A6.jpg" class="card-img-top" alt="飯店">
            <div class="card-body">
                <p class="card-text"> 飯店名稱： {{ hotel.Name }} </p>
                <p class="card-text"> 地址： {{ hotel.Add }} </p>
                <p class="card-text"> 最優惠價格： {{ hotel.LowestPrice }} </p>
                <p class="card-text"> 電話： {{ hotel.Tel }} </p>
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
    img{
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
    select{
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

    .card {
        width: 18rem;
        height: 23rem;
        margin-left: 3%;
        margin-top: 3%
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