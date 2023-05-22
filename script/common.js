$(function(){
    $('.gnb').hover(function(){
        $('.gnb ul').stop().fadeIn()
    },function(){
        $('.gnb ul').stop().fadeOut()
    })

    setInterval(function(){
        $('.slide').animate({top:-300},function(){
            $('.slide div:first').appendTo('.slide')
            $('.slide').css('top', 0)
        })
    },3000)

    $('.tab_title h2').click(function(){
        $('.tab_title h2').removeClass('on')
        $(this).addClass('on')

        $('.tab_contents ul').css('display', 'none')
        $('.tab_contents ul').eq($(this).index()).css('display', 'block')
    })

    $('.notice li:first').click(function(){
        $('#modal').addClass('active')
    })
    $('.close').click(function(){
        $('#modal').removeClass('active')
    })
})