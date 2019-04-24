window.onload = function () {

    $.ajax({
        // url:'https://www.apiopen.top/journalismApi',
        url:'https://api.jisuapi.com/news/get',
        type:'GET',
        data:{
            appkey:'5a29b236c1c2d732',
            channel:'头条',
            num: 20
        },
        dataType:"jsonp",
        success:function (res) {
            console.log(res)
        },
        error:function () {
            console.log('error')
        }

    })

}