const firebaseConfig = {
  apiKey: "AIzaSyAJ61CR4hcHajBf8T02wl-REVx8SnRxklE",
  authDomain: "useradmin-cd653.firebaseapp.com",
  databaseURL: "https://useradmin-cd653-default-rtdb.firebaseio.com",
  projectId: "useradmin-cd653",
  storageBucket: "useradmin-cd653.appspot.com",
  messagingSenderId: "51017691764",
  appId: "1:51017691764:web:9f322ae1ee6c00c5ce5721"
};
var db = localStorage.getItem("inputGrade"); //Grade
var db2 = localStorage.getItem("inputMonth"); //Month
var db3 = localStorage.getItem("inputYear"); //Year
var db4 = localStorage.getItem("myData13"); //simple

firebase.initializeApp(firebaseConfig);
var my5aAll = firebase.database().ref(db);
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
function selectAllData() {
  document.getElementById('showData1').innerHTML = "";
  studentN0 = 0;
  NewBox();
  firebase.database().ref(`${db}/` + `${db3}/`).once('value',
    function (AllRecords) {
      AllRecords.forEach(
        function (CurrentRecord) {
          var name = CurrentRecord.val().name;
          var id = CurrentRecord.val().id;
          var sex = CurrentRecord.val().sex;
          var my2Se = CurrentRecord.val().my2Se;
          var my2Sa = CurrentRecord.val().my2Sa;
          var myKh = CurrentRecord.val().myKh;
          addItemsToTable(name, id, sex, my2Se, my2Sa, myKh);
          showAuto();
          b = 1;
          document.getElementById('showNNN').value = b;
          cccSS();
        }
      );
    });
}
window.onload = selectAllData;
var studentN0;

var stdList = [];
function addItemsToTable(name, id, sex, my2Se, my2Sa, myKh) {
  var tbody = document.getElementById('showData1');
  var trow = document.createElement('tr');
  var td0 = document.createElement('td');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');
  var td7 = document.createElement('td');

  stdList.push([name, id, sex, my2Se, my2Sa, myKh]);
  td0.innerHTML = ++studentN0;
  td1.innerHTML = id;
  td2.innerHTML = sex;
  td3.innerHTML = my2Se;
  td4.innerHTML = my2Sa;


  trow.appendChild(td0);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);

  td1.innerHTML = `<button type="button" class="button-7" onclick="Fillbox(${studentN0})">${myKh}</button>`;
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
var firtSescore = document.getElementById('my1Sescore');
var firstSeA = document.getElementById('my1SeA');

var submit = document.getElementById("mySubmit");
var update = document.getElementById("myUpdate");
var dele = document.getElementById("myDelete");

//Show data input auto
function showAuto() {
  Mname.value = stdList[0][0];
  Mid.value = stdList[0][1];
  Msex.value = stdList[0][2];
  firtSescore.value = stdList[0][3];
  firstSeA.value = stdList[0][4];
  update.style.display = 'inline-block';
  dele.style.display = 'inline-block';

}
//Count students in table row
function cccSS() {
  var ss = document.getElementById("myTable2");
  var tbodyRowCount = ss.tBodies[0].rows.length;
  // console.log(tbodyRowCount);
  return tbodyRowCount;
}
// Next data show in input
let b = 0;
function nextBtn() {
  var stdNum = cccSS();
  if (b < stdNum) {
    b++;
    document.getElementById('showNNN').value = b;

  }
  var oo = b;
  // console.log(b);
  --oo;
  Mname.value = stdList[oo][0];
  Mid.value = stdList[oo][1];
  Msex.value = stdList[oo][2];
  firtSescore.value = stdList[oo][3];
  firstSeA.value = stdList[oo][4];

}
function goBack() {
  if (b > 1) {
    b--;
    document.getElementById('showNNN').value = b;
  }
  var oo = b;
  // console.log(oo);
  --oo;
  Mname.value = stdList[oo][0];
  Mid.value = stdList[oo][1];
  Msex.value = stdList[oo][2];
  firtSescore.value = stdList[oo][3];
  firstSeA.value = stdList[oo][4];
}
function Fillbox(index) {
  b = index;
  document.getElementById('showNNN').value = index;
  // if (index == null) {
  //   submit.style.display = 'inline-block';
  //   update.style.display = 'none';
  //   dele.style.display = 'none';
  // }
  // else {
  --index;
  Mname.value = stdList[index][0];
  Mid.value = stdList[index][1];
  Msex.value = stdList[index][2];
  firtSescore.value = stdList[index][3];
  firstSeA.value = stdList[index][4];

  submit.style.display = 'none';
  update.style.display = 'inline-block';
  dele.style.display = 'inline-block';


  // }
}
// function Fillbox(index) {
//   if (index == null) {
//     submit.style.display = 'none';
//     update.style.display = 'none';
//     dele.style.display = 'none';
//   }
//   else {
//     --index;
//     Mname.value = stdList[index][0];
//     Mid.value = stdList[index][1];
//     Msex.value = stdList[index][2];
//     firtSescore.value = stdList[index][3];
//     firstSeA.value = stdList[index][4];
//     submit.style.display = 'none';
//     update.style.display = 'inline-block';
//     dele.style.display = 'none';


//   }
// }
function NewBox() {
  submit.style.display = 'none';
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
  var firtSescore = document.getElementById('my1Sescore');
  var firstSeA = document.getElementById('my1SeA');

  Mname.value = "";
  Mid.value = "";
  Msex.value = "";
  MspeakingNov.value = "";
  MwritingNov.value = "";
  MlisteningNov.value = "";
  MreadingNov.value = "";
  MaverageNov.value = "";
  firtSescore.value = "";
  firstSeA.value = "";
}


function AddStd(e) {
  firebase.database().ref(`${db}/` + `${db3}/` + Mid.value).set(
    {
      name: Mname.value,
      id: Mid.value,
      sex: Msex.value,
      my2Se: firtSescore.value,
      my2Sa: firstSeA.value,
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
      my2Se: firtSescore.value,
      my2Sa: firstSeA.value,
    },
  )
  document.getElementById("showAlert").style.display = "block";
  document.getElementById("info").innerText = `${Mid.value} has been updated!`;
  const sleep = async (milliseconds) => {
    await new Promise(resolve => {
      return setTimeout(resolve, milliseconds);
    });
    document.getElementById("showAlert").style.display = "none";
    nextBtn();

  };
  sleep(1000);

  // selectAllData();
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
  firebase.database().ref(`${db}/` + `${db3}/`).remove();

  // window.location.reload();
}


function divid2() {
  var num6 = parseFloat(document.getElementById('my1Sescore').value);
  var total = num6 / 4;
  total = parseFloat(total).toFixed(2);
  // console.log(total);
  document.getElementById('my1SeA').value = total;
}
var iii = document.getElementById("my1Sescore");
iii.addEventListener('input', divid2, false);

//Hide some inputs
var table1 = document.getElementById("myScoretable1");
var table2 = document.getElementById("myScoretable2");
var table3 = document.getElementById("myTable");
table1.style.display = "none";
table2.style.display = "none";
table3.style.display = "none";
//Style
// var div = document.getElementById("myDiv");
// div.style.backgroundColor = "transparent";
// div.style.padding = "10px";
// div.style.height = "30em";
document.getElementById("myTable2").style.display = "block";
document.getElementById("my1stsemetable").style.display = "block";

