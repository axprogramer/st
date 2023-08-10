const firebaseConfig = {
  apiKey: "AIzaSyAJ61CR4hcHajBf8T02wl-REVx8SnRxklE",
  authDomain: "useradmin-cd653.firebaseapp.com",
  databaseURL: "https://useradmin-cd653-default-rtdb.firebaseio.com",
  projectId: "useradmin-cd653",
  storageBucket: "useradmin-cd653.appspot.com",
  messagingSenderId: "51017691764",
  appId: "1:51017691764:web:9f322ae1ee6c00c5ce5721"
};

var db = localStorage.getItem("newGrade");
// var db2 = localStorage.getItem("myData2");
var db3 = localStorage.getItem("newYear");
document.getElementById('enrolGrade').addEventListener('change',function(){
  var newGrade = document.getElementById('enrolGrade').value;
  localStorage.setItem('newGrade', newGrade);
  window.location.reload();
})
document.getElementById('academicYear').addEventListener('change',function(){
  var newYear = document.getElementById('academicYear').value;
  localStorage.setItem('newYear', newYear);
  window.location.reload();
})
document.getElementById('enrolGrade').value = db;
document.getElementById('academicYear').value = db3;
document.getElementById("showGradedata").innerText = db;
document.getElementById("myNewYear").value = db3;
// console.log(db);
// console.log(db3);

firebase.initializeApp(firebaseConfig);
// var db = document.getElementById("dataBase").innerText;

var my5aAll = firebase.database().ref(`${db}/` + `${db3}/`);
function submitForm(e) {
  e.preventDefault();
  var name = getElementVal('myName');
  var id = getElementVal('myID');
  var sex = getElementVal('mySex');
  var grade = getElementVal('myGrade');
  var year = getElementVal('myYear');

  //November
  //Khmer Name
  var myKh = getElementVal('myKh');
  // window.location.reload();
  saveData(name, id, sex, grade, year, myKh);

}
const saveData = (name, id, sex, grade, year, myKh) => {
  var newData = my5aAll.push();
  newData.set({
    name: name,
    id: id,
    sex: sex,
    grade: grade,
    year: year,
    myKh: myKh,
  });
};
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
function selectAllData() {
  document.getElementById('showInput5a').innerHTML = "";
  studentN0 = 0;
  NewBox();
  firebase.database().ref(`${db}/` + `${db3}/`).once('value',
    function (AllRecords) {
      AllRecords.forEach(
        function (CurrentRecord) {
          var name = CurrentRecord.val().name;
          var id = CurrentRecord.val().id;
          var sex = CurrentRecord.val().sex;
          var grade = CurrentRecord.val().grade;
          var year = CurrentRecord.val().year;
          var myKh = CurrentRecord.val().myKh;
          var url = CurrentRecord.val().urlImg;
          addItemsToTable(name, id, sex, grade, year, myKh,url);
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
var stdListPop = [];
function addItemsToTable(name, id, sex, grade, year, myKh,url) {
  var tbody = document.getElementById('showInput5a');
  var trow = document.createElement('tr');
  var td0 = document.createElement('td');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');

  stdList.push([name, id, sex, grade, year, myKh,url]);
  td0.innerHTML = ++studentN0;
  td1.innerHTML = id;
  td2.innerHTML = name;
  td3.innerHTML = myKh;
  td4.innerHTML = sex;
  td5.innerHTML = grade;

  trow.appendChild(td0);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  td1.innerHTML = `<button type="button" class="button-6" onclick="Fillbox(${studentN0})">${myKh}</button>`;
  tbody.appendChild(trow);
  let showRL = document.getElementById('myURL');

  let kk = `
  <p>${url}</p>
  `
  showRL.innerHTML += kk;
}


var Mname = document.getElementById('myName');
var Mkhname = document.getElementById('myKh');
var Mid = document.getElementById('myID');
var Msex = document.getElementById('mySex');
var Mgrade = document.getElementById('myGrade');
var Myear = document.getElementById('myNewYear');
var url = document.getElementById('showURL');

var go = document.getElementById("myGo");
var submit = document.getElementById("mySubmit");
var update = document.getElementById("myUpdate");
var dele = document.getElementById("myDelete");

//Show data input auto
function showAuto() {
  Mname.value = stdList[0][0];
  Mid.value = stdList[0][1];
  Msex.value = stdList[0][2];
  Mgrade.value = stdList[0][3];
  Myear.value = stdList[0][4];
  Mkhname.value = stdList[0][5];
  url.value = stdList[0][6];
  if (stdList[0][6] == undefined){
    document.getElementById('showImgUpload').src = './img/4x6sample.png';
  }else{
    document.getElementById('showImgUpload').src = url.value = stdList[0][6];
  }
  update.style.display = 'inline-block';
  submit.style.display = 'inline-block';
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
  Mgrade.value = stdList[oo][3];
  Myear.value = stdList[oo][4];
  Mkhname.value = stdList[oo][5];
  url.value = stdList[oo][6];
  if (stdList[oo][6] == undefined) {
    document.getElementById('showImgUpload').src = './img/4x6sample.png';
  } else {
    document.getElementById('showImgUpload').src = url.value = stdList[oo][6];
  }

  // document.getElementById('showImgUpload').src = url.value = stdList[oo][6];


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
  Mgrade.value = stdList[oo][3];
  Myear.value = stdList[oo][4];
  Mkhname.value = stdList[oo][5];
  url.value = stdList[oo][6];
  if (stdList[oo][6] == undefined) {
    document.getElementById('showImgUpload').src = './img/4x6sample.png';
  } else {
    document.getElementById('showImgUpload').src = url.value = stdList[oo][6];
  }

  // document.getElementById('showImgUpload').src = url.value = stdList[oo][6];

}
function Fillbox(index) {
  b = index;
  document.getElementById('showNNN').value = index;
  --index;
  Mname.value = stdList[index][0];
  Mid.value = stdList[index][1];
  Msex.value = stdList[index][2];
  Mgrade.value = stdList[index][3];
  Myear.value = stdList[index][4];
  Mkhname.value = stdList[index][5];
  url.value = stdList[index][6];
  if (stdList[index][6] == undefined) {
    document.getElementById('showImgUpload').src = './img/4x6sample.png';
  } else {
    document.getElementById('showImgUpload').src = url.value = stdList[index][6];
  }

  // document.getElementById('showImgUpload').src = url.value = stdList[index][6];
  submit.style.display = 'none';
  update.style.display = 'inline-block';
  dele.style.display = 'inline-block';


  // }
}

function NewBox() {
  submit.style.display = 'inline-block';
  update.style.display = 'none';
  dele.style.display = 'none';
  var Mname = document.getElementById('myName');
  var Mkhname = document.getElementById('myKh');
  var Mid = document.getElementById('myID');
  var Msex = document.getElementById('mySex');
  var Mgrade = document.getElementById('myGrade');

  Mname.value = "";
  Mkhname.value = "";
  Mid.value = "";
  Msex.value = "";
  Mgrade.value = "";
}

function AddStd(e) {
  firebase.database().ref(`${db}/` + `${db3}/` + Mid.value).set(
    {
      name: Mname.value,
      id: Mid.value,
      sex: Msex.value,
      grade: Mgrade.value,
      myKh: Mkhname.value,
      urlImg: url.value,
    },
  )
  document.getElementById("showAlert").style.display = "block";
  document.getElementById("info").innerText = `${Mid.value} has been added!`;
  const sleep = async (milliseconds) => {
    await new Promise(resolve => {
      return setTimeout(resolve, milliseconds);
    });
    document.getElementById("showAlert").style.display = "none";


  };
  sleep(2000);

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
      grade: Mgrade.value,
      myKh: Mkhname.value,
      urlImg: url.value,
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

  selectAllData();
  // window.location.reload();

}

function DelStd(e) {
  firebase.database().ref(`${db}/` + `${db3}/` + Mid.value).remove().then(
    function () {
      document.getElementById("showAlert").style.display = "block";
      document.getElementById("info").innerText = `${Mid.value} has been deleted!`;
      const sleep = async (milliseconds) => {
        await new Promise(resolve => {
          return setTimeout(resolve, milliseconds);
        });
        document.getElementById("showAlert").style.display = "none";


      };
      sleep(2000);

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
document.getElementById("showAlert").style.display = "none";
