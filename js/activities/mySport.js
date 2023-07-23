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

    document.getElementById('mySportAct').innerHTML = "";
    studentN0 = 0;
    firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/`).once('value',
        function (AllRecords) {
            AllRecords.forEach(
                function (sportData) {
                    var name = sportData.val().name;
                    var id = sportData.val().id;
                    var sex = sportData.val().sex;
                    var khname = sportData.val().khname;
                    var date1 = sportData.val().date1;
                    var date2 = sportData.val().date2;
                    var date3 = sportData.val().date3;
                    var date4 = sportData.val().date4;
                    var date5 = sportData.val().date5;
                    var topic1 = sportData.val().topic1;
                    var topic2 = sportData.val().topic2;
                    var topic3 = sportData.val().topic3;
                    var topic4 = sportData.val().topic4;
                    var topic5 = sportData.val().topic5;
                    var prac1 = sportData.val().prac1;
                    var prac2 = sportData.val().prac2;
                    var prac3 = sportData.val().prac3;
                    var prac4 = sportData.val().prac4;
                    var prac5 = sportData.val().prac5;
                    var uniform1 = sportData.val().uniform1;
                    var uniform2 = sportData.val().uniform2;
                    var uniform3 = sportData.val().uniform3;
                    var uniform4 = sportData.val().uniform4;
                    var uniform5 = sportData.val().uniform5;
                    var shoe1 = sportData.val().shoe1;
                    var shoe2 = sportData.val().shoe2;
                    var shoe3 = sportData.val().shoe3;
                    var shoe4 = sportData.val().shoe4;
                    var shoe5 = sportData.val().shoe5;
                    var total1 = sportData.val().total1;
                    var total2 = sportData.val().total2;
                    var total3 = sportData.val().total3;
                    var total4 = sportData.val().total4;
                    var total5 = sportData.val().total5;
                    var subTotal = sportData.val().subTotal;
                    addItemsToTable(
                        name, id, sex, khname, date1, date2,
                        date3, date4, date5, topic1, topic2, topic3,
                        topic4, topic5, prac1, prac2, prac3, prac4,
                        prac5, uniform1, uniform2, uniform3, uniform4, uniform5,
                        shoe1, shoe2, shoe3, shoe4, shoe5, total1,
                        total2, total3, total4, total5, subTotal,
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
    name, id, sex, khname, date1, date2,
    date3, date4, date5, topic1, topic2, topic3,
    topic4, topic5, prac1, prac2, prac3, prac4,
    prac5, uniform1, uniform2, uniform3, uniform4, uniform5,
    shoe1, shoe2, shoe3, shoe4, shoe5, total1,
    total2, total3, total4, total5, subTotal,
) {
    var tbody = document.getElementById('mySportAct');
    var trow = document.createElement('tr');
    var thead = document.createElement('thead');
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

    //Week 1
    var br1 = document.createElement('br');
    var br2 = document.createElement('br');
    var br3 = document.createElement('br');
    //Week 2
    var br4 = document.createElement('br');
    var br5 = document.createElement('br');
    var br6 = document.createElement('br');
    //Week 3
    var br7 = document.createElement('br');
    var br8 = document.createElement('br');
    var br9 = document.createElement('br');
    //Week 4
    var br10 = document.createElement('br');
    var br11 = document.createElement('br');
    var br12 = document.createElement('br');
    //Week 5
    var br13 = document.createElement('br');
    var br14 = document.createElement('br');
    var br15 = document.createElement('br');

    var div1 = document.createElement('div');
    //Week1
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');
    var span3 = document.createElement('span');
    var span4 = document.createElement('span');
    //Week 2
    var span5 = document.createElement('span');
    var span6 = document.createElement('span');
    var span7 = document.createElement('span');
    var span8 = document.createElement('span');
    //Week 3
    var span9 = document.createElement('span');
    var span10 = document.createElement('span');
    var span11 = document.createElement('span');
    var span12 = document.createElement('span');
    //Week 4
    var span13 = document.createElement('span');
    var span14 = document.createElement('span');
    var span15 = document.createElement('span');
    var span16 = document.createElement('span');
    //Week 5
    var span17 = document.createElement('span');
    var span18 = document.createElement('span');
    var span19 = document.createElement('span');
    var span20 = document.createElement('span');
    //Sub total
    var span21 = document.createElement('span');


    //Week 1
    var input1 = document.createElement('input');
    var input2 = document.createElement('input');
    var input3 = document.createElement('input');
    var input4 = document.createElement('input');
    //Week 2
    var input5 = document.createElement('input');
    var input6 = document.createElement('input');
    var input7 = document.createElement('input');
    //Week 3
    var input8 = document.createElement('input');
    var input9 = document.createElement('input');
    var input10 = document.createElement('input');
    //Week 4
    var input11 = document.createElement('input');
    var input12 = document.createElement('input');
    var input13 = document.createElement('input');
    //Week 5
    var input14 = document.createElement('input');
    var input15 = document.createElement('input');
    var input16 = document.createElement('input');

    //Set ID for ech td
    var noSpp = id.replace(/\s+/g, ''); //no name space
    thead.className = 'myFreze';

    //date values
    if (date1 == undefined) {
        document.getElementById('mySpDate1').value = '';
    } else {
        document.getElementById('mySpDate1').value = date1;
    }
    if (date2 == undefined) {
        document.getElementById('mySpDate2').value = '';
    } else {
        document.getElementById('mySpDate2').value = date2;
    }
    if (date3 == undefined) {
        document.getElementById('mySpDate3').value = '';
    } else {
        document.getElementById('mySpDate3').value = date3;
    }
    if (date4 == undefined) {
        document.getElementById('mySpDate4').value = '';
    } else {
        document.getElementById('mySpDate4').value = date4;
    }
    if (date5 == undefined) {
        document.getElementById('mySpDate5').value = '';
    } else {
        document.getElementById('mySpDate5').value = date5;
    }
    //Topic Values
    if (topic1 == undefined) {
        document.getElementById('myTopic1').value = '';
    } else {
        document.getElementById('myTopic1').value = topic1;
    }
    if (topic2 == undefined) {
        document.getElementById('myTopic2').value = '';
    } else {
        document.getElementById('myTopic2').value = topic2;
    }
    if (topic3 == undefined) {
        document.getElementById('myTopic3').value = '';
    } else {
        document.getElementById('myTopic3').value = topic3;
    }
    if (topic4 == undefined) {
        document.getElementById('myTopic4').value = '';
    } else {
        document.getElementById('myTopic4').value = topic4;
    }
    if (topic5 == undefined) {
        document.getElementById('myTopic5').value = '';
    } else {
        document.getElementById('myTopic5').value = topic5;
    }

    stdList.push([
        name, id, sex, khname, date1, date2,
        date3, date4, date5, topic1, topic2, topic3,
        topic4, topic5, prac1, prac2, prac3, prac4,
        prac5, uniform1, uniform2, uniform3, uniform4, uniform5,
        shoe1, shoe2, shoe3, shoe4, shoe5, total1,
        total2, total3, total4, total5, subTotal,
    ]);
    td0.innerHTML = ++studentN0;
    td1.innerHTML = id;
    td2.innerHTML = sex;
    //setup ID
    //week 1
    var p1 = `${noSpp}p1`;
    var u1 = `${noSpp}u1`;
    var sh1 = `${noSpp}sh1`;
    var to1 = `${noSpp}to1`;

    var sp1 = `${noSpp}sp1`;
    var su1 = `${noSpp}su1`;
    var ssh1 = `${noSpp}ssh1`;
    var sto1 = `${noSpp}sto1`;
    //Week 2
    var p2 = `${noSpp}p2`;
    var u2 = `${noSpp}u2`;
    var sh2 = `${noSpp}sh2`;
    var to2 = `${noSpp}to2`;

    var sp2 = `${noSpp}sp2`;
    var su2 = `${noSpp}su2`;
    var ssh2 = `${noSpp}ssh2`;
    var sto2 = `${noSpp}sto2`;
    //Week 3
    var p3 = `${noSpp}p3`;
    var u3 = `${noSpp}u3`;
    var sh3 = `${noSpp}sh3`;
    var to3 = `${noSpp}to3`;

    var sp3 = `${noSpp}sp3`;
    var su3 = `${noSpp}su3`;
    var ssh3 = `${noSpp}ssh3`;
    var sto3 = `${noSpp}sto3`;
    //Week 4
    var p4 = `${noSpp}p4`;
    var u4 = `${noSpp}u4`;
    var sh4 = `${noSpp}sh4`;
    var to4 = `${noSpp}to4`;

    var sp4 = `${noSpp}sp4`;
    var su4 = `${noSpp}su4`;
    var ssh4 = `${noSpp}ssh4`;
    var sto4 = `${noSpp}sto4`;
    //Week 5
    var p5 = `${noSpp}p5`;
    var u5 = `${noSpp}u5`;
    var sh5 = `${noSpp}sh5`;
    var to5 = `${noSpp}to5`;

    var sp5 = `${noSpp}sp5`;
    var su5 = `${noSpp}su5`;
    var ssh5 = `${noSpp}ssh5`;
    var sto5 = `${noSpp}sto5`;
    var subTotalall = `${noSpp}totalAll`;
    //Week 1
    span1.id = p1;
    span2.id = u1;
    span3.id = sh1;
    span4.id = to1;

    span1.className = sp1;
    span2.className = su1;
    span3.className = ssh1;
    span4.className = sto1;
    //Week 2
    span5.id = p2;
    span6.id = u2;
    span7.id = sh2;
    span8.id = to2;

    span5.className = sp2;
    span6.className = su2;
    span7.className = ssh2;
    span8.className = sto2;
    //Week 3
    span9.id = p3;
    span10.id = u3;
    span11.id = sh3;
    span12.id = to3;

    span9.className = sp3;
    span10.className = su3;
    span11.className = ssh3;
    span12.className = sto3;
    //Week 4
    span13.id = p4;
    span14.id = u4;
    span15.id = sh4;
    span16.id = to4;

    span13.className = sp4;
    span14.className = su4;
    span15.className = ssh4;
    span16.className = sto4;
    //Week 5
    span17.id = p5;
    span18.id = u5;
    span19.id = sh5;
    span20.id = to5;
    span21.id = subTotalall;

    span17.className = sp5;
    span18.className = su5;
    span19.className = ssh5;
    span20.className = sto5;
    span21.className = subTotalall;

    //setup checkbox
    //Week 1
    input1.type = 'checkbox';
    input1.id = `${noSpp}chP1`;
    input1.name = 'chP1';

    input2.type = 'checkbox';
    input2.id = `${noSpp}chU1`;
    input2.name = 'chU1';

    input3.type = 'checkbox';
    input3.id = `${noSpp}chSH1`;
    input3.name = 'chSH1';
    //Week 2
    input5.type = 'checkbox';
    input5.id = `${noSpp}chP2`;
    input5.name = 'chP2';

    input6.type = 'checkbox';
    input6.id = `${noSpp}chU2`;
    input6.name = 'chU2';

    input7.type = 'checkbox';
    input7.id = `${noSpp}chSH2`;
    input7.name = 'chSH2';
    //Week 3
    input8.type = 'checkbox';
    input8.id = `${noSpp}chP3`;
    input8.name = 'chP3';

    input9.type = 'checkbox';
    input9.id = `${noSpp}chU3`;
    input9.name = 'chU3';

    input10.type = 'checkbox';
    input10.id = `${noSpp}chSH3`;
    input10.name = 'chSH3';
    //Week 4
    input11.type = 'checkbox';
    input11.id = `${noSpp}chP4`;
    input11.name = 'chP4';

    input12.type = 'checkbox';
    input12.id = `${noSpp}chU4`;
    input12.name = 'chU4';

    input13.type = 'checkbox';
    input13.id = `${noSpp}chSH4`;
    input13.name = 'chSH4';
    //Week 5
    input14.type = 'checkbox';
    input14.id = `${noSpp}chP5`;
    input14.name = 'chP5';

    input15.type = 'checkbox';
    input15.id = `${noSpp}chU5`;
    input15.name = 'chU5';

    input16.type = 'checkbox';
    input16.id = `${noSpp}chSH5`;
    input16.name = 'chSH5';

    //Get checkbox for all
    input4.type = 'checkbox';
    input4.name = 'myGet';
    input4.checked = true;
    input4.className = "chSport";

    //setup css
    //Week 1
    span4.style.color = 'red';
    span4.style.fontWeight = 'bold';
    //week 2
    span8.style.color = 'red';
    span8.style.fontWeight = 'bold';
    //week 3
    span12.style.color = 'red';
    span12.style.fontWeight = 'bold';
    //week 4
    span16.style.color = 'red';
    span16.style.fontWeight = 'bold';
    //week 5
    span20.style.color = 'red';
    span20.style.fontWeight = 'bold';
    //Sub total
    span21.style.color = 'red';
    span21.style.fontWeight = 'bold';
    //Week 1
    if (prac1 == undefined) {
        span1.innerHTML = 0;
    } else {
        span1.innerHTML = prac1;
    }
    if (uniform1 == undefined) {
        span2.innerHTML = 0;
    } else {
        span2.innerHTML = uniform1;
    }
    if (shoe1 == undefined) {
        span3.innerHTML = 0;
    } else {
        span3.innerHTML = shoe1;
    }
    if (total1 == undefined) {
        span4.innerHTML = 0;
    } else {
        span4.innerHTML = total1;
    }
    //week 2
    if (prac2 == undefined) {
        span5.innerHTML = 0;
    } else {
        span5.innerHTML = prac2;
    }
    if (uniform2 == undefined) {
        span6.innerHTML = 0;
    } else {
        span6.innerHTML = uniform2;
    }
    if (shoe2 == undefined) {
        span7.innerHTML = 0;
    } else {
        span7.innerHTML = shoe2;
    }
    if (total2 == undefined) {
        span8.innerHTML = 0;
    } else {
        span8.innerHTML = total2;
    }
    //week 3
    if (prac3 == undefined) {
        span9.innerHTML = 0;
    } else {
        span9.innerHTML = prac3;
    }
    if (uniform3 == undefined) {
        span10.innerHTML = 0;
    } else {
        span10.innerHTML = uniform3;
    }
    if (shoe3 == undefined) {
        span11.innerHTML = 0;
    } else {
        span11.innerHTML = shoe3;
    }
    if (total3 == undefined) {
        span12.innerHTML = 0;
    } else {
        span12.innerHTML = total3;
    }
    //week 4
    if (prac4 == undefined) {
        span13.innerHTML = 0;
    } else {
        span13.innerHTML = prac4;
    }
    if (uniform4 == undefined) {
        span14.innerHTML = 0;
    } else {
        span14.innerHTML = uniform4;
    }
    if (shoe4 == undefined) {
        span15.innerHTML = 0;
    } else {
        span15.innerHTML = shoe4;
    }
    if (total4 == undefined) {
        span16.innerHTML = 0;
    } else {
        span16.innerHTML = total4;
    }
    //week 5
    if (prac5 == undefined) {
        span17.innerHTML = 0;
    } else {
        span17.innerHTML = prac5;
    }
    if (uniform5 == undefined) {
        span18.innerHTML = 0;
    } else {
        span18.innerHTML = uniform5;
    }
    if (shoe5 == undefined) {
        span19.innerHTML = 0;
    } else {
        span19.innerHTML = shoe5;
    }
    if (total5 == undefined) {
        span20.innerHTML = 0;
    } else {
        span20.innerHTML = total5;
    }
    if (subTotal == undefined) {
        span21.innerHTML = 0;
    } else {
        span21.innerHTML = subTotal;
    }
    span1.contentEditable = true;
    span2.contentEditable = true;
    span3.contentEditable = true;

    span5.contentEditable = true;
    span6.contentEditable = true;
    span7.contentEditable = true;

    span9.contentEditable = true;
    span10.contentEditable = true;
    span11.contentEditable = true;

    span13.contentEditable = true;
    span14.contentEditable = true;
    span15.contentEditable = true;

    span17.contentEditable = true;
    span18.contentEditable = true;
    span19.contentEditable = true;


    trow.appendChild(td0);
    trow.appendChild(thead);
    thead.appendChild(td1);
    
    // trow.appendChild(td1);
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

    td24.appendChild(input4);
    //Week 1
    td3.appendChild(span1);
    td3.appendChild(br1);
    td3.appendChild(input1);

    td4.appendChild(span2);
    td4.appendChild(br2);
    td4.appendChild(input2);

    td5.appendChild(span3);
    td5.appendChild(br3);
    td5.appendChild(input3);
    td6.appendChild(span4);
    //Week 2
    td7.appendChild(span5);
    td7.appendChild(br4);
    td7.appendChild(input5);

    td8.appendChild(span6);
    td8.appendChild(br5);
    td8.appendChild(input6);

    td9.appendChild(span7);
    td9.appendChild(br6);
    td9.appendChild(input7);
    td10.appendChild(span8);
    //Week 3
    td11.appendChild(span9);
    td11.appendChild(br7);
    td11.appendChild(input8);

    td12.appendChild(span10);
    td12.appendChild(br8);
    td12.appendChild(input9);

    td13.appendChild(span11);
    td13.appendChild(br9);
    td13.appendChild(input10);
    td14.appendChild(span12);
    //Week 4
    td15.appendChild(span13);
    td15.appendChild(br10);
    td15.appendChild(input11);

    td16.appendChild(span14);
    td16.appendChild(br11);
    td16.appendChild(input12);

    td17.appendChild(span15);
    td17.appendChild(br12);
    td17.appendChild(input13);
    td18.appendChild(span16);
    //Week 5
    td19.appendChild(span17);
    td19.appendChild(br13);
    td19.appendChild(input14);

    td20.appendChild(span18);
    td20.appendChild(br14);
    td20.appendChild(input15);

    td21.appendChild(span19);
    td21.appendChild(br15);
    td21.appendChild(input16);
    td22.appendChild(span20);
    td23.appendChild(span21);

    tbody.appendChild(trow);
    // getTotalVal();
    //week 1
    forcheckP1();
    forcheckU1();
    forcheckSH1();
    //week 2
    forcheckP2();
    forcheckU2();
    forcheckSH2();
    //week 3
    forcheckP3();
    forcheckU3();
    forcheckSH3();
    //week 4
    forcheckP4();
    forcheckU4();
    forcheckSH4();
    //week 5
    forcheckP5();
    forcheckU5();
    forcheckSH5();
    document.getElementById("alertMagWait").style.display = "none";
    document.getElementById("alertMagWait1").style.display = "none";
    document.getElementById("alertMagWait2").style.display = "none";
    document.getElementById("alertMagWait3").style.display = "none";
    document.getElementById("alertMagWait4").style.display = "none";
    document.getElementById("alertMagWait5").style.display = "none";

}
//Check all box
//Week 1
function checkP1(source) {
    var checkboxes = document.getElementsByName('chP1');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
    for (i = 0; i < stdList.length; i++) {
        var idget1 = stdList[i][1]; // for s
        var noSpp1 = idget1.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp1}chP1`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp2 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp2}p1`;
        var checkBoxp1 = document.getElementById(`${chID}`);
        if (checkBoxp1.checked == true) {
            checkBoxp1.checked = true;

            document.getElementById(`${chSPid}`).innerHTML = 5;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget1).update(

                {
                    prac1: data.innerText,
                },
            )


        } else {

            document.getElementById(`${chSPid}`).innerHTML = 0;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget1).update(

                {
                    prac1: data.innerText,
                },
            )

        }
    }

}
function forcheckP1() {
    for (i = 0; i < stdList.length; i++) {
        var idget1 = stdList[i][1]; // for s
        var noSpp1 = idget1.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp1}chP1`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp2 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp2}p1`;
        var checkBoxp1 = document.getElementById(`${chID}`);

        var sp = document.getElementById(`${chSPid}`);
        sp.addEventListener('input', function () {
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget1).update(

                {
                    prac1: data.innerText,
                },
            )
        })

        if (document.getElementById(`${chSPid}`).innerHTML == 5) {
            checkBoxp1.checked = true;
        } else {
            checkBoxp1.checked = false;
        }

        checkBoxp1.addEventListener('click', function () {
            if (checkBoxp1.checked == true) {
                checkBoxp1.checked = true;

                document.getElementById(`${chSPid}`).innerHTML = 5;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget1).update(

                    {
                        prac1: data.innerText,
                    },
                )
            }
            if (checkBoxp1.checked == false) {
                checkBoxp1.checked = false;
                document.getElementById(`${chSPid}`).innerHTML = 0;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget1).update(

                    {
                        prac1: data.innerText,
                    },
                )

            }
        })

    }

}
function checkU1(source) {
    var checkboxes = document.getElementsByName('chU1');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
    for (i = 0; i < stdList.length; i++) {
        var idget1 = stdList[i][1]; // for s
        var noSpp1 = idget1.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp1}chU1`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp2 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp2}u1`;
        var checkBoxU1 = document.getElementById(`${chID}`);
        if (checkBoxU1.checked == true) {
            checkBoxU1.checked = true;

            document.getElementById(`${chSPid}`).innerHTML = 3;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget1).update(

                {
                    uniform1: data.innerText,
                },
            )


        } else {

            document.getElementById(`${chSPid}`).innerHTML = 0;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget1).update(

                {
                    uniform1: data.innerText,
                },
            )

        }


    }

}
function forcheckU1() {
    for (i = 0; i < stdList.length; i++) {
        var idget1 = stdList[i][1]; // for s
        var noSpp1 = idget1.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp1}chU1`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp2 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp2}u1`;
        var checkBoxU1 = document.getElementById(`${chID}`);
        var sp = document.getElementById(`${chSPid}`);
        sp.addEventListener('input', function () {
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget1).update(

                {
                    uniform1: data.innerText,
                },
            )
        })

        if (document.getElementById(`${chSPid}`).innerHTML == 3) {
            checkBoxU1.checked = true;

        } else {
            checkBoxU1.checked = false;
        }

        checkBoxU1.addEventListener('click', function () {
            if (checkBoxU1.checked == true) {
                checkBoxU1.checked = true;

                document.getElementById(`${chSPid}`).innerHTML = 3;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget1).update(

                    {
                        uniform1: data.innerText,
                    },
                )


            }
            if (checkBoxU1.checked == false) {
                checkBoxU1.checked = false;
                document.getElementById(`${chSPid}`).innerHTML = 0;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget1).update(

                    {
                        uniform1: data.innerText,
                    },
                )


            }
        })

    }

}
function checkSH1(source) {
    var checkboxes = document.getElementsByName('chSH1');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
    for (i = 0; i < stdList.length; i++) {
        var idget1 = stdList[i][1]; // for s
        var noSpp1 = idget1.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp1}chSH1`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp2 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp2}sh1`;
        var checkBoxU1 = document.getElementById(`${chID}`);
        if (checkBoxU1.checked == true) {
            checkBoxU1.checked = true;

            document.getElementById(`${chSPid}`).innerHTML = 2;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget1).update(

                {
                    shoe1: data.innerText,
                },
            )


        } else {

            document.getElementById(`${chSPid}`).innerHTML = 0;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget1).update(

                {
                    shoe1: data.innerText,
                },
            )

        }

    }

}
function forcheckSH1(source) {
    for (i = 0; i < stdList.length; i++) {
        var idget1 = stdList[i][1]; // for s
        var noSpp1 = idget1.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp1}chSH1`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp2 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp2}sh1`;
        var checkBoxU1 = document.getElementById(`${chID}`);
        var sp = document.getElementById(`${chSPid}`);
        sp.addEventListener('input', function () {
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget1).update(

                {
                    shoe1: data.innerText,
                },
            )
        })

        if (document.getElementById(`${chSPid}`).innerHTML == 2) {
            checkBoxU1.checked = true;

        } else {
            checkBoxU1.checked = false;
        }
        checkBoxU1.addEventListener('click', function () {
            if (checkBoxU1.checked == true) {
                checkBoxU1.checked = true;

                document.getElementById(`${chSPid}`).innerHTML = 2;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget1).update(

                    {
                        shoe1: data.innerText,
                    },
                )


            }
            if (checkBoxU1.checked == false) {
                checkBoxU1.checked = false;
                document.getElementById(`${chSPid}`).innerHTML = 0;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget1).update(

                    {
                        shoe1: data.innerText,
                    },
                )


            }
        })

    }

}
//Week 2
function checkP2(source) {
    var checkboxes = document.getElementsByName('chP2');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
    for (i = 0; i < stdList.length; i++) {
        var idget2 = stdList[i][1]; // for s
        var noSpp2 = idget2.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp2}chP2`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp2 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp2}p2`;
        var checkBoxp2 = document.getElementById(`${chID}`);
        if (checkBoxp2.checked == true) {
            checkBoxp2.checked = true;

            document.getElementById(`${chSPid}`).innerHTML = 5;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget2).update(

                {
                    prac2: data.innerText,
                },
            )


        } else {

            document.getElementById(`${chSPid}`).innerHTML = 0;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget2).update(

                {
                    prac2: data.innerText,
                },
            )

        }
    }

}
function forcheckP2() {
    for (i = 0; i < stdList.length; i++) {
        var idget2 = stdList[i][1]; // for s
        var noSpp2 = idget2.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp2}chP2`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp2 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp2}p2`;
        var checkBoxp2 = document.getElementById(`${chID}`);
        var sp = document.getElementById(`${chSPid}`);
        sp.addEventListener('input', function () {
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget2).update(

                {
                    prac2: data.innerText,
                },
            )
        })

        if (document.getElementById(`${chSPid}`).innerHTML == 5) {
            checkBoxp2.checked = true;
        } else {
            checkBoxp2.checked = false;
        }

        checkBoxp2.addEventListener('click', function () {
            if (checkBoxp2.checked == true) {
                checkBoxp2.checked = true;

                document.getElementById(`${chSPid}`).innerHTML = 5;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget2).update(

                    {
                        prac2: data.innerText,
                    },
                )


            }
            if (checkBoxp2.checked == false) {
                checkBoxp2.checked = false;
                document.getElementById(`${chSPid}`).innerHTML = 0;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget2).update(

                    {
                        prac2: data.innerText,
                    },
                )


            }
        })

    }

}
function checkU2(source) {
    var checkboxes = document.getElementsByName('chU2');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
    for (i = 0; i < stdList.length; i++) {
        var idget2 = stdList[i][1]; // for s
        var noSpp2 = idget2.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp2}chU2`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp2 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp2}u2`;
        var checkBoxU2 = document.getElementById(`${chID}`);
        if (checkBoxU2.checked == true) {
            checkBoxU2.checked = true;

            document.getElementById(`${chSPid}`).innerHTML = 3;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget2).update(

                {
                    uniform2: data.innerText,
                },
            )


        } else {

            document.getElementById(`${chSPid}`).innerHTML = 0;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget2).update(

                {
                    uniform2: data.innerText,
                },
            )

        }


    }

}
function forcheckU2() {
    for (i = 0; i < stdList.length; i++) {
        var idget2 = stdList[i][1]; // for s
        var noSpp2 = idget2.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp2}chU2`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp2 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp2}u2`;
        var checkBoxU2 = document.getElementById(`${chID}`);
        var sp = document.getElementById(`${chSPid}`);
        sp.addEventListener('input', function () {
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget2).update(

                {
                    uniform2: data.innerText,
                },
            )
        })

        if (document.getElementById(`${chSPid}`).innerHTML == 3) {
            checkBoxU2.checked = true;

        } else {
            checkBoxU2.checked = false;
        }

        checkBoxU2.addEventListener('click', function () {
            if (checkBoxU2.checked == true) {
                checkBoxU2.checked = true;

                document.getElementById(`${chSPid}`).innerHTML = 3;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget2).update(

                    {
                        uniform2: data.innerText,
                    },
                )


            }
            if (checkBoxU2.checked == false) {
                checkBoxU2.checked = false;
                document.getElementById(`${chSPid}`).innerHTML = 0;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget2).update(

                    {
                        uniform2: data.innerText,
                    },
                )


            }
        })

    }

}
function checkSH2(source) {
    var checkboxes = document.getElementsByName('chSH2');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
    for (i = 0; i < stdList.length; i++) {
        var idget2 = stdList[i][1]; // for s
        var noSpp2 = idget2.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp2}chSH2`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp2 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp2}sh2`;
        var checkBoxU2 = document.getElementById(`${chID}`);
        if (checkBoxU2.checked == true) {
            checkBoxU2.checked = true;

            document.getElementById(`${chSPid}`).innerHTML = 2;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget2).update(

                {
                    shoe2: data.innerText,
                },
            )


        } else {

            document.getElementById(`${chSPid}`).innerHTML = 0;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget2).update(

                {
                    shoe2: data.innerText,
                },
            )

        }

    }

}
function forcheckSH2(source) {
    for (i = 0; i < stdList.length; i++) {
        var idget2 = stdList[i][1]; // for s
        var noSpp2 = idget2.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp2}chSH2`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp2 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp2}sh2`;
        var checkBoxU2 = document.getElementById(`${chID}`);
        var sp = document.getElementById(`${chSPid}`);
        sp.addEventListener('input', function () {
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget2).update(

                {
                    shoe2: data.innerText,
                },
            )
        })

        if (document.getElementById(`${chSPid}`).innerHTML == 2) {
            checkBoxU2.checked = true;

        } else {
            checkBoxU2.checked = false;
        }
        checkBoxU2.addEventListener('click', function () {
            if (checkBoxU2.checked == true) {
                checkBoxU2.checked = true;

                document.getElementById(`${chSPid}`).innerHTML = 2;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget2).update(

                    {
                        shoe2: data.innerText,
                    },
                )


            }
            if (checkBoxU2.checked == false) {
                checkBoxU2.checked = false;
                document.getElementById(`${chSPid}`).innerHTML = 0;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget2).update(

                    {
                        shoe2: data.innerText,
                    },
                )


            }
        })

    }

}
//Week 3
function checkP3(source) {
    var checkboxes = document.getElementsByName('chP3');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
    for (i = 0; i < stdList.length; i++) {
        var idget3 = stdList[i][1]; // for s
        var noSpp3 = idget3.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp3}chP3`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp3 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp3}p3`;
        var checkBoxp3 = document.getElementById(`${chID}`);
        if (checkBoxp3.checked == true) {
            checkBoxp3.checked = true;

            document.getElementById(`${chSPid}`).innerHTML = 5;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget3).update(

                {
                    prac3: data.innerText,
                },
            )


        } else {

            document.getElementById(`${chSPid}`).innerHTML = 0;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget3).update(

                {
                    prac3: data.innerText,
                },
            )

        }
    }

}
function forcheckP3() {
    for (i = 0; i < stdList.length; i++) {
        var idget3 = stdList[i][1]; // for s
        var noSpp3 = idget3.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp3}chP3`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp3 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp3}p3`;
        var checkBoxp3 = document.getElementById(`${chID}`);
        var sp = document.getElementById(`${chSPid}`);
        sp.addEventListener('input', function () {
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget3).update(

                {
                    prac3: data.innerText,
                },
            )
        })

        if (document.getElementById(`${chSPid}`).innerHTML == 5) {
            checkBoxp3.checked = true;
        } else {
            checkBoxp3.checked = false;
        }

        checkBoxp3.addEventListener('click', function () {
            if (checkBoxp3.checked == true) {
                checkBoxp3.checked = true;

                document.getElementById(`${chSPid}`).innerHTML = 5;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget3).update(

                    {
                        prac3: data.innerText,
                    },
                )


            }
            if (checkBoxp3.checked == false) {
                checkBoxp3.checked = false;
                document.getElementById(`${chSPid}`).innerHTML = 0;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget3).update(

                    {
                        prac3: data.innerText,
                    },
                )


            }
        })

    }

}
function checkU3(source) {
    var checkboxes = document.getElementsByName('chU3');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
    for (i = 0; i < stdList.length; i++) {
        var idget3 = stdList[i][1]; // for s
        var noSpp3 = idget3.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp3}chU3`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp3 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp3}u3`;
        var checkBoxU3 = document.getElementById(`${chID}`);
        if (checkBoxU3.checked == true) {
            checkBoxU3.checked = true;

            document.getElementById(`${chSPid}`).innerHTML = 3;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget3).update(

                {
                    uniform3: data.innerText,
                },
            )


        } else {

            document.getElementById(`${chSPid}`).innerHTML = 0;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget3).update(

                {
                    uniform3: data.innerText,
                },
            )

        }


    }

}
function forcheckU3() {
    for (i = 0; i < stdList.length; i++) {
        var idget3 = stdList[i][1]; // for s
        var noSpp3 = idget3.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp3}chU3`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp3 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp3}u3`;
        var checkBoxU3 = document.getElementById(`${chID}`);
        var sp = document.getElementById(`${chSPid}`);
        sp.addEventListener('input', function () {
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget3).update(

                {
                    uniform3: data.innerText,
                },
            )
        })

        if (document.getElementById(`${chSPid}`).innerHTML == 3) {
            checkBoxU3.checked = true;

        } else {
            checkBoxU3.checked = false;
        }

        checkBoxU3.addEventListener('click', function () {
            if (checkBoxU3.checked == true) {
                checkBoxU3.checked = true;

                document.getElementById(`${chSPid}`).innerHTML = 3;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget3).update(

                    {
                        uniform3: data.innerText,
                    },
                )


            }
            if (checkBoxU3.checked == false) {
                checkBoxU3.checked = false;
                document.getElementById(`${chSPid}`).innerHTML = 0;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget3).update(

                    {
                        uniform3: data.innerText,
                    },
                )


            }
        })

    }

}
function checkSH3(source) {
    var checkboxes = document.getElementsByName('chSH3');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
    for (i = 0; i < stdList.length; i++) {
        var idget3 = stdList[i][1]; // for s
        var noSpp3 = idget3.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp3}chSH3`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp3 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp3}sh3`;
        var checkBoxU3 = document.getElementById(`${chID}`);
        if (checkBoxU3.checked == true) {
            checkBoxU3.checked = true;

            document.getElementById(`${chSPid}`).innerHTML = 2;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget3).update(

                {
                    shoe3: data.innerText,
                },
            )


        } else {

            document.getElementById(`${chSPid}`).innerHTML = 0;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget3).update(

                {
                    shoe3: data.innerText,
                },
            )

        }

    }

}
function forcheckSH3() {
    for (i = 0; i < stdList.length; i++) {
        var idget3 = stdList[i][1]; // for s
        var noSpp3 = idget3.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp3}chSH3`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp3 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp3}sh3`;
        var checkBoxU3 = document.getElementById(`${chID}`);
        var sp = document.getElementById(`${chSPid}`);
        sp.addEventListener('input', function () {
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget3).update(

                {
                    shoe3: data.innerText,
                },
            )
        })

        if (document.getElementById(`${chSPid}`).innerHTML == 2) {
            checkBoxU3.checked = true;

        } else {
            checkBoxU3.checked = false;
        }
        checkBoxU3.addEventListener('click', function () {
            if (checkBoxU3.checked == true) {
                checkBoxU3.checked = true;

                document.getElementById(`${chSPid}`).innerHTML = 2;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget3).update(

                    {
                        shoe3: data.innerText,
                    },
                )


            }
            if (checkBoxU3.checked == false) {
                checkBoxU3.checked = false;
                document.getElementById(`${chSPid}`).innerHTML = 0;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget3).update(

                    {
                        shoe3: data.innerText,
                    },
                )


            }
        })

    }

}
//Week 4
function checkP4(source) {
    var checkboxes = document.getElementsByName('chP4');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
    for (i = 0; i < stdList.length; i++) {
        var idget4 = stdList[i][1]; // for s
        var noSpp4 = idget4.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp4}chP4`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp4 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp4}p4`;
        var checkBoxp4 = document.getElementById(`${chID}`);
        if (checkBoxp4.checked == true) {
            checkBoxp4.checked = true;

            document.getElementById(`${chSPid}`).innerHTML = 5;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget4).update(

                {
                    prac4: data.innerText,
                },
            )


        } else {

            document.getElementById(`${chSPid}`).innerHTML = 0;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget4).update(

                {
                    prac4: data.innerText,
                },
            )

        }
    }

}
function forcheckP4() {
    for (i = 0; i < stdList.length; i++) {
        var idget4 = stdList[i][1]; // for s
        var noSpp4 = idget4.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp4}chP4`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp4 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp4}p4`;
        var checkBoxp4 = document.getElementById(`${chID}`);
        var sp = document.getElementById(`${chSPid}`);
        sp.addEventListener('input', function () {
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget4).update(

                {
                    prac4: data.innerText,
                },
            )
        })

        if (document.getElementById(`${chSPid}`).innerHTML == 5) {
            checkBoxp4.checked = true;
        } else {
            checkBoxp4.checked = false;
        }

        checkBoxp4.addEventListener('click', function () {
            if (checkBoxp4.checked == true) {
                checkBoxp4.checked = true;

                document.getElementById(`${chSPid}`).innerHTML = 5;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget4).update(

                    {
                        prac4: data.innerText,
                    },
                )


            }
            if (checkBoxp4.checked == false) {
                checkBoxp4.checked = false;
                document.getElementById(`${chSPid}`).innerHTML = 0;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget4).update(

                    {
                        prac4: data.innerText,
                    },
                )


            }
        })

    }

}
function checkU4(source) {
    var checkboxes = document.getElementsByName('chU4');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
    for (i = 0; i < stdList.length; i++) {
        var idget4 = stdList[i][1]; // for s
        var noSpp4 = idget4.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp4}chU4`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp4 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp4}u4`;
        var checkBoxU4 = document.getElementById(`${chID}`);
        if (checkBoxU4.checked == true) {
            checkBoxU4.checked = true;

            document.getElementById(`${chSPid}`).innerHTML = 3;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget4).update(

                {
                    uniform4: data.innerText,
                },
            )


        } else {

            document.getElementById(`${chSPid}`).innerHTML = 0;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget4).update(

                {
                    uniform4: data.innerText,
                },
            )

        }


    }

}
function forcheckU4() {
    for (i = 0; i < stdList.length; i++) {
        var idget4 = stdList[i][1]; // for s
        var noSpp4 = idget4.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp4}chU4`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp4 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp4}u4`;
        var checkBoxU4 = document.getElementById(`${chID}`);
        var sp = document.getElementById(`${chSPid}`);
        sp.addEventListener('input', function () {
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget4).update(

                {
                    uniform4: data.innerText,
                },
            )
        })

        if (document.getElementById(`${chSPid}`).innerHTML == 3) {
            checkBoxU4.checked = true;

        } else {
            checkBoxU4.checked = false;
        }

        checkBoxU4.addEventListener('click', function () {
            if (checkBoxU4.checked == true) {
                checkBoxU4.checked = true;

                document.getElementById(`${chSPid}`).innerHTML = 3;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget4).update(

                    {
                        uniform4: data.innerText,
                    },
                )


            }
            if (checkBoxU4.checked == false) {
                checkBoxU4.checked = false;
                document.getElementById(`${chSPid}`).innerHTML = 0;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget4).update(

                    {
                        uniform4: data.innerText,
                    },
                )


            }
        })

    }

}
function checkSH4(source) {
    var checkboxes = document.getElementsByName('chSH4');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
    for (i = 0; i < stdList.length; i++) {
        var idget4 = stdList[i][1]; // for s
        var noSpp4 = idget4.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp4}chSH4`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp4 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp4}sh4`;
        var checkBoxU4 = document.getElementById(`${chID}`);
        if (checkBoxU4.checked == true) {
            checkBoxU4.checked = true;

            document.getElementById(`${chSPid}`).innerHTML = 2;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget4).update(

                {
                    shoe4: data.innerText,
                },
            )


        } else {

            document.getElementById(`${chSPid}`).innerHTML = 0;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget4).update(

                {
                    shoe4: data.innerText,
                },
            )


        }

    }

}
function forcheckSH4() {
    for (i = 0; i < stdList.length; i++) {
        var idget4 = stdList[i][1]; // for s
        var noSpp4 = idget4.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp4}chSH4`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp4 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp4}sh4`;
        var checkBoxU4 = document.getElementById(`${chID}`);
        var sp = document.getElementById(`${chSPid}`);
        sp.addEventListener('input', function () {
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget4).update(

                {
                    shoe4: data.innerText,
                },
            )
        })

        if (document.getElementById(`${chSPid}`).innerHTML == 2) {
            checkBoxU4.checked = true;

        } else {
            checkBoxU4.checked = false;
        }
        checkBoxU4.addEventListener('click', function () {
            if (checkBoxU4.checked == true) {
                checkBoxU4.checked = true;

                document.getElementById(`${chSPid}`).innerHTML = 2;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget4).update(

                    {
                        shoe4: data.innerText,
                    },
                )



            }
            if (checkBoxU4.checked == false) {
                checkBoxU4.checked = false;
                document.getElementById(`${chSPid}`).innerHTML = 0;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget4).update(

                    {
                        shoe4: data.innerText,
                    },
                )



            }
        })

    }

}
//Week 5
function checkP5(source) {
    var checkboxes = document.getElementsByName('chP5');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
    for (i = 0; i < stdList.length; i++) {
        var idget5 = stdList[i][1]; // for s
        var noSpp5 = idget5.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp5}chP5`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp5 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp5}p5`;
        var checkBoxp5 = document.getElementById(`${chID}`);
        if (checkBoxp5.checked == true) {
            checkBoxp5.checked = true;

            document.getElementById(`${chSPid}`).innerHTML = 5;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget5).update(

                {
                    prac5: data.innerText,
                },
            )



        } else {

            document.getElementById(`${chSPid}`).innerHTML = 0;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget5).update(

                {
                    prac5: data.innerText,
                },
            )

        }
    }

}
function forcheckP5() {
    for (i = 0; i < stdList.length; i++) {
        var idget5 = stdList[i][1]; // for s
        var noSpp5 = idget5.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp5}chP5`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp5 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp5}p5`;
        var checkBoxp5 = document.getElementById(`${chID}`);
        var sp = document.getElementById(`${chSPid}`);
        sp.addEventListener('input', function () {
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget5).update(

                {
                    prac5: data.innerText,
                },
            )
        })

        if (document.getElementById(`${chSPid}`).innerHTML == 5) {
            checkBoxp5.checked = true;
        } else {
            checkBoxp5.checked = false;
        }

        checkBoxp5.addEventListener('click', function () {
            if (checkBoxp5.checked == true) {
                checkBoxp5.checked = true;

                document.getElementById(`${chSPid}`).innerHTML = 5;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget5).update(

                    {
                        prac5: data.innerText,
                    },
                )


            }
            if (checkBoxp5.checked == false) {
                checkBoxp5.checked = false;
                document.getElementById(`${chSPid}`).innerHTML = 0;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget5).update(

                    {
                        prac5: data.innerText,
                    },
                )


            }
        })

    }

}
function checkU5(source) {
    var checkboxes = document.getElementsByName('chU5');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
    for (i = 0; i < stdList.length; i++) {
        var idget5 = stdList[i][1]; // for s
        var noSpp5 = idget5.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp5}chU5`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp5 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp5}u5`;
        var checkBoxU5 = document.getElementById(`${chID}`);
        if (checkBoxU5.checked == true) {
            checkBoxU5.checked = true;

            document.getElementById(`${chSPid}`).innerHTML = 3;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget5).update(

                {
                    uniform5: data.innerText,
                },
            )


        } else {

            document.getElementById(`${chSPid}`).innerHTML = 0;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget5).update(

                {
                    uniform5: data.innerText,
                },
            )

        }


    }

}
function forcheckU5() {
    for (i = 0; i < stdList.length; i++) {
        var idget5 = stdList[i][1]; // for s
        var noSpp5 = idget5.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp5}chU5`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp5 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp5}u5`;
        var checkBoxU5 = document.getElementById(`${chID}`);
        var sp = document.getElementById(`${chSPid}`);
        sp.addEventListener('input', function () {
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget5).update(

                {
                    uniform5: data.innerText,
                },
            )
        })

        if (document.getElementById(`${chSPid}`).innerHTML == 3) {
            checkBoxU5.checked = true;

        } else {
            checkBoxU5.checked = false;
        }

        checkBoxU5.addEventListener('click', function () {
            if (checkBoxU5.checked == true) {
                checkBoxU5.checked = true;

                document.getElementById(`${chSPid}`).innerHTML = 3;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget5).update(

                    {
                        uniform5: data.innerText,
                    },
                )


            }
            if (checkBoxU5.checked == false) {
                checkBoxU5.checked = false;
                document.getElementById(`${chSPid}`).innerHTML = 0;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget5).update(

                    {
                        uniform5: data.innerText,
                    },
                )


            }
        })

    }

}
function checkSH5(source) {
    var checkboxes = document.getElementsByName('chSH5');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
    for (i = 0; i < stdList.length; i++) {
        var idget5 = stdList[i][1]; // for s
        var noSpp5 = idget5.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp5}chSH5`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp5 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp5}sh5`;
        var checkBoxU5 = document.getElementById(`${chID}`);
        if (checkBoxU5.checked == true) {
            checkBoxU5.checked = true;

            document.getElementById(`${chSPid}`).innerHTML = 2;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget5).update(

                {
                    shoe5: data.innerText,
                },
            )


        } else {

            document.getElementById(`${chSPid}`).innerHTML = 0;
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget5).update(

                {
                    shoe5: data.innerText,
                },
            )

        }

    }

}
function forcheckSH5() {
    for (i = 0; i < stdList.length; i++) {
        var idget5 = stdList[i][1]; // for s
        var noSpp5 = idget5.replace(/\s+/g, ''); //no name space
        var chID = `${noSpp5}chSH5`;
        var nameSS = stdList[i][1]; //for name S
        var noSpp5 = nameSS.replace(/\s+/g, ''); //no name space
        var chSPid = `${noSpp5}sh5`;
        var checkBoxU5 = document.getElementById(`${chID}`);
        var sp = document.getElementById(`${chSPid}`);
        sp.addEventListener('input', function () {
            var data = document.getElementById(`${chSPid}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget5).update(

                {
                    shoe5: data.innerText,
                },
            )
        })

        if (document.getElementById(`${chSPid}`).innerHTML == 2) {
            checkBoxU5.checked = true;

        } else {
            checkBoxU5.checked = false;
        }
        checkBoxU5.addEventListener('click', function () {
            if (checkBoxU5.checked == true) {
                checkBoxU5.checked = true;

                document.getElementById(`${chSPid}`).innerHTML = 2;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget5).update(

                    {
                        shoe5: data.innerText,
                    },
                )


            }
            if (checkBoxU5.checked == false) {
                checkBoxU5.checked = false;
                document.getElementById(`${chSPid}`).innerHTML = 0;
                var data = document.getElementById(`${chSPid}`);
                firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idget5).update(

                    {
                        shoe5: data.innerText,
                    },
                )


            }
        })

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

// setInterval(function () {
//     $("#mySportRecord tbody tr").each(function () {
//         var currentRow = $(this);
//         var col1 = currentRow.find("td:eq(1)").html();
//         var col2 = currentRow.find("td:eq(2)").html();
//         //Week 1
//         var col3 = currentRow.find("td:eq(3)").text();
//         var col4 = currentRow.find("td:eq(4)").text();
//         var col5 = currentRow.find("td:eq(5)").text();
//         var col6 = currentRow.find("td:eq(6)").text();
//         //Week 2
//         var p2 = currentRow.find("td:eq(7)").text();
//         var u2 = currentRow.find("td:eq(8)").text();
//         var sh2 = currentRow.find("td:eq(9)").text();
//         var total2 = currentRow.find("td:eq(10)").text();
//         //Week 3
//         var p3 = currentRow.find("td:eq(11)").text();
//         var u3 = currentRow.find("td:eq(12)").text();
//         var sh3 = currentRow.find("td:eq(13)").text();
//         var total3 = currentRow.find("td:eq(14)").text();
//         //Week 4
//         var p4 = currentRow.find("td:eq(15)").text();
//         var u4 = currentRow.find("td:eq(16)").text();
//         var sh4 = currentRow.find("td:eq(17)").text();
//         var total4 = currentRow.find("td:eq(18)").text();
//         //Week 5
//         var p5 = currentRow.find("td:eq(19)").text();
//         var u5 = currentRow.find("td:eq(20)").text();
//         var sh5 = currentRow.find("td:eq(21)").text();
//         var total5 = currentRow.find("td:eq(22)").text();
//         var totalAll = currentRow.find("td:eq(23)").text();
//         var obj = {};
//         obj.id = col1;
//         obj.sex = col2;
//         //week 1
//         obj.p1 = col3;
//         obj.u1 = col4;
//         obj.sh1 = col5;
//         obj.total1 = col6;
//         //week 2
//         obj.p2 = p2;
//         obj.u2 = u2;
//         obj.sh2 = sh2;
//         obj.total2 = total2;
//         //week 3
//         obj.p3 = p3;
//         obj.u3 = u3;
//         obj.sh3 = sh3;
//         obj.total3 = total3;
//         //week 4
//         obj.p4 = p4;
//         obj.u4 = u4;
//         obj.sh4 = sh4;
//         obj.total4 = total4;
//         //week 5
//         obj.p5 = p5;
//         obj.u5 = u5;
//         obj.sh5 = sh5;
//         obj.total5 = total5;
//         obj.totalAll = totalAll;
//         if (currentRow.find(".chSport").is(":checked")) {
//             sportData.push(obj);
//         }
//     });


// }, 200);

document.getElementById('sumUpScore').onclick = getTotalVal;
function getTotalVal() {
    for (i = 0; i < stdList.length; i++) {
        var name = stdList[i][1]; // for s
        var noSpc = name.replace(/\s+/g, '');
        //Week 1
        var namep1 = `${noSpc}sp1`;
        var nameu1 = `${noSpc}su1`;
        var nameah1 = `${noSpc}ssh1`;
        var nametol1 = `${noSpc}to1`;
        //Week 2
        var namep2 = `${noSpc}sp2`;
        var nameu2 = `${noSpc}su2`;
        var nameah2 = `${noSpc}ssh2`;
        var nametol2 = `${noSpc}to2`;
        //Week 3
        var namep3 = `${noSpc}sp3`;
        var nameu3 = `${noSpc}su3`;
        var nameah3 = `${noSpc}ssh3`;
        var nametol3 = `${noSpc}to3`;
        //Week 4
        var namep4 = `${noSpc}sp4`;
        var nameu4 = `${noSpc}su4`;
        var nameah4 = `${noSpc}ssh4`;
        var nametol4 = `${noSpc}to4`;
        //Week 5
        var namep5 = `${noSpc}sp5`;
        var nameu5 = `${noSpc}su5`;
        var nameah5 = `${noSpc}ssh5`;
        var nametol5 = `${noSpc}to5`;
        var nametolAll = `${noSpc}totalAll`;
        // setInterval(function () {
            //Week 1
            var sp1 = 0;
            var su1 = 0;
            var ssh1 = 0;
            //Week 2
            var sp2 = 0;
            var su2 = 0;
            var ssh2 = 0;
            //Week 3
            var sp3 = 0;
            var su3 = 0;
            var ssh3 = 0;
            //Week 4
            var sp4 = 0;
            var su4 = 0;
            var ssh4 = 0;
            //Week 5
            var sp5 = 0;
            var su5 = 0;
            var ssh5 = 0;
            var allTotal = 0;
            //Week 1
            $(`.${namep1}`).each(function () {
                sp1 += parseFloat($(this).text()); // 
            });
            $(`.${nameu1}`).each(function () {
                su1 += parseFloat($(this).text()); // 
            });
            $(`.${nameah1}`).each(function () {
                ssh1 += parseFloat($(this).text()); // 
            });
            //Week 2
            $(`.${namep2}`).each(function () {
                sp2 += parseFloat($(this).text()); // 
            });
            $(`.${nameu2}`).each(function () {
                su2 += parseFloat($(this).text()); // 
            });
            $(`.${nameah2}`).each(function () {
                ssh2 += parseFloat($(this).text()); // 
            });
            //Week 3
            $(`.${namep3}`).each(function () {
                sp3 += parseFloat($(this).text()); // 
            });
            $(`.${nameu3}`).each(function () {
                su3 += parseFloat($(this).text()); // 
            });
            $(`.${nameah3}`).each(function () {
                ssh3 += parseFloat($(this).text()); // 
            });
            //Week 4
            $(`.${namep4}`).each(function () {
                sp4 += parseFloat($(this).text()); // 
            });
            $(`.${nameu4}`).each(function () {
                su4 += parseFloat($(this).text()); // 
            });
            $(`.${nameah4}`).each(function () {
                ssh4 += parseFloat($(this).text()); // 
            });
            //Week 5
            $(`.${namep5}`).each(function () {
                sp5 += parseFloat($(this).text()); // 
            });
            $(`.${nameu5}`).each(function () {
                su5 += parseFloat($(this).text()); // 
            });
            $(`.${nameah5}`).each(function () {
                ssh5 += parseFloat($(this).text()); // 
            });
            var getSum1 = parseFloat(sp1) + parseFloat(su1) + parseFloat(ssh1);
            var getSum2 = parseFloat(sp2) + parseFloat(su2) + parseFloat(ssh2);
            var getSum3 = parseFloat(sp3) + parseFloat(su3) + parseFloat(ssh3);
            var getSum4 = parseFloat(sp4) + parseFloat(su4) + parseFloat(ssh4);
            var getSum5 = parseFloat(sp5) + parseFloat(su5) + parseFloat(ssh5);
            document.getElementById(`${nametol1}`).innerText = parseFloat(getSum1);
            document.getElementById(`${nametol2}`).innerText = parseFloat(getSum2);
            document.getElementById(`${nametol3}`).innerText = parseFloat(getSum3);
            document.getElementById(`${nametol4}`).innerText = parseFloat(getSum4);
            document.getElementById(`${nametol5}`).innerText = parseFloat(getSum5);
            var allGetTotal = parseFloat(getSum1) + parseFloat(getSum2) + parseFloat(getSum3) + parseFloat(getSum4) + parseFloat(getSum5);
            var totalDivid = parseFloat(allGetTotal) / `${dbgetDivide}`;
            totalDivid = parseFloat(totalDivid).toFixed(2);
            document.getElementById(`${nametolAll}`).innerText = parseFloat(totalDivid);
            var data = document.getElementById(`${nametolAll}`);
            // var data1 = document.getElementById(`${nametol1}`);
            // var data2 = document.getElementById(`${nametol2}`);
            // var data3 = document.getElementById(`${nametol3}`);
            // var data4 = document.getElementById(`${nametol4}`);
            // var data5 = document.getElementById(`${nametol5}`);
            firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + name).update(

                {
                    // total1: data1.innerText,
                    // total2: data2.innerText,
                    // total3: data3.innerText,
                    // total4: data4.innerText,
                    // total5: data5.innerText,
                    subTotal: data.innerText,
                },
            )

        // }, 100);
    }
}

document.getElementById('myMonthAct').addEventListener('change', function () {
    var monthact = document.getElementById('myMonthAct').value;
    localStorage.setItem('sportmonthAct', monthact);
    window.location.reload();

})
document.getElementById('myDivide').addEventListener('change', function () {
    var getDivide = document.getElementById('myDivide').value;
    localStorage.setItem('getDivide', getDivide);
    window.location.reload();

})
document.getElementById('myGradeAct').addEventListener('change', function () {
    var gradeact = document.getElementById('myGradeAct').value;
    localStorage.setItem('sportgradeAct', gradeact);
    window.location.reload();

})
document.getElementById('myYearAct').addEventListener('change', function () {
    var yeareact = document.getElementById('myYearAct').value;
    localStorage.setItem('sportyeareAct', yeareact);
    window.location.reload();

})
//Get Date value
document.getElementById('mySpDate1').addEventListener('change', function () {
    // var dateWeek1 = document.getElementById('mySpDate1').value;
    // localStorage.setItem('dateWeek1', dateWeek1);
    // window.location.reload();
    var data = this.value;
    for (i = 0; i < stdList.length; i++) {
        var name = stdList[i][1]; // for s

        firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + name).update(

            {
                date1: data,
            },
        )
    }

})
document.getElementById('mySpDate2').addEventListener('change', function () {
    // var dateWeek2 = document.getElementById('mySpDate2').value;
    // localStorage.setItem('dateWeek2', dateWeek2);
    // window.location.reload();
    var data = this.value;
    for (i = 0; i < stdList.length; i++) {
        var name = stdList[i][1]; // for s

        firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + name).update(

            {
                date2: data,
            },
        )
    }

})
document.getElementById('mySpDate3').addEventListener('change', function () {
    // var dateWeek3 = document.getElementById('mySpDate3').value;
    // localStorage.setItem('dateWeek3', dateWeek3);
    // window.location.reload();
    var data = this.value;
    for (i = 0; i < stdList.length; i++) {
        var name = stdList[i][1]; // for s

        firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + name).update(

            {
                date3: data,
            },
        )
    }

})
document.getElementById('mySpDate4').addEventListener('change', function () {
    // var dateWeek4 = document.getElementById('mySpDate4').value;
    // localStorage.setItem('dateWeek4', dateWeek4);
    // window.location.reload();
    var data = this.value;
    for (i = 0; i < stdList.length; i++) {
        var name = stdList[i][1]; // for s

        firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + name).update(

            {
                date4: data,
            },
        )
    }

})
document.getElementById('mySpDate5').addEventListener('change', function () {
    // var dateWeek5 = document.getElementById('mySpDate5').value;
    // localStorage.setItem('dateWeek5', dateWeek5);
    // window.location.reload();
    var data = this.value;
    for (i = 0; i < stdList.length; i++) {
        var name = stdList[i][1]; // for s

        firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + name).update(

            {
                date5: data,
            },
        )
    }

})

var dbmonthAct = localStorage.getItem('sportmonthAct'); //month activity
var dbgetDivide = localStorage.getItem('getDivide'); // times activity
var dbgradeAct = localStorage.getItem('sportgradeAct'); // grade activity
var dbyearAct = localStorage.getItem('sportyeareAct'); // year activity
var dateWeek1 = localStorage.getItem('dateWeek1'); // Date in week 1
var dateWeek2 = localStorage.getItem('dateWeek2'); // Date in week 2
var dateWeek3 = localStorage.getItem('dateWeek3'); // Date in week 3
var dateWeek4 = localStorage.getItem('dateWeek4'); // Date in week 4
var dateWeek5 = localStorage.getItem('dateWeek5'); // Date in week 5
document.getElementById('myMonthAct').value = dbmonthAct;
document.getElementById('myDivide').value = dbgetDivide;
document.getElementById('myGradeAct').value = dbgradeAct;
document.getElementById('myYearAct').value = dbyearAct;

//Get topic value
document.getElementById('myTopic1').addEventListener('input', function () {
    // var getTopic1 = document.getElementById('myTopic1').value;
    // localStorage.setItem('myTopicget1', getTopic1);
    // window.location.reload();
    var data = this.value;
    for (i = 0; i < stdList.length; i++) {
        var name = stdList[i][1]; // for s

        firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + name).update(

            {
                topic1: data,
            },
        )
    }
})
document.getElementById('myTopic2').addEventListener('input', function () {
    // var getTopic2 = document.getElementById('myTopic2').value;
    // localStorage.setItem('myTopicget2', getTopic2);
    // window.location.reload();
    var data = this.value;
    for (i = 0; i < stdList.length; i++) {
        var name = stdList[i][1]; // for s

        firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + name).update(

            {
                topic2: data,
            },
        )
    }


})
document.getElementById('myTopic3').addEventListener('input', function () {
    // var getTopic3 = document.getElementById('myTopic3').value;
    // localStorage.setItem('myTopicget3', getTopic3);
    // window.location.reload();
    var data = this.value;
    for (i = 0; i < stdList.length; i++) {
        var name = stdList[i][1]; // for s

        firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + name).update(

            {
                topic3: data,
            },
        )
    }


})
document.getElementById('myTopic4').addEventListener('input', function () {
    // var getTopic4 = document.getElementById('myTopic4').value;
    // localStorage.setItem('myTopicget4', getTopic4);
    // window.location.reload();
    var data = this.value;
    for (i = 0; i < stdList.length; i++) {
        var name = stdList[i][1]; // for s

        firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + name).update(

            {
                topic4: data,
            },
        )
    }

})
document.getElementById('myTopic5').addEventListener('input', function () {
    // var getTopic5 = document.getElementById('myTopic5').value;
    // localStorage.setItem('myTopicget5', getTopic5);
    // window.location.reload();
    var data = this.value;
    for (i = 0; i < stdList.length; i++) {
        var name = stdList[i][1]; // for s

        firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + name).update(

            {
                topic5: data,
            },
        )
    }

})
// var dbgetTopic1 = localStorage.getItem('myTopicget1'); //get value of topic 1
// document.getElementById('myTopic1').value = dbgetTopic1;
// var dbgetTopic2 = localStorage.getItem('myTopicget2'); //get value of topic 2
// document.getElementById('myTopic2').value = dbgetTopic2;
// var dbgetTopic3 = localStorage.getItem('myTopicget3'); //get value of topic 3
// document.getElementById('myTopic3').value = dbgetTopic3;
// var dbgetTopic4 = localStorage.getItem('myTopicget4'); //get value of topic 4
// document.getElementById('myTopic4').value = dbgetTopic4;
// var dbgetTopic5 = localStorage.getItem('myTopicget5'); //get value of topic 5
// document.getElementById('myTopic5').value = dbgetTopic5;

//Save data to firebase
var sportData = [];
document.getElementById('btnRows').addEventListener('click', function () {
    document.getElementById("alertMag").style.display = "none";
    document.getElementById("alertMagWait").style.display = "block";
    setTimeout(function () {
        updateScore();
        setTimeout(function () {
            window.location.reload();
        }, 1500)
    }, 1500)
})
document.getElementById('btnSave1').addEventListener('click', function () {
    document.getElementById("alertMag1").style.display = "none";
    document.getElementById("alertMagWait1").style.display = "block";
    setTimeout(function () {
        saveData1();
        setTimeout(function () {
            window.location.reload();
        }, 1500)
    }, 1500)
})
document.getElementById('btnSave2').addEventListener('click', function () {
    document.getElementById("alertMag2").style.display = "none";
    document.getElementById("alertMagWait2").style.display = "block";
    setTimeout(function () {
        saveData2();
        setTimeout(function () {
            window.location.reload();
        }, 1500)
    }, 1500)
})
document.getElementById('btnSave3').addEventListener('click', function () {
    document.getElementById("alertMag3").style.display = "none";
    document.getElementById("alertMagWait3").style.display = "block";
    setTimeout(function () {
        saveData3();
        setTimeout(function () {
            window.location.reload();
        }, 1500)
    }, 1500)
})
document.getElementById('btnSave4').addEventListener('click', function () {
    document.getElementById("alertMag4").style.display = "none";
    document.getElementById("alertMagWait4").style.display = "block";
    setTimeout(function () {
        saveData4();
        setTimeout(function () {
            window.location.reload();
        }, 1500)
    }, 1500)
})
document.getElementById('btnSave5').addEventListener('click', function () {
    document.getElementById("alertMag5").style.display = "none";
    document.getElementById("alertMagWait5").style.display = "block";
    setTimeout(function () {
        saveData5();
        setTimeout(function () {
            window.location.reload();
        }, 1500)
    }, 1500)
})
// Push data to firebase
function updateScore() {
    for (i = 0; i < sportData.length; i++) {
        var idM = sportData[i].id;
        var sex = sportData[i].sex;
        //Week 1
        var p1 = sportData[i].p1;
        var u1 = sportData[i].u1;
        var sh1 = sportData[i].sh1;
        var total1 = sportData[i].total1;
        //Week 2
        var p2 = sportData[i].p2;
        var u2 = sportData[i].u2;
        var sh2 = sportData[i].sh2;
        var total2 = sportData[i].total2;
        //Week 3
        var p3 = sportData[i].p3;
        var u3 = sportData[i].u3;
        var sh3 = sportData[i].sh3;
        var total3 = sportData[i].total3;
        //Week 4
        var p4 = sportData[i].p4;
        var u4 = sportData[i].u4;
        var sh4 = sportData[i].sh4;
        var total4 = sportData[i].total4;
        //Week 5
        var p5 = sportData[i].p5;
        var u5 = sportData[i].u5;
        var sh5 = sportData[i].sh5;
        var total5 = sportData[i].total5;
        var totalAll = sportData[i].totalAll;

        firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idM).set(
            {
                name: idM,
                id: idM,
                sex: sex,
                prac1: p1,
                uniform1: u1,
                shoe1: sh1,
                total1: total1,
                date1: dateWeek1,
                topic1: dbgetTopic1,
                prac2: p2,
                uniform2: u2,
                shoe2: sh2,
                total2: total2,
                date2: dateWeek2,
                topic2: dbgetTopic2,
                prac3: p3,
                uniform3: u3,
                shoe3: sh3,
                total3: total3,
                date3: dateWeek3,
                topic3: dbgetTopic3,
                prac4: p4,
                uniform4: u4,
                shoe4: sh4,
                total4: total4,
                date4: dateWeek4,
                topic4: dbgetTopic4,
                prac5: p5,
                uniform5: u5,
                shoe5: sh5,
                total5: total5,
                date5: dateWeek5,
                topic5: dbgetTopic5,
                subTotal: totalAll,
            },
        )

    }
}
function saveData5() {
    for (i = 0; i < sportData.length; i++) {
        var idM = sportData[i].id;
        var sex = sportData[i].sex;
        //Week 5
        var p5 = sportData[i].p5;
        var u5 = sportData[i].u5;
        var sh5 = sportData[i].sh5;
        var total5 = sportData[i].total5;
        var totalAll = sportData[i].totalAll;

        firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idM).update(
            {
                name: idM,
                id: idM,
                sex: sex,
                prac5: p5,
                uniform5: u5,
                shoe5: sh5,
                total5: total5,
                date5: dateWeek5,
                topic5: dbgetTopic5,
                subTotal: totalAll,
            },
        )

    }
}
function saveData4() {
    for (i = 0; i < sportData.length; i++) {
        var idM = sportData[i].id;
        var sex = sportData[i].sex;
        //Week 4
        var p4 = sportData[i].p4;
        var u4 = sportData[i].u4;
        var sh4 = sportData[i].sh4;
        var total4 = sportData[i].total4;
        var totalAll = sportData[i].totalAll;

        firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idM).update(
            {
                name: idM,
                id: idM,
                sex: sex,
                prac4: p4,
                uniform4: u4,
                shoe4: sh4,
                total4: total4,
                date4: dateWeek4,
                topic4: dbgetTopic4,
                subTotal: totalAll,
            },
        )

    }
}
function saveData3() {
    for (i = 0; i < sportData.length; i++) {
        var idM = sportData[i].id;
        var sex = sportData[i].sex;
        //Week 3
        var p3 = sportData[i].p3;
        var u3 = sportData[i].u3;
        var sh3 = sportData[i].sh3;
        var total3 = sportData[i].total3;
        var totalAll = sportData[i].totalAll;

        firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idM).update(
            {
                name: idM,
                id: idM,
                sex: sex,
                prac3: p3,
                uniform3: u3,
                shoe3: sh3,
                total3: total3,
                date3: dateWeek3,
                topic3: dbgetTopic3,
                subTotal: totalAll,
            },
        )

    }
}
function saveData2() {
    for (i = 0; i < sportData.length; i++) {
        var idM = sportData[i].id;
        var sex = sportData[i].sex;
        //Week 2
        var p2 = sportData[i].p2;
        var u2 = sportData[i].u2;
        var sh2 = sportData[i].sh2;
        var total2 = sportData[i].total2;
        var totalAll = sportData[i].totalAll;

        firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idM).update(
            {
                name: idM,
                id: idM,
                sex: sex,
                prac2: p2,
                uniform2: u2,
                shoe2: sh2,
                total2: total2,
                date2: dateWeek2,
                topic2: dbgetTopic2,
                subTotal: totalAll,
            },
        )

    }
}
function saveData1() {
    for (i = 0; i < sportData.length; i++) {
        var idM = sportData[i].id;
        var sex = sportData[i].sex;
        //Week 1
        var p1 = sportData[i].p1;
        var u1 = sportData[i].u1;
        var sh1 = sportData[i].sh1;
        var total1 = sportData[i].total1;

        var totalAll = sportData[i].totalAll;

        firebase.database().ref(`${dbgradeAct}/` + `recordSport/` + `${dbyearAct}/` + `${dbmonthAct}/` + idM).update(
            {
                name: idM,
                id: idM,
                sex: sex,
                prac1: p1,
                uniform1: u1,
                shoe1: sh1,
                total1: total1,
                date1: dateWeek1,
                topic1: dbgetTopic1,
                subTotal: totalAll,
            },
        )

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