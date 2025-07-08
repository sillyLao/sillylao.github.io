var listGames = ["k&pf", "GOL Web", "PEG Solitaire Web"]
var listWidth = ["1067", "800", "800"]
var listHeight = ["606", "800", "800"]
var randomInt = Math.floor(Math.random() * listGames.length)
var Game = listGames[randomInt]
document.getElementById("game").src = "https://sillylao.github.io/webgames/" + Game + "/index.html"
var Width = listWidth[randomInt]
document.getElementById("game").width = Width
var Height = listHeight[randomInt]
document.getElementById("game").height = Height


