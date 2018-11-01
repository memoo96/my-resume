$(document).ready(function(){

  /* icon of navbar Links slidToggle When Click On It */
    $('i.icon').click(function(){
    $('.nav-list').slideDown();
    $(this).hide();
    $('i.icon2').show();
    });

    $('i.icon2').click(function(){
        $('.nav-list').slideUp();
        $(this).hide();
        $('i.icon').show();
    });


    /* When Scroll Change Header Background */
    $(window).scroll(function(){
    var sc = $(this).scrollTop();
    if(sc > 1500){
        $('.animated_progress span').each(function(){

            $(this).animate({
                width: $(this).attr('data-progress') + '%'
            },2000);
        });
    }

    

    });


    /* CountTo Plugin */  
    $(window).scroll(function(){
    var count =  $(this).scrollTop();
    if( count > 4680 ){
        $('.timer').countTo();
        //$(window).off('scroll');
     } 
    });  


    // Scroll top
    var scrollButton = $(".scroll_top");
    $(window).scroll(function(){
        $(this).scrollTop() > 500 ? scrollButton.show() : scrollButton.hide();
    });

    scrollButton.click(function(){
        $("html,body").animate({scrollTop : 0},2000);
    });
  
    /* Scroll Style  */
    $("body").niceScroll({
        cursorcolor:"#44c7f4",
        cursorwidth:"10px",
        cursorborder:"none"
        });



   



















});   
