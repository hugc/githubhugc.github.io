/**
 * Created by Administrator on 2017/6/20.
 */
//左边下面视频部分
$(function() {
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
        animate(ul, -key * imgWidth);
    }

    var timer = setInterval(autoPlay, 1000);
    //鼠标进入清除定时器，移开开启定时器；
    //鼠标进入显示，移开隐藏
    box.onmouseover = function () {
        arr.style.display = "block";
        clearInterval(timer);
    }
    box.onmouseout = function () {
        arr.style.display = "none";
        timer = setInterval(autoPlay, 1000);
    }

    //封装右侧小三角功能
    function autoPlay() {
        key++;
        if (key === 9) {
            ul.style.left = 0;//瞬间闪动到第一张
            key = 1;//滑动到第二种；索引值为1；
        }
        animate(ul, -key * imgWidth);
    }

//匀速动画的封装
    function animate(ele, target) {
        //bug1：要用定时器，先清除定时器；
        clearInterval(ele.timer);
        //定义一个定时器；
        ele.timer = setInterval(function () {
            //获取步长
            var step = target > ele.offsetLeft ? 10 : -10;
            //赋值
            ele.style.left = ele.offsetLeft + step + "px";
            //目标位置和当前位置不足一个步长的时候；直接赋值并清除定时器
            if (Math.abs(target - ele.offsetLeft) <= Math.abs(step)) {
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        }, 10);
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










