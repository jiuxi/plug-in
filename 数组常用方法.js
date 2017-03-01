/**
 * Created by Administrator on 2016/9/1.
 */
//数组去重
Array.prototype.unique = function(){
    this.sort();
    var re=[this[0]];
    for(var i = 1; i < this.length; i++){
        if( this[i] !== re[re.length-1]){
            re.push(this[i]);
        }
    }
    return re;
}

//扩展数组方法：查找指定元素的下标
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};

//扩展数组方法:删除指定元素
Array.prototype.rmove = function(val) {
    var index = this.indexOf(val);
    while(index>-1){
        this.splice(index, 1);
        index = this.indexOf(val);
    }
    return this;
};

//取出两数组相同元素
function getArr(a, b) {
	var result = new Array();
	var c = a.toString();
	for (var i = 0; i < b.length; i++) {
		if(c.indexOf(b[i].toString()) != -1){
			result.push(b[i]);
		}
	}
	return result;
};