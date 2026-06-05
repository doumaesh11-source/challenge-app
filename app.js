let xp = localStorage.getItem("xp") ? Number(localStorage.getItem("xp")) : 0;
let level = localStorage.getItem("level") ? Number(localStorage.getItem("level")) : 1;
let streak = localStorage.getItem("streak") ? Number(localStorage.getItem("streak")) : 0;

const challenges = [
  "Read 5 pages 📖",
  "Do 10 push-ups 💪",
  "Learn 5 English words 📚",
  "Clean your room 🧹",
  "Walk for 10 minutes 🚶"
];

window.onload = function () {
  let todayChallenge = challenges[Math.floor(Math.random() * challenges.length)];
  document.getElementById("challenge").innerText = todayChallenge;
  updateUI();
};

function completeChallenge() {
  xp += 20;
  streak += 1;

  if (xp >= level * 100) {
    level += 1;
  }

  saveData();
  updateUI();
}

function updateUI() {
  document.getElementById("xp").innerText = xp;
  document.getElementById("level").innerText = level;
  document.getElementById("streak").innerText = streak;
}

function saveData() {
  localStorage.setItem("xp", xp);
  localStorage.setItem("level", level);
  localStorage.setItem("streak", streak);
  function newChallenge() {
  let todayChallenge = challenges[Math.floor(Math.random() * challenges.length)];
  document.getElementById("challenge").innerText = todayChallenge;
}
function getTodayDate() {
  return new Date().toDateString();
}

window.onload = function () {

  let savedDate = localStorage.getItem("date");
  let today = getTodayDate();

  if (savedDate !== today) {
    localStorage.setItem("date", today);
    newChallenge();
    function newChallenge() {
  let todayChallenge = challenges[Math.floor(Math.random() * challenges.length)];
  document.getElementById("challenge").innerText = todayChallenge;

  localStorage.setItem("challenge", todayChallenge);
}
  } else {
    document.getElementById("challenge").innerText =
      localStorage.getItem("challenge") || "No challenge";
  }

  updateUI();
};
let done = localStorage.getItem("done");

if (done === getTodayDate()) {
  alert("You already completed today's challenge 🔥");
  return;
}

localStorage.setItem("done", getTodayDate());
}