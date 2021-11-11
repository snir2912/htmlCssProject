(function() {
    function buildQuiz() {
        // variable to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                // variable to store the list of possible answers
                const answers = [];

                // and for each available answer...
                for (letter in currentQuestion.answers) {

                    // ...add an HTML radio button
                    answers.push(
                        `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                    );
                }

                // add this question and its answers to the output
                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
                );
            }
        );

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = 'green';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [{
            question: "In what year was the carnival first held?",
            answers: {
                a: "1857",
                b: "1945",
                c: "1768",
                d: "1998"
            },
            correctAnswer: "a"
        },
        {
            question: "How much is a ticket to the festival?",
            answers: {
                a: "12$",
                b: "10$",
                c: "FREE",
                d: "32$"
            },
            correctAnswer: "c"
        },
        {
            question: "Where do we celebrate the festival (city)?",
            answers: {
                a: "New Orleans",
                b: "New York",
                c: "New Jersey",
                d: "Las Vegas"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the origin of the festival?",
            answers: {
                a: "A holiday that originated in the Jewish tradition",
                b: "A holiday that originated in the Christian tradition",
                c: "A holiday that originated in the Muslim tradition",
                d: "A holiday that originated in the Indian tradition"
            },
            correctAnswer: "b"
        },
        {
            question: "What does the name Mardi Gras mean?",
            answers: {
                a: "Festive Sunday",
                b: "Lean Tuesday",
                c: "Fat Tuesday",
                d: "Happy grass day"
            },
            correctAnswer: "c"
        },
        {
            question: "What does the festival mark?",
            answers: {
                a: "Mount Mitzvah of Jesus",
                b: "St. Mardi Gras' birthday",
                c: "Christian abstinence heralds for 40 days before Easter",
                d: "Fat People's Day"
            },
            correctAnswer: "c"
        },
        {
            question: "What about New Orleans and the Mardi Gras Festival?",
            answers: {
                a: "There are a lot of fat people in New Orleans",
                b: "Hag is celebrated in New Orleans because of the beautiful city",
                c: "The holiday was invented in New Orleans",
                d: "The holiday was brought to New Orleans by the French Catholic founders as a religious holiday"
            },
            correctAnswer: "d"
        },
        {
            question: "In what year was the mayor of New Orleans born, LaToya Cantrell?",
            answers: {
                a: "1972",
                b: "1980",
                c: "1978",
                d: "1975"
            },
            correctAnswer: "d"
        }
    ];

    // Kick things off
    buildQuiz();

    // Event listeners
    submitButton.addEventListener('click', showResults);
})();