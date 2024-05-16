<script setup>
import Map from './Map.vue'
import Footer from '../views/Footer.vue'
</script>

<template>
  <div class="bg">
        <img src="/public/imags/首頁/背景底圖.svg">
    </div>
  <img src="/public/imags/首頁/糖廠2.jpg" style="width: 100%;height: 80dvh;">
    <div class="about">
  </div>

  <div class="icon">
  <div class="info-carousel">
    <div class="info-box" style="--wd-col-lg:4;--wd-col-md:4;--wd-col-sm:2;--wd-gap-lg:30px;--wd-gap-sm:10px;">
      <div class="info-item active">
        <a href="http://localhost:5173/TainanFood" aria-label="Infobox link">
        <img src="https://havefunday.com/wp-content/uploads/2023/06/400X400-icon_全台美食-150x150.png" alt="美食分享">
        </a>
        <h4>美食分享</h4>
      </div>
      <div class="info-item">
        <a href="http://localhost:5173/Activity" aria-label="Infobox link">
        <img src="https://havefunday.com/wp-content/uploads/2023/06/400X400-icon_景點-150x150.png" alt="活動推薦">
        </a>
        <h4>活動推薦</h4>
      </div>
      <div class="info-item">
        <a href="http://localhost:5173/hotel" aria-label="Infobox link">
        <img src="https://havefunday.com/wp-content/uploads/2023/07/400X400-icon_別墅-150x150.webp" alt="住宿推薦">
        </a>
        <h4>住宿推薦</h4>
      </div>
      <div class="info-item">
        <a href="http://localhost:5173/Attractions" aria-label="Infobox link">
        <img src="https://havefunday.com/wp-content/uploads/2023/06/400X400-icon_廟宇-150x150.png" alt="景點推薦">
        </a>
        <h4>景點推薦</h4>
      </div>
    </div>
  </div>
</div>

<div class="mapBox">
  <Map></Map>
</div>

<div class="block1" id="block1">
  <div class="second area">
        <div class="secondText">
            <h1>讓我們一起嗨放美食</h1>
            <p style="font-size: 25px;">白糖粿據說是南方才有的特殊甜食。炸白糖粿時候，一定要在粿上按個凹槽，老人家說，那是用來承裝織女的眼淚。白糖粿其實就是把粿油炸後滾糖粉製成，花生、芝麻是更多趣味變化的做法。</p>
            <div>
    <!-- //bootstrap 效果 -->
    <button class="btn btn-primary">所有美食</button> 
  </div>
        </div>
        <img src="/public/imags/首頁/白糖粿.jpg" alt="圖片" style="object-fit: cover;">
    </div>

    <div class="third area">
      <h1>推薦美食</h1>
        <div class="cradArea">
            <div class="card">
                <img src="/public/imags/首頁/棺材板.jpg" class="card-img-top" alt="卡片" style="object-fit: cover;width: 279px;height: 200px;">
                <div class="card-body">
                  <p class="card-text">內餡也改良為海鮮、玉米火腿、雞肉等西式食材，成為台南著名的小吃之一</p>
                  <a href="#" class="btn btn-primary">了解更多</a>
                </div>
              </div>
            <div class="card" >
                <img src="/public/imags/首頁/牛肉湯.webp" class="card-img-top" alt="卡片" style="object-fit: cover;width: 279px;height: 200px;">
                <div class="card-body">
                  <p class="card-text">台南的善化是最大規模的屠宰場之一，所以台南的牛肉湯就開始蓬勃發展，並在媒體與政府的宣傳影響下，逐漸成為著名的料理</p>
                  <a href="#" class="btn btn-primary">了解更多</a>
                </div>
              </div>
            <div class="card" >
                <img src="/public/imags/首頁/蛋黃.webp" class="card-img-top" alt="卡片" style="object-fit: cover;width: 279px;height: 200px;">
                <div class="card-body">
                  <p class="card-text">Q彈的白米飯，淋上鹹香的豬油醬油，搭上半熟荷包蛋，儘管沒有豐富配菜，也會一碗接著一碗</p>
                  <a href="#" class="btn btn-primary">了解更多</a>
                </div>
              </div>
              <div class="card" >
                <img src="/public/imags/首頁/豆腐冰.jpg" class="card-img-top" alt="卡片" style="object-fit: cover;width: 279px;height: 200px;">
                <div class="card-body">
                  <p class="card-text">形似豆腐而得名，味甜，清爽，略帶杏仁味，一種與之類似的歐洲甜點是法式奶凍</p>
                  <a href="#" class="btn btn-primary">了解更多</a>
                </div>
              </div>
        </div>
    </div>
  </div>

  <div class="block2" id="block2">
    <div class="fourth area">
      <img src="/public/imags/首頁/奇美博物館.jpg" alt="">
      <div class="fourthText">
          <h1>讓我們一起嗨放景點</h1>
          <p>奇美博物館由台灣企業家「奇美集團創辦人」許文龍先生所設立，為全台最大的私人博物館，主要蒐藏有西洋藝術、樂器、兵器、自然史等。</p>
          <button class="btn btn-primary">所有景點</button> 
      </div>
  </div>
  
  <div class="fifth area">
    <h1>景點</h1>
    <div class="cradArea">
        <div class="card">
            <img src="/public/imags/首頁/鹽田.jpg" class="card-img-top" alt="卡片" style="object-fit: cover;width: 279px;height: 200px;">
            <div class="card-body">
                <p class="card-text">井仔腳瓦盤鹽田是台南北門的第一座鹽田，也是現存最古老的瓦盤鹽田遺址。</p>
                <a href="#" class="btn btn-primary">了解更多</a>
            </div>
        </div>
        <div class="card">
            <img src="/public/imags/首頁/漁光島.jpg" class="card-img-top" alt="卡片" style="object-fit: cover;width: 279px;height: 200px;">
            <div class="card-body">
                <p class="card-text">漁光島座落於台南市安平區，過去是漁民活動的場所，目前可堪稱為台南居民的海上後花園。</p>
                <a href="#" class="btn btn-primary">了解更多</a>
            </div>
        </div>
        <div class="card">
            <img src="/public/imags/首頁/藍晒圖.jpg" class="card-img-top" alt="卡片" style="object-fit: cover;width: 279px;height: 200px;">
            <div class="card-body">
                <p class="card-text">藍晒圖文創園區原為舊司法宿舍群，保留舊有的日式宿舍，成為文創產業的新聚落。</p>
                <a href="#" class="btn btn-primary">了解更多</a>
            </div>
        </div>
        <div class="card">
            <img src="/public/imags/首頁/大魚的祝福.jpg" class="card-img-top" alt="卡片" style="object-fit: cover;width: 279px;height: 200px;">
            <div class="card-body">
                <p class="card-text">「大魚的祝福」座落於臺南安平海濱歷史公園內，是臺灣高規格的工藝展現，也成為必訪打卡新熱點。</p>
                <a href="#" class="btn btn-primary">了解更多</a>
            </div>
        </div>
    </div>
</div>
</div>


<div class="block3" id="block3">
    <div class="sixth area">
      <img src="/public/imags/首頁/靡生.webp" alt="">
      <div class="sixthText">
          <h1>讓我們一起嗨放旅宿</h1>
          <p>老宅改建的特色民宿「靡生」，以波希米亞風格為主题，巧妙融合現代元素，一入門就能聞到淡淡的佛手柑清香，洋溢著滿滿的異國風情。</p>
          <button class="btn btn-primary">所有旅宿</button> 
      </div>
  </div>

  <div class="seventh area">
      <h1>住宿</h1>
        <div class="cradArea">
            <div class="card">
                <img src="/public/imags/首頁/福爾摩沙遊艇酒店.jpg" class="card-img-top" alt="卡片" style="object-fit: cover;width: 279px;height: 200px;">
                <div class="card-body">
                  <p class="card-text">全台唯一擁有「遊艇碼頭」的酒店，可眺望熱蘭遮城，並提供饕客級的美食。</p>
                  <a href="#" class="btn btn-primary">了解更多</a>
                </div>
              </div>
            <div class="card" >
                <img src="/public/imags/首頁/康橋慢旅.webp" class="card-img-top" alt="卡片" style="object-fit: cover;width: 279px;height: 200px;">
                <div class="card-body">
                  <p class="card-text">位於中西區新開幕的康橋慢旅，全天提供自助吧與自助洗衣，為高CP值的最佳選擇。</p>
                  <a href="#" class="btn btn-primary">了解更多</a>
                </div>
              </div>
            <div class="card" >
                <img src="/public/imags/首頁/友愛街旅館.jpg" class="card-img-top" alt="卡片" style="object-fit: cover;width: 279px;height: 200px;">
                <div class="card-body">
                  <p class="card-text">坐落在台南美術館旁巷內，位於台南市南區的友愛街旅館，是「工業風設計旅店」也是「青年旅舍」。</p>
                  <a href="#" class="btn btn-primary">了解更多</a>
                </div>
              </div>
              <div class="card" >
                <img src="/public/imags/首頁/天下南隅.jpg" class="card-img-top" alt="卡片" style="object-fit: cover;width: 279px;height: 200px;">
                <div class="card-body">
                  <p class="card-text">老字號飯店經過重新改装，改名天下南隅，打造當代時髦新旅宿，是台南市距離赤崁樓最近的飯店。</p>
                  <a href="#" class="btn btn-primary">了解更多</a>
                </div>
              </div>
        </div>
    </div>
  </div>

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

.icon {
  display: flex;
  background-color: #ffffff;
  justify-content: center; 
}

.info-carousel { //設定寬度
}

.info-box {
  margin-top: 100px;
  display: flex;
  gap: var(--wd-gap-lg); 
}

.info-item {
  flex: 1; 
  text-align: center; 
  transition: transform 0.3s ease;
}

.info-item img {
  max-width: 100%; 
}

.info-item:hover {
  transform: scale(1.1); //滑鼠移入時放大 10%
}

h4 {
  margin-top: 10px; 
  margin-bottom: 0; 
}

.mapBox{
  background-color: #ffffff;
}

.bg{
  position: fixed;
  bottom: 0;
  z-index: -999;
  img{
    width: 100dvw;
    
  }
}



.second{
    height: 65dvh;
    justify-content: space-between;
    align-items: center;
    display: flex;
    background-color: #ffffff;
    // cursor:url(./素材/ae7a5-03aq0-001.ico),auto ;

    .secondText {
        width: 40%;
        height: 100%;
        padding-top: 5%;
        padding-left: 3%;
        color: black;
        
        h1{
            padding:5% 3%;
            font-size: 7dvh;
            
         
        }

    
    }



    img{
      margin-right: 100px;
        // padding-right: 5%;
        width: 520px;
        height: 420px;
        border-radius: 20%;
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
}

.third{
  margin-top: 5%;
    height: 75dvh;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    text-align: center;

    .cradArea{
        margin-top: 2%;
        width: 80%;
        height: 80%;
        margin-left: 10%;
        display: flex;
        justify-content: space-around;
        position: relative;
        
        .card{
          margin: 1%;
            width: 30%;
            height: 90%;
            box-shadow: 5px 5px 5px rgb(108, 107, 107);
            transition: 0.5s;
        // 鼠標移到按鈕時放大
        &:hover{
            scale: 1.05;
        }
        // 鼠標移到按鈕時縮小
        &:active{
            scale: 0.95;
        }
            
            .btn{
                position: absolute;
                left: 27%;
                bottom: 5%;
                background: rgb(49, 49, 49);
                border: none;
                width: 45%;
                font-size: 18px;
            }
        }
    }
}

.fourth{
    height: 70dvh;
    justify-content: space-between;
    margin-top: 10%;
    display: flex;
    background-color: #ffffff;
    // cursor:url(/滑鼠標.ico),auto ;
    .fourthText{
        width: 50%;
        height: 500.10px;
        background:#ffffff;
        font-size: 25px;
        padding: 5% 4%;
        
    }
    
    img{
        width: 700px;
        height: 400.6px;
        border-radius: 20%;
        box-shadow: 5px 5px 5px rgb(108, 107, 107);
        transition: 0.5s;
        margin-top: 2.5rem;
            margin-left: 2.5rem;
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

.fifth{
  margin-top: 5%;
    height: 75dvh;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    text-align: center;

    .cradArea{
        margin-top: 2%;
        width: 80%;
        height: 80%;
        margin-left: 10%;
        display: flex;
        justify-content: space-around;
        position: relative;
        
        .card{
          margin: 1%;
            width: 30%;
            height: 90%;
            box-shadow: 5px 5px 5px rgb(108, 107, 107);
            transition: 0.5s;
            
        // 鼠標移到按鈕時放大
        &:hover{
            scale: 1.05;
        }
        // 鼠標移到按鈕時縮小
        &:active{
            scale: 0.95;
        }
            
            .btn{
                position: absolute;
                left: 27%;
                bottom: 5%;
                background: rgb(49, 49, 49);
                border: none;
                width: 45%;
                font-size: 18px;
            }
        }
    }
}

.sixth{
    height: 70dvh;
    justify-content: space-between;
    margin-top: 10%;
    display: flex;
    background-color: #ffffff;
    // cursor:url(/滑鼠標.ico),auto ;
    .sixthText{
        width: 50%;
        height: 500.10px;
        background:#ffffff;
        font-size: 25px;
        padding: 5% 4%;
        
    }
    
    img{
        width: 700px;
        height: 400.6px;
        border-radius: 20%;
        box-shadow: 5px 5px 5px rgb(108, 107, 107);
        transition: 0.5s;
        // 鼠標移到按鈕時放大
        margin-top: 25px;
        margin-left: 25px;
        &:hover{
            scale: 1.05;
        }
        // 鼠標移到按鈕時縮小
        &:active{
            scale: 0.95;
        }
    }
}

.seventh{
  margin-top: 5%;
    height: 75dvh;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    text-align: center;

    .cradArea{
        margin-top: 2%;
        width: 80%;
        height: 80%;
        margin-left: 10%;
        display: flex;
        justify-content: space-around;
        position: relative;
        
        .card{
          margin: 1%;
            width: 30%;
            height: 90%;
            box-shadow: 5px 5px 5px rgb(108, 107, 107);
            transition: 0.5s;
        // 鼠標移到按鈕時放大
        &:hover{
            scale: 1.05;
        }
        // 鼠標移到按鈕時縮小
        &:active{
            scale: 0.95;
        }
            
            .btn{
                position: absolute;
                left: 27%;
                bottom: 5%;
                background: rgb(49, 49, 49);
                border: none;
                width: 45%;
                font-size: 18px;
            }
        }
    }
}
</style>