const firebaseConfig = {
    apiKey: "AIzaSyAJ61CR4hcHajBf8T02wl-REVx8SnRxklE",
    authDomain: "useradmin-cd653.firebaseapp.com",
    databaseURL: "https://useradmin-cd653-default-rtdb.firebaseio.com",
    projectId: "useradmin-cd653",
    storageBucket: "useradmin-cd653.appspot.com",
    messagingSenderId: "51017691764",
    appId: "1:51017691764:web:9f322ae1ee6c00c5ce5721"
};
var db = localStorage.getItem("myData6");
var db2 = localStorage.getItem("myData8");
var db3 = localStorage.getItem("myData7");

// console.log(db);
// console.log(db2);
// console.log(db3);

firebase.initializeApp(firebaseConfig);
// var db = document.getElementById('showData').innerText;

var my5aAll = firebase.database().ref(`${db}/` + `${db3}/`);
function submitForm(e) {
    e.preventDefault();
    var name = getElementVal('myName');
    var id = getElementVal('myID');
    var sex = getElementVal('mySex');
    // var grade = getElementVal('myGrade');

    //November
    var speakingNov = getElementVal('mySnov');
    var writingNov = getElementVal('myWnov');
    var listeningNov = getElementVal('myLnov');
    var readingNov = getElementVal('myRnov');
    var averageNov = getElementVal('myAnov');
    var rankNOv = getElementVal('myKnov');
    //Khmer Name
    var myKh = getElementVal('myKhname');
    // window.location.reload();
    saveData(name, id, sex, speakingNov, writingNov, listeningNov,
        readingNov, averageNov, rankNOv, myKh);

}
const saveData = (name, id, sex, speakingNov, writingNov, listeningNov,
    readingNov, averageNov, rankNOv, myKh) => {
    var newData = my5aAll.push();
    newData.set({
        name: name,
        id: id,
        sex: sex,
        speakingNov: speakingNov,
        writingNov: writingNov,
        listeningNov: listeningNov,
        readingNov: readingNov,
        averageNov: averageNov,
        rankNOv: rankNOv,
        myKh: myKh,
    });
};
const getElementVal = (id) => {
    return document.getElementById(id).value;
};
function selectAllData() {
    document.getElementById('showData').innerHTML = "";
    studentN0 = 0;
    NewBox();
    firebase.database().ref(`${db}/` + `${db3}/`).once('value',
        function (AllRecords) {
            AllRecords.forEach(
                function (CurrentRecord) {
                    var name = CurrentRecord.val().name;
                    var id = CurrentRecord.val().id;
                    var sex = CurrentRecord.val().sex;
                    // var grade = CurrentRecord.val().grade;
                    var speakingNov = CurrentRecord.val().speakingNov;
                    var writingNov = CurrentRecord.val().writingNov;
                    var listeningNov = CurrentRecord.val().listeningNov;
                    var readingNov = CurrentRecord.val().readingNov;
                    var averageNov = CurrentRecord.val().averageNov;
                    var rankNOv = CurrentRecord.val().rankNOv;
                    var myKh = CurrentRecord.val().myKh;
                    addItemsToTable(name, id, sex, speakingNov, writingNov, listeningNov,
                        readingNov, averageNov, rankNOv, myKh);
                }
            );
        });
}
window.onload = selectAllData;
var studentN0;

var stdList = [];
var stdListPop = [];
function addItemsToTable(name, id, sex, speakingNov, writingNov, listeningNov,
    readingNov, averageNov, rankNOv, myKh) {
    var tbody = document.getElementById('showData');
    var trow = document.createElement('tr');
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');




    stdList.push([name, id, sex, speakingNov, writingNov, listeningNov,
        readingNov, averageNov, rankNOv, myKh]);
    td0.innerHTML = ++studentN0;
    td1.innerHTML = id;
    td2.innerHTML = sex;
    td3.innerHTML = speakingNov;
    td4.innerHTML = writingNov;
    td5.innerHTML = listeningNov;
    td6.innerHTML = readingNov;
    td7.innerHTML = averageNov;


    trow.appendChild(td0);
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);

    td1.innerHTML = `<button type="button" class="button-6" onclick="Fillbox(${studentN0})">${myKh}</button>`;
    tbody.appendChild(trow);
}


var Mname = document.getElementById('myName');
var Mid = document.getElementById('myID');
var Msex = document.getElementById('mySex');
var MspeakingNov = document.getElementById('mySnov');
var MwritingNov = document.getElementById('myWnov');
var MlisteningNov = document.getElementById('myLnov');
var MreadingNov = document.getElementById('myRnov');
var MaverageNov = document.getElementById('myAnov');

var submit = document.getElementById("mySubmit");
var update = document.getElementById("myUpdate");
var dele = document.getElementById("myDelete");


function Fillbox(index) {
    if (index == null) {
        submit.style.display = 'inline-block';
        update.style.display = 'none';
        dele.style.display = 'none';
    }
    else {
        --index;
        Mname.value = stdList[index][0];
        Mid.value = stdList[index][1];
        Msex.value = stdList[index][2];
        MspeakingNov.value = stdList[index][3];
        MwritingNov.value = stdList[index][4];
        MlisteningNov.value = stdList[index][5];
        MreadingNov.value = stdList[index][6];
        MaverageNov.value = stdList[index][7];
        submit.style.display = 'none';
        update.style.display = 'inline-block';
        dele.style.display = 'inline-block';


    }
}
function NewBox() {
    submit.style.display = 'inline-block';
    update.style.display = 'none';
    dele.style.display = 'none';
    var Mname = document.getElementById('myName');
    var Mid = document.getElementById('myID');
    var Msex = document.getElementById('mySex');
    var MspeakingNov = document.getElementById('mySnov');
    var MwritingNov = document.getElementById('myWnov');
    var MlisteningNov = document.getElementById('myLnov');
    var MreadingNov = document.getElementById('myRnov');
    var MaverageNov = document.getElementById('myAnov');

    Mname.value = "";
    Mid.value = "";
    Msex.value = "";
    MspeakingNov.value = "";
    MwritingNov.value = "";
    MlisteningNov.value = "";
    MreadingNov.value = "";
    MaverageNov.value = "";
}

function AddStd(e) {
    firebase.database().ref(`${db}/` + `${db3}/` + Mid.value).set(
        {
            name: Mname.value,
            id: Mid.value,
            sex: Msex.value,
            speakingNov: MspeakingNov.value,
            writingNov: MwritingNov.value,
            listeningNov: MlisteningNov.value,
            readingNov: MreadingNov.value,
            averageNov: MaverageNov.value,
            rankNOv: MrankNov.value,
        },
    )
    selectAllData();
    // window.location.reload();

}
function UpStd(e) {
    e.preventDefault();

    firebase.database().ref(`${db}/` + `${db3}/` + Mid.value).update(
        {
            name: Mname.value,
            id: Mid.value,
            sex: Msex.value,
            speakingNov: MspeakingNov.value,
            writingNov: MwritingNov.value,
            listeningNov: MlisteningNov.value,
            readingNov: MreadingNov.value,
            averageNov: MaverageNov.value,
        },
    )
    selectAllData();
    // window.location.reload();

}

function DelStd(e) {
    firebase.database().ref(`${db}/` + `${db3}/` + Mid.value).remove().then(
        function () {
            selectAllData();
            // window.location.reload();
            e.preventDefault();

        }
    )
}
function DelStdAll() {
    firebase.database().ref(db).remove();

    // window.location.reload();
}

//Divid score tables
//Novmber
function adder1() {
    var num5 = parseFloat(document.getElementById('mySnov').value);
    var num6 = parseFloat(document.getElementById('myWnov').value);
    var num7 = parseFloat(document.getElementById('myLnov').value);
    var num8 = parseFloat(document.getElementById('myRnov').value);

    var get2 = num5 + num6 + num7 + num8;
    var total1 = get2 / 4;
    total1 = parseFloat(total1).toFixed(2);
    document.getElementById("myAnov").value = total1;

}
function divid1() {
    var num6 = parseFloat(document.getElementById('myScorenov').value);
    var score1 = num6;
    var get2 = score1 / 3;
    get2 = parseFloat(get2).toFixed(2);
    document.getElementById("myWnov").value = get2;
    document.getElementById("myLnov").value = get2;
    document.getElementById("myRnov").value = get2;

}
// //Save to excel
// function ExportToExcel(type, fn, dl) {
//   var elt = document.getElementById('input5aOct');
//   var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
//   return dl ?
//     XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
//     XLSX.writeFile(wb, fn || ('Student Report Grade 5A.' + (type || 'xlsx')));
// }

// //Sorting without change N0
// $('th:not(:first-child)').click(function(){
//   var table = $(this).parents('table').eq(0)
//   var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
//   this.asc = !this.asc
//   if (!this.asc){rows = rows.reverse()}
//   for (var i = 0; i < rows.length; i++){
//       $(rows[i]).find('td:first').text(i + 1);
//       table.append(rows[i]);
//   }
// })

// function myPicAdd(){
//   var img = document.getElementById("imgView");
//   var inputLink = document.getElementById("picLink");
//   var getLink = inputLink.value;
//   img.src = getLink;
// }
// On Enter keypress
// $('input').keydown(function (event) {
//   if (event.which === 13) {
//     UpStd();
//     event.preventDefault();
//     return false;
//   }
// });