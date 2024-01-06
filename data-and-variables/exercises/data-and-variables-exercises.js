// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

const spaceShuttle="Determination";
const shuttleSpeedMPH= 17500;
const distanceToMarsKM= 225000000;
const distanceToMoonKM= 384400;
const milesPerKM= 0.621; 

console.log(typeof spaceShuttle);
console.log(typeof shuttleSpeedMPH);
console.log(typeof distanceToMarsKM);
console.log(typeof distanceToMoonKM);
console.log(typeof milesPerKM);

const milesToMars= distanceToMarsKM * milesPerKM;
console.log(milesToMars);

const hoursToMars= milesToMars / shuttleSpeedMPH;
console.log(hoursToMars);

const daysToGetToMars= hoursToMars / 24;
console.log(daysToGetToMars);

console.log("Determination will take 332.67857142857144 days to reach Mars");

const milesToMoon= distanceToMoonKM * milesPerKM;
console.log(milesToMoon);

const hoursToMoon= milesToMoon / shuttleSpeedMPH;
console.log(hoursToMoon);

const daysToMoon= hoursToMoon / 24;
console.log(daysToMoon);

console.log("Determiation will take 0.5683628571428571 days to reach the Moon");