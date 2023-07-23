
function adder9() {
    var num5 = parseFloat(document.getElementById('myQty').value);
    var num6 = parseFloat(document.getElementById('myPrice').value);

    var get2 = num5 * num6;
    var total1 = get2;
    get2 = parseFloat(total1).toFixed(2);
    document.getElementById("myTotal").value = get2;

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

// function Fillbox(index) {
//     if (index == null) {
//         submit.style.display = 'inline-block';
//         update.style.display = 'none';
//         dele.style.display = 'none';
//     }
//     else {
//         --index;
//         Mid.value = stdList[index][0];
//         Mitems.value = stdList[index][1];
//         Mqty.value = stdList[index][2];
//         Mprice.value = stdList[index][3];
//         Mtotal.value = stdList[index][4];
//         Mdate.value = stdList[index][5];
//         Mmonth.value = stdList[index][6];
//         Mother.value = stdList[index][7];

//         submit.style.display = 'none';
//         update.style.display = 'inline-block';
//         dele.style.display = 'inline-block';

//     }
// }

// function sum() {
//     var checkBox = document.getElementById('ckS');
//     if (checkBox.checked == true) {
//         console.log('3');
//     } else {
//         console.log('0');
//     }
    
// }
// sum();
// document.getElementById('ckS').addEventListener('click',sum);
// let checkboxes = document.querySelectorAll('input[name="sCheck"]:checked');
// let values = [];
// checkboxes.forEach((checkbox) => {
//     values.push(checkbox.value);
// });

// alert(values);