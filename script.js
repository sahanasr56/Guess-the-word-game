let letters=document.querySelectorAll("input");
let enter=document.querySelector(".enter");
let val1=document.getElementById("first").value;
let result=document.querySelector(".result");
let pendingChance=document.querySelector(".chances");
let startNewGame=document.querySelector(".new");
let count=3;

const wordSelect=()=>{
    const wordsList=["world", "paper", "style", "stone", "ghost", "plays", "power", "light", "space","metal", "group", "guess", "magic", "empty", "value", "first", "lucky", "shift", "eight", "shine","mouth","smile"];
    let ranNum=Math.floor(Math.random()*(wordsList.length));
    return wordsList[ranNum];
}

let givenWord=wordSelect();

const setWord=(fixedLetter)=>{
document.getElementById("first").value=(fixedLetter[0]).toUpperCase();
document.getElementById("fourth").value=fixedLetter[3];
}

setWord(givenWord);

const getUserWord=()=>{
    let userWord="";
    letters.forEach((letter)=>{
        let id=letter.getAttribute("id");
        let val=document.getElementById(`${id}`).value;
        if(val!=""){
            userWord=userWord+val; 
        }     
    })
    console.log(userWord.toLowerCase())
    return userWord.toLowerCase();
}

const checkResult=(res)=>{
    if(res===givenWord){
        result.innerText="Hurry! You win";
        result.style.color="green";
        startNewGame.classList.remove("hide");
        pendingChance.innerText=``
        enter.disabled=true;
    }else{
        if(count===0){
            startNewGame.classList.remove("hide");
            pendingChance.innerText="Oops! You have lost all the chances:) \n Please start the New Game!"
        }else{
            result.innerText="Wrong answer:)";
        result.style.color="red";
        pendingChance.innerText=`You have ${count} chances left`
        }
        
    }
}

enter.addEventListener("click", ()=>{
     if(count>0){
        let word=getUserWord();
        if(word.length===5){
            count--;
            checkResult(word);
        }
    } 
})

startNewGame.addEventListener("click",()=>{
    count=3;
    startNewGame.classList.add("hide");
    result.innerText=""
    pendingChance.innerText=`You will have 3 chances`;
    givenWord=wordSelect();
    enter.disabled=false;
    setWord(givenWord);
    document.getElementById("second").value="";
    document.getElementById("third").value="";
    document.getElementById("fifth").value="";
})