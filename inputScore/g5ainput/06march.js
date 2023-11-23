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
          var score = CurrentRecord.val().scoremar;
          var speakingmar = CurrentRecord.val().speakingmar;
          var writingmar = CurrentRecord.val().writingmar;
          var listeningmar = CurrentRecord.val().listeningmar;
          var readingmar = CurrentRecord.val().readingmar;
          var averagemar = CurrentRecord.val().averagemar;
          var myKh = CurrentRecord.val().myKh;
          var hMar = CurrentRecord.val().hMar;
          addItemsToTable(name, id, sex, speakingmar, writingmar, listeningmar,
            readingmar, averagemar, myKh,score,hMar);
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
function addItemsToTable(name, id, sex, speakingmar, writingmar, listeningmar,
  readingmar, averagemar, myKh,score,hMar) {
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
  var td8 = document.createElement('td');
  var td9 = document.createElement('td');

  td3.id = `${id}score`;
  let ssid = `${id}score`;
  let spid = `${id}sp`;
  let wrid = `${id}wr`;
  let lisid = `${id}lis`;
  let reid = `${id}re`;
  let hm = `${id}hm`; //homework

  td4.id = spid;
  td5.id = wrid;
  td6.id = lisid;
  td7.id = reid;
  td8.id = hm;

  stdList.push([name, id, sex, speakingmar, writingmar, listeningmar,
    readingmar, averagemar, myKh,score]);
  td0.innerHTML = ++studentN0;
  td1.innerHTML = id;
  td2.innerHTML = sex;
  if (hMar == undefined) {
    hMar = 0;
  }

  if (speakingmar == undefined) {
    td4.innerHTML = 0;
  } else {

    td4.innerHTML = speakingmar;
  }
  if (writingmar == undefined) {
    td5.innerHTML = 0;
  } else {

    td5.innerHTML = writingmar;
  }
  if (listeningmar == undefined) {
    td6.innerHTML = 0;
  } else {

    td6.innerHTML = listeningmar;
  }
  if (readingmar == undefined) {
    td7.innerHTML = 0;
  } else {

    td7.innerHTML = readingmar;
  }
  if (hMar == undefined) {
    td8.innerHTML = 0;
  } else {

    td8.innerHTML = hMar;
  }
  if (averagemar == undefined) {
    td9.innerHTML = 0;
  } else {

    td9.innerHTML = averagemar;
  }

  if (score == undefined) {
    td3.innerHTML = 0;

  } else {
    td3.innerHTML = score;

  }
  const sleep = async (milliseconds) => {
    await new Promise(resolve => {
      return setTimeout(resolve, milliseconds);
    });
    let ss = document.getElementById(`${ssid}`);
    let shm = document.getElementById(`${hm}`);
    let spK = document.getElementById(`${spid}`);

    ss.addEventListener('click', () => {
      if (td3.innerHTML == 0) {
        td3.innerHTML = '';
      } else {

      }
    })
    shm.addEventListener('click', () => {
      if (td8.innerHTML == 0) {
        td8.innerHTML = '';
      } else {

      }
    })
    spK.addEventListener('click', () => {
      if (td4.innerHTML == 0) {
        td4.innerHTML = '';
      } else {

      }
    })

    var ll = "simple";
    var lll = "unsimple";
    if (db4 == ll) {
      td3.contentEditable = true;
      td4.contentEditable = true;
      td8.contentEditable = true;

    }
    if (db4 == lll) {
      td3.contentEditable = true;
      td4.contentEditable = true;
      td8.contentEditable = true;

    }

    var check = document.getElementById("myCheck");
    if (db4 == ll) {

      check.checked = true;
      shm.addEventListener('input', () => {
        let data = shm.innerHTML;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            hMar: data,
          },
        )
      })
      spK.addEventListener('input', () => {
        let data = spK.innerHTML;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingmar: data,
          },
        )
      })

      ss.addEventListener('input', () => {
        let data = ss.innerHTML;
        let di = td3.innerHTML / 4;
        di = di.toFixed(2).replace(/[.,]00$/, "");
        td4.innerHTML = di;
        td5.innerHTML = di;
        td6.innerHTML = di;
        td7.innerHTML = di;
        let to1 = parseFloat(data) + parseFloat(hMar);
        let sum = to1 / 5;
        sum = sum.toFixed(2).replace(/[.,]00$/, "");
        td9.innerHTML = sum;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingmar: di,
            writingmar: di,
            listeningmar: di,
            readingmar: di,
            averagemar: sum,
            scoremar: data,
          },
        )
      })
    } else if (db4 == lll) {
      check.checked = false;
      shm.addEventListener('input', () => {
        let data = shm.innerHTML;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            hMar: data,
          },
        )
      })
      spK.addEventListener('input', () => {
        let data = spK.innerHTML;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingmar: data,
          },
        )
      })

      ss.addEventListener('input', () => {
        let data = ss.innerHTML;
        let di = td3.innerHTML / 3;
        di = di.toFixed(2).replace(/[.,]00$/, "");
        td5.innerHTML = di;
        td6.innerHTML = di;
        td7.innerHTML = di;
        let speak = td4.innerHTML;
        let toto = parseFloat(data) + parseFloat(speak) + parseFloat(hMar);
        let sub = parseFloat(toto) / 5;
        sub = sub.toFixed(2).replace(/[.,]00$/, "");
        td9.innerHTML = sub;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            writingmar: di,
            listeningmar: di,
            readingmar: di,
            averagemar: sub,
            scoremar: data,
          },
        )
      })
    }



  };
  sleep(1000);

  trow.appendChild(td0);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);
  trow.appendChild(td8);
  trow.appendChild(td9);

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

var submit = document.getElementById("mySubmit");
var update = document.getElementById("myUpdate");
var dele = document.getElementById("myDelete");
//Show data input auto
function showAuto() {
  Mname.value = stdList[0][0];
  Mid.value = stdList[0][1];
  Msex.value = stdList[0][2];
  MspeakingNov.value = stdList[0][3];
  MwritingNov.value = stdList[0][4];
  MlisteningNov.value = stdList[0][5];
  MreadingNov.value = stdList[0][6];
  MaverageNov.value = stdList[0][7];
  update.style.display = 'inline-block';
  dele.style.display = 'inline-block';

}
//Count students in table row
function cccSS() {
  var ss = document.getElementById("myTable");
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
  MspeakingNov.value = stdList[oo][3];
  MwritingNov.value = stdList[oo][4];
  MlisteningNov.value = stdList[oo][5];
  MreadingNov.value = stdList[oo][6];
  MaverageNov.value = stdList[oo][7];

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
  MspeakingNov.value = stdList[oo][3];
  MwritingNov.value = stdList[oo][4];
  MlisteningNov.value = stdList[oo][5];
  MreadingNov.value = stdList[oo][6];
  MaverageNov.value = stdList[oo][7];
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
  MspeakingNov.value = stdList[index][3];
  MwritingNov.value = stdList[index][4];
  MlisteningNov.value = stdList[index][5];
  MreadingNov.value = stdList[index][6];
  MaverageNov.value = stdList[index][7];

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
//     MspeakingNov.value = stdList[index][3];
//     MwritingNov.value = stdList[index][4];
//     MlisteningNov.value = stdList[index][5];
//     MreadingNov.value = stdList[index][6];
//     MaverageNov.value = stdList[index][7];
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
      speakingmar: MspeakingNov.value,
      writingmar: MwritingNov.value,
      listeningmar: MlisteningNov.value,
      readingmar: MreadingNov.value,
      averagemar: MaverageNov.value,
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
      speakingmar: MspeakingNov.value,
      writingmar: MwritingNov.value,
      listeningmar: MlisteningNov.value,
      readingmar: MreadingNov.value,
      averagemar: MaverageNov.value,
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
  var num9 = parseFloat(document.getElementById('myScorenov').value);
  var score1 = num9;
  var get4 = score1 / 4;
  get4 = parseFloat(get4).toFixed(2);
  document.getElementById("myWnov").value = get4;
  document.getElementById("myLnov").value = get4;
  document.getElementById("myRnov").value = get4;
  document.getElementById("mySnov").value = get4;
  document.getElementById("myAnov").value = get4;

}
function scoreFun() {
  var check = document.getElementById("myCheck");
  var ll = "simple";
  var lll = "unsimple";
  if (db4 == ll) {
    document.getElementById('getDi').innerText = ' (/4)'
    check.checked = true;
  } else if (db4 == lll) {
    document.getElementById('getDi').innerText = ' (/3)'
    check.checked = false;
  }
}
scoreFun();
var table1 = document.getElementById("my1stsemetable");
var table2 = document.getElementById("myTable2");
table1.style.display = "none";
table2.style.display = "none";

function newScore() {
  var num5 = parseFloat(document.getElementById('mySnov').value);
  var num6 = parseFloat(document.getElementById('myWnov').value);
  var num7 = parseFloat(document.getElementById('myLnov').value);
  var num8 = parseFloat(document.getElementById('myRnov').value);
  var num9 = parseFloat(document.getElementById('myScorenov').value);

  var sum = num5 + num6 + num7 + num8;
  var div = num9 / 3;
  div = parseFloat(div).toFixed(2);
  var uu = num5 + num9;
  uu = parseFloat(uu).toFixed(2);
  var lll = uu / 4;
  lll = parseFloat(lll).toFixed(2);
  document.getElementById("myWnov").value = div;
  document.getElementById("myLnov").value = div;
  document.getElementById("myRnov").value = div;
  document.getElementById("myAnov").value = lll;

}
document.getElementById('myScorenov').addEventListener('input', function () {
  var ll = "simple";
  var lll = "unsimple";
  var check = document.getElementById("myCheck");
  if (db4 == ll) {
    divid2();
    check.checked = true;
  } else if (db4 == lll) {
    newScore();
    check.checked = false;
  }

})
document.getElementById('mySnov').addEventListener('input', function () {
  var ll = "simple";
  var lll = "unsimple";
  var check = document.getElementById("myCheck");
  if (db4 == ll) {
    divid2();
    check.checked = true;
  } else if (db4 == lll) {
    newScore();
    check.checked = false;
  }
});
var table1 = document.getElementById("my1stsemetable");
var table2 = document.getElementById("myTable2");
table1.style.display = "none";
table2.style.display = "none";
function saveScore(type, fn, dl) {
  var elt = document.getElementById("myShowData");
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl
    ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" })
    : XLSX.writeFile(wb, fn || `${db}/ ` + `${db2}/.` + (type || "xlsx"));
}