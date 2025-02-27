var slide = 1;

    function slider(){
        $(".sliderDiv").fadeOut();
        $("#slide" + slide).fadeIn();
        slide = slide + 1;

        if(slide == 5){
            slide = 1;
        }
        setTimeout(function(){ slider(); }, 3000);
    }
    slider();