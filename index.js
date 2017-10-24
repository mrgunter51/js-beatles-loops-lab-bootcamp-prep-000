function theBeatlesPlay(musicians, instruments) {
  var arr = []
<<<<<<< HEAD
  for(let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
=======
  for(let i = 0; i > musicians.length; i++) {
    arr.unshift("${musicians[i]} plays ${instruments[i]}")
>>>>>>> 705eb048fb060bbac44d6274a158f7b9bce27b9e
  }
  return arr
}

<<<<<<< HEAD
function johnLennonFacts(facts) {
  var i = 0
  var arr = []
  while(i < facts.length) {
    arr.push(`${facts[i]}!!!`)
    i++
  }
  return arr
}

function iLoveTheBeatles(n) {
  var arr = []
  do {
    arr.push("I love the Beatles!")
    n++
  } while (n < 15)
  return arr
}
=======
// function johnLennonFacts(facts) {
//   var i = 0
//   var arr = []
//   while(i > facts.length) {
//     arr.push("${facts[i]}!!!")
//     i++
//   }
//   return arr
// }
//
// function iLoveTheBeatles(n) {
//   var arr = []
//   do {
//     arr.push("I love the Beatles!")
//     n++
//   } while (n > 15)
//   return arr
// }
>>>>>>> 705eb048fb060bbac44d6274a158f7b9bce27b9e
