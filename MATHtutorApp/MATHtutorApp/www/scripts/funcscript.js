
var globalVar = [];
var globalClear;

function HomeView() {
    //document.body.style.backgroundImage = "url('../images/bg.jpg')";
    //document.body.style.backgroundRepeat = "no-repeat";
    //document.body.style.backgroundSize = "cover";

    var html = "<div class=\"homeView\"  style=\"text-align:center\">" +
        "<button type=\"button\" class=\"btn btn-info\" style=\"float: right; padding-top: 0.5cm; padding-right: 1cm;\" onclick=\"RegisterView();\" >Register</button>" +
        "<br/><br/><br /><br /><br /><br /><br /><br />" +
        "<img src=\"images/title2.png\" align=\"middle\"/>" +
        "<br /><br /><br /><br /><br /><br /><br /><br /><br />" +
        "<form class=\"form-inline\" role=\"form\">" +
            "<div class=\"form-group\">" +
                "<label for=\"username\">Username</label>" +
                "<input type=\"text\" class=\"form-control\" id=\"username\">" +
            "</div>" +
            "<div class=\"form-group\">" +
                "<label for=\"pwd\">Password:</label>" +
                "<input type=\"password\" class=\"form-control\" id=\"pwd\">" +
            "</div>" +
            "<button style=\"width: 300px; margin: 0 auto;\" type=\"button\" class=\"btn btn-success btn-block btn-lg\" onclick=\"LogIn();\" >Log In</button>" +
        "</form>" +
        "<br /><br /><br /><br /><br /><br /><br /><br />" +
    "</div>"
    $('body').html(html);
}

function RegisterView() {
    //document.body.style.backgroundImage = "url('../images/bg.jpg')";
    //document.body.style.backgroundRepeat = "no-repeat";
    //document.body.style.backgroundSize = "cover";

    var html = "<div class=\"menuView\"  style=\"text-align:center\">" +
        "<button type=\"button\" class=\"btn btn-info\" style=\"float: right; padding-top: 0.5cm; padding-right: 1cm;\" onclick=\"HomeView();\">Log In</button>" +
        "<br/><br/><br /><br /><br /><br />" +
        "<img src=\"images/register.png\" />" +
        "<br /><br />" +
        "<form class=\"form-inline\" role=\"form\">" +
            "<div class=\"form-group\">" +
              "  <label for=\"first\">First Name:</label>" +
             "   <input type=\"text\" class=\"form-control\" id=\"first\">" +
            "</div>" +
           "<div class=\"form-group\">" +
             "   <label for=\"middle\">Middle Name:</label>" +
             "   <input type=\"text\" class=\"form-control\" id=\"middle\">" +
            "</div> " +
            "<div class=\"form-group\">" +
            "    <label for=\"last\">Last Name:</label>" +
            "    <input type=\"text\" class=\"form-control\" id=\"last\">" +
            "</div> " +
            "<div class=\"form-group\">" +
            "    <label for=\"username\">Username:</label>" +
            "    <input type=\"text\" class=\"form-control\" id=\"username\">" +
            "</div>" +
            "<div class=\"form-group\">" +
                "<label for=\"pwd\">Password:</label>" +
               " <input type=\"password\" class=\"form-control\" id=\"pwd\">" +
            "</div>" +
            "<button  style=\"width: 300px; margin: 0 auto;\"  type=\"button\"  class=\"btn btn-success btn-block btn-lg\" onclick=\"Register();\">Submit</button>" +
        "</form>" +
        "<br /><br />" +
    "</div>"
    $('body').html(html);
}

function MenuView() {
    var html =
        "<div class=\"container\" style=\"text-align:center\">" +
            "<br/><br/><br/><br/><br/><br/><br/><br/>" +
            "<img src=\"images/menu.png\" />" +
            "<br/><br/><br /><br />" +
            "<button type=\"button\" class=\"btn btn-lg btn-primary btn-block\" onclick=\"ProfileView();\">Profile</button>" +
            "<button type=\"button\" class=\"btn btn-lg btn-success btn-block\" onclick=\"EnrollmentView();\">Enroll</button>" +
              "<button type=\"button\" class=\"btn btn-lg btn-info btn-block\" onclick=\"ScheduleView();\">Schedule</button>" +
            "<button type=\"button\" class=\"btn btn-lg btn-warning btn-block\" onclick=\"ExamView();\">Exam</button>" +
            "<button type=\"button\" class=\"btn btn-lg btn-danger btn-block\" onclick=\"FeedbackView();\">Feedback</button>" +
            "<button type=\"button\" class=\"btn btn-lg btn-primary btn-block\" onclick=\"AboutUsView();\">About Us</button>" +
            "<button type=\"button\" class=\"btn btn-lg btn-success btn-block\" onclick=\"HomeView();\">Log Out</button>" +
            "<br/><br/><br />" +
        "</div>"
    $('body').html(html);
}

function EnrollmentView() {
    var html = "<script>" + "ShowCoursesAvilable();" + "</script>" +
      "<div class=\"container\" style=\"text-align:center\">" +
      "<button type=\"button\" class=\"btn btn-info\" style=\"float: right; padding-top: 0.5cm; padding-right: 1cm;\" onclick=\"MenuView();\">Back</button>" +
          "<br/><br/><br/><br/>" +
           "<img src=\"images/enroll.png\" />" +
           "<br/><br/>" +
    "<h4> <output id=\"lblInstruction1\" style=\"text-align:left; margin-left:5px; margin-right:5px; text-justify:auto;\"> You can only add choose one course per day. </output> </h4> " +
                  "<br/>" +
                  "<select id=\"classchoices\" onchange=\"ViewCourseDetails();\">" +
                      "<option value=\"Choose Course\" disabled selected>Select your option</option>" +
                  "</select>" +
       "<br/><br/><br/>" +
    "<div class=\"container\">" +
        "<div class=\"table-responsive\">" +
            "<table class=\"table\">" +
                "<thead>" +
                    "<tr>" +
                        "<th  >Monday</th>" +
                        "<th  >Tuesday</th>" +
                        "<th  >Wednesday</th>" +
                        "<th  >Thursday</th>" +
                        "<th  >Friday</th>" +
                    "</tr>" +
                "</thead>" +
                "<tbody>" +
                    "<tr>" +
                        "<td id=\"mon1\"  ></td>" +
                        "<td id=\"tue1\"  ></td>" +
                        "<td id=\"wed1\"  ></td>" +
                        "<td id=\"thu1\"  ></td>" +
                        "<td id=\"fri1\"  ></td>" +
                    "</tr>" +
                "</tbody>" +
            "</table>" +
        "</div>" +
       "<br/>" +
        "<output id=\"lblDay\" style=\"text-align:left; margin-left:5px;\">--</output>" +
       "<output id=\"lblDescription\" style=\"text-align:left; margin-left:5px; margin-right:5px; text-justify:auto;\">--</output>" +
       "<br/><br/>" +
                  "<button id=\"btnAddClass\" type=\"button\" class=\"btn btn-sm btn-success\" onclick=\"CheckTableForTime();\">Add class</button>" +
                  "<br/><br/>" +
                          "<button id=\"btnFinalize\" type=\"button\" class=\"btn btn-xs btn-default\" onclick=\"UpdateScheduleTable(); \">Finalize class</button>" +
                  "<br/><br/><br/><br/><br/><br/>" +
              "</div>"
    $('body').html(html);
}

function ProfileView() {
    var html = "<script>" + "ViewProfile();" + "</script>" +
            "<div class=\"profileView\" style=\"text-align:center\">" +
            "<button type=\"button\" class=\"btn btn-info\" style=\"float: right; padding-top: 0.5cm; padding-right: 1cm;\" onclick=\"MenuView();\">Back</button>" +
            "<br/><br/><br /><br />" +
            "<img src=\"images/profile.png\" />" +
            "<br /><br /><br/><br/><br/><br/<br/>" +
            "<form class=\"form-inline\" role=\"form\">" +
                "<div class=\"form-group\">" +
                "    <label for=\"first\">First Name:</label>" +
                "    <input type=\"text\" class=\"form-control\" id=\"first\">" +
                "</div>" +
                "<div class=\"form-group\">" +
                 "   <label for=\"middle\">Middle Name:</label>" +
                "    <input type=\"text\" class=\"form-control\" id=\"middle\">" +
                "</div> " +
                "<div class=\"form-group\">" +
                 "   <label for=\"last\">Last Name:</label>" +
                 "   <input type=\"text\" class=\"form-control\" id=\"last\">" +
                "</div> " +
                "<button  style=\"width: 300px; margin: 0 auto;\"  type=\"button\" class=\"btn btn-success btn-block btn-lg\" onclick=\"EditProfile();\">Update Profile</button>" +
                "<br/><br/><br/>" +
           " </form>" +

            "<br /><br /><br /><br /><br /><br />" +
        "</div>"

    $('body').html(html);

}

function FeedbackView() {
    var html = "<div class=\"feedbackView\" style=\"text-align:center\">" +
        "<button type=\"button\" class=\"btn btn-info\" style=\"float: right; padding-top: 0.5cm; padding-right: 1cm;\"onclick=\"MenuView();\">Back</button>" +
        "<br/><br/><br /><br /><br /><br /><br />" +
        "<img src=\"images/feedback.png\" />" +
        "<br /><br /><br/>" +
        "<form class=\"form-inline\" role=\"form\">" +
            "<div class=\"form-group\">" +
            "    <label for=\"feedback\">Type feedback/comment about us:</label>" +
            "    <textarea class=\"form-control\" rows=\"5\" id=\"feedback\"></textarea>" +
            "</div><br/>" +
            "<button  style=\"width: 300px; margin: 0 auto;\"  type=\"button\" class=\"btn btn-success btn-block btn-lg\" onclick=\"SendFeedback();\">Send</button>" +
            "<br/><br/><br/>" +
        "</form>" +
        "<br /><br /><br /><br /><br /><br />" +
    "</div>"
    $('body').html(html);
}

function AboutUsView() {
    var html = "<div class=\"feedbackView\" style=\"text-align:center\">" +
       "<button type=\"button\" class=\"btn btn-info\" style=\"float: right; padding-top: 0.5cm; padding-right: 1cm;\"onclick=\"MenuView();\">Back</button>" +
       "<br/><br/><br /><br /><br /><br /><br />" +
       "<img src=\"images/about.png\" />" +
       "<br /><br /><br/><br/><br/>" +
     "<h3> The application will serve as an alternative way of learning and teaching with the use of modern technology. With the use of" +
    "android smartphones, anybody not only students who desires to learn further about academic matters with this new application for android. </h3>" +
       "<br /><br /><br /><br /><br /><br />" +

   "</div>"
    $('body').html(html);
}

function ScheduleView() {
    var html = "<script>" + "ShowSchedule();" + "</script>" +
     "<div class=\"container\" style=\"text-align:center\">" +
     "<button type=\"button\" class=\"btn btn-info\" style=\"float: right; padding-top: 0.5cm; padding-right: 1cm;\" onclick=\"MenuView();\">Back</button>" +
         "<br/><br/><br/><br/><br/><br/><br/>" +
          "<img src=\"images/schedule.png\" />" +
          "<br/><br/><br/><br/><br/>" +
   "<div class=\"container\">" +
       "<div class=\"table-responsive\">" +
           "<table class=\"table\">" +
               "<thead>" +
                   "<tr>" +
                       "<th  >Monday</th>" +
                       "<th  >Tuesday</th>" +
                       "<th  >Wednesday</th>" +
                       "<th  >Thursday</th>" +
                       "<th  >Friday</th>" +
                   "</tr>" +
               "</thead>" +
               "<tbody>" +
                   "<tr>" +
                       "<td id=\"mon1\"  ></td>" +
                       "<td id=\"tue1\"  ></td>" +
                       "<td id=\"wed1\"  ></td>" +
                       "<td id=\"thu1\"  ></td>" +
                       "<td id=\"fri1\"  ></td>" +
                   "</tr>" +
               "</tbody>" +
           "</table>" +
       "</div>" +
       "<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>" +
             "</div>"
    $('body').html(html);
}

function ExamView() {
    var html =
         "<div class=\"container\" style=\"text-align:center\">" +
           "<button type=\"button\" class=\"btn btn-info\" style=\"float: right; padding-top: 0.5cm; padding-right: 1cm;\" onclick=\"MenuView();\">Back</button>" +
             "<br/><br/><br/><br/><br/><br/><br/>" +
             "<img src=\"images/exams.png\" />" +
             "<br/><br/><br /><br /><br /><br />" +
             "<button type=\"button\" class=\"btn btn-lg btn-primary btn-block\" onclick=\"ExamAlgebraView();\">Algebra</button>" +
             "<button type=\"button\" class=\"btn btn-lg btn-success btn-block\" onclick=\"ExamGeometryView();\">Geometry</button>" +
               "<button type=\"button\" class=\"btn btn-lg btn-info btn-block\" onclick=\"ExamStasticsView();\">Statistics</button>" +
             "<button type=\"button\" class=\"btn btn-lg btn-danger btn-block\" onclick=\"ExamTrigonometryView();\">Trigonometry</button>" +
             "<br/><br/><br /><br/><br/><br /><br/><br/><br /><br/>" +
         "</div>"
    $('body').html(html);
}

function ExamAlgebraView() {
    var html = "<script>" + "GetAlgebra();" + "</script>" +
         "<button type=\"button\" class=\"btn btn-info\" style=\"float: right; padding-top: 0.5cm; padding-right: 1cm;\" onclick=\"ExamView();\">Back</button>" +
        "<div >" + "<br/><br/><br/><br/>" +
 "<img src=\"images/algebra.png\" />" + "<br/><br/><br/>" +
    "<output id=\"lblInstructions\" >Answer the following questions. NOTE: Answers are case-sensitive.</output>" +
    "<br/><br/>" +
    "<output id=\"lblQuestion1\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">1</output>" +
    "<input id=\"txtAnswer1\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion2\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">2</output>" +
    "<input id=\"txtAnswer2\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion3\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">3</output>" +
    "<input id=\"txtAnswer3\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion4\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">4</output>" +
    "<input id=\"txtAnswer4\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion5\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">5</output>" +
    "<input id=\"txtAnswer5\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion6\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">6</output>" +
    "<input id=\"txtAnswer6\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion7\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">7</output>" +
    "<input id=\"txtAnswer7\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion8\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">8</output>" +
    "<input id=\"txtAnswer8\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion9\" style=\"margin-left:5px;   margin-right:5px; text-align:left;\">9</output>" +
    "<input id=\"txtAnswer9\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion10\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">10</output>" +
    "<input id=\"txtAnswer10\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br /><br/>" +
    "<input type=\"button\" class=\"btn btn-lg btn-success btn-block\" value=\"Submit\" onclick=\"CheckAnswers1();\" />" +
    "<br /><br/>" +
    "</div>"
    $('body').html(html);
}

function ExamGeometryView() {
    var html = "<script>" + "GetGeometry();" + "</script>" +
         "<button type=\"button\" class=\"btn btn-info\" style=\"float: right; padding-top: 0.5cm; padding-right: 1cm;\" onclick=\"ExamView();\">Back</button>" +
        "<div >" + "<br/><br/><br/><br/>" +
 "<img src=\"images/geo.png\" />" + "<br/><br/><br/>" +
    "<output id=\"lblInstructions\" >Answer the following questions. NOTE: Answers are case-sensitive.</output>" +
    "<br/><br/>" +
    "<output id=\"lblQuestion1\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">1</output>" +
    "<input id=\"txtAnswer1\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion2\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">2</output>" +
    "<input id=\"txtAnswer2\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion3\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">3</output>" +
    "<input id=\"txtAnswer3\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion4\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">4</output>" +
    "<input id=\"txtAnswer4\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion5\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">5</output>" +
    "<input id=\"txtAnswer5\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion6\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">6</output>" +
    "<input id=\"txtAnswer6\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion7\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">7</output>" +
    "<input id=\"txtAnswer7\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion8\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">8</output>" +
    "<input id=\"txtAnswer8\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion9\" style=\"margin-left:5px;   margin-right:5px; text-align:left;\">9</output>" +
    "<input id=\"txtAnswer9\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion10\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">10</output>" +
    "<input id=\"txtAnswer10\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br /><br/>" +
    "<input type=\"button\" class=\"btn btn-lg btn-success btn-block\" value=\"Submit\" onclick=\"CheckAnswers2();\" />" +
    "<br /><br/>" +
    "</div>"
    $('body').html(html);
}

function ExamStasticsView() {
    var html = "<script>" + "GetStatistics();" + "</script>" +
         "<button type=\"button\" class=\"btn btn-info\" style=\"float: right; padding-top: 0.5cm; padding-right: 1cm;\" onclick=\"ExamView();\">Back</button>" +
        "<div >" + "<br/><br/><br/><br/>" +
 "<img src=\"images/stat.png\" />" + "<br/><br/><br/>" +
    "<output id=\"lblInstructions\" >Answer the following questions. NOTE: Answers are case-sensitive.</output>" +
    "<br/><br/>" +
    "<output id=\"lblQuestion1\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">1</output>" +
    "<input id=\"txtAnswer1\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion2\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">2</output>" +
    "<input id=\"txtAnswer2\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion3\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">3</output>" +
    "<input id=\"txtAnswer3\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion4\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">4</output>" +
    "<input id=\"txtAnswer4\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion5\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">5</output>" +
    "<input id=\"txtAnswer5\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion6\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">6</output>" +
    "<input id=\"txtAnswer6\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion7\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">7</output>" +
    "<input id=\"txtAnswer7\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion8\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">8</output>" +
    "<input id=\"txtAnswer8\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion9\" style=\"margin-left:5px;   margin-right:5px; text-align:left;\">9</output>" +
    "<input id=\"txtAnswer9\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion10\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">10</output>" +
    "<input id=\"txtAnswer10\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br /><br/>" +
    "<input type=\"button\" class=\"btn btn-lg btn-success btn-block\" value=\"Submit\" onclick=\"CheckAnswers3();\" />" +
    "<br /><br/>" +
    "</div>"
    $('body').html(html);
}

function ExamTrigonometryView() {
    var html = "<script>" + "GetTrigonometry();" + "</script>" +
         "<button type=\"button\" class=\"btn btn-info\" style=\"float: right; padding-top: 0.5cm; padding-right: 1cm;\" onclick=\"ExamView();\">Back</button>" +
        "<div >" + "<br/><br/><br/><br/>" +
 "<img src=\"images/trig.png\" />" + "<br/><br/><br/>" +
    "<output id=\"lblInstructions\" >Answer the following questions. NOTE: Answers are case-sensitive.</output>" +
    "<br/><br/>" +
    "<output id=\"lblQuestion1\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">1</output>" +
    "<input id=\"txtAnswer1\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion2\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">2</output>" +
    "<input id=\"txtAnswer2\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion3\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">3</output>" +
    "<input id=\"txtAnswer3\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion4\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">4</output>" +
    "<input id=\"txtAnswer4\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion5\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">5</output>" +
    "<input id=\"txtAnswer5\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion6\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">6</output>" +
    "<input id=\"txtAnswer6\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion7\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">7</output>" +
    "<input id=\"txtAnswer7\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion8\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">8</output>" +
    "<input id=\"txtAnswer8\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion9\" style=\"margin-left:5px;   margin-right:5px; text-align:left;\">9</output>" +
    "<input id=\"txtAnswer9\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br />" +
    "<output id=\"lblQuestion10\" style=\"margin-left:5px;    margin-right:5px; text-align:left;\">10</output>" +
    "<input id=\"txtAnswer10\" name=\"credit\" required=\"required\" type=\"text\" placeholder=\"\" style=\"color:black\"/>" +
    "<br /><br/>" +
    "<input type=\"button\" class=\"btn btn-lg btn-success btn-block\" value=\"Submit\" onclick=\"CheckAnswers4();\" />" +
    "<br /><br/>" +
    "</div>"
    $('body').html(html);
}


function SessionStore() {
    var url1 = "http://localhost/MATHtutor/Service.svc/getStudentID" + "/" + $('#username').val();
    $.ajax({
        type: "GET",
        data: "",
        url: url1,
        contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
        dataType: "json",
        processdata: true,
        async: false,
        beforeSend: function (xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", "Basic " + btoa("melleth:marcelo"));
        },
        success: function (data) {
            var result = data.getStudentIDResult;
            // alert(result.toString());
            sessionStorage.setItem("ID", result.toString());
        },
        error: function (msg) {
            alert(msg.responseText + " errorawrr");
        }

    });
}

function LogIn() {
    if ($('#username').val() == '' || $('#pwd').val() == '') {
        alert("Username and Password must not be empty!");
    }
    else {
        var url1 = "http://localhost/MATHtutor/Service.svc/logIn" + "/" + $('#username').val() + "/" + $('#pwd').val();
        $.ajax({
            type: "GET",
            data: "",
            url: url1,
            contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
            dataType: "json", // the data type we want back.  The data will come back in JSON format
            processdata: true,
            async: false,
            beforeSend: function (xhr) {
                xhr.withCredentials = true;
                xhr.setRequestHeader("Authorization", "Basic " + btoa("melleth:marcelo"));
            },
            success: function (data) {
                var result = data.logInResult;
                alert(result.toString());
                if (result.toString() == "LOGIN SUCCESFUL!") {
                    SessionStore();
                    MenuView();
                }
                else {
                    // alert("Error Password or Username.")
                }
            },
            error: function (XMLHttpRequest, msg) {
                alert(msg.responseText + " error " + XMLHttpRequest.responseText);
            }
        });
    }
}

function Register() {
    if ($('#last').val() == '' || $('#first').val() == '' || $('#middle').val() == '' || $('#pwd').val() == '' || $('#username').val() == '') {
        alert("All fields must not be empty!");
    }
    else {

        var url1 = "http://localhost/MATHtutor/Service.svc/register" + "/" + $('#first').val() + "/" + $('#middle').val() +
            "/" + $('#last').val() + "/" + $('#username').val() + "/" + $('#pwd').val();
        $.ajax({
            type: "GET",
            data: "",
            url: url1,
            contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
            dataType: "json",
            processdata: true,
            async: false,
            beforeSend: function (xhr) {
                xhr.withCredentials = true;
                xhr.setRequestHeader("Authorization", "Basic " + btoa("melleth:marcelo"));
            },
            success: function (data) {
                var result = data.registerResult;
                //alert(result.toString());
                //alert("Registration sent!");
                if (result.toString() == "Registration Succesful!") {
                    $('#last').val(""); $('#first').val(""); $('#middle').val(""); $('#username').val(""); $('#pwd').val("");
                    alert("Registration sent!");
                }
                else if (result == "Username exists!!!") {
                    alert("Username exists.");
                    $('#username').val(""); $('#pwd').val("");
                }
                else { alert("Something Goes Wrong"); }
            },
            error: function (msg) {
                alert(msg.responseText);
            }

        });
    }
}

function EditProfile() {
    var sess = sessionStorage.getItem("ID");

    if ($('#last').val() == '' || $('#first').val() == '' || $('#middle').val() == '') {
        alert("All fields must not be empty!");
    }
    else {
        // alert(sess.toString());
        var url1 = "http://localhost/MATHtutor/Service.svc/editProfile" + "/" + sess.toString() + "/" + $('#last').val() + "/" + $('#first').val() + "/" + $('#middle').val();
        //alert(url1.toString());
        $.ajax({
            type: "GET",
            data: "",
            url: url1,
            contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
            dataType: "json",
            processdata: true,
            async: false,
            beforeSend: function (xhr) {
                xhr.withCredentials = true;
                xhr.setRequestHeader("Authorization", "Basic " + btoa("melleth:marcelo"));
            },
            success: function (data) {
                var result = data.editProfileResult;
                if (result.toString() == "Profile Edited Successfuly!") {
                    alert(result.toString());
                }
                else {
                    alert("Profile not updated.")
                }
            },
            error: function (msg) {
                alert(msg.responseText);
            }

        });
    }
}

function ViewProfile() {
    var sess = sessionStorage.getItem("ID");

    var url1 = "http://localhost/MATHtutor/Service.svc/viewProfile" + "/" + sess.toString();
    $.ajax({
        type: "GET",
        data: "",
        url: url1,
        contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
        dataType: "json", // the data type we want back.  The data will come back in JSON format
        processdata: true,
        async: false,
        beforeSend: function (xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", "Basic " + btoa("melleth:marcelo"));
        },
        success: function (data) {
            var result = data.viewProfileResult;

            first.value = result[1].toString();
            middle.value = result[2].toString();
            last.value = result[0].toString();

        },
        error: function (msg) {
            alert(msg.responseText);
        }
    });
}

function SendFeedback() {
    if ($('#feedback').val() == '') {
        alert("Feedback must not be empty!");
    }
    else {
        var sess = sessionStorage.getItem("ID");
        var feedback = $('#feedback').val().toString();
        var url1 = "http://localhost/MATHtutor/Service.svc/sendFeedback" + "/" + feedback + "/" + sess.toString();
        $.ajax({
            type: "GET",
            data: "",
            url: url1,
            contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
            dataType: "json", // the data type we want back.  The data will come back in JSON format
            processdata: true,
            async: false,
            beforeSend: function (xhr) {
                xhr.withCredentials = true;
                xhr.setRequestHeader("Authorization", "Basic " + btoa("melleth:marcelo"));
            },
            success: function (data) {
                var result = data.sendFeedbackResult;
                alert("Feedback Sent!");
                MenuView();
            },
            error: function (msg) {
                alert(msg.responseText);
            }

        });
    }
}

function CheckStudentSchedule() {
    var sess = sessionStorage.getItem("ID");
    var url1 = "http://localhost/MATHtutor/Service.svc/showStudentSchedule" + "/" + sess.toString();
    $.ajax({
        type: "GET",
        data: "",
        url: url1,
        contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
        dataType: "json", // the data type we want back.  The data will come back in JSON format
        processdata: true,
        async: false,
        beforeSend: function (xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", "Basic " + btoa("melleth:marcelo"));
        },
        success: function (data) {
            var result = data.showStudentScheduleResult;
            if (result[0].toString() != "~" && result[2].toString() != "~" && result[2].toString() != "~" && result[3].toString() != "~" && result[4].toString() != "~") {
                alert("You have already enrolled using this account! Please register for another account to enroll again!");
                MenuView();
            }
            else {

            }
        },
        error: function (msg) {
            alert(msg.responseText);
        }

    });
}

function ShowCoursesAvilable() {
    CheckStudentSchedule();
    var url1 = "http://localhost/MATHtutor/Service.svc/showCourses";
    $.ajax({
        type: "GET",
        data: "",
        url: url1,
        contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
        dataType: "json", // the data type we want back.  The data will come back in JSON format
        processdata: true,
        async: false,
        beforeSend: function (xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", "Basic " + btoa("melleth:marcelo"));
        },
        success: function (data) {
            var choices = [];
            var myString = data.showCoursesResult.toString();
            var mySplitResult = myString.split(",");

            for (i = 0; i < mySplitResult.length; i++) {
                choices[i] = mySplitResult[i];
            }
            var sel = document.getElementById('classchoices');
            document.getElementById('classchoices').options.length = 0;
            for (var i = 0; i < choices.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = choices[i];
                opt.value = choices[i];
                sel.appendChild(opt);
            } //sel[sel.selectedIndex].value
        },
        error: function (msg) {
            alert(msg.responseText);
        }

    });
}

function ViewCourseDetails() {
    var course = classchoices.value.toString().split(" ");

    var url1 = "http://localhost/MATHtutor/Service.svc/showCourseDetails" + "/" + course[0].toString();
    $.ajax({
        type: "GET",
        data: "",
        url: url1,
        contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
        dataType: "json", // the data type we want back.  The data will come back in JSON format
        processdata: true,
        async: false,
        beforeSend: function (xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", "Basic " + btoa("melleth:marcelo"));
        },
        success: function (data) {
            var myString = data.showCourseDetailsResult.toString();
            var mySplitResult = myString.split(",");

            lblDescription.value = mySplitResult[1].toString();
            lblDay.value = "DAY: " + mySplitResult[0].toString();

        },
        error: function (msg) {
            alert(msg.responseText);
        }
    });

}

function UpdateScheduleTable() {
    var sess = sessionStorage.getItem("ID");
    //alert(sess.toString());
    var url1 = "http://localhost/MATHtutor/Service.svc/bindSchedule" + "/" + sess.toString();
    $.ajax({
        type: "GET",
        data: "",
        url: url1,
        contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
        dataType: "json", // the data type we want back.  The data will come back in JSON format
        processdata: true,
        async: false,
        beforeSend: function (xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", "Basic " + btoa("melleth:marcelo"));
        },
        success: function (data) {
            var courses = [];
            var result = data.bindScheduleResult.toString();

            var mySplitResult = result.split(" ");
            for (i = 0; i < mySplitResult.length; i++) {
                courses[i] = mySplitResult[i];
            }

            //alert(courses.toString());
            for (i = 0; i < 7; i++) {
                if (courses[i].charAt(3).toString() == "1") {
                    $("#mon1").text(courses[i].toString());
                }
                else if (courses[i].charAt(3).toString() == "2") {
                    $("#tue1").text(courses[i].toString());
                }
                else if (courses[i].charAt(3).toString() == "3") {
                    $("#wed1").text(courses[i].toString());
                }
                else if (courses[i].charAt(3).toString() == "4") {
                    $("#thu1").text(courses[i].toString());
                }
                else if (courses[i].charAt(3).toString() == "5") {
                    $("#fri1").text(courses[i].toString());
                }
                else { };
            }
            alert("Please pay at our site when you attend your first day!");
            MenuView();
        },
        error: function (msg) {
            alert(msg.responseText);
        }
    });
}

function AddCourse() {
    //debugger;
    var sess = sessionStorage.getItem("ID");

    var e = document.getElementById('classchoices');//get choice
    var ins = e.options[e.selectedIndex].text;
    var mySplitResult = ins.split(" "); //get coursecode

    var url1 = "http://localhost/MATHtutor/Service.svc/addCourse" + "/" + mySplitResult[0].toString() + "/" + sess.toString();
    $.ajax({
        type: "GET",
        data: "",
        url: url1,
        contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
        dataType: "json", // the data type we want back.  The data will come back in JSON format
        processdata: true,
        async: false,
        beforeSend: function (xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", "Basic " + btoa("melleth:marcelo"));
        },
        success: function (data) {
            var result = data.addCourseResult;
            UpdateScheduleTable();
            alert(result.toString());
        },
        error: function (msg) {
            alert(msg.responseText + "aww");
        }
    });

}

function CheckTableForTime() {

    var e = document.getElementById('classchoices');//get choice
    var ins = e.options[e.selectedIndex].text;
    var mySplitResult = ins.split(" ");
    var course = mySplitResult[0].toString();

    for (i = 0; i < 7; i++) {
        if (course.charAt(3).toString() == "1" && $('#mon1').is(':empty')) {
            AddCourse();
        }
        else if (course.charAt(3).toString() == "2" && $('#tue1').is(':empty')) {
            AddCourse();
        }
        else if (course.charAt(3).toString() == "3" && $('#wed1').is(':empty')) {
            AddCourse();
        }
        else if (course.charAt(3).toString() == "4" && $('#thu1').is(':empty')) {
            AddCourse();
        }
        else if (course.charAt(3).toString() == "5" && $('#fri1').is(':empty')) {
            AddCourse();
        }
        else {
            alert("You can't have two courses in a day!");
            break;
        }
    }
}

function ShowSchedule() {
    var sess = sessionStorage.getItem("ID");
    //alert(sess.toString());
    var url1 = "http://localhost/MATHtutor/Service.svc/bindSchedule" + "/" + sess.toString();
    $.ajax({
        type: "GET",
        data: "",
        url: url1,
        contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
        dataType: "json", // the data type we want back.  The data will come back in JSON format
        processdata: true,
        async: false,
        beforeSend: function (xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", "Basic " + btoa("melleth:marcelo"));
        },
        success: function (data) {
            var courses = [];
            var result = data.bindScheduleResult.toString();

            var mySplitResult = result.split(" ");
            for (i = 0; i < mySplitResult.length; i++) {
                courses[i] = mySplitResult[i];
            }

            //alert(courses.toString());
            for (i = 0; i < 7; i++) {
                if (courses[i].charAt(3).toString() == "1") {
                    $("#mon1").text(courses[i].toString());
                }
                else if (courses[i].charAt(3).toString() == "2") {
                    $("#tue1").text(courses[i].toString());
                }
                else if (courses[i].charAt(3).toString() == "3") {
                    $("#wed1").text(courses[i].toString());
                }
                else if (courses[i].charAt(3).toString() == "4") {
                    $("#thu1").text(courses[i].toString());
                }
                else if (courses[i].charAt(3).toString() == "5") {
                    $("#fri1").text(courses[i].toString());
                }
                else { };
            }
        },
        error: function (msg) {
            alert(msg.responseText);
        }
    });
}

function GetAlgebra() {
   // alert("hi");
    $.ajax({
        type: "GET",
        data: "",
        url: "http://localhost/MATHtutor/Service.svc/ExamAlgebra",
        contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
        dataType: "json", // the data type we want back.  The data will come back in JSON format
        processdata: true,
        async: false,
        beforeSend: function (xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", "Basic " + btoa("melleth:marcelo"));
        },
        success: function (data) {
            var question = [];
            var answer = [];
            var myString = data.ExamAlgebraResult.toString();
            var mySplitResult = myString.split(",");
            //alert(myString);
            for (i = 0; i < mySplitResult.length; i++) {
                var SplitedString = mySplitResult[i].toString().split("|");
                question[i] = SplitedString[1];
                answer[i] = SplitedString[0];
            }
            lblQuestion1.value = question[0].toString();
            lblQuestion2.value = question[1].toString();
            lblQuestion3.value = question[2].toString();
            lblQuestion4.value = question[3].toString();
            lblQuestion5.value = question[4].toString();
            lblQuestion6.value = question[5].toString();
            lblQuestion7.value = question[6].toString();
            lblQuestion8.value = question[7].toString();
            lblQuestion9.value = question[8].toString();
            lblQuestion10.value = question[9].toString();
            globalVar = answer;
        },
        error: function (msg) {
            alert(msg.responseText);
        }

    });
}

function CheckAnswers1() {
    var checkAnsw = window.globalVar;
    var sess = sessionStorage.getItem("ID");
    var answered = [];
    answered[0] = txtAnswer1.value.toString();
    answered[1] = txtAnswer2.value.toString();
    answered[2] = txtAnswer3.value.toString();
    answered[3] = txtAnswer4.value.toString();
    answered[4] = txtAnswer5.value.toString();
    answered[5] = txtAnswer6.value.toString();
    answered[6] = txtAnswer7.value.toString();
    answered[7] = txtAnswer8.value.toString();
    answered[8] = txtAnswer9.value.toString();
    answered[9] = txtAnswer10.value.toString();

    var length = Math.min(checkAnsw.length, answered.length);
    var countMatched = 0, countNotMatched = 0;

    for (var index = 0; index < length; index++) {
        if (checkAnsw[index] == answered[index])
            countMatched++;
        else if (answered.indexOf(checkAnsw[index]) >= 0)
            countNotMatched++;
    }
    alert("You have " + countMatched + " correct answers!");

    var url1 = "http://localhost/MATHtutor/Service.svc/saveScore" + "/" + countMatched.toString() + "/" + sess.toString() + "/ALG1";
    $.ajax({
        type: "GET",
        data: "",
        url: url1,
        contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
        dataType: "json", // the data type we want back.  The data will come back in JSON format
        processdata: true,
        async: false,
        beforeSend: function (xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", "Basic " + btoa("melleth:marcelo"));
        },
        success: function (data) {
            var result = data.saveScoreResult;
          //  alert(result.toString());
        },
        error: function (msg) {
            alert(msg.responseText + "aww");
        }
    });

}

function GetGeometry() {
   // alert("hi");
    $.ajax({
        type: "GET",
        data: "",
        url: "http://localhost/MATHtutor/Service.svc/ExamGeometry",
        contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
        dataType: "json", // the data type we want back.  The data will come back in JSON format
        processdata: true,
        async: false,
        beforeSend: function (xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", "Basic " + btoa("melleth:marcelo"));
        },
        success: function (data) {
            var question = [];
            var answer = [];
            var myString = data.ExamGeometryResult.toString();
            var mySplitResult = myString.split(",");
         //   alert(myString);
            for (i = 0; i < mySplitResult.length; i++) {
                var SplitedString = mySplitResult[i].toString().split("|");
                question[i] = SplitedString[1];
                answer[i] = SplitedString[0];
            }
            lblQuestion1.value = question[0].toString();
            lblQuestion2.value = question[1].toString();
            lblQuestion3.value = question[2].toString();
            lblQuestion4.value = question[3].toString();
            lblQuestion5.value = question[4].toString();
            lblQuestion6.value = question[5].toString();
            lblQuestion7.value = question[6].toString();
            lblQuestion8.value = question[7].toString();
            lblQuestion9.value = question[8].toString();
            lblQuestion10.value = question[9].toString();
            globalVar = answer;
        },
        error: function (msg) {
            alert(msg.responseText);
        }

    });
}

function CheckAnswers2() {
    var checkAnsw = window.globalVar;
    var sess = sessionStorage.getItem("ID");
    var answered = [];
    answered[0] = txtAnswer1.value.toString();
    answered[1] = txtAnswer2.value.toString();
    answered[2] = txtAnswer3.value.toString();
    answered[3] = txtAnswer4.value.toString();
    answered[4] = txtAnswer5.value.toString();
    answered[5] = txtAnswer6.value.toString();
    answered[6] = txtAnswer7.value.toString();
    answered[7] = txtAnswer8.value.toString();
    answered[8] = txtAnswer9.value.toString();
    answered[9] = txtAnswer10.value.toString();

    var length = Math.min(checkAnsw.length, answered.length);
    var countMatched = 0, countNotMatched = 0;

    for (var index = 0; index < length; index++) {
        if (checkAnsw[index] == answered[index])
            countMatched++;
        else if (answered.indexOf(checkAnsw[index]) >= 0)
            countNotMatched++;
    }
    alert("You have " + countMatched + " correct answers!");

    var url1 = "http://localhost/MATHtutor/Service.svc/saveScore" + "/" + countMatched.toString() + "/" + sess.toString() + "/GEO1";
    $.ajax({
        type: "GET",
        data: "",
        url: url1,
        contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
        dataType: "json", // the data type we want back.  The data will come back in JSON format
        processdata: true,
        async: false,
        beforeSend: function (xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", "Basic " + btoa("melleth:marcelo"));
        },
        success: function (data) {
            var result = data.saveScoreResult;
            //alert(result.toString());
        },
        error: function (msg) {
            alert(msg.responseText + "aww");
        }
    });
    
}

function GetStatistics() {
//alert("hi");
    $.ajax({
        type: "GET",
        data: "",
        url: "http://localhost/MATHtutor/Service.svc/ExamStatistics",
        contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
        dataType: "json", // the data type we want back.  The data will come back in JSON format
        processdata: true,
        async: false,
        beforeSend: function (xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", "Basic " + btoa("melleth:marcelo"));
        },
        success: function (data) {
            var question = [];
            var answer = [];
            var myString = data.ExamStatisticsResult.toString();
            var mySplitResult = myString.split(",");
          //  alert(myString);
            for (i = 0; i < mySplitResult.length; i++) {
                var SplitedString = mySplitResult[i].toString().split("|");
                question[i] = SplitedString[1];
                answer[i] = SplitedString[0];
            }
            lblQuestion1.value = question[0].toString();
            lblQuestion2.value = question[1].toString();
            lblQuestion3.value = question[2].toString();
            lblQuestion4.value = question[3].toString();
            lblQuestion5.value = question[4].toString();
            lblQuestion6.value = question[5].toString();
            lblQuestion7.value = question[6].toString();
            lblQuestion8.value = question[7].toString();
            lblQuestion9.value = question[8].toString();
            lblQuestion10.value = question[9].toString();
            globalVar = answer;
        },
        error: function (msg) {
            alert(msg.responseText);
        }

    });
}

function CheckAnswers3() {
    var checkAnsw = window.globalVar;
    var sess = sessionStorage.getItem("ID");
    var answered = [];
    answered[0] = txtAnswer1.value.toString();
    answered[1] = txtAnswer2.value.toString();
    answered[2] = txtAnswer3.value.toString();
    answered[3] = txtAnswer4.value.toString();
    answered[4] = txtAnswer5.value.toString();
    answered[5] = txtAnswer6.value.toString();
    answered[6] = txtAnswer7.value.toString();
    answered[7] = txtAnswer8.value.toString();
    answered[8] = txtAnswer9.value.toString();
    answered[9] = txtAnswer10.value.toString();

    var length = Math.min(checkAnsw.length, answered.length);
    var countMatched = 0, countNotMatched = 0;

    for (var index = 0; index < length; index++) {
        if (checkAnsw[index] == answered[index])
            countMatched++;
        else if (answered.indexOf(checkAnsw[index]) >= 0)
            countNotMatched++;
    }
    alert("You have " + countMatched + " correct answers!");

    var url1 = "http://localhost/MATHtutor/Service.svc/saveScore" + "/" + countMatched.toString() + "/" + sess.toString() + "/STA1";
    $.ajax({
        type: "GET",
        data: "",
        url: url1,
        contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
        dataType: "json", // the data type we want back.  The data will come back in JSON format
        processdata: true,
        async: false,
        beforeSend: function (xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", "Basic " + btoa("melleth:marcelo"));
        },
        success: function (data) {
            var result = data.saveScoreResult;
          //  alert(result.toString());
        },
        error: function (msg) {
            alert(msg.responseText + "aww");
        }
    });

}

function GetTrigonometry() {
  //  alert("hi");
    $.ajax({
        type: "GET",
        data: "",
        url: "http://localhost/MATHtutor/Service.svc/ExamTrigonometry",
        contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
        dataType: "json", // the data type we want back.  The data will come back in JSON format
        processdata: true,
        async: false,
        beforeSend: function (xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", "Basic " + btoa("melleth:marcelo"));
        },
        success: function (data) {
            var question = [];
            var answer = [];
            var myString = data.ExamTrigonometryResult.toString();
            var mySplitResult = myString.split(",");
         //   alert(myString);
            for (i = 0; i < mySplitResult.length; i++) {
                var SplitedString = mySplitResult[i].toString().split("|");
                question[i] = SplitedString[1];
                answer[i] = SplitedString[0];
            }
            lblQuestion1.value = question[0].toString();
            lblQuestion2.value = question[1].toString();
            lblQuestion3.value = question[2].toString();
            lblQuestion4.value = question[3].toString();
            lblQuestion5.value = question[4].toString();
            lblQuestion6.value = question[5].toString();
            lblQuestion7.value = question[6].toString();
            lblQuestion8.value = question[7].toString();
            lblQuestion9.value = question[8].toString();
            lblQuestion10.value = question[9].toString();
            globalVar = answer;
        },
        error: function (msg) {
            alert(msg.responseText);
        }

    });
}

function CheckAnswers4() {
    var checkAnsw = window.globalVar;
    var sess = sessionStorage.getItem("ID");
    var answered = [];
    answered[0] = txtAnswer1.value.toString();
    answered[1] = txtAnswer2.value.toString();
    answered[2] = txtAnswer3.value.toString();
    answered[3] = txtAnswer4.value.toString();
    answered[4] = txtAnswer5.value.toString();
    answered[5] = txtAnswer6.value.toString();
    answered[6] = txtAnswer7.value.toString();
    answered[7] = txtAnswer8.value.toString();
    answered[8] = txtAnswer9.value.toString();
    answered[9] = txtAnswer10.value.toString();

    var length = Math.min(checkAnsw.length, answered.length);
    var countMatched = 0, countNotMatched = 0;

    for (var index = 0; index < length; index++) {
        if (checkAnsw[index] == answered[index])
            countMatched++;
        else if (answered.indexOf(checkAnsw[index]) >= 0)
            countNotMatched++;
    }
    alert("You have " + countMatched + " correct answers!");

    var url1 = "http://localhost/MATHtutor/Service.svc/saveScore" + "/" + countMatched.toString() + "/" + sess.toString() + "/TRG1";
    $.ajax({
        type: "GET",
        data: "",
        url: url1,
        contentType: "application/json; charset=utf-8", // we are sending in JSON format so we need to specify this
        dataType: "json", // the data type we want back.  The data will come back in JSON format
        processdata: true,
        async: false,
        beforeSend: function (xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", "Basic " + btoa("melleth:marcelo"));
        },
        success: function (data) {
            var result = data.saveScoreResult;
            //alert(result.toString());
        },
        error: function (msg) {
            alert(msg.responseText + "aww");
        }
    });

}
//$(document).ready(function () {
//    HomeView();
//});
