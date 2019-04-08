window.onload = function () {
    //--------------------- ----------------------------------------------------------11111----------------------通过用缓冲运动实现盒子的高度变化
    var liEnd = document.getElementById("li-end");
    var box = document.getElementById('box');
    liEnd.onmouseover = function () {
        startMov(box, { height: 79 });
        liEnd.style.color = "white";
    }
    liEnd.onmouseout = function () {
        startMov(box, { height: 0 });
        liEnd.style.color = "#8b57e6";
    }
    liEnd.timer = null;
    //----------------------------------------------------------------------------------------------------------结束（成功）hhhhhhhhhhhhhhhhhhhhhhhh
    //--------------------------------------------------------------------------------22222---------------------实现鼠标移入文字底下自左到右画一条线的效果
    var line = document.querySelectorAll('.nav-li');
    for (var i = 0; i < line.length; i++) {
        line[i].onmouseover = function () {
            let foWidth = this.offsetWidth;
            startMov(this.getElementsByTagName('div')[0], { width: foWidth })
        }

        line[i].onmouseout = function () {
            startMov(this.getElementsByTagName('div')[0], { width: 0 })
        }
    }
    //--------------------------------------------------------------------------------------------------------- 他是平移过去的，一盒多用，不好
    // var underline = document.getElementById('underline');
    // for (let i = 0; i < line.length; i++) {
    //     line[i].onmouseover = function () {
    //         let foLeft = this.offsetLeft;
    //         let foWidth = this.offsetWidth;
    //         startMov(underline, { left: foLeft, width: foWidth });
    //     };
    //     line[i].onmouseout = function () {
    //         let foLeft = this.offsetLeft;
    //         let foWidth = this.offsetWidth;
    //         startMov(underline, { left: foLeft, width: 0 });
    //     }
    // }
    //----------------------------------------------------------------------------------------------------------结束
    //--------------------------------------------------------------------------------44444---------------------实现右下角图片的转动,并用链式运动进行页面的切换
    var r = 0;
    var current = 0;
    var change1 = document.getElementById('turn-picture1');
    var change2 = document.getElementById('turn-picture2');
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    var page3 = document.getElementById('page3');
    var page4 = document.getElementById('page4');
    var page3Left = document.getElementById('page3-left');
    var page3Middle = document.getElementById('page3-middle');
    var page3Right = document.getElementById('page3-right');
    var words = document.getElementById('words');
    var page4Span = document.querySelector('#page4-right span');
    change1.onmouseover = function () {
        current = (current + 90) % 360;
        this.style.transform = 'rotate(' + current + 'deg)';
        change1.style.display = "none";
        change2.style.display = "block";

    }
    change2.onmouseout = function () {
        change1.style.display = "block";
        change2.style.display = "none";
    }
    change2.onclick = function () {
        page1.style.display = "none";
        page2.style.display = "block";
        startMov(page2, { width: 1800, height: 800 }, function () {             //-------------------------------------------------------我的链式运动在执行的过程中出现了不可避免的失误
            page2.style.display = "none";                                       //-------------------------------------------------------前后都是只到了第二部就不可进行
            page3.style.display = "block";                                      //-------------------------------------------------------???????????????????????????
            startMov(page3Left, { height: 800 }, function () {
                startMov(page3Middle, { height: 800 }, function () {
                    words.style.display = "block";
                    startMov(page3Right, { height: 800 }, function () {
                        page3.style.display = "none";
                        page4.style.display = "block";
                    })
                })
            })
        })
    }
    page4Span.onclick = function () {
        page4.style.display = "none";
        page3.style.display = "block";
        startMov(page3Right, { height: 800 }, function () {
            words.style.display = "block";  
            startMov(page3Middle, { height: 800 }, function () {
                startMov(page3Left, { height: 800 }, function () {
                    page3.style.display = "none";
                    page2.style.display = "block";
                    startMov(page2, { width: 1800, height: 800}, function () {
                        page2.style.display = "none";
                        page1.style.display = "block";
                    })
                })
            })
        })
    }
    page4Span.onmouseover = function(){
        page4Span.sty;e.color = "gray";
    }
    page4Span.onmouseout = function(){
        page4Span.sty;e.color = "white";
    }
    //----------------------------------------------------------------------------------------------------------还没有学会canvas或者是svg
    //-------------------------------------------------------------------------------55555----------------------实现鼠标移入图片放大的效果
    var mainPr = document.getElementById('main-picture');
    mainPr.onmouseover = function () {
        startMov(mainPr, { width: 800, height: 2100, paddingBottom: 0, opacity: 80, top: 150 });
    };
    mainPr.onmouseout = function () {
        startMov(mainPr, { width: 760, height: 2000, paddingBottom: 20, opacity: 100, top: 190 });
    };
    mainPr.timer = null;
    //----------------------------------------------------------------------------------------------------------结束hhhhhhhhhhhhhhhhhhhhhh
    //----------------------------------------------------------------------------------------------------------实现边栏的进去和出来
    var navLi = document.querySelectorAll('#right-nav ul li');
    for (var j = 0; j < navLi.length; j++) {
        navLi[j].onmouseover = function () {
            this.style.right = "17px";
        };
        navLi[j].onmouseout = function () {
            this.style.right = "0px";
        }
    }
    //----------------------------------------------------------------------------------------------------------结束hhhhhhhhhhhhhhhhhhhh    
    //---------------------------------------------------------------------------------------------------------实现title的出去和进来
    let p = document.querySelectorAll('#main-title p');
    var imgHeight = "500px";
    for (let j = 0; j < p.length; j++) {
        p[j].onmouseover = function () {
            this.style.left = "50px";
            this.style.color = "black";
        };
        p[j].onmouseout = function () {
            this.style.left = "0px";
            this.style.color = "gray";
        };
    }
    //---------------------------------------------------------------------------------------------------------完成
    var title = document.getElementById('main-title');
    var mainPr = document.getElementById('main-picture');
    var img1 = document.querySelector('.img1');
    var titleChild = title.children;
    var mainPrchild = document.querySelectorAll('#main-picture div img');
    //整个右面的div距离top的长度
    var oTop = mainPr.offsetTop;
    //每一张图片的高度
    var oHeight = img1.offsetHeight;
    var mainD = document.querySelector('#main-img div');
    //div 的宽
    var osw = mainD.offsetWidth;
    //窗口的高度
    var winH = window.innerHeight;
    //--------------------------------------------------------------------------------------------------------此处代码借鉴成分较大
    var scrollFunction = function (e) {
        //---------------------------------------------------------------------------------------------------实现图片滚动速度与页面滚动速度相同
        e = e || window.event;
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
        var dirT = e.delatY;
        var distance = (scrollTop / winH) * osw;
        mainD.style.cssText += `background-position-x: ${dirT > 0 ? distance : -distance}px;`
        //-------------------------------------------------------------------------------66666--------------- 实现滚动页面时将边栏隐藏的文字显示出来
        var rtNav = document.getElementById("right-nav"); //查询并定义div元素
        if (scrollTop > 120) { //判断
            rtNav.style.display = "block";
        }
        else {
            rtNav.style.display = "none";
        }
        //--------------------------------------------------------------------------------------------------- 实现页面滚动，自动切换导航栏
        for (var i = 0; i < titleChild.length; i++) {
            if (scrollTop + oTop > mainPrchild[i].offsetTop) {
                for (let j = 0; j < titleChild.length; j++) {
                    titleChild[j].style.left = "0px";
                    titleChild[j].style.color = "gray";
                }
                titleChild[i].style.left = "50px";
                titleChild[i].style.color = "black";
            }
        }
    }
    //火狐
    if (document.addEventListener) {
        document.addEventListener("DOMMouseScroll", scrollFunction, false);
    }
    //IE、Opera、Chrome  
    window.onscroll = document.onscroll = scrollFunction;
    //-------------------------------------------------------------------------------------------------------完成
    function startMov(obj, json, fn) {//fn回调函数    
        clearInterval(obj.timer);//执行动画之前清除动画    
        var flag = true;//是否动画都完成了    
        obj.timer = setInterval(function () {
            for (var attr in json) {
                var icur = 0;
                if (attr == 'opacity') {
                    icur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
                    //转换成整数,并且四舍五入下    
                }
                else {
                    icur = parseInt(getStyle(obj, attr));
                } var speed = 0;
                speed = (json[attr] - icur) / 8;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (icur != json[attr]) {
                    flag = false;                                                       //----------------------------------------完美运动框架
                }
                if (attr == 'opacity') {
                    obj.style.filter = 'alpha(opacity:' + (icur + speed) + ')';
                    obj.style.opacity = (icur + speed) / 100;
                }
                else {
                    obj.style[attr] = icur + speed + 'px';
                }
                if (flag) {
                    clearInterval(obj.timer);
                    if (fn) {
                        fn();
                    }
                }
            }
        }, 30);
    }
    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return getComputedStyle(obj, false)[attr];
        }
    }
    //--------------------------------------------------------------------------------77777---------------------实现鼠标移入对应的图片文字显现出来
    var div1 = document.getElementsByClassName('div1');
    var content = document.getElementsByClassName('prcture-content');
    for (var i = 0; i < content.length; i++) {
        content[i].index = i;
        content[i].onmouseover = function () {
            for (var j = 0; j < content.length; j++) {
                div1[j].style.opacity = "0";
            }
            div1[this.index].style.opacity = "1";
        }
        content[i].onmouseout = function () {
            for (var j = 0; j < content.length; j++) {
                div1[j].style.opacity = "0";
            }
        }
    }
    //--------------------------------------------------------------------------------33333---------------------实现鼠标经过图像，图片周围缓慢出现一个圈，而且是顺时针转动
    var lineWidth = 1;
    var startAngle = -(1 / 2 * Math.PI); //开始角度                                                             
    var endAngle = startAngle + 2 * Math.PI; //结束角度                                                        
    var xAngle = 1 * (Math.PI / 180); //偏移角度量                                                            
    var tmpAngle = startAngle; //临时角度变量                                                               
    function frame() {
        if (tmpAngle >= endAngle) {
            return;
        }
        else if (tmpAngle - xAngle > endAngle) {
            tmpAngle = endAngle;
        }
        else {
            tmpAngle += xAngle;
        }
    }
    var c1 = document.getElementById('myCanvas1');
    var ctx1 = c1.getContext('2d');
    c1.onmouseover = function () {
        var timer1 = setInterval(function () {
            //画圈
            ctx1.beginPath();
            ctx1.lineWidth = lineWidth;
            ctx1.strokeStyle = '#8b57e6';
            ctx1.arc(24, 24, 15, startAngle, tmpAngle);
            ctx1.stroke();
            ctx1.closePath();
            frame();
        }, 10)
    }
    c1.onmouseout = function () {
        clearInterval(timer1);
    }
    var c2 = document.getElementById('myCanvas2');
    var ctx2 = c2.getContext('2d');
    c2.onmouseover = function () {
        var timer2 = setInterval(function () {
            //画圈
            ctx2.beginPath();
            ctx2.lineWidth = lineWidth;
            ctx2.strokeStyle = '#8b57e6';
            ctx2.arc(24, 24, 15, startAngle, tmpAngle);                                                            //清除定时器不知道应该在什么地方
            ctx2.stroke();                                                                                        //效果令人迷惑，总是会一个呗一个影响
            ctx2.closePath();                                                                                    //不知道咋简化代码，感觉命名的变量都不一样，
            frame();                                                                                            //但函数里面的内容又都一样
        }, 1)                                                                                                  //为啥画圈的速度会越来越快？？？？？？？？
    }
    c2.onmouseout = function () {
        clearInterval(timer2);
    }
    var c3 = document.getElementById('myCanvas3');
    var ctx3 = c3.getContext('2d');
    c3.onmouseover = function () {
        var timer3 = setInterval(function () {
            //画圈
            ctx3.beginPath();
            ctx3.lineWidth = lineWidth;
            ctx3.strokeStyle = '#8b57e6';
            ctx3.arc(24, 24, 15, startAngle, tmpAngle);
            ctx3.stroke();
            ctx3.closePath();
            frame();
        }, 10)
    }
    c3.onmouseout = function () {
        clearInterval(timer3);
    }
    var c4 = document.getElementById('myCanvas4');
    var ctx4 = c4.getContext('2d');
    c4.onmouseover = function () {
        var timer4 = setInterval(function () {
            //画圈
            ctx4.beginPath();
            ctx4.lineWidth = lineWidth;
            ctx4.strokeStyle = '#8b57e6';
            ctx4.arc(24, 24, 15, startAngle, tmpAngle);
            ctx4.stroke();
            ctx4.closePath();
            frame();
        }, 10)
    }
    c4.onmouseout = function () {
        clearInterval(timer4);
    }
    //--------------------------------------------------------------------------------------------------------fail（失败）
    var titleContent4 = document.getElementById('title-content4');
    var titleCSpan = document.querySelector('#title-content4 span');
    titleContent4.onmouseover = function () {
        titleContent4.style.backgroundColor = "#fd979f";
        titleCSpan.style.color = "white";
    }
    titleContent4.onmouseout = function () {
        titleContent4.style.backgroundColor = "white";
        titleCSpan.style.color = "black";
    }
}