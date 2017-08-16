/**
 * Created by HP on 2017/6/18.
 */
/*游戏特效页面头部部分开始*/

    //鼠标移动到QQ图标上时，tencent-link盒子显示
    //获取元素
    var tencent =document.getElementsByClassName("tencent")[0];
    var tencentTwo  =document.getElementsByClassName("tencent-two")[0];
    var tencentLink =document.getElementsByClassName("tencent-link")[0];
    var tencentThree =document.getElementsByClassName("tencent-three")[0];
    var weixinThree =document.getElementsByClassName("weixin-three")[0];
    //绑定一个鼠标移入事件
    tencentThree.onmouseenter= function () {
            //对应的盒子显示
            //this.style.width="35px";
            ////this.style.transform="scale(1.1,1.1)";
            //this.style.height="35px";
            //this.style.position="105px 0px";
            //this.style.background="url("+"images/index_z_d844bc8.png"+")";
            //this.style.backgroundPosition="-732px -90px";
            show(tencentTwo);
            hide(tencent);
            show(tencentLink);
            //tencentLink.style.display="block";
        };
    //绑定一个鼠标移出事件
    tencentThree.onmouseleave= function () {
        //对应的盒子显示

        //this.style.width="24px";
        //this.style.height="24px";
        //this.style.background="url("+"images/index_z_d844bc8.png"+")";
        //this.style.backgroundPosition="-785px -150px";
        show(tencent);
        hide(tencentTwo);
        hide(tencentLink);
        //tencentLink.style.display="none";
    };

    //鼠标移入到微信图标的时候，显示下面的div，离开的时候隐藏
    //获取元素
    var weiXin =document.getElementsByClassName("weixin")[0];
    var weixinTwo =document.getElementsByClassName("weixin-two")[0];
    var weixinLink =document.getElementsByClassName("weixin-link")[0];
    //绑定一个鼠标移入事件
    weixinThree.onmouseenter= function () {
        //this.style.width="35px";
        //this.style.transform="scale(1.1,1.1)";
        //this.style.height="35px";
        //this.style.position="105px 0px";
        //this.style.background="url("+"images/index_z_d844bc8.png"+")";
        //this.style.backgroundPosition="-767px -90px";
        show(weixinTwo);
        hide(weiXin);
        weixinLink.style.display="block";
    };

    //绑定一个鼠标移出事件
    weixinThree.onmouseleave= function () {
        //对应的盒子显示

        //this.style.width="24px";
        //this.style.height="24px";
        //this.style.background="url("+"images/index_z_d844bc8.png"+")";
        //this.style.backgroundPosition="-881px -51px";
        weixinLink.style.display="none";
        hide(weixinTwo);
        show(weiXin);
    }

    //鼠标移入头部li标签的时候，span盒子显示
    //获取元素
    var headMain =document.getElementsByClassName("head-main")[0];
    //var ul =headMain.children[0];
    var liArr =headMain.getElementsByClassName("head-main-title");
    var spanArr =headMain.getElementsByClassName("head-main-bg");
    var aArr= headMain.getElementsByClassName("head-main-a");
    //遍历每个li标签
    for(var i=1;i<liArr.length;i++){
        liArr[i].index = i;
        //给每个li标签绑定一个鼠标移入事件
        liArr[i].onmouseenter= function () {
            animatett(aArr[this.index],{"left":66});
            animatett(spanArr[this.index],{"opacity":1});
        };
        //给每个li标签绑定一个鼠标移出事件
        liArr[i].onmouseleave= function () {
            animatett(aArr[this.index],{"left":33});
            animatett(spanArr[this.index],{"opacity":0})
        }
    }




/*游戏特效页面头部部分结束*/


/*......................唯美和风 奇幻之旅.........................*/

/*第一部分开始*/
    //页面打开之后，左右两个门向中合并
    //给第二个页面中间的整体绑定一个事件
    //获取元素
    window.addEventListener("load", function () {
        var mainPagebigImg =document.getElementsByClassName("main-page-bigImg")[0];
        var pic1 =document.getElementsByClassName("main-page-leftdoor")[0];
        var pic2 =document.getElementsByClassName("main-page-rightdoor")[0];
        var themePic =document.getElementsByClassName("theme-pic")[0];
        var circle =document.getElementsByClassName("circle")[0];
        var appLinks =document.getElementsByClassName("app-links")[0];
        //var intro =document.getElementById("intro");
        console.log(pic1);
        //
		animatett(pic1,{"left":0},function(){
           mainPagebigImg.style.display= "block";
            themePic.style.display="block";
            appLinks.style.display="block";
        });
		animatett(pic2,{"right":0});
        //animate(intro,{"top":0});

    });



    //鼠标移入mainpage盒子的时候，云和花瓣移动
    var mainPage = document.getElementById("mainPage");
    var mainPageFlowers = mainPage.getElementsByClassName("main-page-flowers")[0];
    var mainPageFlowers2 = mainPage.getElementsByClassName("main-page-flowers2")[0];
    var cloud1 =mainPage.getElementsByClassName("cloud1")[0];
    var cloud2 =mainPage.getElementsByClassName("cloud2")[0];

    mainPage.onmouseenter= function () {

        animatett(cloud1,{"left":3});
        animatett(cloud2,{"right":-25});
        animatett(mainPageFlowers,{"top":-15});
        animatett(mainPageFlowers2,{"bottom":25})


    }

    mainPage.onmouseleave= function () {
        animatett(cloud1,{"left":0});
        animatett(cloud2,{"right":-20});
        animatett(mainPageFlowers,{"top":-20});
        animatett(mainPageFlowers2,{"bottom":20})
    }
    //控制二维码中的线移动
    //获取元素
    var lines = document.getElementsByClassName("lines")[0];
    var badercoBox =document.getElementById("badercoBox");

    fn(lines,109);
    function fn(ele,target){

        //使用计时器之前先清除计时器
        clearInterval(ele.timer);
        //设置计时器
        ele.timer = setInterval(function () {

            //设置步长
            var step =target>ele.offsetTop?5:-5;
            //赋值
            ele.style.top =ele.offsetTop+step +"px";
            if( Math.abs(target - ele.offsetTop) <= Math.abs(step) ) {
                ele.style.top ="5px";
                clearInterval(ele.timer);
                fn(lines,109);
            }

            },100)
    }



/*第一部分结束*/


/*第二个页面开始*/

//获取元素
    var protagonist =document.getElementById("protagonist");
    var theatre = document.getElementById("theatre");
    var testbox1 =document.getElementById("testbox1");
    var testbox2 =document.getElementById("testbox2");
    var worldView =document.getElementById("worldView");
    var secondPage =document.getElementById("second-page");


    document.onscroll = function () {
        animatett(intro,{"top":0});
    }

    //鼠标进入的时候盒子显示，移出的时候隐藏
    worldView.onmouseenter= function () {
        this.style.opacity=1;
        theatre.style.display="none";
        protagonist.style.display="none";
    }
    testbox1.onmouseenter= function () {
        protagonist.style.display="block";
        worldView.style.opacity=0;
        theatre.style.display="none";
    }


    //testbox1.onmouseleave= function () {
    //    protagonist.style.display="none";
    //
    //}
    //
    testbox2.onmouseenter= function () {
        theatre.style.display="block";
        protagonist.style.display="none";
        worldView.style.opacity=0;
    }

    //testbox2.onmouseleave= function () {
    //    theatre.style.display="none";
    //}


    //
    //window.addEventListener("load", function () {
    //    var intro =document.getElementById("intro");
    //    animatett(intro,{"top":0});
    //
    //})








    //获取元素

    var protagonist =document.getElementById("protagonist");
    var testbox1 =document.getElementById("testbox1");
    var theatre =document.getElementById("theatre");
    var testbox2 =document.getElementById("testbox2");
    //var testbox3 =document.getElementById("testbox3");
    var intro =document.getElementById("intro");
    var protagonistPage=document.getElementById("protagonist-page");
    var theatrePage =document.getElementById("theatre-page");

    //世界观
    //点击世界观的时候，显示对应的盒子，其他的隐藏
    worldView.onclick = function () {
        intro.style.top ="891px";
        animatett(intro,{"top":0});
        protagonistPage.style.bottom="-891px";
        theatrePage.style.bottom="-538px";
        show(intro);
        //console.log(1);
        hide(protagonistPage);
        hide(theatrePage);
        //animate(proProtaprotagonist,{"bottom":"-891"})
        //animate(theatrePage,{"bottom":"-891"})


    }

    testbox1.onclick= function () {
        intro.style.top="891px";
        protagonistPage.style.bottom="-891px";
        theatrePage.style.bottom="-538px";
        animatett(protagonistPage,{"bottom":0})
        show(protagonistPage);
        hide(intro);
        hide(theatrePage);
        show(proPictures);
        hide(godPictures);
        //animate(intro,{"top":"891"})

        //intro.setAttribute("style:","top:891px") ;

    }

    testbox2.onclick= function () {
        intro.style.top="891px";
        protagonistPage.style.bottom="-891px";
        theatrePage.style.bottom="-538px";
        show(theatrePage);
        animatett(theatrePage,{"bottom":153});
        hide(intro);
        hide(protagonistPage);

    }


    //鼠标移动到式神上的时候，更改背景图，点击式神的时候，显示对应的盒子
    var proProtaprotagonist =document.getElementById("pro-protaprotagonist");
    var proGod =document.getElementById("pro-god");
    var godPictures = document.getElementById("god-pictures");

    proProtaprotagonist.onmouseenter= function () {
        this.style.background="url("+"images/zj_icon_ac_72c4a97.png)";
        proGod.style.background="url("+"images/zj_icon_b690ee2.png)";
    }
    proGod.onmouseenter= function () {
        this.style.background="url("+"images/zj_icon_ac_72c4a97.png)";
        proProtaprotagonist.style.background="url("+"images/zj_icon_b690ee2.png)";
    }

    //proGod.onmouseleave= function () {
    //    this.style.background="url("+"images/zj_icon_b690ee2.png)";
    //}

    //鼠标移入a标签，对应的div显示
    var proPictures =document.getElementById("pro-pictures");
    var newAArr =proPictures.getElementsByTagName("a");
        //遍历每个a标签
    for(var i=0; i<newAArr.length;i++){
        newAArr[i].index = i;
        var audio =document.createElement("audio");
        //给每个a标签绑定一个鼠标移入事件
        newAArr[i].onmouseenter= function () {
            audio.src ="music/"+(this.index+1)+".mp3";
            audio.play();
            var p=newAArr[this.index].getElementsByTagName("p")[0];
            animatett(p,{"bottom":5,"opacity":1})

            //show(p);
        }

        //给每个a标签绑定一个鼠标移除事件
        newAArr[i].onmouseleave= function () {
            var p=newAArr[this.index].getElementsByTagName("p")[0];
            animatett(p,{"bottom":-146,"opacity":0});
            audio.pause();
            //hide(p);
        }
    }

        //给主角和式神盒子注册一个点击事件
        proProtaprotagonist.onclick= function () {
            proPictures.style.bottom="-442px";
            show(proPictures);
            animatett(proPictures,{"bottom":150});
            hide(godPictures);
            hide(lisBtns);
            proProtaprotagonist.style.background="url("+"images/zj_icon_ac_72c4a97.png)";
        }

        proGod.onclick= function () {
            godPictures.style.bottom="-442px";
            animatett(godPictures,{"bottom":150});
            show(godPictures);
            hide(proPictures);
            show(lisBtns);
            proProtaprotagonist.style.background="url("+"images/zj_icon_b690ee2.png)";
        }


    //给式神下面的盒子添加背景
    var imgArr =godPictures.getElementsByClassName("imgs");
    //遍历每张图片
    for(var i=0;i<imgArr.length;i++){
        imgArr[i].src="images/"+(i+2)+".png";


    }

        //式神轮播图
        //获取元素
        var godPictures = document.getElementById("god-pictures");
        var ol =godPictures.getElementsByTagName("ol")[0];
        var godLiArr =ol.getElementsByTagName("li");
        var lisBtns = document.getElementsByClassName("lis-btns")[0];
        var ul =lisBtns.getElementsByTagName("ul")[0];
        var godUlArr = ul.getElementsByTagName("li");
        var leftArrow = document.getElementsByClassName("left-arrow")[0];
        var rightArrow =document.getElementsByClassName("right-arrow")[0];
        //    var godImgWidth =godLiArr[0].offsetWidth+15;
        //console.log(godLiArr[0].offsetWidth);
        //console.log(godImgWidth);
        //console.log(godImgWidth);



        //克隆ol中的第一个追加到ol中
        var godNewLi =godLiArr[0].cloneNode(true);
        ol.appendChild(godNewLi);
        //1.鼠标放在ul上，让ol移动;
        //自定义两个索引值，一个可控制小方块，一个控制图片
        var square = 0;
        var key =0;
        //使用for循环为ul中的li绑定事件
        for(var i=0; i<godUlArr.length;i++){
            //自定义属性获取li标签的下标值
            godUlArr[i].index =i;
            //给每个li标签注册一个鼠标移入事件
            godUlArr[i].onmouseenter= function () {
                key++;
                if(key==12){
                    ol.style.left =0;
                }

                square = key =this.index;
                //移动ol,获取适索引值
                animate1(ol,-this.index*309);

            }
        }

        //点击右侧小三角，移动ol
        rightArrow.onclick= function () {
            square++;
            key++;
            //小方块有8个，最大索引值为7，等于8的时候，回归0
            if(square===godUlArr.length){
                square=0;
            }

            //图片有13张，最大索引值为12，等于13的时候，回归1
            if(key==9){

                ol.style.left=0;
                key=1;
            }

            //移动ol
            for(var j=0;j<godUlArr.length;j++){

                animate1(ol,-key*309);

            }
        }

        //点击左侧小三角
        leftArrow.onclick= function () {
            square--;
            key--;
            //小方块有8个，最小索引值为0，等于-1的时候，回归7；
            if(square==-1){
                square = godUlArr.length-1;
            }

            //图片有13张，最小索引值为0；等于-1的时候，回归11；
            if(key==-1){

                ol.style.left=-(godLiArr.length-4)*309+"px";
                key=godLiArr.length-5;
            }

            //移动ol
            for(var j=0;j<godUlArr.length;j++){

                animate1(ol,-key*309);
            }

        }


/*第二个页面结束*/

////缓动动画（1.参数：元素   2.json;）
        //function animate(ele,json){
        //    //清除定时器
        //    clearInterval(ele.timer);
        //    ele.timer = setInterval(function () {
        //        //利用for...in...遍历json;
        ////                for(var k in json){
        ////                    k: 属性；
        ////                    json[k]: k属性对相应的值；
        ////                }
        //        //(1).把attr替换成k;
        //        //(2).把target替换成json[k];
        //        for(var k in json){
        //            //获取步长
        //            var leader = parseInt(getStyle(ele,k)) || 0;//当前状态
        //            var step = (json[k] - leader)/10;
        //            //二次处理
        //            step = step>0?Math.ceil(step):Math.floor(step);
        //            //赋值
        //            leader = leader + step;
        //            ele.style[k] = leader + "px";
        //            //清除定时器
        //            console.log(1);
        //
        //
        //        }
        //    },30);
        //}



//匀速动画的封装
function animate1(ele,target) {
    //bug1：要用定时器，先清除定时器；
    clearInterval(ele.timer1);
    //定义一个定时器；
    ele.timer1 = setInterval(function () {
        //获取步长
        var step = target > ele.offsetLeft ? 10 : -10;
        //赋值
        ele.style.left = ele.offsetLeft + step + "px";
        //console.log(1);
        //目标位置和当前位置不足一个步长的时候；直接赋值并清除定时器
        if( Math.abs(target - ele.offsetLeft) <= Math.abs(step) ){
            ele.style.left = target + "px";
            clearInterval(ele.timer1);
        }
    },10);
}

function animatebf(ele,json,fn){
    //清除定时器
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        //开闭原则：
        var bool = true;
        for(var k in json){
            //操作属性在for循环中，特殊属性特殊处理；
            //进行if判断；判断k的值；

            if(k === "z-index"){//层级的：直接一步到位设置为目标值，不干涉到清除定时器；
                ele.style.zIndex = json[k];

            }else if(k === "opacity"){//透明度：1.小数(放大在缩小)；    2.兼容
                //获取步长
                //获取值的时候放大10/100方便运算，赋值的时候在缩小10/100;

                //如果取值为0，按0算，如果取值为空字符串，按1算；
                if(getStyle(ele,k) === "0"){
                    var leader = 0;
                }else{
                    var leader = parseInt(getStyle(ele,k)*10) || 10;
                }
                var step = (parseInt(json[k]*10) - leader)/10;
                //二次处理
                step = step>0?Math.ceil(step):Math.floor(step);
                //赋值
                leader = leader + step;
                //透明度赋值：1.缩小10/100;   2.不带单位；   3.兼容ie678;
                ele.style.opacity = leader/10;
                //兼容ie678;
                ele.style.filter = "alpha(opacity="+leader*10+")";

                //没有到达指定位置，不允许清除定时器
                if(json[k] !== leader/10){
                    bool = false;
                }
            }else{//正常属性；

                //获取步长
                var leader = parseInt(getStyle(ele,k)) || 0;
                var step = (json[k] - leader)/10;
                //二次处理
                step = step>0?Math.ceil(step):Math.floor(step);
                //赋值
                leader = leader + step;
                ele.style[k] = leader + "%";
                //没有到达指定位置，不允许清除定时器
                if(json[k] !== leader){
                    bool = false;
                }
            }
        }
        //清除定时器
        console.log(1);
        if(bool){
            clearInterval(ele.timer);
            if(fn){
                fn();
            }
        }
    },30);
}







        //缓动动画
        function animatett(ele,json,fn){
            //清除定时器
            clearInterval(ele.timer);
            ele.timer = setInterval(function () {
                //开闭原则：
                var bool = true;
                for(var k in json){
                    //操作属性在for循环中，特殊属性特殊处理；
                    //进行if判断；判断k的值；

                    if(k === "z-index"){//层级的：直接一步到位设置为目标值，不干涉到清除定时器；
                        ele.style.zIndex = json[k];

                    }else if(k === "opacity"){//透明度：1.小数(放大在缩小)；    2.兼容
                        //获取步长
                        //获取值的时候放大10/100方便运算，赋值的时候在缩小10/100;

                        //如果取值为0，按0算，如果取值为空字符串，按1算；
                        if(getStyle(ele,k) === "0"){
                            var leader = 0;
                        }else{
                            var leader = parseInt(getStyle(ele,k)*10) || 10;
                        }
                        var step = (parseInt(json[k]*10) - leader)/10;
                        //二次处理
                        step = step>0?Math.ceil(step):Math.floor(step);
                        //赋值
                        leader = leader + step;
                        //透明度赋值：1.缩小10/100;   2.不带单位；   3.兼容ie678;
                        ele.style.opacity = leader/10;
                        //兼容ie678;
                        ele.style.filter = "alpha(opacity="+leader*10+")";

                        //没有到达指定位置，不允许清除定时器
                        if(json[k] !== leader/10){
                            bool = false;
                        }
                    }else{//正常属性；

                        //获取步长
                        var leader = parseInt(getStyle(ele,k)) || 0;
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
                }
                //清除定时器
                console.log(1);
                if(bool){
                    clearInterval(ele.timer);
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

            //显示盒子
            function show(ele){
            ele.style.display="block";
            }
            //隐藏盒子
            function hide(ele){
                ele.style.display="none";
            }







