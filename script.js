const root = document.getElementById("root");
const player = ["x", "o"];
let pClick = [false, false, false, false, false, false, false, false, false];
let win = ["", "", "", "", "", "", "", "", ""];

function createTag(tagName, className) {
  let newtag = document.createElement(tagName);
  newtag.setAttribute("class", className);
  return newtag;
}
const header = createTag("div", "head");
root.appendChild(header);
const startBtn = createTag("button", "startBtn");
startBtn.innerText = "Эхлэх";
startBtn.addEventListener("click", gamePlay);
const Playerdiv = createTag("div", "playerdiv");
header.appendChild(Playerdiv);
const pl1 = createTag("div", "pl1");
const pl2 = createTag("div", "pl2");
Playerdiv.appendChild(pl1);
Playerdiv.appendChild(pl2);
const pl1text = createTag("p", "pl1t");
pl1text.innerText = "Тоглогч 1";
const pl2text = createTag("p", "pl2t");
pl2text.innerText = "Тоглогч 2";
const pl1img = createTag("img", "pl1img");
pl1img.setAttribute("src", "./pic/x.png");
const pl2img = createTag("img", "pl2img");
pl2img.setAttribute("src", "./pic/o.png");
pl1.appendChild(pl1text);
pl1.appendChild(pl1img);
pl2.appendChild(pl2text);
pl2.appendChild(pl2img);
header.appendChild(startBtn);
const nowClick = createTag("p", "nowClick");
header.appendChild(nowClick);
// console.log("header:", header);
const container = document.createElement("div");
container.setAttribute("class", "container");
const ttt = document.createElement("div");
ttt.setAttribute("class", "ttt");
let playerClick = 0;
container.appendChild(ttt);

root.appendChild(container);
// gamePlay();
let count = 0;
gamePlay();
function gamePlay() {
  ttt.innerHTML = "";
  let count = 0;
  let playerClick = Math.floor(Math.random() * 10) % 2;
  //   console.log(playerClick);
  nowClick.innerText = player[playerClick] + " - тавих ээлж";
  pClick = [false, false, false, false, false, false, false, false, false];
  //   console.log("hi");
  win = ["", "", "", "", "", "", "", "", ""];
  for (let i = 0; i < 9; i++) {
    const item = document.createElement("div");
    item.setAttribute("class", "item");
    item.setAttribute("id", i);
    ttt.appendChild(item);
    item.addEventListener("click", (e) => {
      //   console.log(pClick[e.target.id]);
      if (pClick[e.target.id]) {
        // console.log("daragdsan bn");
      } else {
        const tm = document.getElementById(`${e.target.id}`);
        const t = document.createElement("img");
        const link = `./pic/${player[playerClick]}.png`;
        win[e.target.id] = player[playerClick];
        // console.log("win:", win);
        t.setAttribute("src", link);
        tm.appendChild(t);
        playerClick = (playerClick + 1) % 2;
        nowClick.innerText = player[playerClick] + " тавих ээлж";
        // console.log(playerClick);
        pClick[e.target.id] = true;
        // console.log(wins());
        if (wins()) {
          //   console.log("yes");
        } else {
          //   console.log("iish");
          count++;

          if (count == 9) {
            const winner = createTag("div", "winner");
            winner.innerText = "Тэнцлээ";
            ttt.appendChild(winner);
          }
        }
      }
    });
  }
}

// 0 1 2
// 3 4 5
// 6 7 8
let winPlayer;
function row() {
  let r1 = win[0] + win[1] + win[2];
  let r2 = win[3] + win[4] + win[5];
  let r3 = win[6] + win[7] + win[8];
  if (r1 == "xxx" || r2 == "xxx" || r3 == "xxx") {
    winPlayer = "Тоглогч 1 хожлоо";
    return true;
  } else if (r1 == "ooo" || r2 == "ooo" || r3 == "ooo") {
    winPlayer = "Тоглогч 2 хожлоо";

    return true;
  } else {
    return false;
  }
}
function col() {
  let r1 = win[0] + win[3] + win[6];
  let r2 = win[1] + win[4] + win[7];
  let r3 = win[2] + win[5] + win[8];
  //   console.log("row-f");
  if (r1 == "xxx" || r2 == "xxx" || r3 == "xxx") {
    winPlayer = "Тоглогч 1 хожлоо";

    return true;
  } else if (r1 == "ooo" || r2 == "ooo" || r3 == "ooo") {
    winPlayer = "Тоглогч 2 хожлоо";

    return true;
  } else {
    return false;
  }
}
function diag() {
  let d1 = win[0] + win[4] + win[8];
  let d2 = win[2] + win[4] + win[6];
  if (d1 == "xxx" || d2 == "xxx") {
    winPlayer = "Тоглогч 1 хожлоо";

    return true;
  } else if (d1 == "ooo" || d2 == "ooo") {
    winPlayer = "Тоглогч 2 хожлоо";

    return true;
  } else {
    return false;
  }
}
function wins() {
  //   console.log("row:", row());
  //   console.log("col:", col());
  //   console.log("d:", diag());
  if (row() || col() || diag()) {
    const winner = createTag("div", "winner");
    winner.innerText = winPlayer;
    ttt.appendChild(winner);
    // alert(winPlayer);
    return true;
  } else {
    return false;
  }
}
