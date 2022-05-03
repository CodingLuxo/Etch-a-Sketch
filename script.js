const container = document.querySelector("#container");
let grids;
let gridsver;
    
// Grid Creation
    for(let i = 1; i<= 64; i++){
    
    grids = document.createElement("div");
    grids.setAttribute("data-number",`${i}`);
            for(let j = 1; j<= 64; j++){
                gridsver = document.createElement("div");
                gridsver.setAttribute("data-ver",`${j}`);
                grids.appendChild(gridsver);
            }
    container.appendChild(grids);
    }










