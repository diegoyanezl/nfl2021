var rounds_so_far = 4; // after wc-1, after div-2, after conf-3, after sb-4, FOR POINT KEEPING
var ALIVEtms = [ 'TB','KC' ];
var REAL = [
	[ // DIVISIONAL TEAMS
		'LAR', 
		'NO', 
		'TB', 
		'CLE', 
		'BUF', 
		'BAL'
	], 
	[ // CONFERENCE TEAMS
		'GB', 
		'TB', 
		'KC', 
		'BUF'
	], 
	['TB', 'KC'],
	['TB/KC'] 
];
var REALscores = [
	[['BUF','IND'], 27, 24],
	[['SEA','LAR'], 20,30],
	[['WAS','TB'], 23, 31],
	[['TEN','BAL'], 13, 20],
	[['NO','CHI'], 21, 9],
	[['PIT','CLE'], 37, 48],

	[['GB','LAR'], 32, 18],
	[['BUF','BAL'], 17, 3],
	[['KC','CLE'], 22, 17],
	[['NO','TB'], 20, 30],

	[['GB','TB'], 26, 31],
	[['KC','BUF'], 38, 24],

	[['TB','KC'], 1, 2, "MVP??"]
];


// SCORE PREDICTIONS
// [ game(for easier inputing), score dif(+Home win, -Away win), total pts(tiebreaker) ]
var scores_andres = [
	['BUF/IND', 10, 0],
	['SEA/LAR', 3, 57],
	['WAS/TB', -6, 40],
	['TEN/BAL', 11, 53],
	['NO/CHI', 18, 46],
	['PIT/CLE', 3, 53],

	['GB/LAR', 14, 50],
	['BUF/BAL', 11, 59],
	['KC/CLE', 100, 1000],
	['NO/TB', 10, 44],

	['GB/TB', 7, 41],
	['KC/BUF', -7, 55],

	['TB/KC', -100, 10100, "MVP"]
];
var scores_ap = [
	['BUF/IND', 12, 0],
	['SEA/LAR', 100, 1000],
	['WAS/TB', 6, 36],
	['TEN/BAL', 100, 1000],
	['NO/CHI', 100, 1000],
	['PIT/CLE', 100, 1000],

	['GB/LAR', 100, 1000],
	['BUF/BAL', 100, 1000],
	['KC/CLE', 100, 1000],
	['NO/TB', 100, 1000],

	['GB/TB', 100, 1000],
	['KC/BUF', 100, 1000],

	['TB/KC', 1000, 11000, "MVP"]
];
var scores_fabian = [
	['BUF/IND', 10, 0],
	['SEA/LAR', 11, 37],
	['WAS/TB', -14, 48],
	['TEN/BAL', -7, 61],
	['NO/CHI', 7, 47],
	['PIT/CLE', 3, 43],

	['GB/LAR', 13, 55],
	['BUF/BAL', 3, 51],
	['KC/CLE', 3, 57],
	['NO/TB', 3, 57],

	['GB/TB', 3, 65],
	['KC/BUF', 7, 53],

	['TB/KC', 100, 1000, "MVP"]
];
var scores_diego = [
	['BUF/IND', 13, 0],
	['SEA/LAR', 4, 27],
	['WAS/TB', -10, 50],
	['TEN/BAL', 4, 50],
	['NO/CHI', 17, 38],
	['PIT/CLE', -4, 40],

	['GB/LAR', 10, 54],
	['BUF/BAL', -4, 64],
	['KC/CLE', 7, 61],
	['NO/TB', 5, 53],

	['GB/TB', 9, 65],
	['KC/BUF', 4, 54],

	['TB/KC', -4, 58, "MVP??"]
];
var scores_mami = [
	['BUF/IND', 20, 0],
	['SEA/LAR', 16, 44],
	['WAS/TB', 23, 47],
	['TEN/BAL', 100, 1000],
	[['NO','CHI'], 26, 50],
	[['PIT','CLE'], 8, 50],

	['GB/LAR', 100, 1000],
	['BUF/BAL', -15, 15],
	['KC/CLE', 17, 53 ],
	['NO/TB', 15, 41],

	['GB/TB', 17, 59],
	['KC/BUF', 14, 42],

	['TB/KC', 100, 1000, "MVP"]
];
var scores_papi = [
	['BUF/IND', 14, 68],
	['SEA/LAR', 11, 57],
	['WAS/TB', -10, 56],
	['TEN/BAL', -6, 54],
	['NO/CHI', 15, 53],
	['PIT/CLE', -7, 63],

	['GB/LAR', 10, 64],
	['BUF/BAL', 4, 58],
	['KC/CLE', 7, 57],
	['NO/TB', 4, 60],

	['GB/TB', 7, 61],
	['KC/BUF', -3, 51],

	['TB/KC', 100, 1000, "MVP"]
];

console.log('VERSION: '+rounds_so_far+' --314');


window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}

function init() {
	console.log("...Rendering");
	update();
	makeBlocksIntro();
	setInfo();
}

const DIV_PTS = 3;
const CONF_PTS = 4;
const SB_PTS = 5;
const CHAMP_PTS = 7;
const SCORE_PTS = 1;
const superBowlWinnerPts = 2;
const superBowlClosestPts = 3;
const superBowlMvpPts = 1;
const PLAYERS = [andres, ap, fabian, diego, mami, papi];
const num_players = 6;




// TEAM PREDICTIONS
var preds_papi = [
	['TB', 'NO', 'SEA', 'CLE', 'BUF', 'BAL'], // DIVISIONAL
	['GB', 'NO', 'KC', 'BUF'], // CONFERENCE
	['GB', 'BUF'], // SUPER BOWL
	['BUF'] // WINNER
];
var preds_ap = [
	['TB', 'NO', 'SEA', 'CLE', 'BUF', 'TEN'], // DIVISIONAL
	['GB', 'SEA', 'KC', 'BUF'], // CONFERENCE
	['SEA', 'KC'], // SUPER BOWL
	['SEA'] // WINNER
];
var preds_mami = [
	['WAS', 'NO', 'LAR', 'IND', 'PIT', 'BAL'], // DIVISIONAL
	['GB', 'NO', 'KC', 'PIT'], // CONFERENCE
	['NO', 'KC'], // SUPER BOWL
	['NO'] // WINNER
];
var preds_diego = [
	['TB', 'NO', 'SEA', 'CLE', 'BUF', 'BAL'], // DIVISIONAL
	['GB', 'NO', 'KC', 'BUF'], // CONFERENCE
	['NO', 'KC'], // SUPER BOWL
	['NO'] // WINNER
];
var preds_fabian = [
	['TB', 'NO', 'SEA', 'BAL', 'BUF', 'PIT'], // DIVISIONAL
	['GB', 'NO', 'KC', 'BUF'], // CONFERENCE
	['GB', 'BUF'], // SUPER BOWL
	['BUF'] // WINNER
];
var preds_andres = [
	['TB', 'NO', 'SEA', 'CLE', 'BUF', 'TEN'], // DIVISIONAL
	['GB', 'SEA', 'KC', 'BUF'], // CONFERENCE
	['SEA', 'KC'], // SUPER BOWL
	['SEA'] // WINNER
];

// var = ["Name", preds_name, Pts, TeamWins, ScoreWins, scores_name];
var papi = ["Papi", preds_papi, 0, 0, 0, scores_papi];
var mami = ["Mami", preds_mami, 0, 0, 0, scores_mami];
var ap = ["AP", preds_ap, 0, 0, 0, scores_ap];
var diego = ["Diego", preds_diego, 0, 0, 0, scores_diego];
var fabian = ["Fabian", preds_fabian, 0, 0, 0, scores_fabian];
var andres = ["Andres", preds_andres, 0, 0, 0, scores_andres];


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
	let ranking = [andres, ap, fabian, diego, mami, papi];

	ranking.sort(function(a,b){return b[2] - a[2]});
	return ranking
}

function points () {

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
		let winners = REAL[i];

		// CHECK EACH PLAYER'S RESULT AND AWARD PTS
		let playersList = [andres, ap, fabian, diego, mami, papi];

		for (j=0; j < playersList.length; j++) {
			let p_winners = playersList[j][1][i];
			for (k=0; k < p_winners.length; k++){
				let tm = p_winners[k];
				if (winners.includes(tm)) {
					playersList[j][2] += round_pts;
					playersList[j][3] += 1;
				}
			}
		}
		// END OF POINTS UPDATE	
	}
	scorePoints();
}

function makeBlocksIntro() {
	let playersList = [andres, ap, fabian, diego, mami, papi];
	for (j=0; j < 6; j++) {
		let p_winners = playersList[j][1];
		let plyr = playersList[j][0];
		let bg;



		let tms = p_winners[0]; // DIVISIONAL
		let REALtms = REAL[0];
		for (k=0; k < 6; k++){ 
			let tm = tms[k]
			bg = "url(img/"+tm+"X.png)";
			if (REALtms.includes(tm) || ALIVEtms.includes(tm)){
				bg = "url(img/"+tm+".png)";
			} 
			$("."+plyr+"PredBlock .divBlock .t"+k).css("background-image", bg);
		}

		tms = p_winners[1]; // CONFERENCE
		REALtms = REAL[1];
		for (k=0; k < 4; k++){ 
			let tm = tms[k]
			bg = "url(img/"+tm+"X.png)";
			if (REALtms.includes(tm) || ALIVEtms.includes(tm)){
				bg = "url(img/"+tm+".png)";
			} 			
			$("."+plyr+"PredBlock .confBlock .t"+k).css("background-image", bg);
		}

		tms = p_winners[2]; // SUPER BOWL
		REALtms = REAL[2];
		for (k=0; k < 2; k++){ 
			let tm = tms[k]
			bg = "url(img/"+tm+"X.png)";
			if (REALtms.includes(tm) || ALIVEtms.includes(tm)){
				bg = "url(img/"+tm+".png)";
			} 			
			$("."+plyr+"PredBlock .sbBlock .t"+k).css("background-image", bg);
		}

		tms = p_winners[3]; // CHAMP
		REALtms = REAL[3];
		let tm = tms[0]
		bg = "url(img/"+tm+"X.png)";
		// console.log("real teams: "+REALtms);
		// console.log("picked teams: "+tms);
		// console.log("rds: "+rounds_so_far);
		if (REALtms.includes(tm) || ALIVEtms.includes(tm)){
			bg = "url(img/"+tm+".png)";
		} 
		$("."+plyr+"PredBlock .champBlock .champTeam").css("background-image", bg);
		
		let playerPts = playersList[j][2] 
		$("."+plyr+"PredBlock .champBlock .ptsBlock .ptsP").text(playerPts+" PTS");

	}
	console.log("Finished Rendering :)");
}

function setInfo() {
	$(".ptsWc").text(DIV_PTS+" Pts");
	$(".ptsDiv").text(CONF_PTS+" Pts");
	$(".ptsConf").text(SB_PTS+" Pts");
	$(".ptsSB").text(CHAMP_PTS+" Pts");
	$(".ptsScore").text(SCORE_PTS+" Pt");

	showScorePreds();
}


function scorePoints() {
	// console.log(" ");
	// console.log("_______ ");
	console.log("RUNNING SCORE POINTS");
	// console.log("--------- ");
	// console.log(" ");
	var num_games = REALscores.length;
	if (num_games > 12) {
		num_games = 12;
	}
	for (i=0; i < num_games; i++) {
		let game = REALscores[i];
		let realDif = game[1] - game[2];
		let realTot = game[1] + game[2];
		let realWinnerScore;
		if (game[1] > game[2]) {
			realWinnerScore = game[1];
		} else if (game[1] < game[2]) {
			realWinnerScore = game[2]; 
		}
		// console.log(" ");
		// console.log("_______ ");
		// console.log("CHECKING GAME "+i);
		if (realTot != 0) { // only check finished games
			// console.log("continuing GAME "+i);
			// console.log("REALdIF "+realDif);
			
			let playersList = [andres, ap, fabian, diego, mami, papi];
			// console.log("1==pl  "+playersList);
			let difWinners = [];
			let bestGap = 1000;
			for (j=0; j < playersList.length; j++) {
				let pDif = playersList[j][5][i][1];
				let gap = Math.abs(realDif - pDif);
				if (gap <= bestGap) {
					bestGap = gap;
				}
			}
			for (j=0; j < playersList.length; j++) {
				let pDif = playersList[j][5][i][1];
				// console.log("BEST GAP "+bestGap);
				// console.log("PLAYER dIF "+pDif);
				let gap = Math.abs(realDif - pDif);
				let correct_winner = realDif * pDif;
				
				if (gap <= bestGap && (correct_winner > 0)) {
					bestGap = gap;
					// console.log("----added "+playersList[j][i]);
					difWinners.push(playersList[j]) //push name var
				}
			}

			// let printList = []
			// for (j=0; j < difWinners.length; j++) {
			// 	printList.push(difWinners[j][0]);
			// }
			// console.log("difWinner: "+printList);

			let difWinnersUntied = [];
			if (difWinners.length > 1) {
				// do tiebreaker
				// console.log("***tiebreaking");
				let bestGap2 = 1000;
				for (j=0; j < difWinners.length; j++) {
					let pTot = difWinners[j][5][i][2];
					let gap = Math.abs(realTot - pTot);
					if (gap <= bestGap2) {
						bestGap2 = gap;
					}
				}
				for (j=0; j < difWinners.length; j++) {
					let pTot = difWinners[j][5][i][2];
					let gap = Math.abs(realTot - pTot);
					if (gap <= bestGap2) {
						bestGap2 = gap;
						difWinnersUntied.push(difWinners[j]) //push name string
					}
				}
			} else {
				difWinnersUntied = difWinners;
			}

			
			let difWinnersUntied2 = [];
			// TIEBREAKER 2, CLOSEST WINNER SCORE
			if (difWinnersUntied.length > 1) {
				// do tiebreaker 2
				// console.log("***tiebreaking");
				let bestGap3 = 1000;
				for (j=0; j < difWinnersUntied.length; j++) {
					let pDif = difWinnersUntied[j][5][i][1];
					let pTot = difWinnersUntied[j][5][i][2];
					let pWinnerScore = ((pTot-Math.abs(pDif))*.5) + Math.abs(pDif);
					let gap = Math.abs(realWinnerScore - pWinnerScore);
					if (gap <= bestGap3) {
						bestGap3 = gap;
					}
				}
				for (j=0; j < difWinnersUntied.length; j++) {
					let pDif = difWinnersUntied[j][5][i][1];
					let pTot = difWinnersUntied[j][5][i][2];
					let pWinnerScore = ((pTot-Math.abs(pDif))*.5) + Math.abs(pDif);
					let gap = Math.abs(realWinnerScore - pWinnerScore);
					if (gap <= bestGap3) {
						bestGap3 = gap;
						difWinnersUntied2.push(difWinnersUntied[j]) //push name string
					}
				}
			} else {
				difWinnersUntied2 = difWinnersUntied;
			}


			for (j=0; j < playersList.length; j++) { //award the players pts
				if (difWinnersUntied2.includes(playersList[j])) {
					// console.log("awarding player: "+playersList[j]);
					playersList[j][2] += 1;
					playersList[j][4] += 1;	
				}
			}
			
		}

	}
	superBowlPoints();
}

function superBowlPoints() {
	console.log("RUNNING sb POINTS");
	let i = 12;
	let game = REALscores[i];
	console.log("is this super bowl?" +game);
	let realDif = game[1] - game[2];
	let realTot = game[1] + game[2];
	let realWinnerScore;
	if (game[1] > game[2]) {
		realWinnerScore = game[1];
	} else if (game[1] < game[2]) {
		realWinnerScore = game[2]; 
	}
	if (realTot != 0) { // only check finished game
		console.log("RUNNING game score sb");
		let playersList = [andres, ap, fabian, diego, mami, papi];
		let difWinners = [];
		let bestGap = 1000;
		for (j=0; j < playersList.length; j++) {
			let pDif = playersList[j][5][i][1];
			let gap = Math.abs(realDif - pDif);
			if (gap <= bestGap) {
				bestGap = gap;
			}
		}
		for (j=0; j < playersList.length; j++) {
			let pDif = playersList[j][5][i][1];
			// console.log("BEST GAP "+bestGap);
			// console.log("PLAYER dIF "+pDif);
			let gap = Math.abs(realDif - pDif);
			let correct_winner = realDif * pDif;

			if (gap <= bestGap && (correct_winner > 0)) {
				bestGap = gap;
				difWinners.push(playersList[j]) //push name var
			}
		}
		let difWinnersUntied = [];
		if (difWinners.length > 1) {
			let bestGap2 = 1000;
			for (j=0; j < difWinners.length; j++) {
				let pTot = difWinners[j][5][i][2];
				let gap = Math.abs(realTot - pTot);
				if (gap <= bestGap2) {
					bestGap2 = gap;
				}
			}
			for (j=0; j < difWinners.length; j++) {
				let pTot = difWinners[j][5][i][2];
				let gap = Math.abs(realTot - pTot);
				if (gap <= bestGap2) {
					bestGap2 = gap;
					difWinnersUntied.push(difWinners[j]) //push name string
				}
			}
		} else {
			difWinnersUntied = difWinners;
		}
		let difWinnersUntied2 = [];
		// TIEBREAKER 2, CLOSEST WINNER SCORE
		if (difWinnersUntied.length > 1) {
			let bestGap3 = 1000;
			for (j=0; j < difWinnersUntied.length; j++) {
				let pDif = difWinnersUntied[j][5][i][1];
				let pTot = difWinnersUntied[j][5][i][2];
				let pWinnerScore = ((pTot-Math.abs(pDif))*.5) + Math.abs(pDif);
				let gap = Math.abs(realWinnerScore - pWinnerScore);
				if (gap <= bestGap3) {
					bestGap3 = gap;
				}
			}
			for (j=0; j < difWinnersUntied.length; j++) {
				let pDif = difWinnersUntied[j][5][i][1];
				let pTot = difWinnersUntied[j][5][i][2];
				let pWinnerScore = ((pTot-Math.abs(pDif))*.5) + Math.abs(pDif);
				let gap = Math.abs(realWinnerScore - pWinnerScore);
				if (gap <= bestGap3) {
					bestGap3 = gap;
					difWinnersUntied2.push(difWinnersUntied[j]) //push name string
				}
			}
		} else {
			difWinnersUntied2 = difWinnersUntied;
		}
		for (j=0; j < playersList.length; j++) { //award the players pts
			if (difWinnersUntied2.includes(playersList[j])) {
				// console.log("awarding player: "+playersList[j]);
				playersList[j][2] += superBowlClosestPts;
				playersList[j][4] += 1;	
			}
		}
	}
	console.log("all points sb");
	let playersList = [andres, ap, fabian, diego, mami, papi];
	for (j=0; j < playersList.length; j++) {
		let pDif = playersList[j][5][i][1];
		let gap = Math.abs(realDif - pDif);
		let correct_winner = realDif * pDif;

		if (correct_winner > 0) {
			playersList[j][2] += superBowlWinnerPts;
		}
		
		let correct_mvp = game[3];
		let p_mvp = playersList[j][5][i][3];
		console.log("MVP:" +correct_mvp);
		if (correct_mvp == p_mvp) {
			playersList[j][2] += superBowlMvpPts;
		}
	}
}




function showScorePreds() {
	var game_id;
	for (i=0; i < REALscores.length; i++) {
		let realTot = REALscores[i][1] + REALscores[i][2];
		if (i == 12) {
			game_id = 12;
		} else if (realTot == 0) { // find next unfinished game
			game_id = i;
			console.log("breaking: "+i);
			break
		}
	}
	let homeTeam = REALscores[game_id][0][0];
	let awayTeam = REALscores[game_id][0][1];

	let homeBG = "url(img/"+homeTeam+".png)";
	let awayBG = "url(img/"+awayTeam+".png)";
	
	$(".realGame #home").css("background-image", homeBG);
	$(".realGame #away").css("background-image", awayBG);
	
	let playersList = [andres, ap, fabian, diego, mami, papi];		
	for (i=0; i < num_players; i++) {

		let dif = playersList[i][5][game_id][1];
		let tot = playersList[i][5][game_id][2];
		let mvp = playersList[i][5][game_id][3];

		// console.log(" ");
		// console.log("dif: "+dif);
		// console.log("tot: "+tot);
		let homePts;
		let awayPts;

		if (dif > 0) {
			let half = (tot-dif)*.5;
			homePts = dif+half;
			awayPts = half;
		} else if (dif < 0) {
			dif = dif * (-1);
			let half = (tot-dif)*.5;
			awayPts = dif+half;
			homePts = half;
		}
		if (tot == 1000) {
			awayPts = "--";
			homePts = "--";

		}

		$(".per"+i+" .home").text(homePts);
		$(".per"+i+" .away").text(awayPts);
		$(".per"+i+" .mvp").text(mvp);
	}
}
