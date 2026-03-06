const container = document.getElementById("solicitudes")

let solicitudes = JSON.parse(localStorage.getItem("apps") || "[]")

solicitudes.forEach(app => {

let div = document.createElement("div")

div.className="app"

div.innerHTML = `
<h2>${app.discord}</h2>
<p><b>Edad:</b> ${app.edad}</p>
<p>${app.pregunta1}</p>
<p>${app.pregunta2}</p>
<p>${app.pregunta3}</p>
<p>${app.pregunta4}</p>
`

container.appendChild(div)

})