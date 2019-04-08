window.onload = function () {
    //为两个按钮同时绑定一个函数；
    var search = document.getElementById("header_search");
    var cancel = document.getElementById("main_nav");
    var btn1 = document.getElementById('search_button');
    var btn2 = document.getElementById('search');
    //采用if语句实现内容的隐藏和出现；
    btn1.onclick = btn2.onclick = function () {
        if (search.style.display = "none" && cancel.style.display == "block") {
            search.style.display = "block";
            cancel.style.display = "none";
        }
        else {
            search.style.display = "none";
            cancel.style.display = "block";
        }
    }
    var btn3 = document.getElementById('btn3');
    var y = document.getElementById("button_menu1");
    btn3.onclick = function (ev) {
        var oEvent = ev || event;
        y.style.display = "block";
        oEvent.cancelBubble = true;
    }
    var btn4 = document.getElementById('btn4')
    var z = document.getElementById("button_menu2");
    btn4.onclick = function (ev) {
        var oEvent = ev || event;
        z.style.display = "block";
        oEvent.cancelBubble = true;
    }
    var btn5 = document.getElementById('btn5');
    var t = document.getElementById("button_menu3");
    btn5.onclick = function (ev) {
        var oEvent = ev || event;
        t.style.display = "block";
        oEvent.cancelBubble = true;
    }
    console.log(btn5.onclick);
    var btn6 = document.getElementById('btn6');
    var a = document.getElementById("nav2_menu1");
    var b = document.getElementById("nav2_menu2");
    btn6.onclick = function (ev) {
        var oEvent = ev || event;
        a.style.display = "block";
        b.style.display = "block";
        oEvent.cancelBubble = true;
    }
    document.onclick = function () {
        y.style.display = "none";
        z.style.display = "none";
        t.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
    }
    //当鼠标已过时出现下划线下划线
    var line = document.querySelectorAll('#header button')
    for (var i = 0; i < line.length; i++) {
        line[i].onmouseover = function () {
            this.style.borderBottom = "black solid 2px";
        }
        line[i].onmouseout = function () {
            this.style.textDecoration = "none";
            this.style.borderBottom = "none";
        }
    }
    //tab切换
    var c = document.getElementById("main1_content_part1");
    var d = document.getElementById("main1_content_part2");
    var e = document.getElementById("main1_content_button1");
    var f = document.getElementById("main1_content_button2");
    var g = document.getElementById("main2_part1");
    var h = document.getElementById("main2_part2");
    var m = document.getElementById("main3_part1");
    var n = document.getElementById("main3_part2");
    var s = document.getElementById("main4_part1");
    var u = document.getElementById("main4_part2");
    var btn7 = document.getElementById('main1_content_button1');
    var btn8 = document.getElementById('main1_content_button2');
    btn7.onclick = function () {
        c.style.display = "block";
        d.style.display = "none";
        g.style.display = "block";
        h.style.display = "none";
        m.style.display = "block";
        n.style.display = "none";
        s.style.display = "block";
        u.style.display = "none";
        e.style.backgroundColor = "white";
        f.style.backgroundColor = "#e0d6f1";
        e.style.textDecoration = "underline";
        f.style.textDecoration = "none";
    }
    btn8.onclick = function () {
        c.style.display = "none";
        d.style.display = "block";
        g.style.display = "none";
        h.style.display = "block";
        m.style.display = "none";
        n.style.display = "block";
        s.style.display = "none";
        u.style.display = "block";
        e.style.backgroundColor = "#e0d6f1";
        f.style.backgroundColor = "white";
        e.style.textDecoration = "none";
        f.style.textDecoration = "underline";
    }
    //定义鼠标移入效果
    var table1 = document.getElementById('download1_table');
    var table2 = document.getElementById('download2_table');
    var part1 = document.getElementById('main1_content_part1');
    var part2 = document.getElementById('main1_content_part2')
    part1.onmouseover = part2.onmouseover = function () {
        table1.style.display = "block";
        table2.style.display = "block";
    }
    //定义鼠标移出效果
    part1.onmouseout = part2.onmouseout = function () {
        table1.style.display = "none";
        table2.style.display = "none";
    }
    //获取类的名称
    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        rows[i].onmouseover = function () {
            //鼠标移上去,添加一个样式
            this.style.backgroundColor = "#1e73be";
        }
        rows[i].onmouseout = function () {
            //鼠标移开,改变该样式
            this.style.backgroundColor = "white";
        }
    }
    //tab 切换
    //给元素编号
    var btnList = document.querySelectorAll('.main3_tab_list button');
    var divList = document.querySelectorAll('.main3_tab_content div');
    for (var i = 0; i < btnList.length; i++) {
        btnList[i].index = i;
        //index是自定义属性，用来保存编号
        btnList[i].onclick = function () {
            for (var j = 0; j < divList.length; j++) {
                divList[j].style.display = "none";
                //先将内容全部隐藏
                btnList[j].style.textDecoration = "none";
                btnList[j].style.borderBottom = "none";
            }
            divList[this.index].style.display = "block";
            btnList[this.index].style.textDecoration = "underline";
            btnList[this.index].style.borderBottom = "#1e73be solid 3px";
            //当鼠标触发时显示相应的内容
        }
    }
    function language() {
        var le = document.getElementById("language");
        if (le.style.display == "none") {
            le.style.display = "block";
        }
        else {
            le.style.display = "none";
        }
    }
    var bk = document.querySelectorAll('#footer #language ul li');
    var li = document.querySelectorAll('ul li');
    for (var i = 0; i < li.length; i++) {
        li[i].onmouseover = function () {
            this.style.textDecoration = "underline";
        }
        li[i].onmouseout = function () {
            this.style.textDecoration = "none";
        }
    }
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var backtop = document.getElementById('backtop');
    window.onscroll = function () {
        if (scrollTop > 500) {
            backtop.style.display = "block";
        }
        else {
            backtop.style.display = "none";
        }
    }
    // 点击按钮，返回顶部
    backtop.onclick = function () {
        scrollTop = 0;
    }
    var oDate = new Date();
    console.log(oDate.getFullYear() + "-" + (oDate.getMonth() +1) + "-" + oDate.getDate());
}