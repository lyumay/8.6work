$(function(){
    $(".close-box").hammer().bind("tap",function(){
        $(this).find("div").css({
            transform:"rotate(0)"
        })
        $("header").css({
            height:0,
            overflow:"hidden",
        })
    })
    $(".menu-more").hammer().bind("tap",function(ev){
        $(".son").css("display","block");
        ev.stopPropagation();
    })
    $(":not(.menu-more)").hammer().bind("tap",function(){
        $(".son").css("display","none");
    })
    //拖拽导航

    drag(".nav-box")
    drag(".news-goods-list-box")
    function drag(selector){
        var startplace;
        $(selector).hammer().bind("panstart",function(ev){
            startplace=$(this).position().left;
        })
        $(selector).hammer().bind("panleft",function(ev){
            var lefts=startplace+ev.gesture.deltaX;
            if(Math.abs(lefts)>$(this).width()-$(this).parent().width()){
                lefts=-($(this).width()-$(this).parent().width())
            }
            $(this).css({
                left:lefts
            })
        })
        $(selector).hammer().bind("panright",function(ev){
            var rights=startplace+ev.gesture.deltaX;
           if(rights>0){
               rights=0;
           }
            $(this).css({
                left:rights
            })
        })
    }

   //选项卡
   $(".hot-btns li").hammer().bind("tap",function(){
       var index=$(".hot-btns li").index(this);
       
       $(".hot-btns li").css({
        width:"0.2rem",height:"0.2rem"
        })
       $(this).css({
           width:"0.3rem",height:"0.3rem"
       })

       $(".hot-goods-list").css("display","none")
       $($(".hot-goods-list")[index]).css("display","block")
   })
})