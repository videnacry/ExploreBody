//----------------------------------------------variables to play with the initial iframes-----------------------------------------------------------------
let goWhole = document.getElementById("whole");
let whole = document.getElementById("body-whole");
let part = document.getElementById("body-part");
//--------------------------event to show a nav to go through the body systems, hide the organ iframe and make bigger the other iframe----------------------
goWhole.addEventListener("click",function(){
    part.classList.add("hide");
    goWhole.classList.add("hide");
    whole.style.width = "100vw";
    whole.style.height = "75vh";
    selectSystem.classList.toggle("hide");
});
//-----------------------------variables to play with the ad shown at first when opening or reloading the page----------------------------------------------
let adBackground = document.getElementById("ad-background");
let ad = document.getElementById("ad");
let coronaTour = document.getElementById("corona-tour");
let closeAd = document.getElementById("close-ad");
//--------------------------------------event to hide the add if clicked the button "closeAd" or outside the ad----------------------------------------------
adBackground.addEventListener("click",hideAd);
ad.addEventListener("click",function(){
    coronaTour.classList.add("big--size");
    ad.classList.add("hide");
});
closeAd.addEventListener("click",hideAd);
function hideAd(){
    ad.classList.add("hide");
    coronaTour.classList.add("hide");
    adBackground.classList.add("hide");
    closeAd.classList.add("hide");
}

// Enter FullBody or Organs
let openWholeBody = document.getElementById("enter_HumanBody");
let openOrgans = document.getElementById("enter_Organs");
let body = document.getElementById("body-whole");
let organs = document.getElementById("body-part");
let homeBTN = document.getElementById("go__home");
let showOrgans = document.querySelectorAll("#Organs");
let hideBrain = document.getElementById("body-part");
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
    showOrgans.forEach(ele=>ele.style.display="block");
    hideBrain.classList.add("hide");
});

// Home Button
function returnHome(){
    location.reload();
}

//---------------------------------------variables to play with the nav of body systems parent--------------------------------------------------------
let selectSystem = document.getElementById("select-system");
let systemTabs = selectSystem.querySelectorAll("#systems li");
//-----------------------------------variables to deide wich url is going to be used in the iframe wholeBody------------------------------------------
let sex = "male"
let urls = {
    male:{
        muscular:"https://human.biodigital.com/viewer/?m=production/maleAdult/male_system_anatomy_muscular_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        connective:"https://human.biodigital.com/viewer/?m=production/maleAdult/male_system_anatomy_connective_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        skeletal:"https://human.biodigital.com/viewer/?m=production/maleAdult/male_system_anatomy_skeletal_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        cardiovascular:"https://human.biodigital.com/viewer/?m=production/maleAdult/male_system_anatomy_cardiovascular_10.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        lymphatic:"https://human.biodigital.com/viewer/?m=production/maleAdult/male_system_anatomy_lymphatic_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        respiratory:"https://human.biodigital.com/viewer/?m=production/maleAdult/male_system_anatomy_respiratory_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        digestive:"https://human.biodigital.com/viewer/?m=production/maleAdult/male_system_anatomy_digestive_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        reproductive:"https://human.biodigital.com/viewer/?m=production/maleAdult/male_system_anatomy_reproductive_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        urinary:"https://human.biodigital.com/viewer/?m=production/maleAdult/male_system_anatomy_urinary_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        endocrine:"https://human.biodigital.com/viewer/?m=production/maleAdult/male_system_anatomy_endocrine_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        nervous:"https://human.biodigital.com/viewer/?m=production/maleAdult/male_system_anatomy_nervous_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        auditory:"https://human.biodigital.com/viewer/?m=production/maleAdult/male_system_anatomy_auditory_whole.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2"
    },
    female:{
        muscular:"https://human.biodigital.com/viewer/?m=production/maleAdult/male_system_anatomy_nervous_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        connective:"https://human.biodigital.com/viewer/?m=production/femaleAdult/female_system_anatomy_connective_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        skeletal:"https://human.biodigital.com/viewer/?m=production/femaleAdult/female_system_anatomy_skeletal_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        cardiovascular:"https://human.biodigital.com/viewer/?m=production/femaleAdult/female_system_anatomy_cardiovascular_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        lymphatic:"https://human.biodigital.com/viewer/?m=production/femaleAdult/female_system_anatomy_lymphatic_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        respiratory:"https://human.biodigital.com/viewer/?m=production/femaleAdult/female_system_anatomy_respiratory_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        digestive:"https://human.biodigital.com/viewer/?m=production/femaleAdult/female_system_anatomy_digestive_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        reproductive:"https://human.biodigital.com/viewer/?m=production/femaleAdult/female_system_anatomy_reproductive_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        urinary:"https://human.biodigital.com/viewer/?m=production/femaleAdult/female_system_anatomy_urinary_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        endocrine:"https://human.biodigital.com/viewer/?m=production/femaleAdult/female_system_anatomy_endocrine_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        nervous:"https://human.biodigital.com/viewer/?m=production/maleAdult/male_system_anatomy_nervous_09.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2",
        auditory:"https://human.biodigital.com/viewer/?m=production/femaleAdult/female_system_anatomy_auditory_whole.json&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2"
    }
}
let selectedSystem
let showedOptions
/*event per tab in the first nav to change style of the clicked one and the clicked before so only one has a different style in the nav
 and hide the children shown to show the children of the tab clicked*/
systemTabs.forEach(function(tab){
    tab.addEventListener("click",function(){
        if(showedOptions!=undefined){
            selectedSystem.classList.toggle("background--blue")
            showedOptions.className="nav-tabs flex--row minimize hide"
        }
        selectedSystem = event.target
        selectedSystem.classList.toggle("background--blue")
        showedOptions = document.getElementById(event.target.dataset.children)
        showedOptions.classList.toggle("hide")
        setTimeout(function(){
            showedOptions.classList.toggle("minimize")
        },50)
    })
})
//-----------------------variable of a link with a event to change the gender of the body shown once clicked (changing the url)-----------------------
let gender = document.getElementById("switch-gender");
gender.addEventListener("click",function(){
    let target = event.target;
    if(target.textContent=="Male"){
        change("Female","https://human.biodigital.com/viewer/?be=3Zh1&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2")
    }
    else{
        change("Male","https://human.biodigital.com/viewer/?be=3Zhm&ui-info=true&ui-search=true&ui-reset=true&ui-fullscreen=true&ui-nav=true&ui-tools=true&ui-help=true&ui-chapter-list=false&ui-label-list=true&ui-anatomy-descriptions=false&ui-tutorial=false&disable-scroll=false&dk=6b061c11acab815dcd55db3cc18fb2b7798b3af2")
    }
    function change(gender,url){
        sex=gender.toLowerCase()
        target.textContent=gender
        document.getElementById("body-whole").src=url
    }
})
//---------------------variable of the systems in the children div whose are shown once clicked their respective parent--------------------------------
let systemsChildren = document.querySelectorAll("#children li")
//----------------------------------------------------------variable of the system clicked-------------------------------------------------------------
let selectedChild
//-------------------------event per system so it changes the styles of him and the last clicked, and change the url of the iframe---------------------
systemsChildren.forEach(function(child){
    child.addEventListener("click",function(){
        if(selectedChild!=undefined){
            selectedChild.classList.toggle("background--blue")
        }
        selectedChild = event.target
        selectedChild.classList.toggle("background--blue")
        whole.src=urls[sex][selectedChild.dataset.url]
        showedOptions.classList.toggle("minimize")
        setTimeout(function(){
            showedOptions.classList.toggle("hide")
        },500)
    })
})
//-------------variable of a link, which get the event to return to the last stage, so when the screen were divided by two iframes----------------------
let returnParent = document.getElementById("return-index")
returnParent.addEventListener("click",function(){
    whole.style="50vw"
    whole.style="100vh"
    goWhole.classList.remove("hide")
    part.classList.remove("hide")
    selectSystem.classList.add("hide")
})
