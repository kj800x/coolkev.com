function Hooker(){

  var hooks = {};
  
  function buildHookname(verb, object){
    return verb + "~!@$" + object;
  }
  
  return {
    
    swing : function(verb, object, data){
      var hookname = buildHookname(verb, object);
      if (typeof(hooks[hookname]) != "undefined"){ // If it's an array
        for (var _ = 0; _ < hooks[hookname].length; _++){
          hooks[hookname][_](data);
        }
      }
    },
    
    add : function(verb, object, runnable){
      var hookname = buildHookname(verb, object);
      if (typeof(hooks[hookname]) != "undefined"){ // If it's an array
        hooks[hookname].push(runnable);
      } else { // If it's the first one (create the array)
        hooks[hookname] = [runnable];
      }
    }
    
  }

};
