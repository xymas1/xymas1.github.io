/* ============================
   Adventskalender + Gambling
   ============================ */

/* ---------- Aufgaben (24) ---------- */
const tasks = [
  {"day":1,"question":"Drei aufeinanderfolgende ganze Zahlen ergeben zusammen 72. Welche ist die mittlere Zahl?","options":["23","24","25","26"],"answer":1},
  {"day":2,"question":"Welche dieser Zahlen ist das 7-fache der Summe ihrer Ziffern?","options":["42","53","39","70"],"answer":0},
  {"day":3,"question":"Ein Vater ist dreimal so alt wie sein Sohn. In 6 Jahren ist er doppelt so alt. Wie alt ist der Vater jetzt?","options":["12","18","24","30"],"answer":1},
  {"day":4,"question":"Welchen Winkel (in Grad) bilden Stunden- und Minutenzeiger um 3:15 Uhr?","options":["0°","7,5°","15°","22,5°"],"answer":1},
  {"day":5,"question":"Ein Schachbrett (8×8) verliert zwei gegenüberliegende Eckfelder. Kann man es mit Dominosteinen komplett abdecken?","options":["Ja","Nein","Nur diagonal","Nur teilweise"],"answer":1},
  {"day":6,"question":"Mit einem 5-Liter- und einem 3-Liter-Gefäß soll man genau 4 Liter abmessen. Ist das möglich?","options":["Ja","Nein","Nur mit 6-Liter-Gefäß","Nur mit Waage"],"answer":0},
  {"day":7,"question":"Welche drei Zahlen folgen in der Reihe: 2, 3, 5, 7, 11, ...?","options":["12, 14, 16","13, 17, 19","9, 15, 21","14, 18, 22"],"answer":1},
  {"day":8,"question":"Zwei ungleichmäßig brennende Seile dauern je 60 Minuten. Wie misst man 45 Minuten?","options":["Beide an einem Ende anzünden","Eines an beiden Enden, eines an einem Ende","Nur eines anzünden","Zufällig schätzen"],"answer":1},
  {"day":9,"question":"Vier Personen (1, 2, 7, 10 min) müssen mit einer Taschenlampe über eine Brücke. Wie schnell schaffen sie es minimal?","options":["15 min","16 min","17 min","18 min"],"answer":2},
  {"day":10,"question":"Welche Zahl erhält man immer bei dem klassischen '1089-Trick' mit dreistelligen Zahlen (absteigende Ziffern)?","options":["999","1089","1001","1111"],"answer":1},
  {"day":11,"question":"Eine Zahl mal 2 plus 6 ergibt dasselbe wie dieselbe Zahl mal 3 minus 1. Welche Zahl ist das?","options":["5","6","7","8"],"answer":2},
  {"day":12,"question":"Die Summe zweier aufeinanderfolgender Quadratzahlen ergibt 365. Wie lautet die größere Zahl?","options":["13²","14²","15²","12²"],"answer":1},
  {"day":13,"question":"Ein Rechteck hat den Umfang 20 cm. Die Länge ist 2 cm länger als die Breite. Wie groß ist die Fläche?","options":["16 cm²","20 cm²","24 cm²","28 cm²"],"answer":2},
  {"day":14,"question":"Eine zweistellige Zahl minus ihrer Ziffernumkehrung ergibt 9. Welche Aussage stimmt?","options":["Ziffern sind gleich","Zehnerziffer ist 1 größer","Einerziffer ist 1 größer","Zehnerziffer ist 2 größer"],"answer":1},
  {"day":15,"question":"Mindestens eines von zwei Kindern ist ein Junge. Wie groß ist die Wahrscheinlichkeit, dass beide Jungen sind?","options":["1/4","1/3","1/2","2/3"],"answer":1},
  {"day":16,"question":"Löse: x/2 + x/3 = 10. Was ist x?","options":["8","10","12","15"],"answer":2},
  {"day":17,"question":"Wenn die Ziffernsumme einer Zahl durch 9 teilbar ist, dann ist ...","options":["die Zahl auch durch 9 teilbar","die Zahl ungerade","die Zahl gerade","die Zahl prim"],"answer":0},
  {"day":18,"question":"In einem 3×3-magischen Quadrat mit den Zahlen 1–9 steht die 5 immer ...?","options":["oben links","in der Mitte","unten rechts","außen"],"answer":1},
  {"day":19,"question":"Zwei Züge (40 km/h und 20 km/h) fahren aufeinander zu und sind 60 km voneinander entfernt. Wann treffen sie sich?","options":["30 Minuten","45 Minuten","1 Stunde","1,5 Stunden"],"answer":2},
  {"day":20,"question":"Du hast 3 Schalter, aber nur eine Lampe in einem anderen Raum. Wie findest du mit einem Gang heraus, welcher Schalter dazugehört?","options":["Nur durch Zufall","Einen anschalten, fühlen, prüfen","Alle anschalten","Nacheinander probieren"],"answer":1},
  {"day":21,"question":"Ich habe Tasten, aber keine Schlösser; ich habe Räume, aber keine Türen. Was bin ich?","options":["Ein Computer","Eine Tastatur","Ein Klavier","Ein Telefon"],"answer":2},
  {"day":22,"question":"Was ist die nächste Zahl in der Reihe: 1, 4, 9, 16, ...?","options":["20","24","25","36"],"answer":2},
  {"day":23,"question":"Ein Springer auf einem 4×4-Schachbrett: Kann er jedes Feld genau einmal besuchen?","options":["Ja","Nein","Nur diagonal","Nur mit Startfeld Mitte"],"answer":1},
  {"day":24,"question":"Zwei gegenüberliegende Ecken eines 8×8-Bretts sind entfernt. Warum kann man es nicht mit Dominosteinen belegen?","options":["Zu viele Steine","Farbenverteilung stimmt nicht","Ungerade Felderzahl","Dominosteine sind zu groß"],"answer":1}
];

/* ---------- Storage & UI refs ---------- */
const SCORE_KEY = 'advent_score_v2';
let score = Number(localStorage.getItem(SCORE_KEY) || 0);
const scoreEl = document.getElementById('score');
const calendarEl = document.getElementById('calendar');
const taskModal = document.getElementById('taskModal');
const taskTitle = document.getElementById('taskTitle');
const taskQuestion = document.getElementById('taskQuestion');
const taskOptions = document.getElementById('taskOptions');
const closeTaskBtn = document.getElementById('closeTask');
const flashEl = document.getElementById('flash');
const rewardsSection = document.getElementById('rewards');

scoreEl.textContent = score;

/* ---------- Helpers ---------- */
function saveScore(){
  localStorage.setItem(SCORE_KEY, String(score));
  scoreEl.textContent = score;
}

function flash(text){
  flashEl.textContent = text;
  flashEl.classList.remove('hidden');
  flashEl.style.opacity = '1';
  setTimeout(()=> { flashEl.style.opacity = '0'; setTimeout(()=>flashEl.classList.add('hidden'),400); }, 2200);
}

/* ---------- Build calendar (locks by real date except dev override) ---------- */
const now = new Date();
const devAllowAll = (now.getMonth() !== 11); // outside December show all for dev
const availableDay = devAllowAll ? 24 : Math.min(now.getDate(),24);

for(let d=1; d<=24; d++){
  const t = tasks.find(x => x.day === d);
  const box = document.createElement('div');
  box.className = 'day';
  box.textContent = d;
  box.dataset.day = d;
  if(d > availableDay) box.classList.add('locked');

  box.addEventListener('click', ()=> {
    // if locked, still allow (spec: past days allowed, future blocked)
    if(d > now.getDate() && !devAllowAll) { flash('Dieses Türchen ist noch nicht freigeschaltet'); return; }
    openTask(t);
  });

  calendarEl.appendChild(box);
}

/* ---------- Task modal ---------- */
function openTask(task){
  // mark opened visually
  const el = document.querySelector(`.day[data-day="${task.day}"]`);
  el.classList.add('opened');

  taskTitle.textContent = `Tag ${task.day}`;
  taskQuestion.textContent = task.question;
  taskOptions.innerHTML = '';

  // check if answered before
  const answered = localStorage.getItem('advent_answered_day_' + task.day);

  task.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'button';
    btn.style.width = '100%';
    btn.style.marginTop = '6px';
    btn.textContent = opt;
    btn.addEventListener('click', ()=> {
      submitAnswer(task.day, idx, task.answer, !answered);
    });
    taskOptions.appendChild(btn);
  });

  taskModal.classList.remove('hidden');
}
closeTaskBtn.addEventListener('click', ()=> taskModal.classList.add('hidden'));

/* ---------- Submit Answer & Scoring ---------- */
function submitAnswer(day, chosenIdx, correctIdx, isFirstTime){
  const correct = chosenIdx === correctIdx;
  // determine points: if it's the real current day -> full points; if past day -> 5/ -5
  let isToday = (now.getMonth() === 11) ? (now.getDate() === day) : true; // dev: allow
  if(!devAllowAll && day > now.getDate()) isToday = false;

  let pts = 0;
  if(isToday){
    pts = correct ? 20 : -20;
  } else {
    pts = correct ? 5 : -5;
  }

  score += pts;
  if(score < 0) score = 0;
  saveScore();

  // store answered
  localStorage.setItem('advent_answered_day_' + day, JSON.stringify({chosen: chosenIdx, correct}));

  flash(correct ? `Richtig! ${pts>0? '+'+pts:pts} Punkte` : `Falsch! ${pts>0? '+'+pts:pts} Punkte`);
  taskModal.classList.add('hidden');
}

/* ---------- Navigation: rewards button ---------- */
document.getElementById('rewardsBtn').addEventListener('click', ()=>{
  // Toggle display (simple)
  if(rewardsSection.classList.contains('hidden')){
    rewardsSection.classList.remove('hidden');
    calendarEl.style.display = 'none';
  } else {
    rewardsSection.classList.add('hidden');
    calendarEl.style.display = 'grid';
  }
});

/* ---------- EASTER EGGS: hover reveal and click ---------- */
// Egg 1: bottom-right hidden circle (appear on hover >=1s on that spot)
const egg1 = document.getElementById('easter1');
let egg1Timer = null;
document.body.addEventListener('mousemove', (evt) => {
  // if mouse near bottom-right corner area, start timer to show egg
  const margin = 60;
  const xNear = (window.innerWidth - evt.clientX) < margin;
  const yNear = (window.innerHeight - evt.clientY) < margin;
  if(xNear && yNear){
    if(!egg1Timer){
      egg1Timer = setTimeout(()=> {
        egg1.style.opacity = '1';
        egg1.style.pointerEvents = 'auto';
      }, 1000);
    }
  } else {
    clearTimeout(egg1Timer);
    egg1Timer = null;
    if(!egg1.classList.contains('active')) { egg1.style.opacity = '0'; egg1.style.pointerEvents = 'none'; }
  }
});

// click egg1 -> award random 10-50, once per day
egg1.addEventListener('click', (e)=>{
  e.stopPropagation();
  const key = 'egg1_'+new Date().toDateString();
  if(localStorage.getItem(key)) {
    egg1.classList.add('active');
    return;
  }
  const bonus = Math.floor(Math.random()*41)+10; // 10-50
  score += bonus; saveScore();
  localStorage.setItem(key, '1');
  egg1.classList.add('active');
  flash(`✨ Geheimer Fund: +${bonus} Punkte`);
});

// Snow egg (top-left hover 1s)
const snowEgg = document.getElementById('snowEgg');
let snowTimer = null;
document.body.addEventListener('mousemove', (ev)=>{
  const margin = 80;
  if(ev.clientX < margin && ev.clientY < margin){
    if(!snowTimer) snowTimer = setTimeout(()=> { snowEgg.style.opacity = '0.9'; }, 1000);
  } else {
    clearTimeout(snowTimer); snowTimer = null; snowEgg.style.opacity = '0.12';
  }
});
snowEgg.addEventListener('click', ()=>{
  // start silent snow mode: fade body to white using overlay
  if(localStorage.getItem('snow_mode_activated')) return;
  localStorage.setItem('snow_mode_activated','1');
  document.documentElement.style.transition = '3s';
  document.body.style.background = '#ffffff';
  // no message
});

/* ---------- Secret "win" word: when user types w i n in sequence ---------- */
let winBuffer = '';
const WIN_SEQUENCE = 'win';
let goldMode = Boolean(localStorage.getItem('gold_mode')) || false;

window.addEventListener('keydown', (e)=>{
  if(e.key && e.key.length === 1){
    winBuffer += e.key.toLowerCase();
    if(winBuffer.length > WIN_SEQUENCE.length) winBuffer = winBuffer.slice(-WIN_SEQUENCE.length);
    if(winBuffer === WIN_SEQUENCE){
      activateGoldMode();
      winBuffer = '';
    }
  }
});

function activateGoldMode(){
  goldMode = true;
  localStorage.setItem('gold_mode','1');
  // change wheel UI later; immediate visual hint: change wheel card color if visible
  const wheelTitle = document.getElementById('wheelTitle');
  if(wheelTitle) wheelTitle.textContent = '✨ GOLD-Modus aktiviert ✨';
  flash('Gold-Modus aktiviert — nur noch Gewinne im Rad!');
}

/* ---------- GLÜCKSRAD (kosten: 20 Punkte) ---------- */
const wheelModal = document.getElementById('wheelModal');
const wheelCanvas = document.getElementById('wheelCanvas');
const spinBtn = document.getElementById('spinBtn');
const closeWheel = document.getElementById('closeWheel');
const gambleBtn = document.getElementById('gambleBtn');

let wheelRotation = 0;
let spinning = false;

// base wheel values with more negative slices than positive (skewed against player)
let baseWheelValues = [
  -50, -20, -20, -10, -10, -5, 5, 10
];

// gold mode values: only positives (and slightly nicer)
let goldWheelValues = [10, 20, 30, 50, 60, 80, 100, 150];

function currentWheelValues(){
  return goldMode ? goldWheelValues : baseWheelValues;
}

// draw wheel
function drawWheel(){
  const ctx = wheelCanvas.getContext('2d');
  const vals = currentWheelValues();
  const count = vals.length;
  const cx = wheelCanvas.width/2, cy = wheelCanvas.height/2, r = Math.min(cx,cy)-4;
  ctx.clearRect(0,0,wheelCanvas.width,wheelCanvas.height);

  const angle = (2*Math.PI)/count;
  for(let i=0;i<count;i++){
    ctx.beginPath();
    ctx.moveTo(cx,cy);
    const start = i*angle;
    const end = start + angle;
    ctx.fillStyle = goldMode ? (i%2===0 ? '#ffd27f' : '#ffecb3') : (i%2===0 ? '#90caf9' : '#64b5f6');
    ctx.arc(cx,cy,r,start,end);
    ctx.closePath();
    ctx.fill();

    // write text
    ctx.save();
    ctx.translate(cx,cy);
    ctx.rotate(start + angle/2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#07213a';
    ctx.font = '16px sans-serif';
    ctx.fillText((vals[i] > 0 ? '+'+vals[i] : vals[i]) + 'P', r - 10, 6);
    ctx.restore();
  }

  // small center circle
  ctx.beginPath();
  ctx.arc(cx,cy,36,0,Math.PI*2);
  ctx.fillStyle = goldMode ? '#ffd87d' : '#ffffff';
  ctx.fill();
}

// open wheel modal (button in header)
gambleBtn.addEventListener('click', ()=> {
  // open only when not spinning
  if(spinning) return;
  wheelModal.classList.remove('hidden');
  drawWheel();
});

// close
closeWheel.addEventListener('click', ()=> {
  if(spinning) return; // don't close while spinning
  wheelModal.classList.add('hidden');
  // reset title if gold mode not active
  const wheelTitle = document.getElementById('wheelTitle');
  if(wheelTitle && !goldMode) wheelTitle.textContent = '🎡 Glücksrad';
});

// spin logic (costs 20 points to spin)
spinBtn.addEventListener('click', ()=> {
  if(spinning) return;
  if(score < 20){
    flash('Du brauchst mindestens 20 Punkte zum Drehen.');
    return;
  }
  // deduct cost immediately
  score -= 20;
  if(score < 0) score = 0;
  saveScore();

  // proceed to spin
  spinning = true;
  spinBtn.disabled = true;

  // spin parameters
  const extra = Math.random() * 2000 + 2000; // random extra degrees
  const duration = 3600 + Math.random()*1200; // ms
  const start = performance.now();
  const startRot = wheelRotation;

  function animate(nowTs){
    const t = nowTs - start;
    const progress = Math.min(1, t / duration);
    // ease out cubic
    const eased = 1 - Math.pow(1-progress, 3);
    const deg = startRot + eased * extra;
    wheelRotation = deg;
    wheelCanvas.style.transform = `rotate(${wheelRotation}deg)`;
    if(progress < 1){
      requestAnimationFrame(animate);
    } else {
      finishSpin();
    }
  }
  requestAnimationFrame(animate);
});

function finishSpin(){
  const vals = currentWheelValues();
  const slice = 360 / vals.length;
  const degrees = wheelRotation % 360;
  // pointer is at top; calculate index
  const index = Math.floor(((360 - degrees + slice/2) % 360) / slice) % vals.length;
  const result = vals[index];

  // if goldMode, ensure positive only (it already is)
  score += result;
  if(score < 0) score = 0;
  saveScore();

  flash(result >= 0 ? `🎉 +${result} Punkte!` : `💀 ${result} Punkte!`);

  // unlock spin button
  spinning = false;
  spinBtn.disabled = false;
}

/* ---------- Initialize UI state ---------- */
(function init(){
  scoreEl.textContent = score;
  // hide rewards initially
  rewardsSection.classList.add('hidden');
  calendarEl.style.display = 'grid';
  // restore gold mode if already activated
  if(localStorage.getItem('gold_mode')) {
    goldMode = true;
    const wheelTitle = document.getElementById('wheelTitle');
    if(wheelTitle) wheelTitle.textContent = '✨ GOLD-Modus aktiviert ✨';
  }
})();
