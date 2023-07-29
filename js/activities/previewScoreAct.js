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
var dbmonthAct = localStorage.getItem('previewmonthAct'); //month activity
var dbtimesAct = localStorage.getItem('previewtimesAct'); // times activity
var dbgradeAct = localStorage.getItem('previewgradeAct'); // grade activity
var dbyearAct = localStorage.getItem('previewyeareAct'); // year activity
var dbdiviAct = localStorage.getItem('previewdiviAct'); // divide activity

function selectAllData() {
    document.getElementById('myActivities').innerHTML = "";
    studentN0 = 0;
    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/`).once('value',
        function (AllRecords) {
            AllRecords.forEach(
                function (actData) {
                    var name = actData.val().name;
                    var id = actData.val().id;
                    var sex = actData.val().sex;
                    var book = actData.val().book;
                    var pt = actData.val().pt;
                    var s1 = actData.val().total1;
                    var s2 = actData.val().total2;
                    var s3 = actData.val().total3;
                    var s4 = actData.val().total4;
                    var s5 = actData.val().total5;
                    var s6 = actData.val().total6;
                    var s7 = actData.val().total7;
                    var s8 = actData.val().total8;
                    var s9 = actData.val().total9;
                    var s10 = actData.val().total10;
                    var s11 = actData.val().total11;
                    var s12 = actData.val().total12;
                    var s13 = actData.val().total13;
                    var s14 = actData.val().total14;
                    var s15 = actData.val().total15;
                    var s16 = actData.val().total16;
                    var s17 = actData.val().total17;
                    var s18 = actData.val().total18;
                    var s19 = actData.val().total19;
                    var s20 = actData.val().total20;
                    addItemsToTable(name, id, sex,
                        book, pt, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13,
                        s14, s15, s16, s17, s18, s19, s20);
                    document.getElementById("alertMagWait").style.display = "none";

                });
        });
}
window.onload = selectAllData;
var studentN0;

var stdList = [];
function addItemsToTable(name, id, sex,
    book, pt, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13,
    s14, s15, s16, s17, s18, s19, s20) {
    var tbody = document.getElementById('myActivities');
    var trow = document.createElement('tr');
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var tdsex = document.createElement('td');
    var tdbook = document.createElement('td');
    var tdPT = document.createElement('td');
    var tdS1 = document.createElement('td');
    var tdS2 = document.createElement('td');
    var tdS3 = document.createElement('td');
    var tdS4 = document.createElement('td');
    var tdS5 = document.createElement('td');
    var tdS6 = document.createElement('td');
    var tdS7 = document.createElement('td');
    var tdS8 = document.createElement('td');
    var tdS9 = document.createElement('td');
    var tdS10 = document.createElement('td');
    var tdS11 = document.createElement('td');
    var tdS12 = document.createElement('td');
    var tdS13 = document.createElement('td');
    var tdS14 = document.createElement('td');
    var tdS15 = document.createElement('td');
    var tdS16 = document.createElement('td');
    var tdS17 = document.createElement('td');
    var tdS18 = document.createElement('td');
    var tdS19 = document.createElement('td');
    var tdS20 = document.createElement('td');
    var tdS21 = document.createElement('td');
    var tdS22 = document.createElement('td');
    var br = document.createElement('br');
    var br1 = document.createElement('br');
    var spanBook = document.createElement('span');
    var spanPT = document.createElement('span');
    var noSpname = id.replace(/\s+/g, '');
    tdS21.style.color = 'red';
    //Name no space
    //Name class for each row
    tdbook.className = `${noSpname}book`;
    tdPT.className = `${noSpname}pt`;
    tdS1.className = `${noSpname}s1`;
    tdS2.className = `${noSpname}s2`;
    tdS3.className = `${noSpname}s3`;
    tdS4.className = `${noSpname}s4`;
    tdS5.className = `${noSpname}s5`;
    tdS6.className = `${noSpname}s6`;
    tdS7.className = `${noSpname}s7`;
    tdS8.className = `${noSpname}s8`;
    tdS9.className = `${noSpname}s9`;
    tdS10.className = `${noSpname}s10`;
    tdS11.className = `${noSpname}s11`;
    tdS12.className = `${noSpname}s12`;
    tdS13.className = `${noSpname}s13`;
    tdS14.className = `${noSpname}s14`;
    tdS15.className = `${noSpname}s15`;
    tdS16.className = `${noSpname}s16`;
    tdS17.className = `${noSpname}s17`;
    tdS18.className = `${noSpname}s18`;
    tdS19.className = `${noSpname}s19`;
    tdS20.className = `${noSpname}s20`;
    tdS21.id = `${noSpname}s21`;
    // tdbook.id = `${noSpname}book`;
    spanBook.id = `${noSpname}bookSpa`;
    spanPT.id = `${noSpname}ptSpa`;
    //checkbox
    var chbook = document.createElement('input');
    chbook.type = "checkbox";
    chbook.setAttribute('name', 'myBook');
    chbook.id = `${noSpname}chBook`;
    spanBook.contentEditable = 'true';
    spanPT.contentEditable = 'true';

    var chPt = document.createElement('input');
    chPt.type = "checkbox";
    chPt.setAttribute('name', 'myPT');
    chPt.id = `${noSpname}chPt`;

    var chkGet = document.createElement('input');
    chkGet.type = "checkbox";
    chkGet.setAttribute('name', 'myGet');
    chkGet.setAttribute('class', 'chk');
    chkGet.checked = true;

    stdList.push([name, id, sex,
        book, pt, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13,
        s14, s15, s16, s17, s18, s19, s20]);
    td0.innerHTML = ++studentN0;
    td1.innerHTML = id;
    tdsex.innerHTML = sex;
    if (book == undefined) {
        spanBook.innerHTML = 0;

    } else {
        spanBook.innerText = book;
        spanBook.style.backgroundColor = '#FFF366';
    }
    if (pt == undefined) {
        spanPT.innerText = 0;

    } else {
        spanPT.innerHTML = pt;
        spanPT.style.backgroundColor = '#FFF366';
    }
    if (s1 == undefined) {
        tdS1.innerHTML = 0;
    } else {
        tdS1.innerHTML = s1;
        tdS1.style.backgroundColor = '#FFF366';
    }
    if (s2 == undefined) {
        tdS2.innerHTML = 0;

    } else {
        tdS2.innerHTML = s2;
        tdS2.style.backgroundColor = '#FFF366';
    }
    if (s3 == undefined) {
        tdS3.innerHTML = 0;
    } else {
        tdS3.innerHTML = s3;
        tdS3.style.backgroundColor = '#FFF366';
    }
    if (s4 == undefined) {
        tdS4.innerHTML = 0;
    } else {
        tdS4.innerHTML = s4;
        tdS4.style.backgroundColor = '#FFF366';
    }
    if (s5 == undefined) {
        tdS5.innerHTML = 0;

    } else {
        tdS5.innerHTML = s5;
        tdS5.style.backgroundColor = '#FFF366';
    }
    if (s6 == undefined) {
        tdS6.innerHTML = 0;
    } else {
        tdS6.innerHTML = s6;
        tdS6.style.backgroundColor = '#FFF366';
    }
    if (s7 == undefined) {
        tdS7.innerHTML = 0;
    } else {
        tdS7.innerHTML = s7;
        tdS7.style.backgroundColor = '#FFF366';
    }
    if (s8 == undefined) {
        tdS8.innerHTML = 0;
    } else {
        tdS8.innerHTML = s8;
        tdS8.style.backgroundColor = '#FFF366';
    }
    if (s9 == undefined) {
        tdS9.innerHTML = 0;
    } else {
        tdS9.innerHTML = s9;
        tdS9.style.backgroundColor = '#FFF366';
    }
    if (s10 == undefined) {
        tdS10.innerHTML = 0;
    } else {
        tdS10.innerHTML = s10;
        tdS10.style.backgroundColor = '#FFF366';
    }
    if (s11 == undefined) {
        tdS11.innerHTML = 0;
    } else {
        tdS11.innerHTML = s11;
        tdS11.style.backgroundColor = '#FFF366';
    }
    if (s12 == undefined) {
        tdS12.innerHTML = 0;
    } else {
        tdS12.innerHTML = s12;
        tdS12.style.backgroundColor = '#FFF366';
    }
    if (s13 == undefined) {
        tdS13.innerHTML = 0;
    } else {
        tdS13.innerHTML = s13;
        tdS13.style.backgroundColor = '#FFF366';
    }
    if (s14 == undefined) {
        tdS14.innerHTML = 0;
    } else {
        tdS14.innerHTML = s14;
        tdS14.style.backgroundColor = '#FFF366';
    }
    if (s15 == undefined) {
        tdS15.innerHTML = 0;
    } else {
        tdS15.innerHTML = s15;
        tdS15.style.backgroundColor = '#FFF366';
    }
    if (s16 == undefined) {
        tdS16.innerHTML = 0;
    } else {
        tdS16.innerHTML = s16;
        tdS16.style.backgroundColor = '#FFF366';
    }
    if (s17 == undefined) {
        tdS17.innerHTML = 0;
    } else {
        tdS17.innerHTML = s17;
        tdS17.style.backgroundColor = '#FFF366';
    }
    if (s18 == undefined) {
        tdS18.innerHTML = 0;
    } else {
        tdS18.innerHTML = s18;
        tdS18.style.backgroundColor = '#FFF366';
    }
    if (s19 == undefined) {
        tdS19.innerHTML = 0;
    } else {
        tdS19.innerHTML = s19;
        tdS19.style.backgroundColor = '#FFF366';
    }
    if (s20 == undefined) {
        tdS20.innerHTML = 0;
    } else {
        tdS20.innerHTML = s20;
        tdS20.style.backgroundColor = '#FFF366';
    }

    tdS21.innerHTML = 0;
    spanBook.addEventListener('input', function () {
        var nnn = this.innerText;
        firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(
            {
                book: nnn,
            },
        )
    })
    spanPT.addEventListener('input', function () {
        var nnn = this.innerText;
        firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(
            {
                book: nnn,
            },
        )
    })
    trow.appendChild(td0);
    trow.appendChild(td1);
    trow.appendChild(tdsex);
    trow.appendChild(tdbook);
    trow.appendChild(tdPT);
    trow.appendChild(tdS1);
    trow.appendChild(tdS2);
    trow.appendChild(tdS3);
    trow.appendChild(tdS4);
    trow.appendChild(tdS5);
    trow.appendChild(tdS6);
    trow.appendChild(tdS7);
    trow.appendChild(tdS8);
    trow.appendChild(tdS9);
    trow.appendChild(tdS10);
    trow.appendChild(tdS11);
    trow.appendChild(tdS12);
    trow.appendChild(tdS13);
    trow.appendChild(tdS14);
    trow.appendChild(tdS15);
    trow.appendChild(tdS16);
    trow.appendChild(tdS17);
    trow.appendChild(tdS18);
    trow.appendChild(tdS19);
    trow.appendChild(tdS20);
    trow.appendChild(tdS21);
    trow.appendChild(tdS22);
    tdS22.appendChild(chkGet);
    tdbook.appendChild(spanBook);
    tdbook.appendChild(br);
    tdbook.appendChild(chbook);
    tdPT.appendChild(spanPT);
    tdPT.appendChild(br1);
    tdPT.appendChild(chPt);
    tbody.appendChild(trow);
    clickBook();
    clickPT();
    // dataS();
}
//Sum the table score
var btnPush = document.getElementById('sumUpScore');
function dataS() {
    //S checked for checkbook
    for (i = 0; i < stdList.length; i++) {
        //Sum for All score
        var idM = stdList[i][1];
        var getName = stdList[i][0]; // for s
        var noSp = getName.replace(/\s+/g, '');
        var getTotal = `${noSp}s21`;
        var sbook = `${noSp}book`;
        var spt = `${noSp}pt`;
        var s1 = `${noSp}s1`;
        var s2 = `${noSp}s2`;
        var s3 = `${noSp}s3`;
        var s4 = `${noSp}s4`;
        var s5 = `${noSp}s5`;
        var s6 = `${noSp}s6`;
        var s7 = `${noSp}s7`;
        var s8 = `${noSp}s8`;
        var s9 = `${noSp}s9`;
        var s10 = `${noSp}s10`;
        var s11 = `${noSp}s11`;
        var s12 = `${noSp}s12`;
        var s13 = `${noSp}s13`;
        var s14 = `${noSp}s14`;
        var s15 = `${noSp}s15`;
        var s16 = `${noSp}s16`;
        var s17 = `${noSp}s17`;
        var s18 = `${noSp}s18`;
        var s19 = `${noSp}s19`;
        var s20 = `${noSp}s20`;
        // setInterval(function () {
        var gbook = 0;
        var gpt = 0;
        var gs1 = 0;
        var gs2 = 0;
        var gs3 = 0;
        var gs4 = 0;
        var gs5 = 0;
        var gs6 = 0;
        var gs7 = 0;
        var gs8 = 0;
        var gs9 = 0;
        var gs10 = 0;
        var gs11 = 0;
        var gs12 = 0;
        var gs13 = 0;
        var gs14 = 0;
        var gs15 = 0;
        var gs16 = 0;
        var gs17 = 0;
        var gs18 = 0;
        var gs19 = 0;
        var gs20 = 0;
        $(`.${sbook}`).each(function () {
            gbook += parseFloat($(this).text()); // 
        });
        $(`.${spt}`).each(function () {
            gpt += parseFloat($(this).text()); // 
        });
        $(`.${s1}`).each(function () {
            gs1 += parseFloat($(this).text()); // 
        });
        $(`.${s2}`).each(function () {
            gs2 += parseFloat($(this).text()); // 
        });
        $(`.${s3}`).each(function () {
            gs3 += parseFloat($(this).text()); // 
        });
        $(`.${s4}`).each(function () {
            gs4 += parseFloat($(this).text()); // 
        });
        $(`.${s5}`).each(function () {
            gs5 += parseFloat($(this).text()); // 
        });
        $(`.${s6}`).each(function () {
            gs6 += parseFloat($(this).text()); // 
        });
        $(`.${s7}`).each(function () {
            gs7 += parseFloat($(this).text()); // 
        });
        $(`.${s8}`).each(function () {
            gs8 += parseFloat($(this).text()); // 
        });
        $(`.${s9}`).each(function () {
            gs9 += parseFloat($(this).text()); // 
        });
        $(`.${s10}`).each(function () {
            gs10 += parseFloat($(this).text()); // 
        });
        $(`.${s11}`).each(function () {
            gs11 += parseFloat($(this).text()); // 
        });
        $(`.${s12}`).each(function () {
            gs12 += parseFloat($(this).text()); // 
        });
        $(`.${s13}`).each(function () {
            gs13 += parseFloat($(this).text()); // 
        });
        $(`.${s14}`).each(function () {
            gs14 += parseFloat($(this).text()); // 
        });
        $(`.${s15}`).each(function () {
            gs15 += parseFloat($(this).text()); // 
        });
        $(`.${s16}`).each(function () {
            gs16 += parseFloat($(this).text()); // 
        });
        $(`.${s17}`).each(function () {
            gs17 += parseFloat($(this).text()); // 
        });
        $(`.${s18}`).each(function () {
            gs18 += parseFloat($(this).text()); // 
        });
        $(`.${s19}`).each(function () {
            gs19 += parseFloat($(this).text()); // 
        });
        $(`.${s20}`).each(function () {
            gs20 += parseFloat($(this).text()); // 
        });
        var bookPt = parseFloat(gbook) + parseFloat(gpt);
        var actSum =
            parseFloat(gs1) +
            parseFloat(gs2) +
            parseFloat(gs3) +
            parseFloat(gs4) +
            parseFloat(gs5) +
            parseFloat(gs6) +
            parseFloat(gs7) +
            parseFloat(gs8) +
            parseFloat(gs9) +
            parseFloat(gs10) +
            parseFloat(gs11) +
            parseFloat(gs12) +
            parseFloat(gs13) +
            parseFloat(gs14) +
            parseFloat(gs15) +
            parseFloat(gs16) +
            parseFloat(gs17) +
            parseFloat(gs18) +
            parseFloat(gs19) +
            parseFloat(gs20);
        var di = actSum / `${dbdiviAct}` / 2;
        var sumAll = bookPt + di;
        sumAll = parseFloat(sumAll).toFixed(2);
        document.getElementById(`${getTotal}`).innerHTML = sumAll;

        if (dbmonthAct == 'October') {
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + idM).update(
                {
                    speakingNov: sumAll,
                },
            )
        }
        if (dbmonthAct == 'November') {
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + idM).update(
                {
                    speakingDec: sumAll,
                },
            )
        }
        if (dbmonthAct == 'December') {
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + idM).update(
                {
                    speakingJan: sumAll,
                },
            )
        }
        if (dbmonthAct == 'January') {
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + idM).update(
                {
                    speakingfeb: sumAll,
                },
            )
        }
        if (dbmonthAct == 'February') {
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + idM).update(
                {
                    speakingmar: sumAll,
                },
            )
        }
        if (dbmonthAct == 'March') {
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + idM).update(
                {
                    speakingma: sumAll,
                },
            )
        }
        if (dbmonthAct == 'April-May') {
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + idM).update(
                {
                    speakingjun: sumAll,
                },
            )
        }
        if (dbmonthAct == 'June') {
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + idM).update(
                {
                    speakingjuly: sumAll,
                },
            )
        }
        if (dbmonthAct == 'July') {
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + idM).update(
                {
                    speakingfinal: sumAll,
                },
            )
        }

        // }, 1000);

    }
}
btnPush.onclick = dataS;
//Check to give value
function toggleBook(source) {
    checkboxes = document.getElementsByName('myBook');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
    for (i = 0; i < stdList.length; i++) {
        var name = stdList[i][1];
        var noSp = name.replace(/\s+/g, '');
        var getNameTd = `${noSp}bookSpa`;
        var getNameput = `${noSp}chBook`;

        var checkboxBook = document.getElementById(`${getNameput}`);
        if (checkboxBook.checked == true) {
            checkboxBook.checked = true;
            document.getElementById(`${getNameTd}`).innerText = 2.5;
            var data = 2.5;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(
                {
                    book: data,
                },
            )

        }
        if (checkboxBook.checked == false) {
            checkboxBook.checked = false;
            document.getElementById(`${getNameTd}`).innerText = 0;
            var data = 0;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(
                {
                    book: data,
                },
            )

        }

    }

}
//Click book to give score
function clickBook() {
    for (i = 0; i < stdList.length; i++) {
        var name = stdList[i][1];
        var noSp = name.replace(/\s+/g, '');
        var getNameTd = `${noSp}bookSpa`;
        var getNameput = `${noSp}chBook`;

        var checkboxBook = document.getElementById(`${getNameput}`);
        var SpaVal = document.getElementById(`${getNameTd}`).innerText;
        if (SpaVal == 2.5) {
            checkboxBook.checked = true;
        } else {
            checkboxBook.checked = false;
        }
        //when click
        checkboxBook.addEventListener('click', function () {
            if (checkboxBook.checked == true) {
                checkboxBook.checked = true;
                document.getElementById(`${getNameTd}`).innerText = 2.5;
                var data = 2.5;
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(
                    {
                        book: data,
                    },
                )

            }
            if (checkboxBook.checked == false) {
                checkboxBook.checked = false;
                document.getElementById(`${getNameTd}`).innerText = 0;
                var data = 0;
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(
                    {
                        book: data,
                    },
                )

            }
        })

    }

}
function togglePT(source) {
    var checkboxes = document.getElementsByName('myPT');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
    for (i = 0; i < stdList.length; i++) {
        var name = stdList[i][1];
        var noSp = name.replace(/\s+/g, '');
        var getNameTd = `${noSp}ptSpa`; //id for span
        var getNameput = `${noSp}chPt`; //id for checkbox

        var checkboxPT = document.getElementById(`${getNameput}`);
        if (checkboxPT.checked == true) {
            checkboxPT.checked = true;
            document.getElementById(`${getNameTd}`).innerText = 5;
            var data = 5;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(
                {
                    pt: data,
                },
            )

        }
        if (checkboxPT.checked == false) {
            checkboxPT.checked = false;
            document.getElementById(`${getNameTd}`).innerText = 0;
            var data = 0;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(
                {
                    pt: data,
                },
            )

        }
        //when click
        checkboxPT.addEventListener('click', function () {
            if (checkboxPT.checked == true) {
                checkboxPT.checked = true;
                document.getElementById(`${getNameTd}`).innerText = 5;
                var data = 5;
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(
                    {
                        pt: data,
                    },
                )

            }
            if (checkboxPT.checked == false) {
                checkboxPT.checked = false;
                document.getElementById(`${getNameTd}`).innerText = 0;
                var data = 0;
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(
                    {
                        pt: data,
                    },
                )

            }
        })

    }

}
//Click PT to give score
function clickPT() {
    for (i = 0; i < stdList.length; i++) {
        var name = stdList[i][1];
        var noSp = name.replace(/\s+/g, '');
        var getNameTd = `${noSp}ptSpa`; //id for span
        var getNameput = `${noSp}chPt`; //id for checkbox

        var checkboxPT = document.getElementById(`${getNameput}`);
        var SpaVal = document.getElementById(`${getNameTd}`).innerText;
        if (SpaVal == 5) {
            checkboxPT.checked = true;
        } else {
            checkboxPT.checked = false;
        }
        //when click
        checkboxPT.addEventListener('click', function () {
            if (checkboxPT.checked == true) {
                checkboxPT.checked = true;
                document.getElementById(`${getNameTd}`).innerText = 5;
                var data = 5;
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(
                    {
                        pt: data,
                    },
                )

            }
            if (checkboxPT.checked == false) {
                checkboxPT.checked = false;
                document.getElementById(`${getNameTd}`).innerText = 0;
                var data = 0;
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(
                    {
                        pt: data,
                    },
                )

            }
        })

    }
}
function toggleGet(source) {
    checkboxes = document.getElementsByName('myGet');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
}
toggleGet(this);

//Get All data to array
//Month and Times for Activity
document.getElementById('myMonthAct').addEventListener('change', function () {
    var monthact = document.getElementById('myMonthAct').value;
    localStorage.setItem('previewmonthAct', monthact);
    window.location.reload();

})
document.getElementById('myTimesAct').addEventListener('change', function () {
    var timesact = document.getElementById('myTimesAct').value;
    localStorage.setItem('previewtimesAct', timesact);
    window.location.reload();

})
document.getElementById('myGradeAct').addEventListener('change', function () {
    var gradeact = document.getElementById('myGradeAct').value;
    localStorage.setItem('previewgradeAct', gradeact);
    window.location.reload();

})
document.getElementById('myYearAct').addEventListener('change', function () {
    var yeareact = document.getElementById('myYearAct').value;
    localStorage.setItem('previewyeareAct', yeareact);
    window.location.reload();

})
document.getElementById('myDivide').addEventListener('change', function () {
    var diviact = document.getElementById('myDivide').value;
    localStorage.setItem('previewdiviAct', diviact);
    window.location.reload();

})

document.getElementById('myMonthAct').value = dbmonthAct;
document.getElementById('myTimesAct').value = dbtimesAct;
document.getElementById('myGradeAct').value = dbgradeAct;
document.getElementById('myYearAct').value = dbyearAct;
document.getElementById('myDivide').value = dbdiviAct;

// Push data to firebase
var actDataPreview = [];
setInterval(
    function () {
        $("#myTbaleActivity tbody tr").each(function () {
            var currentRow = $(this);
            var name = currentRow.find("td:eq(1)").html();
            var sex = currentRow.find("td:eq(2)").html();
            var book = currentRow.find("td:eq(3)").text();
            var pt = currentRow.find("td:eq(4)").text();
            var total = currentRow.find("td:eq(25)").text();
            var obj = {};
            obj.id = name;
            obj.name = name;
            obj.sex = sex;
            obj.book = book;
            obj.pt = pt;
            obj.total = total;
            if (currentRow.find(".chk").is(":checked")) {
                actDataPreview.push(obj);
            }
        });

    }
    , 1000);

document.getElementById('btnRows').addEventListener('click', function () {
    document.getElementById("alertMag").style.display = "none";
    document.getElementById("alertMagWait").style.display = "block";
    setTimeout(function () {
        // cook();
        saveToStock();
        setTimeout(function () {
            window.location.reload();
        }, 1500)
    }, 1500)

})
function cook() {
    for (i = 0; i < actDataPreview.length; i++) {
        var name = actDataPreview[i].name;
        var idM = actDataPreview[i].id;
        var sex = actDataPreview[i].sex;
        var book = actDataPreview[i].book;
        var pt = actDataPreview[i].pt;
        var total = actDataPreview[i].total;

        firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(
            {

                id: idM,
                sex: sex,
                book: book,
                pt: pt,
                total: total,
            },
        )

    }
}
function saveToStock() {
    for (i = 0; i < actDataPreview.length; i++) {
        var name = actDataPreview[i].name;
        var idM = actDataPreview[i].id;
        var sex = actDataPreview[i].sex;
        var total = actDataPreview[i].total;
        if (dbmonthAct == 'October') {
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + idM).update(
                {
                    speakingNov: total,
                },
            )
        }
        if (dbmonthAct == 'November') {
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + idM).update(
                {
                    speakingDec: total,
                },
            )
        }
        if (dbmonthAct == 'December') {
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + idM).update(
                {
                    speakingJan: total,
                },
            )
        }
        if (dbmonthAct == 'January') {
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + idM).update(
                {
                    speakingfeb: total,
                },
            )
        }
        if (dbmonthAct == 'February') {
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + idM).update(
                {
                    speakingmar: total,
                },
            )
        }
        if (dbmonthAct == 'March') {
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + idM).update(
                {
                    speakingma: total,
                },
            )
        }
        if (dbmonthAct == 'April-May') {
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + idM).update(
                {
                    speakingjun: total,
                },
            )
        }
        if (dbmonthAct == 'June') {
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + idM).update(
                {
                    speakingjuly: total,
                },
            )
        }
        if (dbmonthAct == 'July') {
            firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/` + idM).update(
                {
                    speakingfinal: total,
                },
            )
        }

    }
}
document.getElementById("showAlert").style.display = "none";
