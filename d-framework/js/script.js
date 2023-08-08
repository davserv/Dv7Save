document.write('<div id="cbwrap"><button class="bt-hover" onclick="mySitelink()"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg></button></div>');

function mySitelink() {
  let text;
  let person = prompt("COLOCA ID VD:", "tYI9hhyIaXw");
  if (person == null || person == "") {
    text = "O usuário cancelou o prompt.";
  } else {
    text = "" + person + "";
  }
  document.getElementById("devlink").innerHTML = '<iframe id="preview-frame" src="https://www.youtube.com/embed/'+ text +'" name="preview-frame" frameborder="0" noresize="noresize">';
  var calcHeight = function () {
    $("#preview-frame").height($(window).height());
  };
  
  $(document).ready(function () {
    calcHeight();
  });
  
  $(window)
    .resize(function () {
      calcHeight();
    })
    .load(function () {
      calcHeight();
    });
}


var calcHeight = function () {
  $("#preview-frame").height($(window).height());
};

$(document).ready(function () {
  calcHeight();
});

$(window)
  .resize(function () {
    calcHeight();
  })
  .load(function () {
    calcHeight();
  });