var listGames = ["k&pf", "GOL Web"]
var randomGame = listGames[Math.floor(Math.random() * listGames.length)]
document.getElementById("game").src = "https://sillylao.github.io/webgames/" + randomGame + "/index.html"


