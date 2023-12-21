const firebaseConfig = {
  apiKey: "AIzaSyAJ61CR4hcHajBf8T02wl-REVx8SnRxklE",
  authDomain: "useradmin-cd653.firebaseapp.com",
  databaseURL: "https://useradmin-cd653-default-rtdb.firebaseio.com",
  projectId: "useradmin-cd653",
  storageBucket: "useradmin-cd653.appspot.com",
  messagingSenderId: "51017691764",
  appId: "1:51017691764:web:9f322ae1ee6c00c5ce5721"
};
var db = localStorage.getItem("preGrade"); //Grade
var db2 = localStorage.getItem("preMonth"); //Month
var db3 = localStorage.getItem("preYear");  //Year

firebase.initializeApp(firebaseConfig);
// var db = document.getElementById("dataBase").innerText;
document.getElementById('year1').innerHTML = db3;
document.getElementById('year2').innerHTML = db3;
document.getElementById('year3').innerHTML = db3;
function myPrintNov() {
  document.getElementById('tbody3').innerHTML = "";
  document.getElementById('tbodySave').innerHTML = "";
  document.getElementById('tbodyView').innerHTML = "";
  studentN0 = 0;
  firebase.database().ref(`${db}/` + `${db3}/`).once('value',
    function (AllRecordsPrint) {
      AllRecordsPrint.forEach(
        function (CurrentRecord) {
        }
      );
      GetData2(AllRecordsPrint);
      GetDataSave2(AllRecordsPrint);
      GetDataView(AllRecordsPrint);

    });
}
function GetData2(datas) {
  let tbody = document.getElementById("tbody3");
  let No = 0;
  let students = [];

  datas.forEach((data) => {
    var name = data.val().name;
    var sex = data.val().sex;
    var speakingjun = data.val().speakingjun;
    var writingjun = data.val().writingjun;
    var listeningjun = data.val().listeningjun;
    var readingjun = data.val().readingjun;
    var averagejun = data.val().averagejun;
    var myKh = data.val().myKh;
    var hJun = data.val().hJun;

    if (writingjun == undefined) {
      writingjun = 0;
    }
    if (listeningjun == undefined) {
      listeningjun = 0;
    }
    if (readingjun == undefined) {
      readingjun = 0;
    }
    if (averagejun == undefined) {
      averagejun = 0;
    }
    if (speakingjun == undefined) {
      speakingjun = 0;
    }
    if (hJun == undefined) {
      hJun = 0;
    }

    students.push({
      name,
      sex,
      speakingjun,
      writingjun,
      listeningjun,
      readingjun,
      averagejun,
      myKh,
      hJun,
    });
  });

  students.sort(function (a, b) { return b.averagejun - a.averagejun });

  for (let i = 0; i < students.length; i++) {
    let avg = students[i].averagejun;
    let studentsWithRank = students.filter(
      (student) => student.averagejun === avg
    );
    for (let student of studentsWithRank) {
      student.Rank = i + 1;
    }
    i += studentsWithRank.length - 1;
  }

  students.forEach((student) => {
    No++;
    let speak1 = parseFloat(student.speakingjun);
    speak1 = speak1.toFixed(2);
    let speak2 = parseFloat(student.writingjun);
    speak2 = speak2.toFixed(2);
    let speak3 = parseFloat(student.listeningjun);
    speak3 = speak3.toFixed(2);
    let speak4 = parseFloat(student.readingjun);
    speak4 = speak4.toFixed(2);
    let speak5 = parseFloat(student.hJun);
    speak5 = speak5.toFixed(2);
    let speak6 = parseFloat(student.averagejun);
    speak6 = speak6.toFixed(2);

    let tr = `
        <td>${No}</td>
        <td>${student.name}</td>
        <td>${student.sex}</td>
        <td>${speak1}</td>
        <td>${speak2}</td>
        <td>${speak3}</td>
        <td>${speak4}</td>
        <td>${speak5}</td>
        <td>${speak6}</td>
            <td>${student.Rank}</td>
    `;
    tbody.innerHTML += tr;
  });
}
function GetDataView(datas) {
  let tbody = document.getElementById("tbodyView");
  let No = 0;
  let students = [];

  datas.forEach((data) => {
    var name = data.val().name;
    var sex = data.val().sex;
    var speakingjun = data.val().speakingjun;
    var writingjun = data.val().writingjun;
    var listeningjun = data.val().listeningjun;
    var readingjun = data.val().readingjun;
    var averagejun = data.val().averagejun;
    var myKh = data.val().myKh;
    var hJun = data.val().hJun;
    var spJun = data.val().sportJun;
    if (writingjun == undefined) {
      writingjun = 0;
    }
    if (listeningjun == undefined) {
      listeningjun = 0;
    }
    if (readingjun == undefined) {
      readingjun = 0;
    }
    if (averagejun == undefined) {
      averagejun = 0;
    }
    if (speakingjun == undefined) {
      speakingjun = 0;
    }
    if (hJun == undefined) {
      hJun = 0;
    }


    students.push({
      name,
      sex,
      speakingjun,
      writingjun,
      listeningjun,
      readingjun,
      averagejun,
      myKh,
      hJun,
      spJun,
    });
  });

  students.sort(function (a, b) { return b.averagejun - a.averagejun });

  for (let i = 0; i < students.length; i++) {
    let avg = students[i].averagejun;
    let studentsWithRank = students.filter(
      (student) => student.averagejun === avg
    );
    for (let student of studentsWithRank) {
      student.Rank = i + 1;
    }
    i += studentsWithRank.length - 1;
  }

  students.forEach((student) => {
    No++;
    var mention = "";
    var my = parseFloat(student.averagejun);
    if (my <= 4.9) {
      mention = "Fail"
    } else if (my <= 5) {
      mention = "Poor"
    } else if (my <= 6.4) {
      mention = "Faily Good";
    } else if (my <= 7.9) {
      mention = "Good";
    } else if (my <= 9.4) {
      mention = "Very Good";
    } else if (my <= 10) {
      mention = "Excellent";
    }
    if(student.spJun ==  undefined){
      student.spJun = '0.00';
    }
    let speak1 = parseFloat(student.speakingjun);
    speak1 = speak1.toFixed(2);
    let speak2 = parseFloat(student.writingjun);
    speak2 = speak2.toFixed(2);
    let speak3 = parseFloat(student.listeningjun);
    speak3 = speak3.toFixed(2);
    let speak4 = parseFloat(student.readingjun);
    speak4 = speak4.toFixed(2);
    let speak5 = parseFloat(student.hJun);
    speak5 = speak5.toFixed(2);
    let speak6 = parseFloat(student.averagejun);
    speak6 = speak6.toFixed(2);

    let tr = `
        <td>${No}</td>
        <td>${student.name}</td>
        <td>${student.sex}</td>
        <td>${student.spJun}</td>
        <td>${speak1}</td>
        <td>${speak2}</td>
        <td>${speak3}</td>
        <td>${speak4}</td>
        <td>${speak5}</td>
        <td>${speak6}</td>
            <td>${student.Rank}</td>
            <td style="display: none;">${mention}${student.sex}</td> 
    `;
    tbody.innerHTML += tr;
  });
}
function GetDataSave2(datas) {
  let tbody = document.getElementById("tbodySave");
  let No = 0;
  let students = [];

  datas.forEach((data) => {
    var name = data.val().name;
    var sex = data.val().sex;
    var speakingjun = data.val().speakingjun;
    var writingjun = data.val().writingjun;
    var listeningjun = data.val().listeningjun;
    var readingjun = data.val().readingjun;
    var averagejun = data.val().averagejun;
    var myKh = data.val().myKh;
    var hJun = data.val().hJun;
    var spJun = data.val().sportJun;

    if (writingjun == undefined) {
      writingjun = 0;
    }
    if (listeningjun == undefined) {
      listeningjun = 0;
    }
    if (readingjun == undefined) {
      readingjun = 0;
    }
    if (averagejun == undefined) {
      averagejun = 0;
    }
    if (speakingjun == undefined) {
      speakingjun = 0;
    }
    if (hJun == undefined) {
      hJun = 0;
    }

    students.push({
      name,
      myKh,
      sex,
      speakingjun,
      writingjun,
      listeningjun,
      readingjun,
      averagejun,
      hJun,
      spJun,
    });
  });

  // students.sort(function(a,b){return b.averagejun - a.averagejun });

  for (let i = 0; i < students.length; i++) {
    let avg = students[i].averagejun;
    let studentsWithRank = students.filter(
      (student) => student.averagejun === avg
    );
    for (let student of studentsWithRank) {
      student.Rank = i + 1;
    }
    i += studentsWithRank.length - 1;
  }

  students.forEach((student) => {
    No++;
    let ddd = parseFloat(student.averagejun);
    if (ddd >= 0.25) {
      student.averagejun = '0.25';
    }
    if (ddd >= 0.50) {
      student.averagejun = '0.50';
    }
    if (ddd >= 0.75) {
      student.averagejun = '0.75';
    }
    if (ddd >= 1) {
      student.averagejun = '1';
    }
    if (ddd >= 1.25) {
      student.averagejun = '1.25';
    }
    if (ddd >= 1.50) {
      student.averagejun = '1.50';
    }
    if (ddd >= 1.75) {
      student.averagejun = '1.75';
    }
    if (ddd >= 2) {
      student.averagejun = '2';
    }
    if (ddd >= 2.25) {
      student.averagejun = '2.25';
    }
    if (ddd >= 2.50) {
      student.averagejun = '2.50';
    }
    if (ddd >= 2.75) {
      student.averagejun = '2.75';
    }
    if (ddd >= 3) {
      student.averagejun = '3';
    }
    if (ddd >= 3.25) {
      student.averagejun = '3.25';
    }
    if (ddd >= 3.50) {
      student.averagejun = '3.50';
    }
    if (ddd >= 3.75) {
      student.averagejun = '3.75';
    }
    if (ddd >= 4) {
      student.averagejun = '4';
    }
    if (ddd >= 4.25) {
      student.averagejun = '4.25';
    }
    if (ddd >= 4.50) {
      student.averagejun = '4.50';
    }
    if (ddd >= 4.75) {
      student.averagejun = '4.75';
    }
    if (ddd >= 5) {
      student.averagejun = '5';
    }
    if (ddd >= 5.25) {
      student.averagejun = '5.25';
    }
    if (ddd >= 5.50) {
      student.averagejun = '5.50';
    }
    if (ddd >= 5.75) {
      student.averagejun = '5.75';
    }
    if (ddd >= 6) {
      student.averagejun = '6';
    }
    if (ddd >= 6.25) {
      student.averagejun = '6.25';
    }
    if (ddd >= 6.50) {
      student.averagejun = '6.50';
    }
    if (ddd >= 6.75) {
      student.averagejun = '6.75';
    }
    if (ddd >= 7) {
      student.averagejun = '7';
    }
    if (ddd >= 7.25) {
      student.averagejun = '7.25';
    }
    if (ddd >= 7.50) {
      student.averagejun = '7.50';
    }
    if (ddd >= 7.75) {
      student.averagejun = '7.75';
    }
    if (ddd >= 8) {
      student.averagejun = '8';
    }
    if (ddd >= 8.25) {
      student.averagejun = '8.25';
    }
    if (ddd >= 8.50) {
      student.averagejun = '8.50';
    }
    if (ddd >= 8.75) {
      student.averagejun = '8.75';
    }
    if (ddd >= 9) {
      student.averagejun = '9';
    }
    if (ddd >= 9.25) {
      student.averagejun = '9.25';
    }
    if (ddd >= 9.50) {
      student.averagejun = '9.50';
    }
    if (ddd >= 9.75) {
      student.averagejun = '9.75';
    }
    if (ddd >= 10) {
      student.averagejun = '10';
    }
    if(student.spJun == undefined){
      student.spJun = '0.00';
    }

    let tr = `
            <td>${No}</td>
            <td>${student.myKh}</td>
            <td>${student.sex}</td>
            <td>${student.hJun}</td>
            <td>${student.averagejun}</td>
            <td>${student.spJun}</td>
    `;
    tbody.innerHTML += tr;
  });
}

function myNov() {
  var date = document.getElementById("inDate").value;
  document.getElementById("showDate").innerText = date;

  var newstr = document.getElementById("myNovPrint").innerHTML;
  var oldstr = document.body.innerHTML;
  document.body.innerHTML = newstr;
  window.print();
  document.body.innerHTML = oldstr;
  // window.location.reload();
  return false;
}
function addClassNov() {
  var els = document.querySelectorAll("#myNovemberT td:nth-child(8)");
  var len = els.length;
  for (var i = 0, len = els.length; i < len; i++) {
    els[i].classList.add("myScoreNov"); //To add class on top of existing ones
  }
}
function saveNov(type, fn, dl) {
  var elt = document.getElementById("myNovemberSaveT2");
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl
    ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" })
    : XLSX.writeFile(wb, fn ||  `${db}/ ` + `${db2}/.` + (type || "xlsx"));
}
window.onload = myPrintNov;


$(document).ready(function () {
  var Sf = "F";
  var failM = "FailM";
  var failF = "FailF";
  const sleep = async (milliseconds) => {
    await new Promise(resolve => {
      return setTimeout(resolve, milliseconds);
    });
    getOccurance(Sf);

  };
  sleep(3000);
  function getOccurance(Sf) {
    getOccurancefailM(failM);
    getOccurancefailF(failF);
    var f2 = document.getElementById("ssTotal").innerHTML;
    var m1 = document.getElementById("fMst").innerHTML;
    var m2 = document.getElementById("ffst").innerHTML;
    var tfail = document.getElementById("fasTotal");
    var pass = document.getElementById("PsTotal");
    var showw = document.getElementById("fFails");
    var sumFs = parseFloat(m1) + parseFloat(m2);
    var sum = f2 - sumFs;
    pass.innerHTML = sum;
    tfail.innerHTML = sumFs;
    showw.innerHTML = m2;
    document.getElementById('TotalSs2').innerHTML = sum;

    var noOfOccurance = 0;

    $("#tbody3 td").each(function (ind, obj) {
      if (Sf == $.trim($(obj).text())) noOfOccurance++;

    });

    var show = document.getElementById("TotalSF");
    show.innerHTML = noOfOccurance;
    var show3 = document.getElementById("TotalSF2");
    var show4 = document.getElementById("fsTotal");
    var f1 = document.getElementById("sFail");
    // show3.innerHTML = noOfOccurance;
    show4.innerHTML = noOfOccurance;
    f1.innerHTML = sumFs;
    let girlFail = parseFloat(noOfOccurance) - parseFloat(sumFs);
    show3.innerHTML = girlFail;

  }
  // Male
  function getOccurancefailM(failM) {
    var failSM = 0;

    $("#tbodyView td").each(function (ind, obj) {
      if (failM == $.trim($(obj).text())) failSM++;

    });

    var show2 = document.getElementById("fMst");
    show2.innerHTML = failSM;

  }
  // Female
  function getOccurancefailF(failF) {
    var failSF = 0;

    $("#tbodyView td").each(function (ind, obj) {
      if (failF == $.trim($(obj).text())) failSF++;

    });

    var show2 = document.getElementById("ffst");
    show2.innerHTML = failSF;

  }

})
function totalStudent() {
  var ss = document.getElementById("myTableVivew");
  var tbodyRowCount = ss.tBodies[0].rows.length;
  // var rowCount = document.getElementById('tbodyView').rows.length;
  var show = document.getElementById("TotalSs");
  var show3 = document.getElementById("ssTotal");
  show.innerHTML = tbodyRowCount;
  show3.innerHTML = tbodyRowCount;
  var show2 = document.getElementById("TotalSs2");
  show2.innerHTML = tbodyRowCount;

}
const sleep = async (milliseconds) => {
  await new Promise(resolve => {
    return setTimeout(resolve, milliseconds);
  });
  totalStudent();

};
sleep(3000);
var sss = document.getElementById("view2");
var sss1 = document.getElementById("view3");
sss.style.display = "none";
sss1.style.display = "none";
document.getElementById("showMyTable").style.display = "block";