(function () {
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
            // $("label").css({
            //     "outline": "1px solid black",
            //     "transition": "background 0.75s"
            // });

            $("#feelings-container").css({
                "outline": "1px solid black",
                "display": "block",
                "max-width": "1000px",
                "margin": "0 auto",
                "transition": "all 0.5s"
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

            //labels
            $(".questions").children("label").css({
                "background-color": "#36C2E3",
                "color": "white",
                "transition": "background 0.75s"
            });

            $(".questions-container").children("label").css({
                "background-color": "#36C2E3",
                "color": "white",
                "transition": "background 0.75s"
            });
            //END labels

            //btnNext
            $(".btnNext").css({
                "width": "150px",
                "height": "50px",
                "position": "absolute",
                "text-align": "center",
                "margin-left": "auto",
                "margin-right": "auto",
                "left": "0",
                "right": "0",
                "bottom": "60px",
                "background-color": "#AFD580",
                "color": "#414041",
                "border": "none"
            });
            //END btnNext

            //question 1
            $(".questions-container").css({
                "max-width": "100%",
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
                "max-width": "80%",
                "margin": "0 auto",
                "position": "relative"
            });

            $("#question8").children(".questions-container").children("label").css({
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

            //hide textarea by default
            $("#question8").children("textarea").hide();
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

            //side nav
            $("#ul-questions").css({
                "position": "fixed",
                "top": "5%",
                "left": $("#feelings-container").offset.left + "20px",
                "list-style-type": "none"
            });

            $(".li-questions").css({
                "margin-top": "10px"
            });

            $(".li-questions--circle").css({
                "height": "1em",
                "width": "1em",
                "border": "2px solid orange",
                "border-radius": "50%",
                "background-color": "white",
                "cursor": "pointer"
            });
            //END side nav

            $(".questions").css({
                "width": "80%",
                "height": winHeight,
                "margin": "0 auto",
                "text-align": "center",
                "outline": "1px solid black" //TEMP
            });

            //functionality

            //clicking labels
            //END clicking labels
                //scrolling highlights the li-questions--circles
            window.addEventListener("scroll", function(){
                var questionaireDone = false;
                //set all nav buttons to the same size
                //set all nav buttons to be visually empty
                $(".li-questions--circle").css({
                    "height": "1em",
                    "width": "1em",
                    "background-color": "white"
                });

                //question 1
                if($(".checkbox-help:checked").val() !== undefined){
                    completedQuestionButton(".li-questions--circle:eq(0)");
                }

                //question 2
                if($("input[name=radio-felt]:checked").val() !== undefined){
                    completedQuestionButton(".li-questions--circle:eq(1)");
                }

                //question 3
                if($("#select-committment").val() !== "0"){
                    completedQuestionButton(".li-questions--circle:eq(2)");
                }

                //question 4
                if($("input[name=radio-long]:checked").val() !== undefined){
                    completedQuestionButton(".li-questions--circle:eq(3)");
                }

                //question 5
                if($("input[name=radio-choose]:checked").val() !== undefined){
                    completedQuestionButton(".li-questions--circle:eq(4)");
                }

                //question 6
                if($("input[name=radio-prefer]:checked").val() !== undefined){
                    completedQuestionButton(".li-questions--circle:eq(5)");
                }

                //question 7
                if($("input[name=radio-gender]:checked").val() !== undefined){
                    completedQuestionButton(".li-questions--circle:eq(6)");
                }

                //question 8
                if($("input[name=radio-referral]:checked").val() !== undefined){
                    completedQuestionButton(".li-questions--circle:eq(7)");
                }

                //sets quesionaireDone boolean
                if(
                    ($("input[name=radio-felt]:checked").val() !== undefined ) && //question 2
                    ($("#select-committment").val() !== "0") && //question 3
                    ($("input[name=radio-long]:checked").val() !== undefined) && //question 4
                    ($("input[name=radio-choose]:checked").val() !== undefined) && //question 5
                    ($("input[name=radio-prefer]:checked").val() !== undefined) && //question 6
                    ($("input[name=radio-gender]:checked").val() !== undefined) && //question 7
                    ($("input[name=radio-referral]:checked").val() !== undefined) //question 8
                ){
                    questionaireDone = true;
                }

                if(questionaireDone){
                    $("#btnDone").val("Done");
                }
                else{
                    $("#btnDone").val("Please answer as best as you can");
                }

                if($("body").scrollTop() >= $("#question8").offset().top){
                    $(".li-questions--circle:eq(7)").css({
                        "height": "1.2em",
                        "width": "1.2em"
                    });
                }
                else if($("body").scrollTop() >= $("#question7").offset().top){
                    $(".li-questions--circle:eq(6)").css({
                        "height": "1.2em",
                        "width": "1.2em"
                    });                    
                }
                else if($("body").scrollTop() >= $("#question6").offset().top){
                    $(".li-questions--circle:eq(5)").css({
                        "height": "1.2em",
                        "width": "1.2em"
                    });                    
                }
                else if($("body").scrollTop() >= $("#question5").offset().top){
                    $(".li-questions--circle:eq(4)").css({
                        "height": "1.2em",
                        "width": "1.2em"
                    });                    
                }
                else if($("body").scrollTop() >= $("#question4").offset().top){
                    $(".li-questions--circle:eq(3)").css({
                        "height": "1.2em",
                        "width": "1.2em"
                    });                    
                }
                else if($("body").scrollTop() >= $("#question3").offset().top){
                    $(".li-questions--circle:eq(2)").css({
                        "height": "1.2em",
                        "width": "1.2em"
                    });                    
                }
                else if($("body").scrollTop() >= $("#question2").offset().top){
                    $(".li-questions--circle:eq(1)").css({
                        "height": "1.2em",
                        "width": "1.2em"
                    });                    
                }
                else if($("body").scrollTop() >= $("#question1").offset().top){
                    $(".li-questions--circle:eq(0)").css({
                        "height": "1.2em",
                        "width": "1.2em"
                    });                    
                }
            });

            $(".li-questions--circle").click(function () {
                //clicking on the circles scrolls to the question associated with the circle
                //var questionIndex = (parseInt(this.innerHTML) - 1).toString();
                var questionIndex = $(this).index(".li-questions--circle");
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
                var btnNextIndex = ($(this).index(".btnNext") + 1).toString();//need to find more accurate index
                console.log(btnNextIndex);
                var targetQuestion = ".questions:eq(" + btnNextIndex + ")";
                $("html, body").animate({
                    scrollTop: $(targetQuestion).offset().top
                }, 500);
            });

            //Question 1
            $(".label-help").click(function(){
                console.log(this.style.backgroundColor);
                if(this.style.backgroundColor === "rgb(54, 194, 227)"){ //need to use rgb value instead of hex for evaluation of colors
                    this.style.backgroundColor = "#F05462";
                }
                else{
                    this.style.backgroundColor = "rgb(54, 194, 227)";
                }
            });
            //END question 1

            //Question 2
            $("#question2").children("label").click(function(){
                $("#question2").children("label").css("backgroundColor", "rgb(54, 194, 227)");
                this.style.backgroundColor = "#F05462";
            });
            //End Question 2
            
            //Question 4
            $("#question4").children("label").click(function(){
                $("#question4").children("label").css("background-color", "rgb(54, 194, 227)");
                this.style.backgroundColor = "#F05462";
            });
            //END question 4

            //Question 5
            $("#question5").children(".questions-container").children("label").click(function(){
                $("#question5").children(".questions-container").children("label").css("backgroundColor", "rgb(54, 194, 227)");
                this.style.backgroundColor = "#F05462";
            });
            //END question 5

            //Question 6
            $("#question6").children(".questions-container").children("label").click(function(){
                $("#question6").children(".questions-container").children("label").css("backgroundColor", "rgb(54, 194, 227)");
                this.style.backgroundColor = "#F05462";
            });
            //END question 6

            //Question 7
            $("#question7").children(".questions-container").children("label").click(function(){
                $("#question7").children(".questions-container").children("label").css("backgroundColor", "rgb(54, 194, 227)");
                this.style.backgroundColor = "#F05462";
            });
            //END Question 7

            //Question 8
            $("#question8").children(".questions-container").children("label").click(function(){
                $("#question8").children(".questions-container").children("label").css("backgroundColor", "rgb(54, 194, 227)");
                this.style.backgroundColor = "#F05462";
            });
            //END question 8

            //Question 8
                //Reveal the other option
            $("label[for=radio-referral-other]").click(function(){
                $("textarea[name=radio-referral]").slideDown();
            });
            //END question 8

            //Done button
            document.getElementById("btnDone").onclick = function(){
                console.log($("input[name=radio-felt]:checked").val());

                if($("input[name=radio-felt]:checked").val() === undefined){
                    scrollToElem("#question2");
                }
                else if($("#select-committment").val() === "0"){
                    scrollToElem("#question3");
                }
                else if($("input[name=radio-long]:checked").val() === undefined){
                    scrollToElem("#question4");
                }
                else if($("input[name=radio-choose]:checked").val() === undefined){
                    scrollToElem("#question5");
                }
                else if($("input[name=radio-prefer]:checked").val() === undefined){
                    scrollToElem("#question6");
                }
                else if($("input[name=radio-gender]:checked").val() === undefined){
                    scrollToElem("#question7");
                }
                else if($("input[name=radio-referral]:checked").val() === undefined){
                    scrollToElem("#question8");
                }
                return false;
            }
            //END done button

            //FUNCTIONS
            function getCheckboxVals(elem){
                allVals = [];
                $(elem + " :checked").each(function(){
                    allVals.push(($(this).val()));
                });
                console.log(allVals);
            }

            function scrollToElem(elem){
                $("html, body").animate({
                    scrollTop: $(elem).offset().top
                }, 500);
            }

            function completedQuestionButton(elem){
                $(elem).css("background-color", "orange");
            }
            //END question 8
            //function that animates a custom radio button
            // $(".label-radio").click(function(){
            //     var radioId = $(this).attr("for");
            //     document.getElementById(radioId).checked = true;
            //     //console.log(document.getElementById(radioId));
            //     if(document.getElementById(radioId).checked){
            //         console.log("associated id is checked");
            //         //float all label-radio--button--selectors to the left
            //         $(".label-radio--button---selector").css({
            //             "float": "left",
            //             "background-color": "grey"
            //         });
            //         $(this).find(".label-radio--button .label-radio--button---selector").css({
            //             "float": "right",
            //             "background-color": "green"
            //         });
            //     }
            //     else{
            //         console.log("associated id is not checked");
            //     }
            // });
        });

})();