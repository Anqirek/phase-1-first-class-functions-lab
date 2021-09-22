// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayOfDrivers) {
    console.log(arrayOfDrivers);
    return arrayOfDrivers.slice(0, 2);
};
// const drivers = ['Sally', 'Bob', 'Freddy'];
const returnLastTwoDrivers = function (driversArray){
    return driversArray.slice(-2)

}
returnFirstTwoDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
console.log(selectingDrivers[0](["Bob","Sally","Charlene"]));


function createFareMultiplier(multiple) {
    return (fare) => {
    return fare * multiple
    }
}
console.log(createFareMultiplier(5)(5));

const fareDoubler = (theFare) => createFareMultiplier(2)(theFare);

console.log(fareDoubler(5)),"fareDoubler";

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(5));

function selectDifferentDrivers(arrayOfDrivers, callbackFunction) {
    console.log(arrayOfDrivers, "array of drivers");
    console.log(callbackFunction, "callback function");
    return callbackFunction(arrayOfDrivers);
}

const drivers = ["Sally", "Bob", "Freddie", "Claudia"]
selectDifferentDrivers(drivers, returnFirstTwoDrivers);