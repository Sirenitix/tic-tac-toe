function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export class Bot1 {
	constructor(piece) {
		this.piece = piece;
		this.name = "Talgat";
	}

	move(board) {
		console.log(
			"%c Talgat - board -> ",
			"background: #222; color: royalblue",
			board
		);

		let nextmove;
		let count = 0;

		for(let j = 0; j < 9; j++){
			if(board[j]===0){
				count++;
			}
		}
		
		if (count === 9) {
			let i = (0, 9);
			while (board[i] !== 0) {
				i = getRandomInt(0, 9);
			}
			nextmove = i;
		}
		else {
			let arrOfCombos = [
				[0,1,2],
				[3,4,5],
				[6,7,8],
				[0,4,8],
				[2,4,6],
				[0,3,6],
				[1,4,7],
				[2,5,8]
				];
			
			let arrMoveCombo = arrOfCombos;
			let arrEnemyPosition = [];
			
			for (let i = 0; i < 9; i++) {                   // for each board element
			  if (board[i] === -1) {                         // if board element is taken by 1 or -1
				arrEnemyPosition.push(i);						// create an array of enemy positions for countering
				for (let j = 0; j<arrMoveCombo.length; j++) {               // for each possible win combination [0,1,2], [3,4,5] ...
				  for (let k = 0; k<3; k++) {               // for each value in specific combination
					if (arrMoveCombo[j] === undefined) {
					  continue;
					}
					if (i === arrMoveCombo[j][k]) {     // if board[i] is taken delete this combo
					  delete arrMoveCombo[j];
					}
				  }
				}
			  }
			}
			arrMoveCombo = arrMoveCombo.filter(element => {
				return element !== undefined;
			});
			console.log("enemy " + arrEnemyPosition);

			console.log(arrMoveCombo);

			let arrExistingPosition = [];
			for (let i = 0; i<9; i++) {
				if (board[i] === 1) {
					arrExistingPosition.push(i);
				}
			}

			let counter = 0;
			let currentCombo = [];
			
			for (let i = 0; i<arrMoveCombo.length; i++) {
				for (let k = 0; k < 3; k++) {
					for (let j = 0; j<board.length; j++) {
						if (arrMoveCombo[i][k] === j && board[j] === 1) {
							counter += 1;
						}

					}
					console.log("comboCurrent test2 " + "counter " + counter);
					if(counter == 2){
						console.log("comboCurrent test bla bla");
						currentCombo = arrMoveCombo[i];
						for (let l = 0; l < 3; l++) {
							if (board[currentCombo[l]] !== 1) {
								return currentCombo[l];

							}
						}
					}
				}
				counter = 0;
			}

			let bool1 = false;
			for (let i = 0; i<9; i++) {
				if (board[i] === 1) {
					for (let j = 0; j<arrMoveCombo.length; j++) {
						console.log("test5");
						for (let k = 0; k<3; k++) {
							console.log("test4");
							if (arrMoveCombo[j][k] === i) {
								console.log("test3");
								bool1 = true;
							}
							if (bool1 === true) {
								console.log("test2");
								for (let l = 0; l<3; l++) {
									if (board[arrMoveCombo[j][l]] === 0) {
										console.log("test1");
										nextmove =  arrMoveCombo[j][l];
										return nextmove;
									}
								}
							}
						}
					}
				}
			}
		}
		
		
		console.log(
			"%c Talgat - i -> ",
			"background: #222; color: royalblue",
			nextmove
		);
		return nextmove;
	}
}

export class Bot2 {
	constructor(piece) {
		this.piece = piece;
		this.name = "Abat";
	}

	move(board) {
		console.log(
			"%c Abat - board -> ",
			"background: #222; color: royalblue",
			board
		);
		let i = getRandomInt(0, 9);
		while (board[i] !== 0) {
			i = getRandomInt(0, 9);
		}
		console.log("%c Abat - i -> ", "background: #222; color: royalblue", i);
		console.log("next O " + i);
		return i;
	}
}




// if(arrMoveCombo[j].includes(i)) {
// 	console.log("test2");
// 	console.log(arrMoveCombo[j]);
// 	//console.log(arrMoveCombo);
// 	for (let k = 0; k<3; k++) {
// 		console.log("test3");
// 		if (board[i] === 1) {
// 			break;
// 		}
// 		// if (arrMoveCombo[j][k] === i) {
// 		// 	continue;
// 		// }
// 			nextmove = arrMoveCombo[j][k];
// 			console.log("next X " + nextmove);
// 			return nextmove;
		
		
// 	}
// }