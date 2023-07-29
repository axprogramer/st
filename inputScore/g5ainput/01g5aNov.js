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

// console.log(db4);
// console.log(db2);
// console.log(db3);
firebase.initializeApp(firebaseConfig);
// var actScore = firebase.database().ref(`4A/` + `recordActivity/` + `2022-2023/` + `October`);

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
          var score = CurrentRecord.val().scoreNov;
          var speakingNov = CurrentRecord.val().speakingNov;
          var writingNov = CurrentRecord.val().writingNov;
          var listeningNov = CurrentRecord.val().listeningNov;
          var readingNov = CurrentRecord.val().readingNov;
          var averageNov = CurrentRecord.val().averageNov;
          var rankNOv = CurrentRecord.val().rankNOv;
          var myKh = CurrentRecord.val().myKh;
          addItemsToTable(name, id, sex, speakingNov, writingNov, listeningNov,
            readingNov, averageNov, rankNOv, myKh, score);
          showAuto();
          b = 1;
          document.getElementById('showNNN').value = b;
          cccSS();

        }
      );
    });
}
//Get activity score
getScoreAct();
var actArr = [];
console.log(actArr);
function getScoreAct() {
  firebase.database().ref(`4A/` + `recordActivity/` + `2022-2023/` + `October/`).once('value',
    function (allact) {
      allact.forEach(
        function (getData) {
          var name = getData.val().name;
          var date = getData.val().date;
          var total = getData.val().total;
          actPuch(name, date, total);
        }
      );
    });
}
function actPuch(name, date, total) {
  actArr.push({ name, date, total });

}
function totalCount() {
  var count = actArr.length;
  if (actArr == count) {
  }
}
totalCount();


window.onload = selectAllData;
var studentN0;

var stdList = [];
function addItemsToTable(name, id, sex, speakingNov, writingNov, listeningNov,
  readingNov, averageNov, rankNOv, myKh, score) {
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

  td3.contentEditable = true;
  td3.id = `${id}score`;
  let ssid = `${id}score`;
  let spid = `${id}sp`;
  let wrid = `${id}wr`;
  let lisid = `${id}lis`;
  let reid = `${id}re`;
  td4.id = spid;
  td5.id = wrid;
  td6.id = lisid;
  td7.id = reid;
  stdList.push([name, id, sex, speakingNov, writingNov, listeningNov,
    readingNov, averageNov, rankNOv, myKh, score]);
  td0.innerHTML = ++studentN0;
  td1.innerHTML = id;
  td2.innerHTML = sex;
  td4.innerHTML = speakingNov;
  td5.innerHTML = writingNov;
  td6.innerHTML = listeningNov;
  td7.innerHTML = readingNov;
  td8.innerHTML = averageNov;
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

    ss.addEventListener('click', () => {
      if (td3.innerHTML == 0) {
        td3.innerHTML = '';
      } else {

      }
    })
    ss.addEventListener('input', () => {
      var data = td3.innerHTML;
      let di = td3.innerHTML / 4;
      di = di.toFixed(2).replace(/[.,]00$/, "");
      if (
        di >= 0 
        ) {
        let pi = 0
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >= 0.25
        ) {
        let pi = 0.25
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >= 0.50
        ) {
        let pi = 0.50
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=0.75 
        ) {
        let pi = 0.75
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }


      if (
        di >= 1 
        ) {
        let pi = 1
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >= 1.25
        ) {
        let pi = 1.25
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >= 1.50
        ) {
        let pi = 1.50
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=1.75 
        ) {
        let pi = 1.75
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }

      if (
        di >= 2 
        ) {
        let pi = 2
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >= 2.25
        ) {
        let pi = 2.25
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >= 2.50
        ) {
        let pi = 2.50
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=2.75 
        ) {
        let pi = 2.75
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }


      if (
        di >= 3 
        ) {
        let pi = 3
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >= 3.25
        ) {
        let pi = 3.25
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >= 3.50
        ) {
        let pi = 3.50
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=3.75 
        ) {
        let pi = 3.75
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }



      if (
        di >= 4 
        ) {
        let pi = 4
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >= 4.25
        ) {
        let pi = 4.25
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >= 4.50
        ) {
        let pi = 4.50
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=4.75 
        ) {
        let pi = 4.75
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }




      if (
        di >= 5 
        ) {
        let pi = 5
        td4.innerHTML = 5;
        td5.innerHTML = 5;
        td6.innerHTML = 5;
        td7.innerHTML = 5;
        td8.innerHTML = 5;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >= 5.25
        ) {
        let pi = 5.25
        td4.innerHTML = 5.25;
        td5.innerHTML = 5.25;
        td6.innerHTML = 5.25;
        td7.innerHTML = 5.25;
        td8.innerHTML = 5.25;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >= 5.50
        ) {
        let pi = 5.50
        td4.innerHTML = 5.50;
        td5.innerHTML = 5.50;
        td6.innerHTML = 5.50;
        td7.innerHTML = 5.50;
        td8.innerHTML = 5.50;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=5.75 
        ) {
        let pi = 5.75
        td4.innerHTML = 5.75;
        td5.innerHTML = 5.75;
        td6.innerHTML = 5.75;
        td7.innerHTML = 5.75;
        td8.innerHTML = 5.75;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=6 
        ) {
        let pi = 6
        td4.innerHTML = 6;
        td5.innerHTML = 6;
        td6.innerHTML = 6;
        td7.innerHTML = 6;
        td8.innerHTML = 6;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=6.25 
        ) {
        let pi = 6.25
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=6.75 
        ) {
        let pi = 6.75
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=7 
        ) {
        let pi = 7
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=7.25 
        ) {
        let pi = 7.25
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=7.50 
        ) {
        let pi = 7.50
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=7.75 
        ) {
        let pi = 7.75
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=8 
        ) {
        let pi = 8
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=8.25 
        ) {
        let pi = 8.25
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=8.50 
        ) {
        let pi = 8.50
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=8.75 
        ) {
        let pi = 8.75
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=9 
        ) {
        let pi = 9
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=9.25 
        ) {
        let pi = 9.25
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=9.50 
        ) {
        let pi = 9.50
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di >=9.75 
        ) {
        let pi = 9.75
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      if (
        di == 10 
        ) {
        let pi = 10
        td4.innerHTML = pi;
        td5.innerHTML = pi;
        td6.innerHTML = pi;
        td7.innerHTML = pi;
        td8.innerHTML = pi;
        firebase.database().ref(`${db}/` + `${db3}/` + id).update(
          {
            speakingNov: pi,
            writingNov: pi,
            listeningNov: pi,
            readingNov: pi,
            averageNov: pi,
          },
        )
      }
      firebase.database().ref(`${db}/` + `${db3}/` + id).update(
        {
          scoreNov: data,
        },
      )
    })


  };
  sleep(1000);
  // document.getElementById(`${id}score`).addEventListener('click',()=>{

  // })


  trow.appendChild(td0);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);
  trow.appendChild(td8);

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
var Mscore = document.getElementById('myScorenov');
var span = document.getElementById('span1');

var submit = document.getElementById("mySubmit");
var btnupdate = document.getElementById("myUpdate");
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
  Mscore.value = stdList[0][10];
  btnupdate.style.display = 'inline-block';
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
  Mscore.value = stdList[oo][10];

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
  Mscore.value = stdList[oo][10];
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
  Mscore.value = stdList[index][10];

  submit.style.display = 'none';
  btnupdate.style.display = 'inline-block';
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
  btnupdate.style.display = 'none';
  dele.style.display = 'none';
  var Mname = document.getElementById('myName');
  var Mid = document.getElementById('myID');
  var Msex = document.getElementById('mySex');
  var MspeakingNov = document.getElementById('mySnov');
  var MwritingNov = document.getElementById('myWnov');
  var MlisteningNov = document.getElementById('myLnov');
  var MreadingNov = document.getElementById('myRnov');
  var MaverageNov = document.getElementById('myAnov');
  var Mscore = document.getElementById('myScorenov');
  Mname.value = "";
  Mid.value = "";
  Msex.value = "";
  MspeakingNov.value = "";
  MwritingNov.value = "";
  MlisteningNov.value = "";
  MreadingNov.value = "";
  MaverageNov.value = "";
  Mscore.value = "";
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
  // selectAllData();
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
      scoreNov: Mscore.value,
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
  sleep(2000);
  // selectAllData();
  // window.location.reload();

}

function DelStd(e) {
  firebase.database().ref(`${db}/` + `${db3}/` + Mid.value).remove().then(
    function () {
      // selectAllData();
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
})