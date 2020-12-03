window.onscroll = function() {
    scrollFunction();
};

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
}

window.onclick = function(event) {
    // Close the dropdown if the user clicks outside of it
    if (!event.target.matches(".dropbtn")) {
        console.log("!event matches '.dropbtn'");
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
    console.log("haha: " + event.target.tagName);
    if (!event.target.matches(".category")) {
        console.log("!event matches '.category'");
        var categorylist = document.getElementsByClassName("category-list");
        var i;
        for (i = 0; i < categorylist.length; i++) {
            var openCategory = categorylist[i];
            console.log(".cateory for loop: " + i);
            if (openCategory.classList.contains("show-category-list")) {
                console.log("'openCategory' contains '.show-category-list");
                openCategory.classList.remove("show-category-list");
            }
        }
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
}

window.onload = function() {
    var url = window.location.href;
    if (url.includes("?")) {
        $(".myCafe").load("indexContent.html", function() {
            var str = url.split("?");
            var lastIndexStr = str[str.length - 1];
            var link;
            // url is /?location or /?menu page
            if (lastIndexStr.includes("/")) {
                var splitStr = lastIndexStr.split("/");
                console.log(splitStr[0], splitStr[1]);

                // Decides /?locations or /?menu (new-ranges)
                // load locationDetails
                if (splitStr[0] == "locations") {
                    if (lastIndexStr.includes("-")) {
                        var address = splitStr[1].replace(/-/g, " ");
                        for (var i = 0; i < locationDetails.length; i++) {
                            if (locationDetails[i].title.toLowerCase() == address) {
                                var id = locationDetails[i].id;
                                $(".pageContent").load(
                                    "pages/" + splitStr[0] + ".html",
                                    function() {
                                        showLocationDetails(
                                            id,
                                            "pages/locationDetails.html",
                                            locationDetails
                                        );
                                    }
                                );
                            }
                        }
                    } else {
                        $(".pageContent").load(
                            "pages/" + splitStr[0] + ".html",
                            function() {
                                $(".locationPageContent").load(
                                    "pages/" + lastIndexStr + ".html"
                                );
                            }
                        );
                    }
                }
                // load newRangesDetails
                // new-ranges/rangeTitle
                else if (splitStr[0] == "new-ranges") {
                    console.log("splitStr[1] = " + splitStr[1]);
                    console.log("lastIndexStr = " + lastIndexStr);
                    // ?new-ranges/product-name
                    if (splitStr[1].includes("-")) {
                        var rangetitle = splitStr[1].replace(/-/g, " ");
                        for (var i = 0; i < newRangeDetails.length; i++) {
                            if (newRangeDetails[i].title.toLowerCase() == rangetitle) {
                                var id = newRangeDetails[i].id;
                                showRangeDetails(id, "pages/rangeDetails.html", newRangeDetails);
                            }
                        }
                    }
                    // ?new-ranges/(Category)
                    // lastIndexStr = allRanges/available/limitedAvailable/limitedStock/limitedTime
                    else {
                        console.log("enter new-ranges/(Category):");
                        console.log("url is :" + url);
                        console.log("lastIndexStr = " + lastIndexStr);
                        $(".pageContent").load(
                            "pages/" + splitStr[0] + ".html",
                            function() {
                                $(".new-rangesPageContent").load(
                                    "pages/newRangesCategory/" + splitStr[1] + ".html"
                                );
                            }
                        );
                    }
                } else {
                    alert("url is : " + url + "\nno such page exit!");
                }
            } else if (lastIndexStr == "locations") {
                link = "pages/" + lastIndexStr + ".html";
                $(".pageContent").load(link, function() {
                    $(".locationPageContent").load("pages/locations/all.html");
                });
            } else {
                link = "pages/" + lastIndexStr + ".html";
                $(".pageContent").load(link);
            }
        });
    } else if (url.includes("bowlengthCafe")) {
        $(".myCafe").load("indexContent.html", function() {
            $(".pageContent").load("pages/home.html");
        });
    } else {
        alert("Page not found!");
    }
};

var locationDetails = [{
        id: "child1",
        img: "img/all1.jpg",
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
        img: "img/all2.jpg",
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
        leftColBottomImg1: "img/all2.jpg",
        leftColBottomImg2: "img/89queensdrive2.png",
        leftColBottomImg3: "img/89queensdrive3.png",
        leftColBottomImg4: "img/89queensdrive4.png",
        leftColBottomImg5: null,
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },
    {
        id: "child3",
        img: "img/all3.jpg",
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
        leftColBottomImg1: "img/all3.jpg",
        leftColBottomImg2: "img/180lambtonquay2.png",
        leftColBottomImg3: "img/180lambtonquay3.png",
        leftColBottomImg4: "img/180lambtonquay4.png",
        leftColBottomImg5: "img/180lambtonquay5.png",
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },
    {
        id: "child4",
        img: "img/all4.jpg",
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
        leftColBottomImg1: "img/all4.jpg",
        leftColBottomImg2: "img/128cubastreet2.png",
        leftColBottomImg3: "img/128cubastreet3.png",
        leftColBottomImg4: "img/128cubastreet4.png",
        leftColBottomImg5: "img/128cubastreet5.png",
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },
    {
        id: "child5",
        img: "img/all5.jpg",
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
        leftColBottomImg1: "img/all5.jpg",
        leftColBottomImg2: "img/northwest2.png",
        leftColBottomImg3: "img/northwest3.png",
        leftColBottomImg4: "img/northwest4.png",
        leftColBottomImg5: "img/northwest5.png",
        leftColBottomImg6: "img/northwest6.png",
        leftColBottomImg7: "img/northwest7.png",
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },
    {
        id: "child6",
        img: "img/all6.jpg",
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
        leftColBottomImg1: "img/all6.jpg",
        leftColBottomImg2: "img/93courtenayplace2.png",
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
        img: "img/all7.jpg",
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
        leftColBottomImg1: "img/all7.jpg",
        leftColBottomImg2: "img/77wallacest2.png",
        leftColBottomImg3: "img/77wallacest3.png",
        leftColBottomImg4: "img/77wallacest4.png",
        leftColBottomImg5: null,
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },
    {
        id: "child8",
        img: "img/all8.jpg",
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
        rangeImg: "img/range-product1.jpg",
        img: "img/spring-lab1.jpg",
        title: "STRING LAB",
        description: "Spring Lab is all about being creative. Mix and match different our fruity flavours with a tea base of either green T, black T or Oolong. These sweet sips will satisfy tastebuds of all ages. Grab a cup with your friend and get ready to enjoy this stunning color in the spring sunshine. Stay bubbly💚",
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...",
        tumblr: "https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "img/spring-lab1.jpg",
        leftColBottomImg2: "img/spring-lab2.jpg",
        leftColBottomImg3: "img/spring-lab3.jpg",
        leftColBottomImg4: "img/spring-lab4.jpg",
        leftColBottomImg5: null,
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },

    {
        id: "rangeproduct2",
        rangeImg: "img/range-product2.jpg",
        img: "img/winter-warmer1.jpg",
        title: "WINTER WARMER",
        description: "It’s been a cold few months, ⛈ icy winds competing with the sunshine. <p>To celebrate the winter months lifting we have curated a Winter Warmer series. These are the perfect drinks to melt away the frost within! We have brown-sugar oatmeal with cinnamon and a chocolate caramel twist to offer this changing season.<p>",
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...",
        tumblr: "https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "img/winter-warmer1.jpg",
        leftColBottomImg2: "img/winter-warmer2.jpg",
        leftColBottomImg3: "img/winter-warmer3.jpg",
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
        rangeImg: "img/range-product3.jpg",
        img: "img/tokyo-skyfall1.jpg",
        title: "TOKYO SKYFALL",
        description: "Introducing our latest range of teas with a twist:  Tokyo Skyfall Series. After investigating tea mocktails at Christmas and Valentine s, we are proud to present our first exclusively mocktail range, marking a new era for innovation at Noah’s Ark Teahouse. Combining beautiful blue lime and sour lemon with your choice of Lychee, Strawberry or Grape, these tea mocktails encapsulate the signature blue shades of the Tokyo skyline. Try the Tokyo Skyfall Series today at Noah’s Ark Teahouse!! 🌟",
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...",
        tumblr: "https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "img/tokyo-skyfall1.jpg",
        leftColBottomImg2: "img/tokyo-skyfall2.jpg",
        leftColBottomImg3: "img/tokyo-skyfall3.jpg",
        leftColBottomImg4: "img/tokyo-skyfall4.jpg",
        leftColBottomImg5: null,
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },

    {
        id: "rangeproduct4",
        rangeImg: "img/range-product4.jpeg",
        img: "img/cranberry-series1.jpg",
        title: "CRANBERRY SERIES",
        description: "Sweet and fruity, our new cranberry series is rich in flavours. On this new menu we have four new speciality creations. Introducing our refreshing Cranberry Black Tea, and the fruity kick of Cranberry Green Tea. Noah’s ark has been working hard to create the most delicious Cranberry Crumple Milk Tea 😍 and our final drink is our mouth watering Creamy Cranberry Milk Tea 😋 now available at all stores across New Zealand, while stocks last❤️ ",
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...",
        tumblr: "https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "img/cranberry-series1.jpg",
        leftColBottomImg2: "img/cranberry-series2.jpg",
        leftColBottomImg3: "img/cranberry-series3.jpg",
        leftColBottomImg4: "img/cranberry-series4.jpg",
        leftColBottomImg5: "img/cranberry-series5.jpg",
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },

    {
        id: "rangeproduct5",
        rangeImg: "img/range-product5.jpeg",
        img: "img/brown-sugar-milk-tea1.jpg",
        title: "BROWN SUGAR MILK TEA",
        description: "Hey bubble tea fans! We know it’s a best-seller and almost everyone in Wellington has tried it, but on the off chance that there are one or two of you out there who haven’t- you need to get yourself a Brown Sugar Milk Tea ☺️ Even in November, with the sun starting to shine on our cloudy little city, this winter treat is an impossibly popular and unbelievably delicious staple of our menu!  😆",
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...",
        tumblr: "https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "img/brown-sugar-milk-tea1.jpg",
        leftColBottomImg2: "img/brown-sugar-milk-tea2.jpg",
        leftColBottomImg3: "img/brown-sugar-milk-tea3.jpg",
        leftColBottomImg4: "img/brown-sugar-milk-tea4.jpg",
        leftColBottomImg5: "img/brown-sugar-milk-tea5.jpg",
        leftColBottomImg6: null,
        leftColBottomImg7: null,
        leftColBottomImg8: null,
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },

    {
        id: "rangeproduct6",
        rangeImg: "img/range-product6.jpeg",
        img: "img/thai-milk-tea1.jpg",
        title: "THAI MILK TEA",
        description: "Thai tea has been famous for its rich in tea taste. This spiced creamy beverage, hardly resembles a regular cup of black tea, it’s loved in Thailand and served worldwide. Our creamy caramel blend is sweet and refreshing. With hints of anise star spice, we have three options available: Thai tea $6.5 served with original milk foam for additional $1, with caramel milk foam for additional $1.5 or with pearls for additional $1 😋😋😋",
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...",
        tumblr: "https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "img/thai-milk-tea1.jpg",
        leftColBottomImg2: "img/thai-milk-tea2.jpg",
        leftColBottomImg3: "img/thai-milk-tea3.jpg",
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
        rangeImg: "img/range-product7.jpg",
        img: "img/breakfast-menu1.jpg",
        title: "BREAKFAST MENU",
        description: "MORNING GLOW SERIES Hey Bubble Tea lovers, we know getting out of bed in the morning can be tough but Noah’s Ark is here to help! Come try our Morning Glow Series for a quick wake-me-up on the way to work or school. Inspired by the comforting flavours of home, these drinks will give you the energy you need to get through the day! From Hazelnut Mocha to Spiced Oatmeal, these drinks will be available at all stalls and all day! Revive your morning by indulging in some tasty treats from Noah’s Ark ☺️   ",
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...",
        tumblr: "https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "img/breakfast-menu1.jpg",
        leftColBottomImg2: "img/breakfast-menu2.jpg",
        leftColBottomImg3: "img/breakfast-menu3.jpg",
        leftColBottomImg4: "img/breakfast-menu4.jpg",
        leftColBottomImg5: "img/breakfast-menu5.jpg",
        leftColBottomImg6: "img/breakfast-menu6.jpg",
        leftColBottomImg7: "img/breakfast-menu7.jpg",
        leftColBottomImg8: "img/breakfast-menu8.jpg",
        leftColBottomImg9: null,
        leftColBottomImg10: null,
    },

    {
        id: "rangeproduct8",
        rangeImg: "img/range-product8.jpg",
        img: "img/milk-form-series1.png",
        title: "MILK FORM SERIES",
        description: "Last year we added milk foam to the menu, a literal topping that adds a layer of dairy free salty cream to the top of a drink, and it’s been a hit! We wanted to experiment with this, to see what wondrous creations could be made to complement our teas. Noah’s Ark is proud to present our Milk Foam Series 😊 All new flavours of milk foam can be added to all your favourite drinks! Chocolate, Caramel and Honey pair perfectly with our sweeter varieties, while Strawberry and Matcha are great options for milky or fruity flavours. Not sure what combinations work well? Ask our friendly staff or consult our range of suggestions. We want to keep innovating, to push the boundaries of what bubble tea could be. Let us know what flavours or varieties you want to see in our stores. As always, we’re proud to have the support of all you guys and we look forward to seeing you in store soon!  ",
        fb: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        twitter: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...",
        tumblr: "https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod",
        pinterest: "https://www.pinterest.nz/?show_error=true",
        leftColBottomImg1: "img/milk-form-series1.png",
        leftColBottomImg2: "img/milk-form-series2.png",
        leftColBottomImg3: "img/milk-form-series3.png",
        leftColBottomImg4: "img/milk-form-series4.png",
        leftColBottomImg5: "img/milk-form-series5.png",
        leftColBottomImg6: "img/milk-form-series6.png",
        leftColBottomImg7: "img/milk-form-series7.png",
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