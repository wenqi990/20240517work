<!-- <script>
export default {
    data() {
        return {
            selectedCity: '',
            selectedPrice: '',
            cities: [],
            prices: [],
            tainanArr: [],
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
        }
    }
}
</script>

<template>
    <div class="pictureArea">
        <img src="#" alt="台南飯店">
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
        <div class="card">
            <img src="#" class="card-img-top" alt="飯店">
            <div class="card-body">
                <p class="card-text"> 飯店名稱： </p>
                <p class="card-text"> 地址： </p>
                <p class="card-text"> 最優惠價格： </p>
                <p class="card-text"> 電話： </p>
            </div>
        </div>
        <div class="card">
            <img src="#" class="card-img-top" alt="飯店">
            <div class="card-body">
                <p class="card-text"> 飯店名稱： </p>
                <p class="card-text"> 地址： </p>
                <p class="card-text"> 最優惠價格： </p>
                <p class="card-text"> 電話： </p>
            </div>
        </div>
        <div class="card">
            <img src="#" class="card-img-top" alt="飯店">
            <div class="card-body">
                <p class="card-text"> 飯店名稱： </p>
                <p class="card-text"> 地址： </p>
                <p class="card-text"> 最優惠價格： </p>
                <p class="card-text"> 電話： </p>
            </div>
        </div>
        <div class="card">
            <img src="#" class="card-img-top" alt="飯店">
            <div class="card-body">
                <p class="card-text"> 飯店名稱： </p>
                <p class="card-text"> 地址： </p>
                <p class="card-text"> 最優惠價格： </p>
                <p class="card-text"> 電話： </p>
            </div>
        </div>
        <div class="card">
            <img src="#" class="card-img-top" alt="飯店">
            <div class="card-body">
                <p class="card-text"> 飯店名稱： </p>
                <p class="card-text"> 地址： </p>
                <p class="card-text"> 最優惠價格： </p>
                <p class="card-text"> 電話： </p>
            </div>
        </div>
        <div class="card">
            <img src="#" class="card-img-top" alt="飯店">
            <div class="card-body">
                <p class="card-text"> 飯店名稱： </p>
                <p class="card-text"> 地址： </p>
                <p class="card-text"> 最優惠價格： </p>
                <p class="card-text"> 電話： </p>
            </div>
        </div>
        <div class="card">
            <img src="#" class="card-img-top" alt="飯店">
            <div class="card-body">
                <p class="card-text"> 飯店名稱： </p>
                <p class="card-text"> 地址： </p>
                <p class="card-text"> 最優惠價格： </p>
                <p class="card-text"> 電話： </p>
            </div>
        </div>
        <div class="card">
            <img src="#" class="card-img-top" alt="飯店">
            <div class="card-body">
                <p class="card-text"> 飯店名稱： </p>
                <p class="card-text"> 地址： </p>
                <p class="card-text"> 最優惠價格： </p>
                <p class="card-text"> 電話： </p>
            </div>
        </div>
        <div class="card">
            <img src="#" class="card-img-top" alt="飯店">
            <div class="card-body">
                <p class="card-text"> 飯店名稱： </p>
                <p class="card-text"> 地址： </p>
                <p class="card-text"> 最優惠價格： </p>
                <p class="card-text"> 電話： </p>
            </div>
        </div>
    </div>

    <div class="footerArea"></div>

</template> -->


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
            let filtered = [];

            if (price === "a") {
                filtered = this.tainanArr.filter(item => item.Town === city && item.LowestPrice < 4000);
            } else if (price === "b") {
                filtered = this.tainanArr.filter(item => item.Town === city && item.LowestPrice >= 4000 && item.LowestPrice <= 7000);
            } else if (price === "c") {
                filtered = this.tainanArr.filter(item => item.Town === city && item.LowestPrice > 7000);
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
        <img src="#" alt="台南飯店">
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
            <img src="#" class="card-img-top" alt="飯店">
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
    border: 1px solid black;
    justify-content: center;
    align-items: center;
}

.searchArea {
    display: flex;
    width: 100%;
    height: 6dvh;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
}

.bootstrapArea {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 120dvh;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    padding: 0% 16%;

    .card {
        width: 18rem;
        margin-left: 3%;
        margin-top: 3%
    }
}

.pagination{
    display: flex;
    width: 100%;
    height: 15dvh;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    button{
        width: 6rem;
        height: 3rem;
        border-radius: 6px;
    }
    span{
        margin: 0% 3%;
        font-size: 3rem;
    }
}

.footerArea {
    width: 100%;
    height: 15dvh;
    border: 1px solid black;
}
</style>