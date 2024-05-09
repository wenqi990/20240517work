<script>
export default{
    data() {
        return {
            
        }
    },

    mounted() {  // 方法事件
        fetch("./public/檔案/attractions_zh-tw.json") 
        .then(res=>res.json())
        .then(data=>{
        console.log(data)
})
    },
}
</script>

<template>
</template>

<script setup lang="scss"></script>