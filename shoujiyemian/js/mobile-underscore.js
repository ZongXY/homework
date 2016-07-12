!function(window, document, $, undefined) {
    var $ul = $('.creatArr');
    var $tplUl = $('.tplUl');
    var arr = [];
    var tpl = $('#creatLi').html();
    // console.log($ul)
    // var src = 'http://localhost/Wserver/User/fileUploading/server/uploadImgs/';
    // var src = 'http://localhost/Wserver/User/fileUploading/server/uploadImgs/?callback=?'
    var url="http://localhost/Wserver/api/gome_list.php?callback=?";

    $.get(url, function(response) {
        console.log(response.data)
        if(response.success) {
            
                var tmpArr = response.data;


                console.log(tpl)
                var compiled = _.template(tpl);

                // console.log(compiled)

                _.each(tmpArr, function(obj) {
                    // console.log(obj);
                    arr.push(compiled(obj));
                    // console.log(arr)
                });
                $ul.html(arr.join(''));
                console.log($ul)
                
        }
    },'json');

}(window, document, jQuery)

