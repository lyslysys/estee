$(document).ready(function(){
    // 헤더-------------
    $('.nav li').mouseenter(function(){
        let idx = $(this).index()
        $('.sub-inner').hide()
        $('.sub-inner').eq(idx).slideDown(500)
    })
    
    $('.sub-menu').mouseleave(function(){
        // let idx = $(this).index()
        $('.sub-inner').hide()
        // $('.sub-inner').slideUp(200)
    })
 
})


// 메인 탭메뉴---------------

$(function(){
    $('.tab-nav li').click(function(e){
        e.preventDefault();
        $('.tab-nav li a').removeClass('active')
        $(this).find('a').addClass('active')

        $('.tabitem').hide()

        let idx = $(this).index()
        $('.tabitem').eq(idx).show()
    })

    $('.tab-nav li').eq(0).trigger('click')
})

// 추천상품-------------------



