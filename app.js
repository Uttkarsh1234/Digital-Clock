let time = document.querySelector("p");
setInterval(()=>{
    let now = new Date();
    let hours = String(now.getHours()).padStart(2,'0');
    let minutes = String(now.getMinutes()).padStart(2,'0');
    let seconds = String(now.getSeconds()).padStart(2,'0');
    time.textContent = `${hours}:${minutes}:${seconds}`;
},1000);
