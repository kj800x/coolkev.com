function createTable(tableData) {
  var table = document.createElement('table')
    , tableBody = document.createElement('tbody');

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  return table;
}

window.hmi = (function(){

  function createCF(numerator, denominator){
    return {
      "numerator" : numerator,
      "denominator" : denominator,
      "Multiply": smartMult,
      "simplify": function(){
        for (var _ = 0; _ < this.numerator.units.length; _++){
          if (this.denominator.units.indexOf(this.numerator.units[_]) != -1){
            this.denominator.units.splice(this.denominator.units.indexOf(this.numerator.units[_]), 1);
            this.numerator.units.splice(this.numerator.units.indexOf(this.numerator.units[_]), 1);
            _ = _ - 1;
          }
        }
        return createCF(this.numerator, this.denominator);
      },
      "invert": function(){
        return createCF(this.denominator, this.numerator);
      },
      "toString": function(args){
        args = args ? args : {};
        args.simplify = args.simplify ? args.simplify : false;
        if (args.simplify){
          s = (this.numerator.value / this.denominator.value) + " " + this.numerator.units.join(" ");
          if (this.denominator.units.length){
            s += " / " + this.denominator.units.join(" ");
          }
        } else {
          s = (this.numerator.value + " " + this.numerator.units.join(" ") + "/" + this.denominator.value) + " " + this.denominator.units.join(" ");
        }
        return s;
      }
    }
  }
  
  function createSmartValue(v,u){
    return {
      "value": v,
      "units": u,
      "toString": function(args){
        args = args ? args : {};
        args.quiet = args.quiet ? args.quiet : false;
        if (args.quiet && this.value == 1){
          s = "";
        } else {
          s = this.value
        }
        s += " " + this.units.join(" ");
        return s;
      }
    }
  }

  function multiplySmartValues(a,b){
    return createSmartValue(a.value * b.value, a.units.concat(b.units))
  }

  function smartMult(a){
    var a = a;
    var b = this;
    
    var numerator = multiplySmartValues(a.numerator, b.numerator);
    var denominator = multiplySmartValues(a.denominator, b.denominator);
    
    return createCF(numerator, denominator);
  }

  function parseValueAndUnit(s){
    var chars = s.split("");
    var outvalue = "";
    for (var _ = 0; (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].indexOf(chars[_]) != -1); _++){
      outvalue += chars[_]
    }
    if (outvalue.length){
      outvalue = parseFloat(outvalue);
    } else {
      outvalue = 1;
    }
    var units = chars.slice(_);
    units = units.join("").split(" ");
    if (units.length == 1){
      if (units[0] == ""){
        units = [];
      }
    }
    return createSmartValue(outvalue, units)
  }

  function parseConversionFactor(s){
  
    //Break by the slash, if exists;
    var parts = s.split("/");
  
    var numerator = parts[0];
    if (parts.length > 1){
      var denominator = parts[1];
    } else {
      var denominator = "";
    }
    
    //Parse each as a 
  
    numerator = parseValueAndUnit(numerator);
    denominator = parseValueAndUnit(denominator);
    
    return createCF(numerator, denominator)
  
  }

  return {
    parseConversionFactor : parseConversionFactor,
  }

})();
