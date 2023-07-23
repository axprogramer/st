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

    document.getElementById('myActivities').innerHTML = "";
    studentN0 = 0;
    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/`).once('value',
        function (AllRecords) {
            AllRecords.forEach(
                function (CurrentRecord) {
                    var name = CurrentRecord.val().name;
                    var id = CurrentRecord.val().id;
                    var sex = CurrentRecord.val().sex;
                    var date = CurrentRecord.val().date;
                    var s = CurrentRecord.val().s;
                    var w = CurrentRecord.val().w;
                    var a = CurrentRecord.val().a;
                    var attitude = CurrentRecord.val().attitude;
                    var note = CurrentRecord.val().note;
                    var total = CurrentRecord.val().total;
                    addItemsToTable(name, id,
                        sex, date, s, w, a, attitude, note,
                        total);

                }
            );
        });
}
window.onload = selectAllData;
var studentN0;

var stdList = [];
function addItemsToTable(name, id,
    sex, date, s, w, a, attitude, note,
    total) {
    var tbody = document.getElementById('myActivities');
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
    var td10 = document.createElement('br');
    var td11 = document.createElement('br');
    var td12 = document.createElement('br');
    var td13 = document.createElement('br');
    var td14 = document.createElement('br');
    var div1 = document.createElement('div');
    var span = document.createElement('span');
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');
    var span3 = document.createElement('span');
    var span4 = document.createElement('span');

    var noSpSS = id.replace(/\s+/g, '');
    span.id = `${id}rowS`;
    span.className = `${noSpSS}rowS`;
    span1.id = `${id}rowW`;
    span1.className = `${noSpSS}rowW`;
    span2.id = `${id}rowA`;
    span2.className = `${noSpSS}rowA`;
    span3.id = `${id}rowAtt`;
    span3.className = `${noSpSS}rowAtt`;
    span4.id = `${id}rowTotal`;

    td3.style.color = 'green';
    td4.style.color = 'green';
    td5.style.color = 'green';
    td6.style.color = 'red';
    td8.style.color = 'red';
    trow.setAttribute('class', 'item table');
    //checkbox
    var chkS = document.createElement('input');
    chkS.type = "checkbox";
    chkS.value = "3";
    chkS.setAttribute('name', 'myS');
    chkS.setAttribute('class', 'myS');
    chkS.setAttribute('id', `${id}s`);
    chkS.setAttribute('onclick', `dataS(${studentN0})`);

    var chkW = document.createElement('input');
    chkW.type = "checkbox";
    chkW.value = "1";
    chkW.setAttribute('name', 'myW');
    chkW.setAttribute('id', `${id}w`);

    var chkA = document.createElement('input');
    chkA.type = "checkbox";
    chkA.value = "1";
    chkA.setAttribute('name', 'myA');
    chkA.setAttribute('id', `${id}a`);
    var chkAtt = document.createElement('input');
    chkAtt.type = "checkbox";
    chkAtt.value = "-1";
    chkAtt.setAttribute('name', 'myAtt');
    chkAtt.setAttribute('id', `${id}att`);
    var chkGet = document.createElement('input');
    chkGet.type = "checkbox";
    chkGet.setAttribute('name', 'myGet');
    chkGet.setAttribute('class', 'chk');
    chkGet.checked = true;
    var ddd = document.getElementById('myDate');

    stdList.push([name, id,
        sex, date, s, w, a, attitude, note,
        total]);
    td0.innerHTML = ++studentN0;
    td1.innerHTML = id;
    td2.innerHTML = sex;
    ddd.value = date;
    if (s == undefined) {
        span.innerText = 0;

    } else {
        span.innerText = s;

    }
    if (w == undefined) {
        span1.innerText = 0;

    } else {
        span1.innerText = w;

    }
    if (a == undefined) {
        span2.innerText = 0;

    } else {
        span2.innerText = a;

    }
    if (attitude == undefined) {
        span3.innerText = 0;

    } else {
        span3.innerText = attitude;

    }
    if (total == undefined) {
        span4.innerText = 0;

    } else {
        span4.innerText = total;

    }
    if (note == undefined) {
        td7.innerHTML = '';
    } else {
        td7.innerHTML = note;
    }

    td7.contentEditable = true;

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
    td9.appendChild(chkGet);

    td3.appendChild(span);
    td3.appendChild(td10);

    td4.appendChild(span1);
    td4.appendChild(td11);

    td5.appendChild(span2);
    td5.appendChild(td12);

    td6.appendChild(span3);
    td6.appendChild(td13);

    td8.appendChild(span4);

    td3.appendChild(chkS);
    td4.appendChild(chkW);
    td5.appendChild(chkA);
    td6.appendChild(chkAtt);


    tbody.appendChild(trow);
    autoCheck();
    dataS();
    getTotalVal();
    // setData();
    document.getElementById("alertMagWait").style.display = "none";

}
console.log(stdList);
//Check all box
function toggleS(source) {
    var checkboxes = document.getElementsByName('myS');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        var idget1 = stdList[i][1]; // name
        var nameSS = `${idget1}s`; //for name S
        var namerowS = `${idget1}rowS`; //for name S
        var checkBoxs = document.getElementById(`${nameSS}`);
        checkboxes[i].checked = source.checked;
        if (checkBoxs.checked == true) {
            var s = 3;
            checkBoxs.checked = true;
            document.getElementById(`${namerowS}`).innerHTML = 3;
            if (dbtimesAct == 1) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 2) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 3) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 4) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 5) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 6) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 7) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 8) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 9) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 10) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 11) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 12) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 13) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 14) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 15) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 16) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 17) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 18) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 19) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 20) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }

        }
        if (checkBoxs.checked == false) {
            checkBoxs.checked = false;
            document.getElementById(`${namerowS}`).innerHTML = 0;
            if (dbtimesAct == 1) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 2) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 3) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 4) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 5) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 6) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 7) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 8) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 9) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 10) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 11) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 12) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 13) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 14) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 15) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 16) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 17) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 18) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 19) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 20) {
                var data = document.getElementById(`${namerowS}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget1).update(

                    {
                        s: data.innerText,
                    },
                )

            }
        }
    }

}
function toggleW(source) {
    var checkboxes = document.getElementsByName('myW');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
        var idget2 = stdList[i][1]; // for w
        var nameWW = `${idget2}w`; //for name w
        var namerowW = `${idget2}rowW`; //for name w
        var checkBoxw = document.getElementById(`${nameWW}`);
        if (checkBoxw.checked == true) {
            var w = 1;
            checkBoxw.checked = true;
            document.getElementById(`${namerowW}`).innerHTML = w;
            if (dbtimesAct == 1) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 2) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 3) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 4) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 5) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 6) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 7) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 8) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 9) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 10) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 11) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 12) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 13) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 14) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 15) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 16) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 17) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 18) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 19) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 20) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
        }
        if (checkBoxw.checked == false) {
            var w = 0;
            checkBoxw.checked = false;
            document.getElementById(`${namerowW}`).innerHTML = w;
            if (dbtimesAct == 1) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 2) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 3) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 4) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 5) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 6) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 7) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 8) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 9) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 10) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 11) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 12) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 13) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 14) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 15) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 16) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 17) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 18) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 19) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 20) {
                var data = document.getElementById(`${namerowW}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget2).update(

                    {
                        w: data.innerText,
                    },
                )

            }

        }
    }
}
function toggleA(source) {
    var checkboxes = document.getElementsByName('myA');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        var idget3 = stdList[i][1]; // for a
        var nameAA = `${idget3}a`; //for name a
        var namerowA = `${idget3}rowA`; //for name a
        var checkBoxa = document.getElementById(`${nameAA}`);
        checkboxes[i].checked = source.checked;
        if (checkBoxa.checked == true) {
            var a = 1;
            checkBoxa.checked = true;
            document.getElementById(`${namerowA}`).innerHTML = a;
            if (dbtimesAct == 1) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 2) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 3) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 4) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 5) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 6) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 7) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 8) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 9) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 10) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 11) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 12) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 13) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 14) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 15) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 16) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 17) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 18) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 19) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 20) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }

        }
        if (checkBoxa.checked == false) {
            var a = 0;
            checkBoxa.checked = false;
            document.getElementById(`${namerowA}`).innerHTML = a;
            if (dbtimesAct == 1) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 2) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 3) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 4) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 5) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 6) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 7) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 8) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 9) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 10) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 11) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 12) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 13) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 14) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 15) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 16) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 17) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 18) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 19) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 20) {
                var data = document.getElementById(`${namerowA}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget3).update(

                    {
                        a: data.innerText,
                    },
                )

            }

        }
    }
}
function toggleAtt(source) {
    var checkboxes = document.getElementsByName('myAtt');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        var idget4 = stdList[i][1]; // for a
        var nameAtt = `${idget4}att`; //for name att
        var namerowAtt = `${idget4}rowAtt`; //for name att
        var checkBoxatt = document.getElementById(`${nameAtt}`);
        checkboxes[i].checked = source.checked;
        if (checkBoxatt.checked == true) {
            var att = -1;
            checkBoxatt.checked = true;
            document.getElementById(`${namerowAtt}`).innerHTML = att;
            if (dbtimesAct == 1) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 2) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 3) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 4) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 5) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 6) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 7) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 8) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 9) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 10) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 11) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 12) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 13) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 14) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 15) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 16) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 17) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 18) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 19) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 20) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }

        }
        if (checkBoxatt.checked == false) {
            var att = 0;
            checkBoxatt.checked = false;
            document.getElementById(`${namerowAtt}`).innerHTML = att;
            if (dbtimesAct == 1) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 2) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 3) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 4) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 5) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 6) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 7) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 8) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 9) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 10) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 11) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 12) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 13) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 14) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 15) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 16) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 17) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 18) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 19) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 20) {
                var data = document.getElementById(`${namerowAtt}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idget4).update(

                    {
                        attitude: data.innerText,
                    },
                )

            }

        }
    }
}
//Check all row data in table
function toggleGet(source) {
    var checkboxes = document.getElementsByName('myGet');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
}
toggleGet(this);

setInterval(function () {
    $("#myTbaleActivity tbody tr").each(function () {

        var currentRow = $(this);
        var col1 = currentRow.find("td:eq(1)").html();
        var col2 = currentRow.find("td:eq(1)").html();
        var col3 = currentRow.find("td:eq(2)").html();
        var col4 = currentRow.find("td:eq(3)").text();
        var col5 = currentRow.find("td:eq(4)").text();
        var col6 = currentRow.find("td:eq(5)").text();
        var col7 = currentRow.find("td:eq(6)").text();
        var col8 = currentRow.find("td:eq(7)").html();
        var col9 = currentRow.find("td:eq(8)").text();
        var obj = {};
        obj.id = col1;
        obj.name = col2;
        obj.sex = col3;
        obj.s = col4;
        obj.w = col5;
        obj.a = col6;
        obj.attitude = col7;
        obj.note = col8;
        obj.total = col9;

        if (currentRow.find(".chk").is(":checked")) {
            activityData.push(obj);
        }
    });


}, 200);

function getTotalVal() {
    for (i = 0; i < stdList.length; i++) {

        //Sum for All score
        var name = stdList[i][1]; // khmer name
        var noSp = name.replace(/\s+/g, '');; // remove space
        var allTotal = `${name}rowTotal`;
        //remove space from name for class
        var noSpcS = `${noSp}rowS`;
        var noSpcW = `${noSp}rowW`;
        var noSpcA = `${noSp}rowA`;
        var noSpcAtt = `${noSp}rowAtt`;
        setInterval(function () {
            var sumS = 0;
            var sumW = 0;
            var sumA = 0;
            var sumAtt = 0;
            $(`.${noSpcS}`).each(function () {
                sumS += parseFloat($(this).text()); // 
            });
            $(`.${noSpcW}`).each(function () {
                sumW += parseFloat($(this).text()); // 
            });
            $(`.${noSpcA}`).each(function () {
                sumA += parseFloat($(this).text()); // 
            });
            $(`.${noSpcAtt}`).each(function () {
                sumAtt += parseFloat($(this).text()); // 
            });
            var getSum = parseFloat(sumS) + parseFloat(sumW) + parseFloat(sumA) + parseFloat(sumAtt);
            document.getElementById(`${allTotal}`).innerText = parseFloat(getSum);
            //Push total auto to Firebase
            if (dbtimesAct == 1) {
                var data = document.getElementById(`${allTotal}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(

                    {
                        total1: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 2) {
                var data = document.getElementById(`${allTotal}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(

                    {
                        total2: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 3) {
                var data = document.getElementById(`${allTotal}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(

                    {
                        total3: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 4) {
                var data = document.getElementById(`${allTotal}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(

                    {
                        total4: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 5) {
                var data = document.getElementById(`${allTotal}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(

                    {
                        total5: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 6) {
                var data = document.getElementById(`${allTotal}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(

                    {
                        total6: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 7) {
                var data = document.getElementById(`${allTotal}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(

                    {
                        total7: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 8) {
                var data = document.getElementById(`${allTotal}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(

                    {
                        total8: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 9) {
                var data = document.getElementById(`${allTotal}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(

                    {
                        total9: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 10) {
                var data = document.getElementById(`${allTotal}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(

                    {
                        total10: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 11) {
                var data = document.getElementById(`${allTotal}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(

                    {
                        total11: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 12) {
                var data = document.getElementById(`${allTotal}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(

                    {
                        total12: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 13) {
                var data = document.getElementById(`${allTotal}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(

                    {
                        total13: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 14) {
                var data = document.getElementById(`${allTotal}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(

                    {
                        total14: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 15) {
                var data = document.getElementById(`${allTotal}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(

                    {
                        total15: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 16) {
                var data = document.getElementById(`${allTotal}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(

                    {
                        total16: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 17) {
                var data = document.getElementById(`${allTotal}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(

                    {
                        total17: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 18) {
                var data = document.getElementById(`${allTotal}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(

                    {
                        total18: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 19) {
                var data = document.getElementById(`${allTotal}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(

                    {
                        total19: data.innerText,
                    },
                )

            }
            if (dbtimesAct == 20) {
                var data = document.getElementById(`${allTotal}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + name).update(

                    {
                        total20: data.innerText,
                    },
                )

            }


        }, 100);
    }
}
function dataS(index) {
    //S checked for checkbook
    // var ChID = stdList[index][1]; // for s
    for (i = 0; i < stdList.length; i++) {

        //get id for checkbox
        var name = stdList[i][1]; // for s
        var idget1 = `${name}s`; // for s
        var idget2 = `${name}w`; // for w
        var idget3 = `${name}a`; // for a
        var idget4 = `${name}att`; // for a
        //get name for checkbox id
        var nameSS = `${name}rowS`; //for name s
        var nameWW = `${name}rowW`; //for name w
        var nameAA = `${name}rowA`; //for name a
        var nameAtt = `${name}rowAtt`; //for name att
        //Checkbox varible
        var checkBoxs = document.getElementById(`${idget1}`);
        var checkBoxw = document.getElementById(`${idget2}`);
        var checkBoxa = document.getElementById(`${idget3}`);
        var checkBoxatt = document.getElementById(`${idget4}`);
        //Checkbox for S
        checkBoxs.addEventListener('click', function () {
            if (checkBoxs.checked == true) {
                var s = 3;
                checkBoxs.checked = true;
                document.getElementById(`${nameSS}`).innerHTML = s;
                if (dbtimesAct == 1) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 2) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 3) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 4) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 5) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 6) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 7) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 8) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 9) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 10) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 11) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 12) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 13) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 14) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 15) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 16) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 17) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 18) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 19) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 20) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }


            }
            if (checkBoxs.checked == false) {
                var s = 0;
                checkBoxs.checked = false;
                document.getElementById(`${nameSS}`).innerHTML = s;
                if (dbtimesAct == 1) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 2) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 3) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 4) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 5) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 6) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 7) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 8) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 9) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 10) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 11) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 12) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 13) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 14) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 15) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 16) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 17) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 18) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 19) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 20) {
                    var data = document.getElementById(`${nameSS}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            s: data.innerText,
                        },
                    )

                }
            }
        })
        //Checkbox for W
        checkBoxw.addEventListener('click', function () {
            if (checkBoxw.checked == true) {
                var w = 1;
                checkBoxw.checked = true;
                document.getElementById(`${nameWW}`).innerHTML = w;
                if (dbtimesAct == 1) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 2) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 3) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 4) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 5) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 6) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 7) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 8) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 9) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 10) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 11) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 12) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 13) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 14) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 15) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 16) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 17) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 18) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 19) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 20) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }

            }
            if (checkBoxw.checked == false) {
                var w = 0;
                checkBoxw.checked = false;
                document.getElementById(`${nameWW}`).innerHTML = w;
                if (dbtimesAct == 1) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 2) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 3) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 4) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 5) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 6) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 7) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 8) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 9) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 10) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 11) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 12) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 13) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 14) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 15) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 16) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 17) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 18) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 19) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 20) {
                    var data = document.getElementById(`${nameWW}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            w: data.innerText,
                        },
                    )

                }

            }
        })
        //Checkbox for A
        checkBoxa.addEventListener('click', function () {
            if (checkBoxa.checked == true) {
                var a = 1;
                checkBoxa.checked = true;
                document.getElementById(`${nameAA}`).innerHTML = a;
                if (dbtimesAct == 1) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 2) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 3) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 4) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 5) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 6) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 7) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 8) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 9) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 10) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 11) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 12) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 13) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 14) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 15) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 16) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 17) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 18) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 19) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 20) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }

            }
            if (checkBoxa.checked == false) {
                var a = 0;
                checkBoxa.checked = false;
                document.getElementById(`${nameAA}`).innerHTML = a;
                if (dbtimesAct == 1) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 2) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 3) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 4) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 5) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 6) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 7) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 8) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 9) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 10) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 11) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 12) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 13) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 14) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 15) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 16) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 17) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 18) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 19) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 20) {
                    var data = document.getElementById(`${nameAA}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            a: data.innerText,
                        },
                    )

                }

            }
        })
        //Checkbox for Att
        checkBoxatt.addEventListener('click', function () {
            if (checkBoxatt.checked == true) {
                var att = -1;
                checkBoxatt.checked = true;
                document.getElementById(`${nameAtt}`).innerHTML = att;
                if (dbtimesAct == 1) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 2) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 3) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 4) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 5) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 6) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 7) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 8) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 9) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 10) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 11) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 12) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 13) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 14) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 15) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 16) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 17) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 18) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 19) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 20) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }

            }
            if (checkBoxatt.checked == false) {
                var att = 0;
                checkBoxatt.checked = false;
                document.getElementById(`${nameAtt}`).innerHTML = att;
                if (dbtimesAct == 1) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 2) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 3) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 4) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 5) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 6) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 7) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 8) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 9) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 10) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 11) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 12) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 13) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 14) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 15) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 16) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 17) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 18) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 19) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }
                if (dbtimesAct == 20) {
                    var data = document.getElementById(`${nameAtt}`);
                    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + name).update(

                        {
                            attitude: data.innerText,
                        },
                    )

                }

            }
        })

    }
}
//Auto Checkbox
function autoCheck() {
    // checked for S W A ATT
    for (i = 0; i < stdList.length; i++) {

        var name = stdList[i][1]; // for s
        var idget1 = `${name}s`; // for s
        var idget2 = `${name}w`; // for w
        var idget3 = `${name}a`; // for a
        var idget4 = `${name}att`; // for a
        da1 = '3';
        da2 = '1';
        da3 = '1';
        da4 = '-1';
        var get1 = stdList[i][4];
        var get2 = stdList[i][5];
        var get3 = stdList[i][6];
        var get4 = stdList[i][7];

        var checkBoxs = document.getElementById(`${idget1}`);
        if (get1 == da1) {
            checkBoxs.checked = true;
        } else {
            checkBoxs.checked = false;
        }

        var checkBoxW = document.getElementById(`${idget2}`);
        if (get2 == da2) {
            checkBoxW.checked = true;
        } else {
            checkBoxW.checked = false;

        }

        var checkBoxA = document.getElementById(`${idget3}`);
        if (get3 == da3) {
            checkBoxA.checked = true;
        } else {
            checkBoxA.checked = false;

        }

        var checkBoxAtt = document.getElementById(`${idget4}`);
        if (get4 == da4) {
            checkBoxAtt.checked = true;
        } else {
            checkBoxAtt.checked = false;

        }
    }

};

//Get All data to array
//Month and Times for Activity
document.getElementById('myMonthAct').addEventListener('change', function () {
    var monthact = document.getElementById('myMonthAct').value;
    localStorage.setItem('ownmonthAct', monthact);
    window.location.reload();

})
document.getElementById('myTimesAct').addEventListener('change', function () {
    var timesact = document.getElementById('myTimesAct').value;
    localStorage.setItem('owntimesAct', timesact);
    window.location.reload();

})
document.getElementById('myDate').addEventListener('change', function () {
    var datesact = document.getElementById('myDate').value;
    localStorage.setItem('owndateAct', datesact);
    window.location.reload();

})
document.getElementById('myGradeAct').addEventListener('change', function () {
    var gradeact = document.getElementById('myGradeAct').value;
    localStorage.setItem('owngradeAct', gradeact);
    window.location.reload();

})
document.getElementById('myYearAct').addEventListener('change', function () {
    var yeareact = document.getElementById('myYearAct').value;
    localStorage.setItem('ownyeareAct', yeareact);
    window.location.reload();

})

var dbmonthAct = localStorage.getItem('ownmonthAct'); //month activity
var dbtimesAct = localStorage.getItem('owntimesAct'); // times activity
var dbdateAct = localStorage.getItem('owndateAct'); // date activity
var dbgradeAct = localStorage.getItem('owngradeAct'); // grade activity
var dbyearAct = localStorage.getItem('ownyeareAct'); // year activity
document.getElementById('myMonthAct').value = dbmonthAct;
document.getElementById('myTimesAct').value = dbtimesAct;
document.getElementById('myDate').value = dbdateAct;
document.getElementById('myGradeAct').value = dbgradeAct;
document.getElementById('myYearAct').value = dbyearAct;
//Save data to firebase
var activityData = [];
document.getElementById('btnRows').addEventListener('click', function () {
    document.getElementById("alertMag").style.display = "none";
    document.getElementById("alertMagWait").style.display = "block";
    setTimeout(function () {
        cook();
        totalData();
        setTimeout(function () {
            window.location.reload();
        }, 1500)
    }, 1500)
})
// Push data to firebase
function cook() {
    for (i = 0; i < activityData.length; i++) {
        var name = activityData[i].name;
        var idM = activityData[i].id;
        var sex = activityData[i].sex;
        var s = activityData[i].s;
        var w = activityData[i].w;
        var a = activityData[i].a;
        var attitude = activityData[i].attitude;
        var note = activityData[i].note;
        var total = activityData[i].total;
        firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idM).set(
            {
                name: name,
                sex: sex,
                id: idM,
                s: s,
                w: w,
                a: a,
                attitude: attitude,
                note: note,
                total: total,
                date: dbdateAct,
            },
        )

    }
}

// Push total data to firebase
function totalData() {
    for (i = 0; i < activityData.length; i++) {
        // var name = activityData[i].name;
        var idM = activityData[i].id;
        // var sex = activityData[i].sex;

        if (dbtimesAct == 1) {
            var total1 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    // name: name,
                    id: idM,
                    // sex: sex,
                    total1: total1,
                },
            )

        }
        if (dbtimesAct == 2) {
            var total2 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    // name: name,
                    id: idM,
                    // sex: sex,
                    total2: total2,
                },
            )

        }
        if (dbtimesAct == 3) {
            var total3 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    // name: name,
                    id: idM,
                    // sex: sex,
                    total3: total3,
                },
            )

        }
        if (dbtimesAct == 4) {
            var total4 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    // name: name,
                    id: idM,
                    // sex: sex,
                    total4: total4,
                },
            )

        }
        if (dbtimesAct == 5) {
            var total5 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    // name: name,
                    id: idM,
                    // sex: sex,
                    total5: total5,
                },
            )

        }
        if (dbtimesAct == 6) {
            var total6 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    // name: name,
                    id: idM,
                    // sex: sex,
                    total6: total6,
                },
            )

        }
        if (dbtimesAct == 7) {
            var total7 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    // name: name,
                    id: idM,
                    // sex: sex,
                    total7: total7,
                },
            )

        }
        if (dbtimesAct == 8) {
            var total8 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    // name: name,
                    id: idM,
                    // sex: sex,
                    total8: total8,
                },
            )

        }
        if (dbtimesAct == 9) {
            var total9 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    // name: name,
                    id: idM,
                    // sex: sex,
                    total9: total9,
                },
            )

        }
        if (dbtimesAct == 10) {
            var total10 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    // name: name,
                    id: idM,
                    // sex: sex,
                    total10: total10,
                },
            )

        }
        if (dbtimesAct == 11) {
            var total11 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    // name: name,
                    id: idM,
                    // sex: sex,
                    total11: total11,
                },
            )

        }
        if (dbtimesAct == 12) {
            var total12 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    // name: name,
                    id: idM,
                    // sex: sex,
                    total12: total12,
                },
            )

        }
        if (dbtimesAct == 13) {
            var total13 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    // name: name,
                    id: idM,
                    // sex: sex,
                    total13: total13,
                },
            )

        }
        if (dbtimesAct == 14) {
            var total14 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    // name: name,
                    id: idM,
                    // sex: sex,
                    total14: total14,
                },
            )

        }
        if (dbtimesAct == 15) {
            var total15 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    // name: name,
                    id: idM,
                    // sex: sex,
                    total15: total15,
                },
            )

        }
        if (dbtimesAct == 16) {
            var total16 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    // name: name,
                    id: idM,
                    // sex: sex,
                    total16: total16,
                },
            )

        }
        if (dbtimesAct == 17) {
            var total17 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    // name: name,
                    id: idM,
                    // sex: sex,
                    total17: total17,
                },
            )

        }
        if (dbtimesAct == 18) {
            var total18 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    // name: name,
                    id: idM,
                    // sex: sex,
                    total18: total18,
                },
            )

        }
        if (dbtimesAct == 19) {
            var total19 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    // name: name,
                    id: idM,
                    // sex: sex,
                    total19: total19,
                },
            )

        }
        if (dbtimesAct == 20) {
            var total20 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    // name: name,
                    id: idM,
                    // sex: sex,
                    total20: total20,
                },
            )

        }

    }
}
document.getElementById("showAlert").style.display = "none";
//push data to JOSON

// function setData(){
//     setTimeout(function(){

//         localStorage.setItem("myDataAct", JSON.stringify(activityData));

//     },200)
// }
// var getDataback = JSON.parse(localStorage.getItem("myDataAct"));
// getDataBackTo();
// function getDataBackTo(){
//     for(i=0;i<getDataback.length;i++){
//         var name = getDataback[i].sex;
//         console.log(name);
//     }
// }