import { getDatabase, set, onValue, ref, push, child } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDHRW9oyKbF2gHsbjpYGqTXcdK1vF5wlLc",
    authDomain: "login-signup-bbaab.firebaseapp.com",
    databaseURL: "https://login-signup-bbaab-default-rtdb.firebaseio.com",
    projectId: "login-signup-bbaab",
    storageBucket: "login-signup-bbaab.appspot.com",
    messagingSenderId: "550836438843",
    appId: "1:550836438843:web:282d0a730f52acb4a2991e"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getDatabase();

var id = document.getElementById("myID");
var items = document.getElementById("myItems");
var qty = document.getElementById("myQty");
var price = document.getElementById("myPrice");
var total = document.getElementById("myTotal");
var date = document.getElementById("myDate");
var month = document.getElementById("myMonth");
var other = document.getElementById("myOther");

function InsertData() {
    set(ref(db, "addItems/" + id.value), {
        id: id.value,
        items: items.value,
        qty: qty.value,
        price: price.value,
        total: total.value,
        date: date.value,
        month: month.value,
        other: other.value
    })
        .then(() => {
            alert("ទិន្នន័យបានបញ្ចូលជោគជ័យ");
        })
        .catch((error) => {
            alert("ទិន្នន័យមិនអាចបញ្ចូលបាន, error" + error);
        })
}
document.getElementById("mySubmit").addEventListener('click', InsertData);
var stdList = [];

function showData() {
    let No = 0;
    const dbRef = ref(db, 'addItems');
    Fillbox();

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            let tbody = document.getElementById("showData");

            stdList.push([id,items,qty,price,total,date,month,other]);
            // ...
            No++;

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
            td0.innerHTML = No;
            td1.innerHTML = childData.id;
            td2.innerHTML = childData.items;
            td3.innerHTML = childData.qty;
            td4.innerHTML = childData.price;
            td5.innerHTML = childData.total;
            td6.innerHTML = childData.date;
            td7.innerHTML = childData.month;
            td8.innerHTML = childData.other;




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
            <button type="button" onclick="love(${No})">${childData.id}</button>`;

            tbody.appendChild(trow);            
        });
    }, {
        onlyOnce: true
    });
}

window.onload = showData;
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

function love(){
    console.log("I'm Clicking!");
}
