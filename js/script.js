function simulate_download(){
  var elemnt = document.getElementById("simulate_download");
  elemnt.style.display = "block";
}


function time_out(){
  setTimeout(function (){simulate_download()}, 1000);
}

function closedownload(){
  var elemnt = document.getElementById("simulate_download");
  elemnt.style.display = "none";
}

function riempi_cure(n){
  var elemnt = document.getElementById("cuore" + n);
  elemnt.style.display = "none";

  var elemnt2 = document.getElementById("cuorepieno" + n);
  elemnt2.style.display = "block";
}
