/* -----------------------------------------------------
   ADVENTSKALENDER – PUNKTE, AUFGABEN, SPEICHERN
----------------------------------------------------- */

// Aufgaben aus deiner Liste
const tasks = [
  { day: 1, question: "Drei aufeinanderfolgende ganze Zahlen ergeben zusammen 72. Welche ist die mittlere Zahl?", options: ["23", "24", "25", "26"], answer: 1 },
  { day: 2, question: "Welche dieser Zahlen ist das 7-fache der Sumume ihrer Ziffern?", options: ["42", "53", "39", "70"], answer: 0 },
  { day: 3, question: "Ein Vater ist dreimal so alt wie sein Sohn. In 6 Jahren ist er doppelt so alt. Wie alt ist der Vater jetzt?", options: ["12", "18", "24", "30"], answer: 1 },
  { day: 4, question: "Welchen Winkel bilden Stunden- und Minutenzeiger um 3:15 Uhr?", options: ["0°", "7,5°", "15°", "22,5°"], answer: 1 },
  { day: 5, question: "Ein Schachbrett verliert zwei gegenüberliegende Eckfelder. Kann man es mit Dominosteinen komplett abdecken?", options: ["Ja","Nein","Nur diagonal","Nur teilweise"], answer: 1 },
  { day: 6, question: "Mit einem 5-Liter- und einem 3-Liter-Gefäß soll man genau 4 Liter abmessen. Ist das möglich?", options: ["Ja","Nein","Nur mit 6-Liter-Gefäß","Nur mit Waage"], answer: 0 },
  { day: 7, question: "Welche drei Zahlen folgen: 2,3,5,7,11,...?", options: ["12,14,16","13,17,19","9,15,21","14,18,22"], answer: 1 },
  { day: 8, question: "Zwei ungleichmäßig brennende Seile dauern je 60 Minuten. Wie misst man 45 Minuten?", options: ["Beide an einem Ende anzünden","Eines an beiden Enden, eines an einem Ende","Nur eines anzünden","Schätzen"], answer: 1 },
  { day: 9, question: "Vier Personen (1,2,7,10 min) müssen über eine Brücke. Wie schnell minimal?", options: ["15","16","17","18"], answer: 2 },
  { day: 10, question: "Welche Zahl erhält man beim 1089-Trick?", options: ["999","1089","1001","1111"], answer: 1 },
  { day: 11, question: "Eine Zahl mal 2 plus 6 ergibt dasselbe wie dieselbe Zahl mal 3 minus 1. Welche?", options: ["5","6","7","8"], answer: 2 },
  { day: 12, question: "Zwei aufeinanderfolgende Quadratzahlen ergeben 365. Welche ist die größere?", options: ["13²","14²","15²","12²"], answer: 1 },
  { day: 13, question: "Rechteck Umfang 20, Länge 2 länger als Breite. Fläche?", options: ["16","20","24","28"], answer: 2 },
  { day: 14, question: "Zweistellige Zahl minus Ziffernumkehrung = 9. Was stimmt?", options: ["Ziffern gleich","Zehner 1 größer","Einer 1 größer","Zehner 2 größer"], answer: 1 },
  { day: 15, question: "Mindestens ein Kind ist Junge. Wahrscheinlichkeit, dass beide Jungen sind?", options: ["1/4","1/3","1/2","2/3"], answer: 1 },
  { day: 16, question: "x/2 + x/3 = 10. x=?", options: ["8","10","12","15"], answer: 2 },
  { day: 17, question: "Wenn die Ziffernsumme durch 9 teilbar ist, dann ist...", options: ["Die Zahl durch 9 teilbar","Ungerade","Gerade","Prim"], answer: 0 },
  { day: 18, question: "In einem 3×3 magischen Quadrat (1–9) steht die 5 immer...?", options: ["Oben links","In der Mitte","Unten rechts","Außen"], answer: 1 },
  { day: 19, question: "Zwei Züge fahren 40 und 20 km/h aufeinander zu (60 km). Wann treffen sie sich?", options: ["30 Min","45 Min","1 h","1.5 h"], answer: 2 },
  { day: 20, question: "3 Schalter, 1 Lampe in anderem Raum. Wie herausfinden?", options: ["Zufall","Einen anschalten + fühlen","Alle anschalten","Nacheinander probieren"], answer: 1 },
  { day: 21, question: "Ich habe Tasten, aber keine Schlösser; ich habe Räume, aber keine Türen. Was bin ich?", options: ["Computer","Tastatur","Klavier","Telefon"], answer: 2 },
  { day: 22, question: "1,4,9,16,...? Nächste Zahl?", options: ["20","24","25","36"], answer: 2 },
  { day: 23, question: "Springer auf 4×4: alle Felder einmal besuchen?", options: ["Ja","Nein","Nur diagonal","Nur Mitte"], answer: 1 },
  { day: 24, question: "Warum kann man 8×8 mit 2 entfernten Ecken nicht belegen?", options: ["Zu viele Steine","Farbenverteilung falsch","Ungerade Felder","Dominosteine zu groß"], answer: 1 }
];

// Score
let score = Number(localStorage.getItem("score")) || 0;
document.getElementById("score").textContent = score;

function updateScoreUI() {
  document.getElementById("score").textContent = score;
  localStorage.setItem("score", score);
}

function flash(text) {
  const f = document.getElementById("flash");
  f.textContent = text;
  f.style.opacity = 1;
  setTimeout(() => (f.style.opacity = 0), 2000);
}

/* -----------------------------------------------------
   KALENDER BAUEN
----------------------------------------------------- */
const calendar = document.getElementById("calendar");
const today = new Date().getDate();

tasks.forEach(t => {
  const box = document.createElement("div");
  box.className = "day";
  box.textContent = t.day;

  // Türchen sperren?
  if (t.day > today) {
    box.classList.add("locked");
  }

  box.onclick = () => {
    if (t.day > today) return;
    openTask(t);
  };

  calendar.appendChild(box);
});

/* -----------------------------------------------------
   AUFGABE ÖFFNEN
----------------------------------------------------- */
const modal = document.getElementById("taskModal");
const title = document.getElementById("taskTitle");
const question = document.getElementById("taskQuestion");
const opts = document.getElementById("taskOptions");

function openTask(task) {
  title.textContent = "Tag " + task.day;
  question.textContent = task.question;
  opts.innerHTML = "";

  task.options.forEach((o, i) => {
    const btn = document.createElement("button");
    btn.textContent = o;
    btn.onclick = () => checkAnswer(task, i);
    opts.appendChild(btn);
  });

  modal.classList.remove("hidden");
}

document.getElementById("closeTask").onclick = () =>
  modal.classList.add("hidden");

/* -----------------------------------------------------
   ANTWORT ÜBERPRÜFEN
----------------------------------------------------- */
function checkAnswer(task, picked) {
  const day = task.day;
  const lastVisit = localStorage.getItem("visitDay" + day);
  const firstTime = !lastVisit;

  let correct = picked === task.answer;
  let points = 0;

  if (firstTime) {
    // rechtzeitig
    points = correct ? 20 : -20;
  } else {
    // verspätet
    points = correct ? 5 : -5;
  }

  score += points;
  if (score < 0) score = 0;
  updateScoreUI();

  flash(
    correct
      ? `✔️ Richtig! ${points > 0 ? "+" + points : points} Punkte`
      : `❌ Falsch! ${points} Punkte`
  );

  localStorage.setItem("visitDay" + day, "done");

  modal.classList.add("hidden");
}

/* -----------------------------------------------------
   NAVIGATION
----------------------------------------------------- */

document.getElementById("homeBtn").onclick = () => {
  calendar.classList.remove("hidden");
  document.getElementById("rewards").classList.add("hidden");
};

document.getElementById("rewardsBtn").onclick = () => {
  calendar.classList.add("hidden");
  document.getElementById("rewards").classList.remove("hidden");
};

/* -----------------------------------------------------
   EASTER EGG 1 – Unsichtbarer Punkt (hover 1s)
----------------------------------------------------- */
const egg1 = document.getElementById("easter1");
let egg1Found = false;

egg1.addEventListener("mouseenter", () => {
  egg1.style.transitionDelay = "1s";
});
egg1.addEventListener("mouseleave", () => {
  egg1.style.transitionDelay = "0s";
});

egg1.onclick = () => {
  if (egg1Found) return;
  egg1Found = true;

  egg1.classList.add("active");

  const bonus = Math.floor(Math.random() * 41) + 10; // 10–50
  score += bonus;
  updateScoreUI();
  flash(`✨ Geheim! +${bonus} Punkte`);
};

/* -----------------------------------------------------
   EASTER EGG 2 – Schneeflocke oben links
----------------------------------------------------- */
const snowEgg = document.getElementById("snowEgg");
let snowActive = false;

snowEgg.onclick = () => {
  if (snowActive) return;
  snowActive = true;

  document.body.style.transition = "3s";
  document.body.style.background = "white";
};

/* -----------------------------------------------------
   EASTER EGG 3 – Logo
----------------------------------------------------- */
document.getElementById("siteTitle").onclick = () => {
  score += 5;
  updateScoreUI();
  flash("⭐ +5 Punkte!");
};

/* -----------------------------------------------------
   GLÜCKSRAD / GAMBLE
----------------------------------------------------- */

document.getElementById("gambleBtn").onclick = () => {
  document.getElementById("wheelModal").classList.remove("hidden");
  drawWheel();
};

document.getElementById("closeWheel").onclick = () =>
  document.getElementById("wheelModal").classList.add("hidden");

// Werte des Rads
const wheelValues = [-20, -10, -5, 5, 10, 20, 30, 50];
let wheelRotation = 0;

function drawWheel() {
  const canvas = document.getElementById("wheelCanvas");
  const ctx = canvas.getContext("2d");

  const count = wheelValues.length;
  const angle = (2 * Math.PI) / count;

  for (let i = 0; i < count; i++) {
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.fillStyle = i % 2 === 0 ? "#90caf9" : "#64b5f6";
    ctx.arc(150, 150, 150, i * angle, (i + 1) * angle);
    ctx.fill();

    ctx.save();
    ctx.translate(150, 150);
    ctx.rotate(i * angle + angle / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "black";
    ctx.font = "18px sans-serif";
    ctx.fillText(wheelValues[i] + "P", 130, 5);
    ctx.restore();
  }
}

// Drehen
document.getElementById("spinBtn").onclick = () => {
  let spinTime = 0;
  const spinDuration = 3000;
  const startRotation = wheelRotation;
  const extra = Math.random() * 2000 + 2000;

  function animate(t) {
    if (!spinTime) spinTime = t;
    const progress = t - spinTime;

    wheelRotation = ease(progress, startRotation, extra, spinDuration);
    document.getElementById("wheelCanvas").style.transform =
      `rotate(${wheelRotation}deg)`;

    if (progress < spinDuration) {
      requestAnimationFrame(animate);
    } else {
      stopWheel();
    }
  }

  requestAnimationFrame(animate);
};

function ease(t, b, c, d) {
  t /= d;
  t--;
  return c * (t * t * t + 1) + b;
}

function stopWheel() {
  const degrees = wheelRotation % 360;
  const slice = 360 / wheelValues.length;
  const index = Math.floor((360 - degrees) / slice) % wheelValues.length;

  const result = wheelValues[index];
  score += result;
  if (score < 0) score = 0;
  updateScoreUI();

  flash(result > 0 ? `🎉 +${result} Punkte!` : `💀 ${result} Punkte!`);
}
