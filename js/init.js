$.getJSON("_data/site_setup/config.json", function (json) {
    const THEME = json.theme;
    console.log(THEME); // show the JSON file content into console


    var my_awesome_script = document.createElement('script');
    my_awesome_script.setAttribute('src', `_theme/${THEME}/js/init.js`);
    document.head.appendChild(my_awesome_script);
});
