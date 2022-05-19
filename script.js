const body = document.querySelector("body");                //Selecting body,
const container = document.querySelector("#container");     // "container" div
const caseSketch = document.querySelector("#caseSketch");   // and "caseSketch" div

const newGrid = document.createElement("button");           // Creating 
const eraser = document.createElement("button");            // four 
const black = document.createElement("button");             // different
const rainbow = document.createElement("button");           // buttons


const buttons = document.createElement("div");    //This div needs to be the parent of the four buttons   

                                                  // |
                                                  // |
                                                  // v

buttons.appendChild(newGrid);                     // Putting all
buttons.appendChild(eraser);                      // these buttons
buttons.appendChild(black);                       // inside our
buttons.appendChild(rainbow);                     // "buttons" div

caseSketch.appendChild(buttons); // div "buttons" appended to the case of the Etch-a-sketch

newGrid.textContent = "New grid";  //Add text to the buttons
eraser.textContent = "Reset";
black.textContent = "Black mode";
rainbow.textContent = "Rainbow mode";



buttons.classList.add("botones");  // adding class for styling purposes, check styles.css file


    
// Grid Creation

function gridCreation(c){
    if (c == undefined) c = 16;  //if no argument is provided, we're going to have a 16x16 grid by default
    for(let i = 1; i<= c; i++){
    
        const grids = document.createElement("div");    //A horizontal box will be created on each iteration 
        grids.setAttribute("data-number",`${i}`);                                               
                for(let j = 1; j<= c; j++){
                    const gridsver = document.createElement("div"); //A vertical box will be created on each iteration, the final
                    gridsver.setAttribute("data-ver",`${j}`);       // result is this   _ _ _ _ _ _ _ _
                    grids.appendChild(gridsver);                    //                 |_|_|_|_|_|_|_|_|  
                }                                                   //                 |_|_|_|_|_|_|_|_|  
        
            container.appendChild(grids); //append new grid to container
    }
}

gridCreation();

var bandw = false;  // These variables are responsible for checking if we are in rainbow mode, or 
var cors = false;  // black mode. Also, we need to disable rainbow function when black mode is activated
                   // and viceversa. 

// hover effect
function hover(){
    const hovering = document.querySelectorAll("[data-ver]"); //selecting all the squares
// color hover
    rainbow.addEventListener("click",(e)=>{ //color button
            cors = true;
            bandw = false;
            hovering.forEach((valor) => {
            valor.addEventListener("mouseenter",(e)=>{ //random color RGB FORMAT

                    if (bandw) return; //If Black mode is activated (by pressing the black button), stop this function
                    e.target.style.backgroundColor = `#${1 + Math.round(Math.random()*100)}${1 + Math.round(Math.random()*100) }${1 + Math.round(Math.random()*100) }`;                    
                });
        });
        });

//Black hover
black.addEventListener("click",()=>{

    bandw = true;
    cors = false;
    hovering.forEach((valor) => {
        valor.addEventListener("mouseenter",(e)=>{ //Black color or White
                if (cors) return; //If Rainbow mode is activated (by pressing the rainbow button), stop this function
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


newGrid.addEventListener("click",()=>{
    
    let c = prompt("How many squares do you want?");
    if (c < 100){
        const divs = document.querySelectorAll("[data-number]");
        divs.forEach(div => { // This will replace
        div.remove();         // all previous divs with new ones in the same place
        })
        gridCreation(c);
        hover();
    }

    else alert("Please choose a number lower than 100");
    

})








