const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]
  
 
// forEach
// forEach to check who's presen
  minions.forEach(minion =>
     console.log(minion + " is present!"))

 // map
 // apitalize each minion's name EXCEPT kevin's
  const capitalizedMinions = []

   minions.map((element, index) => {
          if(element === "kevin") {
            capitalizedMinions.push(element)
          } else {
            capitalizedMinions.push(element.charAt(0).toUpperCase() + element.slice(1) )
          } 
  })

  // console.log(capitalizedMinions)

  // filter
  //  filter out minions that are not capitalized and save the correctly capitalized minions to an array 

  const actuallyCapitalizedMinions =  capitalizedMinions.filter((element, index) => {
        
         return  element.charAt(0) === element.charAt(0).toUpperCase()
          
         
  })

// console.log(actuallyCapitalizedMinions)


// every 
//  check if they're all capitalized now
const isEveryMinionUpperC = actuallyCapitalizedMinions.every((element, index) => {
  return  element.charAt(0) === element.charAt(0).toUpperCase()

})

// console.log(isEveryMinionUpperC)


//----------------------------
// BONUS METHODS
//----------------------------


// every
// function that accepts a minion as an argument and checks whether or not the first letter of the minion's name is capitalized
const isCapitalized = minion => {
   if(minion.charAt(0) === minion.charAt(0).toUpperCase()){
   return true
  } else{
   return false 
  } 
}

// every method with isCapitalized as a callback function 
console.log(capitalizedMinions.every((element, index) => {
  return isCapitalized(element)
}))
   

// find
// return which minion is not correctly capitalized in capitalizedMinions

const uncapitalizedMinion = capitalizedMinions.find((element, index) => {
  return element.charAt(0) === element.charAt(0).toLowerCase()
})

console.log("The uncapitalized minion is " + uncapitalizedMinion)

// findIndex
//find what index kevin is in the original capitalizedMinionsarray
console.log(capitalizedMinions.findIndex((element, index) => {
  return element === "kevin"
}))


//use capitalizedMinions[1]to select kevin and capitalize his name
capitalizedMinions[1] = "Kevin"

//check using every whether or not capitalizedMinions is all capitalized correctly
console.log(capitalizedMinions.every((element, index) => {
  return isCapitalized(element)
}))

//  reduce
//  using mapcreate a separate array called minionNameLengths that maps out the minions' name lengths
const minionNameLengths = minions.map((element, index) => {
  
  return element.length
})


// Use reduceto sum up the minionNameLengthsarray
console.log(minionNameLengths.reduce((acc, element, index) => {
  return element += acc
}))


// some
// Check whether or not some of the minion's name lengths are 6 or above
console.log(minions.some((element, index) => {
  return element.length >= 6
}))

//Lowercase Kevin's name again inside of the capitalizedMinions,  then check whether or not some of the minion's names are capitalized using some
capitalizedMinions[1] = "kevin"


console.log(capitalizedMinions.some((element, index) => {
  return element.charAt(0) !== element.charAt(0).toUpperCase()  
}))

// sort 
// Use sort to order the minions within the capitalizedMinions array by order of name length
const compareMinions = (arr) => {
  arr.sort((a, b) => {
    if (a.length > b.length) {
      return 1
    } else if ( a.length < b.length) {
      return -1
    } else {
      return 0 
    }
  })
  return arr
}

console.log(compareMinions(capitalizedMinions))