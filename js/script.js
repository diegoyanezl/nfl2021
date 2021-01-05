window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}

function init() {
	makeBlocks();
}
const num_players = 4;
const DIV_PTS = 3;
const CONF_PTS = 4;
const SB_PTS = 5;
const CHAMP_PTS = 7;
const SCORE_PTS = 1;


var REAL = [
	['NO', 'CHI', 'SEA', 'LAR', 'WAS', 'TB', 'PIT', 'CLE', 'BUF', 'IND', 'TEN', 'BAL'], // DIVISIONAL
	['GB', 'NO', 'CHI', 'SEA', 'LAR', 'WAS', 'TB', 'KC', 'PIT', 'CLE', 'BUF', 'IND', 'TEN', 'BAL'], // CONFERENCE
	['GB', 'NO', 'CHI', 'SEA', 'LAR', 'WAS', 'TB', 'KC', 'PIT', 'CLE', 'BUF', 'IND', 'TEN', 'BAL'],// SUPER BOWL
	['GB', 'NO', 'CHI', 'SEA', 'LAR', 'WAS', 'TB', 'KC', 'PIT', 'CLE', 'BUF', 'IND', 'TEN', 'BAL'], // WINNER
	// ['NO', 'SEA', 'WAS', 'PIT', 'BUF', 'TEN'], // DIVISIONAL
	// ['GB', 'NO', 'KC', 'PIT'], // CONFERENCE
	// ['GB', 'KC'], // SUPER BOWL
	// ['KC'] // WINNER
];

var preds_diego = [
	['CHI', 'LAR', 'TB', 'CLE', 'IND', 'BAL'], // DIVISIONAL
	['LAR', 'TB', 'CLE', 'BAL'], // CONFERENCE
	['LAR', 'CLE'], // SUPER BOWL
	['LAR'] // WINNER
];
var preds_fabian = [
	['NO/CHI', 'SEA/LAR', 'WAS/TB', 'PIT/CLE', 'BUF/IND', 'TEN/BAL'], // DIVISIONAL
	['GB/ ', '/', 'KC/', '/'], // CONFERENCE
	['/', '/'], // SUPER BOWL
	['/'] // WINNER
];
var preds_andres = [
	['NO/CHI', 'SEA/LAR', 'WAS/TB', 'PIT/CLE', 'BUF/IND', 'TEN/BAL'], // DIVISIONAL
	['GB/ ', '/', 'KC/', '/'], // CONFERENCE
	['/', '/'], // SUPER BOWL
	['/'] // WINNER
];
var preds_papi = [
	['NO/CHI', 'SEA/LAR', 'WAS/TB', 'PIT/CLE', 'BUF/IND', 'TEN/BAL'], // DIVISIONAL
	['GB/ ', '/', 'KC/', '/'], // CONFERENCE
	['/', '/'], // SUPER BOWL
	['/'] // WINNER
];


var diego = ["DIEGO", preds_diego, 0, 0, 0];
var fabian = ["FABIAN", preds_fabian, 0, 0, 0];
var andres = ["ANDRES", preds_andres, 0, 0, 0];
var papi = ["PAPI", preds_papi, 0, 0, 0];


function update() {
	// UPDATES POINTS
	points();

	// RANKS PLAYERS
	var ranking = rank();

	// UPDATES STANDINGS
	for (i=0; i < num_players; i++) {
		$(".st"+i+" .name").text(ranking[i][0]);
		$(".st"+i+" .p").text(ranking[i][2]);
		$(".st"+i+" .w").text(ranking[i][3]);
		$(".st"+i+" .l").text(ranking[i][4]);
	}
}

function rank() {
	var ranking = [diego, fabian, andres, papi]
	console.log(ranking)

	ranking.sort(function(a,b){return b[2] - a[2]})
	console.log(ranking)
	return ranking
}

function points () {
	var rounds_so_far = REAL.length;

	for (i=0; i < rounds_so_far; i++) {
		// loop thru every round
		
		// SET POINTS FOR ROUND
		let round_pts = DIV_PTS; // DIVISIONAL TEAMS
		if (i > 0){
			round_pts = CONF_PTS; // CONFERENCE TEAMS
			if (i > 1){
				round_pts = SB_PTS; // SB TEAMS
				if (i > 2){
					round_pts = CHAMP_PTS; // SUPER BOWL CHAMP
				}
			}
		}
		
		// GET WINNERS
		var winners = REAL[i];

		// CHECK EACH PLAYER'S RESULT AND AWARD PTS
		var players = [diego, fabian, andres, papi];
		for (j=0; j < players.length; j++) {
			var p_winners = players[j][1][i];
			console.log("tms "+p_winners);
			for (k=0; k < p_winners.length; k++){
				let tm = p_winners[k];
				console.log("tm "+tm);
				if (winners.includes(tm)) {
					console.log("its in ");
					players[j][2] += round_pts;
					players[j][3] += 1;
					
				}
			}
		}	

		// END OF POINTS UPDATE	
	}
}


// make pred blocks
function makeBlocks() {
	console.log(" making blocks ")
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





// SCORE PREDICTIONS
var scores_diego = [
	{'BUF/IND': 0},
	{'SEA/LAR': 0},
	{'WAS/TB': 0},
	{'TEN/BAL': 0},
	{'NO/CHI': 0},
	{'PIT/CLE': 0},

	{'GB/': 0},
	{'/': 0},
	{'KC/': 0},
	{'/': 0},

	{'/': 0},
	{'/': 0},

	{'/': 0}
];
