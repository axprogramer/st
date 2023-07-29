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

window.onload = selectAllData2;

// let r = (Math.random() + 1).toString(36).substring(7).innerHTML;


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
                var tname = outlineData2.val().tname;
                var tgrade = outlineData2.val().tgrade;
                var tlevel = outlineData2.val().tlevel;
                
                addItemsToTable2(
                    id,
                    date,
                    myTitle,
                    time,
                    time5b,
                    myTopic,
                    myMainTittle,
                    tname,
                    tgrade,
                    tlevel,
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
    myMainTittle,
    tname,
    tgrade,
    tlevel,) {
    var nnn = document.getElementById('newschedual');
    scheData.push([id,date,myTitle,time,time5b,myTopic,myMainTittle]);
    document.getElementById('mainTitle').innerHTML = myMainTittle;
    document.getElementById('showMonth').innerHTML = dbmonthAct;
    document.getElementById('tName').innerHTML = tname;
    document.getElementById('tGrade').innerHTML = tgrade;
    document.getElementById('tLevel').innerHTML = tlevel;

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
    var tName = document.getElementById('tName').innerText;
    var tGrade = document.getElementById('tGrade').innerText;
    var tLevel = document.getElementById('tLevel').innerText;

    firebase.database().ref(`NewcourseOutline/` + `${dbmonthAct}/` + `${dbgradeAct}/` + `${dbyearAct}/` + date).set(
        {
            id: date,
            date: date,
            myTitle: myTitle,
            time: time,
            time2: time5b,
            myTopic: myTopic,
            mainTitle: GmainTitle,
            tname: tName,
            tgrade: tGrade,
            tlevel: tLevel,
            
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
    var tName = document.getElementById('tName').innerText;
    var tGrade = document.getElementById('tGrade').innerText;
    var tLevel = document.getElementById('tLevel').innerText;

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
            tname: tName,
            tgrade: tGrade,
            tlevel: tLevel,

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

// document.getElementById('week1').addEventListener('click', function () {
//     document.getElementById('dis1').style.display = 'none';
//     document.getElementById('dis2').style.display = 'none';
//     document.getElementById('dis3').style.display = 'none';

// })
// document.getElementById('week2').addEventListener('click', function () {
//     document.getElementById('dis4').style.display = 'none';
//     document.getElementById('dis5').style.display = 'none';
//     document.getElementById('dis6').style.display = 'none';

// })
// document.getElementById('timeShow').addEventListener('click', function () {
//     document.getElementById('myshowTable').style.display = 'none';

// })

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