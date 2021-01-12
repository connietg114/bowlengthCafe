window.onload = function() {
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
                                "dynamic_pages/" + splitStr[0] + ".html",
                                function() {
                                    showLocationDetails(
                                        id,
                                        "dynamic_pages/locationDetails.html",
                                        locationDetails
                                    );
                                }
                            );
                        }
                    }
                } else {
                    $(".pageContent").load(
                        "dynamic_pages/" + splitStr[0] + ".html",
                        function() {
                            $(".locationPageContent").load(
                                "dynamic_pages/" + lastIndexStr + ".html"
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
                            showRangeDetails(id, "dynamic_pages/rangeDetails.html", newRangeDetails);
                        }
                    }
                }
                // ?new-ranges/(Category)
                // lastIndexStr = allRanges/available/limitedAvailable/limitedStock/limitedTime
                else {
                    $(".pageContent").load(
                        "dynamic_pages/" + splitStr[0] + ".html",
                        function() {
                            $(".new-rangesPageContent").load(
                                "dynamic_pages/newRangesCategory/" + splitStr[1] + ".html"
                            );
                        }
                    );
                }
            } else {
                alert("url is : " + url + "\nno such page exit!");
            }
        } else if (lastIndexStr == "locations") {
            link = "dynamic_pages/" + lastIndexStr + ".html";
            $(".pageContent").load(link, function() {
                $(".locationPageContent").load("dynamic_pages/locations/all.html");
            });
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
        } else {
            link = "pages/" + lastIndexStr + ".html";
            $(".pageContent").load(link);

        }
    } else if (url.includes("bowlengthCafe")) {
        $(".myCafe").load("indexContent.html", function() {
            $(".pageContent").load("pages/home.html");
        });
    } else {
        alert("Page not found!");
    }
};