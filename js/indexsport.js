/**
 * Created by Administrator on 2017/6/21.
 */
var top_BannerZhlMiddle=document.getElementById("top_BannerZhlMiddle");
var bigpic=document.getElementById("top_BannerZhlMiddleBig");
var first_box=document.getElementsByClassName("top_BannerZhl")[0];
var guDingTitle=document.getElementById("guDingTitle");
top_BannerZhlMiddle.onmouseenter=function(){
    bigpic.className="top_BannerZhlMiddleBig"
};
top_BannerZhlMiddle.onmouseleave=function(){
    bigpic.className="top_BannerZhlMiddleBig hide"
};
var guDingTitle=document.getElementById("guDingTitle");
    document.onscroll=function(){
            if(scroll().top>=first_box.offsetHeight){
                guDingTitle.className="main_zhl_hide guding"
            }else{
                guDingTitle.className="main_zhl_hide hide"
            }
};
//官方媒体部分效果
var media_left=document.getElementById("media_left");
var media_right=document.getElementById("media_right");
var weixinpic=document.getElementById("weixinpic");
var weibopic=document.getElementById("weibopic");
    media_left.onmouseenter=function(){
        media_left.style.background="url('imageszhl/inpage_z_de337a5.png') -286px -62px no-repeat";
        media_right.style.background="url('imageszhl/inpage_z_de337a5.png') -73px -242px no-repeat";
        weixinpic.className="hide";
        weibopic.className="show";
    };
    media_right.onmouseenter=function(){
        media_left.style.background="url('imageszhl/inpage_z_de337a5.png') -286px -93px no-repeat";
        media_right.style.background="url('imageszhl/inpage_z_de337a5.png') -376px -31px no-repeat";
        weixinpic.className="show";
        weibopic.className="hide";
    };
//近期热点部分
$("document").ready(function(){
    var hotWord=document.getElementsByClassName("hotWord")[0];
    var hotYuan=document.getElementsByClassName("new_right_hotWord_pic_yuan")[0];
    $(".new_right_hotWord_pic_yuan>p").on("mouseenter",function(){
        $(this).addClass("shixin").siblings("p").removeClass("shixin");
        var index=$(this).index();
        $(".hotWord>li").eq(index).addClass("show").siblings(".hotWord>li").removeClass("show");
    })
    //精选同人部分
});









function scroll(){
    return {
        top: window.pageYOffset || document.documentElement.scrollTop,
        left: window.pageXOffset || document.documentElement.scrollLeft
    };
}

