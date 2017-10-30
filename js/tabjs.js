/**
 * Created by Administrator on 2017/3/21.
 */
$(function(){
        //用循环给每个gender下面的a标签加上背景图
        for(var n=1;n<=$(".ct_tab>div .gender a").length;n++){
            $(".ct_tab>div .gender a").eq(n-1).css({
                "background":"url('../qnyh/img/tabimg/touxiang/"+n+".gif') no-repeat"
            })
        }
    for(var m=1;m<=$(".ct_tab>div").length;m++){
        $(".ct_tab>div").eq(m-1).css({
            "background":"url('../qnyh/img/tabimg/yingxiong/"+m+".1.png') no-repeat"
        })
    }
    //默认一开始 显示男职业
    $(".ct_tab>div .gender a:even").addClass("active1").css({"background":"url('../qnyh/img/tabimg/touxiang/male.gif') no-repeat"});

    //当放到偶数 也就是放到男职业的时候
    //显示男职业 女职业变成头像
    $(".ct_tab>div .gender a:even").each(function(index){
        $(this).mouseover(function(){
            console.log(index);
            //根据index找到对应的div 这里是鼠标放到男职业头像上时 切换男英雄
            $(".ct_tab>div").eq(index).css({"background":"url('../qnyh/img/tabimg/yingxiong/"+(index+1)+".1.png') no-repeat"});
            //找到shit对应的gender
            $(".ct_tab>div .gender").eq(index).children().removeClass("active1 active2");
            //然后再通过对应的gender找到两个a标签分别操作
            $(".ct_tab>div .gender").eq(index).children().eq(0).css({"background":"url('../qnyh/img/tabimg/touxiang/"+(index+1)+".gif') no-repeat"});
            $(".ct_tab>div .gender").eq(index).children().eq(1).css({"background":"url('../qnyh/img/tabimg/touxiang/"+(index+1)*2+".gif') no-repeat"});
            $(this).css({"background":"url('../qnyh/img/tabimg/touxiang/male.gif') no-repeat"}).addClass("active2");
        });
    });
    /*$(".ct_tab>div .gender a").each(function).mousemove(function(){
        this
    });*/
    //当放到奇数 也就是放到女职业的时候
    //显示女职业 男职业变成头像
    $(".ct_tab>div .gender a:odd").each(function(index){
        $(this).mouseover(function(){
            //根据index找到对应的div 这里是鼠标放到女职业头像上时 切换女英雄
            $(".ct_tab>div").eq(index).css({"background":"url('../qnyh/img/tabimg/yingxiong/"+(index+1)+".2.png') no-repeat"});
            //找到shit对应的gender
            $(".ct_tab>div .gender").eq(index).children().removeClass("active1 active2");
            //然后再通过对应的gender找到两个a标签分别操作
            $(".ct_tab>div .gender").eq(index).children().eq(0).css({"background":"url('../qnyh/img/tabimg/touxiang/"+((index+1)*2-1)+".gif') no-repeat"});
            $(".ct_tab>div .gender").eq(index).children().eq(1).css({"background":"url('../qnyh/img/tabimg/touxiang/"+(index+1)*2+".gif') no-repeat"});
            $(this).css({"background":"url('../qnyh/img/tabimg/touxiang/female.gif') no-repeat"}).addClass("active2");
        });
    });




    //for循环给每个name加上背景图片
    for(var i=1;i<=$(".ct_tab>div .name").length;i++){
        //console.log($(".ct_tab>div .name").eq(i-1));
        $(".ct_tab>div .name").eq(i-1).css({
            "background":"url('../qnyh/img/tabimg/zhiye/"+i+".png') no-repeat"
        })
    }
    //用for循环给每个leibie加上背景图片
    for(var j=1;j<=$(".ct_tab>div .leibie").length;j++){
        $(".ct_tab>div .leibie").eq(j-1).css({
            "background":"url('../qnyh/img/tabimg/gaikuang/"+j+".gif') no-repeat"
        })
    }
    //默认一开始图片出现
    $(".ct_tab>div").css({
        "background-position":0,
        "opacity":1
    });
    //$(".ct_tab>div .name").animate({"top":65+"px","opacity":1},300);
    //$(".ct_tab>div .dingwei").animate({"top":135+"px","opacity":1},300);
    //关联职业名称和英雄图像
    $(".ct_nav>li").each(function(index){
        //给指针加上一个鼠标事件
        $(this).mouseover(function(){
            $(".ct_nav>li").removeClass("active");//所有list清除样式
            $(this).addClass("active");//给指针加上样式
            $(".ct_tab>div .leibie").css({"opacity":0});
            $(".ct_tab>div .dingwei").css({"top":170+"px","opacity":0});
            $(".ct_tab>div .name").css({
                "top":100+"px","opacity":0
            }).eq(index).animate({"top":65+"px","opacity":1},300,function(){
                $(".ct_tab>div .dingwei").eq(index).animate({
                    "top":135+"px",
                    "opacity":1},300,function(){
                    $(".ct_tab>div .leibie").eq(index).animate({"opacity":1},200)
                })
            });
            //给相对应的div加上动画
            $(".ct_tab>div").css({
                "display":"none",
                //这上下两条是触发之前都回到默认位置
                "background-position":100+"px",
                "opacity":0}).eq(index).css({"display":"block"}).animate({
                "background-position":0,
                "opacity":1
            },300);
        })
    })

});
