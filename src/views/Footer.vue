<script>

import 'primeicons/primeicons.css'

</script>

<template>
    <div class="footer">
        <div class="main">

    
<div class="icon fb" onclick="location.href='https://www.facebook.com/';">
    <i class="pi pi-facebook"></i>
    <span>Facebook</span>
</div>
<div class="icon twt" onclick="location.href='https://twitter.com/';">
    <i class="pi pi-twitter"></i>
    <span>Twitter</span>
</div>

<div class="icon ig" onclick="location.href='https://www.instagram.com/';">
    <i class="pi pi-instagram"></i>
    <span>Instagram</span>
</div>

<div class="icon discord" onclick="location.href='https://discord.gg/';">
    <i class="pi pi-discord"></i>
    <span>Discord</span>
</div>

<div class="icon yt" onclick="location.href='https://www.youtube.com/';">
    <i class="pi pi-youtube"></i>
    <span>YouTube</span>
</div>
</div>

    </div>
</template>

<style scoped lang="scss">

*{
    margin: 0; 
    padding: 0; 
    box-sizing: border-box;
}
    .footer{
        width: 100%;
        height: 20dvh;
        background: rgb(192, 183, 183);
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
        position: relative;
   

    
.main{
    /* width: 100%;
    height: 100vh; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: rgb(240, 240, 240); */
}

.icon{
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background: #fff;
    margin: 20px;
    text-align: center;
    font-size: 25px;
    line-height: 50px;
    overflow: hidden;
    box-shadow: 5px 10px 20px rgba(150, 150, 150, .3);
    transition: all .3s ease-out;
}
.icon:hover{
    width: 200px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #fff;
}

.icon:hover i{
    color: #fff;
   
}
.icon .pi-facebook{
    color: #1A6ED8;

}
.fb:hover{
    background: #1A6ED8;

    
}
.icon .pi-twitter{
    color: #000000;
}
.twt:hover{
    background: #000000;
}
.icon .pi-instagram{
    color: #ef55b9;
}
.ig:hover{
    // background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(136,29,227,1) 0%, rgba(187,29,183,1) 12%, rgba(255,206,0,1) 100%);
}
.icon .pi-discord{
    color: #000;
}
.discord:hover{
    background: rgb(114,137,218);
}
.icon .pi-youtube{
    color: #FE0000;
}
.yt:hover{
    background: #FE0000;
}

}
</style>