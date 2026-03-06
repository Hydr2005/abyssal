const clientId="1479450889654763520"

const redirect="https://Hydr2005.github.io/abyssal/apply.html"

document.getElementById("login").onclick=()=>{

const url=
`https://discord.com/oauth2/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirect)}&scope=identify`

window.location=url

}