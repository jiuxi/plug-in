> 移动端页面自适应

``` js
// 页面自适应
!function (e, t) {
    function n() {
        let n = l.getBoundingClientRect().width;
        t = t || 540, n > t && (n = t);
        let i = 100 * n / e;
        r.innerHTML = "html{font-size:" + i + "px;}"
    }

    let i, d = document, o = window, l = d.documentElement, r = document.createElement("style");
    if (l.firstElementChild) l.firstElementChild.appendChild(r); else {
        let a = d.createElement("div");
        a.appendChild(r), d.write(a.innerHTML), a = null
    }
    n(), o.addEventListener("resize", function () {
        clearTimeout(i), i = setTimeout(n, 300)
    }, !1), o.addEventListener("pageshow", function (e) {
        e.persisted && (clearTimeout(i), i = setTimeout(n, 300))
    }, !1), "complete" === d.readyState ? d.body.style.fontSize = "16px" : d.addEventListener("DOMContentLoaded", function (e) {
        d.body.style.fontSize = "16px"
    }, !1)
}(750, 750);
```

> 计算工作日

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>6.计算工作日</title>
</head>

<body>

</body>
<script>
    function getWeekday(first, last) {
        // 计算工作日方法：遍历这两个日期区间的每一个日期，获取他的getDay()

        // 分别获取first和last的毫秒数(时间戳)
        first = first.getTime();
        last = last.getTime();

        var count = 0;
        while (first <= last) {
            // first在遍历过程中，就是两个日期区间中的每一个日期
            // console.log(first);
            // 将first转换成日期对象
            var d = new Date(first);
            console.log(d);
            if (d.getDay() >= 1 && d.getDay() <= 5) {
                count++;
            }

            first += 24 * 3600 * 1000;
        }
        return count;
    }

    // 定义两个日期
    var d1 = new Date(2016, 10, 1);
    var d2 = new Date(2016, 11, 1);
    // 调用函数，传入这两个日期，得到工作日的天数
    var r = getWeekday(d1, d2);
    document.write("从2016-11-01至2016-12-01之间共有" + r + "个工作日");
</script>

</html>
```

> 数组常用方法

``` js
// 数组去重
Array.prototype.unique = function () {
    this.sort();
    var re = [this[0]];
    for (var i = 1; i < this.length; i++) {
        if (this[i] !== re[re.length - 1]) {
            re.push(this[i]);
        }
    }
    return re;
}

// 扩展数组方法：查找指定元素的下标
Array.prototype.indexOf = function (val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};

// 扩展数组方法:删除指定元素
Array.prototype.rmove = function (val) {
    var index = this.indexOf(val);
    while (index > -1) {
        this.splice(index, 1);
        index = this.indexOf(val);
    }
    return this;
};

// 取出两数组相同元素
function getArr(a, b) {
    var result = new Array();
    var c = a.toString();
    for (var i = 0; i < b.length; i++) {
        if (c.indexOf(b[i].toString()) != -1) {
            result.push(b[i]);
        }
    }
    return result;
};
```

> 移动端判断滑动方向

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>touch</title>
</head>
<style>
    #asd {
        width: 300px;
        height: 300px;
        margin: auto;
        background: red;
    }
</style>

<body>
    <div id="asd"></div>
</body>
<script>
    var asd = document.getElementById("asd"); //指定DOM
    var startx, starty;
    // 获得角度
    function getAngle(angx, angy) {
        return Math.atan2(angy, angx) * 180 / Math.PI
    };

    // 根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    function getDirection(startx, starty, endx, endy) {
        var angx = endx - startx;
        var angy = endy - starty;
        var result = 0;

        // 如果滑动距离太短
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
            return result;
        }

        var angle = getAngle(angx, angy);
        if (angle >= -135 && angle <= -45) {
            result = 1;
        } else if (angle > 45 && angle < 135) {
            result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        } else if (angle >= -45 && angle <= 45) {
            result = 4;
        }

        return result;
    }
    // 手指接触屏幕
    asd.addEventListener("touchstart", function (e) {
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    // 手指离开屏幕
    asd.addEventListener("touchend", function (e) {
        var endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        var direction = getDirection(startx, starty, endx, endy);
        switch (direction) {
            case 0:
                alert("未滑动！");
                break;
            case 1:
                alert("向上！")
                break;
            case 2:
                alert("向下！")
                break;
            case 3:
                alert("向左！")
                break;
            case 4:
                alert("向右！")
                break;
            default:
        }
    }, false);
</script>

</html>
```
> 获取当前日期前后某一天

``` js
function get(Count) {
    var dd = new Date();
    dd.setDate(dd.getDate() + Count); 
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;
    var d = dd.getDate();
    return y + "-" + m + "-" + d;
}
```