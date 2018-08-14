window.chemistry = (function(){
  
    var mass_database = {"H":1.00794,"He":4.002602,"Li":6.941,"Be":9.012182,"B":10.811,"C":12.0107,"N":14.0067,"O":15.9994,"F":18.9984032,"Ne":20.1797,"Na":22.9898,"Mg":24.305,"Al":26.9815,"Si":28.0855,"P":30.9738,"S":32.065,"Cl":35.453,"Ar":39.948,"K":39.0983,"Ca":40.078,"Sc":44.9559,"Ti":47.867,"V":50.9415,"Cr":51.9961,"Mn":54.938,"Fe":55.845,"Co":58.9332,"Ni":58.6934,"Cu":63.546,"Zn":65.38,"Ga":69.723,"Ge":72.63,"As":74.9216,"Se":78.96,"Br":79.904,"Kr":83.798,"Rb":85.4678,"Sr":87.62,"Y":88.9059,"Zr":91.224,"Nb":92.9064,"Mo":95.96,"Tc":98,"Ru":101.07,"Rh":102.9055,"Pd":106.42,"Ag":107.8682,"Cd":112.411,"In":114.818,"Sn":118.71,"Sb":121.76,"Te":127.6,"I":126.9045,"Xe":131.293,"Cs":132.9054,"Ba":137.327,"La":138.9055,"Ce":140.116,"Pr":140.9077,"Nd":144.242,"Pm":145,"Sm":150.36,"Eu":151.964,"Gd":157.25,"Tb":158.9254,"Dy":162.5,"Ho":164.9303,"Er":167.259,"Tm":168.9342,"Yb":173.054,"Lu":174.9668,"Hf":178.49,"Ta":180.9479,"W":183.84,"Re":186.207,"Os":190.23,"Ir":192.217,"Pt":195.084,"Au":196.9666,"Hg":200.59,"Tl":204.3833,"Pb":207.2,"Bi":208.9804,"Po":209,"At":210,"Rn":222,"Fr":223,"Ra":226,"Ac":227,"Th":232.0381,"Pa":231.0359,"U":238.0289,"Np":237,"Pu":244,"Am":243,"Cm":247,"Bk":247,"Cf":251,"Es":252,"Fm":257,"Md":258,"No":259,"Lr":262,"Rf":267,"Db":268,"Sg":271,"Bh":272,"Hs":270,"Mt":276,"Ds":281,"Rg":280,"Cn":285,"Uut":284,"Fl":289,"Uup":288,"Lv":293,"Uus":294,"Uuo":294}
  
    function massOfFormula(formula){
      var mass = 0;
      var elements = Object.keys(formula);
      for (var _ = 0; _ < elements.length; _++){
        mass += mass_database[elements[_]] * formula[elements[_]]
      }
      return mass;
    }
    
    function countPossiblyComplexFormula(formula){
      var breakToSimpler = /\((.*)\)(\d*)/g;
      var parseSimpler = /\((.*)\)(\d*)/;
      
      var list = formula.match(breakToSimpler);
      
      if (list === null){
        list = [];
      }
      
      if (formula.replace(breakToSimpler,"")){
        list.push("(" + formula.replace(breakToSimpler,"")+ ")1");
      }
      
      var tree = {};
      
      for (a = 0; a < list.length; a++){
        var r = list[a].match(parseSimpler);
        var srt = countElements(r[1], parseInt(r[2]));
        var keys = Object.keys(srt);
        var i = 0;
        for (i = 0; i < keys.length; i++){
        
          if (typeof(tree[keys[i]]) != "undefined"){
            tree[keys[i]] = tree[keys[i]] + (srt[keys[i]]);
          }
          else
          {
            tree[keys[i]] = (srt[keys[i]]);
          }
        
        
        }
      }
      
      return tree;
      
    }
    
    function countElements(formula, multip){
    
      var breakToEles = /([A-Z][a-z]*)(\d*)/g;
      
      var parseSingleEle = /([A-Z][a-z]*)(\d*)/;
      
      var eles = formula.match(breakToEles)
      
      var r = {};
      var z = 0;
      for (z = 0; z < eles.length; z++){
        var m = eles[z].match(parseSingleEle);
        var element = m[1];
        var number = m[2];
        if (number == ""){
          number = 1;
        } else {
          number = parseInt(number);
        }
        if (typeof(r[element]) != "undefined"){
          r[element] = r[element] + (number * multip);
        }
        else
        {
          r[element] = number * multip;
        }
      }
      
      return r;
    
      return JSON.parse(prompt("What is the alloc for this formula: " + formula));
    
      var mode = "";
      var tmp = "";
      var feed = formula.split("");
      var z = 0;
      
    }
  
  return {
  countPossiblyComplexFormula: countPossiblyComplexFormula,
  massOfFormula: massOfFormula,
  }
  
})()
