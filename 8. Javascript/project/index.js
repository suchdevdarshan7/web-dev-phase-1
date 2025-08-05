// function ChangeColorToBlue(){
//     document.querySelector(".container").style.backgroundColor="blue"
//     document.querySelector("h1").innerText = "Color is blue"
// }
// function ChangeColorToRed(){
//     document.querySelector(".container").style.backgroundColor="red"
//     document.querySelector("h1").innerText = "Color is red"
// }
// function ChangeColorToCrimson(){
//     document.querySelector(".container").style.backgroundColor="crimson"
//     document.querySelector("h1").innerText = "Color is Crimson"
// }
// function ChangeColorToSeaGreen(){
//     document.querySelector(".container").style.backgroundColor="seagreen"
//     document.querySelector("h1").innerText = "Color is SeaGreen"
// }
// function ChangeColorToBlack(){
//     document.querySelector(".container").style.backgroundColor="black"
//     document.querySelector("h1").innerText = "Color is Black"
//     document.querySelector("h1").style.color = "white";
// }


// function ChangeColor(e){
//     console.log(e)
// }

console.log("Hello world!")


paragraph = document.querySelectorAll('p');

console.log(paragraph)

function hideAllParagraph(){
    paragraph.forEach((el)=>{
        el.style.display = "none";
    })  
}




document.querySelectorAll('button').forEach((el,idx)=> el.addEventListener('click',(e)=> {

    hideAllParagraph()
    console.log("Working the button is clicked")
    color = e.target.value
    paragraph[idx].style.display = "block";

    color==="black" ? document.querySelector("h1").style.color = "white": document.querySelector("h1").style.color = "black";
            

    document.querySelector(".container").style.backgroundColor=color;
    document.querySelector("h1").innerText = `Color is ${color}`
}))



//System.out.println(" The number is "+num)
