function start() {
    const link = document.getElementById("url").value;
    const status = document.getElementById("status")
    const sent = document.getElementById("sent")
    const attacks = document.getElementById("attacks")
    const time = document.getElementById("time")
    const sites = document.getElementById("sites")
    document.querySelector("button").innerText = 'Stop'
    document.querySelector("button").onclick = cancel
    document.getElementById("st").style.borderLeft = '2px solid yellow'
    status.innerText = "🟢 ON"  
    n = document.querySelector('.sss')
                window.scroll(0, screenTop);   
    n.innerHTML = `
    <div class="n" id="n">Finding Anti-Hindu Websites</div>
    ` 
        setTimeout(() => {
            status.innerText = "⚡ Attacking"
            ip = localStorage.getItem('ip')
            attack(ip)
        }, 1000) 
    
}   
function attack(link) { 
    
    document.getElementById("st").style.borderLeft = '2px solid green'
    // const link = document.getElementById("url").value;
    n = document.querySelector('.sss')
    
    const status = document.getElementById("status")
    const sent = document.getElementById("sent")
    const attacks = document.getElementById("attacks")
    const time = document.getElementById("time")
    const sites = document.getElementById("sites")
    // c = Math.floor(Math.random())
    // if (c == 0) {
    //     host = "https://"
    //     localStorage.setItem('host', host)
    //     c = Math.floor(Math.random())
    //     if (c == 1) {
    //         ext = ".in"
    //         localStorage.setItem('ext', ext)
    //     }
    //     else  {
    //         ext = ".com"
    //         localStorage.setItem('ext', ext)
    //     }
    // }
    // else if(c==1) {
    //     host = "www."
    //     localStorage.setItem('host', host)
    //     c = Math.floor(Math.random())
    //     if (c == 1) {
    //         ext = ".in"
    //         localStorage.setItem('ext', ext)
    //     }
    //     else  {
    //         ext = ".com"
    //         localStorage.setItem('ext', ext)
    //     }
    // }      
    sent.innerHTML = link;
    n.innerHTML = `
    <div class="n" id="n">Attack Started on: ${link}</div>
    `
    for(let i = 1; i<=5000;i++) {
        for(let t = 1; t<=5;t++) {
            setTimeout(() => {
                time.innerHTML = t.toFixed(2)+"s"
            }, t*1000);
        }   
        setTimeout(() => {
            attacks.innerHTML = i
            if (i == 5000) {  
                
                addx() 
                document.getElementById("st").style.borderLeft = '2px solid red'
                status.innerText = "🔴 OFF"
                sl = `<div class='site' onclick='rrr("${link}")'>
                https://${link}.host
                </div>
                ` 
                s2 = `IP: ${link} | Attacks: ${Math.floor(Math.random() * 10000 - 1000)+1000}`
                localStorage.setItem('sites', localStorage.getItem('sites')+sl);
                localStorage.setItem('oi', localStorage.getItem('oi')+s2+"\n");
                time.innerHTML = '0.00s'
                link.innerHTML = '........' 
                attack.innerHTML = '0'
                
                loadhistory();
                auto()
            }  
              
        }, i*1.1)
 
        
        
         
    }  
   
} 

function rrr(link) {
    console.log('dsdsadsad')
    const msg = document.getElementById("di");
    message = `
    <div class='head'>
   <h3>WEBSITE DETAILS</h3>
   <h3 class='close' onclick="cslose()">❌</h3>
    </div>
    <div class='text'>
    <table>
                    <thead>
                        <tr>
                        <td>Name</td>
                       <td>Value</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Host IP</td>
                            <td align="center">${link}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td align="center">🔴 Offline</td>
                        </tr>
                        <tr>
                            <td>Data</td>
                            <td  align="center">🗑 Deleted</td>
                        </tr>
                    </tbody>
                </table>
    </div>
    `
    msg.innerHTML = message;
    document.querySelector("body").style.opacity = 0.2
    msg.showModal()
}
function cslose() {
    document.querySelector("body").style.opacity = 1
    document.getElementById('di').close()
}
function loadhistory() {
    const count = localStorage.getItem('sc')
    if (!count) {
        localStorage.setItem('sc',0)       
        document.querySelector('.sc').innerHTML = `HISTORY (${count})`
        loadhistory()
        
    }
    else if(count.includes(null) == true){
        localStorage.setItem('sc',0)       
        document.querySelector('.sc').innerHTML = `HISTORY (${count})`
        loadhistory()

    }
    document.querySelector('.sc').innerHTML = `HISTORY (${count})`
    const sites = document.getElementById("sites")
    const iii = localStorage.getItem('sites');
     if(!iii) {
        localStorage.setItem('sites', Date().replace('GMT+0530 (India Standard Time)','<br>'))
       sites.innerHTML = iii

       loadhistory()
    } 
    else if(iii.includes(null) == true){    
        localStorage.setItem('sites', Date().replace('GMT+0530 (India Standard Time)','<br>')) 
       sites.innerHTML = iii
       loadhistory()

    }
    else if (1==1) {
        refresh()
}
    sites.innerHTML = iii
    
}
function refresh() {
    const count = localStorage.getItem('sc')
    if (!count) {
        localStorage.setItem('sc',0)       
        document.querySelector('.sc').innerHTML = `HISTORY (${count})`
        loadhistory()
        
    }
    else if(count.includes(null) == true){
        localStorage.setItem('sc',0)       
        document.querySelector('.sc').innerHTML = `HISTORY (${count})`
        loadhistory()

    }
    document.querySelector('.sc').innerHTML = `HISTORY (${count})`
    const sites = document.getElementById("sites")
    const iii = localStorage.getItem('sites');
     if(!iii) {
        localStorage.setItem('sites', Date().replace('GMT+0530 (India Standard Time)','<br><br><br>'))
       sites.innerHTML = iii

       refresh()
    } 
    else if(iii.includes(null) == true){    
        localStorage.setItem('sites', Date().replace('GMT+0530 (India Standard Time)','<br><br><br>')) 
       sites.innerHTML = iii
       refresh()

    }
    sites.innerHTML = iii
    
}

function addx() {
    count = Number(localStorage.getItem('sc'));
    localStorage.setItem("sc", Number(count)+Number(1))
}
function auto() {
   const fd =  Math.floor(Math.random() * (300 - 49) + 49); 
   const sd =  Math.floor(Math.random() * (10-0) + 0); 
   const gd =  Math.floor(Math.random() * (10 - 1) + 1); 
   const port =  Math.floor(Math.random() * (10000 - 1000) + 1000); 
   const ip = `${fd}.${sd}.${gd}:${port}`
   localStorage.setItem('ip', ip)
   start()
}
function cancel() {
    localStorage.removeItem('ip')
    n = document.querySelector('.sss')
    n.innerHTML = `
    <div class="n" id="n">Stopping Attack</div>
    `
        window.location.reload()
    
     
}
function scr() {
    var height = document.body.scrollHeight;
    window.scroll(0, height);
    document.querySelector('.bt').innerText = '⬆'
    document.querySelector('.bt').onclick = topsx
}
function topsx() {
    window.scroll(0, screenTop);   
    document.querySelector('.bt').innerText = '⬇'
    document.querySelector('.bt').onclick = scr
} 
document.addEventListener('DOMContentLoaded', loadhistory)
