window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    topnavChange();
}
function topnavChange(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav responsive") {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            x.className = "topnav";
        }else if (document.body.scrollTop <= 40 || document.documentElement.scrollTop <=40) {
            x.className = "topnav";
        } 
        else{
            x.className = "topnav";
        }   
    } 
}
function serviceDropdownMenu() {//for Our Services dropdown
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function showPage(url){
    $(".pageContent").load(url);
}