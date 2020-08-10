$(function () {
    var num = 0;
    $(".nav").hammer().bind("click",function(){
        num++;
        if(num%2==1){
            $(this).find("span").html("关闭");
            $(".nav-mask").css({
                display:"block"
            })
        }else if(num%2==0){
            $(this).find("span").html("首页");
            $(".nav-mask").css({
                display:"none"
            })
        }
    });
    //返回顶部按钮显示
    var topbtn=document.querySelector(".top");

    window.onscroll=function(){
        var st = document.documentElement.scrollTop;
        if(st>700){
            topbtn.style.opacity=1;
        }else{
            topbtn.style.opacity=0;
        }

        //点击效果
        topbtn.onclick=function(){
            console.log("back");
            animate(document.documentElement, {
                scrollTop: 0
            }, 1000);
        }
    }
})