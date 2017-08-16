/**
 * Created by rensheng on 2017-06-21.
 */

$(function () {

    //顶部广告
    $("#hb").hover(function () {
        $("#hb_img01").stop().toggle();
        $("#hb_links").stop().slideToggle().css("top", 55);
    });

    //游戏全目录
    $("#menu").hover(function () {
        $("#NIE-table").stop().slideToggle(500);
    });

    //官方渠道
    $("#navLiLinks").hover(function () {
        $("#nav_chanel").stop().slideToggle();
        $("#nav").toggleClass("nav_bgc");
    });

    //点击关闭按钮关闭侧边栏资讯
    $("#sidebar").show(500).fadeIn(500);
    $("#sidebar_close01").click(function () {
        $("#sidebar").animate({"width": 0, "opacity": 0}, 500, function () {
            $("#sidebar").css("display", "none");
        });
    });

//    新闻资讯导航栏tab切换
    var timer = null;
    $("#tabFirst>li").each(function (index) {
        var lisNode = $(this);
        $(this).click(function () {
            $("#tabFirst li.now").removeClass("now");
            $("div.content").removeClass("content");
            $("span.nowSpan").removeClass("nowSpan");
            $("div.content_1").eq(index).addClass("content");
            lisNode.addClass("now");
            $("#tabFirst>li>span").eq(index).addClass("nowSpan");
        });
        $(this).mouseenter(function () {
            timer = setInterval(function () {
                $("#tabFirst li.now").removeClass("now");
                $("span.nowSpan").removeClass("nowSpan");
                lisNode.addClass("now");
                $("#tabFirst>li>span").eq(index).addClass("nowSpan");
            }, 50);
        }).mouseleave(function () {
            clearInterval(timer);
        });
    });


    //    官方媒体
    $("#sidebar_cont05>span").each(function (index) {
        $(this).mouseenter(function () {
            $("#sidebar_cont05>div.attention").removeClass("attention");
            $("#sidebar_cont05>div.sidebar_attention").eq(index).addClass("attention");
        });
    });

    $("#banner_text").show(500).fadeIn(500);


//    分页
    $("#page_span1").on("click", function () {
       $(this).addClass("page_span_bd").next("span").toggle();
        $("#span_down").removeClass("span_down").addClass("span_up");
    });

    $("#page_next").click(function () {
        $("#page_prev").css("display","block");

    });


});

//window.addEventListener("load", function () {
//   $(window).scroll(function () {
//       if($(window).scrollTop()>=$("#header").height()){
//           $("#nav").css({"position":"fixed","background":"rgba(255, 255, 255, 0.8)",top:0,left:0});
//           $("#nav_left").css("display","block");
//       }
//       else {
//           $("#nav").css({"position":"absolute","margin-top":$("#header").height(),"background":"rgba(255, 255, 255, 0)"});
//           $("#nav_left").css("display","none");
//       }
//
//   });
//});




window.onload = function () {

    //充值
    var recharge=document.getElementById("recharge");
    var alink = document.getElementById("alink");
    var links = alink.children;

    var newLink = links[0].cloneNode(true);
    alink.appendChild(newLink);
    var index = 0;

    var timers3 = setInterval(aLink, 2500);
    recharge.onmouseenter = function () {
        clearInterval(timers3);
    }
    recharge.onmouseleave = function () {
        timers3 = setInterval(aLink, 2500);
    }
    function aLink() {
        index++;
        if (index == links.length) {
            alink.style.top = 0;
            index = 1;
        }
        animate(alink, {"top": -index * alink.offsetHeight});
    }



    //固定导航栏


    window.onscroll = function () {
        var header = document.getElementById("header");
        var navs = document.getElementById("nav");
        var nav_left = document.getElementById("nav_left");
        if (scroll().top >= header.scrollHeight) {
            navs.style.position = "fixed";
            nav_left.style.display = "block";
            navs.style.background = "rgba(255, 255, 255, 0.8)";
            navs.style.top = 0;
        } else {
            navs.style.position = "absolute";
            navs.style.top = header.scrollHeight + "px";
            nav_left.style.display = "none";
            navs.style.background = "rgba(255, 255, 255, 0)";
        }
    };


//    下载游戏


    moveTo();
    function moveTo() {
        var box = document.getElementById("box");
        var span = document.getElementById("span");
        var timer = null;
        var bool=true;

        clearInterval(timer);
        timer = setInterval(function () {
            var spanh = span.offsetTop;
            if (bool) {
                spanh++;
                if (spanh >= box.offsetHeight - 10) {
                    bool=false;
                }
            }else {
                spanh--;
                if (spanh===0){
                    bool=true;
                }
            }
            span.style.top = spanh + "px";
        }, 15)
    }



//    立即下载
    nowDownload();
    function nowDownload(){
        var dl_span01=document.getElementById("dl_span01");
        var dl_span02=document.getElementById("dl_span02");
        var dlTimers=null;
        var emH=0;
        var flag=true;

        clearInterval(dlTimers);
        dlTimers=setInterval(function () {
            var sp02=dl_span02.offsetTop;

            if(flag){
                emH++;
                if (sp02>=dl_span01.offsetHeight/2){
                    flag=false;
                }
            }else {
                emH--;
                if (emH==8){
                    flag=true;
                }
            }

            dl_span02.style.top=emH+"px";
        },135);
    }






//  近期热点
    var sidebar_cont02 = document.getElementById("sidebar_cont02");
    var sb_banner01 = document.getElementById("sb_banner01");
    var sb_ul = sb_banner01.children[0];
    var ulLiArr = sb_ul.getElementsByTagName("li");
    var banind_ol = document.getElementById("banind_ol");
    var olLiArr = banind_ol.getElementsByTagName("li");
    var imgWidth = sb_banner01.offsetWidth;

    for (var i = 0; i < olLiArr.length; i++) {
        olLiArr[i].index = i;
        olLiArr[i].onmouseover = function () {
            for (var j = 0; j < olLiArr.length; j++) {
                olLiArr[j].className = "";
            }
            this.className = "banind_now";
            animateYun(sb_ul, -this.index * imgWidth);
        }
    }

    var newLi = ulLiArr[0].cloneNode(true);
    sb_ul.appendChild(newLi);

    var sq = 0;
    var keyImg = 0;

    var timer = setInterval(play, 5000);
    sidebar_cont02.onmouseover = function () {
        clearInterval(timer);
    };
    sidebar_cont02.onmouseout = function () {
        timer = setInterval(play, 5000);
    };


    function play() {
        sq++;
        keyImg++;
        if (sq === olLiArr.length) {
            sq = 0;
        }
        if (keyImg === ulLiArr.length) {
            sb_ul.style.left = 0;
            keyImg = 1;
        }

        for (var j = 0; j < olLiArr.length; j++) {
            olLiArr[j].className = "";
        }
        olLiArr[sq].className = "banind_now";
        animateYun(sb_ul, -keyImg * imgWidth);
    }


//    精选同人
    var sidebar_cont04 = document.getElementById("sidebar_cont04");
    var sb_banner02 = document.getElementById("sb_banner02");
    var sb_ul2 = sb_banner02.children[0];
    var ulLiArr2 = sb_ul2.getElementsByTagName("li");
    var ba_ol = document.getElementById("ba_ol");
    var olLiArr2 = ba_ol.getElementsByTagName("li");
    var imgWidth2 = sb_banner02.offsetWidth;

    for (var i = 0; i < olLiArr2.length; i++) {
        olLiArr2[i].index = i;
        olLiArr2[i].onmouseover = function () {
            for (var j = 0; j < olLiArr2.length; j++) {
                olLiArr2[j].className = "";
            }
            this.className = "banind_now";
            animateYun(sb_ul2, -this.index * imgWidth2);
        }
    }

    var newLi2 = ulLiArr2[0].cloneNode(true);
    sb_ul2.appendChild(newLi2);

    var sq2 = 0;
    var keyImg2 = 0;

    var timer2 = setInterval(play2, 5000);
    sidebar_cont04.onmouseover = function () {
        clearInterval(timer2);
    };
    sidebar_cont04.onmouseout = function () {
        timer2 = setInterval(play2, 5000);
    };


    function play2() {
        sq2++;
        keyImg2++;
        if (sq2 === olLiArr2.length) {
            sq2 = 0;
        }
        if (keyImg2 === ulLiArr2.length) {
            sb_ul2.style.left = 0;
            keyImg2 = 1;
        }

        for (var j = 0; j < olLiArr2.length; j++) {
            olLiArr2[j].className = "";
        }
        olLiArr2[sq2].className = "banind_now";
        animateYun(sb_ul2, -keyImg2 * imgWidth2);
    }



//    分页
    var page_span=document.getElementById("page_span");
    var linkArr=page_span.getElementsByTagName("a");
    var span_fa=document.getElementById("span_fa");
    var page_prev=document.getElementById("page_prev");
    var page_next=document.getElementById("page_next");

    page_prev.onclick= function () {

    }


};


//匀速动画
function animateYun(ele, target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = target > ele.offsetLeft ? 10 : -10;
        ele.style.left = step + ele.offsetLeft + "px";
        if (Math.abs(target - ele.offsetLeft) <= Math.abs(step)) {
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    }, 10)
}


function animateYunH(ele, target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = target > ele.offsetTop ? 10 : -10;
        ele.style.top = step + ele.offsetTop + "px";
        if (Math.abs(target - ele.offsetTop) <= Math.abs(step)) {
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }
    }, 10)
}


//缓动动画
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
//function animate(ele, json, func) {
//    clearInterval(ele.timer);
//    ele.timer = setInterval(function () {
//        var bool = true;
//        for (var k in json) {
//            var leader = parseInt(getStyle(ele, k)) || 0;
//            var step = (json[k] - leader) / 10;
//            step = step > 0 ? Math.ceil(step) : Math.floor(step);
//            ele.style[k] = step + leader + "px";
//            if (json[k] !== leader + step) {
//                bool = false;
//            }
//        }
//        if (bool) {
//            clearInterval(ele.timer);
//            if (func) {
//                func();
//            }
//        }
//    }, 30)
//
//}


//获取元素属性值
function getStyle(ele, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele, null)[attr];
    } else {
        return ele.currentStyle[attr];
    }
}


//被页面遮挡部分部分
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop,
        left: window.pageXOffset || document.documentElement.scrollLeft
    }
}

//设置元素的文本
function setText(ele,text){
    if(typeof ele.textContent=="string"){
        ele.textContent=text;
    }else {
        ele.innerText=text;
    }
}


