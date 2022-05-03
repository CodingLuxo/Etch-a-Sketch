const container = document.querySelector("#container");

    
// Grid Creation
    for(let i = 1; i<= 8; i++){
    
    let grids = document.createElement("div");
    grids.setAttribute("data-number",`${i}`);
            for(let j = 1; j<= 8; j++){
                let gridsver = document.createElement("div");
                gridsver.setAttribute("data-ver",`${j}`);
                grids.appendChild(gridsver);
            }
    container.appendChild(grids);
    }

// hover effect

const hovering = document.querySelectorAll("[data-ver]");

hovering.forEach((valor) => {
    valor.addEventListener("mouseenter",(e)=>{
        console.log(e.target.style.backgroundColor = `#${1 + Math.round(Math.random()*100)}${1 + Math.round(Math.random()*100) }${1 + Math.round(Math.random()*100) }`)
    })
})








