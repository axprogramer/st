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
    firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/`).once('value',
        function (AllRecords) {
            AllRecords.forEach(
                function (outlineData) {
                    var name = outlineData.val().name;
                    var myKh = outlineData.val().myKh;
                    var sex = outlineData.val().sex;
                    var grade = outlineData.val().grade;
                    var url = outlineData.val().urlImg;
                    addItemsToTable(
                        name,
                        myKh,
                        sex,
                        grade,
                        url,
                    );
                }
            );
        });
}
window.onload = selectAllData;

function addItemsToTable(
    name,
    myKh,
    sex,
    grade,
    url,

) {
    var container = document.getElementById('viewCard');

    var table = document.createElement('table');
    var tr = document.createElement('tr')
    var td = document.createElement('td')

    // table.className = 'table';
    // td.innerHTML = name;

    // table.appendChild(tr)
    // tr.appendChild(td)

    // container.appendChild(table);

    let tt = `
<div class="card text-center border-card">
                                    <div class="bg-image hover-overlay ripple letCard">
                                        <table class="tgTable kh">
                                            <thead>
                                                <tr>
                                                    <th class="kh middle newFont">
                                                        <p class="schoolBrand">❤️ SALAMOM SCHOOL ❤️
                                                        <p>
                                                            NAME: ${name}
                                                            <br>
                                                            SEX: ${sex}
                                                            <br>
                                                            KHMER NAME: ${myKh}
                                                            <br>
                                                            SUBJJECT: English
                                                            <br>
                                                            GRADE: ${grade}
                                                            <br>
                                                            LEVEL: Let's Go 4
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                        </table>

                                        <div class="black">Academic Year ${dbyearAct}</div>
                                    </div>
                                </div>
    `

    container.innerHTML += tt;
}

document.getElementById('myGradeAct').addEventListener('change', function () {
    var gradeact = document.getElementById('myGradeAct').value;
    localStorage.setItem('cardsgradeAct', gradeact);
    window.location.reload();
})
document.getElementById('myYearAct').addEventListener('change', function () {
    var yeareact = document.getElementById('myYearAct').value;
    localStorage.setItem('cardsyeareAct', yeareact);
    window.location.reload();

})

var dbgradeAct = localStorage.getItem('cardsgradeAct'); // grade activity
var dbyearAct = localStorage.getItem('cardsyeareAct'); // year activity
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

$("textarea").each(function () {
    this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
}).on("input", function () {
    this.style.height = 0;
    this.style.height = (this.scrollHeight) + "px";
});
document.getElementById('goPrint').addEventListener('click', function () {
    var printContents = document.getElementById('myPrint').innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = "<html><head><title></title></head><body>" + printContents + "</body>";
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
    return true;
})
