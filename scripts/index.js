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

window.onload = init;
  
function init() {
    initTeamsDropdown();
    const describeTeamBtn = document.getElementById("describeTeamBtn");
    describeTeamBtn.onclick = describeTeam;
    const teamList = document.getElementById("playerList");
    teamList.onchange = emptyString;
}
function initTeamsDropdown() {
    const teamList = document.getElementById("playerList");
    for (let i=0;i<teams.length;i++){
        let teamOption = new Option(teams[i].name, teams[i].teamcode);
        teamList.appendChild(teamOption);
    }
    let noneOption = new Option("Select a team","SEL");
    teamList.appendChild(noneOption);
    teamList.value = "SEL";
}

function describeTeam(){
    const describeTeamDiv = document.getElementById("describeTeamDiv");
    const teamList = document.getElementById("playerList");
    let teamIndex = teamList.selectedIndex;
    if (teamIndex == 4){
        describeTeamDiv.innerHTML = ""
    }
    else{
        describeTeamDiv.innerHTML = "You selected the "+teams[teamIndex].name+" ("+teams[teamIndex].teamcode+") who play in "+ teams[teamIndex].locatedIn
    }
}

function emptyString(){
    const teamList = document.getElementById("playerList");
    let selectedValue = teamList.value;
    if (selectedValue == "SEL"){
        const describeTeamDiv = document.getElementById("describeTeamDiv");
        describeTeamDiv.innerHTML = ""
    }
}