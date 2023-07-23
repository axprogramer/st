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

var addItem = firebase.database().ref('addItems');
function submitForm(e) {
    e.preventDefault();
    var id = getElementVal("myID");
    var items = getElementVal("myItems");
    var qty = getElementVal("myQty");
    var price = getElementVal("myPrice");
    var total = getElementVal("myTotal");
    var date = getElementVal("myDate");
    var month = getElementVal("myMonth");
    var other = getElementVal("myOther");


    saveData(
        id, items, qty, price, total, date, month, other
    );

}
const saveData = (id, items, qty, price, total, date, month, other) => {
    var newData = addItem.push();
    newData.set({
        id: id,
        items: items,
        qty: qty,
        price: price,
        total: total,
        date: date,
        month: month,
        other: other

    });
};
const getElementVal = (id) => {
    return document.getElementById(id).value;
};
function selectAllData() {
    document.getElementById('showData').innerHTML = "";
    studentN0 = 0;
    NewBox();
    firebase.database().ref('addItems').once('value',
        function (AllRecords) {
            AllRecords.forEach(
                function (CurrentRecord) {
                    var id = CurrentRecord.val().id;
                    var items = CurrentRecord.val().items;
                    var qty = CurrentRecord.val().qty;
                    var price = CurrentRecord.val().price;
                    var total = CurrentRecord.val().total;
                    var date = CurrentRecord.val().date;
                    var month = CurrentRecord.val().month;
                    var other = CurrentRecord.val().other;
                    addItemsToTable(
                        id, items, qty, price, total, date, month, other
                    );
                }
            );
        });
}
window.onload = selectAllData;
var studentN0;

var stdList = [];
function addItemsToTable(
    id, items, qty, price, total, date, month, other
) {
    var tbody = document.getElementById('showData');
    stdList.push([
        id, items, qty, price, total, date, month, other
    ]);
    studentN0++;

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
    td0.innerHTML = studentN0;
    td1.innerHTML = id;
    td2.innerHTML = items;
    td3.innerHTML = qty;
    td4.innerHTML = price;
    td5.innerHTML = total + " $";
    td6.innerHTML = date;
    td7.innerHTML = month;
    td8.innerHTML = other;

    trow.appendChild(td0);
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);

    td1.innerHTML = `
            <button type="button" onclick="Fillbox(${studentN0})">${id}</button>`;

    tbody.appendChild(trow);
}


var Mid = document.getElementById("myID");
var Mitems = document.getElementById("myItems");
var Mqty = document.getElementById("myQty");
var Mprice = document.getElementById("myPrice");
var Mtotal = document.getElementById("myTotal");
var Mdate = document.getElementById("myDate");
var Mmonth = document.getElementById("myMonth");
var Mother = document.getElementById("myOther");

var submit = document.getElementById("mySubmit");
var update = document.getElementById("myUpdate");
var dele = document.getElementById("myDelete");

function Fillbox(index) {
    if (index == null) {
        submit.style.display = 'inline-block';
        update.style.display = 'none';
        dele.style.display = 'none';
    }
    else {
        --index;
        Mid.value = stdList[index][0];
        Mitems.value = stdList[index][1];
        Mqty.value = stdList[index][2];
        Mprice.value = stdList[index][3];
        Mtotal.value = stdList[index][4];
        Mdate.value = stdList[index][5];
        Mmonth.value = stdList[index][6];
        Mother.value = stdList[index][7];

        submit.style.display = 'none';
        update.style.display = 'inline-block';
        dele.style.display = 'inline-block';


    }
}

function NewBox() {
    submit.style.display = 'inline-block';
    update.style.display = 'none';
    dele.style.display = 'none';
    var Mid = document.getElementById("myID");
    var Mitems = document.getElementById("myItems");
    var Mqty = document.getElementById("myQty");
    var Mprice = document.getElementById("myPrice");
    var Mtotal = document.getElementById("myTotal");
    var Mdate = document.getElementById("myDate");
    var Mmonth = document.getElementById("myMonth");
    var Mother = document.getElementById("myOther");

    Mid.value = "";
    Mitems.value = "";
    Mqty.value = "";
    Mprice.value = "";
    Mtotal.value = "";
    Mdate.value = "";
    Mmonth.value = "";
    Mother.value = "";
}

function AddStd(e) {
    firebase.database().ref("addItems/" + Mid.value).set(
        {
            id: Mid.value,
            items: Mitems.value,
            qty: Mqty.value,
            price: Mprice.value,
            total: Mtotal.value,
            date: Mdate.value,
            month: Mmonth.value,
            other: Mother.value
        },
    )
    selectAllData();
    e.preventDefault();


}
function UpStd(e) {
    e.preventDefault();

    firebase.database().ref("addItems/" + Mid.value).update(
        {
            id: Mid.value,
            items: Mitems.value,
            qty: Mqty.value,
            price: Mprice.value,
            total: Mtotal.value,
            date: Mdate.value,
            month: Mmonth.value,
            other: Mother.value

        },
    )
    selectAllData();

}
function DelStd(e) {
    firebase.database().ref("addItems/" + Mid.value).remove().then(
        function () {
            selectAllData();
            e.preventDefault();

        }
    )
}
function DelStdAll() {
    firebase.database().ref("addItems").remove();

    // window.location.reload();
}
