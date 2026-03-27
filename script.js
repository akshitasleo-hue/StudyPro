// OPEN SUBJECT
function openSubject(sub){
  let cls = document.getElementById("classSelect").value;

  localStorage.setItem("class", cls);
  localStorage.setItem("subject", sub);

  window.location.href = "subject.html";
}

// TOPICS DATA
const topicsData = {
  maths: ["Addition","Algebra","Geometry","Trigonometry"],
  english: ["Grammar","Reading","Writing","Vocabulary"],
  science: ["Physics","Chemistry","Biology"],
  social: ["History","Geography","Civics"],
  gk: ["India","World","Sports","Science GK"],
  computer: ["Basics","Coding","Internet","AI"]
};

// LOAD TOPICS
function loadTopics(){
  let cls = localStorage.getItem("class");
  let sub = localStorage.getItem("subject");

  document.getElementById("title").innerText =
    `Class ${cls} - ${sub}`;

  let container = document.getElementById("topics");
  container.innerHTML = "";

  topicsData[sub].forEach(topic=>{
    let div = document.createElement("div");
    div.className = "card";
    div.innerText = topic;

    div.onclick = ()=>{
      localStorage.setItem("topic", topic);
      window.location.href = "quiz.html";
    };

    container.appendChild(div);
  });
}

// QUIZ DATA (SAMPLE FOR ALL CLASSES)
const quizData = {
  Addition: [
    {q:"5+3?", options:["6","7","8"], ans:"8"},
    {q:"10+5?", options:["15","14","13"], ans:"15"}
  ],
  Algebra: [
    {q:"x+2=5, x=?", options:["2","3","4"], ans:"3"}
  ],
  Geometry: [
    {q:"Triangle sides?", options:["3","4","5"], ans:"3"}
  ],
  Physics: [
    {q:"Force unit?", options:["Newton","Watt","Volt"], ans:"Newton"}
  ],
  Biology: [
    {q:"Heart pumps?", options:["Blood","Water","Air"], ans:"Blood"}
  ],
  History: [
    {q:"India independence year?", options:["1947","1950","1930"], ans:"1947"}
  ]
};

let index = 0;

// START QUIZ
function startQuiz(){
  let topic = localStorage.getItem("topic");
  document.getElementById("quizTitle").innerText = topic;
  index = 0;
  loadQuestion();
}

// LOAD QUESTION
function loadQuestion(){
  let topic = localStorage.getItem("topic");

  let list = quizData[topic] || quizData["Addition"];
  let q = list[index % list.length];

  document.getElementById("question").innerText = q.q;

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt=>{
    let btn = document.createElement("button");
    btn.innerText = opt;

    btn.onclick = ()=>{
      checkAnswer(opt, q.ans);
    };

    optionsDiv.appendChild(btn);
  });

  // VIDEO (same demo)
  document.getElementById("video").src =
    "https://www.youtube.com/embed/dQw4w9WgXcQ";

  // AI EXPLAIN
  document.getElementById("aiExplain").innerText =
    `Explanation: ${topic} is an important concept. Practice more to master it!`;
}

// CHECK ANSWER
function checkAnswer(ans, correct){
  let result = document.getElementById("result");

  if(ans === correct){
    result.innerText = "Correct ✅";
  } else {
    result.innerText = "Wrong ❌";
  }
}

// NEXT
function nextQuestion(){
  index++;
  loadQuestion();
}
