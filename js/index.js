window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    topnavChange();

    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {//scroll up effective -> become smaller
        // $(".topnav")
        $("#logo").css("height", "60px");
        $(".logoDiv").css("display", "inline-block");
        $(".topnav .menu-content").css("margin-top", "0");
        $(".topnav .menu-content").css("display", "inline-block");
        $(".pageContent").css("padding-top", "150px");
    }
    else {
        $("#logo").css("height", "200px");
        $(".logoDiv").css("display", "block");

        $(".topnav .menu-content").css("margin-top", "10px");
        $(".topnav .menu-content").css("display", "block");
        $(".pageContent").css("padding-top", "300px");
        
    }
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
    if(url=="pages/locations/all.html"||url=="pages/locations/auckland.html"||url=="pages/locations/lowerhut.html"||url=="pages/locations/wellington.html"){
        $(".locationPageContent").load(url);
    }else{
        $(".pageContent").load(url);
    }
}

var locationDetails=[
    {
        id:'child1',
        img:'img/ALL1.png',
        telNo:'04 499 5008',
        locationTitle:'79 Manners Street',
        address:'79 Manners Street, Te Aro, Wellington',
        address2:null,
        hours:'Monday - Sunday   11.30am - 7pm',
        hours2:null,
        hours3:null
    },
    {
        id:'child2',
        img:'img/ALL2.png',
        telNo:'04 568 3355',
        locationTitle: '89 Queens Drive',
        address:'3/89 Queens Drive, LowerHutt',
        address2:null,
        hours:'Monday - Sunday   11.30am - 7pm',
        hours2:null,
        hours3:null
    },
    {
        id:'child3',
        img:'img/ALL3.png',
        telNo:'04 499 5008',
        locationTitle:'180 Lambton Quay',
        address: 'Ground Floor,  Lambton Square & Eatery',
        address2:'180 Lambton Quay  /  Farmers Lane, Wellington',
        hours:'Monday - Sunday   11.30am - 7pm',
        hours2: 'Saturday - Sunday     11.30am - 3:30pm',
        hours3:null,

    },
    {
        id:'child4',
        img:'img/ALL4.png',
        telNo:'04 499 5008',
        locationTitle:'128 Cuba Street',
        address:'128 Cuba Street, Te Aro, Wellington',
        address2:null,
        hours:'Monday - Sunday   11.30am - 7pm',
        hours2:null,
        hours3:null
    },
    {
        id:'child5',
        img:'img/ALL5.png',
        telNo:'09 416 0631',
        locationTitle:'NORTHWEST SHOPPING CENTRE',
        address: 'Kiosk 04 ( Nearby FoodCourt ), NorthWest Shopping Centre',
        address2:'1/7 Fred Taylor Dr, Massey, Auckland',
        hours:'Monday - Wednesday   9.30am - 6pm',
        hours2: 'Thursday            9.30am - 9pm',
        hours3: 'Friday - Sunday     9.30am - 6pm'
    },
    {
        id:'child6',
        img:'img/ALL6.png',
        telNo:'04 801 6538',
        locationTitle:'93 COURTENAY PLACE',
        address:'2/93 Courtenay Place, Te Aro, Wellington',
        address2:null,
        hours:'Monday - Sunday   11.30am - 7pm',
        hours2: 'Friday - Saturday   11:30am - 10pm',
        hours3: 'Sunday            11:30am - 7pm'
    },
    {
        id:'child7',
        img:'img/ALL7.png',
        telNo:'04 385 9033',
        locationTitle:'77 WALLCE STREET',
        address:'77 Wallace Street, Mt Cook, Wellington',
        address2:null,
        hours: 'REOPENING NOW',
        hours2:'Monday - Sunday   11.30am - 6pm',
        hours3:null
    },
    {
        id:'child8',
        img:'img/ALL8.png',
        telNo:null,
        locationTitle:'READING CINEMA POD',
        address:'Pod 2, Reading Cinema Theater',
        address2:null,
        address2:'100 Courtney Place, Te Aro, Wellington',
        hours:'Temporarily Closed',
        hours2:null,
        hours3:null
    }

];


function renderLocationItem(index){
    var item = locationDetails[index];
    $(".locationDetails").attr("Name", item.id);
    $(".leftColImg").attr('src', item.img);
    $(".locationTitle").text(item.locationTitle);
    if(item.telNo===null){
        $(".visitUs").css("display", "None");
    }else{
        $(".visitUs").css("display", "block");
        $(".telNo").text(item.telNo);
    }
    
    $(".address").text(item.address);
    $(".address2").text(item.address2);

    if (item.hours ==='Temporarily Closed' ){
        $('.openingHours').text(item.hours);
        $('.hours').text('');
    }else{
        $('.openingHours').text('Opening Hours');
        $('.hours').text(item.hours);
        $('.hours2').text(item.hours2);
        $('.hours3').text(item.hours3);
    }
   

}

function showLocationDetails(id, url){
    $(".locationPageContent").load(url, function(){
        for(var i = 0; i < locationDetails.length; i++) {
            if(locationDetails[i].id===id){
                renderLocationItem(i);
            }  
        }
    });
}

function showNextOrPrevious(id){
    var index;
    for(var i = 0; i < locationDetails.length; i++) {
        var item = locationDetails[i];
        if(item.id===$(".locationDetails").attr("Name")){
            if(id ==="nextButton"){
                if(i===locationDetails.length-1){
                    index=0;
                }else{
                    index = i+1;
                }    
            }else{
                if(i===0){
                    index=locationDetails.length-1;
                }else{
                    index = i-1;
                }    
            }    
        }
    }
    renderLocationItem(index);
}

