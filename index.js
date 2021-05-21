const testVar = {}

function testFunc() {
  return "hi"
}




function superbowlWin(record){
let findWinnerYear = record.find(test =>  test.result === "W" )
if(!findWinnerYear){
  return undefined;
}
  return findWinnerYear.year
}
superbowlWin(record)

    


 
