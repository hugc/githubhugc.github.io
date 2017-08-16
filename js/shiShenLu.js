/**
 * Created by 小只熊 on 2017/6/21.
 */
window.onload = function () {

    //烤烤部分
    //表单验证开始
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
    tableSsl(inpArr[0],/^[1-9][0-9]{4,11}$/);
    //需求2：第2个input失去焦点进行校验，符合手机正则就对其进行正确的设置；否则错误设置；
    tableSsl(inpArr[1],/^((13[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/);
    //需求3：第3个input失去焦点进行校验，符合邮箱正则就对其进行正确的设置；否则错误设置；
    tableSsl(inpArr[2],/^[\w\-\.]+\@[\w]+\.[\w]{2,4}$/);
    //需求4：第4个input失去焦点进行校验，符合座机正则就对其进行正确的设置；否则错误设置；
    tableSsl(inpArr[3],/^0\d{2}-\d{8}$|^0\d{3}-\d{7}$/);
    //需求5：第5个input失去焦点进行校验，符合账号正则就对其进行正确的设置；否则错误设置；
    tableSsl(inpArr[4],/^[a-zA-Z0-9_-]{6,20}$/);

    //需求6：第6个input失去焦点进行校验，符合密码正则就对其进行正确的设置；否则错误设置；
    inpArr[5].onblur = function () {
        //正则判断；
        var reg = /^[\$a-zA-Z0-9_-]{6,18}$/;
        if(reg.test(this.value)){
            //如果正确；为后面的span设置内容和样式
            this.nextSibling.innerHTML = "输入正确";
            this.nextSibling.className = "right";

            //密码强度设置
            //判断：范围从大到小；因为范围大的包含范围小的；
            if(/^[A-Za-z0-9]+[_$]+[A-Za-z0-9]*$/.test(this.value)){
                password.className = "pwd str4";
            }else if(/^([a-z].*[0-9])|([A-Z].*[0-9])|([0-9].*[a-zA-Z])$/.test(this.value)){
                password.className = "pwd str3";
            }else if(/^([a-z].*[A-Z])|([A-Z].*[a-z])$/.test(this.value)){
                password.className = "pwd str2";
            }else{
                password.className = "pwd str1";
            }

        }else{
            //如果错误；为后面的span设置内容和样式
            this.nextSibling.innerHTML = "对不起,输入错误";
            this.nextSibling.className = "wrong";
        }
    }
    //表单验证封装
    function tableSsl(ele,str){
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
    //顶部栏部分
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
    //烤烤部分结束


    //我的部分
    var tantanBoxSsl = document.getElementById("tantanBoxSsl");
    var arrBoxs = tantanBoxSsl.children;
    //console.log(arrBoxs)
    //var oneboxSsl=document.getElementById("oneboxSsl");
    //var timer=null,speedY=0;
    var number=0;
    var timerSsl=null ;
    //console.log(getStyle(oneboxSsl,"opacity"));
    timerSsl= setInterval(function () {
        number++;
        if(number==6){
            clearInterval(timerSsl);
        }
        if(number==1){
            for (var i = 0; i < 4; i++){
                who(arrBoxs[i],120);
                animate(arrBoxs[i],{"opacity":1})
            }
        }else if(number==3){
            for (var i =4; i < 8; i++){
                who(arrBoxs[i],340);
                animate(arrBoxs[i],{"opacity":1})
            }
        }else if(number==5){
            for (var i = 8; i < 12; i++){
                who(arrBoxs[i],560);
                animate(arrBoxs[i],{"opacity":1})
            }

        }
        console.log(number);
    },500)


    tantanBoxSsl.onmouseenter = function () {
        for (var m = 0; m < arrBoxs.length; m++) {
            arrBoxs[m].lastElementChild.style.opacity = 0.4;
        }
    }
    for (var i = 0; i < arrBoxs.length; i++) {
        arrBoxs[i].onmouseenter = function () {
            for (var n = 0; n < arrBoxs.length; n++) {
                arrBoxs[n].lastElementChild.style.opacity = 0.4;
            }
            this.lastElementChild.style.opacity = 0;
        }
        arrBoxs[i].onmouseout = function () {
            for (var j = 0; j < arrBoxs.length; j++) {
                arrBoxs[j].lastElementChild.style.opacity = 0.4;
            }
            this.lastElementChild.style.opacity = 0;
        }
    }
    //tantanBoxSsl.onmouseenter = function () {
    //    for (var m = 0; m < arrBoxs.length; m++) {
    //        arrBoxs[m].lastElementChild.style.opacity = 0.4;
    //    }
    //}
    tantanBoxSsl.onmouseleave = function(){
        for (var n = 0; n < arrBoxs.length; n++) {
            arrBoxs[n].lastElementChild.style.opacity = 0;
        }
    }

        //for (var i = 0; i < arrBoxs.length; i++){
        //    arrBoxs[i].index = i;
        //    if(i<4){
        //        who(arrBoxs[i],50);
        //    }else if(i<8){
        //        who(arrBoxs[i],270);
        //    }else{
        //        who(arrBoxs[i],490);
        //    }
        //
        //}
    //}



    function who(ele,target){

        //ele.onmousedown=function () {//鼠标点击
            clearInterval(ele.timer);
            var e=e||window.event;
            //var y=e.clientY,disY=y-ele.offsetTop;
            //document.onmousemove=function () {//鼠标移动
            //    var e=e||window.event;
            //    ele.style.top=e.clientY-disY+'px';
            //    speedY=e.clientY-y;
            //    y=e.clientY;
                //取消文字的被选中状态
                window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            //}
            //document.onmouseup=function () {//鼠标松开
            //    document.onmousemove=null;
            //    document.onmouseup=null;
                startMove(ele,target);

        }

    function startMove(ele,target){
        var speedY=0;
        clearInterval(ele.timer);
        ele.timer=setInterval(function(){
            speedY +=1//垂直降落速度为3
            var T=ele.offsetTop+speedY;
            var t=target;
            if(T>t) {
                speedY*=-1;
                speedY*=0.75;
                T=t;

            }else if(T<0){
                T=0;
                speedY*=-1;
                speedY*=0.75;
            }
            ele.style.top=T+'px';
        },13);

}
    //缓动动画函数
    function animate(ele,json,fn){
        clearInterval(ele.timer2);
        ele.timer2 = setInterval(function(){

            var bool =true;
            for (var k in json ){
                if(k === "z-index"){
                    ele.style.zIndex = json[k];
                }else if(k ==="opacity"){
                    if(getStyle(ele,k)==0){
                        var leader = 0;
                    }else{
                        var leader = parseInt(getStyle(ele,k)*10) || 10;
                    }
                    var step = (parseInt(json[k]*10)-leader)/10;
                    step = step>0?Math.ceil(step):Math.floor(step);
                    leader = leader + step;
                    ele.style.opacity = leader/10;
                    ele.style.filter = "alpha(opacity="+leader*10+")";
                    if(json[k] !== leader/10){
                        bool=false;
                    }
                }else{
                    var leader = parseInt(getStyle(ele,k)) || 0;
                    var step = (json[k] - leader)/10;
                    step = step>0?Math.ceil(step):Math.floor(step);
                    leader = leader + step;
                    ele.style[k] = leader + "px";
                    if(json[k] !== leader){
                        bool = false;
                    }
                }
            }
            if(bool){
                clearInterval(ele.timer2);
                if(fn){
                    fn();
                }
            }
        },100)
    }

    function getStyle(ele,attr){
        if(window.getComputedStyle){
            return window.getComputedStyle(ele,null)[attr];
        }else{
            return ele.currentStyle[attr];
        }
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

//我的部分结束



}
