function get(Count) {
        var dd = new Date();
        dd.setDate(dd.getDate()+Count);//获取X天后的日期
        var y = dd.getFullYear();
        var m = dd.getMonth()+1;//获取当前月份的日期
        var d = dd.getDate();
        return y+"-"+m+"-"+d;
    }