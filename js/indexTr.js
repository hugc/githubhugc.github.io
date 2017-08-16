/**
 * Created by Сֻ�� on 2017/6/21.
 */
window.onload = function(){
    var navHeight = document.getElementsByClassName("samePerBanner")[0];
    var top = document.getElementsByClassName("wrapTr")[0];
    document.onscroll =function () {
        if (scroll().top >= navHeight.offsetHeight){
            navHeight.className = "samePerBanner topBannerFixedNav";
            top.style.marginTop = navHeight.offsetHeight + "px";
        }else {
            navHeight.className = "samePerBanner";
            top.style.marginTop = 0;
        }
    }
    var arrOfJson = [

        {//1
            height:520,
            width:520,
            left:170,
            top:56,
            opacity:0.6,
            "z-index":3
        },
        {//2
            height:780,
            width:780,
            left:560,
            top: -84,
            opacity:1,
            "z-index":4
        },
        {//3
            height:520,
            width:520,
            left:1213,
            top:56,
            opacity:0.6,
            "z-index":3
        },
        {
            height:520,
            width:520,
            left:690,
            top:56,
            opacity:0,
            "z-index":3
        },
        {
            height:520,
            width:520,
            left:690,
            top:56,
            opacity:0,
            "z-index":3
        },
        {
            height:520,
            width:520,
            left:690,
            top:56,
            opacity:0,
            "z-index":3
        },
        {
            height:520,
            width:520,
            left:690,
            top:56,
            opacity:0,
            "z-index":3
        },
        {
            height:520,
            width:520,
            left:690,
            top:56,
            opacity:0,
            "z-index":3
        }
    ];

    var slideTr = document.getElementById("slideTr");
    var liArrTr = slideTr.getElementsByTagName("li");
    var ulImg = document.getElementById("ulImg");
    var logoLoad = document.getElementById("logoLoad");
    var erweima = document.getElementById("erweima");
    var pageTopHeight = document.getElementsByClassName("top")[0];
    //banner�������ر�ǩ������ȥ��ʾ��ά��
    logoLoad.onmouseenter = function () {
        erweima.style.display = "block";
    }
    logoLoad.onmouseleave = function () {
        erweima.style.display = "none";
    }
    //�м䲿���Զ��ֲ�ͼ
    for (var i = 0; i < liArrTr.length; i++){
        animateTr(liArrTr[i],arrOfJson[i]);
    }
    timer=setInterval(function () {
        ulImg.insertBefore(ulImg.lastElementChild,ulImg.firstElementChild);
        for (var i = 0; i < liArrTr.length; i++){
            animateTr(liArrTr[i],arrOfJson[i]);
        }
    },2000);

    function animateTr(element,jsonTr,fnTr){
        clearInterval(element.timer);
        element.timer = setInterval(function(){

            var bool =true;
            for (var k in jsonTr ){
                if(k === "z-index"){
                    element.style.zIndex = jsonTr[k];
                }else if(k ==="opacity"){
                    if(getStyleTr(element,k)===0){
                        var leader = 0;
                    }else{
                        var leader = parseInt(getStyleTr(element,k)*50) || 10;
                    }
                    var step = (parseInt(jsonTr[k]*50)-leader)/10;
                    step = step>0?Math.ceil(step):Math.floor(step);
                    leader = leader + step;
                    element.style.opacity = leader/20;
                    element.style.filter = "alpha(opacity="+leader*10+")";
                    if(jsonTr[k] !== leader/50){
                        bool=false;
                    }
                }else{
                    var leader = parseInt(getStyleTr(element,k)) || 0;
                    var step = (jsonTr[k] - leader)/10;
                    step = step>0?Math.ceil(step):Math.floor(step);
                    leader = leader + step;
                    element.style[k] = leader + "px";
                    if(jsonTr[k] !== leader){
                        bool = false;
                    }
                }
            }
            if(bool){
                clearInterval(element.timer);
                if(fnTr){
                    fnTr();
                }
            }
        },30)
    }

    function getStyleTr(element,attrTr){
        if(window.getComputedStyle){
            return window.getComputedStyle(element,null)[attrTr];
        }else{
            return element.currentStyle[attrTr];
        }
    }

    // =========================================================================


    /**
     * Created by ������ on 2017/6/20.
     */
    var pagePic=document.getElementById("pagePic");
    var liArr=pagePic.getElementsByTagName("li");


//��ߵ�����
    var rightBar=document.getElementById("rightBar")
    window.onscroll=function(){
        //console.log(1);
        if(scroll().top>=pageTopHeight.offsetHeight/2){
            rightBar.style.display="block";
            //console.log(2);
            for(var i = 0 ; i <5 ; i++){
                animate(liArr[i],json,function(){
                    for(var j= 5 ; j<10 ; j++){
                        animate(liArr[j],json,function(){
                            for(var k = 10 ; k <15; k++){
                                animate(liArr[k],json,function(){
                                    //for(var l = 15 ; l <20 ; l++){
                                    animate(liArr[15],json)
                                    animate(liArr[16],json)
                                    animate(liArr[17],json)
                                    animate(liArr[18],json)
                                    animate(liArr[19],json,auto)
                                    //}
                                })
                            }
                        })
                    }
                })
            }
        }else{
            rightBar.style.display="none";
        }
    }
//������Ϸģ����ʾ������
    var game=rightBar.getElementsByClassName("downloadGame")[0];
    game.onmouseenter=function(){
        rightBar.getElementsByClassName("game")[0].style.display="block";
    }
    game.onmouseleave=function(){
        rightBar.getElementsByClassName("game")[0].style.display="none";
    }
//���ض�����ť����
    var returnTop=rightBar.getElementsByClassName("returnTop")[0]
    var timerr = null;
    var target = 0; //Ŀ��λ��
    var leader = 0; //��ʾ���������λ��
    returnTop.onclick = function () {
        //�����㣺window.scrollTo(0,0);
        //Ҫ�ö�ʱ�������嶨ʱ��
        clearInterval(timerr);
        timerr = setInterval(function () {
            var step = (target-leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader +step;
            window.scrollTo(0,leader);
            if(leader === 0){
                clearInterval(timerr);
            }
        },40);
    }


//�ٲ���  ����߶�2100px  ÿ�и߶� 520px

//ͼƬ��ʼλ��
    //��һ�г�ʼλ��
    for(var j =0; j <=4 ; j++){
        liArr[j].style.top="-530px";
    }
    //�ڶ��г�ʼλ��
    for(var j = 5; j <=9; j++){
        liArr[j].style.top="-1050px";
    }
    //�����г�ʼλ��
    for(var j = 10; j <=14; j++){
        liArr[j].style.top="-1570px";
    }
    //�����г�ʼλ��
    for(var j = 15; j <=19; j++){
        liArr[j].style.top="-2090px";
    }
    for (var i = 0; i < liArr.length; i++){
        liArr[i].style.display = "block";
    }
    var json={"top":0};
    var timer = null;//�Զ��ֲ���ʱ��

    //var tim=setTimeout(auto,6000);
    //���������ֹͣ�Զ�����
    pagePic.onmouseenter = function () {
        clearInterval(timer);
    }
    pagePic.onmouseleave = function () {
        timer = setInterval(autoPlay,1500)
    }
//������� �������ͣ������װ
    function auto(){
        //�������һ��ͼƬ
        clearInterval(timer);
        timer=setInterval(autoPlay,1500)

        //������ֹͣ�����������������ǰ�����ͣ��ͼƬ
        for(var i = 0 ; i < liArr.length; i++){
            liArr[i].onmouseenter=function(){
                for(var j = 0 ; j < liArr.length; j++){
                    liArr[j].style.opacity=0.6;
                }
                clearInterval(timer);
                this.style.opacity=1;
            }
            // liArr[i].onmouseleave=function(){
            //     timer=setInterval(autoPlay,1000)
            // }
        }
    }




//�Զ�������װ

    function autoPlay(){
        var sum;
        var flagBianliang = 22;
        for(var i = 0 ; i < liArr.length; i++){
            sum=Math.floor(Math.random()*20);
            while (sum===flagBianliang){//�������������ϴ�һ���������²���
                sum=Math.floor(Math.random()*20);
            }
            flagBianliang = sum;
            for(var j = 0 ; j < liArr.length; j++){
                liArr[j].style.opacity=0.6;
            }
            console.log(111);
            liArr[sum].style.opacity=1;
        }
    }

// //��ȡҳ�汻�ڵ�/��ȥ�Ĳ���
//     function scroll(){
//         return {
//             top: window.pageYOffset || document.documentElement.scrollTop,
//             left: window.pageXOffset || document.documentElement.scrollLeft
//         };
//     }
}


//����������1.������Ԫ��   2.json;��
function animate(ele,json,fn){
    //�����ʱ��
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        //����ԭ��
        var bool = true;

        //����for...in...����json;
//                for(var k in json){
//                    k: ���ԣ�
//                    json[k]: k���Զ���Ӧ��ֵ��
//                }
        //(1).��attr�滻��k;
        //(2).��target�滻��json[k];
        for(var k in json){
            //��ȡ����
            var leader = parseInt(getStyle(ele,k)) || 0;//��ǰ״̬
            var step = (json[k] - leader)/10;
            //���δ���
            step = step>0?Math.ceil(step):Math.floor(step);
            //��ֵ
            leader = leader + step;
            ele.style[k] = leader + "px";
            //û�е���ָ��λ�ã������������ʱ��
            if(json[k] !== leader){
                bool = false;
            }
        }
        //�����ʱ��
        //1.����д��for���棻
        //2.��֤����Ԫ�ض�����ָ��λ���������ʱ��
        console.log(1);
        //����Ԫ�ض�����Ŀ��λ�ò������ʱ����
        if(bool){
            clearInterval(ele.timer);
            //�����˺����Ҿ͵��ã������ݣ������ã�
//                    if(fn && typeof fn == "function"){
            if(fn){
                fn();
            }
        }
    },30);
}


//��ȡ������ֵΪ�ַ���
function getStyle(ele,attr){
    //��һ��
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }else{
        return ele.currentStyle[attr];
    }
}