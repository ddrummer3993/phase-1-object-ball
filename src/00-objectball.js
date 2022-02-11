//define gameObject

function gameObject() {
    let data = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['black', 'white'],
            players: {
                'Alan Anderson': {
                    'number': 0,
                    'shoe': 16,
                    'points': 22,
                    'rebounds': 12,
                    'assits': 12,
                    'steals': 3,
                    'blocks': 1,
                    'slamDunks': 1
                },
                'Reggie Evans':{
                    'number': 30,
                    'shoe': 14,
                    'points': 12,
                    'rebounds': 12,
                    'assits': 12,
                    'steals': 12,
                    'blocks': 12,
                    'slamDunks': 7
                },
                'Brook Lopez': {
                    'number': 11,
                    'shoe': 17,
                    'points': 17,
                    'rebounds': 19,
                    'assits': 10,
                    'steals': 3,
                    'blocks': 1,
                    'slamDunks': 15
                },
                'Mason Plumlee': {
                    'number': 1,
                    'shoe': 19,
                    'points': 26,
                    'rebounds': 12,
                    'assits': 6,
                    'steals': 3,
                    'blocks': 8,
                    'slamDunks': 5
                },
                'Jason Terry': {
                    'number': 31,
                    'shoe': 15,
                    'points': 19,
                    'rebounds': 2,
                    'assits': 2,
                    'steals': 4,
                    'blocks': 11,
                    'slamDunks': 1
                }
            }
        },
        away:{
            teamName: 'Charlotte Hornets',
            colors: ['turquoise', 'purple'],
            players: {
                'Jeff Adrien': {
                    'number': 4,
                    'shoe': 18,
                    'points': 10,
                    'rebounds': 1,
                    'assits': 1,
                    'steals': 2,
                    'blocks': 7,
                    'slamDunks': 2
                },
                'Bismak Biyombo': {
                    'number': 0,
                    'shoe': 16,
                    'points': 12,
                    'rebounds': 4,
                    'assits': 7,
                    'steals': 7,
                    'blocks': 15,
                    'slamDunks': 10
                },
                'DeSagna Diop': {
                    'number': 2,
                    'shoe': 14,
                    'points': 24,
                    'rebounds': 12,
                    'assits': 12,
                    'steals': 4,
                    'blocks': 5,
                    'slamDunks': 5
                },
                'Ben Gordon': {
                    'number': 8,
                    'shoe': 15,
                    'points': 33,
                    'rebounds': 3,
                    'assits': 2,
                    'steals': 1,
                    'blocks': 1,
                    'slamDunks': 0
                },
                'Brendan Haywood': {
                    'number': 33,
                    'shoe': 15,
                    'points': 6,
                    'rebounds': 12,
                    'assits': 12,
                    'steals': 22,
                    'blocks': 5,
                    'slamDunks': 12
                }
            }
        }
    }
    return data;
};

// THE ORIGINAL ATTEMPT. WAMP WAMP WAMP.
// create function numPointsScored
/*function numPointsScored(string) {
    //establish variables
    let points;
    let obj = gameObject();
    let homePlayersObj = obj['home']['players'];
    let awayPlayersObj = obj['away']['players'];
    let homePlayersArray = Object.keys(homePlayersObj);
    let awayPlayersArray = Object.keys(awayPlayersObj);

    //dig through arrays to find which team player is on, report points of player.
    const findPlayerHome = homePlayersArray.find(player => {
        if (player === string) {
            points = obj['home']['players'][string]['points'];
        } else {
            const findPlayerAway = awayPlayersArray.find(player => {
                if (player === string) {
                    points = obj['away']['players'][string]['points'];
                }
                return points;
            })
        }
        return points;
    }) 
    return points;
};

console.log(numPointsScored('Mason Plumlee'));
*/

//create playersObj function, creates Object of ALL players - will be referenced for the remaining functions
function playersObj() {
    const game = gameObject();
    const homePlayers = game.home.players;
    const awayPlayers = game.away.players;
    return Object.assign({}, homePlayers, awayPlayers);
};

// create homeTeam and awayTeam functions - returns an object of just home team OR away team nested objects.
function homeTeam() {
    return gameObject().home;
};

function awayTeam() {
    return gameObject().away;
};


// create numPointsScored using multiple for...in loops it iterate through nested objects
function numPointsScored(playerString) {
    const game = gameObject();              //put obj in variable (then for...in loop, repeat process to get to desired level)
    for (const gameKey in game) {           //iterate through game keys (home, away)
        const teamObj = game[gameKey]           //create variable teamObj that holds next nested object
        const playerObj = teamObj.players           //no need to iterate through next nested obj, just assign variable to players obj
        for (const playerKey in playerObj) {        //iterate through players
            if (playerKey === playerString) {            //check to see if player matches function argument
                return 'Number Points Scored:', playerObj[playerKey].points;     //return players points if it is correct player
            }
        }
    }
}

//console.log('number of points using variables and for...in loops:',numPointsScored('Ben Gordon'));


//create numPointsScoredTwo - creates an Array for each player with their name as index[0] and data as index[1]
function numPointsScoredTwo(playerString) {
    const playerArrays = Object.entries(playersObj());
    const player = playerArrays.find(playerArray => playerArray[0] === playerString);
    return player[1].points;
};

//console.log('number of points using arrays and object.entries:', numPointsScoredTwo('Ben Gordon'));

// create numPointsScoredThree - use playersObj and player input to simply look up your players points in the playersObj.
function numPointsScoredThree(playerString) {
    return playersObj()[playerString].points;
};

//console.log('number of points using playersObj and the given player input:', numPointsScoredThree('Ben Gordon'));


//create function shoeSizes using playersObj() function - this returns an object of ALL players that we can irerate through.
function shoeSizes(playerString) {
    return playersObj()[playerString].shoe;
};

//console.log('the shoe size is:', shoeSizes('Jason Terry'));


///////////////////////////////////PRACTICE//////////////////////////////////////
// creat function slamDunks - use arrays and Object.entries 
function slamDunks(playerString) {
    const playerArrays = Object.entries(playersObj());
    const player = playerArrays.find(playerArray => playerArray[0] === playerString);
    return player[1].slamDunks;
};

//console.log('the number of slam dunks is:', slamDunks('Brook Lopez'));
/////////////////////////////////////////////////////////////////////////////////



// create function teamColors
function teamColors(teamNameString) {
   const game = gameObject();           //create variable that represents gameObject() (home, away)
   for (const gameKey in game) {            //iterate through game keys (home, away)
       const teamObj = game[gameKey];       //create vairable that represents teamObj() (teamName, colors, players)
       let name = teamObj.teamName          //create variable that represnts the string assigned to each 'teamName' key
       if (name === teamNameString) {       //compare 'name' to the string input
           return teamObj.colors;           //if true, return that teams colors
       }
    }            
};

//console.log('the teams colors are:', teamColors('Charlotte Hornets'))


// creat function teamNames
function teamNames() {
    // define variables
    let obj = gameObject()
    let homeTeam = obj.home.teamName;
    let awayTeam = obj.away.teamName;
    //make array
    let teamNamesArray = [homeTeam, awayTeam]

    return teamNamesArray;
}

//console.log(teamNames());


//create function playerNumbers
function playerNumbers(teamNameString) {
    const jerseyArray = [];                                 //create empty array
    if (teamNameString === homeTeam().teamName) {           //check to see if input === home team name
        let players = homeTeam().players;                   //assign variable to home team players object
        for (const playersKey in players) {                 //iterate through players names
            let playerObj = players[playersKey];            //assign a variable to the player data objects
            let playerNumber = playerObj.number;            //assign a varoable to the players jersey number via the playerObj
            jerseyArray.push(playerNumber);                 //push that number to the new array
        }
        return jerseyArray;
    } else if (teamNameString === awayTeam().teamName) {    //same as above except for the away team.
        let players = awayTeam().players;
        for (const playersKey in players) {
            let playerObj = players[playersKey];
            let playerNumber = playerObj.number;
            jerseyArray.push(playerNumber);
        }
        return jerseyArray;
    }
}

//console.log(playerNumbers('Brooklyn Nets'));
//console.log(playerNumbers('Charlotte Hornets'));

//create function playerStats
function playerStats(playerNameString) {
    const players = playersObj();
    return players[playerNameString];
};

//console.log(playerStats('Mason Plumlee'));


//create function bigShoeRebounds
function bigShoeRebounds() {
    const players = playersObj();
    let biggestShoeSize = 0
    let bigFoot = ''
    for (const playersKey in players) {
        const playersObj = players[playersKey];
        const playersShoeSize = playersObj.shoe;
        if (playersShoeSize > biggestShoeSize) {
            biggestShoeSize = playersObj.shoe;
            bigFoot = playersObj.rebounds;
        }
    }
    return bigFoot;
}

console.log(bigShoeRebounds());