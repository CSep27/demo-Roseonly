/**
 * Created by wtt on 2016/8/5.
 */

// 轮播图 B
$(window).load(function () {
    var timer = null;
    //鼠标进入和出去
    $("#slideBox").mouseover(function () {
        $(".arrow").css("display", "block");
        $(".circle").css("display", "block");
        clearInterval(timer);
    });
    $("#slideBox").mouseout(function () {
        $(".arrow").css("display", "none");
        $(".circle").css("display", "none");
        timer = setInterval(playNext, 1500);
    });
    var pic = 0;
    var square = 0;
    //鼠标经过按钮
    $(".circle>li").mouseover(function () {
        $(this).addClass("circle-cur")
            .siblings()
            .removeClass("circle-cur");
        var index = $(this).index();
        var ulLeft = -index * 1240;
        $("#slideBoxPic").animate({
            "left": ulLeft + "px"
        }, 400)
        pic = square = index;
    });
    //点击箭头
    $(".arrow-right").click(function () {
        if (pic == $("#slideBoxPic li").length - 1) {
            $("#slideBoxPic").css("left", 0);
            pic = 0;
        }
        pic++;
        var ulLeft = -pic * 1240;
        $("#slideBoxPic").animate({
            "left": ulLeft + "px"
        }, 400)
        if (square == $(".circle li").length - 1) {
            square = 0;
        } else {
            square++;
        }
        $(".circle li").eq(square).addClass("circle-cur")
            .siblings()
            .removeClass("circle-cur");
    });
    $(".arrow-left").click(function () {
        //console.log($("#slideBoxPic li").length);
        if (pic == 0) {
            $("#slideBoxPic").css("left", -($("#slideBoxPic li").length - 1) * 1240 + "px");
            pic = $("#slideBoxPic li").length - 1;
        }
        pic--;
        var ulLeft = -pic * 1240;
        $("#slideBoxPic").animate({
            "left": ulLeft + "px"
        }, 400)
        if (square == 0) {
            square = $(".circle li").length - 1;
        } else {
            square--;
        }
        $(".circle li").eq(square).addClass("circle-cur")
            .siblings()
            .removeClass("circle-cur");
    });
    //添加自动滚动
    timer = setInterval(playNext, 2000);
    function playNext() {
        $(".arrow-right").click();
    }
});
// 轮播图 E

// 分类 B
$(window).load(function () {
    $("#sortBox li").mouseover(function () {
        $(this).children("div").css("opacity", 0.4);
    });
    $("#sortBox li").mouseout(function () {
        $(this).children("div").css("opacity", 0);
    });
});
// 分类 E

// 热卖单品推荐  B
$(window).load(function () {
    $(".single-tab>li").mouseover(function () {
        $(this).addClass("single-tab-cur")
            .siblings()
            .removeClass("single-tab-cur");
        var index = $(this).index();
        $(".single-box>ul")
            .eq(index)
            .addClass("single-box-cur")
            .siblings()
            .removeClass("single-box-cur");
    });
});
// 热卖单品推荐  E

// 具体分类 B
$(window).load(function () {
    $(".specific-pic-left").mouseover(function () {
        $(this).children("div").css("opacity", 0.4);
    });
    $(".specific-pic-left").mouseout(function () {
        $(this).children("div").css("opacity", 0);
    });
    $(".specific-pic-right>li").mouseover(function () {
        $(this).children("div").css("opacity", 0.4);
    });
    $(".specific-pic-right>li").mouseout(function () {
        $(this).children("div").css("opacity", 0);
    });
    $(".specific-head>a").mouseover(function () {
        $(this).css("fontWeight", "bold");
    });
    $(".specific-head>a").mouseout(function () {
        $(this).css("fontWeight", "normal");
    });
});
// 具体分类 E


// 轮播图 B
// 轮播图 E

// 轮播图 B
// 轮播图 E