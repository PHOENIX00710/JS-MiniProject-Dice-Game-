const mainHeading=document.querySelector('.main-info');
const dice1=document.querySelector('.player-1 img');
const dice2=document.querySelector('.player-2 img');
const button=document.querySelector('.btn');

class Dice{
    constructor(i){
        this.index=i;
        this.attribute=`./images/dice${i}.png`;
    }
};

let arr=[];
for(let j=1;j<=6;j++){
    arr[j]=new Dice(j);
}

function updateWinner(i){
    if(i == 0){
        mainHeading.innerHTML=`Draw!! Try Again`;
        button.innerHTML=`<h3>RESET</h3>`;
    } 
    else if(i == 4){
        mainHeading.innerHTML=`Lets Play!!`;
        button.innerHTML=`<h3>PLAY</h3>`;
    }
    else{
        mainHeading.innerHTML=`Winner is Player${i} <img src="./images/red-flag.png" alt="victory flag">`;
        button.innerHTML=`<h3>RESET</h3>`;
    }
}

function updateDices(num1,num2){
    dice1.setAttribute("src",arr[num1].attribute);
    dice2.setAttribute('src',arr[num2].attribute);
}

button.addEventListener('click',function(e){
    // Randomly generate numbers
    let num1=Math.floor(Math.random() * 6) + 1;
    let num2=Math.floor(Math.random() * 6) + 1;
    let greater=0;
    if(num1 != num2){
        greater = num1>num2 ? 1:2;
    }
    if(e.target.textContent == 'RESET'){
        num1=num2=6;
        greater=4;
    }
    updateDices(num1,num2);
    updateWinner(greater);
})

