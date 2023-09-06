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

document.getElementById('myMonthAct').addEventListener('change', function () {
    var monthhomework = document.getElementById('myMonthAct').value;
    localStorage.setItem('getmonthhomework', monthhomework);
    window.location.reload();

})
document.getElementById('myDivide').addEventListener('change', function () {
    var getDividehomework = document.getElementById('myDivide').value;
    localStorage.setItem('getDividehomework', getDividehomework);
    window.location.reload();

})
document.getElementById('myGradeAct').addEventListener('change', function () {
    var gradehomework = document.getElementById('myGradeAct').value;
    localStorage.setItem('getgradehomework', gradehomework);
    window.location.reload();

})
document.getElementById('myYearAct').addEventListener('change', function () {
    var yearehomework = document.getElementById('myYearAct').value;
    localStorage.setItem('getyearehomework', yearehomework);
    window.location.reload();

})

let dbmonthAct = localStorage.getItem('getmonthhomework'); //Month
let dbdiviAct = localStorage.getItem('getDividehomework'); //Divided
let dbgradeAct = localStorage.getItem('getgradehomework'); //Grade
let dbyearAct = localStorage.getItem('getyearehomework'); //Year

document.getElementById('myMonthAct').value = dbmonthAct;
document.getElementById('myDivide').value = dbdiviAct;
document.getElementById('myGradeAct').value = dbgradeAct;
document.getElementById('myYearAct').value = dbyearAct;


function selectAllData() {

    document.getElementById('myHomeworkAct').innerHTML = "";
    studentN0 = 0;
    firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/`).once('value',
        function (AllRecords) {
            AllRecords.forEach(
                function (HomeworkData) {
                    var name = HomeworkData.val().name;
                    var id = HomeworkData.val().id;
                    var sex = HomeworkData.val().sex;
                    var khname = HomeworkData.val().khname;
                    var h1 = HomeworkData.val().h1;
                    var h2 = HomeworkData.val().h2;
                    var h3 = HomeworkData.val().h3;
                    var h4 = HomeworkData.val().h4;
                    var h5 = HomeworkData.val().h5;
                    var h6 = HomeworkData.val().h6;
                    var h7 = HomeworkData.val().h7;
                    var h8 = HomeworkData.val().h8;
                    var h9 = HomeworkData.val().h9;
                    var h10 = HomeworkData.val().h10;
                    var h11 = HomeworkData.val().h11;
                    var h12 = HomeworkData.val().h12;
                    var h13 = HomeworkData.val().h13;
                    var h14 = HomeworkData.val().h14;
                    var h15 = HomeworkData.val().h15;
                    var h16 = HomeworkData.val().h16;
                    var h17 = HomeworkData.val().h17;
                    var h18 = HomeworkData.val().h18;
                    var h19 = HomeworkData.val().h19;
                    var h20 = HomeworkData.val().h20;
                    var h21 = HomeworkData.val().h21;
                    var h22 = HomeworkData.val().h22;
                    var h23 = HomeworkData.val().h23;
                    var h24 = HomeworkData.val().h24;
                    var h25 = HomeworkData.val().h25;
                    var subTotal = HomeworkData.val().subTotal;
                    addItemsToTable(
                        name, id, sex, khname,
                        h1,
                        h2,
                        h3,
                        h4,
                        h5,
                        h6,
                        h7,
                        h8,
                        h9,
                        h10,
                        h11,
                        h12,
                        h13,
                        h14,
                        h15,
                        h16,
                        h17,
                        h18,
                        h19,
                        h20,
                        h21,
                        h22,
                        h23,
                        h24,
                        h25,
                        subTotal,
                    );

                }
            );
        });
}
window.onload = selectAllData;
var studentN0;

// let r = (Math.random() + 1).toString(36).substring(7);
var stdList = [];
function addItemsToTable(
    name, id, sex, khname,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7,
    h8,
    h9,
    h10,
    h11,
    h12,
    h13,
    h14,
    h15,
    h16,
    h17,
    h18,
    h19,
    h20,
    h21,
    h22,
    h23,
    h24,
    h25,
    subTotal,
) {
    var tbody = document.getElementById('myHomeworkAct');
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
    var td10 = document.createElement('td');
    var td11 = document.createElement('td');
    var td12 = document.createElement('td');
    var td13 = document.createElement('td');
    var td14 = document.createElement('td');
    var td15 = document.createElement('td');
    var td16 = document.createElement('td');
    var td17 = document.createElement('td');
    var td18 = document.createElement('td');
    var td19 = document.createElement('td');
    var td20 = document.createElement('td');
    var td21 = document.createElement('td');
    var td22 = document.createElement('td');
    var td23 = document.createElement('td');
    var td24 = document.createElement('td');
    var td25 = document.createElement('td');
    var td26 = document.createElement('td');
    var td27 = document.createElement('td');
    var td28 = document.createElement('td');
    var chk1 = document.createElement('input');
    td27.style.color = 'red';
    td2.contentEditable = true;
    td3.contentEditable = true;
    td4.contentEditable = true;
    td5.contentEditable = true;
    td6.contentEditable = true;
    td7.contentEditable = true;
    td8.contentEditable = true;
    td9.contentEditable = true;
    td10.contentEditable = true;
    td11.contentEditable = true;
    td12.contentEditable = true;
    td13.contentEditable = true;
    td14.contentEditable = true;
    td15.contentEditable = true;
    td16.contentEditable = true;
    td17.contentEditable = true;
    td18.contentEditable = true;
    td19.contentEditable = true;
    td20.contentEditable = true;
    td21.contentEditable = true;
    td22.contentEditable = true;
    td23.contentEditable = true;
    td24.contentEditable = true;
    td25.contentEditable = true;
    td26.contentEditable = true;

    if(h1 == undefined){
        h1 = 0;
    }
    if(h2 == undefined){
        h2 = 0;
    }
    if(h3 == undefined){
        h3 = 0;
    }
    if(h4 == undefined){
        h4 = 0;
    }
    if(h5 == undefined){
        h5 = 0;
    }
    if(h6 == undefined){
        h6 = 0;
    }
    if(h7 == undefined){
        h7 = 0;
    }
    if(h8 == undefined){
        h8 = 0;
    }
    if(h9 == undefined){
        h9 = 0;
    }
    if(h10 == undefined){
        h10 = 0;
    }
    if(h11 == undefined){
        h11 = 0;
    }
    if(h12 == undefined){
        h12 = 0;
    }
    if(h13 == undefined){
        h13 = 0;
    }
    if(h14 == undefined){
        h14 = 0;
    }
    if(h15 == undefined){
        h15 = 0;
    }
    if(h16 == undefined){
        h16 = 0;
    }
    if(h17 == undefined){
        h17 = 0;
    }
    if(h18 == undefined){
        h18 = 0;
    }
    if(h19 == undefined){
        h19 = 0;
    }
    if(h20 == undefined){
        h20 = 0;
    }
    if(h21 == undefined){
        h21 = 0;
    }
    if(h22 == undefined){
        h22 = 0;
    }
    if(h23 == undefined){
        h23 = 0;
    }
    if(h24 == undefined){
        h24 = 0;
    }
    if(h25 == undefined){
        h25 = 0;
    }
    chk1.type = 'checkbox';
    chk1.id = 'chkdata';
    chk1.checked = true;
    let sumall = parseFloat(h1) +
        parseFloat(h2) + parseFloat(h3)
        + parseFloat(h4) + parseFloat(h5)
        + parseFloat(h6) + parseFloat(h7)
        + parseFloat(h8) + parseFloat(h9)
        + parseFloat(h10) + parseFloat(h11)
        + parseFloat(h12) + parseFloat(h13)
        + parseFloat(h14) + parseFloat(h15)
        + parseFloat(h16) + parseFloat(h17)
        + parseFloat(h18) + parseFloat(h19)
        + parseFloat(h20) + parseFloat(h21)
        + parseFloat(h22) + parseFloat(h23)
        + parseFloat(h24) + parseFloat(h25);
    let getSum = sumall / `${dbdiviAct}`;
    td27.innerHTML = getSum;

    document.getElementById('uploadScore').addEventListener('click',function(){
        let data = getSum;
        if(dbmonthAct == 'October'){
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + id).update(
                {
                    hNov: data,
                },
            )
        }
        if(dbmonthAct == 'November'){
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + id).update(
                {
                    hDec: data,
                },
            )
        }
        if(dbmonthAct == 'December'){
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + id).update(
                {
                    hJan: data,
                },
            )
        }
        if(dbmonthAct == 'January'){
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + id).update(
                {
                    hFeb: data,
                },
            )
        }
        if(dbmonthAct == 'February'){
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + id).update(
                {
                    hMar: data,
                },
            )
        }
        if(dbmonthAct == 'March'){
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + id).update(
                {
                    hApr: data,
                },
            )
        }
        if(dbmonthAct == 'April-May'){
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + id).update(
                {
                    hJun: data,
                },
            )
        }
        if(dbmonthAct == 'June'){
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + id).update(
                {
                    hJul: data,
                },
            )
        }
        if(dbmonthAct == 'July'){
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + id).update(
                {
                    hAug: data,
                },
            )
        }
    })
    //Set ID for ech td
    var noSpp = id.replace(/\s+/g, ''); //no name space
    td2.id = `${noSpp}h1`;
    td3.id = `${noSpp}h2`;
    td4.id = `${noSpp}h3`;
    td5.id = `${noSpp}h4`;
    td6.id = `${noSpp}h5`;
    td7.id = `${noSpp}h6`;
    td8.id = `${noSpp}h7`;
    td9.id = `${noSpp}h8`;
    td10.id = `${noSpp}h9`;
    td11.id = `${noSpp}h10`;
    td12.id = `${noSpp}h11`;
    td13.id = `${noSpp}h12`;
    td14.id = `${noSpp}h13`;
    td15.id = `${noSpp}h14`;
    td16.id = `${noSpp}h15`;
    td17.id = `${noSpp}h16`;
    td18.id = `${noSpp}h17`;
    td19.id = `${noSpp}h18`;
    td20.id = `${noSpp}h19`;
    td21.id = `${noSpp}h20`;
    td22.id = `${noSpp}h21`;
    td23.id = `${noSpp}h22`;
    td24.id = `${noSpp}h23`;
    td25.id = `${noSpp}h24`;
    td26.id = `${noSpp}h25`;
    td27.id = `${noSpp}h26`;
    stdList.push([
        name, id, sex, khname,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        h7,
        h8,
        h9,
        h10,
        h11,
        h12,
        h13,
        h14,
        h15,
        h16,
        h17,
        h18,
        h19,
        h20,
        h21,
        h22,
        h23,
        h24,
        h25,
        subTotal,
    ]);
    td0.innerHTML = ++studentN0;
    td1.innerHTML = id;
    if (h1 == undefined) {
        td2.innerHTML = '0';
    } else {
        td2.innerHTML = h1;
    }

    if (h2 == undefined) {
        td3.innerHTML = '0';
    } else {
        td3.innerHTML = h2;
    }

    if (h3 == undefined) {
        td4.innerHTML = '0';
    } else {
        td4.innerHTML = h3;
    }

    if (h4 == undefined) {
        td5.innerHTML = '0';
    } else {
        td5.innerHTML = h4;
    }

    if (h5 == undefined) {
        td6.innerHTML = '0';
    } else {
        td6.innerHTML = h5;
    }

    if (h6 == undefined) {
        td7.innerHTML = '0';
    } else {
        td7.innerHTML = h6;
    }

    if (h7 == undefined) {
        td8.innerHTML = '0';
    } else {
        td8.innerHTML = h7;
    }

    if (h8 == undefined) {
        td9.innerHTML = '0';
    } else {
        td9.innerHTML = h8;
    }

    if (h9 == undefined) {
        td10.innerHTML = '0';
    } else {
        td10.innerHTML = h9;
    }

    if (h10 == undefined) {
        td11.innerHTML = '0';
    } else {
        td11.innerHTML = h10;
    }

    if (h11 == undefined) {
        td12.innerHTML = '0';
    } else {
        td12.innerHTML = h11;
    }

    if (h12 == undefined) {
        td13.innerHTML = '0';
    } else {
        td13.innerHTML = h12;
    }

    if (h13 == undefined) {
        td14.innerHTML = '0';
    } else {
        td14.innerHTML = h13;
    }

    if (h14 == undefined) {
        td15.innerHTML = '0';
    } else {
        td15.innerHTML = h14;
    }

    if (h15 == undefined) {
        td16.innerHTML = '0';
    } else {
        td16.innerHTML = h15;
    }

    if (h16 == undefined) {
        td17.innerHTML = '0';
    } else {
        td17.innerHTML = h16;
    }

    if (h17 == undefined) {
        td18.innerHTML = '0';
    } else {
        td18.innerHTML = h17;
    }

    if (h18 == undefined) {
        td19.innerHTML = '0';
    } else {
        td19.innerHTML = h18;
    }

    if (h19 == undefined) {
        td20.innerHTML = '0';
    } else {
        td20.innerHTML = h19;
    }

    if (h20 == undefined) {
        td21.innerHTML = '0';
    } else {
        td21.innerHTML = h20;
    }

    if (h21 == undefined) {
        td22.innerHTML = '0';
    } else {
        td22.innerHTML = h21;
    }

    if (h22 == undefined) {
        td23.innerHTML = '0';
    } else {
        td23.innerHTML = h22;
    }

    if (h23 == undefined) {
        td24.innerHTML = '0';
    } else {
        td24.innerHTML = h23;
    }

    if (h24 == undefined) {
        td25.innerHTML = '0';
    } else {
        td25.innerHTML = h24;
    }

    if (h25 == undefined) {
        td26.innerHTML = '0';
    } else {
        td26.innerHTML = h25;
    }

    // if (subTotal == undefined) {
    //     td27.innerHTML = '0';
    // } else {
    //     td27.innerHTML = getSum;
    // }

    const sleep = async (milliseconds) => {
        await new Promise(resolve => {
            return setTimeout(resolve, milliseconds);
        });
        let ss = document.getElementById(`${noSpp}h1`);
        let ss2 = document.getElementById(`${noSpp}h2`);
        let ss3 = document.getElementById(`${noSpp}h3`);
        let ss4 = document.getElementById(`${noSpp}h4`);
        let ss5 = document.getElementById(`${noSpp}h5`);
        let ss6 = document.getElementById(`${noSpp}h6`);
        let ss7 = document.getElementById(`${noSpp}h7`);
        let ss8 = document.getElementById(`${noSpp}h8`);
        let ss9 = document.getElementById(`${noSpp}h9`);
        let ss10 = document.getElementById(`${noSpp}h10`);
        let ss11 = document.getElementById(`${noSpp}h11`);
        let ss12 = document.getElementById(`${noSpp}h12`);
        let ss13 = document.getElementById(`${noSpp}h13`);
        let ss14 = document.getElementById(`${noSpp}h14`);
        let ss15 = document.getElementById(`${noSpp}h15`);
        let ss16 = document.getElementById(`${noSpp}h16`);
        let ss17 = document.getElementById(`${noSpp}h17`);
        let ss18 = document.getElementById(`${noSpp}h18`);
        let ss19 = document.getElementById(`${noSpp}h19`);
        let ss20 = document.getElementById(`${noSpp}h20`);
        let ss21 = document.getElementById(`${noSpp}h21`);
        let ss22 = document.getElementById(`${noSpp}h22`);
        let ss23 = document.getElementById(`${noSpp}h23`);
        let ss24 = document.getElementById(`${noSpp}h24`);
        let ss25 = document.getElementById(`${noSpp}h25`);

        ss.addEventListener('click', () => {
            if (td2.innerHTML == 0) {
                td2.innerHTML = '';
            } else {

            }
        })
        ss.addEventListener('input', () => {
            let data = ss.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h1: data,
                },
            )
        })

        ss2.addEventListener('click', () => {
            if (td3.innerHTML == 0) {
                td3.innerHTML = '';
            } else {

            }
        })
        ss2.addEventListener('input', () => {
            let data = ss2.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h2: data,
                },
            )
        })

        ss3.addEventListener('click', () => {
            if (td4.innerHTML == 0) {
                td4.innerHTML = '';
            } else {

            }
        })
        ss3.addEventListener('input', () => {
            let data = ss3.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h3: data,
                },
            )
        })

        ss4.addEventListener('click', () => {
            if (td5.innerHTML == 0) {
                td5.innerHTML = '';
            } else {

            }
        })
        ss4.addEventListener('input', () => {
            let data = ss4.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h4: data,
                },
            )
        })

        ss5.addEventListener('click', () => {
            if (td6.innerHTML == 0) {
                td6.innerHTML = '';
            } else {

            }
        })
        ss5.addEventListener('input', () => {
            let data = ss5.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h5: data,
                },
            )
        })

        ss6.addEventListener('click', () => {
            if (td7.innerHTML == 0) {
                td7.innerHTML = '';
            } else {

            }
        })
        ss6.addEventListener('input', () => {
            let data = ss6.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h6: data,
                },
            )
        })

        ss7.addEventListener('click', () => {
            if (td8.innerHTML == 0) {
                td8.innerHTML = '';
            } else {

            }
        })
        ss7.addEventListener('input', () => {
            let data = ss7.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h7: data,
                },
            )
        })

        ss8.addEventListener('click', () => {
            if (td9.innerHTML == 0) {
                td9.innerHTML = '';
            } else {

            }
        })
        ss8.addEventListener('input', () => {
            let data = ss8.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h8: data,
                },
            )
        })

        ss9.addEventListener('click', () => {
            if (td10.innerHTML == 0) {
                td10.innerHTML = '';
            } else {

            }
        })
        ss9.addEventListener('input', () => {
            let data = ss9.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h9: data,
                },
            )
        })

        ss10.addEventListener('click', () => {
            if (td11.innerHTML == 0) {
                td11.innerHTML = '';
            } else {

            }
        })
        ss10.addEventListener('input', () => {
            let data = ss10.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h10: data,
                },
            )
        })

        ss11.addEventListener('click', () => {
            if (td12.innerHTML == 0) {
                td12.innerHTML = '';
            } else {

            }
        })
        ss11.addEventListener('input', () => {
            let data = ss11.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h11: data,
                },
            )
        })

        ss12.addEventListener('click', () => {
            if (td13.innerHTML == 0) {
                td13.innerHTML = '';
            } else {

            }
        })
        ss12.addEventListener('input', () => {
            let data = ss12.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h12: data,
                },
            )
        })

        ss13.addEventListener('click', () => {
            if (td14.innerHTML == 0) {
                td14.innerHTML = '';
            } else {

            }
        })
        ss13.addEventListener('input', () => {
            let data = ss13.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h13: data,
                },
            )
        })

        ss14.addEventListener('click', () => {
            if (td15.innerHTML == 0) {
                td15.innerHTML = '';
            } else {

            }
        })
        ss14.addEventListener('input', () => {
            let data = ss14.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h14: data,
                },
            )
        })

        ss15.addEventListener('click', () => {
            if (td16.innerHTML == 0) {
                td16.innerHTML = '';
            } else {

            }
        })
        ss15.addEventListener('input', () => {
            let data = ss15.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h15: data,
                },
            )
        })

        ss16.addEventListener('click', () => {
            if (td17.innerHTML == 0) {
                td17.innerHTML = '';
            } else {

            }
        })
        ss16.addEventListener('input', () => {
            let data = ss16.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h16: data,
                },
            )
        })

        ss17.addEventListener('click', () => {
            if (td18.innerHTML == 0) {
                td18.innerHTML = '';
            } else {

            }
        })
        ss17.addEventListener('input', () => {
            let data = ss17.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h17: data,
                },
            )
        })

        ss18.addEventListener('click', () => {
            if (td19.innerHTML == 0) {
                td19.innerHTML = '';
            } else {

            }
        })
        ss18.addEventListener('input', () => {
            let data = ss18.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h18: data,
                },
            )
        })

        ss19.addEventListener('click', () => {
            if (td20.innerHTML == 0) {
                td20.innerHTML = '';
            } else {

            }
        })
        ss19.addEventListener('input', () => {
            let data = ss19.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h19: data,
                },
            )
        })

        ss20.addEventListener('click', () => {
            if (td21.innerHTML == 0) {
                td21.innerHTML = '';
            } else {

            }
        })
        ss20.addEventListener('input', () => {
            let data = ss20.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h20: data,
                },
            )
        })

        ss21.addEventListener('click', () => {
            if (td22.innerHTML == 0) {
                td22.innerHTML = '';
            } else {

            }
        })
        ss21.addEventListener('input', () => {
            let data = ss21.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h21: data,
                },
            )
        })

        ss22.addEventListener('click', () => {
            if (td23.innerHTML == 0) {
                td23.innerHTML = '';
            } else {

            }
        })
        ss22.addEventListener('input', () => {
            let data = ss22.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h22: data,
                },
            )
        })

        ss23.addEventListener('click', () => {
            if (td24.innerHTML == 0) {
                td24.innerHTML = '';
            } else {

            }
        })
        ss23.addEventListener('input', () => {
            let data = ss23.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h23: data,
                },
            )
        })

        ss24.addEventListener('click', () => {
            if (td25.innerHTML == 0) {
                td25.innerHTML = '';
            } else {

            }
        })
        ss24.addEventListener('input', () => {
            let data = ss24.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h24: data,
                },
            )
        })

        ss25.addEventListener('click', () => {
            if (td26.innerHTML == 0) {
                td26.innerHTML = '';
            } else {

            }
        })
        ss25.addEventListener('input', () => {
            let data = ss25.innerHTML;
            firebase.database().ref(`${dbgradeAct}/` + `recordHomework/` + `${dbyearAct}/` + `${dbmonthAct}/` + id).update(
                {
                    h25: data,
                },
            )
        })




    };
    sleep(1000);

    // $(document).ready(function () {

    //     $("#sumUpScore").on('click', function () {
    //         $("#myHomeworkRecord tbody tr").each(function () {
    //             var currentRow = $(this);
    //             var col1 = currentRow.find("td:eq(2)").html();
    //             var col2 = currentRow.find("td:eq(3)").html();
    //             var col3 = currentRow.find("td:eq(4)").html();
    //             var col4 = currentRow.find("td:eq(5)").html();
    //             var col5 = currentRow.find("td:eq(6)").html();
    //             var col6 = currentRow.find("td:eq(7)").html();
    //             var col7 = currentRow.find("td:eq(8)").html();
    //             var col8 = currentRow.find("td:eq(9)").html();
    //             var col9 = currentRow.find("td:eq(10)").html();
    //             var col10 = currentRow.find("td:eq(11)").html();
    //             var col11 = currentRow.find("td:eq(12)").html();
    //             var col12 = currentRow.find("td:eq(13)").html();
    //             var col13 = currentRow.find("td:eq(14)").html();
    //             var col14 = currentRow.find("td:eq(15)").html();
    //             var col15 = currentRow.find("td:eq(16)").html();
    //             var col16 = currentRow.find("td:eq(17)").html();
    //             var col17 = currentRow.find("td:eq(18)").html();
    //             var col18 = currentRow.find("td:eq(19)").html();
    //             var col19 = currentRow.find("td:eq(20)").html();
    //             var col20 = currentRow.find("td:eq(21)").html();
    //             var col21 = currentRow.find("td:eq(22)").html();
    //             var col22 = currentRow.find("td:eq(23)").html();
    //             var col23 = currentRow.find("td:eq(24)").html();
    //             var col24 = currentRow.find("td:eq(25)").html();
    //             var col25 = currentRow.find("td:eq(26)").html();

    //             let sumall = parseFloat(col1)
    //                 + parseFloat(col2) + parseFloat(col12)
    //                 + parseFloat(col3) + parseFloat(col13)
    //                 + parseFloat(col4) + parseFloat(col14)
    //                 + parseFloat(col5) + parseFloat(col15)
    //                 + parseFloat(col6) + parseFloat(col16)
    //                 + parseFloat(col7) + parseFloat(col17)
    //                 + parseFloat(col8) + parseFloat(col18)
    //                 + parseFloat(col9) + parseFloat(col19)
    //                 + parseFloat(col10) + parseFloat(col20)
    //                 + parseFloat(col11) + parseFloat(col21)
    //                 + parseFloat(col22) + parseFloat(col23)
    //                 + parseFloat(col24) + parseFloat(col25)

    //             let getSum = sumall / `${dbdiviAct}`;
    //             let allTotal = getSum.toString();
    //             // td27.innerHTML = allTotal;
    //             console.log(allTotal);

    //             document.getElementById(`${noSpp}h26`).innerHTML = allTotal;
    //             // var obj = {};
    //             // obj.h1 = col1;
    //             // obj.h2 = col2;
    //             // obj.mykhname = col3;
    //             // obj.mySex = col4;
    //             // console.log(obj.id);
    //             // if (currentRow.find(".chkdata").is(":checked")) {
    //             //     aData3.push(obj);
    //             // }
    //         });


    //     });

    // });



    td28.appendChild(chk1);
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
    trow.appendChild(td10);
    trow.appendChild(td11);
    trow.appendChild(td12);
    trow.appendChild(td13);
    trow.appendChild(td14);
    trow.appendChild(td15);
    trow.appendChild(td16);
    trow.appendChild(td17);
    trow.appendChild(td18);
    trow.appendChild(td19);
    trow.appendChild(td20);
    trow.appendChild(td21);
    trow.appendChild(td22);
    trow.appendChild(td23);
    trow.appendChild(td24);
    trow.appendChild(td25);
    trow.appendChild(td26);
    trow.appendChild(td27);
    trow.appendChild(td28);

    tbody.appendChild(trow);

}

// var aData3 = [];
// $(document).ready(function () {

//     $("#sumUpScore").on('click', function () {
//         console.log('go');
//         $("#myHomeworkRecord tbody tr").each(function () {
//             var currentRow = $(this);
//             var col1 = currentRow.find("td:eq(0)").html();
//             var col2 = currentRow.find("td:eq(1)").html();
//             var col3 = currentRow.find("td:eq(2)").html();
//             var col4 = currentRow.find("td:eq(3)").html();
//             var col5 = currentRow.find("td:eq(4)").html();
//             var obj = {};
//             obj.id = col2;
//             obj.myenname = col2;
//             obj.mykhname = col3;
//             obj.mySex = col4;
//             console.log(obj.id);
//             if (currentRow.find(".chkdata").is(":checked")) {
//                 aData3.push(obj);
//             }
//         });


//     });

// });

