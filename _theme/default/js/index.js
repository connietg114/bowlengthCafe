window.onscroll = function() {
    scrollFunction();
};

window.onload = function () {
    var url = window.location.href;

    console.log("url : " + url);
    if (url.includes("?")) {
        var str = url.split("?");
        var lastIndexStr = str[str.length - 1];
        var link;
        // url is /?location or /?menu page
        if (lastIndexStr.includes("/")) {
            var splitStr = lastIndexStr.split("/");

            // Decides /?locations or /?menu (new-ranges)
            // load locationDetails
            if (splitStr[0] == "locations") {
                if (lastIndexStr.includes("-")) {
                    var address = splitStr[1].replace(/-/g, " ");
                    for (var i = 0; i < locationDetails.length; i++) {
                        if (locationDetails[i].title.toLowerCase() == address) {
                            var id = locationDetails[i].id;
                            $(".pageContent").load(
                                "_data/dynamic_pages/" + splitStr[0] + ".html",
                                function () {
                                    showLocationDetails(
                                        id,
                                        "_data/dynamic_pages/locationDetails.html",
                                        locationDetails
                                    );
                                }
                            );
                        }
                    }
                } else {
                    $(".pageContent").load(
                        "_data/dynamic_pages/" + splitStr[0] + ".html",
                        function () {
                            $(".locationPageContent").load(
                                "_data/dynamic_pages/" + lastIndexStr + ".html"
                            );
                        }
                    );
                }
            }
            // load newRangesDetails
            // new-ranges/rangeTitle
            else if (splitStr[0] == "new-ranges") {
                // ?new-ranges/product-name
                if (splitStr[1].includes("-")) {
                    var rangetitle = splitStr[1].replace(/-/g, " ");
                    for (var i = 0; i < newRangeDetails.length; i++) {
                        if (newRangeDetails[i].title.toLowerCase() == rangetitle) {
                            var id = newRangeDetails[i].id;
                            showRangeDetails(id, "_data/dynamic_pages/rangeDetails.html", newRangeDetails);
                        }
                    }
                }
                // ?new-ranges/(Category)
                // lastIndexStr = allRanges/available/limitedAvailable/limitedStock/limitedTime
                else {
                    $(".pageContent").load(
                        "_data/dynamic_pages/" + splitStr[0] + ".html",
                        function () {
                            $(".new-rangesPageContent").load(
                                "_data/dynamic_pages/newRangesCategory/" + splitStr[1] + ".html"
                            );
                        }
                    );
                }
            } else {
                alert("url is : " + url + "\nno such page exit!");
            }
        } else if (lastIndexStr == "locations") {
            link = "_data/dynamic_pages/" + lastIndexStr + ".html";
            $(".pageContent").load(link, function () {
                $(".locationPageContent").load("_data/dynamic_pages/locations/all.html");
            });
            ///////////   kerry login test (ignored) ///////////
        } else if (lastIndexStr == "login") {
            link = "login/" + lastIndexStr + ".php";
            console.log("login link : " + link)
            $(".pageContent").load(link);
        } else if (lastIndexStr == "logindex") {
            link = "login/" + lastIndexStr + ".php";
            console.log("login link : " + link)
            $(".pageContent").load(link);
        } else if (lastIndexStr == "register2") {
            link = "login/register" + ".php";
            console.log("login link : " + link)
            $(".pageContent").load(link);

            ///////////   kerry login test (ignored) ///////////
        }  else {
            link = "_data/pages/" + lastIndexStr + ".html";
            $(".pageContent").load(link);

        }
    } else if (url.includes("bowlengthCafe")) {
        $(".myCafe").load("indexContent.html", function () {
            $(".pageContent").load("_data/pages/home.html");
        });
    } else {
        alert("Page not found!");
    }
};

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

    $.post("_sys/Controller/AccountController.php", {
        code: "login",
        username: username,
        password: password
    }, function(feedback) {
        console.log(feedback);
        var obj = JSON.parse(feedback);
        alert(obj.response);
        if (obj.code == 1) {
            //username:leoliang ; password:123
            showPage(obj.page);
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

        $.post("_sys/Controller/AccountController.php", {
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
    $.post("_sys/Controller/AccountController.php", {
        code: "username",
        regUser: username

    }, function(feedback) {
        var obj = JSON.parse(feedback);
        if (obj.code == 1) {
            getEle('existed').setAttribute("class", "hide");
            exist = false;
        } else if (obj.code == 0) {
            getEle('existed').setAttribute("class", "appear");
            getEle('existed').innerHTML = obj.status;
            exist = true;
        }

    });
}

function scrollFunction() {
    topnavChange();

    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        //scroll up effective -> become smaller
        $("#logo").css("height", "60px");
        $("#logo").css("margin", "10px");
        $(".logoDiv").css("display", "inline-block");

        $(".topnav .menu-content").css("margin-top", "0");
        $(".topnav .menu-content").css("display", "inline-block");
        $(".topnav .menu-content").css("float", "right");

        $(".pageContent").css("padding-top", "50px");
    } else {
        $("#logo").css("height", "200px");
        $("#logo").css("margin", "none");
        $(".logoDiv").css("display", "block");

        $(".topnav .menu-content").css("margin-top", "10px");
        $(".topnav .menu-content").css("display", "block");
        $(".topnav .menu-content").css("float", "none");

        $(".pageContent").css("padding-top", "250px");
    }
}

function topnavChange() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav responsive") {
        if (
            document.body.scrollTop > 40 ||
            document.documentElement.scrollTop > 40
        ) {
            x.className = "topnav";
        } else if (
            document.body.scrollTop <= 40 ||
            document.documentElement.scrollTop <= 40
        ) {
            x.className = "topnav";
        } else {
            x.className = "topnav";
        }
    }
}

function serviceDropdownMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function showCategory(id) {
    var innerId = id + "List";
    document.getElementById(innerId).classList.toggle("show-category-list");
    // change arrow direction
    var arrowDown = document.getElementById("arrow-down").style.display;
    var arrowUp = document.getElementById("arrow-up").style.display;
    console.log("arrow-down-Style: " + arrowDown);
    console.log("arrow-up-Style: " + arrowUp);
    if (arrowUp === "none") {
        console.log("if arrowUp === 'none' condition");
        document.getElementById("arrow-up").style.display = "inline";
        document.getElementById("arrow-down").style.display = "none";
    } else if (arrowUp === "inline") {
        console.log("else if arrowUp === 'inline' condition");
        document.getElementById("arrow-up").style.display = "none";
        document.getElementById("arrow-down").style.display = "inline";
    } else {
        console.log("else: arrowUp style: " + arrowUp);
    }
}

window.onclick = function(event) {

    // Close the dropdown if the user clicks outside of it
    if (!event.target.matches(".dropbtn")) {
        console.log("event not matches '.dropbtn'");
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            console.log(".dropbtn for loop: " + i);
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }

    // execute following when .cateory exist only
    var locationExist = document.getElementById("locationCategory");
    var newRangesExist = document.getElementById("newRangesCategory");
    if (locationExist || newRangesExist){
        console.log("#locationCategory or #newRangesCategory exist");

      if (!event.target.matches(".category")) {
          console.log("event not matches '.category'");
          var categorylist = document.getElementsByClassName("category-list");
          // change arrow direction
          var arrowUpExist = document.getElementById("arrow-up");
          var arrowDownExist = document.getElementById("arrow-down");
          if (arrowUpExist || arrowDownExist){
            console.log("#arrowUp or #arrowDown exist");
            var arrowUp = document.getElementById("arrow-up").style.display;
            console.log("can read property of arrow-up style");
            var arrowDown = document.getElementById("arrow-down").style.display;
            console.log("can read property of arrow-down style");
            if (arrowUp === "inline") {
                console.log("if: arrowUp === inline ; " + arrowUp);
                document.getElementById("arrow-up").style.display = "none";
                document.getElementById("arrow-down").style.display = "inline";
            } else {
                console.log("else: arrowUp!== inline; style: " + arrowUp);
            }
          }
          // hide category list
          var i;
          for (i = 0; i < categorylist.length; i++) {
              var openCategory = categorylist[i];
              console.log(".cateory for loop: " + i);
              if (openCategory.classList.contains("show-category-list")) {
                  openCategory.classList.remove("show-category-list");
              }
          }
      }


    } else {
      console.log("#locationCategory or #newRangesCategory not exist");
    }
};

function changeUrl(id, array) {
    var titleDashed;
    for (var i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            var title = array[i].title;
            titleDashed = title.replace(/\s+/g, "-").toLowerCase();
        }
    }
    if (array === locationDetails) {
        window.location.href = "?locations/" + titleDashed;
    } else if (array === newRangeDetails) {
        window.location.href = "?new-ranges/" + titleDashed;
    } else {
        console.log("Can not find newRangeDetails");
    }
}

function showPage(url) {
    window.location.href = url;
    // console.log(window.location.href);
}

var locationDetails = [{
        id: "child1",
        img: "file/img/all1.jpg",
        telNo: "04 499 5008",
        title: "79 Manners Street",
        address: "79 Manners Street, Te Aro, Wellington",
        address2: null,
        hours: "Monday - Sunday   11.30am - 7pm",
        hours2: null,
        hours3: null,
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Fmanners-st",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Fmanners-st&text=VISIT+US04+...",
        tumblr: "https://www.tumblr.com/share/link?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Fmanners-st",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: null,
        leftColBottomImg2: null,
        leftColBottomImg3: null,
        leftColBottomImg4: null,
        leftColBottomImg5: null,
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },
    {
        id: "child2",
        img: "file/img/all2.jpg",
        telNo: "04 568 3355",
        title: "89 Queens Drive",
        address: "3/89 Queens Drive, LowerHutt",
        address2: null,
        hours: "Monday - Sunday   11.30am - 7pm",
        hours2: null,
        hours3: null,
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F89-queens-drive",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F89-queens-drive&text=VISIT+US04+...",
        tumblr: "https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F89-queens-drive&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F89-queens-drive",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "file/img/all2.jpg",
        leftColBottomImg2: "file/img/89queensdrive2.png",
        leftColBottomImg3: "file/img/89queensdrive3.png",
        leftColBottomImg4: "file/img/89queensdrive4.png",
        leftColBottomImg5: null,
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },
    {
        id: "child3",
        img: "file/img/all3.jpg",
        telNo: "04 499 5008",
        title: "180 Lambton Quay",
        address: "Ground Floor,  Lambton Square & Eatery",
        address2: "180 Lambton Quay  /  Farmers Lane, Wellington",
        hours: "Monday - Sunday   11.30am - 7pm",
        hours2: "Saturday - Sunday     11.30am - 3:30pm",
        hours3: null,
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F180-lambton-quay",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F180-lambton-quay&text=VISIT+US04+...",
        tumblr: "https://www.tumblr.com/share/link?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F180-lambton-quay",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "file/img/all3.jpg",
        leftColBottomImg2: "file/img/180lambtonquay2.png",
        leftColBottomImg3: "file/img/180lambtonquay3.png",
        leftColBottomImg4: "file/img/180lambtonquay4.png",
        leftColBottomImg5: "file/img/180lambtonquay5.png",
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },
    {
        id: "child4",
        img: "file/img/all4.jpg",
        telNo: "04 499 5008",
        title: "128 Cuba Street",
        address: "128 Cuba Street, Te Aro, Wellington",
        address2: null,
        hours: "Monday - Sunday   11.30am - 7pm",
        hours2: null,
        hours3: null,
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Fcuba-st",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Fcuba-st&text=VISIT+US04+...",
        tumblr: "https://www.tumblr.com/share/link?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Fcuba-st",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "file/img/all4.jpg",
        leftColBottomImg2: "file/img/128cubastreet2.png",
        leftColBottomImg3: "file/img/128cubastreet3.png",
        leftColBottomImg4: "file/img/128cubastreet4.png",
        leftColBottomImg5: "file/img/128cubastreet5.png",
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },
    {
        id: "child5",
        img: "file/img/all5.jpg",
        telNo: "09 416 0631",
        title: "NORTHWEST SHOPPING CENTRE",
        address: "Kiosk 04 ( Nearby FoodCourt ), NorthWest Shopping Centre",
        address2: "1/7 Fred Taylor Dr, Massey, Auckland",
        hours: "Monday - Wednesday   9.30am - 6pm",
        hours2: "Thursday            9.30am - 9pm",
        hours3: "Friday - Sunday     9.30am - 6pm",
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Fnorthwest",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Fnorthwest&text=VISIT+US09+...",
        tumblr: "https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Fnorthwest&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Fnorthwest",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "file/img/all5.jpg",
        leftColBottomImg2: "file/img/northwest2.png",
        leftColBottomImg3: "file/img/northwest3.png",
        leftColBottomImg4: "file/img/northwest4.png",
        leftColBottomImg5: "file/img/northwest5.png",
        leftColBottomImg6: "file/img/northwest6.png",
        leftColBottomImg7: "file/img/northwest7.png",
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },
    {
        id: "child6",
        img: "file/img/all6.jpg",
        telNo: "04 801 6538",
        title: "93 COURTENAY PLACE",
        address: "2/93 Courtenay Place, Te Aro, Wellington",
        address2: null,
        hours: "Monday - Sunday   11.30am - 7pm",
        hours2: "Friday - Saturday   11:30am - 10pm",
        hours3: "Sunday            11:30am - 7pm",
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F93-courtenay-place",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F93-courtenay-place&text=VISIT+US04+...",
        tumblr: "https://www.tumblr.com/share/link?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F93-courtenay-place",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "file/img/all6.jpg",
        leftColBottomImg2: "file/img/93courtenayplace2.png",
        leftColBottomImg3: null,
        leftColBottomImg4: null,
        leftColBottomImg5: null,
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },
    {
        id: "child7",
        img: "file/img/all7.jpg",
        telNo: "04 385 9033",
        title: "77 WALLCE STREET",
        address: "77 Wallace Street, Mt Cook, Wellington",
        address2: null,
        hours: "REOPENING NOW",
        hours2: "Monday - Sunday   11.30am - 6pm",
        hours3: null,
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F77-wallce-street",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F77-wallce-street&text=VISIT+US04+385+903377+Wallace+Street%2C+Mt+Cook%2C+...",
        tumblr: "https://www.tumblr.com/share/link?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F77-wallce-street",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "file/img/all7.jpg",
        leftColBottomImg2: "file/img/77wallacest2.png",
        leftColBottomImg3: "file/img/77wallacest3.png",
        leftColBottomImg4: "file/img/77wallacest4.png",
        leftColBottomImg5: null,
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },
    {
        id: "child8",
        img: "file/img/all8.jpg",
        telNo: null,
        title: "READING CINEMA POD",
        address: "Pod 2, Reading Cinema Theater",
        address2: "100 Courtney Place, Te Aro, Wellington",
        hours: "Temporarily Closed",
        hours2: null,
        hours3: null,
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...",
        tumblr: "https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: null,
        leftColBottomImg2: null,
        leftColBottomImg3: null,
        leftColBottomImg4: null,
        leftColBottomImg5: null,
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },
];

var newRangeDetails = [{
        id: "rangeproduct1",
        rangeImg: "file/img/range-product1.jpg",
        img: "file/img/spring-lab1.jpg",
        title: "STRING LAB",
        description: "Spring Lab is all about being creative. Mix and match different our fruity flavours with a tea base of either green T, black T or Oolong. These sweet sips will satisfy tastebuds of all ages. Grab a cup with your friend and get ready to enjoy this stunning color in the spring sunshine. Stay bubbly💚",
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...",
        tumblr: "https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "file/img/spring-lab1.jpg",
        leftColBottomImg2: "file/img/spring-lab2.jpg",
        leftColBottomImg3: "file/img/spring-lab3.jpg",
        leftColBottomImg4: "file/img/spring-lab4.jpg",
        leftColBottomImg5: null,
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },

    {
        id: "rangeproduct2",
        rangeImg: "file/img/range-product2.jpg",
        img: "file/img/winter-warmer1.jpg",
        title: "WINTER WARMER",
        description: "It’s been a cold few months, ⛈ icy winds competing with the sunshine. <p>To celebrate the winter months lifting we have curated a Winter Warmer series. These are the perfect drinks to melt away the frost within! We have brown-sugar oatmeal with cinnamon and a chocolate caramel twist to offer this changing season.<p>",
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...",
        tumblr: "https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "file/img/winter-warmer1.jpg",
        leftColBottomImg2: "file/img/winter-warmer2.jpg",
        leftColBottomImg3: "file/img/winter-warmer3.jpg",
        leftColBottomImg4: null,
        leftColBottomImg5: null,
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },

    {
        id: "rangeproduct3",
        rangeImg: "file/img/range-product3.jpg",
        img: "file/img/tokyo-skyfall1.jpg",
        title: "TOKYO SKYFALL",
        description: "Introducing our latest range of teas with a twist:  Tokyo Skyfall Series. After investigating tea mocktails at Christmas and Valentine s, we are proud to present our first exclusively mocktail range, marking a new era for innovation at Noah’s Ark Teahouse. Combining beautiful blue lime and sour lemon with your choice of Lychee, Strawberry or Grape, these tea mocktails encapsulate the signature blue shades of the Tokyo skyline. Try the Tokyo Skyfall Series today at Noah’s Ark Teahouse!! 🌟",
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...",
        tumblr: "https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "file/img/tokyo-skyfall1.jpg",
        leftColBottomImg2: "file/img/tokyo-skyfall2.jpg",
        leftColBottomImg3: "file/img/tokyo-skyfall3.jpg",
        leftColBottomImg4: "file/img/tokyo-skyfall4.jpg",
        leftColBottomImg5: null,
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },

    {
        id: "rangeproduct4",
        rangeImg: "file/img/range-product4.jpeg",
        img: "file/img/cranberry-series1.jpg",
        title: "CRANBERRY SERIES",
        description: "Sweet and fruity, our new cranberry series is rich in flavours. On this new menu we have four new speciality creations. Introducing our refreshing Cranberry Black Tea, and the fruity kick of Cranberry Green Tea. Noah’s ark has been working hard to create the most delicious Cranberry Crumple Milk Tea 😍 and our final drink is our mouth watering Creamy Cranberry Milk Tea 😋 now available at all stores across New Zealand, while stocks last❤️ ",
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...",
        tumblr: "https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "file/img/cranberry-series1.jpg",
        leftColBottomImg2: "file/img/cranberry-series2.jpg",
        leftColBottomImg3: "file/img/cranberry-series3.jpg",
        leftColBottomImg4: "file/img/cranberry-series4.jpg",
        leftColBottomImg5: "file/img/cranberry-series5.jpg",
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },

    {
        id: "rangeproduct5",
        rangeImg: "file/img/range-product5.jpeg",
        img: "file/img/brown-sugar-milk-tea1.jpg",
        title: "BROWN SUGAR MILK TEA",
        description: "Hey bubble tea fans! We know it’s a best-seller and almost everyone in Wellington has tried it, but on the off chance that there are one or two of you out there who haven’t- you need to get yourself a Brown Sugar Milk Tea ☺️ Even in November, with the sun starting to shine on our cloudy little city, this winter treat is an impossibly popular and unbelievably delicious staple of our menu!  😆",
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...",
        tumblr: "https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "file/img/brown-sugar-milk-tea1.jpg",
        leftColBottomImg2: "file/img/brown-sugar-milk-tea2.jpg",
        leftColBottomImg3: "file/img/brown-sugar-milk-tea3.jpg",
        leftColBottomImg4: "file/img/brown-sugar-milk-tea4.jpg",
        leftColBottomImg5: "file/img/brown-sugar-milk-tea5.jpg",
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },

    {
        id: "rangeproduct6",
        rangeImg: "file/img/range-product6.jpeg",
        img: "file/img/thai-milk-tea1.jpg",
        title: "THAI MILK TEA",
        description: "Thai tea has been famous for its rich in tea taste. This spiced creamy beverage, hardly resembles a regular cup of black tea, it’s loved in Thailand and served worldwide. Our creamy caramel blend is sweet and refreshing. With hints of anise star spice, we have three options available: Thai tea $6.5 served with original milk foam for additional $1, with caramel milk foam for additional $1.5 or with pearls for additional $1 😋😋😋",
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...",
        tumblr: "https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "file/img/thai-milk-tea1.jpg",
        leftColBottomImg2: "file/img/thai-milk-tea2.jpg",
        leftColBottomImg3: "file/img/thai-milk-tea3.jpg",
        leftColBottomImg4: null,
        leftColBottomImg5: null,
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },

    {
        id: "rangeproduct7",
        rangeImg: "file/img/range-product7.jpg",
        img: "file/img/breakfast-menu1.jpg",
        title: "BREAKFAST MENU",
        description: "MORNING GLOW SERIES Hey Bubble Tea lovers, we know getting out of bed in the morning can be tough but Noah’s Ark is here to help! Come try our Morning Glow Series for a quick wake-me-up on the way to work or school. Inspired by the comforting flavours of home, these drinks will give you the energy you need to get through the day! From Hazelnut Mocha to Spiced Oatmeal, these drinks will be available at all stalls and all day! Revive your morning by indulging in some tasty treats from Noah’s Ark ☺️   ",
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...",
        tumblr: "https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "file/img/breakfast-menu1.jpg",
        leftColBottomImg2: "file/img/breakfast-menu2.jpg",
        leftColBottomImg3: "file/img/breakfast-menu3.jpg",
        leftColBottomImg4: "file/img/breakfast-menu4.jpg",
        leftColBottomImg5: "file/img/breakfast-menu5.jpg",
        leftColBottomImg6: "file/img/breakfast-menu6.jpg",
        leftColBottomImg7: "file/img/breakfast-menu7.jpg",
        leftColBottomImg8: "file/img/breakfast-menu8.jpg",
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },

    {
        id: "rangeproduct8",
        rangeImg: "file/img/range-product8.jpg",
        img: "file/img/milk-form-series1.png",
        title: "MILK FORM SERIES",
        description: "Last year we added milk foam to the menu, a literal topping that adds a layer of dairy free salty cream to the top of a drink, and it’s been a hit! We wanted to experiment with this, to see what wondrous creations could be made to complement our teas. Noah’s Ark is proud to present our Milk Foam Series 😊 All new flavours of milk foam can be added to all your favourite drinks! Chocolate, Caramel and Honey pair perfectly with our sweeter varieties, while Strawberry and Matcha are great options for milky or fruity flavours. Not sure what combinations work well? Ask our friendly staff or consult our range of suggestions. We want to keep innovating, to push the boundaries of what bubble tea could be. Let us know what flavours or varieties you want to see in our stores. As always, we’re proud to have the support of all you guys and we look forward to seeing you in store soon!  ",
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...",
        tumblr: "https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "file/img/milk-form-series1.png",
        leftColBottomImg2: "file/img/milk-form-series2.png",
        leftColBottomImg3: "file/img/milk-form-series3.png",
        leftColBottomImg4: "file/img/milk-form-series4.png",
        leftColBottomImg5: "file/img/milk-form-series5.png",
        leftColBottomImg6: "file/img/milk-form-series6.png",
        leftColBottomImg7: "file/img/milk-form-series7.png",
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },
];

function renderLocationItem(index, array) {
    var mapAddress;
    var item = array[index];

    var numArray = [];
    var usedArray = [];
    usedArray.push(index);
    for (var i = 0; i < 5; i++) {
        var num = generateRandom(0, 7, usedArray);
        usedArray.push(num);
        numArray.push(num);
        $(".othersChild" + (i + 1).toString()).attr("id", array[num].id);
        $(".othersImg" + (i + 1).toString()).attr("src", array[num].img);
        $(".othersChild" + (i + 1).toString() + " p").text(array[num].title);
    }

    $(".locationDetails").attr("Name", item.id);
    $(".leftColImg").attr("src", item.img);
    $(".title").text(item.title);
    $(".details-title").text(item.title);
    if (item.telNo === null) {
        $(".visitUs").css("display", "None");
    } else {
        $(".visitUs").css("display", "block");
        $(".telNo").text(item.telNo);
    }
    if (item.address2 === null) {
        mapAddress = item.address;
    } else {
        mapAddress = item.address2;
    }
    mapAddress = "https://www.google.com/maps?q=" + mapAddress + "&output=embed";
    $(".mapIframe").attr("src", mapAddress);

    $(".address").text(item.address);
    $(".address2").text(item.address2);

    if (item.hours === "Temporarily Closed") {
        $(".openingHours").text(item.hours);
        $(".hours").text("");
    } else {
        $(".openingHours").text("Opening Hours");
        $(".hours").text(item.hours);
        $(".hours2").text(item.hours2);
        $(".hours3").text(item.hours3);
    }
    $("#locationFb").attr("onclick", "window.open('" + item.fb + "')");
    $("#locationTwitter").attr("onclick", "window.open('" + item.twitter + "')");
    $("#locationTumblr").attr("onclick", "window.open('" + item.tumblr + "')");
    $("#locationPinterest").attr(
        "onclick",
        "window.open('" + item.pinterest + "')"
    );

    $("#leftColBottomImg1").attr("src", item.leftColBottomImg1);
    $("#leftColBottomImg2").attr("src", item.leftColBottomImg2);
    $("#leftColBottomImg3").attr("src", item.leftColBottomImg3);
    $("#leftColBottomImg4").attr("src", item.leftColBottomImg4);
    $("#leftColBottomImg5").attr("src", item.leftColBottomImg5);
    $("#leftColBottomImg6").attr("src", item.leftColBottomImg6);
    $("#leftColBottomImg7").attr("src", item.leftColBottomImg7);
    $("#leftColBottomImg8").attr("src", item.leftColBottomImg8);
    $("#leftColBottomImg9").attr("src", item.leftColBottomImg9);
    $("#leftColBottomImg10").attr("src", item.leftColBottomImg10);
}

// renderRangeItem function
function renderRangeItem(index, array) {
    var item = array[index];

    var numArray = [];
    var usedArray = [];
    usedArray.push(index);
    for (var i = 0; i < 5; i++) {
        var num = generateRandom(0, 7, usedArray);
        usedArray.push(num);
        numArray.push(num);
        $(".othersChild" + (i + 1).toString()).attr("id", array[num].id);
        $(".othersImg" + (i + 1).toString()).attr("src", array[num].rangeImg);
        $(".othersChild" + (i + 1).toString() + " p").text(array[num].title);
    }

    $(".rangeDetails").attr("Name", item.id);
    $(".leftColImg").attr("src", item.img);
    $(".title").text(item.title);
    $(".details-title").text(item.title);
    $(".description").text(item.description);
    $("#locationFb").attr("onclick", "window.open('" + item.fb + "')");
    $("#locationTwitter").attr("onclick", "window.open('" + item.twitter + "')");
    $("#locationTumblr").attr("onclick", "window.open('" + item.tumblr + "')");
    $("#locationPinterest").attr(
        "onclick",
        "window.open('" + item.pinterest + "')"
    );

    $("#leftColBottomImg1").attr("src", item.leftColBottomImg1);
    $("#leftColBottomImg2").attr("src", item.leftColBottomImg2);
    $("#leftColBottomImg3").attr("src", item.leftColBottomImg3);
    $("#leftColBottomImg4").attr("src", item.leftColBottomImg4);
    $("#leftColBottomImg5").attr("src", item.leftColBottomImg5);
    $("#leftColBottomImg6").attr("src", item.leftColBottomImg6);
    $("#leftColBottomImg7").attr("src", item.leftColBottomImg7);
    $("#leftColBottomImg8").attr("src", item.leftColBottomImg8);
    $("#leftColBottomImg9").attr("src", item.leftColBottomImg9);
    $("#leftColBottomImg10").attr("src", item.leftColBottomImg10);
}

function showLocationDetails(id, url, array) {
    $(".locationPageContent").load(url, function() {
        for (var i = 0; i < array.length; i++) {
            if (array[i].id === id) {
                renderLocationItem(i, array);
            }
        }
        zoomInImgOnMousemove("leftColImg");
    });
}

// show RangeDetails funtion
function showRangeDetails(id, url, array) {
    $(".pageContent").load(url, function() {
        for (var i = 0; i < array.length; i++) {
            if (array[i].id === id) {
                renderRangeItem(i, array);
            }
        }
        zoomInImgOnMousemove("leftColImg");
    });
}

function zoomInImgOnMousemove(className) {
    var className = "." + className;
    $(className).click(function() {
        $(this).toggleClass("normal-zoom zoom-in");
    });

    $(className).on("mousemove", function(event) {
        var bbox = event.target.getBoundingClientRect(); //position of the image on the page

        var mouseX = event.clientX - bbox.left; //measure how far into the image the mouse is in both x and y directions
        var mouseY = event.clientY - bbox.top;

        var xPercent = (mouseX / bbox.width) * 100; //work out how far through the image as a percentage the mouse is
        var yPercent = (mouseY / bbox.height) * 100;

        // Then we change the `transform-origin` css property on the image to center the zoom effect on the mouse position
        //event.target.style.transformOrigin = xPercent + '% ' + yPercent + '%';
        $(this).css("transform-origin", xPercent + "% " + yPercent + "%"); // We add the '%' units to make sure the string looks exactly like the css declaration it becomes.
    });

    $(className).on("mouseenter", function() {
        //want it to automatically trigger on hover
        $(this).addClass("zoom-in");
        $(this).removeClass("normal-zoom");
    });

    $(className).on("mouseleave", function() {
        //stop when not hovering
        $(this).addClass("normal-zoom");
        $(this).removeClass("zoom-in");
    });
}

function showNextOrPrevious(id) {
    var index;
    for (var i = 0; i < locationDetails.length; i++) {
        var item = locationDetails[i];
        if (item.id === $(".locationDetails").attr("Name")) {
            if (id === "nextButton") {
                if (i === locationDetails.length - 1) {
                    index = 0;
                } else {
                    index = i + 1;
                }
            } else {
                if (i === 0) {
                    index = locationDetails.length - 1;
                } else {
                    index = i - 1;
                }
            }
        }
    }
    changeUrl(locationDetails[index].id, locationDetails);
}

// show Next or Privious new Range
function showNextOrPrevious2(id) {
    var index;
    for (var i = 0; i < newRangeDetails.length; i++) {
        var item = newRangeDetails[i];
        if (item.id === $(".rangeDetails").attr("Name")) {
            if (id === "nextButton") {
                if (i === newRangeDetails.length - 1) {
                    index = 0;
                } else {
                    index = i + 1;
                }
            } else {
                if (i === 0) {
                    index = newRangeDetails.length - 1;
                } else {
                    index = i - 1;
                }
            }
        }
    }
    changeUrl(newRangeDetails[index].id, newRangeDetails);
}

function generateRandom(min, max, array) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return array.includes(num) ? generateRandom(min, max, array) : num;
}

function changeImg(id) {
    var newImg = $("#" + id).attr("src");
    $(".leftColImg").attr("src", newImg);
}
