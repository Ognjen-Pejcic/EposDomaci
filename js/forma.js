function slanje() {

    var p=1;

    var mail = document.getElementById('mail').value;
    var reMail = /\@(yahoo|gmail|hotmail)\.com$/;

    if (!reMail.test(mail)) {
        document.getElementById('greskaMail').innerHTML = "<b style='color:red;'>Pogresan format</b>";
        p=0;
    }else {
            p=1;
        }
    

    var tel = document.getElementById('tel').value;
    var reTel = /^[0-9]{3,}\-[0-9]{7,}$/;

    if (!reTel.test(tel)) {
     document.getElementById('greskaTel').innerHTML = "<b style='color:red;'>Pogresan format</b>";
    p=0;
}else {
        p=1;
    }

    var x;
    var y;
    y = document.getElementById("prezime").value;
    x = document.getElementById("ime").value;
    if (x == "") {
        alert("Morate uneti ime");
        p=0;
    }else {
            p=1;
        }
    if (y == "") {
        alert("Morate uneti prezime");
        p=0;
    }else {
            p=1;
        }
    if (tel == "") {
        alert("Morate uneti tel");
        p=0;
    }else {
            p=1;
        }
    if (mail == "") {
        alert("Morate uneti mail");
        p=0;
    }else {
            p=1;
        }
if(p==1) alert("Resiiiiiiiiiiiiiiiiiii");
    }