const webhook = "https://discord.com/api/webhooks/1479434819267199047/xlL5ulI0lMyGduFZI1mP33QwF9qNYkXH0GQhxUyEHLRufsPr5Z-gzyyur457wnXM57S3";

document.getElementById("form").addEventListener("submit", async function(e){

e.preventDefault();

const edad = document.querySelector('[name="edad"]').value;
const discord = document.querySelector('[name="discord"]').value;

const situacion1 = document.querySelector('[name="situacion1"]').value;
const situacion2 = document.querySelector('[name="situacion2"]').value;
const situacion3 = document.querySelector('[name="situacion3"]').value;
const situacion4 = document.querySelector('[name="situacion4"]').value;

const pregunta1 = document.querySelector('[name="pregunta1"]').value;
const pregunta2 = document.querySelector('[name="pregunta2"]').value;
const pregunta3 = document.querySelector('[name="pregunta3"]').value;
const pregunta4 = document.querySelector('[name="pregunta4"]').value;

const user = JSON.parse(localStorage.getItem("discord_user"));

const avatar = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;

const payload = {

username:"Formularios Abyssal",

avatar_url:"https://cdn-icons-png.flaticon.com/512/5968/5968756.png",

embeds:[{

title:"📋 Nueva solicitud Staff Abyssal",

color:11141120,

thumbnail:{
url: avatar
},

fields:[

{
name:"👤 Usuario",
value:`${user.username}#${user.discriminator}`,
inline:true
},

{
name:"🆔 ID Usuario",
value:`${user.id}`,
inline:true
},

{
name:"🎂 Edad",
value:edad
},

{
name:"💬 Discord",
value:discord
},

{
name:"⚔️ Discusión entre miembros",
value:situacion1
},

{
name:"🔎 Filtración del staff",
value:situacion2
},

{
name:"📢 Protesta de la comunidad",
value:situacion3
},

{
name:"🚨 Abuso de permisos",
value:situacion4
},

{
name:"⭐ ¿Por qué elegirte?",
value:pregunta1
},

{
name:"🔥 Motivación para staff",
value:pregunta2
},

{
name:"💎 Cualidades",
value:pregunta3
},

{
name:"📌 Extra",
value:pregunta4
}

],

footer:{
text:"Sistema de Aplicaciones Abyssal"
},

timestamp:new Date()

}]

};

fetch(webhook,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(payload)
});

alert("✅ Solicitud enviada correctamente");

});