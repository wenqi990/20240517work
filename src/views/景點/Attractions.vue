<script>

export default{
    data(){
        return{
            // 儲存台南json的數據
            // 我在tainan()中將圖片與檔案綁定，所以現在裡面也包含了圖片
            tainanAtt:[],
            // ==============================
            // 儲存台南搜索時的關鍵詞
            tainanSearch:'',
            // =========================
            // 設定搜索時的顯示方式
            searchVshow:'A',
            // ==========================
            // 儲存圖片(靜態)
            tainanImg:[
            'https://img.wongya.tw/800x800/21/306/2130613083426322707736.jpg' ,//南鯤鯓
            'https://www.dbnsa.gov.tw/att/pic/b_11007081.jpg' ,//東隆宮
            'https://www.swcoast-nsa.gov.tw/image/40110/1024x768' ,//馬沙溝海洋休閒運動渡假中心
            'https://www.swcoast-nsa.gov.tw/image/36619/1024x768' ,//將軍漁港
            'https://www.swcoast-nsa.gov.tw/image/35888/1024x768' ,//七股潟湖
            'https://www.swcoast-nsa.gov.tw/image/1326/1024x768' ,//七股鹽山
            'https://www.twtainan.net/content/images/attractions/11844/1024x768_28633233871642953176.jpg' ,//紅樹林
            'https://www.twtainan.net/content/images/attractions/13894/1024x768_Filedata635525190776290750.jpg' ,//黑面琵鷺休息區
            'https://upload.wikimedia.org/wikipedia/commons/6/63/Cijigongsanmen.jpg' ,//學甲慈濟宮
            'https://www.twtainan.net/content/images/attractions/79883/1024x768_attractions-image-ijoz5ubnokofnconfudvna.jpg' ,//頑皮世界野生動物園
            'https://s.yimg.com/ny/api/res/1.2/Bkead9rVckD1mQRPJaQiuQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTU0MDtoPTM2MA--/https://media.zenfs.com/zh-Hant-TW/homerun/nownews.com/7497267380f90e18135b5437d7c994c8' ,//海埔池王府
            'https://www.twtainan.net/content/images/attractions/91859/1024x768_attractions-image-vcjvgbqmru2zudb9bhr0gg.jpg' ,//麻豆代天府
            'https://www.twtainan.net/content/images/attractions/17810/1024x768_Filedata635593596313536388.jpg' ,//總爺藝文中心
            'https://tainan.wacowtravel.com.tw/upload/bigphoto/views20130829165132-1.jpg' ,//蔴荳古港文化園區
            'https://www.twtainan.net/content/images/attractions/14291/1024x768_Filedata635549399629155723.jpg' ,//佳里震興宮
            'https://pic.pimg.tw/su327396/1616571710-3279659169-g.jpg' ,//蕭壠文化園區
            'https://www.twtainan.net/content/images/attractions/93461/1024x768_attractions-image-yrgal3fsckyhmhbztpo7jq.jpeg' ,//西港慶安宮
            'https://upload.wikimedia.org/wikipedia/commons/3/35/%E4%BD%B3%E9%87%8C%E9%87%91%E5%94%90%E6%AE%BF.JPG' ,//佳里金唐殿
            'https://www.twtainan.net/content/images/attractions/17309/1024x768_Filedata635592736460140135.jpg' ,//北頭洋平埔文化園區
            'https://www.twtainan.net/content/images/attractions/16795/1024x768_Filedata635587343611856916.jpg' ,//林崑岡紀念館
            'https://www.twtainan.net/content/images/attractions/80536/1024x768_attractions-image-psi9mtpra0kaeukhityqgw.jpg' ,//台灣鹽博物館
            'https://www.twtainan.net/content/images/attractions/11911/1024x768_49633233917707917800.jpg' ,//八角樓
            'https://www.twtainan.net/content/images/attractions/32776/1024x768_Filedata635618610505115259.jpg' ,//月津港-聚波亭大眾廟
            'https://www.twtainan.net/content/images/attractions/11922/1024x768_52633445674485032500.jpg' ,//鹽水武廟
            'https://www.twtainan.net/content/images/attractions/17299/1024x768_Filedata635592718333688298.jpg' ,//鹽水橋南老街
            'https://photo.settour.com.tw/900x600/https://www.settour.com.tw/ss_img/info/location/TNN/N0/TNN0000103/TNN0000103_87802.jpg' ,//天鵝湖公園
            'https://www.twtainan.net/content/images/attractions/17486/1024x768_Filedata635593464977061708.jpg' ,//南瀛綠都心5號公園
            'https://www.twtainan.net/content/images/attractions/11941/1024x768_57633277095866406250.jpg' ,//新營鐵道文化園區
            'https://g.udn.com.tw/upfiles/B_BL/bluejohn/PSN_PHOTO/847/f_26827847_1.jpg' ,//新營太子宮
            'https://www.twtainan.net/content/images/official-instagram/CCpT6CNH2Vj.jpg' ,//鐵線橋通濟宮
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png' ,
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://png.pngtree.com/png-clipart/20220110/ourmid/pngtree-cartoon-snail-loading-in-progress-png-image_4135419.png',
            'https://cdntwrunning.biji.co/600_0189f9cd46d672bdf4bbfd0b1d77c5d018766586926a63f6affc8ca06e2fb5e5.jpg',//龍鱗山步道
            'https://www.twtainan.net/content/images/attractions/99929/1024x768_attractions-image-63662ogzu0-ylevxou5njq.jpg',//臺灣基督長老教會白水溪教會
            'https://www.twtainan.net/content/images/attractions/99939/1024x768_attractions-image-_hod-epjbkiirysny_lfka.jpg',//臺灣教會公報社
            'https://i0.wp.com/kkmintravel.com/wp-content/uploads/2022/08/IMG_0451-16-2.jpg?resize=960%2C720&ssl=1',//港濱歷史特色遊戲場
            'https://www.twtainan.net/content/images/attractions/100235/1024x768_attractions-image-xzqbvt4dnuclq-xkinjvdg.jpg',//金砂里花旗木步道
            'https://www.twtainan.net/content/images/attractions/100278/1024x768_attractions-image-j6vjdjan8eaxksbhfk81pa.jpg',//夢之湖

            'https://www.twtainan.net/content/images/attractions/100280/1024x768_attractions-image-bdw4qx_mhuoa2uzc2pgs3a.jpg',//蝙蝠洞瀑布
            'https://peanutwalker.com/wp-content/uploads/20190907193252_90.jpg',//臺南市立馬術場
            'https://i0.wp.com/hoolee.tw/wp-content/uploads/20240229220525_0.jpg',//雅聞湖濱療癒森林
            'https://photo.travelking.com.tw/scenery/9E922025-5999-4489-9C66-3A2313082C06_e.jpg',//學甲蜀葵花海
            ],
            // 加上翻頁功能
            start:0, //上一頁
            end:10,  //下一頁
            // 設定選擇頁碼
            selectedPage: 1,
            totalPages: 0,//每頁有十筆資料,先隨便預設個數值

            // ========================
            // 多選區
            // 1、縣市
            districts: [], //用於抓取json檔中的districts
            modelCheck: [],//多選的方框
            selectedDistricts: [], //勾選後的資訊放入這裡
            // 2、活動類別
            categorys:[],
            categoryCheck:[],
            selectCategory:[],


             // v-show展示茲要
            summarys:[],//總結
            introductions:[],//介紹
            activeIndex: null,//選擇景點訊息
            areaBlock:'111',
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

                // 綁定圖片(檔案與圖片直接進行更動綁定)
                this.tainanAtt.forEach((item, index) => {
                    item.imagePath = this.tainanImg[index]
                })

                // console.log(data);
                // 提取縣市
                const allDistricts = data.map(item => item.district);
                this.districts = [...new Set(allDistricts)];

                // 提取類別
                // 使用reduce將所有景點收集到一個陣列中,
                const allCategory = data.reduce((acc,item) =>{
                    acc.push(...item.category);
                    return acc;
                },[] );
                this.categorys = [...new Set(allCategory)];

                // 提取 introduction 和 summary 資料
                this.introductions = data.map(item => item.introduction);
                this.summarys = data.map(item => item.summary);

                // // 更新 totalPages
                // this.totalPages = Math.ceil(this.filteredAtt.length / 10);
            })
            .catch(error => {
                console.error('資訊錯誤:', error);
            });
        },
        // =============設定搜索(使用V-show)======================
        // 搜索=>如果小於2字，則顯示全部資訊
        // 反之大於二則顯示所需資訊
        searchAll(){
            if(this.tainanSearch.length < 2  ){
                // 當搜索值小於2時，展示全部資訊
                this.searchVshow="A";
            }else{
                // 符合條件時，會跳過去搜尋資訊
                this.searchVshow="B";
            }
        },
        // 設定如果按了打叉或者刪除文字後，可以正常地跳回"A"
        cancelSearch(){
            this.searchVshow = 'A';
            this.tainanSearch = ''; // 搜索框清空時,也跳回A
        },
        // ====================建立翻頁功能===================================
        page(index){
            // 當索引值大於等於start=0時，以及 小於end=10時
            return index >= this.start && index < this.end;
        },
        // 跳到第一頁
        firstPage(){
            this.start = 0;
            this.end = 10;
            // 將數值綁定頁碼(最前頁是第一頁所以直接等於1)
            this.selectedPage=1;
        },
        // 跳到最後一頁
        lastPage(){
            let totalPages = Math.ceil(this.filteredAtt.length / 10);
            this.start = (totalPages - 1) * 10;
            this.end = this.filteredAtt.length;
            // 最後一頁就是totalPages，每頁除10的頁碼總數
            this.selectedPage=totalPages;
        },
        // 上一頁
        prevPage() {
            if (this.start == 0) {
                alert("已經是第一頁了!")
            }else{
                this.start -= 10;
                this.end -= 10;
                // 往前一頁為減一
                this.selectedPage--;
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
                // 下一頁為加一
                this.selectedPage++;
            }
        },
        // 選擇頁碼功能
        gotoSelectedPage() {
        // 要重新計算start與end的值
        this.start = (this.selectedPage - 1) * 10;
        this.end = Math.min(this.start + 10, this.filteredAtt.length);
        },
        // 更新下拉選單的頁碼(做連結)
        updateSelectedPage(event) {
            this.selectedPage = parseInt(event.target.value);
            this.gotoSelectedPage();
        },
        // =========================================================
        // 多選框
        // 針對縣市
        checkDistrict() {
            // 點及按鈕，獲取勾選區域
            //使用[...]=>擴展運算，創建新的數據，不直接使用原數據
            // 這裡的目的是為了，確保selectedDistricts為獨立數據，不受modelCheck影響
            this.selectedDistricts = [...this.modelCheck];
            this.filteredAtt();
        },
        // 針對類別
        checkCategory(){
            this.categoryCheck=[...this.selectCategory];
            this.filteredAtt();
            // console.log(this.selectCategory);
        },
        // 介紹與總結
        toggleArea(index) {
            if ( this.activeIndex === index &&this.areaBlock === '222') {
            // 如果點擊的是當前啟動的景點區域，並且當前顯示的是簡介區域，則切換回景點區域
            this.areaBlock = '111';
            } else {
                // 否則，設置啟動的索引和顯示簡介區域
                this.activeIndex = index;
                this.areaBlock = '222';
            }
        },
        goBack() {
            this.areaBlock = '111'; // 切回景點區域
            this.activeIndex = null; // 重置索引值
        }
        
    },
// =======================================================
/**computed:計算屬性，用於
 * 1、緩存:只有在發生依賴時，才會開始計算執行，否則會回到原本預設的緩存結果
 * 2、響應式:發生依賴時每次都會重新計算，並重新更新結果
 * 3、計算:通過getter涵式計算值，可在getter涵式中編輯較為複雜的邏輯
*/
    computed:{
        // 搜索資料
        filteredAtt(){
            // if ((!this.tainanSearch || this.tainanSearch.length < 2 )&&this.selectedDistricts.length === 0 && this.selectCategory.length===0) {
            //     return this.tainanAtt;
            // } else {
            //     return this.tainanAtt.filter((item) => {
            //         const searchMatch= (
            //             item.name.includes(this.tainanSearch) ||
            //             item.address.includes(this.tainanSearch) ||
            //             item.category.includes(this.tainanSearch) ||
            //             item.district.includes(this.tainanSearch) 
            //         );
            //         const districtMatch = (
            //             this.selectedDistricts.length === 0 || 
            //              //如果沒有選擇，返回true，匹配所有景點
            //             this.selectedDistricts.includes(item.district) 
            //              //如果選擇了地點，只返回選擇地點的景點
            //         );
            //         const categoryMath=(
            //             this.selectCategory.length===0||
            //             this.selectCategory.includes(item.category)
            //         )
            //         // 返回搜索匹配和地區匹配以及類型匹配，為true的景点
            //         return searchMatch && districtMatch && categoryMath;
            //     })
            // }
            return this.tainanAtt.filter((item) => {
                const nameMatch = item.name.includes(this.tainanSearch);
                const addressMatch = item.address.includes(this.tainanSearch);
                const districtMatch = this.selectedDistricts.length === 0 || this.selectedDistricts.includes(item.district);
                const categoryMatch = this.selectCategory.length === 0 || this.selectCategory.some(cat => item.category.includes(cat));

                // 同時考慮搜索框和多選框的輸入
                return (nameMatch || addressMatch) && districtMatch && categoryMatch;
            });
        },
        totalPagesArray(){
            return Array.from({ length: this.totalPages }, (_, index) => index + 1);
        }
    },
    // =========================================================
    watch: {
    // 監聽 filteredAtt 陣列的變化
        filteredAtt: {
            handler() {
                // 當 filteredAtt 發生變化時重新計算 totalPages
                this.totalPages = Math.ceil(this.filteredAtt.length / 10);
            },
            // immediate: true 表示在監聽開始時立即調用處理函數
            immediate: true
            },
        },
    

}
</script>


<template>


    <div class="topImg">
        <img class="topImg1" src="https://www.twtainan.net/content/images/attractions/87859/1024x768_attractions-image-jmklrt8hmksxesbyceuinq.jpg" alt="">
    </div>

        <!-- 回頂部的按鈕 -->

    <div class="big">      

        <div class="leftArea">
            <!-- 搜索 -->
            <!-- 逐步解析:
                1、lazy:在更新數據時使用，用於"輸入時，值並不會立馬更新"(需要特定按鈕才會開始更新"例如enter")
                2、trim:自動刪除值的前後空格
                @:做監聽事件
                3、@input=""  :方法中做監聽，也就是輸入時做searchAll這個涵式
                4、@clear=""  :clear是自訂義事件，指清除...，這邊再次做確定(清除搜索結果或重置搜索狀態=>讓她確保可以A時顯示資訊)

                搜索欄只設定可搜索景點名稱和地址
            -->
            <input class="searchArea" id="searchArea" v-model.lazy.trim="tainanSearch" @input="searchAll"  @clear="cancelSearch" type="search" placeholder="請輸入欲搜索景點(至少兩個字)">
            <!-- 綁定json檔中的districts，將地址前都附上多選框 -->
            <!-- 利用v-for來遍歷districts  -->
            <p class="textP">縣市:</p>
            <div class="checkArea" v-for="district in districts" :key="district">
                <!-- 並附上複選框 -->
                <!-- 每個複選框接有一個v-model==>也就是，將資訊綁定到上面，
                當複選框被選中或取消時,modelCheck都會改變
                -->
                <label  :for="'checkbox-' + district">{{ district }}</label>
                <input class="checkbox checkboxText" id="'checkbox-'+district" type="checkbox" v-model="selectedDistricts" :value="district" name="">
            </div>


            <p class="textP">活動類型:</p>
            <div class="checkArea" v-for="category in categorys" :key="category">
                <label  :for="'checkbox2-' + category">{{ category }}</label>
                <input class="checkbox2 " id="'checkbox2-'+district" type="checkbox" v-model="selectCategory" :value="category" name="">
            </div>
        </div>

        <div class="rightArea">

            <!-- 景點(圖片+景點資訊) -->
            <!-- 如果搜索時，如果輸入框有輸入文字，則"只"出現"符合"的景點的資訊(顯示:圖片+景點名稱+地址+電話) -->
            <!-- 如果未搜索時，則出現"所有"景點的資訊 -->
            <div class="attractionsArea"  v-for="(item,index) in filteredAtt" v-show="page(index)" :key="item.id" >
                        <!-- =================================================== -->
                        <div class="attractions" v-show="areaBlock==='111' && searchVshow && page(index)" @click="toggleArea(index)"  >

                            <div class="attractionsImg"  >
                                <img class="imgItem"  v-bind:src="item.imagePath" alt='tainanImg'>
                            </div>
                            <!-- 顯示我搜索的資料 -->
                            <!-- 使用v-show，如果輸入框有輸入文字，則"只"出現"符合"的景點的資訊 -->
                            <!-- 如果輸入框未輸入文字，則出現"所有"景點的資訊 -->
                            <div class="attractionsText" >
                                <div class="attractionsName">{{ item.name }}</div>
                                <div class="attractionsAddress">地址: {{ item.address }}</div>
                                <div class="attractionsTel">電話: {{ item.tel }}</div>
                            </div>

                        </div>   
                        
                        <!-- ================================================================== -->
                    
                <!-- </div> -->

                            <!-- 當areaBlock==222 -->
                            <div class="introductionArea" v-show="activeIndex === index  ">
                                <div class="introductionText" >    
                                    <h2 class="introductionName">{{ item.name }}</h2>
                                        
                                    <div class="introductionIn" >
                                        <h3>介紹</h3>
                                        <p>{{ item.introduction }}</p>
                                    </div>

                                    <div class="introductionSu">
                                        <h3>總結</h3>
                                        <p>{{ item.summary }}</p>
                                    </div>

                                    <div class="goButton">
                                        <!-- 返回按钮 -->
                                        <button class="buttonBack" @click="goBack">返回上一頁</button>
                                    </div>    
                                </div>
                            </div>
                    </div>

            <!-- 加入上下按鈕 -->
            <div class="buttonArea">
                <button class="buttonPage" @click="firstPage" >第一頁</button>
                <button class="buttonPage" @click="prevPage" >上一頁</button>
                <select v-model="selectedPage" @change="updateSelectedPage">
                    <option v-for="page in totalPagesArray" :value="page">{{ page }}</option>
                </select>
                <button class="buttonPage" @click="nextPage">下一頁</button>
                <button class="buttonPage" @click="lastPage">最後一頁</button>
            </div>  
            <!-- ====================================================== -->

        </div>
    </div>

    <div class="bg">
    <img src="/public/imags/景點類圖片/20220929215654_71.jpg" style="width: 100dvw;height: 100dvh;opacity: 10%;">
    </div>

</template>


<style scoped lang="scss">

.topImg{
    width: 100%;
    height: 50dvh;
    // border: 1px solid black;
    position: relative;

    .topImg1{
        width: 100%;
        max-height: 100%;
        object-fit: cover;
        overflow: hidden;
        
    }

}

.bg{
    position: fixed;
    bottom: 0;
    z-index: -999;
    img{
        width: 100dvw;
    }
}



.big{
    display: flex;
    justify-content: left;
}

.leftArea{
    width: 20%;
    height: 80dvh;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    border: 1px solid black;
    margin-left: 1%;
    margin-top: 1%;

    .searchArea{
        width: 94%;
        height: 5dvh;
        margin-top: 5px;
        border-radius: 5px;
        font-size: 20px;
        margin-left: 2%;
    }

    .textP{
        width: 100%;
        height: 3%;
        font-size: 20px;
        font-weight: 100px;
        margin-top: 1%;
        margin-left: 1%;
    }

    .checkArea{
        margin-left: 1%;
    }
}


.rightArea{
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-self: start;
    align-items: center;
    margin-left: 5%;
    margin-right: 2%;

    position: relative;
}


.attractionsArea{
    width: 100%;
    height: 20dvh;
    // border: 1px solid black;
    margin-top:1% ;
    display: flex;
    justify-content: left;
    align-items: center;

}

.attractions{
    width: 100%;
    height: 17dvh;
    display: flex;
    justify-content: left;
    align-items: center;
    border: 1px solid black;

    transition: 0.4 s;

    &:hover{
        scale: 1.05;
    }
}

.attractionsImg{
    width: 30%;
    height: 95%;
    // border: 1px solid black;
    margin-left: 1%;
}

.imgItem{
    width: 100%;
    height:100% ;
    object-fit: cover;
    overflow: hidden;
    // border: 1px solid rgb(255, 0, 0);
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
    width: 80%;
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

.introductionArea{
    position: absolute;
    top:0;
    right:0% ;
    width: 100%;
    height: 160dvh;
    display: flex;
    justify-content: left;
    align-items: top;
    background: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    z-index:999;
    margin-top: 2%;
}

.introductionText{
    padding: 2%;
    border-radius:5px ;
    border: 1px solid rgba(255, 255, 255, 0);
    box-shadow: 2px 2px 5px black;

    .introductionName{
        font-size: 46px;
    }

    .introductionIn,
    .introductionSu{
        font-size: 16px;
    }

    h3{
        font-size: 28px;
        margin: 1% 0,
    }

    .goButton{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .buttonBack{
        margin-top: 2%;
        font-size: 28px;
    }
}
</style>