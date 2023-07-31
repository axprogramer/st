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
var dbgradename = localStorage.getItem('GradeNameStick'); // grade name stick
var dbyearname = localStorage.getItem('YearNameStick'); // year name stick
var dbnamepic = localStorage.getItem('namePic'); // name and pic
document.getElementById('myGradeNameStick').value = dbgradename;
document.getElementById('myYearNameStick').value = dbyearname;
document.getElementById('namePic').value = dbnamepic;

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
    let gradeName = '';
    if (dbgradename == '1A'){
        gradeName = '១ «ក»';
    }
    else if(dbgradename == '1B'){
        gradeName = '១ «ខ»';
    }
    if (dbgradename == '2A'){
        gradeName = '២ «ក»';
    }
    else if(dbgradename == '2B'){
        gradeName = '២ «ខ»';
    }
    if (dbgradename == '3A'){
        gradeName = '៣ «ក»';
    }
    else if(dbgradename == '3B'){
        gradeName = '៣ «ខ»';
    }
    if (dbgradename == '4A'){
        gradeName = '៤ «ក»';
    }
    else if(dbgradename == '4B'){
        gradeName = '៤ «ខ»';
    }
    if (dbgradename == '5A'){
        gradeName = '៥ «ក»';
    }
    else if(dbgradename == '5B'){
        gradeName = '៥ «ខ»';
    }
    if (dbgradename == '6A'){
        gradeName = '៦ «ក»';
    }
    else if(dbgradename == '6B'){
        gradeName = '៦ «ខ»';
    }
    let pic = `
            <td class="grid-item">
                <img src="${url}"
                width="110rem"
                >
            </td>
    `
    let tt = `
                                    <tr>
                                        <td style="border: black solid 1px;padding: 7px;width: 5rem;font-weight: bold;">Name </td>

                                        <td style="border: black solid 1px;text-align: center;padding: 7px;width: 25rem;font-weight: bold;">
                                            ${name}
                                        </td>
                                        <td style="border: black solid 1px; text-align: center;width: 10rem;font-weight: bold;">
                                         Grade   ${grade}
                                        </td>
    
                                    </tr>


    `
    let khname = `
        <tr>
                <td style="border: black solid 1px;padding: 7px;width: 5rem;font-weight: bold;">ឈ្មោះ </td>
                <td style="border: black solid 1px;padding: 7px;width: 20rem;font-weight: bold;">
                                            ${myKh}
                                        </td>
                <td style="border: black solid 1px; text-align: center;width: 15rem;font-weight: bold;">
                                           ថ្នាក់ទី  ${gradeName}
                                        </td>

        </tr>
    `
    if (dbnamepic == 'Pictures') {
        containerPic.innerHTML += pic;

    } else if (dbnamepic == 'Name') {
        container.innerHTML += tt;

    } else {
        container.innerHTML += khname;
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
