<script>

export default{
    data(){
        return{
            // 儲存台南json的數據
            tainanAtt:[],
            // ==============================
            // 儲存台南搜索時的關鍵詞
            tainanSearch:'',
            // ==============================
            // 多選方框 1、從json檔中提取區來的地方
            districts:[],
            // 多選方框2、所勾選的欄位 
            modelCheck:[],
            // 多選方框3、使用v-show
            checkVSif:'checkA',
            // =========================
            // 設定搜索時的顯示方式
            searchVshow:'A',
            // ==========================
            // 儲存圖片(靜態)
            tainanImg:[
                {img:'./public/picture/南鯤鯓.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/馬沙溝海洋休閒運動渡假中心.jpg'} ,
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'./public/picture/東隆宮.jpg'} ,
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                {img:'https://www.swcoast-nsa.gov.tw/image/36619/1024x768'},
                
            ],
            // 用來儲存搜尋時(動態)，json檔中的位置與我們自己的圖片路徑(相對位置)
            saveImgUrl:[],

            // 加上翻頁功能
            start:0,
            end:10,
            filteredAttData:[],
        }
    },
    // =========================================================
    mounted(){
        this.tainan();
    },
    // =========================================================
    methods:{
        tainan(){
            fetch("./public/檔案/attractions_zh-tw.json")
            .then(res => res.json())
            .then(data => {
                this.tainanAtt = data;
                console.log(data);

                const allDistricts = data.map(item => item.district);
                this.districts = [...new Set(allDistricts)];
            })
            .catch(error => {
                console.error('資訊錯誤:', error);
            });
        },
        searchAll(){
            if(!this.tainanSearch || this.tainanSearch.length < 2  ){
                // 當搜索值小於2時，展示全部資訊
                this.searchVshow="A";
            }else{
                // 符合條件時，會跳過去搜尋資訊
                this.searchVshow="B";
            }
            this.filteredAtt.forEach((attraction, index) => {
                    if (this.tainanImg[index]) {
                        attraction.imagePath = this.tainanImg[index].img;
                    }
                });
        },
        // 設定如果按了打叉或者刪除文字後，可以正常地跳回"A"
        cancelSearch(){
            this.searchVshow = 'A';
            this.tainanSearch = ''; // 可选：将搜索框清空
        },
        // ====================建立翻頁功能===================================
        page(index){
            // 當索引值大於等於start=0時，以及 小於end=10時
            return index >= this.start && index < this.end;
        },
        // 上一頁
        prevPage() {
            if (this.start == 0) {
                alert("已經是第一頁了!")
            }else{
                this.start -= 10;
                this.end -= 10;
            }
        },
        // 下一頁，this.end是指當前頁結束的索引位置;this.tainanAtt.length這是指所有景點的總數量
        // 如果為true才會繼續顯示下一頁
        nextPage() {
            if (this.end >= this.filteredAtt.length  ) {
                alert("此為最後一頁")
            }else{
                // this.start這裡的start是指當前的索引位置
                this.start += 10;
                this.end += 10;
            }
        },
    },
    computed:{
        // 搜索資料
        filteredAtt(){
            if (!this.tainanSearch || this.tainanSearch.length < 2) {
                return this.tainanAtt;
            } else {
                return this.tainanAtt.filter((item) => {
                    return (
                        item.name.includes(this.tainanSearch) ||
                        item.address.includes(this.tainanSearch) ||
                        item.category.includes(this.tainanSearch)
                    );
                })
            }
        },
        
    },
    // =========================================================
}
</script>


<template>

<div class="bigArea">
    <input class="searchArea" id="searchArea" v-model.lazy.trim="tainanSearch" @input="searchAll"  @clear="cancelSearch" type="search" placeholder="請輸入欲搜索景點(至少兩個字)">

    <!-- 景點(圖片+景點名稱) -->
    <!-- 如果搜索時，顯示:圖片+景點名稱+地址+電話 -->
    <!-- 如果未搜索時，顯示全部 -->
    <div class="attractions"  v-for="(item,index) in filteredAtt" v-show="searchVshow && page(index)" :key="index">

        <div class="attractionsImg"  >
            <img class="imgItem"  v-bind:src="item.imagePath" alt='tainanImg'>
        </div>
        <div class="attractionsText" >
            <div class="attractionsName">{{ item.name }}</div>
            <div class="attractionsAddress">{{ item.address }}</div>
            <div class="attractionsTel">{{ item.tel }}</div>
        </div>

    </div>


    <!-- 加入上下按鈕 -->
    <div class="buttonArea">
        <button class="buttonPage" @click="prevPage" >上一頁</button>
        <button class="buttonPage" @click="nextPage">下一頁</button>
    </div>  
</div>
    
</template>


<style scoped lang="scss">
.leftArea{
    width: 10%;
    height: 80dvh;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    border: 1px solid black;
    position: fixed;
    left: 0;
    top: 12dvh;
}

.checkArea{
    margin-left: 10%;
    font-size: 15px;
}

.bigArea{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-self: start;
    align-items: center;
}

.searchArea{
    width: 45%;
    height: 5dvh;
    margin-top: 5px;
    border-radius: 5px;
    font-size: 28px;
}

.attractions{
    width: 50%;
    height: 15dvh;
    border: 1px solid black;
    margin-top:1% ;
    display: flex;
    justify-content: left;
    align-items: center;

    transition: 0.4 s;

    &:hover{
        scale: 1.05;
    }
}

.attractionsImg{
    width: 30%;
    height: 95%;
    border: 1px solid black;
    margin-left: 1%;
}

.imgItem{
    width: 100%;
    height:100% ;
    object-fit: cover;
    overflow: hidden;
    border: 1px solid rgb(255, 0, 0);
}

.attractionsText{
    width: 67%;
    height: 95%;
    margin-left: 1.5%;
    border: 1px solid black;
}

.attractionsName{
    font-size: 20px;
    margin-top: 2%;
    margin-left: 1%;
}

.attractionsAddress{
    font-size: 15px;
    margin-top: 1%;
    margin-left: 1%;
}

.attractionsTel{
    font-size: 15px;
    padding-left: 1%;
}

.buttonArea{
    width: 50%;
    height: 10dvh;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1%;
}

.buttonPage{
    width: 35%;
    height: 60%;
    margin: 5%;
}
</style>