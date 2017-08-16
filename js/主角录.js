/**
 * Created by 李书毅 on 2017/6/21.
 */
//01主角录
    var mainS=$(".side-bar").offset().top
    $(window).scroll(
        function(){
            if($(window).scrollTop()>mainS){
                $(".side-bar")[0].style.position="fixed";
                $(".side-bar")[0].style.zIndex=10;
                $(".side-bar")[0].style.top=0+"px";
                $(".side-bar")[0].style.left=0+"px";
                $(".side-bar-dowload")[0].style.display="block";
            }else{
                $(".side-bar").css({"position":"static"})
                $(".side-bar-dowload")[0].style.display="none";
            }
        }
    )




//02技能区域
var skillBtns=document.getElementsByClassName("skill-btn")[0].getElementsByTagName("a");
var skillConts=document.getElementsByClassName("skill-cont")
var skillWrap=document.getElementById("skill-wrap")
//console.log(skillBtns)
 for(var i = 0 ; i < skillBtns.length; i++){
     skillBtns[i].index=i;
     skillBtns[i].onmouseenter=function(){
       for(var j = 0 ; j < skillBtns.length; j++){
          skillBtns[j].className=""
         }
        this.className="btnCurrent";
         var s=this.index*480;
         animate(skillWrap,-s);
     }
   }
//03玩家攻略
var strategyGrid=document.getElementById("strategy-grid")
var gridArr=strategyGrid.getElementsByTagName("a");

//04 玩家互动
    var commentTxt=document.getElementById("commentTxt")
    var faB=document.getElementById("faB")
    var commentsShow=document.getElementById("commentsShow")
    faB.onclick=function(){
        var value1 = commentTxt.value.trim();  //trim()就是可以去掉字符串前后的空格

        //如果文本框里面的内容为空，就不执行以下代码
        if(value1 == ""){
            return;
        }
        //2.2 创建div，div的内容是value1
        var div1 = document.createElement("div");
        div1.innerHTML='<div class="comments-txt">'+
                '<span class="comments-txt-title">'+
                '黑马前端就业9期 第6组'+
                '</span>'+
                '<span class="txt-content">'+
                   value1+
                '<a class="answer" href="">(0) 回复</a>'+
                '</span>'+
            '</div>'

        //setText(commentsShow,value1);
        //2.3 把这个div装进那个commens里面去。
        //commentsShow.appendChild(div1);
        $(commentsShow).prepend(div1)

        //2.4 文本框里面的内容要清空
        commentTxt.value = "";
    }

















//匀速动画的封装
function animate(ele,target) {
    //bug1：要用定时器，先清除定时器；
    clearInterval(ele.timer);
    //定义一个定时器；
    ele.timer = setInterval(function () {
        //获取步长
        var step = target > ele.offsetLeft ? 10 : -10;
        //赋值
        ele.style.left = ele.offsetLeft + step + "px";
        //目标位置和当前位置不足一个步长的时候；直接赋值并清除定时器
        if( Math.abs(target - ele.offsetLeft) <= Math.abs(step) ){
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    },10);
}