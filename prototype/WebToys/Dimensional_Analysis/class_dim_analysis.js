function createTable(tableData, args) {
  var table = document.createElement('table')
    , tableBody = document.createElement('tbody');

  tableData.forEach(function(rowData) {
    if (rowData instanceof Array) { className = "" } else {
      var className = rowData.className;
      rowData = rowData.row;
    }
    var row = document.createElement('tr');
    row.className = className;

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      if (typeof cellData == "string"){
        cell.appendChild(document.createTextNode(cellData));
      } else {
        cell = cellData;
      }
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  return table;
}

window.dimanal = (function(id){

  var hooks = Hooker();
  var conversionFactors = [];
  var start = "";
  
  function generateCloseClickHandler(offset){
    return function(){
      conversionFactors.splice(offset,1);
      recalculate();
    }
  }

  function recalculate(){
    
    if (!start){
      return;
    }
    
    var row_close = [];
    var row_one = [];
    var row_two = [];
    
    var running_total = clone(start);
    
    row_close.push("");
    row_one.push(running_total.numerator.toString())
    row_two.push(running_total.denominator.toString({"quiet":true}))
    
    for (var _ = 0; _ < conversionFactors.length; _++){
      running_total = running_total.Multiply(conversionFactors[_]);
      var x = document.createElement("td");
      x.appendChild(document.createTextNode("x"));
      x.className = "exitbutton";
      x.addEventListener("click", generateCloseClickHandler(_));
      row_close.push(x);
      row_one.push(conversionFactors[_].numerator.toString())
      row_two.push(conversionFactors[_].denominator.toString())
    }
    
    running_total = running_total.simplify();
    var table = createTable([{"className": "xable","row":row_close}, row_one, row_two]);
    var finalResults = document.createElement("span");
    finalResults.appendChild(document.createTextNode("= "));
    finalResults.appendChild(document.createTextNode(running_total.toString({"simplify": true})))
    table.className = "fractionTable DimAnalTable";
    finalResults.id = "result"
    var z = document.getElementById("output");
    z.innerHTML = "";
    z.appendChild(table);
    z.appendChild(finalResults);
    z.appendChild(ui.generateFloatBreak());
    hooks.swing("update", "conversionFactor", running_total)
  }

  function setStartingValue(s){
    start = hmi.parseConversionFactor(s);
    recalculate();
  }

  function addConversionFactor(s){
    conversionFactors.push(hmi.parseConversionFactor(s));
    recalculate();
  }

  return {
    setHook : hooks.add,
    setStartingValue: setStartingValue,
    addConversionFactor: addConversionFactor,
    recalculate: recalculate,
  }

})("dimanal");
