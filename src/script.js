let goWhole = document.getElementById("whole")
let whole = document.getElementById("body-whole")
let part = document.getElementById("body-part")
goWhole.addEventListener("click",function(){
    part.classList.add("hide")
    goWhole.classList.add("hide")
    whole.style.width = "100vw"
    whole.style.height = "75vh"
    selectSystem.classList.toggle("hide")
})
let adBackground = document.getElementById("ad-background")
let ad = document.getElementById("ad")
let coronaTour = document.getElementById("corona-tour")
let closeAd = document.getElementById("close-ad")
adBackground.addEventListener("click",hideAd)
ad.addEventListener("click",function(){
    coronaTour.classList.add("big--size")
    ad.classList.add("hide")
})
closeAd.addEventListener("click",hideAd)
function hideAd(){
    ad.classList.add("hide")
    coronaTour.classList.add("hide")
    adBackground.classList.add("hide")
    closeAd.classList.add("hide")
}
let openWholeBody = document.getElementById("enter_HumanBody");
let openOrgans = document.getElementById("enter_Organs");
let body = document.getElementById("body-whole");
let organs = document.getElementById("body-part")
let homeBTN = document.getElementById("go__home");
let showOrgans = document.querySelectorAll("#Organs")
openWholeBody.addEventListener("click", function(){
    body.style.width = "100%";
    organs.style.display = "none";
    openWholeBody.style.display = "none";
    openOrgans.style.display = "none";
    homeBTN.style.display = "block";
});
openOrgans.addEventListener("click", function(){
    organs.style.width = "100%";
    body.style.display = "none";
    openWholeBody.style.display = "none";
    openOrgans.style.display = "none";
    homeBTN.style.display = "block";
    showOrgans.style.display = "block";
});

function returnHome(){
    location.reload();
}
let selectSystem = document.getElementById("select-system")
let systemTabs = selectSystem.querySelectorAll(".nav-tabs li")
systemTabs.forEach(function(tab){
    tab.addEventListener("click",function(){
        event.target.classList.toggle("background--blue")
    })
})
let gender = document.getElementById("switch-gender")
gender.addEventListener("click",function(){
    let target = event.target
    if(target.textContent=="Male"){
        change("Female","https://human.biodigital.com/viewer/?be=3Zh1&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2")
    }
    else{
        change("Male","https://human.biodigital.com/viewer/?be=3Zhm&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2")
    }
    function change(gender,url){
        target.textContent=gender
        document.getElementById("body-whole").src=url
    }
})
