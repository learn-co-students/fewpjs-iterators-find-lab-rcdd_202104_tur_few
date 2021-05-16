const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin (arr) {
  const result = arr.find(game => game.result === 'W');
  let year;
  if (result) year = result.year;
  return year;
}
