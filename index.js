const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(arr){
  const winner = arr.find((e) => e.result == 'W');
	  if(winner){
      return winner.year;
    }
    else {
      return undefined;
    }  
  
}