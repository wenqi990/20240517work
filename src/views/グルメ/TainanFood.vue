<script>
import { RouterLink, RouterView } from 'vue-router'
export default{
    components: {

    },
    data(){
        return{
            arr:["","","","","","","","",""]
        }
    }
    
    
}
</script>

<template>
<div class="head">
    <h1>熱門美食</h1>
    </div>
    <div class="vforArea">
    <div class="vforBlock" v-for="item in this.arr">
        <p>{{ item }}</p>
    </div>
</div>
</template>

<style scoped lang="scss">

.head{
    width: 70%;
    height: 21dvh;
    margin: auto;
    border: 1px solid black
    
    

    h1{
        font-size: 24px;
        margin: 0 1%;
        text-decoration: none;
    }
    
}
.vforArea{
    width: 1040px;
    height: 1040px;
    position: relative;
    left: 900px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .vforBlock{
        width: 320px;
        height: 330px;
        background: rgb(250, 122, 1);
        color: white
    }
}
</style>