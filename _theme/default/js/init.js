$.getJSON("_data/site_setup/config.json", function (json) {
    const THEME = json.theme;

    $.get(`_theme/${THEME}/common/annoucement.html`,
        function (data, status) {
            document.getElementById("annoucement").innerHTML = data;
            var myIndex = 0;
            annoucementBanner(myIndex);
        }
    );

    $.get(`_theme/${THEME}/common/nav.php`,
        function (data, status) {
            document.getElementById("myTopnav").innerHTML = data;
        }
    );

    $.get("_data/dynamic_pages/footer-list.html",
        function (data, status) {
            document.getElementById("footer-list").innerHTML = data;
        }
    );

    $.get(`_theme/${THEME}/common/footer.html`,
        function (data, status) {
            document.getElementById("footer").innerHTML = data;
        }
    );

    function annoucementBanner(myIndex) {
        var i;
        var x = document.getElementsByClassName("annoucement");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {
            myIndex = 1
        }
        x[myIndex - 1].style.display = "block";

        setTimeout(function () {
            annoucementBanner(myIndex);
        }, 4000);
    }
});

