const testVar = {}

function testFunc() {
  return "hi"
}

// function wonSuperbowl (game){
//   if (game.result === "W"){
//     return game.year
//   }  
// }
function superbowlWin (array){
  const output = array.find(({result}) => result === "W")
  if (output != undefined){
	return output.year
  }
}
