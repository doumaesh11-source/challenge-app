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

function generateChallenge() {
  const category = document.getElementById("category").value;

  let completed =
    JSON.parse(localStorage.getItem(category)) || [];

  let available = challenges[category].filter(
    challenge => !completed.includes(challenge)
  );

  if (available.length === 0) {
    document.getElementById("challenge").textContent =
      "🎉 Congratulations! You completed all challenges in this category.";

    return;
  }

  const randomChallenge =
    available[Math.floor(Math.random() * available.length)];

  document.getElementById("challenge").textContent =
    randomChallenge;
}

function completeChallenge() {
  const category = document.getElementById("category").value;

  const currentChallenge =
    document.getElementById("challenge").textContent;

  let completed =
    JSON.parse(localStorage.getItem(category)) || [];

  if (!completed.includes(currentChallenge)) {
    completed.push(currentChallenge);

    localStorage.setItem(
      category,
      JSON.stringify(completed)
    );

    xp += 10;
    streak += 1;

    localStorage.setItem("xp", xp);
    localStorage.setItem("streak", streak);

    document.querySelector(".xp").textContent =
      `XP: ${xp}`;

    document.querySelector(".streak").textContent =
      `Streak: ${streak} 🔥`;
  }

  generateChallenge();
}

generateChallenge();