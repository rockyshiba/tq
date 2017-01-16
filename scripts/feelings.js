(function () {
        var ulQuestions = document.getElementById("ul-questions");
        var questions = document.getElementsByClassName("questions");
        for (var qui = 1; qui <= 8; qui++) {
            //ulQuestions.innerHTML += "<li class='li-questions'><a href='#question" + qui.toString() + "'>" + qui.toString() + "</a></li>";
            ulQuestions.innerHTML += "<li class='li-questions'><div class='li-questions--circle'></div></li>";
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
                //"outline": "1px solid black",
                "display": "block",
                "max-width": "1000px",
                "margin": "0 auto",
                "transition": "all 0.5s"
            });

            $(".questions-container").children("label").css({
                "display": "block",
                "clear": "both"
            });

            $("body").css({"font-family": "roboto"});
            //END TEMP SCAFFOLDING

            $(".questions p").css({
                "margin-top": "50px",
                "display": "inline-block",
                "font-size": "24px",
                "font-family": "Quicksand, sans-serif",
                "font-weight": "regular"
            });

            $(".questions").css({
                "position": "relative",
                "overflow": "auto"
            });

            //labels
            $(".questions").children("label").css({
                "background-color": "#36C2E3",
                "color": "white",
                "transition": "background 0.75s",
                "border-radius": "5px",
                "font-family": "roboto",
                "font-size": "19px",
                "font-weight": "medium"
            });

            $(".questions-container").children("label").css({
                "background-color": "#36C2E3",
                "color": "white",
                "transition": "background 0.75s",
                "border-radius": "5px",
                "font-family": "roboto",
                "font-size": "19px",
                "font-weight": "medium"
            });

            //END labels

            //btnNext
            $(".btnNext").css({
                "width": "225px",
                "height": "50px",
                "position": "absolute",
                "text-align": "center",
                "margin-left": "auto",
                "margin-right": "auto",
                "left": "0",
                "right": "0",
                "bottom": "60px",
                "background-color": "#989898", 
                "color": "#414041",
                "border": "none",
                "font-family": "roboto, sans-serif",
                "font-weight": "light",
                "font-size": "19px",
                "border-radius": "5px"
            });
            //END btnNext

            //question 1
            $(".questions-container").css({
                "top": "10%",
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
                "margin-bottom": "10px",
                "margin-right": "2.5px",
                "margin-left": "2.5px",
                "cursor": "pointer",
                "min-height": "50px",
                "overflow": "auto"
            });
            //END question 1

            //question 2
            $("#question2").children(".questions-container").children("label").css({
                "text-align": "center",
                "margin": "0 auto",
                "display": "block",
                "clear": "both",
                //"font-size": "1.5em",
                "width": "350px",
                "padding-top": "10px",
                "padding-bottom": "10px",
                "margin-bottom": "7px",
                "cursor": "pointer"
            });
            //END question 2

            //Question 3
            $("#select-committment").css({
                "font-family": "Quicksand, sans-serif",
                "font-size": "23px",
                "border-radius": "none",
                "border": "none",
                "border-bottom": "2px solid black",
                "background-color": "transparent"
            });
            //END question 3

            //question 4
            $("#question4").children(".questions-container").children("label").css({
                "text-align": "center",
                "margin": "0 auto",
                "display": "block",
                "clear": "both",
                //"font-size": "1.5em",
                "width": "350px",
                "padding-top": "10px",
                "padding-bottom": "10px",
                "margin-bottom": "7px",
                "cursor": "pointer"
            });
            //End question 4

            //question 5
            $("#question5").children(".questions-container").children("label").css({
                "text-align": "center",
                "margin": "0 auto",
                "display": "block",
                "clear": "both",
                //"font-size": "1.5em",
                "width": "350px",
                "padding-top": "10px",
                "padding-bottom": "10px",
                "margin-bottom": "7px",
                "cursor": "pointer"
            });
            //END question 5

            //question 6
            $("#question6").children(".questions-container").children("label").css({
                "text-align": "center",
                "margin": "0 auto",
                "display": "block",
                "clear": "both",
                //"font-size": "1.5em",
                "width": "375px",
                "padding-top": "10px",
                "padding-bottom": "10px",
                "margin-bottom": "7px",
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
                "margin": "0 auto",
                "display":"inline-block",
                "height": "135px",
                "width": "135px",
                "line-height": "135px", //this must match the height of the circle for the text to be vertically aligned
                "margin-left": "10px",
                "margin-right": "10px",
                //"border": "1px solid black",
                "border-radius": "50%",
                "cursor": "pointer",
                "position": "relative"
            });
            console.log($("#question7").children(".questions-container").children("label").height());
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
                //"font-size": "1.8em",
                "margin-bottom": "10px",
                "margin-right": "2.5px",
                "margin-left": "2.5px",
                "cursor": "pointer",
                "overflow": "auto",
                "min-height": "50px"
            });

            //hide textarea by default
            $("#question8").children(".questions-container").children("textarea").hide();
            //END question 8

            $(".label-radio").css({
                "position": "relative"
            });

            $(".label-radio--button").css({
                "display": "inline-block",
                "width": "20px",
                "height": "1em",
                //"outline": "1px solid black",
                "position": "relative",
                "background-color": "red"
            });

            $(".label-radio--button---selector").css({
                "display": "inline-block",
                "width": "50%",
                "height": "100%",
                //"outline": "1px solid green",
                "background-color": "#989898",
                "float": "left"
            });

            //side nav
            $("#ul-questions").css({
                "position": "fixed",
                "top": "25%",
                "left": $("#feelings-container").offset.left + "20px",
                "list-style-type": "none"
            });

            $(".li-questions").css({
                "margin-top": "10px"
            });

            $(".li-questions--circle").css({
                "height": "1em",
                "width": "1em",
                "border": "2px solid #F9B54A",
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
                //"outline": "1px solid black" //TEMP
            });

            //mobile
            if(window.innerWidth < 780){

            }

            if(window.innerWidth < 420){
                $("#ul-questions").css({
                    "left": "10px",
                    "top": "10%",
                    "padding": "0"
                });

                $(".questions").css({
                    "height": "auto"
                });

                $(".questions").children("label").css({
                    "max-height": "auto"
                });

                $(".questions-container").children("label").css({
                    "max-height": "auto"
                });

                $(".btnNext").css({
                    "margin-top": "10px",
                    "position": "relative",
                    "bottom": "5px",
                    "cursor": "pointer"
                });
                
                //Questions 1-8                
                $(".questions").children("label").css({
                    "clear": "both",
                    "width": "80%"                     
                });

                $(".questions-container").children("label").css({
                    "clear": "both",
                    "width": "80%"                    
                });

                //Question 7 gender
                $("#question7").children(".questions-container").children("label").css({
                    "height": "auto",
                    "width": "80%",
                    "line-height": "100%",
                    "border-radius": "0%",
                    "border": "none",
                    "padding-top": "10px",
                    "padding-bottom": "10px",
                    "margin-bottom": "7px",
                    "border-radius": "5px"
                });
            }

            //functionality

            //clicking labels
            //END clicking labels
                //scrolling highlights the li-questions--circles
            window.addEventListener("scroll", function(){

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

                isQuestionaireDone();

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
                    this.style.backgroundColor = "#F05462"; //pink
                    $(".btnNext:eq(0)").css("background-color", "#AFD580");
                }
                else{
                    this.style.backgroundColor = "rgb(54, 194, 227)";
                }
            });
            //END question 1

            //Question 2
            $("#question2").children(".questions-container").children("label").click(function(){
                $("#question2").children(".questions-container").children("label").css("backgroundColor", "rgb(54, 194, 227)");
                this.style.backgroundColor = "#F05462";
                $(".btnNext:eq(1)").css("background-color", "#AFD580");
            });
            //End Question 2

            //Question 3
            $("#select-committment").change(function(){
                if($("#select-committment").val() === "0"){
                    $(".btnNext:eq(2)").css("background-color", "#989898");
                }
                else{
                    $(".btnNext:eq(2)").css("background-color", "#AFD580");
                }
            });
            //END question 3
            
            //Question 4
            $("#question4").children(".questions-container").children("label").click(function(){
                $("#question4").children(".questions-container").children("label").css("background-color", "rgb(54, 194, 227)");
                this.style.backgroundColor = "#F05462";
                $(".btnNext:eq(3)").css("background-color", "#AFD580");
            });
            //END question 4

            //Question 5
            $("#question5").children(".questions-container").children("label").click(function(){
                $("#question5").children(".questions-container").children("label").css("backgroundColor", "rgb(54, 194, 227)");
                this.style.backgroundColor = "#F05462";
                $(".btnNext:eq(4)").css("background-color", "#AFD580");
            });
            //END question 5

            //Question 6
            $("#question6").children(".questions-container").children("label").click(function(){
                $("#question6").children(".questions-container").children("label").css("backgroundColor", "rgb(54, 194, 227)");
                this.style.backgroundColor = "#F05462";
                $(".btnNext:eq(5)").css("background-color", "#AFD580");
            });
            //END question 6

            //Question 7
            $("#question7").children(".questions-container").children("label").click(function(){
                $("#question7").children(".questions-container").children("label").css("backgroundColor", "rgb(54, 194, 227)");
                this.style.backgroundColor = "#F05462";
                $(".btnNext:eq(6)").css("background-color", "#AFD580");
            });
            //END Question 7

            //Question 8
            $("#question8").children(".questions-container").children("label").click(function(){
                $("#question8").children(".questions-container").children("label").css("backgroundColor", "rgb(54, 194, 227)");
                this.style.backgroundColor = "#F05462";
                isQuestionaireDone();
                if (
                    ($(".checkbox-help:checked").val() !== undefined) && //question 1
                    ($("input[name=radio-felt]:checked").val() !== undefined) && //question 2
                    ($("#select-committment").val() !== "0") && //question 3
                    ($("input[name=radio-long]:checked").val() !== undefined) && //question 4
                    ($("input[name=radio-choose]:checked").val() !== undefined) && //question 5
                    ($("input[name=radio-prefer]:checked").val() !== undefined) && //question 6
                    ($("input[name=radio-gender]:checked").val() !== undefined) //question 7
                ){
                    //special case because question 8 is still undefined the first time you click on a question 8 label
                    $("#btnDone").prop("disabled", "false");
                    $("#btnDone").css("background-color", "#AFD580");
                }
            });

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
                $(elem).css("background-color", "#F9B54A");
            }

            function isQuestionaireDone(){
                var questionaireDone = false;
                //sets quesionaireDone boolean
                if(
                    ($(".checkbox-help:checked").val() !== undefined) && //question 1
                    ($("input[name=radio-felt]:checked").val() !== undefined ) && //question 2
                    ($("#select-committment").val() !== "0") && //question 3
                    ($("input[name=radio-long]:checked").val() !== undefined) && //question 4
                    ($("input[name=radio-choose]:checked").val() !== undefined) && //question 5
                    ($("input[name=radio-prefer]:checked").val() !== undefined) && //question 6
                    ($("input[name=radio-gender]:checked").val() !== undefined) && //question 7
                    ($("input[name=radio-referral]:checked").val() !== undefined) //question 8
                )
                {
                    questionaireDone = true;
                }

                if(questionaireDone){
                    $("#btnDone").prop("disabled", "false");
                    $("#btnDone").css("background-color", "#AFD580");
                }
                else{
                    $("#btnDone").css("background-color", "#989898");
                    $("#btnDone").prop("disabled", "true");
                    //$("#btnDone").val("Please answer as best as you can");
                }
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