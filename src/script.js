let goWhole = document.getElementById("whole")
let whole = document.getElementById("body-whole")
let part = document.getElementById("body-part")
goWhole.addEventListener("click",function(){
    part.classList.add("hide")
    goWhole.classList.add("hide")
    whole.style.width = "100vw"
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
let selectSystem = document.getElementById("select-system")
let openWholeBody = document.getElementById("enter_HumanBody");
let openOrgans = document.getElementById("enter_Organs");
let body = document.getElementById("body-whole");
let organs = document.getElementById("body-part")
openWholeBody.addEventListener("click", function(){
    body.style.width = "100%";
    organs.style.display = "none";
});
openOrgans.addEventListener("click", function(){
    organs.style.width = "100%";
})
