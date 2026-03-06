const token = localStorage.getItem("discord_token")

if(!token){

window.location.href="index.html"

}

fetch("https://discord.com/api/users/@me",{

headers:{
authorization:`Bearer ${token}`
}

})

.then(res=>res.json())
.then(user=>{

document.getElementById("username").innerText =
user.username+"#"+user.discriminator

document.getElementById("avatar").src =
`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`

})

const form = document.getElementById("form")
const progress = document.getElementById("progress-bar")

form.addEventListener("input",()=>{

let fields = form.querySelectorAll("input,textarea")

let filled = 0

fields.forEach(f=>{
if(f.value.length>0) filled++
})

progress.style.width = (filled/fields.length)*100+"%"

})

form.addEventListener("submit",(e)=>{

e.preventDefault()

const data = new FormData(form)

fetch("https://discord.com/api/webhooks/1479434819267199047/xlL5ulI0lMyGduFZI1mP33QwF9qNYkXH0GQhxUyEHLRufsPr5Z-gzyyur457wnXM57S3",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

embeds:[{

title:"Nueva solicitud Staff Abyssal",

color:10181046,

fields:[

{name:"Edad",value:data.get("edad")},
{name:"Discord",value:data.get("discord")},

{name:"Discusión miembros",value:data.get("situacion1")},
{name:"Filtración staff",value:data.get("situacion2")},
{name:"Protesta comunidad",value:data.get("situacion3")},
{name:"Abuso permisos",value:data.get("situacion4")},

{name:"Por qué elegirte",value:data.get("pregunta1")},
{name:"Motivación staff",value:data.get("pregunta2")},
{name:"Cualidades",value:data.get("pregunta3")},
{name:"Extra",value:data.get("pregunta4")}

]

}]

})

})

alert("Solicitud enviada")

})