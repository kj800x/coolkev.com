window.ui = (function(){
  
  return {
  
    generateFloatBreak: function(){
      var _ = document.createElement("div");
      _.innerHTML = "&nbsp;";
      _.className = "floatbreak";
      return _;
    },
  
    updateStart : function () {
      dimanal.setStartingValue(document.getElementById("startingValue").value)
    },
    addConversionFactor : function () {
      dimanal.addConversionFactor(document.getElementById("numeratorToAdd").value + "/" + document.getElementById("denominatorToAdd").value)
    },
    addRecConversionFactor : function (z) {
      dimanal.addConversionFactor(z)
    }
  }
  
})();


dimanal.setHook("update", "conversionFactor", recommended_factors.updateUI);
document.getElementById("bal_in").addEventListener("keyup", bal.update);
