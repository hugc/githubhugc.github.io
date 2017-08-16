/**
 * Created by asus on 2017/6/21.
 */
//封装获取所有最高权限属性值方法
/**
 *
 * @param ele(元素对象)
 * @param attr(需要获取的属性名)
 * @returns {*}(返回对应的属性值)
 */
function getStyle(ele,attr) {
    if (window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }else {
        return ele.currentStyle[attr];
    }
}

//封装获取页面被卷曲的部分
/**
 *
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function scroll() {
    return {
        top:window.pageYOffset || document.documentElement.scrollTop,
        left:window.pageXOffset || document.documentElement.scrollLeft
    }
}
//匀速动画的封装
function animateLinerLoney(ele,target,fn3) {
    //bug1：要用定时器，先清除定时器；
    clearInterval(ele.timer3);
    //定义一个定时器；
    ele.timer3 = setInterval(function () {
        //获取步长
        var step = target > ele.offsetLeft ? 10 : -10;
        //赋值
        ele.style.left = ele.offsetLeft + step + "px";
        //目标位置和当前位置不足一个步长的时候；直接赋值并清除定时器
        if( Math.abs(target - ele.offsetLeft) <= Math.abs(step) ){
            ele.style.left = target + "px";
            clearInterval(ele.timer3);
            if(fn3 && typeof fn3 == "function"){
                fn3();
            }
        }
    },20);
}

//封装匀速动画函数
/**
 *
 * @param ele(需要操纵的元素对象)
 * @param json(传入一个有需要改变的所有属性组成的json对象)
 * @param fn(传入一个当动画完成后需要执行的函数)
 */
function linearAnimate(ele,json,fn) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var falg = true;
        for (var k in json){
            if (k==="z-index"){
                ele.style.zIndex = json[k];
            }else if (k==="opacity"){
                if (getStyle(ele,k)=="undefined"){
                    var leader = 10;
                }else {
                    var leader = parseInt(getStyle(ele,k)*10) || 0;
                }
                console.log(leader);
                if (json[k]*10 === leader){
                    var step = 0;
                }else {
                    var step = json[k]*10 > leader?1:-1;
                }
                step = step > 0?Math.ceil(step):Math.floor(step);
                leader += step;
                ele.style.opacity = leader/10;
                if (json[k] !== leader/10){
                    falg = false;
                }
            }else {
                var leader = parseInt(getStyle(ele,k)) || 0;
                if (json[k]===leader){//如果已经到了，但是其他没到，那么如果只是用>比较那么回去到-10，所以加上判断
                    var step = 0;
                }else {
                    var step = json[k] > leader?10:-10;
                }
                leader+=step;
                ele.style[k] = leader + "px";
                if (json[k] !== leader){
                    falg = false;
                }
            }
        }
        if (falg){
            clearInterval(ele.timer);
            if (fn){
                fn();
            }
        }
    },10)
}

//封装缓动动画方法
/**
 *
 * @param ele(与匀速动画一样，只是步长不是定值而已)
 * @param json
 * @param fn
 */
function swingAnimate(ele,json,fn4) {
    clearInterval(ele.timer4);
    var bool = true;
    ele.timer4 = setInterval(function () {
        bool=true;
        for (var k in json){
            if (k==="z-index"){
                ele.style.zIndex = json[k];
            }else if (k==="opacity"){
                if (getStyle(ele,k)=="undefined"){
                    var leader = 100;
                }else {
                    var leader = parseInt(getStyle(ele,k)*100) || 0;
                }
                var step = (json[k]*100 - leader)/10;
                step = step > 0?Math.ceil(step):Math.floor(step);
                leader += step;
                ele.style.opacity = leader/100;
                if (json[k] !== leader/100){
                    bool = false;
                }
            }else {
                var leader = parseInt(getStyle(ele,k)) || 0;
                var step = (json[k] - leader)/10;
                step = step > 0?Math.ceil(step):Math.floor(step);
                leader+=step;
                ele.style[k] = leader + "px";
                if (json[k] !== leader){
                    bool = false;
                }
            }
        }
        if (bool){
            clearInterval(ele.timer4);
            if (fn4){
                fn4();
            }
        }
        console.log(111);
    },20)
}

//封装获取元素内容的方法
/**
 *
 * @param ele(需要获取谁的内容)
 * @returns {*}(返回改元素内的内容)
 */
function getText(ele) {
    if (ele.textContent){
        return ele.textContent;
    }else {
        return ele.innerText;
    }
}

//封装设置元素内容的方法
/**
 * (与上面的获取一样)
 * @param ele
 * @param string(放入需要设置的内容)
 */
function setText(ele,str) {
    if (ele.textContent){
        ele.textContent = str;
    }else {
        ele.innerText = str;
    }
}

//
