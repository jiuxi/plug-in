function loading(){

    function Load(){}

    Load.prototype.loadImgs = function(urls,callback) {
        this.urls = urls;
        this.imgNumbers = urls.length;
        this.loadImgNumbers = 0;
        var that =this;
        for(var i=0;i<urls.length;i++){
            var obj = new Image();
            obj.src = urls[i];
            obj.onload = function(){
                that.loadImgNumbers++;
                callback(parseInt((that.loadImgNumbers/that.imgNumbers)*100));
            }
        }
    };

    var loader = new Load();

    loader.loadImgs([
        // ��������Ҫ���ص�ͼƬ��ַд�ڴ˴�
        "http://domain/site/dist/img/XX.png",
        "http://domain/site/dist/img/XX.png",
        "http://domain/site/dist/img/XX.png",
        "http://domain/site/dist/img/XX.png",
        "http://domain/site/dist/img/XX.png",
        "http://domain/site/dist/img/XX.png",
        "http://domain/site/dist/img/XX.png"
    ],function(percent){
        // ������ʾ�ٷֱȵ�Ԫ��Ϊ $(".percent")
        $(".percent").text(percent+'%');

        // ���ؽ�����������Ӧ�� loading ������ 
        if(percent==100) {
            $(".mask").css('display','none');
        }
    });
}

// ִ�� loading ����
loading();