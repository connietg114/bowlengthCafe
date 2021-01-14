function getEle(id) {
    return document.getElementById(id);
}
var exist = true;

function check() {
    var flag = 0;
    var alphaNumOnly = /^[0-9A-Za-z]+$/;
    var passwordType = /^(?=.*[A-Z])[A-Za-z0-9]{7,15}$/;
    var alphaOnly = /^[A-Za-z]+$/;
    var emailStyle = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!getEle('newUser').value.match(alphaNumOnly)) {
        getEle('userReminder').classList.add('warning');
        flag++;
    } else {
        if ($('#userReminder').hasClass('warning')) {
            $('#userReminder').removeClass('warning');
        }
    }

    if (!getEle('newPass').value.match(passwordType)) {
        getEle('passReminder').classList.add('warning');
        flag++;
    } else {
        if ($('#passReminder').hasClass('warning')) {
            $('#passReminder').removeClass('warning');
        }
    }

    if (!getEle('newFN').value.match(alphaOnly)) {
        getEle('fnReminder').classList.add('warning');
        flag++;
    } else {
        if ($('#fnReminder').hasClass('warning')) {
            $('#fnReminder').removeClass('warning');
        }
    }

    if (!getEle('newLN').value.match(alphaOnly)) {
        getEle('lnReminder').classList.add('warning');
        flag++;
    } else {
        if ($('#lnReminder').hasClass('warning')) {
            $('#lnReminder').removeClass('warning');
        }
    }
    if (!getEle('newEmail').value === "") {
        if (!getEle('newEmail').value.match(emailStyle)) {
            getEle('emailReminder').classList.add('warning');
            flag++;
        } else {
            if ($('#emailReminder').hasClass('warning')) {
                $('#emailReminder').removeClass('warning');
            }
        }
    }
    if (flag == 0) {
        return true;
    } else {
        return false;
    }
}

function loginSubmit() {
    var username = getEle('loginUsername').value;
    var password = getEle('loginPassword').value;

    $.post("Controller/AccountController.php", {
        code: "login",
        username: username,
        password: password
    }, function(feedback) {
        var obj = JSON.parse(feedback);
        alert(obj.response);
        if (obj.code == 1) {
            //username:leoliang ; password:123
            showPage("../bowlengthCafe/CMS/pages/admin.php?home")
        }
    });
}

function checkUsername() {
    var username = getEle('newUser').value;
    $.get("controller/register.php", {
        username: username
    }, function(feedback) {
        var obj = JSON.parse(feedback);
        if (obj.code == 1) {
            getEle('existed').setAttribute("class", "reminder");
            getEle('existed').innerHTML = obj.status;
            exist = false;
        } else if (obj.code == 0) {
            getEle('existed').setAttribute("class", "warning");
            getEle('existed').innerHTML = obj.status;
            exist = true;
        } else if (feedback == 2) {
            getEle('existed').innerHTML = "";
            exist = true;
        }

    });
}

function registerSubmit() {
    if (check()) {
        var username = getEle('newUser').value;
        var password = getEle('newPass').value;
        var repass = getEle('newRepass').value;
        var fn = getEle('newFN').value;
        var ln = getEle('newLN').value;
        var email = getEle('newEmail').value;
        var regcode = "reg";

        $.post("Controller/AccountController.php", {
            code: regcode,
            newUser: username,
            newPass: password,
            newRepass: repass,
            newFN: fn,
            newLN: ln,
            newEmail: email,
        }, function(feedback) {
            var obj = JSON.parse(feedback);

            if (obj.code == 1) {
                alert("Register Success");
                showPage('?membership');
            } else if (obj.code == 0) {
                alert("Register Error");
            } else if (obj.code == 2) {
                alert("Two password you enter are different");
            }
        });
    } else {
        alert("Please check your input infomation");
    }

}

var exist = true;

function checkUsername() {
    var username = getEle('newUser').value;
    $.post("Controller/AccountController.php", {
        code: "username",
        regUser: username

    }, function(feedback) {
        var obj = JSON.parse(feedback);
        if (obj.code == 1) {
            getEle('existed').setAttribute("class", "reminder");
            getEle('existed').innerHTML = obj.status;
            exist = false;
        } else if (obj.code == 0) {
            getEle('existed').setAttribute("class", "warning");
            getEle('existed').innerHTML = obj.status;
            exist = true;
        } else if (feedback == 2) {
            getEle('existed').innerHTML = "";
            exist = true;
        }

    });
}