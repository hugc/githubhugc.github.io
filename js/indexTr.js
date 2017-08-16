/**
 * Created by 小只熊 on 2017/6/21.
 */
window.onload = function(){
    var navHeight = document.getElementsByClassName("samePerBanner")[0];
    var top = document.getElementsByClassName("wrapTr")[0];
    document.onscroll =function () {
        if (scroll().top >= navHeight.offsetHeight){
            navHeight.className = "samePerBanner topBannerFixedNav";
            top.style.marginTop = navHeight.offsetHeight + "px";
        }else {
            navHeight.className = "samePerBanner";
            top.style.marginTop = 0;
        }
    }
    var arrOfJson = [

        {//1
            height:520,
            width:520,
            left:170,
            top:56,
            opacity:0.6,
            "z-index":3
        },
        {//2
            height:780,
            width:780,
            left:560,
            top: -84,
            opacity:1,
            "z-index":4
        },
        {//3
            height:520,
            width:520,
            left:1213,
            top:56,
            opacity:0.6,
            "z-index":3
        },
        {
            height:520,
            width:520,
            left:690,
            top:56,
            opacity:0,
            "z-index":3
        },
        {
            height:520,
            width:520,
            left:690,
            top:56,
            opacity:0,
            "z-index":3
        },
        {
            height:520,
            width:520,
            left:690,
            top:56,
            opacity:0,
            "z-index":3
        },
        {
            height:520,
            width:520,
            left:690,
            top:56,
            opacity:0,
            "z-index":3
        },
        {
            height:520,
            width:520,
            left:690,
            top:56,
            opacity:0,
            "z-index":3
        }
    ];

    var slideTr = document.getElementById("slideTr");
    var liArrTr = slideTr.getElementsByTagName("li");
    var ulImg = document.getElementById("ulImg");
    var logoLoad = document.getElementById("logoLoad");
    var erweima = document.getElementById("erweima");
    var pageTopHeight = document.getElementsByClassName("top")[0];
    //banner栏的下载标签鼠标放上去显示二维码
    logoLoad.onmouseenter = function () {
        erweima.style.display = "block";
    }
    logoLoad.onmouseleave = function () {
        erweima.style.display = "none";
    }
    //中间部分自动轮播图
    for (var i = 0; i < liArrTr.length; i++){
        animateTr(liArrTr[i],arrOfJson[i]);
    }
    timer=setInterval(function () {
        ulImg.insertBefore(ulImg.lastElementChild,ulImg.firstElementChild);
        for (var i = 0; i < liArrTr.length; i++){
            animateTr(liArrTr[i],arrOfJson[i]);
        }
    },2000);

    function animateTr(element,jsonTr,fnTr){
        clearInterval(element.timer);
        element.timer = setInterval(function(){

            var bool =true;
            for (var k in jsonTr ){
                if(k === "z-index"){
                    element.style.zIndex = jsonTr[k];
                }else if(k ==="opacity"){
                    if(getStyleTr(element,k)===0){
                        var leader = 0;
                    }else{
                        var leader = parseInt(getStyleTr(element,k)*50) || 10;
                    }
                    var step = (parseInt(jsonTr[k]*50)-leader)/10;
                    step = step>0?Math.ceil(step):Math.floor(step);
                    leader = leader + step;
                    element.style.opacity = leader/20;
                    element.style.filter = "alpha(opacity="+leader*10+")";
                    if(jsonTr[k] !== leader/50){
                        bool=false;
                    }
                }else{
                    var leader = parseInt(getStyleTr(element,k)) || 0;
                    var step = (jsonTr[k] - leader)/10;
                    step = step>0?Math.ceil(step):Math.floor(step);
                    leader = leader + step;
                    element.style[k] = leader + "px";
                    if(jsonTr[k] !== leader){
                        bool = false;
                    }
                }
            }
            if(bool){
                clearInterval(element.timer);
                if(fnTr){
                    fnTr();
                }
            }
        },30)
    }

    function getStyleTr(element,attrTr){
        if(window.getComputedStyle){
            return window.getComputedStyle(element,null)[attrTr];
        }else{
            return element.currentStyle[attrTr];
        }
    }

    // =========================================================================


    /**
     * Created by 李书毅 on 2017/6/20.
     */
    var pagePic=document.getElementById("pagePic");
    var liArr=pagePic.getElementsByTagName("li");


//侧边导航栏
    var rightBar=document.getElementById("rightBar")
    window.onscroll=function(){
        //console.log(1);
        if(scroll().top>=pageTopHeight.offsetHeight/2){
            rightBar.style.display="block";
            //console.log(2);
            for(var i = 0 ; i <5 ; i++){
                animate(liArr[i],json,function(){
                    for(var j= 5 ; j<10 ; j++){
                        animate(liArr[j],json,function(){
                            for(var k = 10 ; k <15; k++){
                                animate(liArr[k],json,function(){
                                    //for(var l = 15 ; l <20 ; l++){
                                    animate(liArr[15],json)
                                    animate(liArr[16],json)
                                    animate(liArr[17],json)
                                    animate(liArr[18],json)
                                    animate(liArr[19],json,auto)
                                    //}
                                })
                            }
                        })
                    }
                })
            }
        }else{
            rightBar.style.display="none";
        }
    }
//下载游戏模块显示和隐藏
    var game=rightBar.getElementsByClassName("downloadGame")[0];
    game.onmouseenter=function(){
        rightBar.getElementsByClassName("game")[0].style.display="block";
    }
    game.onmouseleave=function(){
        rightBar.getElementsByClassName("game")[0].style.display="none";
    }
//返回顶部按钮功能
    var returnTop=rightBar.getElementsByClassName("returnTop")[0]
    var timerr = null;
    var target = 0; //目标位置
    var leader = 0; //显示区域自身的位置
    returnTop.onclick = function () {
        //技术点：window.scrollTo(0,0);
        //要用定时器，先清定时器
        clearInterval(timerr);
        timerr = setInterval(function () {
            var step = (target-leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader +step;
            window.scrollTo(0,leader);
            if(leader === 0){
                clearInterval(timerr);
            }
        },40);
    }


//瀑布流  整体高度2100px  每行高度 520px

//图片初始位置
    //第一行初始位置
    for(var j =0; j <=4 ; j++){
        liArr[j].style.top="-530px";
    }
    //第二行初始位置
    for(var j = 5; j <=9; j++){
        liArr[j].style.top="-1050px";
    }
    //第三行初始位置
    for(var j = 10; j <=14; j++){
        liArr[j].style.top="-1570px";
    }
    //第四行初始位置
    for(var j = 15; j <=19; j++){
        liArr[j].style.top="-2090px";
    }
    for (var i = 0; i < liArr.length; i++){
        liArr[i].style.display = "block";
    }
    var json={"top":0};
    var timer = null;//自动轮播定时器

    //var tim=setTimeout(auto,6000);
    //鼠标进入盒子停止自动高亮
    pagePic.onmouseenter = function () {
        clearInterval(timer);
    }
    pagePic.onmouseleave = function () {
        timer = setInterval(autoPlay,1500)
    }
//随机高亮 和鼠标悬停高亮封装
    function auto(){
        //随机高亮一张图片
        clearInterval(timer);
        timer=setInterval(autoPlay,1500)

        //鼠标进入停止随机高亮，并高亮当前鼠标悬停的图片
        for(var i = 0 ; i < liArr.length; i++){
            liArr[i].onmouseenter=function(){
                for(var j = 0 ; j < liArr.length; j++){
                    liArr[j].style.opacity=0.6;
                }
                clearInterval(timer);
                this.style.opacity=1;
            }
            // liArr[i].onmouseleave=function(){
            //     timer=setInterval(autoPlay,1000)
            // }
        }
    }




//自动高亮封装

    function autoPlay(){
        var sum;
        var flagBianliang = 22;
        for(var i = 0 ; i < liArr.length; i++){
            sum=Math.floor(Math.random()*20);
            while (sum===flagBianliang){//若产生的数与上次一样，请重新产生
                sum=Math.floor(Math.random()*20);
            }
            flagBianliang = sum;
            for(var j = 0 ; j < liArr.length; j++){
                liArr[j].style.opacity=0.6;
            }
            console.log(111);
            liArr[sum].style.opacity=1;
        }
    }

// //获取页面被遮挡/卷去的部分
//     function scroll(){
//         return {
//             top: window.pageYOffset || document.documentElement.scrollTop,
//             left: window.pageXOffset || document.documentElement.scrollLeft
//         };
//     }
}


//缓动动画（1.参数：元素   2.json;）
function animate(ele,json,fn){
    //清除定时器
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        //开闭原则：
        var bool = true;

        //利用for...in...遍历json;
//                for(var k in json){
//                    k: 属性；
//                    json[k]: k属性对相应的值；
//                }
        //(1).把attr替换成k;
        //(2).把target替换成json[k];
        for(var k in json){
            //获取步长
            var leader = parseInt(getStyle(ele,k)) || 0;//当前状态
            var step = (json[k] - leader)/10;
            //二次处理
            step = step>0?Math.ceil(step):Math.floor(step);
            //赋值
            leader = leader + step;
            ele.style[k] = leader + "px";
            //没有到达指定位置，不允许清除定时器
            if(json[k] !== leader){
                bool = false;
            }
        }
        //清除定时器
        //1.不能写在for里面；
        //2.保证所有元素都到达指定位置在清除定时器
        console.log(1);
        //所有元素都到达目标位置才清除定时器；
        if(bool){
            clearInterval(ele.timer);
            //传递了函数我就调用，不传递，不调用；
//                    if(fn && typeof fn == "function"){
            if(fn){
                fn();
            }
        }
    },30);
}


//获取的属性值为字符串
function getStyle(ele,attr){
    //第一种
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }else{
        return ele.currentStyle[attr];
    }
}