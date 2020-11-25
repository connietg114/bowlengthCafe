window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    topnavChange();
    // console.log(document.documentElement.scrollTop);
    
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {//scroll up effective -> become smaller
        $("#logo").css("height", "60px");
        $("#logo").css("margin", "10px");
        $(".logoDiv").css("display", "inline-block");

        $(".topnav .menu-content").css("margin-top", "0");
        $(".topnav .menu-content").css("display", "inline-block");
        $(".topnav .menu-content").css("float", "right");

        $(".pageContent").css("padding-top", "150px");
    }
    else {
        $("#logo").css("height", "200px");
        $("#logo").css("margin", "none");
        $(".logoDiv").css("display", "block");

        $(".topnav .menu-content").css("margin-top", "10px");
        $(".topnav .menu-content").css("display", "block");
        $(".topnav .menu-content").css("float", "none");

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
function serviceDropdownMenu() {
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
function changeUrl(id){
    var url;
    for(var i = 0; i < locationDetails.length; i++) {
        if(locationDetails[i].id===id){
            var title = locationDetails[i].locationTitle;
            var titleDashed = title.replace(/\s+/g, '-').toLowerCase();
            
            url = "?locations/" + titleDashed 
        }
    }
    window.location.href=url;
}

// change new range url 
function changeRangeUrl(id){
    var url;
    for(var i = 0; i < newRangeDetails.length; i++) {
        if(newRangeDetails[i].id===id){
            var title = newRangeDetails[i].newRangeTitle;
            var titleDashed = title.replace(/\s+/g, '-').toLowerCase();
            
            url = "?new-range/" + titleDashed 
        }
    }
    window.location.href=url;
}

function showPage(url){
    window.location.href=url;
}

window.onload= function(){
    var url = window.location.href;
    if(url.includes("?")){
        $(".myCafe").load("indexContent.html", function(){
            var str = url.split("?");
            var lastIndexStr= str[str.length-1];
            var link;
            if(lastIndexStr.includes('/')){
                var splitStr= lastIndexStr.split("/");
                if(lastIndexStr.includes('-')){
                    var address = splitStr[1].replace(/-/g, ' ');
                    for(var i = 0; i < locationDetails.length; i++) {
                        if(locationDetails[i].locationTitle.toLowerCase()==address){
                            var id = locationDetails[i].id;
                            $(".pageContent").load("pages/" + splitStr[0] + ".html", function(){
                                showLocationDetails(id, 'pages/locationDetails.html');
                            });                              
                        }
                    }
                }else{
                    
                    $(".pageContent").load("pages/" + splitStr[0] + ".html", function(){
                        $(".locationPageContent").load("pages/" + lastIndexStr + ".html");
                    });   
                }
            }
                
            else if(lastIndexStr=="locations"){
                link = "pages/" + lastIndexStr + ".html";
                $(".pageContent").load(link, function(){
                    $(".locationPageContent").load("pages/locations/all.html");
                });
            }
            else{
                link = "pages/" + lastIndexStr + ".html";
                $(".pageContent").load(link);
            }
              
        });
        
    }
    else if(url === 'http://localhost:8080/bowlengthCafe/'){
        $(".myCafe").load("indexContent.html", function(){
            $(".pageContent").load("pages/home.html");
        });
    }
    else{
        alert("Page not found!");
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
        hours3:null,
        fb:'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Fmanners-st',
        twitter: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Fmanners-st&text=VISIT+US04+...',
        tumblr: 'https://www.tumblr.com/share/link?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Fmanners-st',
        pinterest: 'https://www.pinterest.nz/?show_error=true',
        leftColBottomImg1:null,
        leftColBottomImg2:null,
        leftColBottomImg3:null,
        leftColBottomImg4:null,
        leftColBottomImg5:null,
        leftColBottomImg6:null,
        leftColBottomImg7:null,
        leftColBottomImg8:null,
        leftColBottomImg9:null,
        leftColBottomImg10:null,

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
        hours3:null,
        fb:'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F89-queens-drive',
        twitter: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F89-queens-drive&text=VISIT+US04+...',
        tumblr: 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F89-queens-drive&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F89-queens-drive',
        pinterest: 'https://www.pinterest.nz/?show_error=true',
        leftColBottomImg1:'img/ALL2.png',
        leftColBottomImg2:'img/89queensdrive2.png',
        leftColBottomImg3:'img/89queensdrive3.png',
        leftColBottomImg4:'img/89queensdrive4.png',
        leftColBottomImg5:null,
        leftColBottomImg6:null,
        leftColBottomImg7:null,
        leftColBottomImg8:null,
        leftColBottomImg9:null,
        leftColBottomImg10:null,

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
        fb:'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F180-lambton-quay',
        twitter: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F180-lambton-quay&text=VISIT+US04+...',
        tumblr: 'https://www.tumblr.com/share/link?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F180-lambton-quay',
        pinterest: 'https://www.pinterest.nz/?show_error=true',
        leftColBottomImg1:'img/ALL3.png',
        leftColBottomImg2:'img/180lambtonquay2.png',
        leftColBottomImg3:'img/180lambtonquay3.png',
        leftColBottomImg4:'img/180lambtonquay4.png',
        leftColBottomImg5:'img/180lambtonquay5.png',
        leftColBottomImg6:null,
        leftColBottomImg7:null,
        leftColBottomImg8:null,
        leftColBottomImg9:null,
        leftColBottomImg10:null,

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
        hours3:null,
        fb:'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Fcuba-st',
        twitter: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Fcuba-st&text=VISIT+US04+...',
        tumblr: 'https://www.tumblr.com/share/link?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Fcuba-st',
        pinterest: 'https://www.pinterest.nz/?show_error=true',
        leftColBottomImg1:'img/ALL4.png',
        leftColBottomImg2:'img/128cubastreet2.png',
        leftColBottomImg3:'img/128cubastreet3.png',
        leftColBottomImg4:'img/128cubastreet4.png',
        leftColBottomImg5:'img/128cubastreet5.png',
        leftColBottomImg6:null,
        leftColBottomImg7:null,
        leftColBottomImg8:null,
        leftColBottomImg9:null,
        leftColBottomImg10:null,
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
        hours3: 'Friday - Sunday     9.30am - 6pm',
        fb:'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Fnorthwest',
        twitter: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Fnorthwest&text=VISIT+US09+...',
        tumblr: 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Fnorthwest&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Fnorthwest',
        pinterest: 'https://www.pinterest.nz/?show_error=true',
        leftColBottomImg1:'img/ALL5.png',
        leftColBottomImg2:'img/northwest2.png',
        leftColBottomImg3:'img/northwest3.png',
        leftColBottomImg4:'img/northwest4.png',
        leftColBottomImg5:'img/northwest5.png',
        leftColBottomImg6:'img/northwest6.png',
        leftColBottomImg7:'img/northwest7.png',
        leftColBottomImg8:null,
        leftColBottomImg9:null,
        leftColBottomImg10:null,
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
        hours3: 'Sunday            11:30am - 7pm',
        fb:'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F93-courtenay-place',
        twitter: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F93-courtenay-place&text=VISIT+US04+...',
        tumblr: 'https://www.tumblr.com/share/link?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F93-courtenay-place',
        pinterest: 'https://www.pinterest.nz/?show_error=true',
        leftColBottomImg1:'img/ALL6.png',
        leftColBottomImg2:'img/93courtenayplace2.png',
        leftColBottomImg3:null,
        leftColBottomImg4:null,
        leftColBottomImg5:null,
        leftColBottomImg6:null,
        leftColBottomImg7:null,
        leftColBottomImg8:null,
        leftColBottomImg9:null,
        leftColBottomImg10:null,
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
        hours3:null,
        fb:'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F77-wallce-street',
        twitter: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F77-wallce-street&text=VISIT+US04+385+903377+Wallace+Street%2C+Mt+Cook%2C+...',
        tumblr: 'https://www.tumblr.com/share/link?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2F77-wallce-street',
        pinterest: 'https://www.pinterest.nz/?show_error=true',
        leftColBottomImg1:'img/ALL7.png',
        leftColBottomImg2:'img/77wallacest2.png',
        leftColBottomImg3:'img/77wallacest3.png',
        leftColBottomImg4:'img/77wallacest4.png',
        leftColBottomImg5:null,
        leftColBottomImg6:null,
        leftColBottomImg7:null,
        leftColBottomImg8:null,
        leftColBottomImg9:null,
        leftColBottomImg10:null,
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
        hours3:null,
        fb:'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod',
        twitter: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...',
        tumblr: 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod',
        pinterest: 'https://www.pinterest.nz/?show_error=true',
        leftColBottomImg1:null,
        leftColBottomImg2:null,
        leftColBottomImg3:null,
        leftColBottomImg4:null,
        leftColBottomImg5:null,
        leftColBottomImg6:null,
        leftColBottomImg7:null,
        leftColBottomImg8:null,
        leftColBottomImg9:null,
        leftColBottomImg10:null,
    }

];

var newRangeDetails = [
    {
        id:'rangeproduct1',
        img:'img/range-product1.jpg',
        newRangeTitle:'String Lab',
        description:'Spring Lab is all about being creative. Mix and match different our fruity flavours with a tea base of either green T, black T or Oolong. These sweet sips will satisfy tastebuds of all ages. Grab a cup with your friend and get ready to enjoy this stunning color in the spring sunshine. Stay bubbly💚',
        fb:'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod',
        twitter: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...',
        tumblr: 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod',
        pinterest: 'https://www.pinterest.nz/?show_error=true',
        leftColBottomImg1:'img/range-product1.jpg',
        leftColBottomImg2:'img/range-product2.jpg',
        leftColBottomImg3:'img/range-product3.jpg',
        leftColBottomImg4:null,
        leftColBottomImg5:null,
        leftColBottomImg6:null,
        leftColBottomImg7:null,
        leftColBottomImg8:null,
        leftColBottomImg9:null,
        leftColBottomImg10:null,
    },

    {
        id:'rangeproduct2',
        img:'img/range-product2.jpg',
        newRangeTitle:'Range Product 2',
        description:'Spring Lab is all about being creative. Mix and match different our fruity flavours with a tea base of either green T, black T or Oolong. These sweet sips will satisfy tastebuds of all ages. Grab a cup with your friend and get ready to enjoy this stunning color in the spring sunshine. Stay bubbly💚',
        fb:'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod',
        twitter: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...',
        tumblr: 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod',
        pinterest: 'https://www.pinterest.nz/?show_error=true',
        leftColBottomImg1:'img/range-product2.jpg',
        leftColBottomImg2:'img/range-product2.jpg',
        leftColBottomImg3:'img/range-product3.jpg',
        leftColBottomImg4:null,
        leftColBottomImg5:null,
        leftColBottomImg6:null,
        leftColBottomImg7:null,
        leftColBottomImg8:null,
        leftColBottomImg9:null,
        leftColBottomImg10:null,
    },

    {
        id:'rangeproduct3',
        img:'img/range-product3.jpg',
        newRangeTitle:'Range Product 3',
        description:'Spring Lab is all about being creative. Mix and match different our fruity flavours with a tea base of either green T, black T or Oolong. These sweet sips will satisfy tastebuds of all ages. Grab a cup with your friend and get ready to enjoy this stunning color in the spring sunshine. Stay bubbly💚',
        fb:'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod',
        twitter: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...',
        tumblr: 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod',
        pinterest: 'https://www.pinterest.nz/?show_error=true',
        leftColBottomImg1:'img/range-product3.jpg',
        leftColBottomImg2:'img/range-product2.jpg',
        leftColBottomImg3:'img/range-product3.jpg',
        leftColBottomImg4:null,
        leftColBottomImg5:null,
        leftColBottomImg6:null,
        leftColBottomImg7:null,
        leftColBottomImg8:null,
        leftColBottomImg9:null,
        leftColBottomImg10:null,
    },
    
    {
        id:'rangeproduct4',
        img:'img/range-product4.jpeg',
        newRangeTitle:'Range Product 4',
        description:'Spring Lab is all about being creative. Mix and match different our fruity flavours with a tea base of either green T, black T or Oolong. These sweet sips will satisfy tastebuds of all ages. Grab a cup with your friend and get ready to enjoy this stunning color in the spring sunshine. Stay bubbly💚',
        fb:'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod',
        twitter: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...',
        tumblr: 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod',
        pinterest: 'https://www.pinterest.nz/?show_error=true',
        leftColBottomImg1:'img/range-product4.jpeg',
        leftColBottomImg2:'img/range-product2.jpg',
        leftColBottomImg3:'img/range-product3.jpg',
        leftColBottomImg4:null,
        leftColBottomImg5:null,
        leftColBottomImg6:null,
        leftColBottomImg7:null,
        leftColBottomImg8:null,
        leftColBottomImg9:null,
        leftColBottomImg10:null,
    },

    
    {
        id:'rangeproduct5',
        img:'img/range-product5.jpeg',
        newRangeTitle:'Range Product 5',
        description:'Spring Lab is all about being creative. Mix and match different our fruity flavours with a tea base of either green T, black T or Oolong. These sweet sips will satisfy tastebuds of all ages. Grab a cup with your friend and get ready to enjoy this stunning color in the spring sunshine. Stay bubbly💚',
        fb:'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod',
        twitter: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...',
        tumblr: 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod',
        pinterest: 'https://www.pinterest.nz/?show_error=true',
        leftColBottomImg1:'img/range-product5.jpeg',
        leftColBottomImg2:'img/range-product2.jpg',
        leftColBottomImg3:'img/range-product3.jpg',
        leftColBottomImg4:'img/range-product4.jpeg',
        leftColBottomImg5:null,
        leftColBottomImg6:null,
        leftColBottomImg7:null,
        leftColBottomImg8:null,
        leftColBottomImg9:null,
        leftColBottomImg10:null,
    },
    
    
    {
        id:'rangeproduct6',
        img:'img/range-product6.jpeg',
        newRangeTitle:'Range Product 6',
        description:'Spring Lab is all about being creative. Mix and match different our fruity flavours with a tea base of either green T, black T or Oolong. These sweet sips will satisfy tastebuds of all ages. Grab a cup with your friend and get ready to enjoy this stunning color in the spring sunshine. Stay bubbly💚',
        fb:'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod',
        twitter: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...',
        tumblr: 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod',
        pinterest: 'https://www.pinterest.nz/?show_error=true',
        leftColBottomImg1:'img/range-product6.jpeg',
        leftColBottomImg2:'img/range-product2.jpg',
        leftColBottomImg3:'img/range-product3.jpg',
        leftColBottomImg4:'img/range-product4.jpeg',
        leftColBottomImg5:'img/range-product5.jpeg',
        leftColBottomImg6:null,
        leftColBottomImg7:null,
        leftColBottomImg8:null,
        leftColBottomImg9:null,
        leftColBottomImg10:null,
    },
    
    
    {
        id:'rangeproduct7',
        img:'img/range-product7.jpg',
        newRangeTitle:'Range Product 7',
        description:'Spring Lab is all about being creative. Mix and match different our fruity flavours with a tea base of either green T, black T or Oolong. These sweet sips will satisfy tastebuds of all ages. Grab a cup with your friend and get ready to enjoy this stunning color in the spring sunshine. Stay bubbly💚',
        fb:'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod',
        twitter: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...',
        tumblr: 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod',
        pinterest: 'https://www.pinterest.nz/?show_error=true',
        leftColBottomImg1:'img/range-product7.jpg',
        leftColBottomImg2:'img/range-product2.jpg',
        leftColBottomImg3:'img/range-product3.jpg',
        leftColBottomImg4:'img/range-product4.jpeg',
        leftColBottomImg5:'img/range-product5.jpeg',
        leftColBottomImg6:'img/range-product3.jpg',
        leftColBottomImg7:null,
        leftColBottomImg8:null,
        leftColBottomImg9:null,
        leftColBottomImg10:null,
    },
    
    
    {
        id:'rangeproduct8',
        img:'img/range-product8.jpg',
        newRangeTitle:'Range Product 8',
        description:'Spring Lab is all about being creative. Mix and match different our fruity flavours with a tea base of either green T, black T or Oolong. These sweet sips will satisfy tastebuds of all ages. Grab a cup with your friend and get ready to enjoy this stunning color in the spring sunshine. Stay bubbly💚',
        fb:'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod',
        twitter: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&text=VISIT+US%3Cp+class%3D%22%22+...',
        tumblr: 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod&posttype=link&title=&caption=&content=https%3A%2F%2Fnoahsarkteahouse.com%2Flocations%2Freading-cinema-pod',
        pinterest: 'https://www.pinterest.nz/?show_error=true',
        leftColBottomImg1:'img/range-product8.jpg',
        leftColBottomImg2:'img/range-product2.jpg',
        leftColBottomImg3:'img/range-product3.jpg',
        leftColBottomImg4:'img/range-product4.jpeg',
        leftColBottomImg5:'img/range-product5.jpeg',
        leftColBottomImg6:'img/range-product6.jpeg',
        leftColBottomImg7:'img/range-product7.jpg',
        leftColBottomImg8:'img/range-product8.jpg',
        leftColBottomImg9:null,
        leftColBottomImg10:null,
    }   
    
];

function renderLocationItem(index){
    var mapAddress;
    var item = locationDetails[index];

    var numArray = [];
    var usedArray = [];
    usedArray.push(index);
    for(var i = 0; i < 5; i++) {
        var num = generateRandom(0,7, usedArray);
        usedArray.push(num);
        numArray.push(num);
        $(".othersChild" + (i+1).toString()).attr('id', locationDetails[num].id);
        $(".othersImg" + (i+1).toString()).attr('src', locationDetails[num].img);
        $(".othersChild" + (i+1).toString() + " p").text(locationDetails[num].locationTitle);

    }
   
    $(".locationDetails").attr("Name", item.id);
    $(".leftColImg").attr('src', item.img);
    $(".locationTitle").text(item.locationTitle);
    if(item.telNo===null){
        $(".visitUs").css("display", "None");
    }else{
        $(".visitUs").css("display", "block");
        $(".telNo").text(item.telNo);
    }
    if(item.address2 === null){
        mapAddress=item.address
    }else{
        mapAddress=item.address2;
    }
    mapAddress = 'https://www.google.com/maps?q=' + mapAddress +'&output=embed';
    $(".mapIframe").attr('src', mapAddress);
    
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
    $("#locationFb").attr("onclick", "window.open('" + item.fb+ "')");
    $("#locationTwitter").attr("onclick", "window.open('" + item.twitter+ "')");
    $("#locationTumblr").attr("onclick", "window.open('" + item.tumblr+ "')");
    $("#locationPinterest").attr("onclick", "window.open('" + item.pinterest+ "')");

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

function showLocationDetails(id, url){
    $(".locationPageContent").load(url, function(){
        for(var i = 0; i < locationDetails.length; i++) {
            if(locationDetails[i].id===id){
                renderLocationItem(i);
            }  
        }
        zoomInImgOnMousemove('leftColImg');
          
    });
}
function zoomInImgOnMousemove(className){
    var className = '.' + className;
    $(className).click(function() {
        $(this).toggleClass('normal-zoom zoom-in');
    });

    $(className).on('mousemove', function(event) {
        var bbox = event.target.getBoundingClientRect(); //position of the image on the page
        
        var mouseX = event.clientX - bbox.left;//measure how far into the image the mouse is in both x and y directions
        var mouseY = event.clientY - bbox.top;
       
        var xPercent = (mouseX / bbox.width) * 100; //work out how far through the image as a percentage the mouse is
        var yPercent = (mouseY / bbox.height) * 100;
      
        // Then we change the `transform-origin` css property on the image to center the zoom effect on the mouse position
        //event.target.style.transformOrigin = xPercent + '% ' + yPercent + '%';
        $(this).css('transform-origin', (xPercent+'% ' + yPercent+ '%') ); // We add the '%' units to make sure the string looks exactly like the css declaration it becomes.
    });
      
    $(className).on('mouseenter', function() {//want it to automatically trigger on hover
        $(this).addClass('zoom-in');
        $(this).removeClass('normal-zoom');
    });
    
    $(className).on('mouseleave', function() {//stop when not hovering
        $(this).addClass('normal-zoom');
        $(this).removeClass('zoom-in');
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
    changeUrl(locationDetails[index].id);
}
function generateRandom(min, max, array) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (array.includes(num)) ? generateRandom(min, max, array) : num;
}

function changeImg(id){
    var newImg = $("#" + id).attr("src");
    $(".leftColImg").attr("src", newImg);
}
