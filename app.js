// Wait until DOM is loaded

    let questionEl = document.querySelector(".question");
    let optionsEl = document.querySelectorAll(".option");
    let progressEl = document.getElementById("progress");
    let skipBtn = document.getElementById("skip-btn");
    let nextBtn = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;
let selectedAnswer = 0;
const TOTAL_QUESTIONS= 10;

function shuffleArray(array){
    //create a copy so we don't modify the original array
    let shuffled = [...array]
    // loop from end to the begaining 
    for(let i = shuffled.length-1; i>0; i--){
        let j = Math.floor(Math.random()*(i+1));
        
        // swap elements at position i and j 
        [shuffled[i],shuffled[j]] =[shuffled[j],shuffled[i]]
    }
    return shuffled;
    
}
let quizQuestions= shuffleArray(questions).slice(0,TOTAL_QUESTIONS)

function loadQuestion(){
    // resetting answers
    
    selectedAnswer = null


}
 