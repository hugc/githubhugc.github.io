/**
 * Created by yunayu on 2017/6/19.
 */

    $(function () {

        //页面打开显示弹出框，点击关闭按钮，遮罩消失，弹出框消失
        $("#forumClose").click(function () {
            $("#forumMask").hide();
            $("#forumPop").fadeOut(500);
        });


        //鼠标进入a标签,显示二维码,透明度缓慢变成1
        $("#forumPhone").mouseenter(function () {
            $("#forumErweima").show();
            $("#forumErweima").animate({"opacity":1,"top":45},1000);
        });
        $("#forumPhone").mouseleave(function () {
            $("#forumErweima").animate({"opacity":0,"top":20},1000);
        })


        //轮播图
        var lunBoTu = $("#forumLunBoTu")[0];
        var imgWidth = lunBoTu.offsetWidth;
        var ul1 = lunBoTu.children[0];
        var ulLiArr = ul1.children;
        var ol = ul1.nextElementSibling || ul1.nextSibling;
        var newLi = ulLiArr[0].cloneNode(true);
        ul1.appendChild(newLi);
        var olLiArr = ol.children;
        olLiArr[0].style.backgroundColor = "#D91A29";
        for(var i = 0 ; i < olLiArr.length; i++){
            olLiArr[i].index = i;
            olLiArr[i].onmouseenter = function () {
                for(var j = 0 ; j < olLiArr.length; j++){
                    olLiArr[j].style.backgroundColor = "#333";
                }
                this.style.backgroundColor = "#D91A29";
                if(key === 5){
                    ul.style.left = 0;
                }
                square = key = this.index;
                var sss = -this.index*imgWidth;
                animateLinerLoney(ul1,sss);
            }
        }
        //无缝滚动
        var square = 0 //控制小方条
        var keyTop = 0 //控制图片
        function autoPlayLeft() {
            square++;
            keyTop++;
            //小方块有5个，最大索引值为4；等于5的时候，回归0；
            if(square === 5){
                square = 0;
            }
            //图片有6个，最大索引值为5；等于6的时候，回归1；
            //无缝滚动原理：瞬间闪动到第1张，在滑动到第2张；
            if(keyTop === 6){
                ul1.style.left = 0;//瞬间闪动到第1张
                keyTop = 1;//滑动到第2张；索引值为1；
            }
            //点亮盒子移动ul；
            for(var j=0;j<olLiArr.length;j++){
                olLiArr[j].style.backgroundColor = "#333";
            }
            olLiArr[square].style.backgroundColor = "#D91A29";
            animateLinerLoney(ul1,-keyTop*400);
        }
        //设置定时器
        var timer1 = setInterval(autoPlayLeft,1500);
        lunBoTu.onmouseenter = function () {
            clearInterval(timer1);
        }
        lunBoTu.onmouseleave = function () {
            timer1 = setInterval(autoPlayLeft,1500);
        }


        //点击左下的图片，图片消失，弹出tool
        var more = $("#forumMore")[0];
        var tool = $("#forumTool")[0];
        var closed = $("#forumSmallX")[0];
        console.log(tool)
        more.onclick = function () {
            //clearInterval(more.timer);
            //more.timer = setInterval(function () {
            //    var step = -127 > more.offsetLeft ? 10 : -10;
            //    more.style.left = more.offsetLeft + step + "px";
            //    if( Math.abs((-127) - more.offsetLeft) <= Math.abs(step) ){
            //        more.style.left = -127 + "px";
            //        clearInterval(more.timer);
            //    }
            //},30);
            animateLinerLoney(more,-127,function () {
                swingAnimate(tool,{"left":0});
                console.log(more.offsetLeft);
            });
        }
        closed.onclick = function () {
            swingAnimate(tool,{"left":-1990},function() {
                animateLinerLoney(more,0);
            });
        }
//======================================================================================
        //陈艳
            $("#video-left-bottom-left-v a img").mouseenter(function () {
                $(this).css("opacity", 0.9);
            });
            $("#video-left-bottom-left-v img").mouseleave(function () {
                $(this).css("opacity", 1);
            });
            $("#video-left-bottom-right li").mouseenter(function () {
                $(this).css("opacity", 0.9).siblings("li").css("opacity", 1);
            });
            $("#video-left-bottom-right").mouseleave(function () {
                $(".video-left-bottom-right li").css("opacity", 1);
            });

//图片上的左右按钮

            //1.复制ul中的第一个li添加到ul最末尾，创建ul种li的个数-1个li添加到ol中，并点亮第一个;
            var box = document.getElementById("pic-box");
            var screen = document.getElementById("screen");
            var imgWidth = screen.offsetWidth;
            var ul = document.getElementById("ul");
            var ulLiArr = ul.getElementsByTagName("li");
            var arr = document.getElementById("arr");
            var left = arr.children[0];
            var right = arr.children[1];

            //复制ul中的第一个li添加到ul最末尾
            var newLi1 = ulLiArr[0].cloneNode(true);
            var newLi2 = ulLiArr[1].cloneNode(true);
            var newLi3 = ulLiArr[2].cloneNode(true);
            var newLi4 = ulLiArr[3].cloneNode(true);
            var newLi5 = ulLiArr[4].cloneNode(true);
            ul.appendChild(newLi1);
            ul.appendChild(newLi2);
            ul.appendChild(newLi3);
            ul.appendChild(newLi4);
            ul.appendChild(newLi5);
            //3.点击右侧小三角，移动ul;(案例2)(无缝滚动原理)

            var key = 0;//控制图片，模拟两个索引值
            //按照案例2，点击按钮索引值自增或者自减；并点亮盒子移动ul；
            right.onclick = autoPlay;
            //4.点击左侧小三角，移动ul;(案例2)(无缝滚动原理)(和右侧三角逻辑相反)
            //逻辑和右侧相反
            left.onclick = function () {
                key--;
                if (key === -1) {
                    ul.style.left = -8 * imgWidth + "px";//瞬间闪动到第六张
                    key = 7;//滑动到第五张；索引值为4；
                }
                animateLinerLoney(ul, -key * imgWidth);
            }
            var timer = setInterval(autoPlay, 1500);
            //鼠标进入清除定时器，移开开启定时器；
            //鼠标进入显示，移开隐藏
            box.onmouseover = function () {
                arr.style.display = "block";
                clearInterval(timer);
            }
            box.onmouseout = function () {
                arr.style.display = "none";
                timer = setInterval(autoPlay, 1500);
            }

            //封装右侧小三角功能
            function autoPlay() {
                key++;
                if (key === 7) {
                    ul.style.left = 0;//瞬间闪动到第一张
                    key = 1;//滑动到第二种；索引值为1；
                }
                animateLinerLoney(ul, -key * imgWidth);
            }
//左边上面文字列表部分

            $("#game-video-list-ul a").mouseenter(function () {
                console.log(1);
                $(this).next("em").css("background", "#D91A29");
            });
            $("#game-video-list-ul a").mouseleave(function () {
                $(this).next("em").css("background", "");


            });
            $("#game-video-list-ul a").eq(0).mouseenter(function () {
                console.log(1);
                $(this).next("em").css("background", "#D91A29");


            });
            $("#game-video-list-ul a").eq(0).next("em").css("background", "#D91A29");
            $("#game-video-list-ul a").eq(0).mouseleave(function () {
                $(this).next("em").css("background", "#D91A29");


            });

            //视频换页面部分

            $("#page-backAll>li").mouseenter(function () {
                $(this).css("background", "#D91A29");


            });
            $("#page-backAll>li").mouseleave(function () {
                $(this).css("background", "");

            });
    });


