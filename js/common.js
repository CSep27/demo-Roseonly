/**
 * Created by wtt on 2016/8/5.
 */

// 顶部公共部分 B
$(window).load(function () {
    $(".top-bar-right a").mouseover(function () {
        $(this).css("fontWeight", "bold");
    });
    $(".top-bar-right a").mouseout(function () {
        $(this).css("fontWeight", "normal");
    });
    //导航栏下拉框显示隐藏
    $(".nav-bar>li").mouseenter(function () {
        $(this).children(".nav-bar-item").addClass("nav-bar-cur");
        $(this).children(".nav-box").animate({
            "opacity": 1
        }, 600);
        $(this).children(".nav-box").css("display", "block");
        stop(false, true);
    });
    /*$(".nav-box").mouseenter(function () {
        $(this).css("display", "block");
    });*/
    $(".nav-bar>li").mouseleave(function () {
        $(this).children(".nav-bar-item").removeClass("nav-bar-cur");
        $(this).children(".nav-box").css("opacity", 0);
        $(this).children(".nav-box").css("display", "none");
        stop(false, true);
    });
    /*$(".nav-box").mouseleave(function () {
        $(this).css("display", "none");
    });*/

});
// 顶部公共部分 E

// 侧边栏 B
$(window).load(function () {
    $(".sidebar i").mouseenter(function () {
        $(".sidebar div").css("display", "block");
    });
    $(".sidebar i").mouseleave(function () {
        $(".sidebar div").css("display", "none");
    });
    $(window).scroll(function (e) {
        if ($(window).scrollTop() > $(window).height()) {
            $(".sidebar-totop").css("display", "block");
        } else {
            $(".sidebar-totop").css("display", "none");
        }
    });
    $(".sidebar-totop").click(function () {
        $(window).scrollTop("0");
    });
});
// 侧边栏 E

// 底部公共部分 B
$(window).load(function () {
    var imgTop = ($(window).height() - 495 ) / 2;
    var imgleft = ($(window).width() - 495 ) / 2;
    $(".foot-top-left div").css({
        "left":imgleft,
        "top":imgTop
    })
    $(".foot-top-left s").mouseenter(function () {
        $(".foot-top-left div").css("display", "block");
    });
    $(".foot-top-left s").mouseleave(function () {
        $(".foot-top-left div").css("display", "none");
    });
});
// 底部公共部分 E

// 轮播图 B
// 轮播图 E

// 轮播图 B
// 轮播图 E

// 轮播图 B
// 轮播图 E

// 轮播图 B
// 轮播图 E