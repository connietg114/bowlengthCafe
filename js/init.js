$.getJSON("_data/site_setup/config.json", function (json) {
    const THEME = json.theme;
    console.log(THEME); // show the JSON file content into console

    loadcssfile(`_theme/${THEME}/css/theme.css`, '');
    loadcssfile(`_theme/${THEME}/css/mb.css`, 'screen and (max-width:860px)');
    loadcssfile(`_theme/${THEME}/css/pd.css`, 'screen and (max-width:1024px) and (min-width:860px)');
    loadcssfile(`_theme/${THEME}/css/pc.css`, 'screen and (min-width:1024px)');

    var script = document.createElement('script');
    script.setAttribute('src', `_theme/${THEME}/js/init.js`);
    document.head.appendChild(script);
});

function loadcssfile(filename, media) {

    var fileref = document.createElement("link")
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("media", media);
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);

    if (typeof fileref != "undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref)
    }
}