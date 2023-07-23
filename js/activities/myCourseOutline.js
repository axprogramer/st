const firebaseConfig = {
    apiKey: "AIzaSyAJ61CR4hcHajBf8T02wl-REVx8SnRxklE",
    authDomain: "useradmin-cd653.firebaseapp.com",
    databaseURL: "https://useradmin-cd653-default-rtdb.firebaseio.com",
    projectId: "useradmin-cd653",
    storageBucket: "useradmin-cd653.appspot.com",
    messagingSenderId: "51017691764",
    appId: "1:51017691764:web:9f322ae1ee6c00c5ce5721"
};

firebase.initializeApp(firebaseConfig);

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
// function selectAllData() {
//     // document.getElementById('myScedual').innerHTML = "";
//     selectAllData2();
//     firebase.database().ref(`courseOutline/` + `${dbmonthAct}/` + `${dbgradeAct}/` + `${dbyearAct}/`).once('value',
//         function (AllRecords) {
//             AllRecords.forEach(
//                 function (outlineData) {
//                     var Vmonth = outlineData.val().month;
//                     var VmainTitle = outlineData.val().mainTitle;
//                     var Vday1 = outlineData.val().day1;
//                     var Vday2 = outlineData.val().day2;
//                     var Vday3 = outlineData.val().day3;
//                     var Vday4 = outlineData.val().day4;
//                     var Vday5 = outlineData.val().day5;
//                     var Vday6 = outlineData.val().day6;
//                     var Vday7 = outlineData.val().day7;
//                     var Vday8 = outlineData.val().day8;
//                     var Vday9 = outlineData.val().day9;
//                     var Vday10 = outlineData.val().day10;
//                     var Vday11 = outlineData.val().day11;
//                     var Vday12 = outlineData.val().day12;
//                     var Vday13 = outlineData.val().day13;
//                     var Vday14 = outlineData.val().day14;
//                     var Vday15 = outlineData.val().day15;
//                     var Vday16 = outlineData.val().day16;
//                     var Vday17 = outlineData.val().day17;
//                     var Vday18 = outlineData.val().day18;
//                     var Vday19 = outlineData.val().day19;
//                     var Vday20 = outlineData.val().day20;
//                     var Vday21 = outlineData.val().day21;
//                     var Vday22 = outlineData.val().day22;
//                     var Vday23 = outlineData.val().day23;
//                     var Vday24 = outlineData.val().day24;
//                     var Vday25 = outlineData.val().day25;
//                     var Vday26 = outlineData.val().day26;
//                     var Vday27 = outlineData.val().day27;
//                     var Vday28 = outlineData.val().day28;
//                     var Vday29 = outlineData.val().day29;
//                     var Vday30 = outlineData.val().day30;
//                     var title1 = outlineData.val().title1;
//                     var title2 = outlineData.val().title2;
//                     var title3 = outlineData.val().title3;
//                     var title4 = outlineData.val().title4;
//                     var title5 = outlineData.val().title5;
//                     var title6 = outlineData.val().title6;
//                     var title7 = outlineData.val().title7;
//                     var title8 = outlineData.val().title8;
//                     var title9 = outlineData.val().title9;
//                     var title10 = outlineData.val().title10;
//                     var title11 = outlineData.val().title11;
//                     var title12 = outlineData.val().title12;
//                     var title13 = outlineData.val().title13;
//                     var title14 = outlineData.val().title14;
//                     var title15 = outlineData.val().title15;
//                     var title16 = outlineData.val().title16;
//                     var title17 = outlineData.val().title17;
//                     var title18 = outlineData.val().title18;
//                     var title19 = outlineData.val().title19;
//                     var title20 = outlineData.val().title20;
//                     var title21 = outlineData.val().title21;
//                     var title22 = outlineData.val().title22;
//                     var title23 = outlineData.val().title23;
//                     var title24 = outlineData.val().title24;
//                     var title25 = outlineData.val().title25;
//                     var title26 = outlineData.val().title26;
//                     var title27 = outlineData.val().title27;
//                     var title28 = outlineData.val().title28;
//                     var title29 = outlineData.val().title29;
//                     var title30 = outlineData.val().title30;
//                     var point1 = outlineData.val().point1;
//                     var point2 = outlineData.val().point2;
//                     var point3 = outlineData.val().point3;
//                     var point4 = outlineData.val().point4;
//                     var point5 = outlineData.val().point5;
//                     var point6 = outlineData.val().point6;
//                     var point7 = outlineData.val().point7;
//                     var point8 = outlineData.val().point8;
//                     var point9 = outlineData.val().point9;
//                     var point10 = outlineData.val().point10;
//                     var point11 = outlineData.val().point11;
//                     var point12 = outlineData.val().point12;
//                     var point13 = outlineData.val().point13;
//                     var point14 = outlineData.val().point14;
//                     var point15 = outlineData.val().point15;
//                     var point16 = outlineData.val().point16;
//                     var point17 = outlineData.val().point17;
//                     var point18 = outlineData.val().point18;
//                     var point19 = outlineData.val().point19;
//                     var point20 = outlineData.val().point20;
//                     var point21 = outlineData.val().point21;
//                     var point22 = outlineData.val().point22;
//                     var point23 = outlineData.val().point23;
//                     var point24 = outlineData.val().point24;
//                     var point25 = outlineData.val().point25;
//                     var point26 = outlineData.val().point26;
//                     var point27 = outlineData.val().point27;
//                     var point28 = outlineData.val().point28;
//                     var point29 = outlineData.val().point29;
//                     var point30 = outlineData.val().point30;

//                     var time1 = outlineData.val().time1;
//                     var time2 = outlineData.val().time2;
//                     var time3 = outlineData.val().time3;
//                     var time4 = outlineData.val().time4;
//                     var time5 = outlineData.val().time5;
//                     var time6 = outlineData.val().time6;
//                     var time7 = outlineData.val().time7;
//                     var time8 = outlineData.val().time8;
//                     var time9 = outlineData.val().time9;
//                     var time10 = outlineData.val().time10;
//                     addItemsToTable(
//                         Vmonth,
//                         VmainTitle,
//                         Vday1,
//                         Vday2,
//                         Vday3,
//                         Vday4,
//                         Vday5,
//                         Vday6,
//                         Vday7,
//                         Vday8,
//                         Vday9,
//                         Vday10,
//                         Vday11,
//                         Vday12,
//                         Vday13,
//                         Vday14,
//                         Vday15,
//                         Vday16,
//                         Vday17,
//                         Vday18,
//                         Vday19,
//                         Vday20,
//                         Vday21,
//                         Vday22,
//                         Vday23,
//                         Vday24,
//                         Vday25,
//                         Vday26,
//                         Vday27,
//                         Vday28,
//                         Vday29,
//                         Vday30,
//                         title1,
//                         title2,
//                         title3,
//                         title4,
//                         title5,
//                         title6,
//                         title7,
//                         title8,
//                         title9,
//                         title10,
//                         title11,
//                         title12,
//                         title13,
//                         title14,
//                         title15,
//                         title16,
//                         title17,
//                         title18,
//                         title19,
//                         title20,
//                         title21,
//                         title22,
//                         title23,
//                         title24,
//                         title25,
//                         title26,
//                         title27,
//                         title28,
//                         title29,
//                         title30,
//                         point1,
//                         point2,
//                         point3,
//                         point4,
//                         point5,
//                         point6,
//                         point7,
//                         point8,
//                         point9,
//                         point10,
//                         point11,
//                         point12,
//                         point13,
//                         point14,
//                         point15,
//                         point16,
//                         point17,
//                         point18,
//                         point19,
//                         point20,
//                         point21,
//                         point22,
//                         point23,
//                         point24,
//                         point25,
//                         point26,
//                         point27,
//                         point28,
//                         point29,
//                         point30,
//                         time1,
//                         time2,
//                         time3,
//                         time4,
//                         time5,
//                         time6,
//                         time7,
//                         time8,
//                         time9,
//                         time10,
//                     );
//                 }
//             );
//         });
// }

window.onload = selectAllData2;

// let r = (Math.random() + 1).toString(36).substring(7).innerHTML;
// function addItemsToTable(
//     Vmonth,
//     VmainTitle,
//     Vday1,
//     Vday2,
//     Vday3,
//     Vday4,
//     Vday5,
//     Vday6,
//     Vday7,
//     Vday8,
//     Vday9,
//     Vday10,
//     Vday11,
//     Vday12,
//     Vday13,
//     Vday14,
//     Vday15,
//     Vday16,
//     Vday17,
//     Vday18,
//     Vday19,
//     Vday20,
//     Vday21,
//     Vday22,
//     Vday23,
//     Vday24,
//     Vday25,
//     Vday26,
//     Vday27,
//     Vday28,
//     Vday29,
//     Vday30,
//     title1,
//     title2,
//     title3,
//     title4,
//     title5,
//     title6,
//     title7,
//     title8,
//     title9,
//     title10,
//     title11,
//     title12,
//     title13,
//     title14,
//     title15,
//     title16,
//     title17,
//     title18,
//     title19,
//     title20,
//     title21,
//     title22,
//     title23,
//     title24,
//     title25,
//     title26,
//     title27,
//     title28,
//     title29,
//     title30,
//     point1,
//     point2,
//     point3,
//     point4,
//     point5,
//     point6,
//     point7,
//     point8,
//     point9,
//     point10,
//     point11,
//     point12,
//     point13,
//     point14,
//     point15,
//     point16,
//     point17,
//     point18,
//     point19,
//     point20,
//     point21,
//     point22,
//     point23,
//     point24,
//     point25,
//     point26,
//     point27,
//     point28,
//     point29,
//     point30,
//     time1,
//     time2,
//     time3,
//     time4,
//     time5,
//     time6,
//     time7,
//     time8,
//     time9,
//     time10,

// ) {
//     var GmainTitle = document.getElementById('mainTitle');
//     var Gday1 = document.getElementById('day1');
//     var Gday2 = document.getElementById('day2');
//     var Gday3 = document.getElementById('day3');
//     var Gday4 = document.getElementById('day4');
//     var Gday5 = document.getElementById('day5');
//     var Gday6 = document.getElementById('day6');
//     var Gday7 = document.getElementById('day7');
//     var Gday8 = document.getElementById('day8');
//     var Gday9 = document.getElementById('day9');
//     var Gday10 = document.getElementById('day10');
//     var Gday11 = document.getElementById('day11');
//     var Gday12 = document.getElementById('day12');
//     var Gday13 = document.getElementById('day13');
//     var Gday14 = document.getElementById('day14');
//     var Gday15 = document.getElementById('day15');
//     var Gday16 = document.getElementById('day16');
//     var Gday17 = document.getElementById('day17');
//     var Gday18 = document.getElementById('day18');
//     var Gday19 = document.getElementById('day19');
//     var Gday20 = document.getElementById('day20');
//     var Gday21 = document.getElementById('day21');
//     var Gday22 = document.getElementById('day22');
//     var Gday23 = document.getElementById('day23');
//     var Gday24 = document.getElementById('day24');
//     var Gday25 = document.getElementById('day25');
//     var Gday26 = document.getElementById('day26');
//     var Gday27 = document.getElementById('day27');
//     var Gday28 = document.getElementById('day28');
//     var Gday29 = document.getElementById('day29');
//     var Gday30 = document.getElementById('day30');

//     var Gtitle1 = document.getElementById('title1');
//     var Gtitle2 = document.getElementById('title2');
//     var Gtitle3 = document.getElementById('title3');
//     var Gtitle4 = document.getElementById('title4');
//     var Gtitle5 = document.getElementById('title5');
//     var Gtitle6 = document.getElementById('title6');
//     var Gtitle7 = document.getElementById('title7');
//     var Gtitle8 = document.getElementById('title8');
//     var Gtitle9 = document.getElementById('title9');
//     var Gtitle10 = document.getElementById('title10');
//     var Gtitle11 = document.getElementById('title11');
//     var Gtitle12 = document.getElementById('title12');
//     var Gtitle13 = document.getElementById('title13');
//     var Gtitle14 = document.getElementById('title14');
//     var Gtitle15 = document.getElementById('title15');
//     var Gtitle16 = document.getElementById('title16');
//     var Gtitle17 = document.getElementById('title17');
//     var Gtitle18 = document.getElementById('title18');
//     var Gtitle19 = document.getElementById('title19');
//     var Gtitle20 = document.getElementById('title20');
//     var Gtitle21 = document.getElementById('title21');
//     var Gtitle22 = document.getElementById('title22');
//     var Gtitle23 = document.getElementById('title23');
//     var Gtitle24 = document.getElementById('title24');
//     var Gtitle25 = document.getElementById('title25');
//     var Gtitle26 = document.getElementById('title26');
//     var Gtitle27 = document.getElementById('title27');
//     var Gtitle28 = document.getElementById('title28');
//     var Gtitle29 = document.getElementById('title29');
//     var Gtitle30 = document.getElementById('title30');

//     var Gpoint1 = document.getElementById('point1');
//     var Gpoint2 = document.getElementById('point2');
//     var Gpoint3 = document.getElementById('point3');
//     var Gpoint4 = document.getElementById('point4');
//     var Gpoint5 = document.getElementById('point5');
//     var Gpoint6 = document.getElementById('point6');
//     var Gpoint7 = document.getElementById('point7');
//     var Gpoint8 = document.getElementById('point8');
//     var Gpoint9 = document.getElementById('point9');
//     var Gpoint10 = document.getElementById('point10');
//     var Gpoint11 = document.getElementById('point11');
//     var Gpoint12 = document.getElementById('point12');
//     var Gpoint13 = document.getElementById('point13');
//     var Gpoint14 = document.getElementById('point14');
//     var Gpoint15 = document.getElementById('point15');
//     var Gpoint16 = document.getElementById('point16');
//     var Gpoint17 = document.getElementById('point17');
//     var Gpoint18 = document.getElementById('point18');
//     var Gpoint19 = document.getElementById('point19');
//     var Gpoint20 = document.getElementById('point20');
//     var Gpoint21 = document.getElementById('point21');
//     var Gpoint22 = document.getElementById('point22');
//     var Gpoint23 = document.getElementById('point23');
//     var Gpoint24 = document.getElementById('point24');
//     var Gpoint25 = document.getElementById('point25');
//     var Gpoint26 = document.getElementById('point26');
//     var Gpoint27 = document.getElementById('point27');
//     var Gpoint28 = document.getElementById('point28');
//     var Gpoint29 = document.getElementById('point29');
//     var Gpoint30 = document.getElementById('point30');
//     var GshowMonth = document.getElementById('showMonth');
//     var Gtime1 = document.getElementById('time1');
//     var Gtime2 = document.getElementById('time2');
//     var Gtime3 = document.getElementById('time3');
//     var Gtime4 = document.getElementById('time4');
//     var Gtime5 = document.getElementById('time5');
//     var Gtime6 = document.getElementById('time6');
//     var Gtime7 = document.getElementById('time7');
//     var Gtime8 = document.getElementById('time8');
//     var Gtime9 = document.getElementById('time9');
//     var Gtime10 = document.getElementById('time10');

//     if (Vmonth == undefined) {
//         GshowMonth.innerText = '';
//     } else {
//         GshowMonth.innerText = Vmonth;
//     }
//     if (VmainTitle == undefined) {
//         GmainTitle.innerHTML = '';
//     } else {
//         GmainTitle.innerHTML = VmainTitle;
//     }
//     if (Vday1 == undefined) {
//         Gday1.innerHTML = '';
//     } else {
//         Gday1.innerHTML = Vday1;
//     }
//     if (Vday2 == undefined) {
//         Gday2.innerHTML = '';
//     } else {
//         Gday2.innerHTML = Vday2;
//     }
//     if (Vday3 == undefined) {
//         Gday3.innerHTML = '';
//     } else {
//         Gday3.innerHTML = Vday3;
//     }
//     if (Vday4 == undefined) {
//         Gday4.innerHTML = '';
//     } else {
//         Gday4.innerHTML = Vday4;
//     }
//     if (Vday5 == undefined) {
//         Gday5.innerHTML = '';
//     } else {
//         Gday5.innerHTML = Vday5;
//     }
//     if (Vday6 == undefined) {
//         Gday6.innerHTML = '';
//     } else {
//         Gday6.innerHTML = Vday6;
//     }
//     if (Vday6 == undefined) {
//         Gday6.innerHTML = '';
//     } else {
//         Gday6.innerHTML = Vday6;
//     }
//     if (Vday7 == undefined) {
//         Gday7.innerHTML = '';
//     } else {
//         Gday7.innerHTML = Vday7;
//     }
//     if (Vday8 == undefined) {
//         Gday8.innerHTML = '';
//     } else {
//         Gday8.innerHTML = Vday8;
//     }
//     if (Vday9 == undefined) {
//         Gday9.innerHTML = '';
//     } else {
//         Gday9.innerHTML = Vday9;
//     }
//     if (Vday10 == undefined) {
//         Gday10.innerHTML = '';
//     } else {
//         Gday10.innerHTML = Vday10;
//     }
//     if (Vday11 == undefined) {
//         Gday11.innerHTML = '';
//     } else {
//         Gday11.innerHTML = Vday11;
//     }
//     if (Vday12 == undefined) {
//         Gday12.innerHTML = '';
//     } else {
//         Gday12.innerHTML = Vday12;
//     }
//     if (Vday13 == undefined) {
//         Gday13.innerHTML = '';
//     } else {
//         Gday13.innerHTML = Vday13;
//     }
//     if (Vday14 == undefined) {
//         Gday14.innerHTML = '';
//     } else {
//         Gday14.innerHTML = Vday14;
//     }
//     if (Vday15 == undefined) {
//         Gday15.innerHTML = '';
//     } else {
//         Gday15.innerHTML = Vday15;
//     }
//     if (Vday16 == undefined) {
//         Gday16.innerHTML = '';
//     } else {
//         Gday16.innerHTML = Vday16;
//     }
//     if (Vday17 == undefined) {
//         Gday17.innerHTML = '';
//     } else {
//         Gday17.innerHTML = Vday17;
//     }
//     if (Vday18 == undefined) {
//         Gday18.innerHTML = '';
//     } else {
//         Gday18.innerHTML = Vday18;
//     }
//     if (Vday19 == undefined) {
//         Gday19.innerHTML = '';
//     } else {
//         Gday19.innerHTML = Vday19;
//     }
//     if (Vday20 == undefined) {
//         Gday20.innerHTML = '';
//     } else {
//         Gday20.innerHTML = Vday20;
//     }
//     if (Vday21 == undefined) {
//         Gday21.innerHTML = '';
//     } else {
//         Gday21.innerHTML = Vday21;
//     }
//     if (Vday22 == undefined) {
//         Gday22.innerHTML = '';
//     } else {
//         Gday22.innerHTML = Vday22;
//     }
//     if (Vday23 == undefined) {
//         Gday23.innerHTML = '';
//     } else {
//         Gday23.innerHTML = Vday23;
//     }
//     if (Vday24 == undefined) {
//         Gday24.innerHTML = '';
//     } else {
//         Gday24.innerHTML = Vday24;
//     }
//     if (Vday25 == undefined) {
//         Gday25.innerHTML = '';
//     } else {
//         Gday25.innerHTML = Vday25;
//     }
//     if (Vday26 == undefined) {
//         Gday26.innerHTML = '';
//     } else {
//         Gday26.innerHTML = Vday26;
//     }
//     if (Vday27 == undefined) {
//         Gday27.innerHTML = '';
//     } else {
//         Gday27.innerHTML = Vday27;
//     }
//     if (Vday28 == undefined) {
//         Gday28.innerHTML = '';
//     } else {
//         Gday28.innerHTML = Vday28;
//     }
//     if (Vday29 == undefined) {
//         Gday29.innerHTML = '';
//     } else {
//         Gday29.innerHTML = Vday29;
//     }
//     if (Vday30 == undefined) {
//         Gday30.innerHTML = '';
//     } else {
//         Gday30.innerHTML = Vday30;
//     }
//     if (title1 == undefined) {
//         Gtitle1.innerHTML = '';
//     } else {
//         Gtitle1.innerHTML = title1;
//     }
//     if (title2 == undefined) {
//         Gtitle2.innerHTML = '';
//     } else {
//         Gtitle2.innerHTML = title2;
//     }
//     if (title3 == undefined) {
//         Gtitle3.innerHTML = '';
//     } else {
//         Gtitle3.innerHTML = title3;
//     }
//     if (title4 == undefined) {
//         Gtitle4.innerHTML = '';
//     } else {
//         Gtitle4.innerHTML = title4;
//     }
//     if (title5 == undefined) {
//         Gtitle5.innerHTML = '';
//     } else {
//         Gtitle5.innerHTML = title5;
//     }
//     if (title6 == undefined) {
//         Gtitle6.innerHTML = '';
//     } else {
//         Gtitle6.innerHTML = title6;
//     }
//     if (title7 == undefined) {
//         Gtitle7.innerHTML = '';
//     } else {
//         Gtitle7.innerHTML = title7;
//     }
//     if (title8 == undefined) {
//         Gtitle8.innerHTML = '';
//     } else {
//         Gtitle8.innerHTML = title8;
//     }
//     if (title9 == undefined) {
//         Gtitle9.innerHTML = '';
//     } else {
//         Gtitle9.innerHTML = title9;
//     }
//     if (title10 == undefined) {
//         Gtitle10.innerHTML = '';
//     } else {
//         Gtitle10.innerHTML = title10;
//     }
//     if (title11 == undefined) {
//         Gtitle11.innerHTML = '';
//     } else {
//         Gtitle11.innerHTML = title11;
//     }
//     if (title12 == undefined) {
//         Gtitle12.innerHTML = '';
//     } else {
//         Gtitle12.innerHTML = title12;
//     }
//     if (title13 == undefined) {
//         Gtitle13.innerHTML = '';
//     } else {
//         Gtitle13.innerHTML = title13;
//     }
//     if (title14 == undefined) {
//         Gtitle14.innerHTML = '';
//     } else {
//         Gtitle14.innerHTML = title14;
//     }
//     if (title15 == undefined) {
//         Gtitle15.innerHTML = '';
//     } else {
//         Gtitle15.innerHTML = title15;
//     }
//     if (title16 == undefined) {
//         Gtitle16.innerHTML = '';
//     } else {
//         Gtitle16.innerHTML = title16;
//     }
//     if (title17 == undefined) {
//         Gtitle17.innerHTML = '';
//     } else {
//         Gtitle17.innerHTML = title17;
//     }
//     if (title18 == undefined) {
//         Gtitle18.innerHTML = '';
//     } else {
//         Gtitle18.innerHTML = title18;
//     }
//     if (title19 == undefined) {
//         Gtitle19.innerHTML = '';
//     } else {
//         Gtitle19.innerHTML = title19;
//     }
//     if (title20 == undefined) {
//         Gtitle20.innerHTML = '';
//     } else {
//         Gtitle20.innerHTML = title20;
//     }
//     if (title21 == undefined) {
//         Gtitle21.innerHTML = '';
//     } else {
//         Gtitle21.innerHTML = title21;
//     }
//     if (title22 == undefined) {
//         Gtitle22.innerHTML = '';
//     } else {
//         Gtitle22.innerHTML = title22;
//     }
//     if (title23 == undefined) {
//         Gtitle23.innerHTML = '';
//     } else {
//         Gtitle23.innerHTML = title23;
//     }
//     if (title24 == undefined) {
//         Gtitle24.innerHTML = '';
//     } else {
//         Gtitle24.innerHTML = title24;
//     }
//     if (title25 == undefined) {
//         Gtitle25.innerHTML = '';
//     } else {
//         Gtitle25.innerHTML = title25;
//     }
//     if (title26 == undefined) {
//         Gtitle26.innerHTML = '';
//     } else {
//         Gtitle26.innerHTML = title26;
//     }
//     if (title27 == undefined) {
//         Gtitle27.innerHTML = '';
//     } else {
//         Gtitle27.innerHTML = title27;
//     }
//     if (title28 == undefined) {
//         Gtitle28.innerHTML = '';
//     } else {
//         Gtitle28.innerHTML = title28;
//     }
//     if (title29 == undefined) {
//         Gtitle29.innerHTML = '';
//     } else {
//         Gtitle29.innerHTML = title29;
//     }
//     if (title30 == undefined) {
//         Gtitle30.innerHTML = '';
//     } else {
//         Gtitle30.innerHTML = title30;
//     }
//     if (point1 == undefined) {
//         Gpoint1.innerHTML = '';
//     } else {
//         Gpoint1.innerHTML = point1;
//     }
//     if (point2 == undefined) {
//         Gpoint2.innerHTML = '';
//     } else {
//         Gpoint2.innerHTML = point2;
//     }

//     if (point3 == undefined) {
//         Gpoint3.innerHTML = '';
//     } else {
//         Gpoint3.innerHTML = point3;
//     }

//     if (point4 == undefined) {
//         Gpoint4.innerHTML = '';
//     } else {
//         Gpoint4.innerHTML = point4;
//     }

//     if (point5 == undefined) {
//         Gpoint5.innerHTML = '';
//     } else {
//         Gpoint5.innerHTML = point5;
//     }

//     if (point6 == undefined) {
//         Gpoint6.innerHTML = '';
//     } else {
//         Gpoint6.innerHTML = point6;
//     }

//     if (point7 == undefined) {
//         Gpoint7.innerHTML = '';
//     } else {
//         Gpoint7.innerHTML = point7;
//     }

//     if (point8 == undefined) {
//         Gpoint8.innerHTML = '';
//     } else {
//         Gpoint8.innerHTML = point8;
//     }

//     if (point9 == undefined) {
//         Gpoint9.innerHTML = '';
//     } else {
//         Gpoint9.innerHTML = point9;
//     }

//     if (point10 == undefined) {
//         Gpoint10.innerHTML = '';
//     } else {
//         Gpoint10.innerHTML = point10;
//     }

//     if (point11 == undefined) {
//         Gpoint11.innerHTML = '';
//     } else {
//         Gpoint11.innerHTML = point11;
//     }

//     if (point12 == undefined) {
//         Gpoint12.innerHTML = '';
//     } else {
//         Gpoint12.innerHTML = point12;
//     }

//     if (point13 == undefined) {
//         Gpoint13.innerHTML = '';
//     } else {
//         Gpoint13.innerHTML = point13;
//     }

//     if (point14 == undefined) {
//         Gpoint14.innerHTML = '';
//     } else {
//         Gpoint14.innerHTML = point14;
//     }

//     if (point15 == undefined) {
//         Gpoint15.innerHTML = '';
//     } else {
//         Gpoint15.innerHTML = point15;
//     }

//     if (point16 == undefined) {
//         Gpoint16.innerHTML = '';
//     } else {
//         Gpoint16.innerHTML = point16;
//     }

//     if (point17 == undefined) {
//         Gpoint17.innerHTML = '';
//     } else {
//         Gpoint17.innerHTML = point17;
//     }

//     if (point18 == undefined) {
//         Gpoint18.innerHTML = '';
//     } else {
//         Gpoint18.innerHTML = point18;
//     }

//     if (point19 == undefined) {
//         Gpoint19.innerHTML = '';
//     } else {
//         Gpoint19.innerHTML = point19;
//     }

//     if (point20 == undefined) {
//         Gpoint20.innerHTML = '';
//     } else {
//         Gpoint20.innerHTML = point20;
//     }

//     if (point21 == undefined) {
//         Gpoint21.innerHTML = '';
//     } else {
//         Gpoint21.innerHTML = point21;
//     }

//     if (point22 == undefined) {
//         Gpoint22.innerHTML = '';
//     } else {
//         Gpoint22.innerHTML = point22;
//     }

//     if (point23 == undefined) {
//         Gpoint23.innerHTML = '';
//     } else {
//         Gpoint23.innerHTML = point23;
//     }

//     if (point24 == undefined) {
//         Gpoint24.innerHTML = '';
//     } else {
//         Gpoint24.innerHTML = point24;
//     }

//     if (point25 == undefined) {
//         Gpoint25.innerHTML = '';
//     } else {
//         Gpoint25.innerHTML = point25;
//     }

//     if (point26 == undefined) {
//         Gpoint26.innerHTML = '';
//     } else {
//         Gpoint26.innerHTML = point26;
//     }

//     if (point27 == undefined) {
//         Gpoint27.innerHTML = '';
//     } else {
//         Gpoint27.innerHTML = point27;
//     }

//     if (point28 == undefined) {
//         Gpoint28.innerHTML = '';
//     } else {
//         Gpoint28.innerHTML = point28;
//     }

//     if (point29 == undefined) {
//         Gpoint29.innerHTML = '';
//     } else {
//         Gpoint29.innerHTML = point29;
//     }

//     if (point30 == undefined) {
//         Gpoint30.innerHTML = '';
//     } else {
//         Gpoint30.innerHTML = point30;
//     }

//     if (time1 == undefined) {
//         Gtime1.innerHTML = '';
//     } else {
//         Gtime1.innerHTML = time1;
//     }
//     if (time2 == undefined) {
//         Gtime2.innerHTML = '';
//     } else {
//         Gtime2.innerHTML = time2;
//     }
//     if (time3 == undefined) {
//         Gtime3.innerHTML = '';
//     } else {
//         Gtime3.innerHTML = time3;
//     }
//     if (time4 == undefined) {
//         Gtime4.innerHTML = '';
//     } else {
//         Gtime4.innerHTML = time4;
//     }
//     if (time5 == undefined) {
//         Gtime5.innerHTML = '';
//     } else {
//         Gtime5.innerHTML = time5;
//     }
//     if (time6 == undefined) {
//         Gtime6.innerHTML = '';
//     } else {
//         Gtime6.innerHTML = time6;
//     }
//     if (time7 == undefined) {
//         Gtime7.innerHTML = '';
//     } else {
//         Gtime7.innerHTML = time7;
//     }
//     if (time8 == undefined) {
//         Gtime8.innerHTML = '';
//     } else {
//         Gtime8.innerHTML = time8;
//     }
//     if (time9 == undefined) {
//         Gtime9.innerHTML = '';
//     } else {
//         Gtime9.innerHTML = time9;
//     }
//     if (time10 == undefined) {
//         Gtime10.innerHTML = '';
//     } else {
//         Gtime10.innerHTML = time10;
//     }
// }

document.getElementById('myMonthAct').addEventListener('change', function () {
    var monthact = document.getElementById('myMonthAct').value;
    localStorage.setItem('outlinemonthAct', monthact);
    window.location.reload();

})
document.getElementById('myGradeAct').addEventListener('change', function () {
    var gradeact = document.getElementById('myGradeAct').value;
    localStorage.setItem('outlinegradeAct', gradeact);
    window.location.reload();
})
document.getElementById('myYearAct').addEventListener('change', function () {
    var yeareact = document.getElementById('myYearAct').value;
    localStorage.setItem('outlineyeareAct', yeareact);
    window.location.reload();

})

var dbmonthAct = localStorage.getItem('outlinemonthAct'); //month activity
var dbgradeAct = localStorage.getItem('outlinegradeAct'); // grade activity
var dbyearAct = localStorage.getItem('outlineyeareAct'); // year activity
document.getElementById('myMonthAct').value = dbmonthAct;
document.getElementById('myGradeAct').value = dbgradeAct;
document.getElementById('myYearAct').value = dbyearAct;


//Save data to firebase
// var sportData = [];
// document.getElementById('btnRows').addEventListener('click', function () {
//     document.getElementById("alertMag").style.display = "none";
//     document.getElementById("alertMagWait").style.display = "block";
//     setTimeout(function () {
//         setData();
//         setTimeout(function () {
//             window.location.reload();
//         }, 1500)
//     }, 1500)
// })
// // Push data to firebase
// function setData() {
//     var GmainTitle = document.getElementById('mainTitle').innerHTML;
//     var Gday1 = document.getElementById('day1').innerHTML;
//     var Gday2 = document.getElementById('day2').innerHTML;
//     var Gday3 = document.getElementById('day3').innerHTML;
//     var Gday4 = document.getElementById('day4').innerHTML;
//     var Gday5 = document.getElementById('day5').innerHTML;
//     var Gday6 = document.getElementById('day6').innerHTML;
//     var Gday7 = document.getElementById('day7').innerHTML;
//     var Gday8 = document.getElementById('day8').innerHTML;
//     var Gday9 = document.getElementById('day9').innerHTML;
//     var Gday10 = document.getElementById('day10').innerHTML;
//     var Gday11 = document.getElementById('day11').innerHTML;
//     var Gday12 = document.getElementById('day12').innerHTML;
//     var Gday13 = document.getElementById('day13').innerHTML;
//     var Gday14 = document.getElementById('day14').innerHTML;
//     var Gday15 = document.getElementById('day15').innerHTML;
//     var Gday16 = document.getElementById('day16').innerHTML;
//     var Gday17 = document.getElementById('day17').innerHTML;
//     var Gday18 = document.getElementById('day18').innerHTML;
//     var Gday19 = document.getElementById('day19').innerHTML;
//     var Gday20 = document.getElementById('day20').innerHTML;
//     var Gday21 = document.getElementById('day21').innerHTML;
//     var Gday22 = document.getElementById('day22').innerHTML;
//     var Gday23 = document.getElementById('day23').innerHTML;
//     var Gday24 = document.getElementById('day24').innerHTML;
//     var Gday25 = document.getElementById('day25').innerHTML;
//     var Gday26 = document.getElementById('day26').innerHTML;
//     var Gday27 = document.getElementById('day27').innerHTML;
//     var Gday28 = document.getElementById('day28').innerHTML;
//     var Gday29 = document.getElementById('day29').innerHTML;
//     var Gday30 = document.getElementById('day30').innerHTML;

//     var Gtitle1 = document.getElementById('title1').innerHTML;
//     var Gtitle2 = document.getElementById('title2').innerHTML;
//     var Gtitle3 = document.getElementById('title3').innerHTML;
//     var Gtitle4 = document.getElementById('title4').innerHTML;
//     var Gtitle5 = document.getElementById('title5').innerHTML;
//     var Gtitle6 = document.getElementById('title6').innerHTML;
//     var Gtitle7 = document.getElementById('title7').innerHTML;
//     var Gtitle8 = document.getElementById('title8').innerHTML;
//     var Gtitle9 = document.getElementById('title9').innerHTML;
//     var Gtitle10 = document.getElementById('title10').innerHTML;
//     var Gtitle11 = document.getElementById('title11').innerHTML;
//     var Gtitle12 = document.getElementById('title12').innerHTML;
//     var Gtitle13 = document.getElementById('title13').innerHTML;
//     var Gtitle14 = document.getElementById('title14').innerHTML;
//     var Gtitle15 = document.getElementById('title15').innerHTML;
//     var Gtitle16 = document.getElementById('title16').innerHTML;
//     var Gtitle17 = document.getElementById('title17').innerHTML;
//     var Gtitle18 = document.getElementById('title18').innerHTML;
//     var Gtitle19 = document.getElementById('title19').innerHTML;
//     var Gtitle20 = document.getElementById('title20').innerHTML;
//     var Gtitle21 = document.getElementById('title21').innerHTML;
//     var Gtitle22 = document.getElementById('title22').innerHTML;
//     var Gtitle23 = document.getElementById('title23').innerHTML;
//     var Gtitle24 = document.getElementById('title24').innerHTML;
//     var Gtitle25 = document.getElementById('title25').innerHTML;
//     var Gtitle26 = document.getElementById('title26').innerHTML;
//     var Gtitle27 = document.getElementById('title27').innerHTML;
//     var Gtitle28 = document.getElementById('title28').innerHTML;
//     var Gtitle29 = document.getElementById('title29').innerHTML;
//     var Gtitle30 = document.getElementById('title30').innerHTML;

//     var Gpoint1 = document.getElementById('point1').innerHTML;
//     var Gpoint2 = document.getElementById('point2').innerHTML;
//     var Gpoint3 = document.getElementById('point3').innerHTML;
//     var Gpoint4 = document.getElementById('point4').innerHTML;
//     var Gpoint5 = document.getElementById('point5').innerHTML;
//     var Gpoint6 = document.getElementById('point6').innerHTML;
//     var Gpoint7 = document.getElementById('point7').innerHTML;
//     var Gpoint8 = document.getElementById('point8').innerHTML;
//     var Gpoint9 = document.getElementById('point9').innerHTML;
//     var Gpoint10 = document.getElementById('point10').innerHTML;
//     var Gpoint11 = document.getElementById('point11').innerHTML;
//     var Gpoint12 = document.getElementById('point12').innerHTML;
//     var Gpoint13 = document.getElementById('point13').innerHTML;
//     var Gpoint14 = document.getElementById('point14').innerHTML;
//     var Gpoint15 = document.getElementById('point15').innerHTML;
//     var Gpoint16 = document.getElementById('point16').innerHTML;
//     var Gpoint17 = document.getElementById('point17').innerHTML;
//     var Gpoint18 = document.getElementById('point18').innerHTML;
//     var Gpoint19 = document.getElementById('point19').innerHTML;
//     var Gpoint20 = document.getElementById('point20').innerHTML;
//     var Gpoint21 = document.getElementById('point21').innerHTML;
//     var Gpoint22 = document.getElementById('point22').innerHTML;
//     var Gpoint23 = document.getElementById('point23').innerHTML;
//     var Gpoint24 = document.getElementById('point24').innerHTML;
//     var Gpoint25 = document.getElementById('point25').innerHTML;
//     var Gpoint26 = document.getElementById('point26').innerHTML;
//     var Gpoint27 = document.getElementById('point27').innerHTML;
//     var Gpoint28 = document.getElementById('point28').innerHTML;
//     var Gpoint29 = document.getElementById('point29').innerHTML;
//     var Gpoint30 = document.getElementById('point30').innerHTML;
//     var Gtime1 = document.getElementById('time1').innerHTML;
//     var Gtime2 = document.getElementById('time2').innerHTML;
//     var Gtime3 = document.getElementById('time3').innerHTML;
//     var Gtime4 = document.getElementById('time4').innerHTML;
//     var Gtime5 = document.getElementById('time5').innerHTML;
//     var Gtime6 = document.getElementById('time6').innerHTML;
//     var Gtime7 = document.getElementById('time7').innerHTML;
//     var Gtime8 = document.getElementById('time8').innerHTML;
//     var Gtime9 = document.getElementById('time9').innerHTML;
//     var Gtime10 = document.getElementById('time10').innerHTML;

//     firebase.database().ref(`courseOutline/` + `${dbmonthAct}/` + `${dbgradeAct}/` + `${dbyearAct}/` + dbmonthAct).set(
//         {
//             month: dbmonthAct,
//             id: dbmonthAct,
//             title1: Gtitle1,
//             title2: Gtitle2,
//             title3: Gtitle3,
//             title4: Gtitle4,
//             title5: Gtitle5,
//             title6: Gtitle6,
//             title7: Gtitle7,
//             title8: Gtitle8,
//             title9: Gtitle9,
//             title10: Gtitle10,
//             title11: Gtitle11,
//             title12: Gtitle12,
//             title13: Gtitle13,
//             title14: Gtitle14,
//             title15: Gtitle15,
//             title16: Gtitle16,
//             title17: Gtitle17,
//             title18: Gtitle18,
//             title19: Gtitle19,
//             title20: Gtitle20,
//             title21: Gtitle21,
//             title22: Gtitle22,
//             title23: Gtitle23,
//             title24: Gtitle24,
//             title25: Gtitle25,
//             title26: Gtitle26,
//             title27: Gtitle27,
//             title28: Gtitle28,
//             title29: Gtitle29,
//             title30: Gtitle30,
//             day1: Gday1,
//             day2: Gday2,
//             day3: Gday3,
//             day4: Gday4,
//             day5: Gday5,
//             day6: Gday6,
//             day7: Gday7,
//             day8: Gday8,
//             day9: Gday9,
//             day10: Gday10,
//             day11: Gday11,
//             day12: Gday12,
//             day13: Gday13,
//             day14: Gday14,
//             day15: Gday15,
//             day16: Gday16,
//             day17: Gday17,
//             day18: Gday18,
//             day19: Gday19,
//             day20: Gday20,
//             day21: Gday21,
//             day22: Gday22,
//             day23: Gday23,
//             day24: Gday24,
//             day25: Gday25,
//             day26: Gday26,
//             day27: Gday27,
//             day28: Gday28,
//             day29: Gday29,
//             day30: Gday30,
//             point1: Gpoint1,
//             point2: Gpoint2,
//             point3: Gpoint3,
//             point4: Gpoint4,
//             point5: Gpoint5,
//             point6: Gpoint6,
//             point7: Gpoint7,
//             point8: Gpoint8,
//             point9: Gpoint9,
//             point10: Gpoint10,
//             point11: Gpoint11,
//             point12: Gpoint12,
//             point13: Gpoint13,
//             point14: Gpoint14,
//             point15: Gpoint15,
//             point16: Gpoint16,
//             point17: Gpoint17,
//             point18: Gpoint18,
//             point19: Gpoint19,
//             point20: Gpoint20,
//             point21: Gpoint21,
//             point22: Gpoint22,
//             point23: Gpoint23,
//             point24: Gpoint24,
//             point25: Gpoint25,
//             point26: Gpoint26,
//             point27: Gpoint27,
//             point28: Gpoint28,
//             point29: Gpoint29,
//             point30: Gpoint30,
//             mainTitle: GmainTitle,
//             time1: Gtime1,
//             time2: Gtime2,
//             time3: Gtime3,
//             time4: Gtime4,
//             time5: Gtime5,
//             time6: Gtime6,
//             time7: Gtime7,
//             time8: Gtime8,
//             time9: Gtime9,
//             time10: Gtime10,
//         },
//     )

// }
function selectAllData2() {
    n0 = 0;
    firebase.database().ref(`NewcourseOutline/` + `${dbmonthAct}/` + `${dbgradeAct}/` + `${dbyearAct}/`).once('value',
    function (AllRecords) {
        AllRecords.forEach(
            function (outlineData2) {
                var id = outlineData2.val().id;
                var date = outlineData2.val().date;
                var myTitle = outlineData2.val().myTitle;
                var time = outlineData2.val().time;
                var time5b = outlineData2.val().time2;
                var myTopic = outlineData2.val().myTopic;
                var myMainTittle = outlineData2.val().mainTitle;
                
                addItemsToTable2(
                    id,
                    date,
                    myTitle,
                    time,
                    time5b,
                    myTopic,
                    myMainTittle,
                    );
                }
                );
            });
}
var scheData = [];
var no;
function addItemsToTable2(id,
    date,
    myTitle,
    time,
    time5b,
    myTopic,
    myMainTittle,) {
    var nnn = document.getElementById('newschedual');
    scheData.push([id,date,myTitle,time,time5b,myTopic,myMainTittle]);
    document.getElementById('mainTitle').innerHTML = myMainTittle;
    document.getElementById('showMonth').innerHTML = dbmonthAct;
    
    var nn = `
    <tr>
    <td rowspan="2" style="border: 1px solid black;" class="middle" data-bs-toggle="modal"
            data-bs-target="#exampleModal" onclick="fillData(${n0})"
            
            
        >${date} <span style="display: none;">${++n0}</span></td>

    <td style="border: 1px solid black;text-align: center;color: red;font-weight: bold;font-size: 1.6vw;">${myTitle}</td>

     <td  style="border: 1px solid black;" class="middle">${time}</td>
     </tr>

     <tr>
    <td style="text-align: center;border: 1px solid black;font-size: 1.6vw;">${myTopic}</td> 
    <td style="text-align: center;border: 1px solid black;">${time5b}</td> 
    </tr>
    `

    nnn.innerHTML += nn;

}
function fillData(index){
    // document.getElementById('mainTitle').innerHTML;
    document.getElementById('getmyDate').innerHTML = scheData[index][1];
    document.getElementById('getmyTitle').innerHTML = scheData[index][2];
    document.getElementById('getmyTime').value = scheData[index][3];
    document.getElementById('getmyTime2').value = scheData[index][4];
    document.getElementById('getmyTopic').innerHTML = scheData[index][5];
    document.getElementById('getmyID').innerText = scheData[index][0];

}
function setData2() {
    var GmainTitle = document.getElementById('mainTitle').innerHTML;
    var date = document.getElementById('getmyDate').innerHTML;
    var myTitle = document.getElementById('getmyTitle').innerHTML;
    var time = document.getElementById('getmyTime').value;
    var time5b = document.getElementById('getmyTime2').value;
    var myTopic = document.getElementById('getmyTopic').innerHTML;

    firebase.database().ref(`NewcourseOutline/` + `${dbmonthAct}/` + `${dbgradeAct}/` + `${dbyearAct}/` + date).set(
        {
            id: date,
            date: date,
            myTitle: myTitle,
            time: time,
            time2: time5b,
            myTopic: myTopic,
            mainTitle: GmainTitle,
            
        },
        
    )
    window.location.reload();
}
function udpateData() {
    var GmainTitle = document.getElementById('mainTitle').innerHTML;
    var date = document.getElementById('getmyDate').innerHTML;
    var myTitle = document.getElementById('getmyTitle').innerHTML;
    var time = document.getElementById('getmyTime').value;
    var time5b = document.getElementById('getmyTime2').value;

    var myTopic = document.getElementById('getmyTopic').innerHTML;
    var updateID = document.getElementById('getmyID').innerHTML;

    firebase.database().ref(`NewcourseOutline/` + `${dbmonthAct}/` + `${dbgradeAct}/` + `${dbyearAct}/` + date).update(
        {
            date: date,
            myTitle: myTitle,
            time: time,
            time2: time5b,
            myTopic: myTopic,
            mainTitle: GmainTitle,
            
        },
        
    )
    window.location.reload();
}
function deleteData() {
    var date = document.getElementById('getmyDate').innerHTML;

    firebase.database().ref(`NewcourseOutline/` + `${dbmonthAct}/` + `${dbgradeAct}/` + `${dbyearAct}/` + date).remove().then(
        function () {
            // addItemsToTable2();
            window.location.reload();

        }
    )
}
document.getElementById("showAlert").style.display = "none";
document.getElementById("alertMagWait").style.display = "none";

// $("textarea").each(function () {
//     this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
// }).on("input", function () {
//     this.style.height = 0;
//     this.style.height = (this.scrollHeight) + "px";
// });
document.getElementById('goPrint').addEventListener('click', function () {
    var printContents = document.getElementById('myPrintA4').innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = "<html><head><title></title></head><body>" + printContents + "</body>";
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
    return true;
})

document.getElementById('week1').addEventListener('click', function () {
    document.getElementById('dis1').style.display = 'none';
    document.getElementById('dis2').style.display = 'none';
    document.getElementById('dis3').style.display = 'none';

})
document.getElementById('week2').addEventListener('click', function () {
    document.getElementById('dis4').style.display = 'none';
    document.getElementById('dis5').style.display = 'none';
    document.getElementById('dis6').style.display = 'none';

})
document.getElementById('timeShow').addEventListener('click', function () {
    document.getElementById('myshowTable').style.display = 'none';

})

//push data to JOSON

// function setData(){
//     setTimeout(function(){

//         localStorage.setItem("myDataAct", JSON.stringify(activityData));

//     },200)
// }
// var getDataback = JSON.parse(localStorage.getItem("myDataAct"));
// getDataBackTo();
// function getDataBackTo(){
//     for(i=0;i<getDataback.length;i++){
//         var name = getDataback[i].sex;
//         console.log(name);
//     }
// }