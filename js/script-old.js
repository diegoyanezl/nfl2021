window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}

function init() {
	
}
const num_players = 4;

var REAL = [
	['NO', SEA', 'WAS']
	{'': 10,
	'IND': 0},
	{'SEA': 10,
	'LAR': 0},
	{'WAS': 10,
	'TB': 0},
	{'TEN': 10,
	'BAL': 0},
	{'NO': 10,
	'CHI': 0},
	{'PIT': 10,
	'CLE': 0}
];


var preds_diego = [
	{'BUF': 20,
	'IND': 0},
	{'SEA': 1,
	'LAR': 0},
	{'WAS': 0,
	'TB': 1},
	{'TEN': 1,
	'BAL': 0},
	{'NO': 1,
	'CHI': 0},
	{'PIT': 1,
	'CLE': 0},
	
	{'GB': 0,
	'   ': 0},
	{'KC': 0,
	'   ': 0}
];

var preds_fabian = [
	{'BUF': 0,
	'IND': 100},
	{'SEA': 0,
	'LAR': 100},
	{'WAS': 0,
	'TB': 100},
	{'TEN': 0,
	'BAL': 100},
	{'NO': 0,
	'CHI': 100},
	{'PIT': 0,
	'CLE': 100},
	
	{'GB': 0,
	'   ': 0},
	{'KC': 0,
	'   ': 0}
];
var preds_andres = [
	{'BUF': 20,
	'IND': 0},
	{'SEA': 100,
	'LAR': 0},
	{'WAS': 100,
	'TB': 0},
	{'TEN': 100,
	'BAL': 0},
	{'NO': 100,
	'CHI': 0},
	{'PIT': 100,
	'CLE': 0},
	
	{'GB': 0,
	'   ': 0},
	{'KC': 0,
	'   ': 0}
];
var preds_papi = [
	{'BUF': 0,
	'IND': 10},
	{'SEA': 0,
	'LAR': 100},
	{'WAS': 100,
	'TB': 0},
	{'TEN': 100,
	'BAL': 0},
	{'NO': 0,
	'CHI': 100},
	{'PIT': 100,
	'CLE': 0},
	
	{'GB': 0,
	'   ': 0},
	{'KC': 0,
	'   ': 0}
];


var diego = ["Diego", preds_diego, 0, 0, 0];
var fabian = ["Fabian", preds_fabian, 0, 0, 0];
var andres = ["Andres", preds_andres, 0, 0, 0];
var papi = ["Papi", preds_papi, 0, 0, 0];


function update() {

	points();

	// diego[2] = 5;
	// andres[2] = 11;
	// fabian[2] = 8;
	console.log(diego);

	var ranking = rank();
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
	var games_so_far = REAL.length;

	for (i=0; i < games_so_far; i++) {
		// loop thru every game
		let game = REAL[i];
		
		// SET POINTS FOR ROUND
		let round_pts = 1; // WILD CARD ROUND
		if (i > 5){
			round_pts = 2; // DIVISIONAL ROUND
			if (i > 9){
				round_pts = 3; // CONFERENCE CHAMP.
				if (i > 11){
					round_pts = 5; // SUPER BOWL
				}
			}
		}

		// CHECK WINNER
		let teams = Object.keys(game);
		let home_winner = (game[teams[0]] - game[teams[1]]) > 0; // winner=true when home teams wins, false when home team loses 
		console.log(home_winner);
		
		// CHECK EACH PLAYER'S RESULT AND AWARD PTS
		var players = [diego, fabian, andres, papi];
		for (j=0; j < players.length; j++) {
			let p_game = players[j][1][i]
			let p_home_winner = (p_game[teams[0]] - p_game[teams[1]]) > 0; // winner=true when home teams wins, false when home team loses 
			if (p_home_winner == home_winner) {
				players[j][2] += round_pts;
				players[j][3] += 1;
			} else {
				players[j][4] += 1;
			}
		}	

		// END OF POINTS UPDATE	
	}
}