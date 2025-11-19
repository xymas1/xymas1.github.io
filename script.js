// script.js
// Tasks array — deine Aufgaben (1..24)
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
  {"day":23,"question":"Ein pferd auf einem 4×4-Schachbrett: Kann er jedes Feld genau einmal besuchen?","options":["Ja","Nein","Nur diagonal","Nur mit Startfeld Mitte"],"answer":1},
  {"day":24,"question":"Zwei gegenüberliegende Ecken eines 8×8-Bretts sind entfernt. Warum kann man es nicht mit Dominosteinen belegen?","options":["Zu viele Steine","Farbenverteilung stimmt nicht","Ungerade Felderzahl","Dominosteine sind zu groß"],"answer":1}
];

// localStorage keys
const SCORE_KEY = 'advent_score';
const ANSWERS_KEY = 'advent_answers'; // {day: selectedIndex, correct: boolean}
const OPENED_KEY = 'advent_opened';
const EGG_PREFIX = 'advent_egg_'; // plus id and date to prevent spamming

// UI refs
const calendarEl = document.getElementById('calendar');
const scoreEl = document.getElementById('scoreVal');
const feedbackEl = document.getElementById('lastFeedback');
const snowCanvas = document.getElementById('snowCanvas');

let score = Number(localStorage.getItem(SCORE_KEY) || 0);
let answers = JSON.parse(localStorage.getItem(ANSWERS_KEY) || '{}');
let opened = JSON.parse(localStorage.getItem(OPENED_KEY) || '[]');

updateScoreUI();

function updateScoreUI(){
  scoreEl.textContent = score;
  localStorage.setItem(SCORE_KEY, String(score));
}

// compute available day (if december use real date; else allow all for dev)
const now = new Date();
let availableDay = (now.getMonth() === 11) ? Math.min(now.getDate(), 24) : 24; // dev: all available outside Dec

// build calendar grid
for (let i=1;i<=24;i++){
  const dayData = tasks.find(t=>t.day===i);
  const door = document.createElement('div');
  door.className = 'door ' + (i > availableDay ? 'locked':'' ) + (opened.includes(i)?' opened':'');
  door.dataset.day = i;

  const inner = document.createElement('div');
  inner.className = 'door-inner';

  const front = document.createElement('div');
  front.className = 'door-front';
  front.textContent = i;

  const back = document.createElement('div');
  back.className = 'door-back';
  back.innerHTML = `<div style="font-weight:800">Tür ${i}</div><div style="font-size:0.9rem;color:#556b8a;margin-top:6px">Klicke, um die Aufgabe zu sehen</div>`;

  inner.appendChild(front);
  inner.appendChild(back);
  door.appendChild(inner);

  door.addEventListener('click', () => onDoorClick(i, dayData));
  calendarEl.appendChild(door);
}

// show feedback for last answered when opening next
function showLastFeedbackFor(day){
  const prev = day - 1;
  if(!prev) return;
  const record = answers[prev];
  if(record){
    feedbackEl.classList.remove('hidden');
    feedbackEl.innerHTML = `Ergebnis für Tag ${prev}: ` + (record.correct ? `<span style="color:green">Richtig (+${record.points} pts)</span>` : `<span style="color:#b33">Falsch (${record.points>0?'+':''}${record.points} pts)</span>`);
    // hide after 6s
    setTimeout(()=>feedbackEl.classList.add('hidden'),6000);
  }
}

// on opening a door
function onDoorClick(day, dayData){
  // mark opened
  if(!opened.includes(day)){
    opened.push(day);
    localStorage.setItem(OPENED_KEY, JSON.stringify(opened));
    // add class
    const dEl = document.querySelector(`.door[data-day="${day}"]`);
    if(dEl) dEl.classList.add('opened');
  }

  // show feedback of previous day
  showLastFeedbackFor(day);

  // show question modal
  openQuestionModal(dayData);
}

// modal utils
function openQuestionModal(data){
  // create modal
  const modal = document.createElement('div'); modal.className = 'modal';
  const card = document.createElement('div'); card.className = 'modal-card';

  const q = document.createElement('div'); q.className = 'question';
  q.textContent = `Tag ${data.day}: ${data.question}`;
  card.appendChild(q);

  const opts = document.createElement('div'); opts.className = 'options';
  data.options.forEach((opt,idx)=>{
    const label = document.createElement('label'); label.className='option';
    const inp = document.createElement('input'); inp.type='radio'; inp.name='choice'; inp.value=idx;
    label.appendChild(inp);
    const span = document.createElement('span'); span.textContent = opt;
    label.appendChild(span);
    opts.appendChild(label);
    label.addEventListener('click', ()=> {
      // select the radio
      inp.checked = true;
    });
  });
  card.appendChild(opts);

  const actions = document.createElement('div'); actions.className='modal-actions';
  const btnCancel = document.createElement('button'); btnCancel.textContent='Schließen';
  const btnSubmit = document.createElement('button'); btnSubmit.textContent='Antwort absenden';
  btnCancel.addEventListener('click', ()=>document.body.removeChild(modal));
  btnSubmit.addEventListener('click', ()=>{
    const chosen = modal.querySelector('input[name="choice"]:checked');
    if(!chosen) { alert('Bitte wähle eine Antwort aus.'); return; }
    const idx = Number(chosen.value);
    processAnswer(data.day, idx, data.answer);
    document.body.removeChild(modal);
  });

  actions.appendChild(btnCancel); actions.appendChild(btnSubmit);
  card.appendChild(actions);
  modal.appendChild(card);
  document.body.appendChild(modal);
}

// Process answer and scoring
function processAnswer(day, selectedIndex, correctIndex){
  const isCorrect = selectedIndex === correctIndex;
  // determine if day is current day or older
  const now = new Date();
  let isToday = (now.getMonth() === 11) ? (now.getDate() === day) : true; // outside dec treat as today
  // if day > today -> shouldn't happen because locked, but guard:
  if (now.getMonth() === 11 && day > now.getDate()) isToday = false;

  // points logic
  let points = 0;
  if(isToday){
    points = isCorrect ? 20 : -20;
  } else {
    points = isCorrect ? 5 : -5;
  }

  // store answer record
  answers[day] = { selected: selectedIndex, correct: isCorrect, points: points, timestamp: Date.now() };
  localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));

  // update total score
  score += points;
  updateScoreUI();

  // mark door as opened (visual)
  const doorEl = document.querySelector(`.door[data-day="${day}"]`);
  if(doorEl) doorEl.classList.add('opened');

  // when opening next door, we will show feedback about this one (handled on door click)
  // optionally, briefly show immediate small feedback
  if(isCorrect){
    flash(`Richtig! ${points>0?'+':''}${points} Punkte`);
  } else {
    flash(`Falsch. ${points>0?'+':''}${points} Punkte`);
  }
}

// small ephemeral text
function flash(text){
  const t = document.createElement('div');
  t.style.position='fixed';
  t.style.right='18px'; t.style.bottom='18px';
  t.style.background='#fff'; t.style.padding='10px 14px'; t.style.borderRadius='10px';
  t.style.boxShadow='0 8px 20px rgba(2,20,40,0.12)';
  t.textContent = text;
  document.body.appendChild(t);
  setTimeout(()=>t.style.opacity='0',2000);
  setTimeout(()=>document.body.removeChild(t),2800);
}

// -- EASTER EGGS -- multiple, revealed on hover >= 1s
const eggs = [
  {id:'hat', elSelector:'#title', pos:null, points:[10,50]},
  {id:'reindeer', elSelector:'#egg-rentier', pos:null, points:[5,30]},
  {id:'snowflake', elSelector:'#egg-snowflake', pos:null, points:[10,10]},
  {id:'gift', elSelector:'.door[data-day="5"] .door-inner', pos:null, points:[20,20]}, // gift behind a door
  {id:'star', elSelector:'#egg-star', pos:null, points:[10,40]},
  {id:'wizard', elSelector:'#egg-wizard', pos:null, points:[15,15]},
];

function setupEggs(){
  // place some eggs visually (some are special elements)
  const rentier = document.getElementById('egg-rentier');
  const star = document.getElementById('egg-star');
  const snowflake = document.getElementById('egg-snowflake');
  const wizard = document.getElementById('egg-wizard');

  // allow hover-to-reveal for these elements
  const revealables = [document.getElementById('title'), rentier, star, snowflake, wizard];
  revealables.forEach(el=>{
    if(!el) return;
    let timer = null;
    el.addEventListener('mouseenter', ()=> {
      timer = setTimeout(()=> {
        // show corresponding egg (element itself)
        if(el === document.getElementById('title')){
          // show a small floating egg over the title
          const rect = el.getBoundingClientRect();
          rentier.style.top = (rect.top + 6) + 'px';
          rentier.style.left = (rect.right - 36) + 'px';
          rentier.classList.add('visible');
          rentier.style.pointerEvents = 'auto';
        } else {
          el.classList.add('visible');
        }
      }, 1000); // 1 second hover
    });
    el.addEventListener('mouseleave', ()=> {
      clearTimeout(timer);
      // if not clicked (clicked class keeps it visible-ish), hide
      if(el !== document.getElementById('title')){
        if(!el.classList.contains('clicked')) el.classList.remove('visible');
      } else {
        // title case -> hide rentier if not clicked
        if(!rentier.classList.contains('clicked')) rentier.classList.remove('visible');
      }
    });
  });

  // click handlers to award points, persistent once-per-day per egg
  const allEggEls = [rentier, star, snowflake, wizard];
  allEggEls.forEach((eggEl, idx)=>{
    if(!eggEl) return;
    const eggId = eggs[idx+1].id;
    eggEl.addEventListener('click', (e)=>{
      e.stopPropagation();
      tryAwardEgg(eggId, eggs[idx+1].points, eggEl);
    });
  });

  // gift egg inside door 5 (only if door exists)
  const door5inner = document.querySelector('.door[data-day="5"] .door-inner');
  if(door5inner){
    door5inner.addEventListener('click', (e)=> {
      // don't interfere with door click logic (let door open), but also treat as egg if previously opened
      // only allow if door 5 is opened
      const door5 = document.querySelector('.door[data-day="5"]');
      if(door5 && door5.classList.contains('opened')){
        const eggId = 'gift';
        const giftEl = door5inner;
        tryAwardEgg(eggId, [20,20], giftEl);
      }
    });
  }
}

function tryAwardEgg(eggId, range, el){
  const todayKey = EGG_PREFIX + eggId + '_' + new Date().toDateString();
  if(localStorage.getItem(todayKey)){
    // already claimed today
    // keep visible but no more awarding
    if(el) el.classList.add('clicked');
    return;
  }
  // award random between min and max
  const min = range[0], max = range[1];
  const pts = (min===max)?min : Math.floor(Math.random()*(max-min+1))+min;
  score += pts;
  updateScoreUI();
  localStorage.setItem(todayKey, '1');
  // mark egg as clicked (remains slightly visible & floats)
  if(el){
    el.classList.add('clicked');
    el.classList.add('visible');
  }
  // small sparkle visual
  createSparkAtEl(el);
}

// small spark
function createSparkAtEl(el){
  if(!el) return;
  const r = el.getBoundingClientRect();
  const s = document.createElement('div');
  s.style.position='fixed';
  s.style.left=(r.left + r.width/2)+'px';
  s.style.top=(r.top + r.height/2)+'px';
  s.style.width='8px'; s.style.height='8px'; s.style.borderRadius='50%';
  s.style.background='#ffd54f'; s.style.boxShadow='0 0 18px #ffd54f';
  s.style.zIndex=999;
  document.body.appendChild(s);
  setTimeout(()=>s.style.opacity='0',600);
  setTimeout(()=>document.body.removeChild(s),900);
}

// initialize eggs
setupEggs();

// -- Secret Snow Mode (activated by clicking footer) --
let snowActive = false;
const footer = document.getElementById('pageFooter') || document.querySelector('footer');
if(footer){
  footer.addEventListener('click', ()=>{
    if(!snowActive) startSnowMode();
  });
}

function startSnowMode(){
  snowActive = true;
  // show canvas
  snowCanvas.classList.remove('hidden');
  snowCanvas.width = window.innerWidth;
  snowCanvas.height = window.innerHeight;
  const ctx = snowCanvas.getContext('2d');
  const flakes = [];
  for(let i=0;i<200;i++){
    flakes.push({
      x: Math.random()*snowCanvas.width,
      y: Math.random()*snowCanvas.height,
      r: Math.random()*3+1,
      d: Math.random()*2+1,
      s: Math.random()*0.6+0.2
    });
  }
  // animate: falling and gradually fade page to white
  let alpha = 0;
  function anim(){
    ctx.clearRect(0,0,snowCanvas.width,snowCanvas.height);
    // draw white overlay gradually increasing
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.fillRect(0,0,snowCanvas.width,snowCanvas.height);

    // draw flakes
    ctx.fillStyle = `rgba(245,245,255,${Math.min(1,0.6+alpha)})`;
    flakes.forEach((f,i)=>{
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI*2);
      ctx.fill();
      f.y += f.d * f.s * (1 + alpha*6);
      if(f.y > snowCanvas.height + 10){ f.y = -10; f.x = Math.random()*snowCanvas.width; }
    });

    // slowly increase alpha until 1 (page white)
    if(alpha < 1) alpha += 0.005;
    // continue animation until fully white
    if(alpha < 1) requestAnimationFrame(anim);
    else {
      // final fill
      ctx.fillStyle = 'rgba(255,255,255,1)';
      ctx.fillRect(0,0,snowCanvas.width,snowCanvas.height);
      // keep canvas visible covering page (silent)
    }
  }
  anim();
  // set a flag to prevent re-trigger
  localStorage.setItem('advent_snow_activated','1');
}

// responsive resize for canvas
window.addEventListener('resize', ()=>{
  if(!snowCanvas.classList.contains('hidden')){
    snowCanvas.width = window.innerWidth;
    snowCanvas.height = window.innerHeight;
  }
});

// initialize UI state from storage: mark opened doors visually
(function initFromStorage(){
  opened.forEach(d=>{
    const doorEl = document.querySelector(`.door[data-day="${d}"]`);
    if(doorEl) doorEl.classList.add('opened');
  });
  updateScoreUI();
})();

// simple helper: if user opens day N, we want next time opening N+1 to show feedback of N (handled via showLastFeedbackFor)

// End of script
