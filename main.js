$(function(){
    $('img').click(function(){
        var temp = $(this).attr('second');
        $(this).attr('second', $(this).attr('src'));
        $(this).attr('src', temp);
    })
})