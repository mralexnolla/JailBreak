const words = ["roberta", "catherine", "victoria", "faisal", "emmanual"];

//function to shuffle the word
const shuffleword = (word) => {
    let shuffledword = '';
    //Making word into array 
    word = word.split("")

    while(word.length > 0){
      //keep shuffling when the word lenth is greater than 0
      let randIndex = Math.floor(Math.random() * word.length);

      //putting random letter in shuffledword
      shuffledword += word[randIndex];
      //remove one letter on each loop from array of letters
      word.splice(randIndex, 1)
    }

    return shuffledword
}
  
  //pick any random from the list at random
  let randomWord = words[Math.floor(Math.random()*words.length)]
  console.log(randomWord)
  
  //shuffle the word 3 times 
  let shuf1 = shuffleword(randomWord)
  let shuf2 = shuffleword(shuf1)
  let shuf3 = shuffleword(shuf2)
  
  //final shuffle
  console.log(shuf3)
  
  let numberoftries = 3;
  let timeleft = 10;

  let timer;

  //displaying shuffled word
  const shuffledWord = document.getElementById('word');
  shuffledWord.textContent = shuf3;

  const inputField = document.getElementById('inputField');
  const submitButton = document.getElementById('submitButton');
  const trialsLeftDisplay = document.getElementById('trialsLeft');
  const timerDisplay = document.getElementById('timerDisplay');
  const messageDisplay = document.getElementById('messageDisplay');

  //timer

  if(!timer){
    timer = setInterval(() => {
      timeleft--;
      if(timeleft === 0){
        clearInterval(timer)
      //console.log(`You have ${timeleft} second left`);
        timerDisplay.textContent = `Time left: ${timeleft}`;
        messageDisplay.innerText = "Time Up"
        
      }

      else if(timeleft == 1){
        timerDisplay.textContent = `Time left: ${timeleft}`;
      }else{
        //console.log(`You have ${timeleft} seconds left`);
        timerDisplay.textContent = `Time left: ${timeleft}`;
      }
    }, 1000);
  }

  

 
submitButton.addEventListener('click', function(){
    if(numberoftries === 0){
        return;
    }

    if(inputField.value === randomWord){
        messageDisplay.textContent = "Correct guess";
        inputField.value = '';
        clearInterval(timer)
        submitButton.addEventListener('click',()=>{
          location.reload()
        })
        // submitButton.setAttribute('disabled', 'disabled')
    }else{
        numberoftries--;
        trialsLeftDisplay.textContent = `Trials left: ${numberoftries}`;
        if(numberoftries === 0){
            messageDisplay.textContent = `You lost! the word is ${randomWord}`;
            inputField.setAttribute('disabled', 'disabled');

            submitButton.addEventListener('click',()=>{
              location.reload()
            })
            clearInterval(timer)
        }else{
            messageDisplay.textContent = `Incorrect. Try again`;
            inputField.value = '';
        }

    }
})

trialsLeftDisplay.textContent = `Trials left: ${numberoftries}`;
timerDisplay.textContent = `Time left: ${timeleft}`
  
  
  