var monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ];
  
  var wocheTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
  ];

  let display = document.getElementById("display");
  let bottom = document.getElementById("bottom");
  let back = document.getElementById("back");
  let star = document.getElementById("top");
  let right = document.getElementById("right");
  let left = document.getElementById("left")
  let Datum = document.getElementById("date");
  let wochenTag = document.getElementById("wochenTag");


  startTime = () => {
    let date = new Date();
    m = monate[date.getMonth()];
    t = date.getDate();
    y = date.getFullYear();
    min = anzeige(date.getMinutes());
    sec = anzeige(date.getSeconds());
    h = date.getHours();
    anzeige = anzeige();
    
    wochenTag.innerHTML = wocheTag[date.getDay()] 
    Datum.innerHTML = m + " " + t + " " + y;
    display.innerHTML = h + ":" + min + ":" + sec;
    bottom.innerHTML = h + ":" + min + ":" + sec;
    back.innerHTML = h + ":" + min + ":" + sec;
    star.innerHTML = h + ":" + min + ":" + sec;
    right.innerHTML = h + ":" + min + ":" + sec;
    left.innerHTML = h + ":" + min + ":" + sec;
    function anzeige(x){
    if (x < 10){
        return "0" + x;
    }else {
        return x;
    }}};
    setInterval(startTime, 1000); 



   