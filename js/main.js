
let stateOfPage = [
    {
        heading:"I can read your mind",
        paragraph:" ",
        paragraph2:" ",
        bottomButtonImage: 'img/arrow-right-circle.svg'
    },
    {
        heading:"Pick a number from 01-99",
        paragraph:"when you have your number click next",
        paragraph2:"click next to proceed",
        bottomButtonImage: 'img/arrow-counterclockwise.svg'
    },
    {
        heading:"Add both digits to get a new number",
        paragraph:"Ex:14 is 1 + 4 = 5",
        paragraph2:"click next to proceed",
        bottomButtonImage: 'img/arrow-counterclockwise.svg'
    },
    {
        heading:"Subtract your new number from the original number",
        paragraph:"Ex:14-5 = 9",
        paragraph2:"Note the symbol beside the number",
        bottomButtonImage: 'img/arrow-counterclockwise.svg'

    },
    {
        heading:"0-&, 1-@,2-$,3-B, ...",
        paragraph:"Find your new number. ",
        paragraph2:"Note the symbol beside the number",
        bottomButtonImage: 'img/arrow-counterclockwise.svg'
    },
    {
        heading:"&",
        paragraph:"Your symbol is:",
        paragraph2:"&",
        bottomButtonImage: 'img/arrow-counterclockwise.svg'
    },

];
let currentPage = 0;

const header = document.querySelector('.header');
const paragraph = document.querySelector('.paragraph');
const paragraph2 = document.querySelector('.paragraph2');

const image = document.querySelector('.image');

const next = document.querySelector('.next');
const goReset = document.querySelector('.goReset');

next.addEventListener('click', changePage);
goReset.addEventListener('click', goBtn);


function refresh(){  //runs on page load
    let objCurrentState = stateOfPage[currentPage];
    header.textContent = objCurrentState.heading;
    paragraph.textContent = objCurrentState.paragraph;
    paragraph2.textContent = objCurrentState.paragraph2;
    image.setAttribute('src', objCurrentState.bottomButtonImage) 
    
}

function changePage(){
    currentPage = currentPage+1;
    refresh()
    
}

function goBtn() {
    if(currentPage > 0){
        next.setAttribute("style", "display: none")
        currentPage = 0;
        refresh()
    }
    else{
        //imng siplay set
        next.setAttribute("style", "display: inline-block")
        changePage()
    }
}






function createSymbols() {
    let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '('];
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(i + " " + symbols[i % 9]);        
    }
    return symbols;
}




//function to change button image and state of page 
//on click 






