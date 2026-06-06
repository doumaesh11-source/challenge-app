console.log("JS loaded successfully");
const challenges = {

  fitness: [
    "Do 10 push-ups 💪",
    "Do 20 squats 🦵",
    "Run for 10 minutes 🏃",
    "Walk for 15 minutes 🚶",
    "Stretch for 5 minutes 🤸"
  ],

  learning: [
    "Learn 5 English words 📚",
    "Read 10 pages 📖",
    "Study for 20 minutes 🎓",
    "Watch an educational video 🎥",
    "Practice English for 15 minutes 🇬🇧"
  ],

  money: [
    "Save 100 DZD today 💰",
    "Write a budget 📝",
    "Avoid buying snacks today 🍫",
    "Track your expenses 📊",
    "Learn one finance tip 💵"
  ],

  productivity: [
    "Clean your desk 🧹",
    "Plan tomorrow 📝",
    "Organize your files 📂",
    "Write 3 goals 🎯",
    "No social media for 1 hour 📵"
  ],

  social: [
    "Call a family member 📞",
    "Help someone today 🤝",
    "Send a positive message 😊",
    "Talk to a new person 👋",
    "Thank someone ❤️"
  ]
};

let xp = parseInt(localStorage.getItem("xp")) || 0;
let streak = parseInt(localStorage.getItem("streak")) || 0;

document.querySelector(".xp").textContent = `XP: ${xp}`;
document.querySelector(".streak").textContent = `Streak: ${streak} 🔥`;

function completeChallenge() {
  xp += 10;
  streak += 1;

  localStorage.setItem("xp", xp);
  localStorage.setItem("streak", streak);

  document.querySelector(".xp").textContent = `XP: ${xp}`;
  document.querySelector(".streak").textContent = `Streak: ${streak} 🔥`;

  const list = challenges.fitness;

  const randomChallenge =
    list[Math.floor(Math.random() * list.length)];

  document.getElementById("challenge").textContent = randomChallenge;
}