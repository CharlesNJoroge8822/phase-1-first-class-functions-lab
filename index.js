// Code your solution in this file!
// Used some help doing this.. (consent)

var drivers = ["Antonia", "Nuru", "Amari", "Mo"];

// Returns the first two drivers
function returnFirstTwoDrivers() {
    return drivers.slice(0, 2);
}

// Returns the last two drivers
function returnLastTwoDrivers() {
    return drivers.slice(-2);
}

// 3. Array of driver functions
var selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// function from the array
function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}

//  function for fare multiplier function
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}
//  to double the fare
var fareDoubler = createFareMultiplier(2);

//  to triple the fare
var fareTripler = createFareMultiplier(3);

// print all the return at once
//just learned this method..
console.log(returnFirstTwoDrivers()); //Antonia Nuru
console.log(returnLastTwoDrivers());  //Amari Mo

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // Antonia Nuru
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); //Amari Mo

console.log(fareDoubler(10));
console.log(fareTripler(10));

