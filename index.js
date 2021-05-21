const testVar = {}

function testFunc() {
  return "hi"
}



const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function superbowlWin(arr) {
  const winner = arr.find(score => score.result === "W");
  if (winner) {
    return winner.year;
  } else {
    return undefined
  }

}