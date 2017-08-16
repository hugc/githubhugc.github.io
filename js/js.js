/**
 * Created by jiang on 2017/6/18.
 */
window.onload = function () {
    //微信扫码
    var QrCode = document.getElementById("Qr-code");
    var line = document.getElementById("line");
    var QrCodea = QrCode.height;
    var H = QrCodea;//可以移动的上下距离；
    var timer = null;
    var h = 0;
    startMove();
    function startMove() {
        clearInterval(timer);
        timer = setInterval(function () {
            h = line.offsetTop;//line 的上距离
            h++;
            if (h >= H) {
                h = 0;
            }
            line.style.top = h + "px";
        }, 25)

    }
    //微信扫码
    //旋转木马的地方
    var arrOfJson = [
        {   //1
            height: 200,
            top: 40,
            left: 260,
            opacity: 0.1,
            "z-index": 2
        },
        {  // 2
            height: 300,
            top: 110,
            left: 0,
            opacity: 0.2,
            "z-index": 3
        },
        {   // 3
            height: 480,
            top: 100,
            left: 100,
            opacity: 1,
            "z-index": 4
        },
        {  // 4
            height: 300,
            top: 100,
            left: 400,
            opacity: 0.1,
            "z-index": 3
        }
    ];
    var slide = document.getElementById("slide");
    var liArr = slide.getElementsByTagName("li");
    var next = document.getElementById("next");
    var flag = true;
    var timer133 = null;
    autoPlay();
    timer133 = setInterval(function () {
        autoPlay(true);
    }, 2500);
    slide.onmouseenter = function () {
        clearInterval(timer133);
    }
    slide.onmouseleave = function () {
        timer133 = setInterval(function () {
            autoPlay(true);
        }, 2500);
    }
    next.onclick = function () {
        if (flag) {
            autoPlay(true);
            flag = false;
        }
    }
    function autoPlay(bool) {
        if (bool !== undefined) {
            if (bool) {
                arrOfJson.push(arrOfJson.shift());
            } else {
                arrOfJson.unshift(arrOfJson.pop());
            }
        }
        for (var i = 0; i < liArr.length; i++) {
            animate(liArr[i], arrOfJson[i], function () {
                flag = true;
            });
        }
    }
    function animate(ele, json, fn) {
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var bool = true;
            for (var k in json) {
                if (k === "z-index") {
                    ele.style.zIndex = json[k];
                } else if (k === "opacity") {
                    if (getStyle(ele, k) === "0") {
                        var leader = 0;
                    } else {
                        var leader = parseInt(getStyle(ele, k) * 10) || 10;
                    }
                    var step = (parseInt(json[k] * 10) - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    ele.style.opacity = leader / 10;
                    ele.style.filter = "alpha(opacity=" + leader * 10 + ")";
                    if (json[k] !== leader / 10) {
                        bool = false;
                    }
                } else {
                    var leader = parseInt(getStyle(ele, k)) || 0;
                    var step = (json[k] - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    ele.style[k] = leader + "px";
                    //没有到达指定位置，不允许清除定时器
                    if (json[k] !== leader) {
                        bool = false;
                    }
                }
            }
            if (bool) {
                clearInterval(ele.timer);
                if (fn) {
                    fn();
                }
            }
        }, 30);
    }
    function getStyle(ele, attr) {
        //第一种
        if (window.getComputedStyle) {
            return window.getComputedStyle(ele, null)[attr];
        } else {
            return ele.currentStyle[attr];
        }
    }
    //旋转木马的地方
//顶部通栏
    var second = document.getElementById("top-bar");
    var leftpart = document.getElementById("left-part");
    var logoAnimateS = document.getElementById("logo-animate-s");
    window.onscroll = function () {
        if (scroll().top >= 55) {
            second.style.position = "fixed";
            second.style.top = "0";
            leftpart.style.display = "block";
            second.style.background = "rgba(255,255,255,0.9)";
            logoAnimateS.style.transform = "scale(0)";
        } else {
            second.style.position = "absolute";
            second.style.background = "";
            leftpart.style.display = "none";
            logoAnimateS.style.transform = "scale(1)";
        }
    }
    function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop,
            left: window.pageXOffset || document.documentElement.scrollLeft,
        }
    }
//顶部通栏
//小青蛙的地方
    var openSeverPop = document.getElementById("open-sever-pop");
    start();
    function start() {
        timer2 = setInterval(startGo, 300);
    }

    openSeverPop.onmouseenter = function () {
        clearInterval(timer2);
    }
    openSeverPop.onmouseleave = function () {
        timer2 = setInterval(startGo, 300);
    }
    function startGo() {
        var l = openSeverPop.offsetLeft;
        var h = openSeverPop.offsetTop;
        l = l + 20;
        if (l < 0 && l > -80) {
            h += 23;
        }
        if (l > 750) {
            l = -145;
            h = 370;
        }
        openSeverPop.style.left = l + "px";
        openSeverPop.style.top = h + "px";
    }
//小青蛙的地方
//顶部轮播的地方
    var NIETopBarRight = document.getElementById("NIE-topBar-right-v");
    var as = NIETopBarRight.children;
    var newa = as[0].cloneNode(true);
    NIETopBarRight.appendChild(newa);
    var index = 0;
    timer3 = setInterval(gogogo, 3000);
    NIETopBarRight.onmouseenter = function () {
        clearInterval(timer3);
    }
    NIETopBarRight.onmouseleave = function () {
        timer3 = setInterval(gogogo, 3000);
    }
    function gogogo() {
        index++;
        if (index == 4) {
            NIETopBarRight.style.top = "0";
            index = 1;
        }
        var num = -index * newa.offsetHeight;
        animate(NIETopBarRight, {"top": num});
    }

//顶部轮播的地方
    //中间轮播图的地方
    var tempWrap = document.getElementById("tempWrap");
    var bannerNav = document.getElementById("banner-nav");
    var ul = tempWrap.getElementsByTagName("ul")[0];
    var ol = bannerNav.getElementsByTagName("ol")[0];
    var imgWidth = bannerNav.offsetWidth;
    var ullis = ul.children;
    var ollis = ol.children;
    var newLi = ullis[0].cloneNode(true);
    ul.appendChild(newLi);
    ollis[0].className = "current";
    for (var i = 0; i < ollis.length; i++) {
        ollis[i].index = i;
        ollis[i].onmouseenter = function () {
            for (var j = 0; j < ollis.length; j++) {
                ollis[j].className = "";
            }
            this.className = "current";
            if (key == 5) {
                ul.style.left = 0;
            }
            square = key = this.index;
            animateY(ul, -this.index * 360);
        }
    }
    var square = 0;
    var key = 0;
    timer10 = setInterval(function () {
        autoPlayY();
    }, 3000)

    tempWrap.onmouseenter = function () {
        clearInterval(timer10);
    }
    tempWrap.onmouseleave = function () {
        timer10 = setInterval(function () {
            autoPlayY();
        }, 3000);
    }
    function autoPlayY() {
        square++;
        key++;
        if (square == 5) {
            square = 0;
        }
        if (key == 6) {
            ul.style.left = 0;
            key = 1;
        }
        for (var j = 0; j < ollis.length; j++) {
            ollis[j].className = "";
        }
        ollis[square].className = "current";
        animateY(ul, -key * 360);
    }
    function animateY(ele, target) {
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var step = target > ele.offsetLeft ? 10 : -10;
            ele.style.left = ele.offsetLeft + step + "px";
            console.log(1);
            if (Math.abs(target - ele.offsetLeft) <= Math.abs(step)) {
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        }, 10);
    }
    //中间轮播图的地方
// jquery实现新闻地方
//    var newindex = 0;
    $(".news-tabs>a").mouseenter(function () {
        animate($("#news-table-em")[0], {"left": $(this).index() * 89});
        animate($(".news-list")[0], {"left": -$(this).index() * 500});
    });
// jquery实现新闻地方
//收缩的地方
    var flag = true;
    $(".nie-right").click(function () {
        if (flag) {
            $(".nie-right").parent("div").parent("div").stop().animate({"width": 36, "margin-left": 206}, 1000);
            $(".nie-right").css({"background-position":"-1376px -466px"});
            $(".nie-right").css({height:"105"});
            flag = false;
        } else {
            $(".nie-right").parent("div").parent("div").stop().animate({"width": 533, "margin-left": -291}, 1000);
            $(".nie-right").css("background-position", "-1541px -1242px");
            $(".nie-right").css({height:"22"});
            flag = true;
        }
    });
//收缩的地方
//底部固定栏
    $("#show-order-progress").click(function(){
        $("#show-order-yuyuee").show(10);
        $(this).animate({"height":0},500);
        $("#show-order-yuyue").animate({"height":221},500);
    });
    $("#show-order-yuyuee").click(function(){
        $("#show-order-yuyuee").hide(10);
        $("#show-order-yuyue").animate({"height":0},500);
        $("#show-order-progress").animate({"height":98},500);
    });

//底部固定栏
//顶部显示栏的地方
    $("#topnav-li-guan").mouseenter(function(){
        $("#top-bar").css({background:"rgba(255,255,255,0.8)"},1000);
        $(".top-nav-more").stop(false,true).slideDown();
    });
    $("#topnav-li-guan").mouseleave(function(){
        if (scroll().top <= 55) {
            $("#top-bar").css({background: "rgba(255,255,255,0)"}, 1000);
        }
        $(".top-nav-more").stop(false,true).slideUp();
    });
    $(".top-nav-more").mouseenter(function(){
        $("#top-bar").css({background:"rgba(255,255,255,0.8)"});
        $(".top-nav-more").stop(false,true).show();
    });
    $(".top-nav-more").mouseleave(function(){
        if (scroll().top <= 55) {
            $("#top-bar").css({background: "rgba(255,255,255,0)"}, 1000);
        }
        $(".top-nav-more").stop(false,true).slideUp();
    });
//顶部显示栏的地方
//顶部图片显示的 地方
    $("#NIE-topBar-news").mouseenter(function(){
        $("#NIE-topBar-news>span>a").stop().slideDown();
    });
    $("#NIE-topBar-news").mouseleave(function(){
        $("#NIE-topBar-news>span>a").stop().slideUp();
    });
//顶部图片显示的 地方
//顶部弹框的地方
    $("#NIE-topBar-menu").mouseenter(function(){
        $("#NIE-table").stop(false,true).slideDown();
    });
    $("#NIE-topBar-menu").mouseleave(function(){
        $("#NIE-table").stop(false,true).slideUp();
    });
    $("#NIE-table").mouseenter(function(){
        $("#NIE-table").stop(false,true).show();
    });
    $("#NIE-table").mouseleave(function(){
        $("#NIE-table").stop(false,true).slideUp();
    });
//顶部弹框的地方
//侧边栏

    $(".link-list > a").mouseenter(function(){
        $(this).stop().animate({"left":20},300);
    });
    $(".link-list > a").mouseleave(function(){
        $(".link-list > a").stop().animate({"left":0},300);
    });

//侧边栏
//黄跃强的
    var strategyBannerTop = document.getElementsByClassName("strategy-banner-top")[0];
    var aLinkArr = strategyBannerTop.children;
    var strategyBannerBottom = document.getElementsByClassName("strategy-banner-bottom")[0];
    var spanArr = strategyBannerBottom.children;
    var imgWidth = aLinkArr[0].offsetWidth;

    for(var i=0;i<spanArr.length;i++){
        //自定义属性，获取索引值
        spanArr[i].index = i;
        spanArr[i].onmouseenter = function () {
            //(排他思想)
            for(var j=0;j<spanArr.length;j++){
                spanArr[j].style.background = "white";
            }
            this.style.background = "black";
            var sss = this.index*imgWidth;
            animate111(strategyBannerTop,-sss);
        }
    }

    //匀速动画的封装
    function animate111(ele,target) {
        clearInterval(ele.timer);
        //定义一个定时器；
        ele.timer = setInterval(function () {
            var step = target > ele.offsetLeft ? 10 : -10;
            ele.style.left = ele.offsetLeft + step + "px";
            console.log(1);
            //目标位置和当前位置不足一个步长的时候；直接赋值并清除定时器
            if( Math.abs(target - ele.offsetLeft) <= Math.abs(step) ){
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        },10);
    }
//攻略右边tab栏目特效JS
    $(".right-strategy-part-tab > .tab-item").mouseenter(function(){

        var index = $(this).index();
        $(this).children("em").stop().fadeIn(500);
        $(this).siblings(".right-strategy-part-tab .tab-item").children("em").stop().fadeOut(500);

        if(index===0){
            index= 0;
        }else{
            index=index/2;
        }
        var result = index*835;
        var json = {"left":-result}
        $(".right-strategy-part-content > .strategy-list").stop().animate(json,500);

    });


//攻略左边JS

    $(".strategy-nav-tit").mouseenter(function(){
        var json = {"bottom":"26px"}
        $(this).children("span").animate(json,200);
    });
    $(".strategy-nav-tit").mouseleave(function(){
        var json = {"bottom":"16px"}
        $(this).children("span").stop().animate(json,200);
    });




//同人专区tab栏JS
    $(".tonren-tabs > li").mouseenter(function(){
        var index = $(this).index();
        //console.log(index);
        $(this).children("a").children("span").stop().animate({"top":0},500);
        $(this).children("a").children("em").stop().animate({"bottom":"-3px"},500);

        $(this).siblings(".tonren-tabs > li").children("a").children("span").stop().animate({"top":18},500);
        $(this).siblings(".tonren-tabs > li").children("a").children("em").stop().animate({"bottom":"-54px"},500);

        //tab栏下面的图片相应的滚动
        if(index <=5){
            $(".bottomList-pics").stop().animate({"left":-index*1220+"px"});
        }


    });


    //同人专区图片的JS
    $(".pics-items li a").mouseenter(function(){
        $(this).children("span").stop().animate({"opacity":0.5},500);

    });
    $(".pics-items li a").mouseleave(function(){
        $(this).children("span").stop().animate({"opacity":0},500);

    });

//同人区域的投稿小图标
    $(".tabs-lastOne > .to-touGao").mouseenter(function(){
        $(this).stop().animate({"left":"15px"},300);
    });
    $(".tabs-lastOne > .to-touGao").mouseleave(function(){
        $(this).stop().animate({"left":0},300);
    });


//黄跃强的
//张冲的
//小火煎
    $(function(){
        $(".back_top").mouseenter(function(){
            $(".back_top").stop().animate({"top":-20},300);
        });
        $(".back_top").mouseleave(function(){
            $(".back_top").stop().animate({"top":0},300);
        });
    });
    var back_top = document.getElementsByClassName("back_top")[0];
    //console.log(back_top);
    var timer11 = null;
    back_top.onclick = function () {
        var leader = scroll().top;
        //window.scrollTo(0,0);
        timer11 = setInterval(function () {
            var step = (0 - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            window.scrollTo(0, leader);
            if (leader === 0) {
                clearInterval(timer11);
            }
        }, 20);
    }

//小火煎
//二维码
    $("#footer_btn").hover(function(){
        $("#footer_btn .txt2").fadeOut(100);
        $("#door").stop().animate({"top":"400px"},1000)
        $(".bar").stop().animate({"top":"200px"},1000)
        $(".bottom_code_wrap").stop().animate({"opacity":"1","top":"250px"},1000)
    },function(){
        $("#footer_btn .txt2").fadeIn(1000);
        $("#door").stop().animate({"top":"340px"},1000)
        $(".bar").stop().animate({"top":"235px"},1000)
        $(".bottom_code_wrap").stop().animate({"opacity":"0","top":"300px"},1000)
    })

//二维码

//张冲的
//表单验证
    var globalMid = document.getElementById("global-mid");
    var maskYanzheng = document.getElementById("mask-yanzheng");
    globalMid.onclick = function (event) {
        $(maskYanzheng).stop().slideDown(1000);
        //bug:避免a链接冒泡到document；
        event = event || window.event;
        if(event && event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }
    //需求2：点击login里面的出去span以外的所有按钮，都不关闭mask；其他的都关闭；(冒泡)
    //为文档绑定一个点击事件，排除不隐藏的，其他全部隐藏内容；
    document.onclick = function (event) {
        //获取事件引发者，并判断，他是否是能够关闭盒子的标签；
        event = event || window.event;
        var tag = event.target?event.target:event.srcElement;
        //判断：如果不是input和login就隐藏；
        //DOM元素的tagName属性是该元素的标签名的大写；
        if(tag.tagName!=="INPUT" && tag.className!=="form-main"){
            $(maskYanzheng).stop().slideUp(1000);
        }
    }




















    var formMain = document.getElementsByClassName("form-main")[0];
    var password = document.getElementById("password");
    var inpArr = formMain.getElementsByTagName("input");

    //需求1：第1个input失去焦点进行校验，符合QQ正则就对其进行正确的设置；否则错误设置；
    fn(inpArr[0],/^[1-9][0-9]{4,11}$/);
    //需求2：第2个input失去焦点进行校验，符合手机正则就对其进行正确的设置；否则错误设置；
    fn(inpArr[1],/^((13[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/);
    //需求3：第3个input失去焦点进行校验，符合邮箱正则就对其进行正确的设置；否则错误设置；
    fn(inpArr[2],/^[\w\-\.]+\@[\w]+\.[\w]{2,4}$/);
    //需求4：第4个input失去焦点进行校验，符合座机正则就对其进行正确的设置；否则错误设置；
    fn(inpArr[3],/^0\d{2}-\d{8}$|^0\d{3}-\d{7}$/);
    //需求5：第5个input失去焦点进行校验，符合账号正则就对其进行正确的设置；否则错误设置；
    fn(inpArr[4],/^[a-zA-Z0-9_-]{6,20}$/);

    //需求6：第6个input失去焦点进行校验，符合密码正则就对其进行正确的设置；否则错误设置；
    inpArr[5].onblur = function () {
        //正则判断；
        var reg = /^[\$a-zA-Z0-9_-]{6,18}$/;
        if(reg.test(this.value)){
            //如果正确；为后面的span设置内容和样式
            this.nextSibling.innerHTML = "输入正确";
            this.nextSibling.className = "right";

                if(/^[A-Za-z0-9]+[_$]+[A-Za-z0-9]*$/.test(this.value)){
                    password.className = "pwd str4";
                }else if(/^([a-z].*[0-9])|([A-Z].*[0-9])|([0-9].*[a-zA-Z])$/.test(this.value)){
                    password.className = "pwd str3";
                }else if(/^([a-z].*[A-Z])|([A-Z].*[a-z])$/.test(this.value)){
                    password.className = "pwd str2";
                }else{
                    password.className = "pwd str1";
                }
            //密码强度设置
            //判断：范围从大到小；因为范围大的包含范围小的；


        }else{
            //如果错误；为后面的span设置内容和样式
            this.nextSibling.innerHTML = "对不起,输入错误";
            this.nextSibling.className = "wrong";
            password.className = "pwd str0";
        }
    }



    //封装
    function fn(ele,str){
        ele.onblur = function () {
            //正则判断；
            var reg = str;
            if(reg.test(this.value)){
                //如果正确；为后面的span设置内容和样式
                this.nextSibling.innerHTML = "输入正确";
                this.nextSibling.className = "right";
            }else{
                //如果错误；为后面的span设置内容和样式
                this.nextSibling.innerHTML = "对不起,输入错误";
                this.nextSibling.className = "wrong";
            }
        }
    }





















//表单验证










































}
