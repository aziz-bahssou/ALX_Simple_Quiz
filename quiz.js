function checkAnswer() {
    const correctAnswer = "4";
    const selectedOption = document.querySelector("input[name='quiz']:checked");
    const userAnswer = selectedOption ? selectedOption.value: null;
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done.";
        feedback.style.color= 'green';
    }else {
        feedback.textContent = "thar's incorrect. Try again!"
        feedback.style.color= 'red'
    }
}
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);

