const container = document.querySelector("#container");
let grids;
let gridver;

    
// Grid Creation
    for(let i = 1; i<= 16; i++){
    
    grids = document.createElement("div");
    grids.setAttribute("data-number",`${i}`);
            for(let j = 1; j<= 16; j++){
                gridsver = document.createElement("div");
                gridsver.setAttribute("data-ver",`${j}`);
                grids.appendChild(gridsver);
            }
    container.appendChild(grids);
    }

// hover effect

const hovering = document.querySelectorAll("[data-ver]");

hovering.forEach((valor) => {
    valor.addEventListener("mouseenter",(e)=>{ //random color RGB FORMAT
            e.target.style.backgroundColor = `#${1 + Math.round(Math.random()*100)}${1 + Math.round(Math.random()*100) }${1 + Math.round(Math.random()*100) }`;            
})
});

//Reset Button function

const button = document.createElement("button");
const body = document.querySelector("body");

body.appendChild(button);

button.addEventListener("click",()=>{
    hovering.forEach(a =>{
        a.style.backgroundColor = "#FFFFFF";
    } )
})






