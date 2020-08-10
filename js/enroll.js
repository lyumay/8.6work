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
            $(this).find("span").html("注册");
            $(".nav-mask").css({
                display:"none"
            })
        }
    });
})