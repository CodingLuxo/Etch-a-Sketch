const container = document.querySelector("#container");
const button = document.createElement("button");
const body = document.querySelector("body");
const eraser = document.createElement("button");

body.appendChild(button);
body.appendChild(eraser);


    
// Grid Creation

function gridCreation(c){
    if (c == undefined) c = 16;
    for(let i = 1; i<= c; i++){
    
    const grids = document.createElement("div");
    grids.setAttribute("data-number",`${i}`);
            for(let j = 1; j<= c; j++){
                const gridsver = document.createElement("div");
                gridsver.setAttribute("data-ver",`${j}`);
                grids.appendChild(gridsver);
            }
    container.appendChild(grids);
    }
}

gridCreation();

// hover effect
function hover(){
const hovering = document.querySelectorAll("[data-ver]");

hovering.forEach((valor) => {
    valor.addEventListener("mouseenter",(e)=>{ //random color RGB FORMAT
            e.target.style.backgroundColor = `#${1 + Math.round(Math.random()*100)}${1 + Math.round(Math.random()*100) }${1 + Math.round(Math.random()*100) }`;            
})
});

//Eraser button function

eraser.addEventListener("click",()=>{
    hovering.forEach(a =>{
        a.style.backgroundColor = "#FFFFFF";
    } )
})

}

hover();

//Reset Button function and generate a new grid


button.addEventListener("click",()=>{
    
    let c = prompt("How many squares do you want?");
    if (c < 100){
        const divs = document.querySelectorAll("[data-number]");
        divs.forEach(div => { //
        div.remove();
        })
        gridCreation(c);
        hover();
    }

    else alert("Please choose a number lower than 100");
    

})






