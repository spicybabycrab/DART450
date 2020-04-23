var isDay = true;
var day = {"color":"#964b00", "background-color":"#fff"};
var night = {"color": "#fff", "background-color":"#964b00"};

document.getElementById("contrast").addEventListener("click", function(){
    if (isDay) {
      document.body.style.background = night["background-color"];
      document.body.style.color = night["color"];
      isDay = false;
    } else {
      document.body.style.background = day["background-color"];
      document.body.style.color = day["color"];
      isDay = true;
    }
});

function changeFontSize(val){
  if (document.body.style.fontSize == "") {
    document.body.style.fontSize = "1.0em";
  }
  if (val == 0) {
    document.body.style.fontSize = "1.0em";
  }
  document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (val * 0.1) + "em";
}