function getEle(id) {
    return document.getElementById(id);
}

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
    var username = getEle('username').value;
    var password = getEle('password').value;

    $.post("controller/login.php", {
        username: username,
        password: password
    }, function(feedback) {
        var obj = JSON.parse(feedback);
        alert(obj.response);
        gotourl(obj.page);
    });
}

function registerSubmit() {
    if (check() && !exist) {
        var username = getEle('newUser').value;
        var password = getEle('newPass').value;
        var fn = getEle('newFN').value;
        var ln = getEle('newLN').value;
        var email = getEle('newEmail').value;
        var language = getEle('newLang').value;
        $.post("controller/register.php", {
            newUser: username,
            newPass: password,
            newFN: fn,
            newLN: ln,
            newEmail: email,
            newLang: language
        }, function(feedback) {
            var obj = JSON.parse(feedback);

            if (obj.code == 1) {
                alert("Register Success");
                gotourl('?language=en&page=login&type=phtml');
            } else if (obj.code == 0) {
                alert("Register Error");
            }
        });
    } else {
        alert("Please check your input infomation");
    }

}

var exist = true;

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