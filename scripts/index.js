"use strict";

let teams = [
    { teamcode:"DAL", 
      name:"Dallas Cowboys", 
      locatedIn:"Arlington, TX"
    },
    { teamcode:"DEN", 
      name:"Denver Broncos", 
      locatedIn:"Denver, CO"
    },
    { teamcode:"HOU", 
      name:"Houston Texans", 
      locatedIn:"Houston, TX"
    },
    { teamcode:"KAN", 
      name:"Kansas City Chiefs", 
      locatedIn:"Kansas City, MO"
    }
  ];

  window.onload = function() {
    initTeamsDropdown();
  }
  function initTeamsDropdown() {
    const teamList = document.getElementById("playerList")
    for (let i=0;i<teams.length;i++){
        let teamOption = new Option(teams[i].name, teams[i].teamcode);
        teamList.appendChild(teamOption);
    }
  }