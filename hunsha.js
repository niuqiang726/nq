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

//�Զ��ֲ�
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
//�����Զ�����
function bindTip() {
    var temp=(count>=$aimg.length-1?0:count);
    $.each($alis,function (index, item) {
        item.className=(index===temp?'square':null);
    });
}
//�ֶ��л�����
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
//�������ֹͣ�˶� ͬʱ���Ұ�ťҪ��ʾ ����Ƴ������˶� ���Ұ�ť����
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
//������Ұ�ť�л�
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



//���ض���
var oDiv=document.getElementsByClassName('returnTop')[0];
oDiv.onclick=function () {
    var target=document.documentElement.scrollTop||document.body.scrollTop;
    console.log(target);
    var duration=500; //��ʱ��                               ��
    var interval=300; // Ƶ��
    // ���������
    var step=target/duration*interval;
    var timer=setInterval(function () {
        // ��ȡ�ĵ�ǰ���µ�λ�� ����   �����ľ���
        var currentTop=document.documentElement.scrollTop||document.body.scrollTop;
        console.log(currentTop);
        // �����ʱ�Ѿ����ﶥ�������ǾͲ���Ҫ�ö�ʱ��������
        if(currentTop<=0){
            clearInterval(timer);
        }
        currentTop-=step;
        console.log(currentTop);
        // û��һ��  ����Ҫ���������µ�ǰ��scrollTop
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


