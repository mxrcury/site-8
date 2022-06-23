$('.header_share').hover(
    function(){
        $('.header_share-sm').addClass('header_share_sm-active');
    }, function(){
        $('.header_share-sm').removeClass('header_share_sm-active')
    }
);
$('.prev_arrow-container').hover(
    function(){
        $('.prev_arrow').addClass('prev_arrow_active')
    }, function(){
        $('.prev_arrow').removeClass('prev_arrow_active')
    }
);
$('.next_arrow-container').hover(
    function(){
        $('.next_arrow').addClass('next_arrow_active')
    }, function(){
        $('.next_arrow').removeClass('next_arrow_active')
    }
);