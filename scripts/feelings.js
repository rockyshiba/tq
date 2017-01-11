(function () {
    window.onload = function () {
        var ulQuestions = document.getElementById("ul-questions");
        var questions = document.getElementsByClassName("questions");
        for (var qui = 1; qui <= 8; qui++) {
            //ulQuestions.innerHTML += "<li class='li-questions'><a href='#question" + qui.toString() + "'>" + qui.toString() + "</a></li>";
            ulQuestions.innerHTML += "<li class='li-questions'><div class='li-questions--circle'>" + qui.toString() + "</div></li>";
        }
        jQuery(function ($) {
            //height of window
            var winHeight = $(window).innerHeight();

            $("#questions-container").css({
                "position": "relative",
                "margin": "0 auto",
                "max-width": "980px",
                "outline": "1px solid black"
            });

            $("#ul-questions").css({
                "position": "fixed",
                "top": "5%",
                "left": $("#questions-container").offset.left + "20px",
                "list-style-type": "none"
            });

            $(".li-questions").css({
                "margin-top": "10px",
            });

            $(".li-questions--circle").css({
                "height": "1em",
                "width": "1em",
                "border-radius": "50%",
                "background-color": "grey",
                "cursor": "pointer"
            });

            $(".questions").css({
                "width": "80%",
                "height": winHeight,
                "margin": "0 auto",
                "text-align": "center",
                "outline": "1px solid black"
            });

            $("#prev-next-buttons").css({
                "text-align": "center"
            });

            //functionality
            $(".li-questions--circle").click(function () {
                //clicking on the circles scrolls to the question associated with the circle
                var questionIndex = (parseInt(this.innerHTML) - 1).toString();
                var targetQuestion = ".questions:eq(" + questionIndex + ")";
                $("html, body").animate({
                    scrollTop: $(targetQuestion).offset().top
                }, 500);
            });

            $(".checkbox-question").change(function(){
                var checkboxVals = document.getElementsByName("checkbox-question");
                console.log(checkboxVals.value);
            });

            $(".btnNext").click(function(){
                //var btnNextIndex = ($(this).index($(this)) + 1).toString(); //get the index of the next question
                var btnNextIndex = ($(this).index(".btnNext") + 1).toString();//need to find more accurate index
                console.log(btnNextIndex)
                var targetQuestion = ".questions:eq(" + btnNextIndex + ")";
                $("html, body").animate({
                    scrollTop: $(targetQuestion).offset().top
                }, 500);
            });
        });
    }
})();