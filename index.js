function findMatching(drivers, name) {
    name = name.toLowerCase(); 
    let matching = drivers.filter(x => x.toLowerCase() === name);
    return matching;
 }

 console.log(findMatching(drivers, 'Bobby')); 


 function fuzzyMatch(drivers,firstLetters){
   let sameFirstLetter = drivers.filter(driver => driver.startsWith(firstLetters))
   return sameFirstLetter

}
console.log(fuzzyMatch(drivers, 'Sa')); 

function matchName(drivers,name){
   let nameMatching = drivers.filter(y => y.name=== name); 
   return nameMatching;

}
matchName(drivers,'Bobby')