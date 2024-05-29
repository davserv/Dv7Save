function mySitelink() {
  let text;
  let person = prompt("id vd:", "https://redek-dp.github.io/streaming/dnetwork/playlist.m3u8");
  if (person == null || person == "") {
    text = "O usuário cancelou o prompt.";
  } else {
    text = "" + person + "";
  }
  document.getElementById("devlink").innerHTML =
    '<iframe src="https://dev7tv-online.vercel.app/play/httpro/?vid=' +
    text +
    '" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
}