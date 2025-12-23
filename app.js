
// Socks of Destiny - Full build (wheel + turns + dice + steal trivia)
// NOTE: This is a simplified "works-first" full version built on the stable wheel baseline.

const DEFAULT_PLAYERS = ["Mike", "Emma", "Charlotte", "Harriet", "Callum", "Ethan", "Alina", "Isobelle", "Ben", "Tyler", "Chloe", "Keira", "Dan", "Kelly", "Fiona", "Nick", "Joe", "Jamie", "Abby"];
const SOCK_PHRASES = ["Choose your socks like you\u2019re defusing a bomb.", "Select your socks. Regret will follow shortly.", "Pick a pair. Lie to everyone about how good they are.", "Choose wisely. Or don\u2019t. This is Christmas.", "Pick your socks. Pretend it was always your plan.", "Choose a pair and act confident. Nobody can tell.", "Grab your socks. Smile like you didn\u2019t just choose chaos.", "Pick a pair. You\u2019re one step closer to betrayal.", "Choose socks. Hide your emotions. Weaponise your face.", "Select your pair. The table is judging you already.", "Pick socks. Commit. And remember: no refunds.", "Choose a pair. Your dignity is on layaway.", "Pick your socks. Then act like they\u2019re designer.", "Choose a pair. This is the start of your villain arc.", "Pick socks. Christmas spirit, but make it feral.", "Choose your socks like you\u2019re auditioning for drama.", "Pick a pair. Whisper \u201cworth it\u201d to yourself.", "Choose socks. You\u2019re basically gambling with fabric.", "Pick a pair. Keep eye contact. Assert dominance.", "Choose socks. The fate of the spot prizes *may* be inside."];
const NEXT_CONTENDER = ["Tap to summon the next contender.", "Tap to unleash the next victim.", "Tap for the next brave soul.", "Tap to rotate the chaos.", "Tap to pick who suffers next.", "Tap to roll the next human into the arena.", "Tap to continue the nonsense.", "Tap to nominate the next legend.", "Tap to drag another name into the spotlight.", "Tap to feed the wheel another sacrifice.", "Tap to pick the next sock goblin.", "Tap for the next contestant. May the odds be rude.", "Tap to send someone else into the storm.", "Tap to proceed. Apologies in advance.", "Tap to continue. Christmas is cancelled anyway.", "Tap to call the next one up.", "Tap to pick who\u2019s about to get stitched up.", "Tap for the next turn. No whining.", "Tap to choose the next contender. Try not to laugh.", "Tap to continue. Somebody\u2019s about to get robbed."];
const TURN_PHRASES = ["The Dice Decides. Step up.", "Time to roll. Consequences pending.", "Roll the dice. Choose violence.", "Your turn. Try not to embarrass the family.", "Roll it. Let fate do the dirty work.", "Roll the dice. Pretend you\u2019re innocent.", "Your move. The socks are watching.", "Roll up. Betray someone politely.", "Roll the dice. No takesies-backsies.", "Your turn. May your poker face survive.", "Roll it. Christmas spirit is optional.", "Roll the dice. Chaos is mandatory.", "Step up. The dice wants drama.", "Roll. Then act shocked at the result.", "Your turn. The table demands entertainment.", "Roll the dice. Be someone\u2019s origin story.", "Roll it. Fabric-based warfare begins.", "Your turn. Don\u2019t be nice.", "Roll the dice. Make it iconic.", "Roll it. May your socks be\u2026 suspicious."];
const ADULT_TRIVIA = [{"q": "What’s the capital of Australia?", "choices": ["Canberra", "Sydney", "Melbourne", "Perth"], "a": 0}, {"q": "Which element has the symbol Fe?", "choices": ["Iron", "Fluorine", "Lead", "Silver"], "a": 0}, {"q": "Which ocean is off the east coast of the USA?", "choices": ["Atlantic", "Pacific", "Indian", "Arctic"], "a": 0}, {"q": "What does HTTP stand for?", "choices": ["HyperText Transfer Protocol", "High Transfer Text Program", "Host Transfer Text Process", "Hyper Terminal Trace Path"], "a": 0}, {"q": "Which metal is liquid at room temperature?", "choices": ["Mercury", "Aluminium", "Copper", "Zinc"], "a": 0}, {"q": "Who wrote 1984?", "choices": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.K. Rowling"], "a": 0}, {"q": "What’s the universal donor (red cells)?", "choices": ["O negative", "AB positive", "A positive", "B negative"], "a": 0}, {"q": "Capital of Canada?", "choices": ["Ottawa", "Toronto", "Vancouver", "Montreal"], "a": 0}, {"q": "Smallest prime number?", "choices": ["2", "1", "3", "5"], "a": 0}, {"q": "Main gas in Earth’s atmosphere?", "choices": ["Nitrogen", "Oxygen", "CO2", "Hydrogen"], "a": 0}, {"q": "Which planet is known as the Red Planet?", "choices": ["Mars", "Venus", "Jupiter", "Mercury"], "a": 0}, {"q": "How many bones are in the adult human body (approx.)?", "choices": ["206", "180", "250", "300"], "a": 0}, {"q": "What’s the largest organ in the human body?", "choices": ["Skin", "Liver", "Heart", "Brain"], "a": 0}, {"q": "Which country gifted the Statue of Liberty to the USA?", "choices": ["France", "UK", "Spain", "Italy"], "a": 0}, {"q": "What is the chemical formula for water?", "choices": ["H2O", "CO2", "NaCl", "O2"], "a": 0}, {"q": "Which language has the most native speakers?", "choices": ["Mandarin Chinese", "English", "Spanish", "Hindi"], "a": 0}, {"q": "In computing, what does “CPU” stand for?", "choices": ["Central Processing Unit", "Computer Power Unit", "Core Processing Utility", "Control Program Unit"], "a": 0}, {"q": "Which continent is the Sahara Desert on?", "choices": ["Africa", "Asia", "Australia", "South America"], "a": 0}, {"q": "Which year did the Titanic sink?", "choices": ["1912", "1902", "1922", "1898"], "a": 0}, {"q": "What is the hardest natural substance?", "choices": ["Diamond", "Gold", "Quartz", "Iron"], "a": 0}, {"q": "Which gas do plants absorb from the atmosphere?", "choices": ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium"], "a": 0}, {"q": "What’s the capital of Japan?", "choices": ["Tokyo", "Osaka", "Kyoto", "Sapporo"], "a": 0}, {"q": "Who painted the Mona Lisa?", "choices": ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"], "a": 0}, {"q": "Which is the smallest planet in our solar system?", "choices": ["Mercury", "Mars", "Venus", "Pluto"], "a": 0}, {"q": "How many minutes are in a day?", "choices": ["1440", "1240", "1640", "1040"], "a": 0}, {"q": "What is the square root of 64?", "choices": ["8", "6", "7", "9"], "a": 0}, {"q": "Which country is famous for the tulip?", "choices": ["Netherlands", "Belgium", "Denmark", "Austria"], "a": 0}, {"q": "What’s the currency of Japan?", "choices": ["Yen", "Won", "Yuan", "Dollar"], "a": 0}, {"q": "What’s the capital of Scotland?", "choices": ["Edinburgh", "Glasgow", "Aberdeen", "Inverness"], "a": 0}, {"q": "What does “DNA” stand for?", "choices": ["Deoxyribonucleic acid", "Dinucleic acid", "Dual nitrogen acid", "Deoxy nitrogen array"], "a": 0}, {"q": "Which blood type is known as the universal recipient?", "choices": ["AB positive", "O negative", "A negative", "B positive"], "a": 0}, {"q": "Which instrument has 88 keys?", "choices": ["Piano", "Guitar", "Violin", "Saxophone"], "a": 0}, {"q": "What is the tallest mountain in the world (above sea level)?", "choices": ["Mount Everest", "K2", "Kangchenjunga", "Makalu"], "a": 0}, {"q": "Which planet has the most moons (currently known)?", "choices": ["Saturn", "Jupiter", "Uranus", "Neptune"], "a": 0}, {"q": "What’s the largest mammal?", "choices": ["Blue whale", "Elephant", "Giraffe", "Hippo"], "a": 0}, {"q": "In which city is the Colosseum?", "choices": ["Rome", "Athens", "Istanbul", "Paris"], "a": 0}, {"q": "Which country is home to Machu Picchu?", "choices": ["Peru", "Mexico", "Chile", "Bolivia"], "a": 0}, {"q": "What’s the chemical symbol for gold?", "choices": ["Au", "Ag", "Gd", "Go"], "a": 0}, {"q": "Which sea separates Saudi Arabia and Africa?", "choices": ["Red Sea", "Black Sea", "Mediterranean Sea", "Arabian Sea"], "a": 0}, {"q": "How many players are on a football (soccer) team on the pitch?", "choices": ["11", "10", "9", "12"], "a": 0}, {"q": "Which is the longest river in the world (commonly cited)?", "choices": ["Nile", "Amazon", "Yangtze", "Mississippi"], "a": 0}, {"q": "What’s the capital of New Zealand?", "choices": ["Wellington", "Auckland", "Christchurch", "Dunedin"], "a": 0}, {"q": "Which country’s flag is the only one with a dragon on it?", "choices": ["Bhutan", "Wales", "China", "Vietnam"], "a": 0}, {"q": "What is the boiling point of water at sea level (°C)?", "choices": ["100", "90", "80", "120"], "a": 0}, {"q": "Which scientist proposed the theory of relativity?", "choices": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"], "a": 0}, {"q": "What’s the largest planet in our solar system?", "choices": ["Jupiter", "Saturn", "Neptune", "Earth"], "a": 0}, {"q": "What is the main ingredient in guacamole?", "choices": ["Avocado", "Cucumber", "Pea", "Spinach"], "a": 0}, {"q": "What’s the capital of Italy?", "choices": ["Rome", "Milan", "Venice", "Florence"], "a": 0}, {"q": "Which organ pumps blood around the body?", "choices": ["Heart", "Lungs", "Kidney", "Stomach"], "a": 0}, {"q": "Which country is famous for the Great Pyramid of Giza?", "choices": ["Egypt", "Greece", "India", "Iraq"], "a": 0}, {"q": "What does “WWW” stand for?", "choices": ["World Wide Web", "World Web Wide", "Web World Wide", "Wide World Web"], "a": 0}, {"q": "Which is the smallest continent by land area?", "choices": ["Australia", "Europe", "Antarctica", "South America"], "a": 0}, {"q": "How many degrees are in a full circle?", "choices": ["360", "180", "90", "270"], "a": 0}, {"q": "What’s the capital of Ireland?", "choices": ["Dublin", "Cork", "Galway", "Limerick"], "a": 0}, {"q": "What’s the largest ocean?", "choices": ["Pacific", "Atlantic", "Indian", "Arctic"], "a": 0}, {"q": "What is the chemical symbol for sodium?", "choices": ["Na", "So", "Sd", "Sn"], "a": 0}, {"q": "Which planet is closest to the Sun?", "choices": ["Mercury", "Venus", "Earth", "Mars"], "a": 0}, {"q": "Which country is known as the Land of the Rising Sun?", "choices": ["Japan", "China", "Thailand", "Korea"], "a": 0}, {"q": "In the UK, what’s the emergency telephone number?", "choices": ["999", "911", "112", "101"], "a": 0}, {"q": "What’s the capital of Spain?", "choices": ["Madrid", "Barcelona", "Seville", "Valencia"], "a": 0}, {"q": "How many continents are there?", "choices": ["7", "5", "6", "8"], "a": 0}, {"q": "Which animal is the fastest land animal?", "choices": ["Cheetah", "Lion", "Horse", "Greyhound"], "a": 0}, {"q": "Which gas do humans need to breathe?", "choices": ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"], "a": 0}, {"q": "Which country invented paper?", "choices": ["China", "Egypt", "Greece", "Italy"], "a": 0}, {"q": "What’s the capital of Norway?", "choices": ["Oslo", "Bergen", "Trondheim", "Stavanger"], "a": 0}, {"q": "What does “kg” stand for?", "choices": ["Kilogram", "Kilogallon", "King gram", "Kilo-grade"], "a": 0}, {"q": "Which is the largest desert in the world?", "choices": ["Antarctica", "Sahara", "Gobi", "Arabian"], "a": 0}, {"q": "What’s the name of the galaxy we live in?", "choices": ["Milky Way", "Andromeda", "Sombrero", "Whirlpool"], "a": 0}, {"q": "How many hearts does an octopus have?", "choices": ["3", "1", "2", "4"], "a": 0}, {"q": "Which vitamin is mainly produced when skin is exposed to sunlight?", "choices": ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin B12"], "a": 0}, {"q": "Which country has the most people?", "choices": ["India", "China", "USA", "Indonesia"], "a": 0}, {"q": "What’s the main component of the Sun?", "choices": ["Hydrogen", "Oxygen", "Carbon", "Nitrogen"], "a": 0}, {"q": "In chess, how many squares are on the board?", "choices": ["64", "48", "72", "81"], "a": 0}, {"q": "Which city hosted the 2012 Summer Olympics?", "choices": ["London", "Beijing", "Rio", "Athens"], "a": 0}, {"q": "What’s the capital of Brazil?", "choices": ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"], "a": 0}, {"q": "What is the largest internal organ?", "choices": ["Liver", "Lung", "Brain", "Stomach"], "a": 0}, {"q": "Which planet is famous for its rings?", "choices": ["Saturn", "Mars", "Venus", "Mercury"], "a": 0}, {"q": "What does “RAM” stand for?", "choices": ["Random Access Memory", "Rapid Action Module", "Read Access Mode", "Runtime Allocation Memory"], "a": 0}, {"q": "Which is the longest bone in the human body?", "choices": ["Femur", "Tibia", "Humerus", "Radius"], "a": 0}, {"q": "What’s the name of the process plants use to make food?", "choices": ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"], "a": 0}, {"q": "Which country is the origin of the Olympic Games?", "choices": ["Greece", "Italy", "France", "Turkey"], "a": 0}, {"q": "Which continent is the Amazon Rainforest mainly in?", "choices": ["South America", "Africa", "Asia", "North America"], "a": 0}, {"q": "What’s the smallest unit of life?", "choices": ["Cell", "Atom", "Molecule", "Organ"], "a": 0}, {"q": "What’s the capital of South Korea?", "choices": ["Seoul", "Busan", "Incheon", "Daegu"], "a": 0}, {"q": "Which is colder: the North Pole or the South Pole?", "choices": ["South Pole", "North Pole", "Same", "Depends on season"], "a": 0}, {"q": "What is the study of earthquakes called?", "choices": ["Seismology", "Meteorology", "Ecology", "Geology"], "a": 0}, {"q": "Which is the biggest country by land area?", "choices": ["Russia", "Canada", "China", "USA"], "a": 0}, {"q": "How many strings does a standard guitar have?", "choices": ["6", "4", "5", "7"], "a": 0}, {"q": "What’s the capital of Portugal?", "choices": ["Lisbon", "Porto", "Braga", "Faro"], "a": 0}, {"q": "Which organ is primarily responsible for detoxifying the body?", "choices": ["Liver", "Pancreas", "Spleen", "Bladder"], "a": 0}];
const KIDS_TRIVIA = [{"q": "How many legs does a spider have?", "choices": ["8", "6", "10", "4"], "a": 0}, {"q": "What colour do you get if you mix red and blue?", "choices": ["Purple", "Green", "Orange", "Yellow"], "a": 0}, {"q": "Which animal says 'moo'?", "choices": ["Cow", "Sheep", "Pig", "Dog"], "a": 0}, {"q": "How many days are in a week?", "choices": ["7", "5", "10", "8"], "a": 0}, {"q": "Which planet do we live on?", "choices": ["Earth", "Mars", "Jupiter", "Venus"], "a": 0}, {"q": "What do bees make?", "choices": ["Honey", "Milk", "Bread", "Cheese"], "a": 0}, {"q": "Which shape has 3 sides?", "choices": ["Triangle", "Square", "Circle", "Rectangle"], "a": 0}, {"q": "What’s the opposite of 'hot'?", "choices": ["Cold", "Warm", "Spicy", "Bright"], "a": 0}, {"q": "How many wheels does a bicycle have?", "choices": ["2", "3", "4", "1"], "a": 0}, {"q": "What colour is a ripe banana?", "choices": ["Yellow", "Blue", "Purple", "Red"], "a": 0}, {"q": "Which animal has a long trunk?", "choices": ["Elephant", "Tiger", "Rabbit", "Frog"], "a": 0}, {"q": "How many letters are in the English alphabet?", "choices": ["26", "24", "28", "20"], "a": 0}, {"q": "What do you call a baby dog?", "choices": ["Puppy", "Kitten", "Calf", "Foal"], "a": 0}, {"q": "Which season comes after spring?", "choices": ["Summer", "Winter", "Autumn", "Monsoon"], "a": 0}, {"q": "What do you use to write on a blackboard?", "choices": ["Chalk", "Soap", "Spoon", "Glue"], "a": 0}, {"q": "Which animal can fly?", "choices": ["Bird", "Lion", "Elephant", "Horse"], "a": 0}, {"q": "How many hours are in a day?", "choices": ["24", "12", "10", "30"], "a": 0}, {"q": "What’s the colour of grass?", "choices": ["Green", "Pink", "Orange", "Blue"], "a": 0}, {"q": "Which is a fruit?", "choices": ["Apple", "Carrot", "Potato", "Onion"], "a": 0}, {"q": "What’s 5 + 5?", "choices": ["10", "8", "12", "15"], "a": 0}, {"q": "Which animal says 'meow'?", "choices": ["Cat", "Dog", "Cow", "Duck"], "a": 0}, {"q": "What’s the biggest animal in the sea?", "choices": ["Blue whale", "Shark", "Dolphin", "Octopus"], "a": 0}, {"q": "Which direction does the sun rise?", "choices": ["East", "West", "North", "South"], "a": 0}, {"q": "What do you wear on your feet?", "choices": ["Shoes", "Hats", "Gloves", "Scarves"], "a": 0}, {"q": "How many sides does a square have?", "choices": ["4", "3", "5", "6"], "a": 0}];
const SARCASM = ["Wow. A functioning brain cell. In THIS economy?", "Correct. Someone call Oxford \u2014 you\u2019ve arrived.", "Absolutely disgusting levels of competence.", "Look at you\u2026 using knowledge like a weapon.", "Correct. The bar was on the floor, but you still cleared it.", "Correct. Your GCSEs have finally paid off.", "That\u2019s correct. Enjoy this brief moment of power.", "Correct. You\u2019re legally allowed to be smug for 5 seconds.", "Correct. The sock gods are\u2026 mildly impressed.", "Right answer. You may now commit theft with confidence.", "Correct. Intelligence detected. Cancel Christmas.", "Correct. That was almost suspiciously competent.", "Correct. Congrats \u2014 you\u2019ve unlocked CHAOS.", "Correct. Your victim should be very, very afraid.", "Correct. Now go ruin someone\u2019s evening."];

// Bump this whenever state shape or flow changes to avoid loading stale/bad state
const STATE_KEY = "sod_state_full_v14";

let state = loadState();

// Elements
const splash = document.getElementById("splash");
const wheelScreen = document.getElementById("wheelScreen");
const turnScreen = document.getElementById("turnScreen");

const canvas = document.getElementById("wheelCanvas");
const ctx = canvas.getContext("2d");

const spinBtn = document.getElementById("spinBtn");
const toTurnsBtn = document.getElementById("toTurnsBtn");
const wheelStatus = document.getElementById("wheelStatus");
const wheelHint = document.getElementById("wheelHint");

const pickTurnBtn = document.getElementById("pickTurnBtn");
const resetTurnsBtn = document.getElementById("resetTurnsBtn");
const turnInfo = document.getElementById("turnInfo");
const turnRemaining = document.getElementById("turnRemaining");

const overlay = document.getElementById("overlay");
const overlayTitle = document.getElementById("overlayTitle");
const overlaySub = document.getElementById("overlaySub");
const overlayText = document.getElementById("overlayText");
const rollBtn = document.getElementById("rollBtn");
const endTurnBtn = document.getElementById("endTurnBtn");

const triviaBox = document.getElementById("triviaBox");
const triviaQ = document.getElementById("triviaQ");
const triviaTimer = document.getElementById("triviaTimer");
const triviaChoices = document.getElementById("triviaChoices");

const postTrivia = document.getElementById("postTrivia");
const postTriviaMsg = document.getElementById("postTriviaMsg");
const postTriviaContinue = document.getElementById("postTriviaContinue");

const drawer = document.getElementById("drawer");
const cogBtn = document.getElementById("cogBtn");
const playerInput = document.getElementById("playerInput");
const addPlayerBtn = document.getElementById("addPlayerBtn");
const playerTags = document.getElementById("playerTags");
const resetGameBtn = document.getElementById("resetGameBtn");

// Wheel animation state
let wheelAngle = 0;
let isSpinning = false;
let highlightIndex = -1;
let lastTickIndex = -1;

// Timers
let typeTimer = null;
let triviaInterval = null;

// ---------- State ----------
function saveState() {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(STATE_KEY) || "null");
    if (s && Array.isArray(s.players) && s.players.length) return normalize(s);
  } catch (e) {}
  return normalize({
    players: [...DEFAULT_PLAYERS],
    wheelPool: [...DEFAULT_PLAYERS],
    stage: "wheel",          // wheel | turns
    turnPool: [],
    currentPlayer: null,
    lastDice: null,
    stealUnlocked: false,
    pendingDice: null,
    pendingOutcome: null,
    pools: {
      sock: [],
      contender: [],
      turn: [],
      sarcasm: []
    }
  });
}

function normalize(s) {
  s.players = Array.isArray(s.players) && s.players.length ? s.players : [...DEFAULT_PLAYERS];
  s.wheelPool = Array.isArray(s.wheelPool) ? s.wheelPool : [...s.players];
  s.stage = (s.stage === "wheel" || s.stage === "turns") ? s.stage : "wheel";
  s.turnPool = Array.isArray(s.turnPool) ? s.turnPool : [];
  s.currentPlayer = s.currentPlayer || null;
  s.lastDice = s.lastDice || null;
  s.stealUnlocked = !!s.stealUnlocked;
  s.pendingDice = s.pendingDice || null;
  s.pendingOutcome = s.pendingOutcome || null;
  if (!s.pools) s.pools = { sock: [], contender: [], turn: [], sarcasm: [] };
  return s;
}

// ---------- Utilities ----------
function showScreen(which) {
  splash.classList.toggle("active", which === "splash");
  wheelScreen.classList.toggle("active", which === "wheel");
  turnScreen.classList.toggle("active", which === "turns");
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function nextUnique(poolKey, source) {
  if (!state.pools[poolKey] || state.pools[poolKey].length === 0) {
    state.pools[poolKey] = shuffle(source.map((_, i) => i));
  }
  const idx = state.pools[poolKey].pop();
  saveState();
  return source[idx];
}

function playSound(name) {
  try {
    // Prefer MP3 (your file: sounds/Shhh.mp3), then fall back to WAV if needed.
    const candidates = [
      "sounds/" + name + ".mp3",
      "sounds/" + name + ".wav"
    ];

    const a = new Audio();
    a.volume = 0.9;

    // Try sources in order
    let i = 0;
    const tryNext = () => {
      if (i >= candidates.length) return;
      a.src = candidates[i++];
      a.play().catch(() => tryNext());
    };

    tryNext();
  } catch (e) {}
}

function showShiftyEyes() {
  const el = document.getElementById("shiftyEyes");
  if (!el) return;
  el.classList.add("show");
  // Your actual file is Shhh.mp3
  playSound("Shhh");
  // Auto-hide after a short beat
  setTimeout(() => el.classList.remove("show"), 3000);
}

}

// Slower typewriter with random pauses
function typeText(el, text, onDone) {
  if (typeTimer) clearTimeout(typeTimer);
  el.innerHTML = "";
  const cursor = document.createElement("span");
  cursor.className = "cursor";
  let i = 0;

  function step() {
    el.textContent = text.slice(0, i + 1);
    el.appendChild(cursor);
    i++;
    if (i < text.length) {
      let delay = 180; // snappier typewriter (~5-6 chars/sec)
      if (Math.random() < 0.10) delay += 350 + Math.random() * 650;
      typeTimer = setTimeout(step, delay);
    } else {
      // finished
      if (typeof onDone === "function") {
        // next tick so DOM settles
        setTimeout(onDone, 0);
      }
    }
  }
  step();
}

// ---------- Wheel Drawing ----------
function drawWheel() {
  const names = state.wheelPool;
  const n = Math.max(names.length, 1);
  const w = canvas.width, h = canvas.height;
  const cx = w / 2, cy = h / 2;
  const r = Math.min(cx, cy) - 10;

  ctx.clearRect(0, 0, w, h);

  // outer ring
  ctx.beginPath();
  ctx.arc(cx, cy, r + 6, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(255,255,255,.10)";
  ctx.lineWidth = 18;
  ctx.stroke();

  const step = (Math.PI * 2) / n;

  // pointer angle is at top (-90deg)
  const pointerAngle = -Math.PI / 2;
  let rel = (pointerAngle - wheelAngle) % (Math.PI * 2);
  if (rel < 0) rel += Math.PI * 2;
  highlightIndex = Math.floor(rel / step);

  for (let i = 0; i < n; i++) {
    const a0 = wheelAngle + i * step;
    const a1 = a0 + step;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, a0, a1);
    ctx.closePath();

    const base = (i % 2 === 0) ? "#15151b" : "#101016";
    ctx.fillStyle = (i === highlightIndex) ? "#2a2a33" : base;
    ctx.fill();

    ctx.strokeStyle = (i === highlightIndex) ? "rgba(255,77,77,.75)" : "rgba(255,255,255,.10)";
    ctx.lineWidth = (i === highlightIndex) ? 5 : 2;
    ctx.stroke();

    // label
    const mid = (a0 + a1) / 2;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(mid);
    ctx.textAlign = "right";
    ctx.fillStyle = (i === highlightIndex) ? "rgba(255,255,255,.98)" : "rgba(255,255,255,.86)";
    ctx.font = (i === highlightIndex) ? "900 36px system-ui" : "800 32px system-ui";
    ctx.fillText(names[i] || "", r - 18, 12);
    ctx.restore();
  }
}

// ---------- Overlay ----------
function showOverlay(title, sub, text, mode) {
  overlay.classList.add("show");
  overlayTitle.textContent = title;
  overlaySub.textContent = sub;

  // reset sections
  postTrivia.classList.remove("show");
  triviaBox.classList.remove("show");
  triviaChoices.innerHTML = "";
  clearInterval(triviaInterval);
  triviaInterval = null;

  endTurnBtn.classList.remove("pulse-endturn");
  // During a player's turn we only want END TURN after the trivia gate resolves.
  // For other overlays (wheel/sock/etc) keep it visible.
  endTurnBtn.style.display = (mode === "turn") ? "none" : "block";

  rollBtn.style.display = (mode === "turn") ? "block" : "none";

  typeText(overlayText, text);
}

function hideOverlay() {
  overlay.classList.remove("show");
}

// ---------- Wheel Spin ----------
function spinWheel() {
  if (isSpinning) return;
  if (state.stage !== "wheel") return;
  const names = state.wheelPool;
  if (!names.length) {
    wheelStatus.textContent = "Wheel empty. Hit Next Stage.";
    return;
  }
  isSpinning = true;
  spinBtn.disabled = true;
  wheelStatus.textContent = "Spinning…";

  const n = names.length;
  const step = (Math.PI * 2) / n;
  const winnerIndex = Math.floor(Math.random() * n);

  const pointerAngle = -Math.PI / 2;
  const desired = pointerAngle - (winnerIndex + 0.5) * step;

  // Enforce a minimum of 2 full spins before landing on a selection
  const TWO_PI = Math.PI * 2;
  const minFullRotations = 2;
  const extraRotations = Math.floor(Math.random() * 3); // 0–2 extra
  const fullRotations = minFullRotations + extraRotations;

  // Ensure we always spin forwards (no back-spins if wheelAngle has grown large)
  const start = wheelAngle;
  const current = ((wheelAngle % TWO_PI) + TWO_PI) % TWO_PI;       // 0..2π
  const desiredNorm = ((desired % TWO_PI) + TWO_PI) % TWO_PI;      // 0..2π
  const baseDelta = ((desiredNorm - current) + TWO_PI) % TWO_PI;   // 0..2π

  // Small random nudge within the winner segment so it doesn't feel "robotic"
  const jitter = Math.random() * step * 0.2;

  const target = start + (fullRotations * TWO_PI) + baseDelta + jitter;

  const duration = 2800;
  const startTime = performance.now();
  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

  function frame(now) {
    const t = Math.min(1, (now - startTime) / duration);
    const e = easeOutCubic(t);
    wheelAngle = start + (target - start) * e;
    drawWheel();

    // tick sound on segment changes
    if (highlightIndex !== lastTickIndex) {
      lastTickIndex = highlightIndex;
      playSound("wheel-click");
    }

    if (t < 1) requestAnimationFrame(frame);
    else {
      isSpinning = false;
      spinBtn.disabled = false;

      const winner = names[winnerIndex];
      state.wheelPool = names.filter((_, i) => i !== winnerIndex);
      saveState();

      const phrase = nextUnique("sock", SOCK_PHRASES);
      showOverlay("Sock Selection", "Keep them paired. Poker face ON.", winner + ": " + phrase, "sock");

      if (!state.wheelPool.length) {
        wheelStatus.textContent = "Wheel complete ✅";
        wheelHint.textContent = "Wheel empty → Next Stage unlocks.";
      } else {
        wheelStatus.textContent = "Selected: " + winner;
      }
      drawWheel();
    }
  }
  requestAnimationFrame(frame);
}

// ---------- Turn Picker ----------
function ensureTurnPool() {
  if (!state.turnPool || state.turnPool.length === 0) {
    state.turnPool = shuffle([...state.players]);
    saveState();
  }
}

function renderTurnRemaining() {
  turnRemaining.innerHTML = "";
  state.turnPool.forEach(n => {
    const d = document.createElement("div");
    d.className = "tagP";
    d.textContent = n;
    turnRemaining.appendChild(d);
  });
  turnInfo.textContent = nextUnique("contender", NEXT_CONTENDER);
}


function pickContender() {
  ensureTurnPool();
  if (!state.turnPool.length) {
    turnInfo.textContent = "Nobody left. Reset Turns.";
    return;
  }

  // Whizz through names like a roulette, then land on the chosen one.
  pickTurnBtn.disabled = true;
  resetTurnsBtn.disabled = true;

  const candidates = [...state.turnPool];
  const finalIdx = Math.floor(Math.random() * candidates.length);
  const finalName = candidates[finalIdx];

  let spins = 0;
  const minSpins = 24 + Math.floor(Math.random() * 10); // 24-33 ticks
  const startDelay = 50;
  const endDelay = 160;
  const totalTicks = minSpins;

  function tickDelay(t) {
    // ease-out delay ramp
    const p = Math.min(1, t / (totalTicks - 1));
    return startDelay + (endDelay - startDelay) * (p * p);
  }

  let i = Math.floor(Math.random() * candidates.length);

  function tick() {
    // show current "highlight" name in the UI as it whizzes
    const name = candidates[i % candidates.length];
    turnInfo.textContent = "Selecting… " + name;
    playSound("wheel-click");
    i++;
    spins++;

    if (spins < totalTicks) {
      setTimeout(tick, tickDelay(spins));
      return;
    }

    // land
    state.turnPool = state.turnPool.filter(n => n !== finalName);
    state.currentPlayer = finalName;
    state.lastDice = null;
    state.stealUnlocked = false;
  state.pendingDice = null;
  state.pendingOutcome = null;
  state.pendingLabel = null;
    saveState();

    renderTurnRemaining();

    const phrase = nextUnique("turn", TURN_PHRASES);
    showOverlay("The Dice Decides", "Roll the dice. Obey the outcome.", finalName + ": " + phrase, "turn");

    pickTurnBtn.disabled = false;
    resetTurnsBtn.disabled = false;
  }

  tick();
}


// ---------- Dice + Actions ----------
function rollDice() {
  if (!state.currentPlayer) return;
  if (state.lastDice) return; // no rerolls

  playSound("dice-roll");
  const n = 1 + Math.floor(Math.random() * 6);
  state.lastDice = n;

  const who = state.currentPlayer;

  // Build outcome text (we show the roll result BEFORE trivia)
  let outcome = who + " rolled a " + n + ". ";
  let label = "";

  if (n === 1) { label = "PEEK"; outcome += "PEEK — secretly peek at ONE person’s socks. No touching."; showShiftyEyes(); }
  if (n === 2) { label = "STEAL"; outcome += "STEAL — choose a victim and take their socks (you give yours in return). Enforced."; }
  if (n === 3) { label = "ACTION CARD"; outcome += "ACTION CARD — draw a chaos card (physical). Play this turn only."; }
  if (n === 4) { label = "BANKER"; outcome += "BANKER — banker’s bonus. Negotiate, tempt, threaten."; }
  if (n === 5) { label = "STEAL"; outcome += "STEAL — choose a victim and take their socks (you give yours in return). Enforced."; }
  if (n === 6) { label = "SHIELD"; outcome += "SHIELD — immune to ONE steal attempt against you until your next turn. Announce it."; }

  // Store pending action + reset trivia gate
  state.pendingDice = n;
  state.pendingOutcome = outcome;
  state.pendingLabel = label || ('ROLL ' + n);
  state.stealUnlocked = false;
  saveState();

  rollBtn.style.display = "none";
  // Don't allow ending the turn until the trivia is answered
  endTurnBtn.classList.remove("pulse-endturn");
  endTurnBtn.style.display = "none";

  // Show the dice outcome FIRST, then (after the typewriter finishes) launch trivia
  typeText(overlayText, outcome, () => startTrivia(who));
}



function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
  }
  return arr;
}

function buildTriviaDeck(bankLen) {
  const deck = Array.from({ length: bankLen }, (_, i) => i);
  return shuffleArray(deck);
}

function nextTriviaQuestion(isKid) {
  const bank = isKid ? KIDS_TRIVIA : ADULT_TRIVIA;
  const deckKey = isKid ? "triviaDeckKids" : "triviaDeckAdult";

  if (!state[deckKey] || !Array.isArray(state[deckKey]) || state[deckKey].length === 0) {
    // Fresh deck: guarantees zero repeats until exhausted
    state[deckKey] = buildTriviaDeck(bank.length);
    saveState();
  }

  const idx = state[deckKey].pop();
  saveState();
  return bank[idx];
}

// ---------- Trivia ----------
function startTrivia(who) {
  triviaBox.classList.add("show");

  const isKid = (who === "Charlotte" || who === "Harriet");
  const q = nextTriviaQuestion(isKid);

  triviaQ.textContent = q.q;
  triviaChoices.innerHTML = "";

  let remaining = 8;
  triviaTimer.textContent = remaining + "s";
  triviaTimer.classList.remove("danger");

  function lock() {
    Array.from(triviaChoices.querySelectorAll("button")).forEach(b => b.disabled = true);
  }

  function finish(ok, timedOut) {
    lock();
    clearInterval(triviaInterval);
    triviaInterval = null;

    state.stealUnlocked = !!ok;
    saveState();

    if (ok) {
      playSound("steal");
      postTriviaMsg.textContent = nextUnique("sarcasm", SARCASM);
    } else {
      postTriviaMsg.textContent = timedOut ? "Too slow. The sock gods love a choke." : "Wrong. Sit down and accept it.";
    }
    postTrivia.classList.add("show");
  }

  q.choices.forEach((c, i) => {
    const b = document.createElement("button");
    b.className = "choiceBtn";
    b.type = "button";
    b.textContent = c;
    b.addEventListener("click", () => {
      const ok = (i === q.a);
      if (ok) b.classList.add("correct");
      else b.classList.add("wrong");

      const corr = triviaChoices.querySelectorAll("button")[q.a];
      if (corr) corr.classList.add("correct");

      finish(ok, false);
    });
    triviaChoices.appendChild(b);
  });

  triviaInterval = setInterval(() => {
    remaining -= 1;
    triviaTimer.textContent = remaining + "s";
    if (remaining <= 3) triviaTimer.classList.add("danger");
    if (remaining <= 0) finish(false, true);
  }, 1000);

  // scroll trivia into view inside overlay
  setTimeout(() => {
    triviaBox.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 60);
}

postTriviaContinue.addEventListener("click", () => {
  postTrivia.classList.remove("show");
  triviaBox.classList.remove("show");

  const outcome = state.pendingOutcome || "";
  if (state.stealUnlocked) {
    typeText(overlayText, outcome + "\n\n✅ Correct — do the action above, then END TURN.");
  } else {
    typeText(overlayText, outcome + "\n\n❌ Wrong — no action this turn. END TURN.");
  }

  endTurnBtn.style.display = "block";
  endTurnBtn.classList.add("pulse-endturn");
});

// ---------- End Turn ----------
endTurnBtn.addEventListener("click", () => {
  if (state.stage === "wheel") {
    hideOverlay();
    return;
  }
  state.currentPlayer = null;
  state.lastDice = null;
  state.stealUnlocked = false;
  state.pendingDice = null;
  state.pendingOutcome = null;
  state.pendingLabel = null;
  saveState();
  hideOverlay();
});

rollBtn.addEventListener("click", rollDice);

// ---------- Buttons ----------
spinBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  spinWheel();
});

toTurnsBtn.addEventListener("click", () => {
  if (state.wheelPool.length) {
    wheelStatus.textContent = "Wheel not empty yet 👀";
    return;
  }
  state.stage = "turns";
  saveState();
  showScreen("turns");
  renderTurnRemaining();
});

pickTurnBtn.addEventListener("click", pickContender);

resetTurnsBtn.addEventListener("click", () => {
  state.turnPool = [];
  state.currentPlayer = null;
  state.lastDice = null;
  state.stealUnlocked = false;
  state.pendingDice = null;
  state.pendingOutcome = null;
  state.pendingLabel = null;
  saveState();
  renderTurnRemaining();
});

// Tap anywhere on splash to start
document.addEventListener("click", () => {
  if (splash.classList.contains("active")) {
    showScreen("wheel");
    drawWheel();
  }
});

// ---------- Config Drawer ----------
function renderPlayers() {
  playerTags.innerHTML = "";
  state.players.forEach(p => {
    const t = document.createElement("div");
    t.className = "tagP";
    t.textContent = p;
    t.addEventListener("click", () => {
      state.players = state.players.filter(x => x !== p);
      state.wheelPool = state.wheelPool.filter(x => x !== p);
      state.turnPool = state.turnPool.filter(x => x !== p);
      if (state.currentPlayer === p) state.currentPlayer = null;
      saveState();
      renderPlayers();
      drawWheel();
      renderTurnRemaining();
    });
    playerTags.appendChild(t);
  });
}

addPlayerBtn.addEventListener("click", () => {
  const name = (playerInput.value || "").trim();
  if (!name) return;
  if (!state.players.includes(name)) {
    state.players.push(name);
    if (state.stage === "wheel") state.wheelPool.push(name);
    saveState();
  }
  playerInput.value = "";
  renderPlayers();
  drawWheel();
  renderTurnRemaining();
});

resetGameBtn.addEventListener("click", () => {
  localStorage.removeItem(STATE_KEY);
  state = loadState();
  wheelAngle = 0;
  lastTickIndex = -1;
  drawer.classList.remove("show");
  hideOverlay();
  showScreen("splash");
  renderPlayers();
  drawWheel();
  renderTurnRemaining();
});

cogBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  drawer.classList.toggle("show");
  renderPlayers();
});

document.addEventListener("click", (e) => {
  if (!drawer.classList.contains("show")) return;
  if (drawer.contains(e.target) || e.target === cogBtn) return;
  drawer.classList.remove("show");
});

// ---------- Boot ----------
(function boot() {
  // keep splash first always
  showScreen("splash");
  renderPlayers();
  drawWheel();
  if (state.stage === "turns") renderTurnRemaining();
})();
