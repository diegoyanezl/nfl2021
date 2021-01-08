let t0 = 0;
let t1 = 0;
let t2 = 0;
let t3 = 0;
let t4 = 0;
let t5 = 0;

let t6 = 0;
let t7 = 0;
let t8 = 0;
let t9 = 0;

let t10 = 0;
let t11 = 0;

let t12 = 0;

let picks = [0,0,0,0,0,0,0,0,0,0,0,0,0];
let bg;

const NFCrankings = ['GB', 'NO', 'SEA', 'WAS', 'TB', 'LAR', 'CHI'];
const AFCrankings = ['KC', 'BUF', 'PIT', 'TEN', 'BAL', 'CLE', 'IND'];


let games = [
    [2, 7, 2], // 0 NFC
    [3, 6, 2], // 1
    [4, 5, 2], // 2    
    [2, 7, 2], // 3 AFC
    [3, 6, 2], // 4
    [4, 5, 2], // 5

    [1, 0, 2], // 6 NFC
    [0, 0, 2], // 7
    [1, 0, 2], // 8 AFC
    [0, 0, 2], // 9
    
    [0, 0, 2], // 10 NFC
    [0, 0, 2], // 11 AFC

    [0, 0, 2] // 12 SB
]
function initPicks() {
    console.log("...Initializing 'make_picks.js'");
    updateBoardWc();
}

function pick(game, team) {
    games[game][2] = team;
    
    if (game > 11){
        updateBoardSB();
    } else if (game > 9){
        updateBoardConf();
    } else if (game > 5) {
        updateBoardDiv();
    } else {
        updateBoardWc();
    }
}

function updateBoardWc() {
    let div_teamsNFC = [];
    let div_teamsAFC = [];
    for (i=0; i<3; i++) { // get winners so far
        if (games[i][2] != 2){
            div_teamsNFC.push(games[i][games[i][2]]);
        }
        if (games[i+3][2] != 2){
            div_teamsAFC.push(games[i+3][games[i+3][2]]);
        }
    }
    div_teamsNFC.sort()
    div_teamsAFC.sort()

    games[7][0] = div_teamsNFC[0];
    games[7][1] = div_teamsNFC[1];
    games[6][1] = div_teamsNFC[2];

    games[9][0] = div_teamsAFC[0];
    games[9][1] = div_teamsAFC[1];
    games[8][1] = div_teamsAFC[2];

    let nfc_indexes = [0,1,2];
    let afc_indexes = [3,4,5];

    for (j=0; j < 3; j++){
        let i = nfc_indexes[j];
        let insert_team0 = NFCrankings[games[i][0]-1];
        let insert_team1 = NFCrankings[games[i][1]-1];
        insert_team0 = "url(img/"+insert_team0+".png)";
        insert_team1 = "url(img/"+insert_team1+".png)";
                
        if (insert_team0 == "url(img/undefined.png)") {
            insert_team0 = "none";
        }
        if (insert_team1 == "url(img/undefined.png)") {
            insert_team1 = "none";
        }               
        $(".makePredBlock .g"+i+" .t0").css("background-image", insert_team0);
        $(".makePredBlock .g"+i+" .t1").css("background-image", insert_team1);
    }
    for (j=0; j < 3; j++){
        let i = afc_indexes[j];
        let insert_team0 = AFCrankings[games[i][0]-1];
        let insert_team1 = AFCrankings[games[i][1]-1];
        insert_team0 = "url(img/"+insert_team0+".png)";
        insert_team1 = "url(img/"+insert_team1+".png)";
        
        if (insert_team0 == "url(img/undefined.png)") {
            insert_team0 = "none";
        }
        if (insert_team1 == "url(img/undefined.png)") {
            insert_team1 = "none";
        }
        $(".makePredBlock .g"+i+" .t0").css("background-image", insert_team0);
        $(".makePredBlock .g"+i+" .t1").css("background-image", insert_team1);
    }

    updateBoardDiv();  
}

function updateBoardDiv() {
    let conf_teamsNFC = [];
    let conf_teamsAFC = [];
    for (i=6; i<8; i++) { // get winners so far
        if (games[i][2] != 2){
            conf_teamsNFC.push(games[i][games[i][2]]);
        }
        if (games[i+2][2] != 2){
            conf_teamsAFC.push(games[i+2][games[i+2][2]]);
        }
    }

    conf_teamsNFC.sort()
    conf_teamsAFC.sort()

    games[10][0] = conf_teamsNFC[0];
    games[10][1] = conf_teamsNFC[1];
    
    games[11][0] = conf_teamsAFC[0];
    games[11][1] = conf_teamsAFC[1];


    let nfc_indexes = [6,7];
    let afc_indexes = [8,9];

    for (j=0; j < 2; j++){
        let i = nfc_indexes[j];
        let insert_team0 = NFCrankings[games[i][0]-1];
        let insert_team1 = NFCrankings[games[i][1]-1];
        insert_team0 = "url(img/"+insert_team0+".png)";
        insert_team1 = "url(img/"+insert_team1+".png)";
                
        if (insert_team0 == "url(img/undefined.png)") {
            insert_team0 = "none";
        }
        if (insert_team1 == "url(img/undefined.png)") {
            insert_team1 = "none";
        }               
        $(".makePredBlock .g"+i+" .t0").css("background-image", insert_team0);
        $(".makePredBlock .g"+i+" .t1").css("background-image", insert_team1);
    }
    for (j=0; j < 2; j++){
        let i = afc_indexes[j];
        let insert_team0 = AFCrankings[games[i][0]-1];
        let insert_team1 = AFCrankings[games[i][1]-1];
        insert_team0 = "url(img/"+insert_team0+".png)";
        insert_team1 = "url(img/"+insert_team1+".png)";
        
        if (insert_team0 == "url(img/undefined.png)") {
            insert_team0 = "none";
        }
        if (insert_team1 == "url(img/undefined.png)") {
            insert_team1 = "none";
        }
        $(".makePredBlock .g"+i+" .t0").css("background-image", insert_team0);
        $(".makePredBlock .g"+i+" .t1").css("background-image", insert_team1);
    }
    updateBoardConf();
}

function updateBoardConf() {
    let sb_teamsNFC = [];
    let sb_teamsAFC = [];

    if (games[10][2] != 2){
        sb_teamsNFC.push(games[10][games[10][2]]);
    }
    if (games[11][2] != 2){
        sb_teamsAFC.push(games[11][games[11][2]]);
    }


    games[12][0] = sb_teamsNFC[0];
    games[12][1] = sb_teamsAFC[0];


    // nfc conf
    let insert_team0 = NFCrankings[games[10][0]-1];
    let insert_team1 = NFCrankings[games[10][1]-1];
    insert_team0 = "url(img/"+insert_team0+".png)";
    insert_team1 = "url(img/"+insert_team1+".png)";
            
    if (insert_team0 == "url(img/undefined.png)") {
        insert_team0 = "none";
    }
    if (insert_team1 == "url(img/undefined.png)") {
        insert_team1 = "none";
    }               
    $(".makePredBlock .g10 .t0").css("background-image", insert_team0);
    $(".makePredBlock .g10 .t1").css("background-image", insert_team1);
    
    // afc conf
    insert_team0 = AFCrankings[games[11][0]-1];
    insert_team1 = AFCrankings[games[11][1]-1];
    insert_team0 = "url(img/"+insert_team0+".png)";
    insert_team1 = "url(img/"+insert_team1+".png)";
            
    if (insert_team0 == "url(img/undefined.png)") {
        insert_team0 = "none";
    }
    if (insert_team1 == "url(img/undefined.png)") {
        insert_team1 = "none";
    }               
    $(".makePredBlock .g11 .t0").css("background-image", insert_team0);
    $(".makePredBlock .g11 .t1").css("background-image", insert_team1);
    

    // super bowl
    insert_team0 = NFCrankings[games[12][0]-1];
    insert_team1 = AFCrankings[games[12][1]-1];
    insert_team0 = "url(img/"+insert_team0+".png)";
    insert_team1 = "url(img/"+insert_team1+".png)";
            
    if (insert_team0 == "url(img/undefined.png)") {
        insert_team0 = "none";
    }
    if (insert_team1 == "url(img/undefined.png)") {
        insert_team1 = "none";
    }               
    $(".makePredBlock .g12 .t0").css("background-image", insert_team0);
    $(".makePredBlock .g12 .t1").css("background-image", insert_team1);
    
    updateBoardSB();
}

function updateBoardSB() {    
    let winner = games[12][2];
    let insert_teams = [NFCrankings[games[12][0]-1], AFCrankings[games[12][1]-1]];
    
    let insert_team0 = "url(img/"+insert_teams[winner]+".png)";
            
    if (insert_team0 == "url(img/undefined.png)") {
        insert_team0 = "none";
    }    
    $(".makePredBlock .champBlock .champTeam").css("background-image", insert_team0);
}
        
// make pred blocks
function makeBlocks() {
	var players = [diego, fabian, andres];
	for (j=0; j < players.length; j++) {
		let p_winners = players[j][1];
		let plyr = players[j][0];
		let bg;

		let tms = p_winners[0]; // DIVISIONAL
		let REALtms = REAL[0];
		for (k=0; k < 6; k++){ 
			let tm = tms[k]
			bg = "url(img/"+tm+"X.png)";
			if (REALtms.includes(tm)){
				bg = "url(img/"+tm+".png)";
			} 
			$("."+plyr+"PredBlock .divBlock .t"+k).css("background-image", bg);
		}

		tms = p_winners[1]; // CONFERENCE
		REALtms = REAL[1];
		for (k=0; k < 4; k++){ 
			let tm = tms[k]
			bg = "url(img/"+tm+"X.png)";
			if (REALtms.includes(tm)){
				bg = "url(img/"+tm+".png)";
			} 			
			$("."+plyr+"PredBlock .confBlock .t"+k).css("background-image", bg);
		}

		tms = p_winners[2]; // SUPER BOWL
		REALtms = REAL[2];
		for (k=0; k < 2; k++){ 
			let tm = tms[k]
			bg = "url(img/"+tm+"X.png)";
			if (REALtms.includes(tm)){
				bg = "url(img/"+tm+".png)";
			} 			
			$("."+plyr+"PredBlock .sbBlock .t"+k).css("background-image", bg);
		}

		tms = p_winners[3]; // CHAMP
		REALtms = REAL[3];
		let tm = tms[0]
		bg = "url(img/"+tm+"X.png)";
		if (REALtms.includes(tm)){
			bg = "url(img/"+tm+".png)";
		} 
		$("."+plyr+"PredBlock .champBlock .champTeam").css("background-image", bg);
		
		let playerPts = players[j][2] 
		$("."+plyr+"PredBlock .champBlock .ptsBlock .ptsP").text(playerPts+" PTS");
	}
}	
