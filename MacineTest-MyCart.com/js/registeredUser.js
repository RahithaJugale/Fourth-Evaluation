$(document).ready(function(){

    var flag = 0;
    //burger menu toggle
    $('#menuicon').click(function(){
        $('.nav-col').toggle();
        if(flag === 0){
            $('#carouselContainer').css("width", "75%");
            flag = 1;
        }else{
            $('#carouselContainer').css("width", "100%");
            flag = 0;
        }
    });

})