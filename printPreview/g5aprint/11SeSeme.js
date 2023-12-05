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
document.getElementById('year1').innerHTML = db3;
document.getElementById('year2').innerHTML = db3;
document.getElementById('year3').innerHTML = db3;

firebase.initializeApp(firebaseConfig);
// var db = document.getElementById("dataBase").innerText;

function myPrintNov() {
  document.getElementById('tbody4').innerHTML = "";
  document.getElementById('tbodySave1').innerHTML = "";
  document.getElementById('tbodyView1').innerHTML = "";
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
  let tbody = document.getElementById("tbody4");
  let No = 0;
  let students = [];

  datas.forEach((data) => {
    var name = data.val().name;
    var sex = data.val().sex;
    var grade = data.val().grade;
    var my2Se = data.val().my2Se;
    var my2Sa = data.val().my2Sa;
    var my2SR = data.val().my2SR;
    var my2SM = data.val().my2SM;
    var myKh = data.val().myKh;
    if (my2Se == undefined) {
      my2Se = 0;
    }
    if (my2Sa == undefined) {
      my2Sa = 0;
    }
    if (my2SR == undefined) {
      my2SR = 0;
    }
    if (my2SM == undefined) {
      my2SM = 0;
    }


    students.push({
      name,
      sex,
      grade,
      my2Se,
      my2Sa,
      my2SR,
      my2SM,
      myKh,
    });
  });
  students.sort(function (a, b) { return b.my2Sa - a.my2Sa });

  for (let i = 0; i < students.length; i++) {
    let avg = students[i].my2Sa;
    let studentsWithRank = students.filter(
      (student) => student.my2Sa === avg
    );
    for (let student of studentsWithRank) {
      student.Rank = i + 1;
    }
    i += studentsWithRank.length - 1;
  }

  students.forEach((student) => {
    No++;
    var mention = "";
    var my = parseFloat(student.my2Sa);
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
    let speak1 = parseFloat(student.my2Se);
    speak1 = speak1.toFixed(2);
    let speak2 = parseFloat(student.my2Sa);
    speak2 = speak2.toFixed(2);

    let tr = `
            <td>${No}</td>
            <td>${student.name}</td>
            <td>${student.sex}</td>
            <td>${student.grade}</td>
            <td>${speak1}</td>
            <td>${speak2}</td>
            <td>${student.Rank}</td>
            <td>${mention}</td>
    `;
    tbody.innerHTML += tr;
  });
}
function GetDataView(datas) {
  let tbody = document.getElementById("tbodyView1");
  let No = 0;
  let students = [];

  datas.forEach((data) => {
    var name = data.val().name;
    var sex = data.val().sex;
    var grade = data.val().grade;
    var my2Se = data.val().my2Se;
    var my2Sa = data.val().my2Sa;
    var my2SR = data.val().my2SR;
    var my2SM = data.val().my2SM;
    var myKh = data.val().myKh;
    if (my2Se == undefined) {
      my2Se = 0;
    }
    if (my2Sa == undefined) {
      my2Sa = 0;
    }
    if (my2SR == undefined) {
      my2SR = 0;
    }
    if (my2SM == undefined) {
      my2SM = 0;
    }


    students.push({
      name,
      sex,
      grade,
      my2Se,
      my2Sa,
      my2SR,
      my2SM,
      myKh,
    });
  });

  students.sort(function (a, b) { return b.my2Sa - a.my2Sa });

  for (let i = 0; i < students.length; i++) {
    let avg = students[i].my2Sa;
    let studentsWithRank = students.filter(
      (student) => student.my2Sa === avg
    );
    for (let student of studentsWithRank) {
      student.Rank = i + 1;
    }
    i += studentsWithRank.length - 1;
  }

  students.forEach((student) => {
    No++;
    var mention = "";
    var my = parseFloat(student.my2Sa);
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
    let speak1 = parseFloat(student.my2Se);
    speak1 = speak1.toFixed(2);
    let speak2 = parseFloat(student.my2Sa);
    speak2 = speak2.toFixed(2);

    let tr = `
            <td>${No}</td>
            <td>${student.name}</td>
            <td>${student.sex}</td>
              <td>${student.grade}</td>
            <td>${speak1}</td>
            <td>${speak2}</td>
              <td>${student.Rank}</td>
              <td>${mention}</td>
            <td style="display: none;">${mention}${student.sex}</td> 
    `;
    tbody.innerHTML += tr;
  });
}
function GetDataSave2(datas) {
  let tbody = document.getElementById("tbodySave1");
  let No = 0;
  let students = [];

  datas.forEach((data) => {
    var name = data.val().name;
    var sex = data.val().sex;
    var grade = data.val().grade;
    var my2Se = data.val().my2Se;
    var my2Sa = data.val().my2Sa;
    var my2SR = data.val().my2SR;
    var my2SM = data.val().my2SM;
    var myKh = data.val().myKh;


    students.push({
      name,
      myKh,
      sex,
      grade,
      my2Se,
      my2Sa,
      my2SR,
      my2SM,
    });
  });

  // students.sort(function(a,b){return b.my2Sa - a.my2Sa });

  for (let i = 0; i < students.length; i++) {
    let avg = students[i].my2Sa;
    let studentsWithRank = students.filter(
      (student) => student.my2Sa === avg
    );
    for (let student of studentsWithRank) {
      student.Rank = i + 1;
    }
    i += studentsWithRank.length - 1;
  }

  students.forEach((student) => {
    No++;
    let ddd = parseFloat(student.my2Sa);
    if (ddd >= 0.25) {
      student.my2Sa = '0.25';
    }
    if (ddd >= 0.50) {
      student.my2Sa = '0.50';
    }
    if (ddd >= 0.75) {
      student.my2Sa = '0.75';
    }
    if (ddd >= 1) {
      student.my2Sa = '1';
    }
    if (ddd >= 1.25) {
      student.my2Sa = '1.25';
    }
    if (ddd >= 1.50) {
      student.my2Sa = '1.50';
    }
    if (ddd >= 1.75) {
      student.my2Sa = '1.75';
    }
    if (ddd >= 2) {
      student.my2Sa = '2';
    }
    if (ddd >= 2.25) {
      student.my2Sa = '2.25';
    }
    if (ddd >= 2.50) {
      student.my2Sa = '2.50';
    }
    if (ddd >= 2.75) {
      student.my2Sa = '2.75';
    }
    if (ddd >= 3) {
      student.my2Sa = '3';
    }
    if (ddd >= 3.25) {
      student.my2Sa = '3.25';
    }
    if (ddd >= 3.50) {
      student.my2Sa = '3.50';
    }
    if (ddd >= 3.75) {
      student.my2Sa = '3.75';
    }
    if (ddd >= 4) {
      student.my2Sa = '4';
    }
    if (ddd >= 4.25) {
      student.my2Sa = '4.25';
    }
    if (ddd >= 4.50) {
      student.my2Sa = '4.50';
    }
    if (ddd >= 4.75) {
      student.my2Sa = '4.75';
    }
    if (ddd >= 5) {
      student.my2Sa = '5';
    }
    if (ddd >= 5.25) {
      student.my2Sa = '5.25';
    }
    if (ddd >= 5.50) {
      student.my2Sa = '5.50';
    }
    if (ddd >= 5.75) {
      student.my2Sa = '5.75';
    }
    if (ddd >= 6) {
      student.my2Sa = '6';
    }
    if (ddd >= 6.25) {
      student.my2Sa = '6.25';
    }
    if (ddd >= 6.50) {
      student.my2Sa = '6.50';
    }
    if (ddd >= 6.75) {
      student.my2Sa = '6.75';
    }
    if (ddd >= 7) {
      student.my2Sa = '7';
    }
    if (ddd >= 7.25) {
      student.my2Sa = '7.25';
    }
    if (ddd >= 7.50) {
      student.my2Sa = '7.50';
    }
    if (ddd >= 7.75) {
      student.my2Sa = '7.75';
    }
    if (ddd >= 8) {
      student.my2Sa = '8';
    }
    if (ddd >= 8.25) {
      student.my2Sa = '8.25';
    }
    if (ddd >= 8.50) {
      student.my2Sa = '8.50';
    }
    if (ddd >= 8.75) {
      student.my2Sa = '8.75';
    }
    if (ddd >= 9) {
      student.my2Sa = '9';
    }
    if (ddd >= 9.25) {
      student.my2Sa = '9.25';
    }
    if (ddd >= 9.50) {
      student.my2Sa = '9.50';
    }
    if (ddd >= 9.75) {
      student.my2Sa = '9.75';
    }
    if (ddd >= 10) {
      student.my2Sa = '10';
    }

    var mention = "";
    var my = parseFloat(student.my2Sa);
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

    let tr = `
            <td>${No}</td>
            <td>${student.name}</td>
            <td>${student.myKh}</td>
            <td>${student.sex}</td>
              <td>${student.grade}</td>
              <td>${student.my2Se}</td>
              <td>${student.my2Sa}</td>
              <td>${student.Rank}</td>
              <td>${mention}</td>
    `;
    tbody.innerHTML += tr;
  });
}

function myNov() {
  var date = document.getElementById("inDate").value;
  document.getElementById("showDate1").innerText = date;

  var newstr = document.getElementById("myfirstSemePrint").innerHTML;
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
  var elt = document.getElementById("myfirstSemeSaveT2");
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl
    ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" })
    : XLSX.writeFile(wb, fn || `${db}/ ` + `${db2}/.` + (type || "xlsx"));
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
    var showw = document.getElementById("fFails1");
    var sumFs = parseFloat(m1) + parseFloat(m2);
    var sum = f2 - sumFs;
    pass.innerHTML = sum;
    tfail.innerHTML = sumFs;
    showw.innerHTML = m2;
    document.getElementById('TotalSs3').innerHTML = sum;

    var noOfOccurance = 0;

    $("#tbody4 td").each(function (ind, obj) {
      if (Sf == $.trim($(obj).text())) noOfOccurance++;

    });

    var show = document.getElementById("TotalSF1");
    show.innerHTML = noOfOccurance;
    var show3 = document.getElementById("TotalSF3");
    var show4 = document.getElementById("fsTotal");
    var f1 = document.getElementById("sFail1");
    // show3.innerHTML = noOfOccurance;
    show4.innerHTML = noOfOccurance;
    f1.innerHTML = sumFs;
    let girlFail = parseFloat(noOfOccurance) - parseFloat(sumFs);
    show3.innerHTML = girlFail;

  }
  // Male
  function getOccurancefailM(failM) {
    var failSM = 0;

    $("#tbodyView1 td").each(function (ind, obj) {
      if (failM == $.trim($(obj).text())) failSM++;

    });

    var show2 = document.getElementById("fMst");
    show2.innerHTML = failSM;

  }
  // Female
  function getOccurancefailF(failF) {
    var failSF = 0;

    $("#tbodyView1 td").each(function (ind, obj) {
      if (failF == $.trim($(obj).text())) failSF++;

    });

    var show2 = document.getElementById("ffst");
    show2.innerHTML = failSF;

  }

})
function totalStudent() {
  var ss = document.getElementById("myTableVivew1");
  var tbodyRowCount = ss.tBodies[0].rows.length;
  // var rowCount = document.getElementById('tbodyView1').rows.length;
  var show = document.getElementById("TotalSs1");
  var show3 = document.getElementById("ssTotal");
  show.innerHTML = tbodyRowCount;
  show3.innerHTML = tbodyRowCount;
  var show2 = document.getElementById("TotalSs3");
  show2.innerHTML = tbodyRowCount;

}
const sleep = async (milliseconds) => {
  await new Promise(resolve => {
    return setTimeout(resolve, milliseconds);
  });
  totalStudent();

};
sleep(3000);

var sss = document.getElementById("view1");
var sss1 = document.getElementById("view3");
sss.style.display = "none";
sss1.style.display = "none";
document.getElementById("showMyTable").style.display = "block";