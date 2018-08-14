window.bal = (function(ui_id){

  var currentEquivalents = [];
  var removeco = /(\d*)(.+)/;

  return {
  
    update : function(){
      var eq = document.getElementById("bal_in").value;
      eq = eq.replace(/=/g, "").replace(/</g, "").replace(/-/g, "").replace(/\s/g, "").replace(/>/g, "+");
      var equalMol = eq.split("+");
      currentEquivalents = [];
      for (var _ = 0; _ < equalMol.length; _ ++){
        if (removeco.test(equalMol[_])){
          var g = removeco.exec(equalMol[_]);
          var molecule = g[2];
          var coefficient = g[1];
          currentEquivalents.push({"molecule":molecule, "coefficient":coefficient})
        }
      }
      dimanal.recalculate();
    },
    getEquiv: function(){
      return currentEquivalents;
    }
  
  }

})("ui_bal_input");
