function user() {
    var user = "SalaMOM School";
    var title = "SM Sys All"
    var position = "Primary Class"
    var g5a = "5A";
    var g5b = "5B";
    var name = "SalaMOM School"
    var year = "2022-2023"
    var db = "5cAllData"
    var img = "https://firebasestorage.googleapis.com/v0/b/useradmin-cd653.appspot.com/o/StdImages%2FSalaMOM%20Logo.png?alt=media&token=358b995c-7c97-43c8-8159-d1449063268b"
    document.getElementById("myUser").innerHTML = user;
    document.getElementById("myUser2").innerHTML = user;
    document.getElementById("myPosition").innerHTML = position;
    document.getElementById("myImg").src = img;
    document.getElementById("myImg2").src = img;
    document.getElementById("myTitle").innerHTML = title;
    document.getElementById('companyName').innerHTML = name;
    // document.getElementById('year').innerHTML = year;
    // document.getElementById('mydataBase').innerHTML = db;


}
user();
