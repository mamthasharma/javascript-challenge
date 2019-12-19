// from data.js
var tableData = data;

console.log(data);

var tbody= d3.select("tbody");

data.forEach((sighting)=>{
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value])=> {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
});
});
// newTable(tableData);
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  var newData = tableData.filter(ufoSight => ufoSight.datetime === inputValue);
  console.log(newData);
  // Set the span tag in the h1 element to the text
  // that was entered in the form
  d3.select("h1>span").text(inputValue);
});
