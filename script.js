//event pada saat link diklik
$('.page-scroll').on('click', function(e){
    
    //ambil isi href
    let tujuan = $(this).attr('href');
    //tangkap elemen yang bersangkutan
    let elemenTujuan = $(tujuan);
    //pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 55
    })

    e.preventDefault();

});


//When klick outside navbar
$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});


//parallax
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    //jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/10 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    //portofolio
    if(wScroll > $('.portofolio').offset().top - 300){
        $('.portofolio .img-thumbnail').each(function (i){
            setTimeout(function(){
                $('.portofolio .img-thumbnail').eq(i).addClass('muncul');
            }, 300 * i)
        })
        
    }
   
});

//about
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
})

