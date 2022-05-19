const body = document.querySelector("body");                //Selecting body,
const container = document.querySelector("#container");     // "container" div
const caseSketch = document.querySelector("#caseSketch");   // and "caseSketch" div

const button = document.createElement("button");           // Creating 
const eraser = document.createElement("button");           // four 
const blackandwhite = document.createElement("button");    // different
const colors = document.createElement("button");           // buttons


const buttons = document.createElement("div");    //This div needs to be the parent of the four buttons   

                                                  // |
                                                  // |
                                                  // v

buttons.appendChild(button);                      // Putting all
buttons.appendChild(eraser);                      // these buttons
buttons.appendChild(blackandwhite);               // inside our
buttons.appendChild(colors);                      // "buttons" div

caseSketch.appendChild(buttons); // div "buttons" appended to the case of the Etch-a-sketch

button.textContent = "New grid";  //Add text to the buttons
eraser.textContent = "Reset";
blackandwhite.textContent = "Black and White mode";
colors.textContent = "Color mode";



buttons.classList.add("botones");  // adding class for styling purposes, check styles.css file


    
// Grid Creation

function gridCreation(c){
    if (c == undefined) c = 16;  //if no argument is provided, we're going to have a 16x16 grid by default
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
    const hovering = document.querySelectorAll("[data-ver]"); //selecting all the squares
// color hover
    colors.addEventListener("click",(e)=>{ //color button
            
            cors = true;
            bandw = false;
            hovering.forEach((valor) => {
            valor.addEventListener("mouseenter",(e)=>{ //random color RGB FORMAT
                    if (bandw) return;
                    e.target.style.backgroundColor = `#${1 + Math.round(Math.random()*100)}${1 + Math.round(Math.random()*100) }${1 + Math.round(Math.random()*100) }`;                    
                });
        });
        });

//Black and white hover
blackandwhite.addEventListener("click",()=>{

    bandw = true;
    cors = false;
    hovering.forEach((valor) => {
        valor.addEventListener("mouseenter",(e)=>{ //Black color or White
                if (cors) return;
                e.target.style.backgroundColor = "#000000";               
    })
    });
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



var bandw = false;

var cors = false;




