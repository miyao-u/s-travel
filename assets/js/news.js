$(function(){

    $(".modal").click(function(){

        $("body").append('<div class="modal_bg">');

        $("body").append('<div class="modal_photo">');

        $(".modal_bg").hide();
        $(".modal_photo").hide();

        $(".modal_photo").html("<img>");

        $(".modal_photo img").attr("src",$(this).attr("href"));

        $(".modal_photo img").attr("width",720);
        $(".modal_photo img").attr("height","auto");
        $(".modal_photo img").attr("alt","photo");

        $(".modal_bg").fadeIn();
        $(".modal_photo").fadeIn();

        $(".modal_bg").click(function(){

            $(this).fadeOut(function(){
                $(this).remove();
            });

            $(".modal_photo").fadeOut(function(){
                $(this).remove();
            });
        });
        return false;
    });

});

