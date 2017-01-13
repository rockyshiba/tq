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

            //hide all inputs in this questionaire
            $("input[type=radio]").hide();
            $("input[type=checkbox]").hide();

            //TEMP SCAFFOLDING
            $("label").css({
                "outline": "1px solid black"
            });

            $(".questions-container").css({
                "outline": "1px solid black",
                "display": "block"
            });

            $(".questions-container").children("label").css({
                "display": "block",
                "clear": "both"
            });
            //END TEMP SCAFFOLDING

            $(".questions p").css({
                "margin-top": "50px",
                "display": "inline-block",
                "font-size": "1.6em"
            });

            $(".questions").css({
                "position": "relative",
                "overflow": "auto"
            });

            //btnNext
            $(".btnNext").css({
                "width": "100px",
                "position": "absolute",
                "text-align": "center",
                "margin-left": "auto",
                "margin-right": "auto",
                "left": "0",
                "right": "0",
                "bottom": "60px"
            });
            //END btnNext

            //question 1
            $(".questions-container").css({
                "max-width": "80%",
                "margin": "0 auto",
                "position": "relative"
            });

            $(".questions-container").children(".label-help").css({
                "display": "inline-block",
                //"width": "170px",
                "width": "180px",
                "margin": "0 auto",
                "padding": "10px 10px 10px 10px",
                "font-size": "1.8em",
                "margin-bottom": "10px",
                "margin-right": "2.5px",
                "margin-left": "2.5px",
                "cursor": "pointer"
            });
            //END question 1

            //question 2
            $("#question2").children("label").css({
                "text-align": "center",
                "margin": "0 auto",
                "display": "block",
                "clear": "both",
                "font-size": "1.5em",
                "width": "350px",
                "padding-top": "5px",
                "padding-bottom": "5px",
                "margin-bottom": "5px",
                "cursor": "pointer"
            });
            //END question 2

            //question 4
            $("#question4").children("label").css({
                "text-align": "center",
                "margin": "0 auto",
                "display": "block",
                "clear": "both",
                "font-size": "1.5em",
                "width": "350px",
                "padding-top": "5px",
                "padding-bottom": "5px",
                "margin-bottom": "5px",
                "cursor": "pointer"
            });
            //End question 4

            //question 5
            $("#question5").children(".questions-container").children("label").css({
                "text-align": "center",
                "margin": "0 auto",
                "display": "block",
                "clear": "both",
                "font-size": "1.5em",
                "width": "350px",
                "padding-top": "5px",
                "padding-bottom": "5px",
                "margin-bottom": "5px",
                "cursor": "pointer"
            });
            //END question 5

            //question 6
            $("#question6").children(".questions-container").children("label").css({
                "text-align": "center",
                "margin": "0 auto",
                "display": "block",
                "clear": "both",
                "font-size": "1.5em",
                "width": "350px",
                "padding-top": "5px",
                "padding-bottom": "5px",
                "margin-bottom": "5px",
                "cursor": "pointer"
            });
            //END question 6

            //question 7
            $("#question7").children(".questions-container").css({
                "position": "relative",
            });

            $("#question7").children(".questions-container").children("label").css({
                "text-align": "center",
                "vertical-align": "middle",
                "line-height": "100px",
                "margin": "0 auto",
                "display":"inline-block",
                "height": "100px",
                "width": "100px",
                "margin-left": "10px",
                "margin-right": "10px",
                "border": "1px solid black",
                "border-radius": "50%",
                "cursor": "pointer"
            });
            //END question 7

            //question 8
            $("#question8").children(".questions-container").css({
                "position": "relative",
            });

            $("#question8").children(".questions-container").children("label").css({
                "text-align": "center",
                "margin": "0 auto",
                "display": "block",
                "clear": "both",
                "font-size": "1.5em",
                "width": "350px",
                "padding-top": "5px",
                "padding-bottom": "5px",
                "margin-bottom": "5px",
                "cursor": "pointer"
            });
            //END question 8

            $(".label-radio").css({
                "position": "relative"
            });

            $(".label-radio--button").css({
                "display": "inline-block",
                "width": "20px",
                "height": "1em",
                "outline": "1px solid black",
                "position": "relative",
                "background-color": "red"
            });

            $(".label-radio--button---selector").css({
                "display": "inline-block",
                "width": "50%",
                "height": "100%",
                "outline": "1px solid green",
                "background-color": "grey",
                "float": "left"
            });

            //question 2
            $("#select-committment").css({
                "border": "none",
                "border-bottom": "1px solid black"
            });
            //question 3
            // $("#questions-container").css({
            //     "position": "relative",
            //     "margin": "0 auto",
            //     "max-width": "980px",
            //     "outline": "1px solid black"
            // });

            $("#ul-questions").css({
                "position": "fixed",
                "top": "5%",
                "left": $("#questions-container").offset.left + "20px",
                "list-style-type": "none"
            });

            $(".li-questions").css({
                "margin-top": "10px"
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
                "outline": "1px solid black" //TEMP
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

            $(".btnNext[type=button]").click(function(){
                //var btnNextIndex = ($(this).index($(this)) + 1).toString(); //get the index of the next question
                var btnNextIndex = ($(this).index(".btnNext") + 1).toString();//need to find more accurate index
                console.log(btnNextIndex)
                var targetQuestion = ".questions:eq(" + btnNextIndex + ")";
                $("html, body").animate({
                    scrollTop: $(targetQuestion).offset().top
                }, 500);
            });

            $(".label-radio").click(function(){
                var radioId = $(this).attr("for");
                document.getElementById(radioId).checked = true;
                //console.log(document.getElementById(radioId));
                if(document.getElementById(radioId).checked){
                    console.log("associated id is checked");
                    //float all label-radio--button--selectors to the left
                    $(".label-radio--button---selector").css({
                        "float": "left",
                        "background-color": "grey"
                    });
                    $(this).find(".label-radio--button .label-radio--button---selector").css({
                        "float": "right",
                        "background-color": "green"
                    });
                }
                else{
                    console.log("associated id is not checked");
                }
            });
        });
    }
})();