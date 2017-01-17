<!DOCTYPE html>
<html>
    <head>
        <meta charse="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="./jquery/jquery.min.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
    </head>
    <body style="margin: 0 auto">
        <?php
            if(isset($_POST['feelings-submit'])){
                var_dump($_POST);
            }
        ?>
        <div id="feelings-container">
            <form method="POST" action="">
                <nav>
                    <ul id="ul-questions">
                    </ul>
                </nav>
                <section id="question1" class="questions">
                    <p>What can we help you with? (pick as many as you like)</p>
                    <div class="questions-container">
                        <label for="checkbox-help--1" class="label-help">Low mood</label>
                        <label for="checkbox-help--2" class="label-help">Anxiety/stress</label>
                        <label for="checkbox-help--3" class="label-help">Social anxiety</label>
                        <label for="checkbox-help--4" class="label-help">Relationship problems</label>
                        <label for="checkbox-help--5" class="label-help">Eating disorders</label>
                        <label for="checkbox-help--6" class="label-help">Sleeping problems</label>
                        <label for="checkbox-help--7" class="label-help">Work related problems</label>
                        <label for="checkbox-help--8" class="label-help">Concentration problems</label>
                        <label for="checkbox-help--9" class="label-help">Low self-esteem</label>
                    </div>
                    <input type="checkbox" name="checkbox-help[]" class="checkbox-help" id="checkbox-help--1" value="Low mood">
                    <input type="checkbox" name="checkbox-help[]" class="checkbox-help" id="checkbox-help--2" value="Anxiety/stress">
                    <input type="checkbox" name="checkbox-help[]" class="checkbox-help" id="checkbox-help--3" value="Social anxiety">
                    <input type="checkbox" name="checkbox-help[]" class="checkbox-help" id="checkbox-help--4" value="Relationship problems">
                    <input type="checkbox" name="checkbox-help[]" class="checkbox-help" id="checkbox-help--5" value="Eating disorders">
                    <input type="checkbox" name="checkbox-help[]" class="checkbox-help" id="checkbox-help--6" value="Sleeping problems">
                    <input type="checkbox" name="checkbox-help[]" class="checkbox-help" id="checkbox-help--7" value="Work related problems">
                    <input type="checkbox" name="checkbox-help[]" class="checkbox-help" id="checkbox-help--8" value="Concentration problems">
                    <input type="checkbox" name="checkbox-help[]" class="checkbox-help" id="checkbox-help--9" value="Low self-esteem">
                    <button type="button" class="btnNext">Next question</button>
                </section>
                <section id="question2" class="questions">
                    <p>Over the past 2 weeks how often have you felt agitated, anxious, nervous, or on edge?</p>
                    <div class="questions-container">
                        <label for="radio-felt-not-at-all">Not at all</label>
                        <label for="radio-felt-a-few-days">A few days</label>
                        <label for="radio-felt-half-the-days">Half the days</label>
                        <label for="radio-felt-every-single-day">Every single day</label>
                    </div>
                    <input type="radio" name="radio-felt" value="Not at all" id="radio-felt-not-at-all">
                    <input type="radio" name="radio-felt" value="A few days" id="radio-felt-a-few-days">
                    <input type="radio" name="radio-felt" value="Half the days" id="radio-felt-half-the-days">
                    <input type="radio" name="radio-felt" value="Every single day" id="radio-felt-every-single-day">
                    <button type="button" class="btnNext">Next question</button>
                </section>
                <section id="question3" class="questions">
                    <p>How committed are you to getting better?</p><br>
                    <p id="question3-committment">I am 
                        <select name="select-committment" id="select-committment">
                            <option value="0"></option>
                            <option value="very committed">very committed</option>
                            <option value="I am willing to try">willing to try</option>
                            <option value="Not sure if I am ready">not sure if I am ready</option>
                        </select>
                        to getting better.
                    </p>
                    <button type="button" class="btnNext">Next question</button>
                </section>
                <section id="question4" class="questions">
                    <p>What are your expectations of how long it will take to get better? (select one)</p>
                    <div class="questions-container">
                        <label for="radio-long--2">2 sessions</label>
                        <label for="radio-long--8">8 sessions</label>
                        <label for="radio-long--10">10+ sessions</label>
                        <label for="radio-long--no">No idea</label>                        
                    </div>
                    <input type="radio" name="radio-long" id="radio-long--2" value="2 sessions">
                    <input type="radio" name="radio-long" id="radio-long--8" value="8 sessions">
                    <input type="radio" name="radio-long" id="radio-long--10" value="10+ sessions">
                    <input type="radio" name="radio-long" id="radio-long--no" value="No idea">
                    <button type="button" class="btnNext">Next question</button>
                </section>
                <section id="question5" class="questions">
                    <p>What made you choose online video therapy? (select one)</p>
                    <div class="questions-container">
                        <label for="radio-choose--comfort">Comfort of home</label>
                        <label for="radio-choose--flexible">Flexible schedules</label>
                        <label for="radio-choose--security">Security/privacy</label>
                        <label for="radio-choose--cost">Lower cost</label>
                        <label for="radio-choose--insurance">Insurance covered</label>
                    </div>
                    <input type="radio" name="radio-choose" id="radio-choose--comfort" value="Comfort of home">
                    <input type="radio" name="radio-choose" id="radio-choose--flexible" value="Flexible schedules">
                    <input type="radio" name="radio-choose" id="radio-choose--security" value="Security/privacy">
                    <input type="radio" name="radio-choose" id="radio-choose--cost" value="Lower cost">
                    <input type="radio" name="radio-choose" id="radio-choose--insurance" value="Insurance covered">
                    <button type="button" class="btnNext">Next question</button>
                </section>
                <section id="question6" class="questions">
                    <p>What do you usually prefer when dealing with problems? (select one)</p>
                    <div class="questions-container">
                        <label for="radio-prefer--working">Working on my own</label>
                        <label for="radio-prefer--talking">Talking with someone</label>
                        <label for="radio-prefer--instruction">Being instructed and guided by someone</label>
                    </div>
                    <input type="radio" name="radio-prefer" id="radio-prefer--working" value="Working on my own">
                    <input type="radio" name="radio-prefer" id="radio-prefer--talking" value="Talking with someone">
                    <input type="radio" name="radio-prefer" id="radio-prefer--instruction" value="Being instructed and guided by someone">
                    <button type="button" class="btnNext">Next question</button>
                </section>
                <section id="question7" class="questions">
                    <p>What is your gender?</p>
                    <div class="questions-container">
                        <label for="radio-gender--male">Male</label>
                        <label for="radio-gender--female">Female</label>
                        <label for="radio-gender--other">Other</label>
                        <label for="radio-gender--undeclared">Rather not say</label>
                    </div>
                    <input type="radio" name="radio-gender" id="radio-gender--male" value="male">
                    <input type="radio" name="radio-gender" id="radio-gender--female" value="female">
                    <input type="radio" name="radio-gender" id="radio-gender--other" value="other">
                    <input type="radio" name="radio-gender" id="radio-gender--undeclared" value="undeclared">
                    <button type="button" class="btnNext">Next question</button>
                </section>
                <section id="question8" class="questions">
                    <p>How did you hear about us? (select one)</p>
                    <div class="questions-container">
                        <label class="label-referral" for="radio-referral-social-media">Social Media<br></label>
                        <label class="label-referral" for="radio-referral-ttc">TTC</label>
                        <label class="label-referral" for="radio-referral-physician">Physician referral<br></label>
                        <label class="label-referral" for="radio-referral-friends-family">Friend/Family Member<br></label>
                        <label class="label-referral" for="radio-referral-news">News outlet<br></label>
                        <label class="label-referral" for="radio-referral-uni-college">University or<br>College</label>
                        <label class="label-referral" for="radio-referral-other">Other</label>
                        <textarea class="label-referral" name="radio-referral" rows="5" cols="40" placeholder="How did you hear about us?"></textarea>
                    </div>
                    <input type="radio" name="radio-referral" id="radio-referral-social-media" value="social media">
                    <input type="radio" name="radio-referral" id="radio-referral-ttc" value="ttc">
                    <input type="radio" name="radio-referral" id="radio-referral-physician" value="physician">
                    <input type="radio" name="radio-referral" id="radio-referral-friends-family" value="Friends and family">
                    <input type="radio" name="radio-referral" id="radio-referral-news" value="news">
                    <input type="radio" name="radio-referral" id="radio-referral-uni-college" value="university/college">
                    <input type="radio" name="radio-referral" id="radio-referral-other" value="other">
                    <input type="submit" name="feelings-submit" value="Done" id="btnDone">
                </section>
            </form>
        </div>
        <script src="./scripts/feelings.js"></script>
    </body>
</html>