 
  var less = Math.floor(Math.random() * 6) + 1;
// random number generator b/w 1 and 6
var more = Math.floor(Math.random() * 6) + 1;






document.getElementById("imgmore").src= "dice" + more + ".png" ;


document.getElementById("imgless").src= "dice" + less + ".png" ;


  if (more>less){

    document.getElementById("announce").textContent = "Player 1 wins";
  }
  else if (less>more){

    document.getElementById("announce").textContent = "Player 2 wins";
  }
  else{

    document.getElementById("announce").textContent = "Tie";
  }


 
