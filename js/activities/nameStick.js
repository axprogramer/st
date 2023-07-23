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
    firebase.database().ref(`${dbgradename}/` + `${dbyearname}/`).once('value',
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
    var container = document.getElementById('myShowName');
    var containerPic = document.getElementById('myShowPic');

    let pic = `
            <td class="grid-item">
                <img src="${url}"
                width="110rem"
                >
            </td>
    `
    let tt = `
                                    <tr>
                                        <td style="border: black solid 1px;padding: 5px;width: 25rem;">
                                            ${name}
                                        </td>
                                        <td style="border: black solid 1px; text-align: center;width: 40px;">
                                            ${sex}
                                        </td>
    
                                    </tr>


    `
    if (dbnamepic == 'Pictures'){
        containerPic.innerHTML += pic;

    }else{
        container.innerHTML += tt;

    }
}

document.getElementById('myGradeNameStick').addEventListener('change', function () {
    var gradeNameStick = document.getElementById('myGradeNameStick').value;
    localStorage.setItem('GradeNameStick', gradeNameStick);
    window.location.reload();
})
document.getElementById('myYearNameStick').addEventListener('change', function () {
    var YearNameStick = document.getElementById('myYearNameStick').value;
    localStorage.setItem('YearNameStick', YearNameStick);
    window.location.reload();

})
document.getElementById('namePic').addEventListener('change', function () {
    var namePic = document.getElementById('namePic').value;
    localStorage.setItem('namePic', namePic);
    window.location.reload();

})

var dbgradename = localStorage.getItem('GradeNameStick'); // grade name stick
var dbyearname = localStorage.getItem('YearNameStick'); // year name stick
var dbnamepic = localStorage.getItem('namePic'); // name and pic
document.getElementById('myGradeNameStick').value = dbgradename;
document.getElementById('myYearNameStick').value = dbyearname;
document.getElementById('namePic').value = dbnamepic;


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
