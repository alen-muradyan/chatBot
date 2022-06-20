const state = {
    'Hi': 'Hello!',
    'Hello': 'Hi there !',
    'How are you?': 'I am fine. Thanks.',
    'What’s up?': 'Everything is OK.',
    'Find me a hotel': 'Here are some hotels.',
    'Tell me something': 'I am a robot.',
    'I have a question': 'Hmm. I am waiting.',
    'How can you help me?': 'I am all ears.',
    "Are you human?": 'No! I am a robot',
    "Are you a robot?": 'Yes I am :)',
    "What is your name?": 'My name is Mamikon',
    "How old are you?": 'I have just borned',
    "What's your age?": 'Hmm. i have no age',
    "What do you do with my data?": 'I just save it for myself',
    "Do you save what I say?": 'Yes sir',
    "Who made you?": "I was made by Alen Muradyan",
    "Which languages can you speak?": 'Only english'
};

const userInput = document.getElementById("txtinput");
const btnSend = document.querySelector("span");
const chatField = document.getElementById("chat-body");
const btnAddQuest = document.getElementById("btn-newQuest");
const ul = document.querySelector("ul");

//# Event region
btnSend.addEventListener("click", action);
userInput.addEventListener("keypress", function (e) {
    if(e.key == "Enter") action();
});
btnAddQuest.addEventListener("click", ownQuestionGenerator);


// rendering 
function action() {
    let validInput = userInput.value.trim();
    if(validInput != "") {
        let div = document.createElement("div");
    
        div.innerText = userInput.value;
        div.classList.add("msg-user");
        chatField.append(div);

        setTimeout(() => {
            robotAnswerGenerator();
        }, 600)
    }
};

function robotAnswerGenerator() {
    let div = document.createElement("div");

    div.innerText = state[userInput.value] ? state[userInput.value] : "Sorry i can't get it  :(";
    div.classList.add("msg-robot");

    chatField.append(div);
    userInput.value = "";
};

function ownQuestionGenerator() {
    let quest = document.querySelector("#quest");
    let answer = document.querySelector("#answer");

    state[quest.value] = answer.value;
    quest.value = "";
    answer.value = "";
}

for(let key in state) {             // display questions you can ask
    let li = document.createElement("li");
    li.innerText = key;
    ul.append(li)
};