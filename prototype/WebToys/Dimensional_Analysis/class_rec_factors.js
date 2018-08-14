window.recommended_factors = (function(uioutput){

  factorList = [];
    
  function generateChemistryFactors(unit){
    var out = [];
    if (/(?:L|mol|g)-(.+)/.test(unit)){
      var d = /(?:L|mol|g)-(.+)/.exec(unit);
      // Molar Mass
      var molarMass = +chemistry.massOfFormula(chemistry.countPossiblyComplexFormula(d[1])).toFixed(5);
      if (molarMass){
        out = [hmi.parseConversionFactor("1mol-"+d[1] + "/" +molarMass + "g-"+d[1])];
        out.push(hmi.parseConversionFactor("1mol-"+d[1] + "/" + "22.4L-"+d[1]));
      }
      //Equation Balancer
      if (/mol-(.+)/.test(unit)){
        var equivunits = bal.getEquiv();
        var molecules = equivunits.map(function(a){return a.molecule});
        if (molecules.indexOf(d[1]) != -1){ // Molecule is in Equation!!!
          dco = equivunits[molecules.indexOf(d[1])].coefficient;
          for (var _ = 0; _ < equivunits.length; _++){
            if (equivunits[_].molecule != d[1]){
              out.push(hmi.parseConversionFactor(dco+"mol-"+d[1] + "/" + equivunits[_].coefficient + "mol-"+equivunits[_].molecule))
            }
          }
        }
      }
    }
    return out;
  }
  
  function getFactorsForSimpleUnit(unit){
    var outlist = [];
    var tmpFactorList = clone(factorList);
    
    for (var _ = 0; _ < unit.length; _++){
      tmpFactorList = tmpFactorList.concat(generateChemistryFactors(unit))
      for (var z = 0; z < tmpFactorList.length; z++){
        if (unit[_] == tmpFactorList[z].numerator.units[0]){
          outlist.push(tmpFactorList[z]);
        }
        if (unit[_] == tmpFactorList[z].invert().numerator.units[0]){
          outlist.push(tmpFactorList[z].invert());
        }
      }
    }
    return outlist;
  }
  
  function generateRecConversionFactorEventHandler(s){
    return function(){
      ui.addRecConversionFactor(s);
    }
  }
  
    
  return {
    
    learnFactor : function(factor){
      factorList.push(factor)
    },
    
    getFactorsForUnit : function(unit){
    
      nlist = getFactorsForSimpleUnit(unit.numerator.units);
      dlist = getFactorsForSimpleUnit(unit.denominator.units);
      
      for (var _ = 0; _ < nlist.length; _++){
        nlist[_] = nlist[_].invert();
      }
      
      var fulllist = nlist.concat(dlist);
      var already_used_hashes = [];
      var duplicate_free_array = [];
      
      for (var _ = 0; _ < fulllist.length; _++){
        if (already_used_hashes.indexOf(fulllist[_].toString()) == -1){
          duplicate_free_array.push(fulllist[_]);
          already_used_hashes.push(fulllist[_].toString())
        }
      }
      
      return duplicate_free_array;
    },
    
    learnSIUnits: function(units){
    
      for (var _ = 0; _ < units.length; _++){
        recommended_factors.learnFactor(hmi.parseConversionFactor("1000" + units[_] + "/k" + units[_]));
        recommended_factors.learnFactor(hmi.parseConversionFactor("1000000" + units[_] + "/M" + units[_]));
        recommended_factors.learnFactor(hmi.parseConversionFactor("1000000000" + units[_] + "/G" + units[_]));
        recommended_factors.learnFactor(hmi.parseConversionFactor(units[_] + "/10d" + units[_]));
        recommended_factors.learnFactor(hmi.parseConversionFactor(units[_] + "/100c" + units[_]));
        recommended_factors.learnFactor(hmi.parseConversionFactor(units[_] + "/1000m" + units[_]));
        recommended_factors.learnFactor(hmi.parseConversionFactor(units[_] + "/1000000u" + units[_]));
        recommended_factors.learnFactor(hmi.parseConversionFactor(units[_] + "/1000000000n" + units[_]));
        recommended_factors.learnFactor(hmi.parseConversionFactor(units[_] + "/1000000000000p" + units[_]));
      }
    
    },
    
    updateUI : function(unit){
      
      var z = document.getElementById(uioutput);
      z.innerHTML = "";
      var text = document.createElement("p");
      text.appendChild(document.createTextNode("Recommended Conversion Factors (click to apply)"));
      z.appendChild(text);
      var container = document.createElement("div");
      var l = recommended_factors.getFactorsForUnit(unit);
      for (var _ = 0; _ < l.length; _++){
        var table = createTable([[l[_].numerator.toString()],[l[_].denominator.toString()]]);
        table.className = "fractionTable recommendedFactor"
        table.addEventListener("click", generateRecConversionFactorEventHandler(l[_].toString()))
        container.appendChild(table);
      }
      if (l.length == 0){
        var string = document.createTextNode("No Recommendations");
        var b = document.createElement("b");
        b.appendChild(string);
        container.appendChild(b);
      }
      z.appendChild(container);
      z.appendChild(ui.generateFloatBreak());
      
    }
    
  }

})("ui_rec_output");


recommended_factors.learnSIUnits(["A","g","m","K","cd","N","Pa","J", "V", "W"]);


recommended_factors.learnFactor(hmi.parseConversionFactor("60s/min"));
recommended_factors.learnFactor(hmi.parseConversionFactor("60min/h"));
recommended_factors.learnFactor(hmi.parseConversionFactor("24h/d"));
recommended_factors.learnFactor(hmi.parseConversionFactor("7d/week"));
