// // Input 1 Grade
// function passFromValue() {
//     var eid = document.getElementById("enrolGrade");
//     var put = document.getElementById("mydataBase2");
//     var show = eid.options[eid.selectedIndex].value;
//     put.innerText = show;
//     return show;
// }
// // Input 2 Month
// function passFromValue2() {
//     var eid2 = document.getElementById("myMonth");
//     var put2 = document.getElementById("mydataBase3");
//     var show2 = eid2.options[eid2.selectedIndex].value;
//     put2.innerText = show;
//     return show2;
// }
// //Input 3 Year
// function passFromValue3() {
//     var eid2 = document.getElementById("academicYear");
//     var put2 = document.getElementById("mydataBase4");
//     var show3 = eid2.options[eid2.selectedIndex].value;
//     put2.innerText = show;
//     return show3;
// }
// // Get Value 1 Grade
// function passToValue() {
//     var y = passFromValue();
//     var db = document.getElementById("dataBase2").innerText;
//     var last = db = y;
//     return last;
// }
// //Get Value 2 Month
// function passToValue2() {
//     var y = passFromValue2();
//     var db2 = document.getElementById("dataBase3").innerText;
//     var last2 = db2 = y;
//     return last2;
// }
// //Get Value 3 Year
// function passToValue3() {
//     var y = passFromValue3();
//     var db2 = document.getElementById("dataBase4").innerText;
//     var last3 = db2 = y;
//     return last3;
// }
// passToValue(); //Grade
// passToValue2(); //Month
// passToValue3(); //Year

// //Show value to HTML page
// var myDb = document.getElementById("enrolGrade");
// var myDb2 = document.getElementById("myMonth");
// var myDb3 = document.getElementById("academicYear");
// var eid = document.getElementById("enrolGrade");
// var eid2 = document.getElementById("myMonth");
// var eid3 = document.getElementById("academicYear");
// var put = document.getElementById("mydataBase2");
// var put2 = document.getElementById("mydataBase3");
// var put3 = document.getElementById("mydataBase4");
// var show = eid.options[eid.selectedIndex].value;
// var show2 = eid2.options[eid2.selectedIndex].value;
// var show3 = eid3.options[eid3.selectedIndex].value;
// put.innerText = show;
// put2.innerText = show2;
// put3.innerText = show3;
// // Get data form HTML page and store to localStorage
// myDb.onchange = function () {
//     localStorage.setItem("myData10", show);
//     var eid = document.getElementById("enrolGrade");
//     var put = document.getElementById("mydataBase2");
//     var show = eid.options[eid.selectedIndex].value;
//     put.innerText = show;

// }
// myDb2.onchange = function () {
//     localStorage.setItem("myData11", show);
//     var eid = document.getElementById("myMonth");
//     var put = document.getElementById("mydataBase3");
//     var show = eid.options[eid.selectedIndex].value;
//     put.innerText = show;

// }
// myDb3.onchange = function () {
//     localStorage.setItem("myData12", show);
//     var eid = document.getElementById("academicYear");
//     var put = document.getElementById("mydataBase4");
//     var show = eid.options[eid.selectedIndex].value;
//     put.innerText = show;

// }
// //Process the data selected
// function setData() {
//     var storedb = passToValue();
//     var storedb2 = passToValue2();
//     var storedb3 = passToValue3();
//     localStorage.setItem("myData10", storedb); //Grade
//     localStorage.setItem("myData11", storedb2); //Month
//     localStorage.setItem("myData12", storedb3); //Year
//     window.location.reload();

// }
// // Database Stores
// // var text1 = document.getElementById("showEnroll");
// var text4 = document.getElementById("inMonth");
// // var text3 = document.getElementById("myNewGrade");
// var text5 = document.getElementById("inGrade");
// var storedb = passToValue();
// var storedb2 = passToValue2();
// var storedb3 = passToValue3();
var db = localStorage.getItem("preGrade"); //Grade
var db2 = localStorage.getItem("preMonth"); //Month
var db3 = localStorage.getItem("preYear");  //Year

function showGrade() {
    var text4 = document.getElementById("inGrade");
    var text5 = document.getElementById("gradeName2");
    var text6 = document.getElementById("gradeName4");
    var text7 = document.getElementById("gradeName8");
    var getdb = localStorage.getItem("preGrade");
    var gg1 = "K2";
    var gg2 = "K3";
    var gg3 = "1A";
    var gg4 = "1B";
    var gg5 = "2A";
    var gg6 = "2B";
    var gg7 = "3A";
    var gg8 = "3B";
    var gg9 = "4A";
    var gg10 = "4B";
    var gg11 = "5A";
    var gg12 = "5B";
    var gg13 = "6A";
    var gg14 = "6B";
    var gg15 = "7A";
    var gg16 = "7B";
    var gg17 = "8A";
    var gg18 = "8B";
    var gg19 = "9A";
    var gg20 = "9B";
    var gg21 = "10A";
    var gg22 = "10B";
    var gg23 = "11A";
    var gg24 = "11B";
    var gg25 = "12A";
    var gg26 = "12B";

    if (getdb == gg1) {
        text4.innerText = "K2";
        text5.innerText = "K2";
        text6.innerText = "K2";
        text7.innerText = "K2";
    } else if (getdb == gg2) {
        text4.innerText = "K3";
        text5.innerText = "K3";
        text6.innerText = "K3";
        text7.innerText = "K3";
    } else if (getdb == gg3) {
        text4.innerText = "1A";
        text5.innerText = "1A";
        text6.innerText = "1A";
        text7.innerText = "1A";
    } else if (getdb == gg4) {
        text4.innerText = "1B";
        text5.innerText = "1B";
        text6.innerText = "1B";
        text7.innerText = "1B";
    } else if (getdb == gg5) {
        text4.innerText = "2A";
        text5.innerText = "2A";
        text6.innerText = "2A";
        text7.innerText = "2A";
    } else if (getdb == gg6) {
        text4.innerText = "2B";
        text5.innerText = "2B";
        text6.innerText = "2B";
        text7.innerText = "2B";
    } else if (getdb == gg7) {
        text4.innerText = "3A";
        text5.innerText = "3A";
        text6.innerText = "3A";
        text7.innerText = "3A";
    } else if (getdb == gg8) {
        text4.innerText = "3B";
        text5.innerText = "3B";
        text6.innerText = "3B";
        text7.innerText = "3B";
    } else if (getdb == gg9) {
        text4.innerText = "4A";
        text5.innerText = "4A";
        text6.innerText = "4A";
        text7.innerText = "4A";
    } else if (getdb == gg10) {
        text4.innerText = "4B";
        text5.innerText = "4B";
        text6.innerText = "4B";
        text7.innerText = "4B";
    } else if (getdb == gg11) {
        text4.innerText = "5A";
        text5.innerText = "5A";
        text6.innerText = "5A";
        text7.innerText = "5A";
    } else if (getdb == gg12) {
        text4.innerText = "5B";
        text5.innerText = "5B";
        text6.innerText = "5B";
        text7.innerText = "5B";
    } else if (getdb == gg13) {
        text4.innerText = "6A";
        text5.innerText = "6A";
        text6.innerText = "6A";
        text7.innerText = "6A";
    } else if (getdb == gg14) {
        text4.innerText = "6B";
        text5.innerText = "6B";
        text6.innerText = "6B";
        text7.innerText = "6B";
    } else if (getdb == gg15) {
        text4.innerText = "7A";
        text5.innerText = "7A";
        text6.innerText = "7A";
        text7.innerText = "7A";
    } else if (getdb == gg16) {
        text4.innerText = "7B";
        text5.innerText = "7B";
        text6.innerText = "7B";
        text7.innerText = "7B";
    } else if (getdb == gg17) {
        text4.innerText = "8A";
        text5.innerText = "8A";
        text6.innerText = "8A";
        text7.innerText = "8A";
    } else if (getdb == gg18) {
        text4.innerText = "8B";
        text5.innerText = "8B";
        text6.innerText = "8B";
        text7.innerText = "8B";
    } else if (getdb == gg19) {
        text4.innerText = "9A";
        text5.innerText = "9A";
        text6.innerText = "9A";
        text7.innerText = "9A";
    } else if (getdb == gg20) {
        text4.innerText = "9B";
        text5.innerText = "9B";
        text6.innerText = "9B";
        text7.innerText = "9B";
    } else if (getdb == gg21) {
        text4.innerText = "10A";
        text5.innerText = "10A";
        text6.innerText = "10A";
        text7.innerText = "10A";
    } else if (getdb == gg22) {
        text4.innerText = "10B";
        text5.innerText = "10B";
        text6.innerText = "10B";
        text7.innerText = "10B";
    } else if (getdb == gg23) {
        text4.innerText = "11A";
        text5.innerText = "11A";
        text6.innerText = "11A";
        text7.innerText = "11A";
    } else if (getdb == gg24) {
        text4.innerText = "11B";
        text5.innerText = "11B";
        text6.innerText = "11B";
        text7.innerText = "11B";
    } else if (getdb == gg25) {
        text4.innerText = "12A";
        text5.innerText = "12A";
        text6.innerText = "12A";
        text7.innerText = "12A";
    } else if (getdb == gg26) {
        text4.innerText = "12B";
        text5.innerText = "12B";
        text6.innerText = "12B";
        text7.innerText = "12B";
    }
}
showGrade();
//Acadamic Year to input data
function showMonth() {
    var text4 = document.getElementById("inMonth");
    var text5 = document.getElementById("month1");
    var text6 = document.getElementById("month2");
    var text7 = document.getElementById("month3");
    var headNode = document.getElementsByTagName('body')[0];
    var script = document.createElement("script");
    headNode.append(script)
    var nov = "./g5aprint/01pNov.js";
    var dec = "./g5aprint/02dec.js";
    var jan = "./g5aprint/03jan.js";
    var feb = "./g5aprint/04feb.js";
    var firstSeme = "./g5aprint/05SemeOne.js";
    var march = "./g5aprint/07march.js";
    var aprilmay = "./g5aprint/08aprilmay.js";
    var june = "./g5aprint/09june.js";
    var July = "./g5aprint/10july.js";
    var secondseme = "./g5aprint/11SeSeme.js";
    var secondsemeR = "./g5aprint/12SeSemeR.js";
    var firstSemeR = "./g5aprint/06SemeOneR.js";
    var annual = "./g5aprint/13anual.js";
    var kk1 = "November";
    var kk2 = "December";
    var kk3 = "January";
    var kk4 = "February";
    var kk5 = "1st Semester";
    var kk6 = "March";
    var kk7 = "April-May";
    var kk8 = "June";
    var kk9 = "July";
    var kk10 = "2nd Semester";
    var kk11 = "1st Semester Result";
    var kk12 = "2nd Semester Result";
    var kk13 = "Annual Year";
    if (db2 == kk1) {
        text4.innerText = "November"
        text5.innerText = "November"
        text6.innerText = "November"
        script.src = nov;
    } else if (db2 == kk2) {
        text4.innerText = "December"
        text5.innerText = "December"
        text6.innerText = "December"
        script.src = dec;
    } else if (db2 == kk3) {
        text4.innerText = "January"
        text5.innerText = "January"
        text6.innerText = "January"
        script.src = jan;
    } else if (db2 == kk4) {
        text4.innerText = "February"
        text5.innerText = "February"
        text6.innerText = "February"
        script.src = feb;
    } else if (db2 == kk5) {
        text4.innerText = "1st Semester"
        text5.innerText = "1st Semester"
        text6.innerText = "1st SEMESTER"
        script.src = firstSeme;
    } else if (db2 == kk6) {
        text4.innerText = "March"
        text5.innerText = "March"
        text6.innerText = "March"
        script.src = march;
    } else if (db2 == kk7) {
        text4.innerText = "April-May"
        text5.innerText = "April-May"
        text6.innerText = "April-May"
        script.src = aprilmay;
    } else if (db2 == kk8) {
        text4.innerText = "June"
        text5.innerText = "June"
        text6.innerText = "June"
        script.src = june;
    } else if (db2 == kk9) {
        text4.innerText = "July"
        text5.innerText = "July"
        text6.innerText = "July"
        script.src = July;
    } else if (db2 == kk10) {
        text4.innerText = "2nd Semester"
        text5.innerText = "2nd Semester"
        text6.innerText = "2nd SEMESTER"
        script.src = secondseme;
    } else if (db2 == kk11) {
        text4.innerText = kk11;
        text5.innerText = kk11;
        text6.innerText = kk11;
        text7.innerText = "1st SEMESTER RESULT";
        script.src = firstSemeR;
    } else if (db2 == kk12) {
        text4.innerText = kk12;
        text5.innerText = kk12;
        text6.innerText = kk12;
        text7.innerText = "2nd SEMESTER RESULT";
        script.src = secondsemeR;
    } else if (db2 == kk13) {
        text4.innerText = kk13;
        text5.innerText = kk13;
        text6.innerText = kk13;
        text7.innerText = "ANNUAL YEAR";
        script.src = annual;
    }
}
showMonth();
// var db = localStorage.getItem("preGrade"); //Grade
// var db2 = localStorage.getItem("preMonth"); //Month
// var db3 = localStorage.getItem("preYear");  //Year
// // console.log(db);
// console.log(db2);
// console.log(db3);
function dbAcadamic() {
    var yyy = document.getElementById("year1");
    var yyy2 = document.getElementById("year2");
    var yyy3 = document.getElementById("year3");
    var kk1 = "2023-2024";
    var kk2 = "2024-2025";
    var kk3 = "2025-2026";
    var kk4 = "2026-2027";
    var kk5 = "2027-2028";
    var kk6 = "2028-2029";
    var kk7 = "2029-2030";
    var kk8 = "2030-2031";
    if (db3 == kk1) {
        yyy.innerText = "2023-2024"
        yyy2.innerText = "2023-2024"
        yyy3.innerText = "2023-2024"
    } else if (db3 == kk2) {
        yyy.innerText = "2024-2025"
        yyy2.innerText = "2024-2025"
        yyy3.innerText = "2024-2025"
    } else if (db3 == kk3) {
        yyy.innerText = "2025-2026"
        yyy2.innerText = "2025-2026"
        yyy3.innerText = "2025-2026"
    } else if (db3 == kk4) {
        yyy.innerText = "2026-2027"
        yyy2.innerText = "2026-2027"
        yyy3.innerText = "2026-2027"
    } else if (db3 == kk5) {
        yyy.innerText = "2027-2028"
        yyy2.innerText = "2027-2028"
        yyy3.innerText = "2027-2028"
    } else if (db3 == kk6) {
        yyy.innerText = "2028-2029"
        yyy2.innerText = "2028-2029"
        yyy3.innerText = "2028-2029"
    } else if (db3 == kk7) {
        yyy.innerText = "2029-2030"
        yyy2.innerText = "2029-2030"
        yyy3.innerText = "2029-2030"
    } else if (db3 == kk8) {
        yyy.innerText = "2030-2031"
        yyy2.innerText = "2030-2031"
        yyy3.innerText = "2030-2031"
    }

}
dbAcadamic();
document.getElementById("showMyTable").style.display = "none";