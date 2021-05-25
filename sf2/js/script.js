//EXECUTE "pageLoaded" FUNCTION AFTER THE PAGE HAS BEEN LOADED
window.onload = pageLoaded;

function pageLoaded (){
  //ACCESS HTML ELEMENTS
  var formHandle = document.forms.characterForm;
  var formSection = document.getElementById("character-form");
  var nameValue = formHandle.name;
  var typeValue = formHandle.select_type;
  var combatValue = formHandle.select_combat;
  var statsValue = formHandle.select_stats;
  var errorValue = document.getElementsByClassName("error");
  var resultPage = document.getElementById("result");
  var fighterImg = document.getElementsByClassName("picture");
  var fighterGuide = document.getElementsByClassName("video");
  var resultMsg = document.getElementsByClassName("resultMsg");
  var returnBtn = document.getElementById("returnBtn");

  /* CREATE A LISTENER EVENT TO DISPLAY THE RESULTS THAT BASED ON THE INFORMATION SELECTED BY THE USER
  BY CLICKING THE SUBMIT BUTTON */
  formHandle.onsubmit = success; 


  function success(){
    //FORM VALIDATION -VALIDATE USER NAME
    if(nameValue.value === "" || nameValue.value === null){
    errorValue[0].style.color ="red";
    errorValue[0].innerHTML = "Please enter your name";
    nameValue.focus();
    return false;
    }

    //FORM VALIDATION -VALIDATE CHARACTER'S BODY TYPE
    var typeValueText = typeValue.options[typeValue.selectedIndex].text;
    if(typeValueText ==="Select a weight type"){
      errorValue[1].style.color ="red";
      errorValue[1].innerHTML = "Please select a weight type";
      typeValue.focus();
      return false;
      }
    
    //FORM VALIDATION -VALIDATE CHARACTER'S COMBAT TYPE
    var combatValueText = combatValue.options[combatValue.selectedIndex].text;
    if(combatValueText === "Select a combat style"){
      errorValue[2].style.color ="red";
      errorValue[2].innerHTML = "Please select a combat style";
      combatValue.focus();
      return false;
        }
    
    //FORM VALIDATION -VALIDATE CHARACTER'S STATS
    var statsValueText = statsValue.options[statsValue.selectedIndex].text;
    if(statsValueText=== "Select the stats that you prefer" ){
      errorValue[3].style.color ="red";
      errorValue[3].innerHTML = "Please Select the stats that you prefer";
      statsValue.focus();
      return false;
    }

    /*USE THE FOLLOWING IF STATEMENTS TO DETERMINE THE BEST CHARACTER FOR THE USER TO PLAY(BASED ON
    THE INFORMATION THAT THE USER HAD SUBMIITED).THE RESULT AREA WILL SHOW CHARACTER'S PICTURE AND A TUTORIAL
    VIDEO TO TEACH THE USER HOW TO PLAY THE CHARACTER. */
    
    //BALROG
    if(typeValueText === "Heavy Weight" && combatValueText === "Close range" && statsValueText === "Health"){
      formSection.style.display = "none";
      resultPage.style.display = "block";
      returnBtn.style.display = "block";
      resultMsg[0]. innerHTML ="Hello " + nameValue.value + " ! YOU SHOULD PLAY AS :";
      fighterImg[0].src="images/sf2/Health/Balrogrender.png";
      fighterGuide[0].src="https://www.youtube.com/embed/dfPMQB4H0Ss";
      return false;
    }
    
    //DEEJAY
    if(typeValueText === "Normal" && combatValueText === "Close range" && statsValueText === "Health"){
      formSection.style.display = "none";
      resultPage.style.display = "block";
      returnBtn.style.display = "block";
      resultMsg[0]. innerHTML ="Hello " + nameValue.value + " ! YOU SHOULD PLAY AS :";
      fighterImg[0].src="images/sf2/Health/DeeJay.jpg";
      fighterGuide[0].src="https://www.youtube.com/embed/GjtpDf73_YI";
      return false;
    }

    //FEILONG
    if(typeValueText === "Light Weight" && combatValueText === "Close range" && statsValueText === "Health"){
      formSection.style.display = "none";
      resultPage.style.display = "block";
      returnBtn.style.display = "block";
      resultMsg[0]. innerHTML ="Hello " + nameValue.value + " ! YOU SHOULD PLAY AS :";
      fighterImg[0].src="images/sf2/Health/FeiLong.jpg";
      fighterGuide[0].src="https://www.youtube.com/embed/sjeCCyx0Xno";
      return false;
    }

    //Blanka
    if(typeValueText === "Heavy Weight" && combatValueText === "Long range" && statsValueText === "Mobility"){
      formSection.style.display = "none";
      resultPage.style.display = "block";
      returnBtn.style.display = "block";
      resultMsg[0]. innerHTML ="Hello " + nameValue.value + " ! YOU SHOULD PLAY AS :";
      fighterImg[0].src="images/sf2/Mobility/Blanka.png";
      fighterGuide[0].src="https://www.youtube.com/embed/KDVNePENJXM";
      return false;
    }

    //CAMMY AND VEGA
    if(typeValueText === "Light Weight" && combatValueText === "Close range" && statsValueText === "Mobility"){
      formSection.style.display = "none";
      resultPage.style.display = "block";
      returnBtn.style.display = "block";
      resultMsg[0]. innerHTML ="Hello " + nameValue.value + " ! YOU SHOULD PLAY AS :";
      fighterImg[0].src="images/sf2/Mobility/Cammyrender.png";
      fighterGuide[0].src="https://www.youtube.com/embed/Z-qY6zg-4M4";
      resultMsg[1].style.display = "block";
      fighterImg[1].style.display = "block";
      fighterGuide[1].style.display = "block";
      resultMsg[1]. innerHTML = " OR :";
      fighterImg[1].src="images/sf2/Mobility/Vegarender.png";
      fighterGuide[1].src="https://www.youtube.com/embed/rbMkdtEN5Kg";
      return false;
    }

    //CHUN LI AND KEN
    if(typeValueText === "Normal" && combatValueText === "Balanced" && statsValueText === "Mobility"){
      formSection.style.display = "none";
      resultPage.style.display = "block";
      returnBtn.style.display = "block";
      resultMsg[0]. innerHTML ="Hello " + nameValue.value + " ! YOU SHOULD PLAY AS :";
      fighterImg[0].src="images/sf2/Mobility/Chunrender.png";
      fighterGuide[0].src="https://www.youtube.com/embed/4a7M7cjHVzo";
      resultMsg[1].style.display = "block";
      fighterImg[1].style.display = "block";
      fighterGuide[1].style.display = "block";
      resultMsg[1]. innerHTML = " OR :";
      fighterImg[1].src="images/sf2/Mobility/Kenrender.png";
      fighterGuide[1].src="https://www.youtube.com/embed/Pj8fd1h-MhA";
      return false;
    }

    //AKUMA
    if(typeValueText === "Heavy Weight" && combatValueText === "Balanced" && statsValueText === "Power"){
      formSection.style.display = "none";
      resultPage.style.display = "block";
      returnBtn.style.display = "block";
      resultMsg[0]. innerHTML ="Hello " + nameValue.value + " ! YOU SHOULD PLAY AS :";
      fighterImg[0].src="images/sf2/Power/Akumarender.png";
      fighterGuide[0].src="https://www.youtube.com/embed/zsMx0lRpiAk";
      return false;
    }
    //RYU
    if(typeValueText === "Normal" && combatValueText === "Long range" && statsValueText === "Power"){
      formSection.style.display = "none";
      resultPage.style.display = "block";
      returnBtn.style.display = "block";
      resultMsg[0]. innerHTML ="Hello " + nameValue.value + " ! YOU SHOULD PLAY AS :";
      fighterImg[0].src="images/sf2/Power/Ryurender.png";
      fighterGuide[0].src="https://www.youtube.com/embed/Di2hMF5_SZY";
      return false;
    }

    //BALROG AND BISON
    if(typeValueText === "Heavy Weight" && combatValueText === "Close range" && statsValueText === "Power"){
      formSection.style.display = "none";
      resultPage.style.display = "block";
      returnBtn.style.display = "block";
      resultMsg[0]. innerHTML ="Hello " + nameValue.value + " ! YOU SHOULD PLAY AS :";
      fighterImg[0].src="images/sf2/Power/Balrogrender.png";
      fighterGuide[0].src="https://www.youtube.com/embed/dfPMQB4H0Ss";
      resultMsg[1].style.display = "block";
      fighterImg[1].style.display = "block";
      fighterGuide[1].style.display = "block";
      resultMsg[1]. innerHTML = " OR :";
      fighterImg[1].src="images/sf2/Power/Bisonrender.png";
      fighterGuide[1].src="https://www.youtube.com/embed/ECvfYqljilw";
      return false;
    }

    //DHALISM
    if(typeValueText === "Light Weight" && combatValueText === "Long range" && statsValueText === "Range"){
      formSection.style.display = "none";
      resultPage.style.display = "block";
      returnBtn.style.display = "block";
      resultMsg[0]. innerHTML ="Hello " + nameValue.value + " ! YOU SHOULD PLAY AS :";
      fighterImg[0].src="images/sf2/Range/Dhalsimrender.png";
      fighterGuide[0].src="https://www.youtube.com/embed/LRmUdtx2N7o";
      return false;
    }

    //GUILE AND RYU
    if(typeValueText === "Normal" && combatValueText === "Long range" && statsValueText === "Range"){
      formSection.style.display = "none";
      resultPage.style.display = "block";
      returnBtn.style.display = "block";
      resultMsg[0]. innerHTML ="Hello " + nameValue.value + " ! YOU SHOULD PLAY AS :";
      fighterImg[0].src="images/sf2/Range/Guilerender.png";
      fighterGuide[0].src="https://www.youtube.com/embed/gwXNVDnMKMo";
      resultMsg[1].style.display = "block";
      fighterImg[1].style.display = "block";
      fighterGuide[1].style.display = "block";
      resultMsg[1]. innerHTML = " OR :";
      fighterImg[1].src="images/sf2/Range/Ryurender.png";
      fighterGuide[1].src="https://www.youtube.com/embed/Di2hMF5_SZY";
      return false;
    }

    //SAGAT
    if(typeValueText === "Heavy Weight" && combatValueText === "Balanced" && statsValueText === "Range"){
      formSection.style.display = "none";
      resultPage.style.display = "block";
      returnBtn.style.display = "block";
      resultMsg[0]. innerHTML ="Hello " + nameValue.value + " ! YOU SHOULD PLAY AS :";
      fighterImg[0].src="images/sf2/Range/Sagatclean.png";
      fighterGuide[0].src="https://www.youtube.com/embed/zB6NWPNtuXk";
      return false;
    }

    //CHUN LI
    if(typeValueText === "Normal" && combatValueText === "Balanced" && statsValueText === "Techniques"){
      formSection.style.display = "none";
      resultPage.style.display = "block";
      returnBtn.style.display = "block";
      resultMsg[0]. innerHTML ="Hello " + nameValue.value + " ! YOU SHOULD PLAY AS :";
      fighterImg[0].src="images/sf2/Techniques/Chunrender.png";
      fighterGuide[0].src="https://www.youtube.com/embed/4a7M7cjHVzo";
      return false;
    }

    //DeeJay
    if(typeValueText === "Normal" && combatValueText === "Close range" && statsValueText === "Techniques"){
      formSection.style.display = "none";
      resultPage.style.display = "block";
      returnBtn.style.display = "block";
      resultMsg[0]. innerHTML ="Hello " + nameValue.value + " ! YOU SHOULD PLAY AS :";
      fighterImg[0].src="images/sf2/Techniques/DeeJay.jpg";
      fighterGuide[0].src="https://www.youtube.com/embed/GjtpDf73_YI";
      return false;
    }

    //AKUMA
    if(typeValueText === "Heavy Weight" && combatValueText === "Balanced" && statsValueText === "Techniques"){
      formSection.style.display = "none";
      resultPage.style.display = "block";
      returnBtn.style.display = "block";
      resultMsg[0]. innerHTML ="Hello " + nameValue.value + " ! YOU SHOULD PLAY AS :";
      fighterImg[0].src="images/sf2/Techniques/Akumarender.png";
      fighterGuide[0].src="https://www.youtube.com/embed/zsMx0lRpiAk";
      return false;
    }
    
    /* IF NO CHARACTER FITS THE REQUIREMENTS BELOW, THE RESULT WILL RECOMMAND PLAYER TO PLAY BEGINNER FRIENDLY
    CHARACTER RYU */
    if((typeValueText === "Light Weight" && combatValueText === "Balanced" && statsValueText === "Health") ||
    (typeValueText === "Light Weight" && combatValueText === "Long range" && statsValueText === "Health") ||
    (typeValueText === "Normal" && combatValueText === "Balanced" && statsValueText === "Health") ||
    (typeValueText === "Normal" && combatValueText === "Long range" && statsValueText === "Health") ||
    (typeValueText === "Heavy Weight" && combatValueText === "Balanced" && statsValueText === "Health") ||
    (typeValueText === "Heavy Weight" && combatValueText === "Long range" && statsValueText === "Health") ||
    (typeValueText === "Light Weight" && combatValueText === "Balanced" && statsValueText === "Mobility") ||
    (typeValueText === "Light Weight" && combatValueText === "Long range" && statsValueText === "Mobility") ||
    (typeValueText === "Normal" && combatValueText === "Close range" && statsValueText === "Mobility") ||
    (typeValueText === "Normal" && combatValueText === "Long range" && statsValueText === "Mobility") ||
    (typeValueText === "Heavy Weight" && combatValueText === "Balanced" && statsValueText === "Mobility") ||
    (typeValueText === "Heavy Weight" && combatValueText === "Close range" && statsValueText === "Mobility") ||
    (typeValueText === "Light Weight" && combatValueText === "Balanced" && statsValueText === "Power") ||
    (typeValueText === "Light Weight" && combatValueText === "Long range" && statsValueText === "Power") ||
    (typeValueText === "Light Weight" && combatValueText === "Close range" && statsValueText === "Power") ||
    (typeValueText === "Normal" && combatValueText === "Close range" && statsValueText === "Power") ||
    (typeValueText === "Normal" && combatValueText === "Balanced" && statsValueText === "Power") ||
    (typeValueText === "Heavy Weight" && combatValueText === "Long range" && statsValueText === "Power") ||
    (typeValueText === "Light Weight" && combatValueText === "Balanced" && statsValueText === "Range") ||
    (typeValueText === "Light Weight" && combatValueText === "Close range" && statsValueText === "Range") ||
    (typeValueText === "Normal" && combatValueText === "Close range" && statsValueText === "Range") ||
    (typeValueText === "Normal" && combatValueText === "Balanced" && statsValueText === "Range") ||
    (typeValueText === "Heavy Weight" && combatValueText === "Balanced" && statsValueText === "Range") ||
    (typeValueText === "Heavy Weight" && combatValueText === "Long range" && statsValueText === "Range") ||
    (typeValueText === "Light Weight" && combatValueText === "Balanced" && statsValueText === "Techniques") ||
    (typeValueText === "Light Weight" && combatValueText === "Long range" && statsValueText === "Techniques") ||
    (typeValueText === "Light Weight" && combatValueText === "Close range" && statsValueText === "Techniques") ||
    (typeValueText === "Normal" && combatValueText === "Long range" && statsValueText === "Techniques") ||
    (typeValueText === "Heavy Weight" && combatValueText === "Close range" && statsValueText === "Techniques") ||
    (typeValueText === "Heavy Weight" && combatValueText === "Long range" && statsValueText === "Techniques")){
      formSection.style.display = "none";
      resultPage.style.display = "block";
      returnBtn.style.display = "block";
      resultMsg[0]. innerHTML ="Hello " + nameValue.value + " ! YOU SHOULD PLAY AS BEGINNER FRIENDLY FIGHTER RYU :";
      fighterImg[0].src="images/sf2/Power/Ryurender.png";
      fighterGuide[0].src="https://www.youtube.com/embed/Di2hMF5_SZY";
      return false;
    }
  }
}