$(function(){
    $('#nav li').hover(
        function(){
            $(this).animate({padding: '0px 24px 0px 12px'}, function(){
                $(this).css('background-color','rgba(116,156,158,1)');
            });
        },
        function(){
            $(this).animate({padding: '0px 12px'}, function(){
                $(this).css('background-color','rgba(116,156,158,0.6)');
            });
        }
    );
});
