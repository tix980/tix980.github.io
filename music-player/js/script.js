  //EXECUTE "pageLoaded" FUNCTION AFTER THE PAGE HAS BEEN LOADED
  window.onload = pageLoaded;

  function pageLoaded(){
    //ACCESS HTML ELEMENTS
    var song = document.getElementsByClassName("song");
    var playButton = document.getElementsByClassName("playBtn");
    var videoBackground = document.getElementById("video-background");
    var recordPlayer = document.getElementById("record-player");
    var chicken = document.getElementById("chicken");
    var disc = document.getElementById("music-disc");
    var needle = document.getElementById("record-player-needle");
    var dancingNotes = document.getElementById("dancing-notes");
    var leftFlipButton = document.getElementById("play-button");
    var rightFlipButton = document.getElementById("pause-button");
    var notes = document.querySelectorAll(".notes");
    var notesGroupTwo = document.querySelectorAll(".notes-two");
    var notesGroupThree = document.querySelectorAll(".notes-three");
    var notesGroupFour = document.querySelectorAll(".notes-four");
    var notesGroupFive = document.querySelectorAll(".notes-five");
    var notesGroupSix = document.querySelectorAll(".notes-six");
    var notesGroupSeven = document.querySelectorAll(".notes-seven");
    var notesGroupEight = document.querySelectorAll(".notes-eight");
    var dancingNotes = document.getElementById("dancing-notes");
    var dancingNotesTwo = document.getElementById("dancing-notes-two");
    var dancingNotesThree = document.getElementById("dancing-notes-three");
    var dancingNotesFour = document.getElementById("dancing-notes-four");
    var dancingNotesFive = document.getElementById("dancing-notes-five");
    var dancingNotesSix = document.getElementById("dancing-notes-six");
    var dancingNotesSeven = document.getElementById("dancing-notes-seven");
    var dancingNotesEight= document.getElementById("dancing-notes-eight");
    var animationRun = true;

    //ANIMATION OF BOTH DISC AND NEEDLE ARE PAUSED BEFORE START PLAYING SONGS
    disc.style.animationPlayState = "paused";
    needle.style.animation = "DiscPause 1s forwards";

    /* FUNCTION: RUNS LEFTFLIP ANIMATION */
    function leftFlip(){
      disc.style.animation = "leftFlip 0.8s linear infinite";
    }
    /* FUNCTION: RUNS FLIP ANIMATION */
    function rightFlip(){
      disc.style.animation = "flip 0.8s linear infinite";
    }

    /*FUNCTIONS: WHENEVER A PLAY BUTTON OF THE SONG IS CLICKED, VIDEO PLAYER STARTS PLAYING
    MUSIC, CHICKEN STARTS DANCING, ANIMATION OF BOTH RECORD PLAYER AND MUSIC PLAYER STARTS RUNNING.
    IF CLICK PLAY BUTTON OF DIFFERENT ,VIDEO PLAYER WILL PLAYER DIFFERENT VIDEO AND MUSIC PLAYER WILL
    PLAYER DIFFERENT SONG. FORMATION OF MUSIC NOTES WILL CHANGE. IF DOUBLE CLICK PLAY BUTTON, ALL PLAYERS
    WILL STOP BE ON PAUSE. */
    function buttonToggle(){
      videoBackground.removeAttribute("poster");
      if(song[0].paused){
        playButton[0].querySelector('i.fas').classList.remove("fa-play");
        playButton[0].querySelector('i.fas').classList.add("fa-pause");
        song[0].play();
        videoBackground.src="video/Rainbow_Nebula.mp4";
        videoBackground.play();
        disc.style.animation = "rotate 0.8s linear infinite 1s";
        disc.style.animationPlayState = "running";
        needle.style.animation = "DiscPlay 1s forwards";
        dancingNotes.style.display = "block";
        recordPlayer.style.animation = "dancingPlayer 1s infinite";
        chicken.style.background="url(image/Chicken_Sprite_Sheet3.png) left center";
        if(animationRun === true){
          for(var i=0; i<notes.length; i++){
            notes[i].style.animationPlayState = "running";
          }
          animationRun = false;
        }
      }else if(song[0].played){
        playButton[0].querySelector('i.fas').classList.remove("fa-pause");
        playButton[0].querySelector('i.fas').classList.add("fa-play");
        disc.style.animationPlayState = "paused";
        needle.style.animation = "DiscPause 1s forwards";
        song[0].pause();
        videoBackground.pause();
        recordPlayer.style.animation = "";
        chicken.style.background="url(image/Chicken_Sprite_Sheet2.png) left center";
        if(animationRun === false){
          for(var i=0; i<notes.length; i++){
            notes[i].style.animationPlayState = "paused";
          }
          animationRun = true;
        }
      }
      playButton[1].querySelector('i.fas').classList.remove("fa-pause");
      playButton[1].querySelector('i.fas').classList.add("fa-play");
      playButton[2].querySelector('i.fas').classList.remove("fa-pause");
      playButton[2].querySelector('i.fas').classList.add("fa-play");
      playButton[3].querySelector('i.fas').classList.remove("fa-pause");
      playButton[3].querySelector('i.fas').classList.add("fa-play");
      playButton[4].querySelector('i.fas').classList.remove("fa-pause");
      playButton[4].querySelector('i.fas').classList.add("fa-play");
      playButton[5].querySelector('i.fas').classList.remove("fa-pause");
      playButton[5].querySelector('i.fas').classList.add("fa-play");
      playButton[6].querySelector('i.fas').classList.remove("fa-pause");
      playButton[6].querySelector('i.fas').classList.add("fa-play");
      playButton[7].querySelector('i.fas').classList.remove("fa-pause");
      playButton[7].querySelector('i.fas').classList.add("fa-play");
      dancingNotesTwo.style.display = "none";
      dancingNotesThree.style.display = "none";
      dancingNotesFour.style.display = "none";
      dancingNotesFive.style.display = "none";
      dancingNotesSix.style.display = "none";
      dancingNotesSeven.style.display = "none";
      dancingNotesEight.style.display = "none";
      song[1].pause();
      song[2].pause();
      song[3].pause();
      song[4].pause();
      song[5].pause();
      song[6].pause();
      song[7].pause();
    }

    function buttonToggle2(){
      if(song[1].paused){
        playButton[1].querySelector('i.fas').classList.remove("fa-play");
        playButton[1].querySelector('i.fas').classList.add("fa-pause");
        song[1].play();
        disc.style.animationPlayState = "running";
        needle.style.animation = "DiscPlay 1s forwards";
        videoBackground.src="video/Flared_Nebula.mp4";
        videoBackground.play();
        dancingNotesTwo.style.display = "block";
        recordPlayer.style.animation = "dancingPlayer 1s infinite";
        chicken.style.background="url(image/Chicken_Sprite_Sheet3.png) left center";
        if(animationRun === true){
          for(var i=0; i<notesGroupTwo.length; i++){
            notesGroupTwo[i].style.animationPlayState = "running";
          }
          animationRun = false;
        }
      }else if(song[1].played){
        playButton[1].querySelector('i.fas').classList.remove("fa-pause");
        playButton[1].querySelector('i.fas').classList.add("fa-play");
        song[1].pause();
        videoBackground.pause();
        disc.style.animationPlayState = "paused";
        needle.style.animation = "DiscPause 1s forwards";
        recordPlayer.style.animation = "";
        chicken.style.background="url(image/Chicken_Sprite_Sheet2.png) left center";
        if(animationRun === false){
          for(var i=0; i<notesGroupTwo.length; i++){
            notesGroupTwo[i].style.animationPlayState = "paused";
          }
          animationRun = true;
        }
      }

      playButton[0].querySelector('i.fas').classList.remove("fa-pause");
      playButton[0].querySelector('i.fas').classList.add("fa-play");
      playButton[2].querySelector('i.fas').classList.remove("fa-pause");
      playButton[2].querySelector('i.fas').classList.add("fa-play");
      playButton[3].querySelector('i.fas').classList.remove("fa-pause");
      playButton[3].querySelector('i.fas').classList.add("fa-play");
      playButton[4].querySelector('i.fas').classList.remove("fa-pause");
      playButton[4].querySelector('i.fas').classList.add("fa-play");
      playButton[5].querySelector('i.fas').classList.remove("fa-pause");
      playButton[5].querySelector('i.fas').classList.add("fa-play");
      playButton[6].querySelector('i.fas').classList.remove("fa-pause");
      playButton[6].querySelector('i.fas').classList.add("fa-play");
      playButton[7].querySelector('i.fas').classList.remove("fa-pause");
      playButton[7].querySelector('i.fas').classList.add("fa-play");
      dancingNotes.style.display = "none";
      dancingNotesThree.style.display = "none";
      dancingNotesFour.style.display = "none";
      dancingNotesFive.style.display = "none";
      dancingNotesSix.style.display = "none";
      dancingNotesSeven.style.display = "none";
      dancingNotesEight.style.display = "none";
      song[0].pause();
      song[2].pause();
      song[3].pause();
      song[4].pause();
      song[5].pause();
      song[6].pause();
      song[7].pause();
  }

  function buttonToggle3(){
    if(song[2].paused){
      playButton[2].querySelector('i.fas').classList.remove("fa-play");
      playButton[2].querySelector('i.fas').classList.add("fa-pause");
      videoBackground.src="video/space.mp4";
      song[2].play();
      videoBackground.play();
      disc.style.animationPlayState = "running";
      needle.style.animation = "DiscPlay 1s forwards";
      dancingNotesThree.style.display = "block";
      recordPlayer.style.animation = "dancingPlayer 1s infinite";
      chicken.style.background="url(image/Chicken_Sprite_Sheet3.png) left center";
      if(animationRun === true){
        for(var i=0; i<notesGroupThree.length; i++){
          notesGroupThree[i].style.animationPlayState = "running";
        }
        animationRun = false;
      }
    }else if(song[2].played){
      playButton[2].querySelector('i.fas').classList.remove("fa-pause");
      playButton[2].querySelector('i.fas').classList.add("fa-play");
      song[2].pause();
      videoBackground.pause();
      disc.style.animationPlayState = "paused";
      needle.style.animation = "DiscPause 1s forwards";
      recordPlayer.style.animation = "";
      chicken.style.background="url(image/Chicken_Sprite_Sheet2.png) left center";
      if(animationRun === false){
        for(var i=0; i<notesGroupThree.length; i++){
          notesGroupThree[i].style.animationPlayState = "paused";
        }
        animationRun = true;
      }
    }

    playButton[0].querySelector('i.fas').classList.remove("fa-pause");
    playButton[0].querySelector('i.fas').classList.add("fa-play");
    playButton[1].querySelector('i.fas').classList.remove("fa-pause");
    playButton[1].querySelector('i.fas').classList.add("fa-play");
    playButton[3].querySelector('i.fas').classList.remove("fa-pause");
    playButton[3].querySelector('i.fas').classList.add("fa-play");
    playButton[4].querySelector('i.fas').classList.remove("fa-pause");
    playButton[4].querySelector('i.fas').classList.add("fa-play");
    playButton[5].querySelector('i.fas').classList.remove("fa-pause");
    playButton[5].querySelector('i.fas').classList.add("fa-play");
    playButton[6].querySelector('i.fas').classList.remove("fa-pause");
    playButton[6].querySelector('i.fas').classList.add("fa-play");
    playButton[7].querySelector('i.fas').classList.remove("fa-pause");
    playButton[7].querySelector('i.fas').classList.add("fa-play");
    dancingNotes.style.display = "none";
    dancingNotesTwo.style.display = "none";
    dancingNotesFour.style.display = "none";
    dancingNotesFive.style.display = "none";
    dancingNotesSix.style.display = "none";
    dancingNotesSeven.style.display = "none";
    dancingNotesEight.style.display = "none";
    song[0].pause();
    song[1].pause();
    song[3].pause();
    song[4].pause();
    song[5].pause();
    song[6].pause();
    song[7].pause();
}

function buttonToggle4(){
  if(song[3].paused){
    playButton[3].querySelector('i.fas').classList.remove("fa-play");
    playButton[3].querySelector('i.fas').classList.add("fa-pause");
    song[3].play();
    videoBackground.src="video/smoke.mp4";
    videoBackground.play();
    disc.style.animationPlayState = "running";
    needle.style.animation = "DiscPlay 1s forwards";
    dancingNotesFour.style.display = "block";
    recordPlayer.style.animation = "dancingPlayer 1s infinite";
    chicken.style.background="url(image/Chicken_Sprite_Sheet3.png) left center";
    if(animationRun === true){
      for(var i=0; i<notesGroupFour.length; i++){
        notesGroupFour[i].style.animationPlayState = "running";
      }
      animationRun = false;
    }
  }else if(song[3].played){
    playButton[3].querySelector('i.fas').classList.remove("fa-pause");
    playButton[3].querySelector('i.fas').classList.add("fa-play");
    song[3].pause();
    videoBackground.pause();
    disc.style.animationPlayState = "paused";
    needle.style.animation = "DiscPause 1s forwards";
    recordPlayer.style.animation = "";
    chicken.style.background="url(image/Chicken_Sprite_Sheet2.png) left center";
    if(animationRun === false){
      for(var i=0; i<notesGroupFour.length; i++){
        notesGroupFour[i].style.animationPlayState = "paused";
      }
      animationRun = true;
    }
  }

  playButton[0].querySelector('i.fas').classList.remove("fa-pause");
  playButton[0].querySelector('i.fas').classList.add("fa-play");
  playButton[1].querySelector('i.fas').classList.remove("fa-pause");
  playButton[1].querySelector('i.fas').classList.add("fa-play");
  playButton[2].querySelector('i.fas').classList.remove("fa-pause");
  playButton[2].querySelector('i.fas').classList.add("fa-play");
  playButton[4].querySelector('i.fas').classList.remove("fa-pause");
  playButton[4].querySelector('i.fas').classList.add("fa-play");
  playButton[5].querySelector('i.fas').classList.remove("fa-pause");
  playButton[5].querySelector('i.fas').classList.add("fa-play");
  playButton[6].querySelector('i.fas').classList.remove("fa-pause");
  playButton[6].querySelector('i.fas').classList.add("fa-play");
  playButton[7].querySelector('i.fas').classList.remove("fa-pause");
  playButton[7].querySelector('i.fas').classList.add("fa-play");
  dancingNotes.style.display = "none";
  dancingNotesTwo.style.display = "none";
  dancingNotesThree.style.display = "none";
  dancingNotesFive.style.display = "none";
  dancingNotesSix.style.display = "none";
  dancingNotesSeven.style.display = "none";
  dancingNotesEight.style.display = "none";
  song[0].pause();
  song[1].pause();
  song[2].pause();
  song[4].pause();
  song[5].pause();
  song[6].pause();
  song[7].pause();
}

function buttonToggle5(){
  if(song[4].paused){
    playButton[4].querySelector('i.fas').classList.remove("fa-play");
    playButton[4].querySelector('i.fas').classList.add("fa-pause");
    song[4].play();
    videoBackground.src="video/internet.mp4";
    videoBackground.play();
    disc.style.animationPlayState = "running";
    needle.style.animation = "DiscPlay 1s forwards";
    dancingNotesFive.style.display = "block";
    recordPlayer.style.animation = "dancingPlayer 1s infinite";
    chicken.style.background="url(image/Chicken_Sprite_Sheet3.png) left center";
    if(animationRun === true){
      for(var i=0; i<notesGroupFive.length; i++){
        notesGroupFive[i].style.animationPlayState = "running";
      }
      animationRun = false;
    }
  }else if(song[4].played){
    playButton[4].querySelector('i.fas').classList.remove("fa-pause");
    playButton[4].querySelector('i.fas').classList.add("fa-play");
    song[4].pause();
    videoBackground.pause();
    disc.style.animationPlayState = "paused";
    needle.style.animation = "DiscPause 1s forwards";
    recordPlayer.style.animation = "";
    chicken.style.background="url(image/Chicken_Sprite_Sheet2.png) left center";
    if(animationRun === false){
      for(var i=0; i<notesGroupFive.length; i++){
        notesGroupFive[i].style.animationPlayState = "paused";
      }
      animationRun = true;
    }
  }

  playButton[0].querySelector('i.fas').classList.remove("fa-pause");
  playButton[0].querySelector('i.fas').classList.add("fa-play");
  playButton[1].querySelector('i.fas').classList.remove("fa-pause");
  playButton[1].querySelector('i.fas').classList.add("fa-play");
  playButton[2].querySelector('i.fas').classList.remove("fa-pause");
  playButton[2].querySelector('i.fas').classList.add("fa-play");
  playButton[3].querySelector('i.fas').classList.remove("fa-pause");
  playButton[3].querySelector('i.fas').classList.add("fa-play");
  playButton[5].querySelector('i.fas').classList.remove("fa-pause");
  playButton[5].querySelector('i.fas').classList.add("fa-play");
  playButton[6].querySelector('i.fas').classList.remove("fa-pause");
  playButton[6].querySelector('i.fas').classList.add("fa-play");
  playButton[7].querySelector('i.fas').classList.remove("fa-pause");
  playButton[7].querySelector('i.fas').classList.add("fa-play");
  dancingNotes.style.display = "none";
  dancingNotesTwo.style.display = "none";
  dancingNotesThree.style.display = "none";
  dancingNotesFour.style.display = "none";
  dancingNotesSix.style.display = "none";
  dancingNotesSeven.style.display = "none";
  dancingNotesEight.style.display = "none";
  song[0].pause();
  song[1].pause();
  song[2].pause();
  song[3].pause();
  song[5].pause();
  song[6].pause();
  song[7].pause();
}

function buttonToggle6(){
  if(song[5].paused){
    playButton[5].querySelector('i.fas').classList.remove("fa-play");
    playButton[5].querySelector('i.fas').classList.add("fa-pause");
    song[5].play();
    videoBackground.src="video/night.mp4";
    videoBackground.play();
    disc.style.animationPlayState = "running";
    needle.style.animation = "DiscPlay 1s forwards";
    dancingNotesSix.style.display = "block";
    recordPlayer.style.animation = "dancingPlayer 1s infinite";
    chicken.style.background="url(image/Chicken_Sprite_Sheet3.png) left center";
    if(animationRun === true){
      for(var i=0; i<notesGroupSix.length; i++){
        notesGroupSix[i].style.animationPlayState = "running";
      }
      animationRun = false;
    }
  }else if(song[5].played){
    playButton[5].querySelector('i.fas').classList.remove("fa-pause");
    playButton[5].querySelector('i.fas').classList.add("fa-play");
    song[5].pause();
    videoBackground.pause();
    disc.style.animationPlayState = "paused";
    needle.style.animation = "DiscPause 1s forwards";
    recordPlayer.style.animation = "";
    chicken.style.background="url(image/Chicken_Sprite_Sheet2.png) left center";
    if(animationRun === false){
      for(var i=0; i<notesGroupSix.length; i++){
        notesGroupSix[i].style.animationPlayState = "paused";
      }
      animationRun = true;
    }
  }

  playButton[0].querySelector('i.fas').classList.remove("fa-pause");
  playButton[0].querySelector('i.fas').classList.add("fa-play");
  playButton[1].querySelector('i.fas').classList.remove("fa-pause");
  playButton[1].querySelector('i.fas').classList.add("fa-play");
  playButton[2].querySelector('i.fas').classList.remove("fa-pause");
  playButton[2].querySelector('i.fas').classList.add("fa-play");
  playButton[3].querySelector('i.fas').classList.remove("fa-pause");
  playButton[3].querySelector('i.fas').classList.add("fa-play");
  playButton[4].querySelector('i.fas').classList.remove("fa-pause");
  playButton[4].querySelector('i.fas').classList.add("fa-play");
  playButton[6].querySelector('i.fas').classList.remove("fa-pause");
  playButton[6].querySelector('i.fas').classList.add("fa-play");
  playButton[7].querySelector('i.fas').classList.remove("fa-pause");
  playButton[7].querySelector('i.fas').classList.add("fa-play");
  dancingNotes.style.display = "none";
  dancingNotesTwo.style.display = "none";
  dancingNotesThree.style.display = "none";
  dancingNotesFour.style.display = "none";
  dancingNotesFive.style.display = "none";
  dancingNotesSeven.style.display = "none";
  dancingNotesEight.style.display = "none";
  song[0].pause();
  song[1].pause();
  song[2].pause();
  song[3].pause();
  song[4].pause();
  song[6].pause();
  song[7].pause();
}

function buttonToggle7(){
  if(song[6].paused){
    playButton[6].querySelector('i.fas').classList.remove("fa-play");
    playButton[6].querySelector('i.fas').classList.add("fa-pause");
    song[6].play();
    videoBackground.src="video/ink.mp4";
    videoBackground.play();
    disc.style.animationPlayState = "running";
    needle.style.animation = "DiscPlay 1s forwards";
    dancingNotesSeven.style.display = "block";
    recordPlayer.style.animation = "dancingPlayer 1s infinite";
    chicken.style.background="url(image/Chicken_Sprite_Sheet3.png) left center";
    if(animationRun === true){
      for(var i=0; i<notesGroupSeven.length; i++){
        notesGroupSeven[i].style.animationPlayState = "running";
      }
      animationRun = false;
    }
  }else if(song[6].played){
    playButton[6].querySelector('i.fas').classList.remove("fa-pause");
    playButton[6].querySelector('i.fas').classList.add("fa-play");
    song[6].pause();
    videoBackground.pause();
    disc.style.animationPlayState = "paused";
    needle.style.animation = "DiscPause 1s forwards";
    recordPlayer.style.animation = "";
    chicken.style.background="url(image/Chicken_Sprite_Sheet2.png) left center";
    if(animationRun === false){
      for(var i=0; i<notesGroupSeven.length; i++){
        notesGroupSeven[i].style.animationPlayState = "paused";
      }
      animationRun = true;
    }
  }

  playButton[0].querySelector('i.fas').classList.remove("fa-pause");
  playButton[0].querySelector('i.fas').classList.add("fa-play");
  playButton[1].querySelector('i.fas').classList.remove("fa-pause");
  playButton[1].querySelector('i.fas').classList.add("fa-play");
  playButton[2].querySelector('i.fas').classList.remove("fa-pause");
  playButton[2].querySelector('i.fas').classList.add("fa-play");
  playButton[3].querySelector('i.fas').classList.remove("fa-pause");
  playButton[3].querySelector('i.fas').classList.add("fa-play");
  playButton[4].querySelector('i.fas').classList.remove("fa-pause");
  playButton[4].querySelector('i.fas').classList.add("fa-play");
  playButton[5].querySelector('i.fas').classList.remove("fa-pause");
  playButton[5].querySelector('i.fas').classList.add("fa-play");
  playButton[7].querySelector('i.fas').classList.remove("fa-pause");
  playButton[7].querySelector('i.fas').classList.add("fa-play");
  dancingNotes.style.display = "none";
  dancingNotesTwo.style.display = "none";
  dancingNotesThree.style.display = "none";
  dancingNotesFour.style.display = "none";
  dancingNotesFive.style.display = "none";
  dancingNotesSix.style.display = "none";
  dancingNotesEight.style.display = "none";
  song[0].pause();
  song[1].pause();
  song[2].pause();
  song[3].pause();
  song[4].pause();
  song[5].pause();
  song[7].pause();
}

function buttonToggle8(){
  if(song[7].paused){
    playButton[7].querySelector('i.fas').classList.remove("fa-play");
    playButton[7].querySelector('i.fas').classList.add("fa-pause");
    song[7].play();
    videoBackground.src="video/dot.mp4";
    videoBackground.play();
    disc.style.animationPlayState = "running";
    needle.style.animation = "DiscPlay 1s forwards";
    dancingNotesEight.style.display = "block";
    recordPlayer.style.animation = "dancingPlayer 1s infinite";
    chicken.style.background="url(image/Chicken_Sprite_Sheet3.png) left center";
    if(animationRun === true){
      for(var i=0; i<notesGroupEight.length; i++){
        notesGroupEight[i].style.animationPlayState = "running";
      }
      animationRun = false;
    }
  }else if(song[7].played){
    playButton[7].querySelector('i.fas').classList.remove("fa-pause");
    playButton[7].querySelector('i.fas').classList.add("fa-play");
    song[7].pause();
    videoBackground.pause();
    disc.style.animationPlayState = "paused";
    needle.style.animation = "DiscPause 1s forwards";
    recordPlayer.style.animation = "";
    chicken.style.background="url(image/Chicken_Sprite_Sheet2.png) left center";
    if(animationRun === false){
      for(var i=0; i<notesGroupEight.length; i++){
        notesGroupEight[i].style.animationPlayState = "paused";
      }
      animationRun = true;
    }
  }

  playButton[0].querySelector('i.fas').classList.remove("fa-pause");
  playButton[0].querySelector('i.fas').classList.add("fa-play");
  playButton[1].querySelector('i.fas').classList.remove("fa-pause");
  playButton[1].querySelector('i.fas').classList.add("fa-play");
  playButton[2].querySelector('i.fas').classList.remove("fa-pause");
  playButton[2].querySelector('i.fas').classList.add("fa-play");
  playButton[3].querySelector('i.fas').classList.remove("fa-pause");
  playButton[3].querySelector('i.fas').classList.add("fa-play");
  playButton[4].querySelector('i.fas').classList.remove("fa-pause");
  playButton[4].querySelector('i.fas').classList.add("fa-play");
  playButton[5].querySelector('i.fas').classList.remove("fa-pause");
  playButton[5].querySelector('i.fas').classList.add("fa-play");
  playButton[6].querySelector('i.fas').classList.remove("fa-pause");
  playButton[6].querySelector('i.fas').classList.add("fa-play");
  dancingNotes.style.display = "none";
  dancingNotesTwo.style.display = "none";
  dancingNotesThree.style.display = "none";
  dancingNotesFour.style.display = "none";
  dancingNotesFive.style.display = "none";
  dancingNotesSix.style.display = "none";
  dancingNotesSeven.style.display = "none";
  song[0].pause();
  song[1].pause();
  song[2].pause();
  song[3].pause();
  song[4].pause();
  song[5].pause();
  song[6].pause();
}
  /*CREATE LISTENER EVENTS THAT RUN buttonToggle FUNCTIONS BY CLICKING
  ON THE PLAY BUTTONS OF EACH SONG */
  playButton[0].onclick = buttonToggle;
  playButton[1].onclick = buttonToggle2;
  playButton[2].onclick = buttonToggle3;
  playButton[3].onclick = buttonToggle4;
  playButton[4].onclick = buttonToggle5;
  playButton[5].onclick = buttonToggle6;
  playButton[6].onclick = buttonToggle7;
  playButton[7].onclick = buttonToggle8;

  /*CREATE LISTENER EVENTS THAT RUN LEFTFLIP AND RIGHTFLIP FUNCTIONS BY CLICKING
  ON THE PLAY BUTTON AND PAUSE BUTTON */
  leftFlipButton.onclick = leftFlip;
  rightFlipButton.onclick = rightFlip;

}