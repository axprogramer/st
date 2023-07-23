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
function selectAllData() {
    // document.getElementById('myScedual').innerHTML = "";
    stdNo = 0;
    firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/`).once('value',
        function (AllRecords) {
            AllRecords.forEach(
                function (outlineData) {
                    var id = outlineData.val().id;
                    var name = outlineData.val().name;
                    var myKh = outlineData.val().myKh;
                    var sex = outlineData.val().sex;
                    var grade = outlineData.val().grade;
                    var stdInfo = outlineData.val().stdInfo;
                    addItemsToTable(
                        id,
                        name,
                        myKh,
                        sex,
                        grade,
                        stdInfo,
                    );
                }
            );
        });
}
window.onload = selectAllData;
var stdNo;
var stdR = [];
function addItemsToTable(
    id,
    name,
    myKh,
    sex,
    grade,
    stdInfo,

) {
    stdR.push([
        id,
        name,
        myKh,
        sex,
        grade,
        stdInfo,
    ]);

    var container = document.getElementById('myPrint');


    let tt = `
                            <div class="card rounded" onclick="Fillbox(${stdNo})" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <h5 class="card-header" style="color: rgb(38, 119, 0);">
                                    <span style="color: blue;">#${++stdNo}</span>  
                                    &nbsp;&nbsp;&nbsp;&nbsp;ឈ្មោះ: ${myKh}
                                </h5>
                                <div class="card-body" >
                                    <h5 class="card-title" style="color: rgb(119, 0, 0);">Infomation</h5>
                                    <p class="card-text">
                                        ភេទ: ${sex}         ថ្នាក់ទី: ${grade}
                                    </p>
                                </div>
                            </div>
    `

    container.innerHTML += tt;
}
var Mother = document.getElementById('myother');
var Mid = document.getElementById('showID');

var BtnSubmit = document.getElementById('mySubmit');
var BtnUpdate = document.getElementById('myUpdate');
var BtnDele = document.getElementById('myDele');
var BtnClearBox = document.getElementById('myClear');
var BtnClearAll = document.getElementById('myClearAll');

function Fillbox(index) {
    if (index == null) {
        // BtnSubmit.style.display = 'inline-block';
        BtnUpdate.style.display = 'none';
        BtnDele.style.display = 'none';
        // BtnClearBox.style.display = 'none';

    }
    else {
        Mid.value = stdR[index][0];
        if (stdR[index][5] == undefined){
            Mother.value = 'Nothing here...';
        }else{

            Mother.value = stdR[index][5];
        }
        // BtnClearBox.style.display = 'inline-block';

        // BtnSubmit.style.display = 'none';
        BtnUpdate.style.display = 'inline-block';
        BtnDele.style.display = 'inline-block';
    }
}

function UpStd(e) {
    firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + Mid.value).update(
        {
            id: Mid.value,
            stdInfo: Mother.value,
        },
    )
    selectAllData();
    e.preventDefault();
    window.location.reload();

}
function DelStd(e) {
    firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + Mid.value).remove().then(
        function () {
            selectAllData();
            // window.location.reload();
            e.preventDefault();

        }
    )
}

document.getElementById('myGradeAct').addEventListener('change', function () {
    var gradeact = document.getElementById('myGradeAct').value;
    localStorage.setItem('stdRgradeAct', gradeact);
    window.location.reload();
})
document.getElementById('myYearAct').addEventListener('change', function () {
    var yeareact = document.getElementById('myYearAct').value;
    localStorage.setItem('stdRyeareAct', yeareact);
    window.location.reload();

})

var dbgradeAct = localStorage.getItem('stdRgradeAct'); // grade activity
var dbyearAct = localStorage.getItem('stdRyeareAct'); // year activity
document.getElementById('myGradeAct').value = dbgradeAct;
document.getElementById('myYearAct').value = dbyearAct;


//Save data to firebase
var sportData = [];
document.getElementById('btnRows').addEventListener('click', function () {
    document.getElementById("alertMag").style.display = "none";
    document.getElementById("alertMagWait").style.display = "block";
    setTimeout(function () {
        setData();
        setTimeout(function () {
            window.location.reload();
        }, 1500)
    }, 1500)
})
// Push data to firebase

document.getElementById("showAlert").style.display = "none";
document.getElementById("alertMagWait").style.display = "none";

// document.getElementById('goPrint').addEventListener('click', function () {
//     var printContents = document.getElementById('myPrint').innerHTML;
//     var originalContents = document.body.innerHTML;
//     document.body.innerHTML = "<html><head><title></title></head><body>" + printContents + "</body>";
//     window.print();
//     document.body.innerHTML = originalContents;
//     window.location.reload();
//     return true;
// })

