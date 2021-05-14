const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}]

function superbowlWin(record){
  let finding = record.find(result=> result.result==="W")
  return finding ? finding.year : undefined;

}
superbowlWin(record);
