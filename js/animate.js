/**
 * Created by  on 2017/6/14.
 */
//--------------------缓动动画-------------------------------------
function animateMm(ele,json,fn){
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var bool = true;
        for(var k in json){
            if(k === "z-index"){
                ele.style.zIndex = json[k];
            }else if(k === "opacity"){
                if(getStyle(ele,k) === "0"){
                    var leader = 0;
                }else{
                    var leader = parseInt(getStyle(ele,k)*10) || 10;
                }
                var step = (parseInt(json[k]*10) - leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                ele.style.opacity = leader/10;
                ele.style.filter = "alpha(opacity="+leader*10+")";
                if(json[k] !== leader/10){
                    bool = false;
                }
            }else{
                var leader = parseInt(getStyle(ele,k)) || 0;
                var step = (json[k] - leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                ele.style[k] = leader + "px";
                console.log(1);
                if(json[k] !== leader){
                    bool = false;
                }
            }
            console.log(5);
        }
        if(bool){
            clearInterval(ele.timer);
            if(fn){
                fn();
            }
        }
    },50);
}


//--------------------缓动动画-------------------------------------
function animate(ele,json,fn){
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var bool = true;
        for(var k in json){
            if(k === "z-index"){
                ele.style.zIndex = json[k];
            }else if(k === "opacity"){
                if(getStyle(ele,k) === "0"){
                    var leader = 0;
                }else{
                    var leader = parseInt(getStyle(ele,k)*10) || 10;
                }
                var step = (parseInt(json[k]*10) - leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                ele.style.opacity = leader/10;
                ele.style.filter = "alpha(opacity="+leader*10+")";
                if(json[k] !== leader/10){
                    bool = false;
                }
            }else{
                var leader = parseInt(getStyle(ele,k)) || 0;
                var step = (json[k] - leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                ele.style[k] = leader + "px";
                //console.log(1);
                if(json[k] !== leader){
                    bool = false;
                }
            }
        }
        //console.log(6);
        if(bool){
            clearInterval(ele.timer);
            if(fn){
                fn();
            }
        }
    },20);
}

//=============获取的属性值为字符串===============================
function getStyle(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }else{
        return ele.currentStyle[attr];
    }
}



function scroll(){
    return {
        top: window.pageYOffset || document.documentElement.scrollTop,
        left: window.pageXOffset || document.documentElement.scrollLeft
    }
}


//=============反复放大函数====================
function move(ele){
    var num = 100;
    var m = 1;
    clearInterval(ele.timer);//---清空计时器
    ele.timer = setInterval(function(){
        m++;
        num = num + m;
        //console.log(m);
        ele.style.transform =  "scale("+(parseFloat(num/100))+")";
        //console.log(parseFloat(num/100));
        if(m == 3){
            //move2(iconPicArr2[s]);
            //console.log(mmmmmmmmmmmm);
        }
        if( m == 6){
            clearInterval(ele.timer);
            m = 1;
            num = 100;
            ele.style.transform =  "scale(1)";
            move(ele);
            //console.log(m);
        }
    },300)
}
function move2(ele2){
    var num = 100;
    var m = 1;
    clearInterval(ele2.timer);//---清空计时器
    ele2.timer = setInterval(function(){
        m++;
        num = num + m;
        //console.log(m);
        ele2.style.transform =  "scale("+(parseFloat(num/100))+")";
        //console.log(parseFloat(num/100));
        if(m == 3){
            //move(ele2);
        }
        if( m == 4){
            clearInterval(ele2.timer);
            m = 1;
            num = 100;
            ele2.style.transform =  "scale(1)";
            move2(ele2);
            //console.log(m);
        }
    },300)
}






//思路：就是判断传递参数的第一个字母；
function $(str){
    //如果str是一个函数，那么就把他绑定到window.onload上；
    if(typeof str === "function"){
        window.onload = str;
    }else{
        //获取第一个字符
        var char = str.charAt(0);
        //判断：第一个字符是什么就调用什么方法
        if(char === "#"){
            return document.getElementById(str.slice(1));//去掉第一个字符
        }else if(char === "."){
            return document.getElementsByClassName(str.slice(1));//去掉第一个字符
        }else{
            return document.getElementsByTagName(str);//直接书写标签名，不需要去掉第一个字符了
        }
    }
}





















































