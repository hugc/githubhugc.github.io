/**
 * Created by Administrator on 2017/6/18.
 */

//============唯美和风 精品大作左边导航================
    var leftNav = document.getElementById("leftNav");
    var picNews = leftNav.getElementsByTagName("span");
    var gamePic = document.getElementById("gamePic");
    var showPic = document.getElementById("showPic");
    var picWorks = document.getElementById("picWorks");
    var artLogo = document.getElementById("artLogo");
    var divArr = [gamePic,showPic,picWorks];
    for(var i = 0 ; i < picNews.length; i++){
        picNews[i].index = i;
        picNews[i].onclick = function(){
            if(this.style.opacity == "1"){
                return;
            }
            for(var j = 0 ; j < picNews.length; j++){
                picNews[j].style.opacity = "0";
                divArr[j].style.display = "none";
                divArr[j].style.top = 950 +"px";
            }
            this.style.opacity = "1";
            divArr[this.index].style.display = "block";
            animate(divArr[this.index],{"top":40});
            animate(artLogo,{"top":30});
            artLogo.style.display = "block";
        }
    }
    //===============固定导航================
    var rightFixed = document.getElementById("rightFixed");
    var rightFixedSpanArr = rightFixed.getElementsByTagName("span");
    var rightFixedIArr = rightFixed.getElementsByTagName("i");


    var leader = 0;

    var mainPage = document.getElementById("mainPage");
    var secondPage = document.getElementById("second-page");
    var art = document.getElementById("art");
    var soundBg = document.getElementById("soundBg");
    var explore = document.getElementById("explore");



    //for(var cc = 0 ; cc < gamesArr.length; cc++){
    //    gamesArr[cc].index = cc;
    //}
//右边固定定位index值
    var dwf = 0;
    var tt = 0;
    window.onscroll = function(){

    if(scroll().top>1500 && tt==0){
        animate(gamePic,{"top":40});
        animate(artLogo,{"top":30});
        artLogo.style.display = "block";
        tt++;
    }
    if(scroll().top>2400 && tt==1){
        animate(soundContent,{"top":60});
        soundContent.style.display = "block";
        tt++;
    }
    if(scroll().top>3400 && tt==2){
        animate(explorePlay,{"top":300});
        explorePlay.style.display = "block";
        tt++;
    }

        leader = Math.ceil(scroll().top);

        //console.log(leader);
        if(leader>=0){
            dwf = 0;
            dw();
        }
        if(leader>700){
            dwf = 1;
            dw();
        }
        if(leader >1500){
            dwf = 2;
            dw();
        }
        if(leader >2400){
            dwf = 3;
            dw();
        }
        if(leader >3250){
            dwf = 4;
            dw();
        }
        //右边定位函数
        function dw (){
            for(var c = 0 ; c < rightFixedSpanArr.length; c++){
                rightFixedSpanArr[c].style.background = "url(images/fc.png)";
                rightFixedIArr[c].style.display = "none";
            }
            rightFixedSpanArr[dwf].style.background = "url(images/cc.png)";
            rightFixedIArr[dwf].style.display = "block";
            dwf = 0 ;
        }
    };


var gamesArr = [mainPage,secondPage,art,soundBg,explore];
var target = 0;
//var nnn = 0;
        for(var v = 0 ; v < rightFixedSpanArr.length; v++){
            rightFixedSpanArr[v].index = v;
            rightFixedSpanArr[v].onclick = function(){
                var abc = rightFixedSpanArr[this.index];
                target = gamesArr[this.index].offsetTop;

                console.log(target);

                clearInterval(abc.timer);
                abc.timer = setInterval(function () {
                    //获取步长
                    var step = (target-leader)/10;
                    //二次处理
                    step = step>0?Math.ceil(step):Math.floor(step);
                    //赋值
                    leader = leader + step;
                    window.scrollTo(0,leader);
                    //清除定时器
                    if(target === leader){
                        console.log(9);
                        console.log(abc);
                        clearInterval(abc.timer);
                        //rightFixedSpanArr[this.index]
                    }
                },30);



            }
        }

//========唯美和风 精品大作游戏截图开始=======================
    //大图
    var gamePicList = document.getElementById("gamePicList");
    var gameLiArr = gamePicList.getElementsByTagName("li");

    var gamePicNav = document.getElementById("gamePicNav");
    var gameMinArr = gamePicNav.getElementsByTagName("li");
    //==========游戏截图下方导航span元素获取=========
    var gamePicNavUl = document.getElementById("gamePicNavUl");
    var gamePicNavLeft = document.getElementById("gamePicNavLeft");
    var gamePicNavRight = document.getElementById("gamePicNavRight");

    var firstLi1 = gamePicList.firstElementChild;
    var lastLi1 = firstLi1.cloneNode(true);
    gamePicList.appendChild(lastLi1);
    var firstLi2 = gamePicNavUl.firstElementChild;
    var lastLi2 = firstLi2.cloneNode(true);
    gamePicNavUl.appendChild(lastLi2);
    var arrPicLi = gamePicNavUl.children;

    var leaget = parseInt(getStyle(gameLiArr[0],"width"));
    //==========for循环遍历每一个li=================
    for(var i = 0 ; i < gameLiArr.length; i++){
        gameMinArr[i].index = i;
        gameMinArr[i].onmouseover = function(){
            for(var j = 0 ; j < gameLiArr.length; j++){
                gameMinArr[j].className = "";
            }
            this.className = "bd-color";
            animate(gamePicList,{"left":-leaget*this.index});
        };
        gameMinArr[i].onmouseout = function(){
            this.className = "";
        }
    }
    var num = 0;
    var mv =0;
var flag = true;
var json5 = [{left:0,opacity:0},
                {left:75,opacity:0},
                {left:150,opacity:1},
                {left:225,opacity:1},
                {left:300,opacity:1},
                {left:375,opacity:1},
                {left:450,opacity:1},
                {left:525,opacity:0},
                {left:600,opacity:0},
                {left:675,opacity:0},
                {left:750,opacity:0}

    ];
for(var zx = 0 ; zx < arrPicLi.length; zx++){
    animate(arrPicLi[zx],json5[zx]);
}
    gamePicNavLeft.onclick = function(){
        num++;
        mv++;
        if(num == 11){
            num = 1;
            gamePicList.style.left = 0;
        }
        if(flag){
            flag = false;
            showPict(true,json5,arrPicLi);
        }
        animate(gamePicList,{"left":-leaget*num});
    };
    gamePicNavRight.onclick = function(){
        num--;
        if(flag){
            flag = false;
            showPict(false,json5,arrPicLi);
        }
        if(num == -1){
            num = 9;
            gamePicList.style.left = -leaget*10 + "px";
        }
        animate(gamePicList,{"left":-leaget*num});
    };



//================唯美和风 精品大作游戏截图结束=======================


//================唯美和风 精品大作原画展示开始=======================
//=====大轮播图
    var showPicContent = document.getElementById("showPicContent");
//=====左右滑动
    var scrollPicLeft = document.getElementById("scrollPicLeft");
    var scrollPicRight = document.getElementById("scrollPicRight");
    scrollPicLeft.onmouseover = function(){
        animateMm(showPicContent,{"left":-462});
    };
    scrollPicRight.onmouseover = function(){
        animateMm(showPicContent,{"left":0});
    };
    scrollPicLeft.onmouseout = function(){
        animateMm(showPicContent,{"left":0});
    };
    scrollPicRight.onmouseout = function(){
        animateMm(showPicContent,{"left":0});
    };

//============小图左右按钮
    var scrollLeft = document.getElementById("scrollLeft");
    var scrollRight = document.getElementById("scrollRight");
    var scrollBoxNav = document.getElementById("scrollBoxNav");
    var scrollLi = scrollBoxNav.getElementsByTagName("li");
    var st = 1;
    var jsonyh = [{left:0,opacity:1},
                        {left:70,opacity:1},
                        {left:140,opacity:1},
                        {left:210,opacity:1},
                        {left:280,opacity:1},
                        {left:350,opacity:0}];

    for(var m = 0 ; m < scrollLi.length; m++){
        scrollLi[m].index = m;
        animate(scrollLi[m],jsonyh[m]);
        scrollLi[m].onclick = function(){
            showPicContent.style.background = "url(images/"+(this.index+1)+"pp.png)";
        }
    }


    scrollLeft.onclick = function(){
        st++;
        if(flag) {
            flag = false;
            showPict(true,jsonyh,scrollLi);
        }
        if(st>5){
            st = 2;
            showPicContent.style.background = "url(images/"+st+"pp.png)";
        }
        else{
            showPicContent.style.background = "url(images/"+(st+1)+"pp.png)";
        }

    };
    scrollRight.onclick = function(){
        --st;
        if(flag) {
            flag = false;
            showPict(false,jsonyh,scrollLi);
        }
        if(st == 0){
            st = 6;
            showPicContent.style.background = "url(images/"+st+"pp.png)";
        }
        else{
            showPicContent.style.background = "url(images/"+st+"pp.png)";
        }

    };


//================唯美和风 精品大作原画展示结束=======================

//================唯美和风 精品大作同人作品开始=======================
    var picWorksPicLi = document.getElementById("picWorksPicLi");
    var picWorksPicDiv = picWorksPicLi.parentNode;
    var picWorksPicLiArr = picWorksPicLi.children;


    for(var b = 0 ; b < picWorksPicLiArr.length; b++){
        picWorksPicLiArr[b].style.cursor = "pointer";
        picWorksPicLiArr[b].onmouseenter = function(){
            for(var q = 0 ; q < picWorksPicLiArr.length; q++){
                picWorksPicLiArr[q].style.opacity = "0.5";
            }
            this.style.opacity = "1";
            this.style.transform =  "scale(1.15)";
        };
        picWorksPicLiArr[b].onmouseleave = function(){
            for(var q = 0 ; q < picWorksPicLiArr.length; q++){
                picWorksPicLiArr[q].style.opacity = "0.5";
                picWorksPicLiArr[q].style.transform =  "scale(1)";
            }
        };
        picWorksPicDiv.onmouseleave = function(){
            for(var q = 0 ; q < picWorksPicLiArr.length; q++){
                picWorksPicLiArr[q].style.opacity = "1";
                picWorksPicLiArr[q].style.transform =  "scale(1)";
            }
        }
    }


//================唯美和风 精品大作同人作品结束=======================

//=================豪华声优 大师助阵开始=============================

//========豪华声优 大师助阵左边导航=================
    var soundLeftNav = document.getElementById("soundLeftNav");
    var soundLeftArr = soundLeftNav.children;
    var soundContent = document.getElementById("soundContent");
    var battleArray = document.getElementById("battleArray");
    var gameMusic = document.getElementById("gameMusic");
    var soundArr = [soundContent,battleArray,gameMusic];

    for(var j = 0 ; j < soundLeftArr.length; j++){
        soundLeftArr[j].index = j ;
        soundLeftArr[j].onclick = function(){
            if(this.style.opacity == "1"){
                return;
            }
            for(var l = 0 ; l < soundLeftArr.length; l++){
                soundLeftArr[l].style.opacity = "0";
                soundArr[l].style.display = "none";
                soundArr[l].style.top = 1000 + "px";
            }
            this.style.opacity = "1";
            animate(soundArr[this.index],{"top":60});
            soundArr[this.index].style.display = "block";
        }
    }

var jsonArr = [
    {   //  1
        //width:279,
        top:0,
        left:40,
        opacity:0.2,
        "z-index":2
    },
    {  // 2
        //width:279,
        top:30,
        left:170,
        opacity:0.8,
        "z-index":3
    },
    {   // 3
        //width:279,
        top:60,
        left:315,
        opacity:1,
        "z-index":4
    },
    {   // 4
        //width:279,
        top:60,
        left:610,
        opacity:1,
        "z-index":4
    },
    {  // 5
        //width:279,
        top:30,
        left:760,
        opacity:0.8,
        "z-index":3
    },
    {   //6
        //width:279,
        top:0,
        left:870,
        opacity:0.2,
        "z-index":2
    }
];



    var leadDeity = document.getElementById("leadDeity");
//---------式神数组
    var leadDeityArr = leadDeity.getElementsByTagName("li");
    var spanDiv = leadDeity.lastElementChild;
    var spanArr = leadDeity.getElementsByTagName("span");

    for(var i = 0 ; i < leadDeityArr.length; i++){
            animate(leadDeityArr[i],jsonArr[i]);
        }
    animate(spanDiv,{"opacity":0});
    leadDeity.onmouseenter = function(){
        animate(spanDiv,{"opacity":1});
    };
    leadDeity.onmouseleave = function(){
        animate(spanDiv,{"opacity":0});
    };

    spanArr[1].onclick = function(){
        if(flag){
            flag = false;
            showPict(false,jsonArr,leadDeityArr);
        }
        clearInterval(timers);
    };
    spanArr[0].onclick = function(){
        if(flag){
            flag = false;
            showPict(true,jsonArr,leadDeityArr);
        }
        clearInterval(timers);
    };
    var timers = setInterval(function(){
        showPict(false,jsonArr,leadDeityArr)
    },10000);
    function showPict(bool,jsons,arrs){
        if(bool !== undefined){
            if(bool){
                jsons.unshift(jsons.pop());
            }else{
                jsons.push(jsons.shift());
            }
        }
        for(var i=0;i<jsons.length;i++){
            animate(arrs[i],jsons[i], function () {
                flag = true;
            });
        }
    }
    var leadContent = document.getElementById("leadContent");
    var soundTop = document.getElementById("soundTop");
    var soundTopArr = soundTop.children;
    var soundTopArr2 = [leadContent,leadDeity];
    for(var h = 0 ; h < soundTopArr.length; h++){
        soundTopArr[h].index = h;
        soundTopArr[h].onclick = function(){
            for(var r = 0 ; r < soundTopArr.length; r++){
                soundTopArr2[r].style.display = "none";
                soundTopArr[r].style.background = "url(images/zj_icon_b690ee2.png) no-repeat center center";
                soundTopArr[r].style.color = "#feeecf";
            }
            this.style.color = "#a8813c";
            this.style.background = "url(images/zj_icon_ac_72c4a97.png) no-repeat center center";
            soundTopArr2[this.index].style.display = "block";
            //animate(soundTopArr2[this.index],{"top":35});
        }
    }


//==================豪华声优 大师助阵结束===============================


//==================探索收集 丰富玩法开始================================



//=================探索收集 丰富玩法左边导航==============================

    var exploreLeftNav = document.getElementById("exploreLeftNav");
    var exploreNavArr = exploreLeftNav.children;
    var explorePlay = document.getElementById("explorePlay");
    var exploreCopy = document.getElementById("exploreCopy");
    var exploreGuide = document.getElementById("exploreGuide");
    var exploreArr = [explorePlay,exploreCopy,exploreGuide];

    for(var i = 0 ; i < exploreNavArr.length; i++){
        exploreNavArr[i].index = i;
        exploreNavArr[i].onclick = function(){
            if(this.style.opacity == "1"){
                return;
            }
            for(var l = 0 ; l < exploreNavArr.length; l++){
                exploreNavArr[l].style.opacity = "0";
                exploreArr[l].style.display = "none";
                exploreArr[l].style.top = 1000 + "px";
            }
            this.style.opacity = "1";
            animate(exploreArr[this.index],{"top":300});
            exploreArr[this.index].style.display = "block";
        }
    }


//====================探索收集 丰富玩法 特色玩法开始======================

    //左边三个图标
    var playLeft = document.getElementById("playLeft");
    var playLeftArr = playLeft.children;
    //右边三个图标
    var playRight = document.getElementById("playRight");
    var playRightArr = playRight.children;
    //中间轮播图
    var playLbt = document.getElementById("playLbt");
    var playLbtArr = playLbt.children;
    //下方标题
    var playFloot = document.getElementById("playFloot");
    var playFlootArr = playFloot.children;
    var sss = getStyle(playLbt,"width");
    for(var i = 0 ; i < playLeftArr.length; i++){
        playLeftArr[i].index = i ;
        playRightArr[i].index = i+3;
        playFlootArr[i].index = i ;
        playLeftArr[i].onclick = function(){
            for(var j = 0 ; j < playLeftArr.length; j++){
                playLeftArr[j].style.opacity = "0.7";
                playRightArr[j].style.opacity = "0.7";
            }
            this.style.opacity = "1";
            animate(playLbt,{"left":this.index* -535});
            animate(playFloot,{"top":this.index*-50});
        };
        playRightArr[i].onclick = function(){
            for(var j = 0 ; j < playLeftArr.length; j++){
                playLeftArr[j].style.opacity = "0.7";
                playRightArr[j].style.opacity = "0.7";
            }
            this.style.opacity = "1";
            animate(playLbt,{"left":this.index* -535});
            animate(playFloot,{"top":this.index*-50});
        };
    }

//===============探索收集 丰富玩法 特色副本=========================

    var copyIconPic = document.getElementById("copyIconPic");
    var copyIconPicS = copyIconPic.children;
    var iconPicArr = copyIconPic.getElementsByTagName("span");
    var iconPicArrP = copyIconPic.getElementsByTagName("p");
    var iconPicArr2 = copyIconPic.getElementsByTagName("em");

    for(var s = 0 ; s < iconPicArr.length; s++){
        move(iconPicArr[s]);
        //move2(iconPicArr2[s]);
    }
    for(var g = 0 ; g < copyIconPicS.length; g++){
        copyIconPicS[g].index = g;

        copyIconPicS[g].onmouseenter = function(){
            for(var k = 0 ; k < copyIconPicS.length; k++){
                iconPicArrP[k].style.display = "none";
            }
            iconPicArrP[this.index].style.display = "block";
        };
        copyIconPicS[g].onmouseleave = function(){
            for(var k = 0 ; k < copyIconPicS.length; k++){
                iconPicArrP[k].style.display = "none";
            }
        }
    }
console.log(iconPicArrP);
//==================探索收集 丰富玩法结束================================

var stop = document.getElementById("stop");
      move(stop);


 var guidePicSp = document.getElementById("guidePicSp");
       var guidePicSpArr = guidePicSp.children;
        for(var ff = 0 ; ff < guidePicSpArr.length; ff++){
            move(guidePicSpArr[ff]);
        }










