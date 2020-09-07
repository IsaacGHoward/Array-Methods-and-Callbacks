import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
console.log("TASK 1 : A thru E ");
const final_2014 = fifaData.filter(game => game.Year === 2014 && game.Stage === "Final")
console.log(final_2014[0]["Home Team Name"]);
console.log(final_2014[0]["Away Team Name"]);
console.log(final_2014[0]["Home Team Goals"]);
console.log(final_2014[0]["Away Team Goals"]);
console.log("WINNER : " + final_2014[0]["Win conditions"].split(" ")[0]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return(data.filter(game => game.Stage === "Final"));
};
console.log("TASK 2 : Get Finals")
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */
function getYears(getFinals) {
    return(getFinals().map(game => game.Year));
};
console.log("TASK 3 : Get Years");
console.log(getYears(function(){return getFinals(fifaData)}));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 
function getWinners(getFinals){
    return getFinals().map(game => {
        return(game["Home Team Goals"] > game["Away Team Goals"] ? {Winner: game["Home Team Name"]} : {Winner: game["Away Team Name"]})
    })
}
/* Old, bad code
function getWinners(getFinals, data) {
    const finals = getFinals(data);
    const winners = finals.map(game => {
        if(game["Home Team Goals"] > game["Away Team Goals"])
            return({Winner: game["Home Team Name"]})
        return({Winner: game["Away Team Name"]})
    })
    return(winners);
};
*/
console.log("TASK 4 : Get Winners");
console.log(getWinners(function(){return getFinals(fifaData)}));
//console.log(getWinners(getFinals,fifaData));



/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {
    return getYears().map((year, idx) => `In ${year}, ${getWinners()[idx].Winner} won the world cup!`);
};
console.log("TASK 5 : Get Winners By Year")
console.log(getWinnersByYear(function(){return getWinners(function(){return getFinals(fifaData)})}, function(){return getYears(function(){return getFinals(fifaData)})}));


/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    return([data.map(game => game["Home Team Goals"]).reduce((acc,curr) => acc+curr)/data.length, data.map(game => game["Away Team Goals"]).reduce((acc,curr) => acc+curr)/data.length]);
};
console.log("TASK 6 : Home VS Away Goals Averages")
console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */
function getWinnersInit(getFinals) {
    return getFinals().map(game => {
        return(game["Home Team Goals"] > game["Away Team Goals"] ? {Winner: game["Home Team Initials"]} : {Winner: game["Away Team Initials"]})
    })
};
function getCountryWins(data, teamINIT) {
    return getWinnersInit(function(){return getFinals(data)}).filter(game => game.Winner === teamINIT).length
};
console.log("STRETCH 1 : Italy World Cup Wins")
console.log(getCountryWins(fifaData,"ITA"));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
