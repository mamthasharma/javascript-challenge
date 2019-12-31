// from data.js
var tableData = data;
var tbody= d3.select("tbody");
console.log(data);
// Reset table by setting html to " "
function resetTable(){
  tbody.html("");
}
//reading data to table with additional row and data using object.entries to get the key value pai
function createTable(data){

  resetTable();
  data.forEach((sighting)=>{
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value])=> {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
});
});
}
//using the date input filtering tableData on the date
function filteredTable(){
  // Select the input element and get the raw HTML node
 var inputElement = d3.select("#datetime");
 // Get the value property of the input element
 var inputValue = inputElement.property("value");
 var newData = tableData.filter(ufoSight => ufoSight.datetime === inputValue);
 //call createTable with the data from filtered list to populate sighting data
 createTable(newData);
}
//on clicking filter table funtion filteredTable is called 
d3.selectAll("#filter-btn").on("click",filteredTable);
// Default if no button clicked
createTable(tableData);