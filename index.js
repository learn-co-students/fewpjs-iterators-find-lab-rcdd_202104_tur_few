const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "1969", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

const superbowlWin = (arr) => {
  let win = arr.find(item => item.result === "W");
  return win ? win.year : undefined;
};
superbowlWin(record)
