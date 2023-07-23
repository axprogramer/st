// Input 1 Grade
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
//     localStorage.setItem("myData6", show);
//     var eid = document.getElementById("enrolGrade");
//     var put = document.getElementById("mydataBase2");
//     var show = eid.options[eid.selectedIndex].value;
//     put.innerText = show;

// }
// myDb2.onchange = function () {
//     localStorage.setItem("myData8", show);
//     var eid = document.getElementById("myMonth");
//     var put = document.getElementById("mydataBase3");
//     var show = eid.options[eid.selectedIndex].value;
//     put.innerText = show;

// }
// myDb3.onchange = function () {
//     localStorage.setItem("myData7", show);
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
//     localStorage.setItem("myData6", storedb);
//     localStorage.setItem("myData8", storedb2);
//     localStorage.setItem("myData7", storedb3);
//     window.location.reload();

// }
// // Database Stores
// var text1 = document.getElementById("showEnroll");
// var text4 = document.getElementById("inMonth");
// var text3 = document.getElementById("myNewGrade");
// var text5 = document.getElementById("inGrade");
// var storedb = passToValue();
// var storedb2 = passToValue2();
// var storedb3 = passToValue3();
document.getElementById('enrolGrade').addEventListener('change', function () {
    var inputGrade = document.getElementById('enrolGrade').value;
    localStorage.setItem('inputGrade', inputGrade);
    window.location.reload();

})
document.getElementById('myMonth').addEventListener('change', function () {
    var inputMonth = document.getElementById('myMonth').value;
    localStorage.setItem('inputMonth', inputMonth);
    window.location.reload();

})
document.getElementById('academicYear').addEventListener('change', function () {
    var inputYear = document.getElementById('academicYear').value;
    localStorage.setItem('inputYear', inputYear);
    window.location.reload();

})


var db = localStorage.getItem("inputGrade"); //Grade
var db2 = localStorage.getItem("inputMonth"); //Month
var db3 = localStorage.getItem("inputYear"); //Year
document.getElementById('enrolGrade').value = db;
document.getElementById('myMonth').value = db2;
document.getElementById('academicYear').value = db3;

function showGrade() {
    var text4 = document.getElementById("inGrade");
    var getdb = localStorage.getItem("inputGrade");
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
    } else if (getdb == gg2) {
        text4.innerText = "K3";
    } else if (getdb == gg3) {
        text4.innerText = "1A";
    } else if (getdb == gg4) {
        text4.innerText = "1B";
    } else if (getdb == gg5) {
        text4.innerText = "2A";
    } else if (getdb == gg6) {
        text4.innerText = "2B";
    } else if (getdb == gg7) {
        text4.innerText = "3A";
    } else if (getdb == gg8) {
        text4.innerText = "3B";
    } else if (getdb == gg9) {
        text4.innerText = "4A";
    } else if (getdb == gg10) {
        text4.innerText = "4B";
    } else if (getdb == gg11) {
        text4.innerText = "5A";
    } else if (getdb == gg12) {
        text4.innerText = "5B";
    } else if (getdb == gg13) {
        text4.innerText = "6A";
    } else if (getdb == gg14) {
        text4.innerText = "6B";
    } else if (getdb == gg15) {
        text4.innerText = "7A";
    } else if (getdb == gg16) {
        text4.innerText = "7B";
    } else if (getdb == gg17) {
        text4.innerText = "8A";
    } else if (getdb == gg18) {
        text4.innerText = "8B";
    } else if (getdb == gg19) {
        text4.innerText = "9A";
    } else if (getdb == gg20) {
        text4.innerText = "9B";
    } else if (getdb == gg21) {
        text4.innerText = "10A";
    } else if (getdb == gg22) {
        text4.innerText = "10B";
    } else if (getdb == gg23) {
        text4.innerText = "11A";
    } else if (getdb == gg24) {
        text4.innerText = "11B";
    } else if (getdb == gg25) {
        text4.innerText = "12A";
    } else if (getdb == gg26) {
        text4.innerText = "12B";
    }
}
showGrade();
//Acadamic Year to input data
function showMonth() {
    var text4 = document.getElementById("inMonth");
    var text5 = document.getElementById("inMonth1");
    var headNode = document.getElementsByTagName('body')[0];
    var script = document.createElement("script");
    // script.type = 'module';
    headNode.append(script)
    var nov = "./g5ainput/01g5aNov.js";
    var dec = "./g5ainput/02g5aDec.js";
    var jan = "./g5ainput/03g5aJan.js";
    var feb = "./g5ainput/04feb.js";
    var firstSeme = "./g5ainput/1stsemester.js";
    var march = "./g5ainput/06march.js";
    var aprilmay = "./g5ainput/07aprilmay.js";
    var june = "./g5ainput/08june.js";
    var July = "./g5ainput/09july.js";
    var secondseme = "./g5ainput/2ndsemester.js";
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
    if (db2 == kk1) {
        text4.innerText = "November"
        text5.innerText = "November"
        script.src = nov;
    } else if (db2 == kk2) {
        text4.innerText = "December"
        text5.innerText = "December"
        script.src = dec;
    } else if (db2 == kk3) {
        text4.innerText = "January"
        text5.innerText = "January"
        script.src = jan;
    } else if (db2 == kk4) {
        text4.innerText = "February"
        text5.innerText = "February"
        script.src = feb;
    } else if (db2 == kk5) {
        text4.innerText = "1st Semester"
        text5.innerText = "1st Semester"
        script.src = firstSeme;
    } else if (db2 == kk6) {
        text4.innerText = "March"
        text5.innerText = "March"
        script.src = march;
    } else if (db2 == kk7) {
        text4.innerText = "April-May"
        text5.innerText = "April-May"
        script.src = aprilmay;
    } else if (db2 == kk8) {
        text4.innerText = "June"
        text5.innerText = "June"
        script.src = june;
    } else if (db2 == kk9) {
        text4.innerText = "July"
        text5.innerText = "July"
        script.src = July;
    } else if (db2 == kk10) {
        text4.innerText = "2nd Semester"
        text5.innerText = "2nd Semester"
        script.src = secondseme;
    }
}
showMonth();
function mySeme() {
    var first = document.getElementById("mySeme");
    var dd1 = "1st Semester"
    var dd2 = "2nd Semester"
    if (db2 == dd1) {
        first.innerText = dd1;
    } else if (db2 == dd2) {
        first.innerText = dd2;
    }

}
mySeme();

function scoreFunc() {
    var checkBox = document.getElementById("myCheck");
    if (checkBox.checked == true) {
        var check = "simple";
        localStorage.setItem("myData13", check);
        window.location.reload();
    } else {
        var uncheck = "unsimple";
        localStorage.setItem("myData13", uncheck);
        window.location.reload();
    }
}
document.getElementById("myTable2").style.display = "none";
document.getElementById("my1stsemetable").style.display = "none";
document.getElementById("mySubmit").style.display = "none";
document.getElementById("myUpdate").style.display = "none";
document.getElementById("myDelete").style.display = "none";
document.getElementById("showAlert").style.display = "none";
