    $( document ).ready(function() {
            /*$('.modal').modal();*/
            $('.modal-trigger').leanModal();
            /*Window height*/        
            function setHeight() {
                windowHeight = $(window).innerHeight();
            };
            setHeight();
            $(window).resize(function() {
                setHeight();
            });


            $(".modal-trigger").click(function(){
                $("#content").css("filter", "blur(8px)");
            });


            $(".modal-close").click(function(){
                $("#content").css("filter", "inherit");
            });


            $("nav>a").click(function(){
                $(".cover").css("display", "block");
                $("body").css("overflow-y", "hidden");
            });

            $(".cover i").click(function(){
                $(".cover").css("display", "none");
                $("body").css("overflow-y", "inherit");

            });
            $("body").css({"padding": "inherit", "overflow": "inherit"});

            $(window).on('load', function () {

                $(".loading").css("display", "none"); 
                $("body").css({"padding": "0px 4%", "overflow-x": "hidden"});


            }) ;
});