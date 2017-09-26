/**
 * Created by 20160228 on 2017/8/4.
 */
//var  oBox=document.getElementById('wuyu');
//var  banner=document.getElementById('bannerone');
//var oUL=oBox.getElementsByTagName('ul')[0];
//var lis=oUL.getElementsByTagName('li');
//var index=0;
//var step=-10;
//var timer=setInterval(automove,3500);
//function automove() {
//    index++;
//    if(index>4){
//        index=1;
//        banner.style.left=0;
//    }
//    var timer1=setInterval(move,10);
//    function move() {
//        console.log(index);
//        if(banner.offsetLeft<=-1920*index){
//            clearInterval(timer1)
//        }else{
//            banner.style.left=banner.offsetLeft+step+'px';
//        }
//    }
//}
//

var $Box=$('#bc');
var $Boxc=$('#little');
var $aimg=$Boxc.find('img');
var $oUl=$('#quanbu');
var $alis=$oUl.find('li');
var count=0;
var timer=null;
var $btnLeft=$('.btnLeft');
var $btnRight=$('.btnRight');

//自动轮播
timer=setInterval(automove,3000);
function automove(){
    if(count>=$aimg.length-1){
        count=0;
        $Boxc.css('left',0);
    }
    count++;
    $Boxc.animate({'left':-count*1920},500);
    bindTip();
}
//焦点自动播放
function bindTip() {
    var temp=(count>=$aimg.length-1?0:count);
    $.each($alis,function (index, item) {
        item.className=(index===temp?'square':null);
    });
}
//手动切换焦点
handleChange();
function handleChange() {
    $.each($alis,function (index, item) {
        $(item).click(function () {
            count=$(this).index();
            $Boxc.animate({'left':-count*1920},500);
            bindTip();
        })
    })
}
//鼠标移入停止运动 同时左右按钮要显示 鼠标移出继续运动 左右按钮隐藏
$Box.mouseover(function () {
    clearInterval(timer);
    $btnLeft.show();
    $btnRight.show();
});

$Box.mouseout(function () {
    timer=setInterval(automove,3000);
    $btnLeft.hide();
    $btnRight.hide();
});
//点击左右按钮切换
$btnRight.click(function () {
    automove();
});

$btnLeft.click(function () {
    if(count<=0){
        count=$aimg.length-1;
        $Boxc.css('left',-count*1920);
    }
    count--;
    $Boxc.animate({'left':-count*1920},500);
    bindTip();
});



//返回顶部
var oDiv=document.getElementsByClassName('returnTop')[0];
oDiv.onclick=function () {
    var target=document.documentElement.scrollTop||document.body.scrollTop;
    console.log(target);
    var duration=500; //总时间                               吗
    var interval=300; // 频率
    // 求出步长：
    var step=target/duration*interval;
    var timer=setInterval(function () {
        // 获取的当前最新的位置 距离   顶部的距离
        var currentTop=document.documentElement.scrollTop||document.body.scrollTop;
        console.log(currentTop);
        // 如果此时已经到达顶部，我们就不需要让定时器继续走
        if(currentTop<=0){
            clearInterval(timer);
        }
        currentTop-=step;
        console.log(currentTop);
        // 没走一步  就需要重新设置下当前的scrollTop
        document.documentElement.scrollTop=document.body.scrollTop=currentTop;
    },interval);
}
/////////////////////////////////////////////
var a=$('.oneone')
var b=$('.twotwo')
b.mouseover(function(){
    a.show()
})
a.mouseout(function(){
    a.hide()
})


