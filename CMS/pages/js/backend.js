const openFeature = page => {
    const pageContainer = document.getElementsByClassName("main")[0];
    const url = "feature/widgEditor/" + page + ".htm";
    $.get(url, function(data, status) {
        pageContainer.innerHTML = data;
        widgInit();
    });
};