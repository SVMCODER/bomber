function start() {
    const link = document.getElementById("url").value;
    const status = document.getElementById("status")
    const sent = document.getElementById("sent")
    const attacks = document.getElementById("attacks")
    const time = document.getElementById("time")
    const sites = document.getElementById("sites")
    document.getElementById("st").style.borderLeft = '2px solid yellow'
    status.innerText = "🟢 ON" 
    setTimeout(() => {
        status.innerText = "⚡ Attacking"
        
        attack()
    }, 1000)
} 
function attack() {
     document.getElementById("st").style.borderLeft = '2px solid green'
    const link = document.getElementById("url").value;
    const status = document.getElementById("status")
    const sent = document.getElementById("sent")
    const attacks = document.getElementById("attacks")
    const time = document.getElementById("time")
    const sites = document.getElementById("sites")
    c = Math.floor(Math.random())
    if (c == 0) {
        host = "https://"
        localStorage.setItem('host', host)
        c = Math.floor(Math.random())
        if (c == 1) {
            ext = ".in"
            localStorage.setItem('ext', ext)
        }
        else if (c == 0) {
            ext = ".com"
            localStorage.setItem('ext', ext)
        }
    }
    else if(c==1) {
        host = "www."
        localStorage.setItem('host', host)
        c = Math.floor(Math.random())
        if (c == 1) {
            ext = ".in"
            localStorage.setItem('ext', ext)
        }
        else if (c == 0) {
            ext = ".com"
            localStorage.setItem('ext', ext)
        }
    }
    
    sent.innerHTML = link;
    for(let i = 1; i<=6000;i++) {
        setTimeout(() => {
            time.innerHTML = i.toFixed(2)+"s"
            
        }, i*1000);
        setTimeout(() => {
            attacks.innerHTML = i
            if (i == 5999) {
                addx()
                document.getElementById("st").style.borderLeft = '2px solid red'
                status.innerText = "🔴 OFF"
                sl = `<div class='site'>${localStorage.getItem("host")}${link}${localStorage.getItem("ext")}</div>`
                localStorage.setItem('sites', localStorage.getItem('sites')+sl);
                time.innerHTML = '0.00s'
                link.innerHTML = '........'
                attack.innerHTML = '0'
                loadhistory();
                window.location.reload()
            }
        }, i*2);
        
    }
}
function loadhistory() {
    const count = localStorage.getItem('sc')
    if (count == null || count == undefined ) {
        localStorage.setItem('sc',0)       
    }                
    document.querySelector('.sc').innerHTML = `HISTORY (${count})`
    const sites = document.getElementById("sites")
    sites.innerHTML = localStorage.getItem("sites").replace(null,'');
}
document.addEventListener('DOMContentLoaded', loadhistory)
function addx() {
    count = Number(localStorage.getItem('sc'));
    localStorage.setItem("sc", Number(count)+Number(2))
}