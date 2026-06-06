const challenges = [
  "Do 10 push-ups 💪",
  "Learn 5 English words 📚",
  "Drink 2 liters of water 💧",
  "Read 10 pages of a book 📖",
  "Walk for 15 minutes 🚶"
];

let xp = localStorage.getItem("xp") || 0;
let streak = localStorage.getItem("streak") || 0;

document.querySelector(".xp").textContent = `XP: ${xp}`;
document.querySelector(".streak").textContent = `Streak: ${streak} 🔥`;

function completeChallenge() {
  xp = Number(xp) + 10;
  streak = Number(streak) + 1;

  localStorage.setItem("xp", xp);
  localStorage.setItem("streak", streak);

  document.querySelector(".xp").textContent = `XP: ${xp}`;
  document.querySelector(".streak").textContent = `Streak: ${streak} 🔥`;

  const randomChallenge =
    challenges[Math.floor(Math.random() * challenges.length)];

  document.getElementById("challenge").textContent = randomChallenge;
}