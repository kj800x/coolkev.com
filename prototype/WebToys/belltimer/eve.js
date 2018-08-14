function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}






function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}



/*
timeofstart = new Date("Mon Feb 25 2013 7:18:00 GMT-0500");
  */
  function _millisecondsToStr(milliseconds, format){
    var out="";
    var seconds = milliseconds / 1000;
    var numyears = Math.floor(seconds / 31536000);
    if(numyears){
      if (format == "human"){
        out += ' ' + numyears + ' year' + ((numyears > 1) ? 's' : '');
      }
      else if (format == "computer"){
        out += '' + numyears + ' y ';
      }
    }
    var numdays = Math.floor((seconds % 31536000) / 86400);
    if(numdays){
      if (format == "human"){
        out += ' ' + numdays + ' day' + ((numdays > 1) ? 's' : '');
      }
      else if (format == "computer"){
        out += '' + numdays + ' d ';
      }
    }
    var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
    if(numhours){
      if (format == "human"){
        out += ' ' + numhours + ' hour' + ((numhours > 1) ? 's' : '');
      }
      else if (format == "computer"){
        out += '' + checkTime(numhours) + ':';
      }
    }
    var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
    if(numminutes){
      if (format == "human"){
        out += ' ' + numminutes + ' minute' + ((numminutes > 1) ? 's' : '');
      }
      else if (format == "computer"){
        out += '' + checkTime(numminutes) + ':';
      }
    }
    var numseconds = Math.floor((((seconds % 31536000) % 86400) % 3600) % 60);
    if(numseconds){
      if (format == "human"){
        out += ' ' + numseconds + ' second' + ((numseconds > 1) ? 's' : '');
      }
      else if (format == "computer"){
        out += '' + checkTime(numseconds);
      }
    } else if (format == "computer"){
      out += '00';
    }
    
    
    return out; //'just now' //or other string you like;
}
  
  /*
  function update(){
    /*var text = "";
    for (var itemindex in window.shoutdays){
      if window.shoutdays. 
    }
    
    var elements = document.getElementsByClassName("shoutout");
    for (var index in elements){
      elements[index].innerHTML = stri;
    }
    
    var delta = new Date() - timeofstart;
    var stri = _millisecondsToStr(delta, "human");
    elements = document.getElementsByClassName("maeve");
    for (var index in elements){
      elements[index].innerHTML = stri;
    }
  }

window.setInterval(update,50); 
*/

function changestylesheet(towhat){
  if (towhat!=null){
    document.getElementById("stylesheet").href = "http://www.coolkev.com/format/"+towhat+".css";
    createCookie("style", towhat, 5);
  } else {
    document.getElementById("stylesheet").href = "http://www.coolkev.com/format/default.css";
    eraseCookie("style");
  }
}

window.onload=function(){
  if (readCookie("style") != null){
    document.getElementById("stylesheet").href = "http://www.coolkev.com/format/"+readCookie("style")+".css";
  }
};
