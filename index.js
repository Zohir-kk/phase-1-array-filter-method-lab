// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
// findMatching()
// 1) returns all drivers that match the passed in name
// 2) returns matching drivers if case does not match but letters do
// 3) returns an empty array if there is no match
function findMatching(drivers, name) {
    return drivers.filter(
      (driver) => driver.toLowerCase() === name.toLowerCase()
    );
  }
  const driver = "Booby"
  const match = findMatching(drivers, driver)
  console.log(match );

// fuzzyMatch()
// 4) returns a driver if beginning provided letters match
// 5) does not return drivers if only middle or ending letters match
// 6) does not return drivers if only middle or ending letters match

function fuzzyMatch(drivers,letters) {
    return drivers.filter((drivers) => drivers.startsWith(letters))
}
const letter = "S"
const matching= fuzzyMatch(drivers , letter)
console.log(matching);

// matchName()
// 1) accesses the data structure to check if name matches
function matchName(drivers, name) {
    return drivers.filter((driver)=> driver.name === name)
}


