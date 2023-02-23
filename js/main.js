// 패널 돌리기
const frame = document.querySelector("section");
const articleArr = frame.querySelectorAll("article");
const len = articleArr.length;
const deg = 360 / len;

// console.log(articleArr);

const names = [
  "cardio",
  "groove",
  "happy",
  "light",
  "lily",
  "limes",
  "pop",
  "swing",
];

for (let i = 0; i < len; i++) {
  articleArr[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;

  //사진 부분 일괄 적용
  const pic = articleArr[i].querySelector(".pic");
  pic.style.backgroundImage = `url(../img/${names[i]}.jpg)`;

  //음악 제목 일괄 적용

  const title = articleArr[i].querySelector(".text>h2");
  title.innerHTML = `${names[i]}`;
  // 음악 태그 파일 일괄 적용
  const audio = document.createElement("audio");
  audio.setAttribute("src", `../music/music/${names[i]}.mp3`);
  audio.setAttribute("loop", "loop");
  articleArr[i].append(audio);
}

//Prev,Next 버튼 만들기

const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

let num = 0; //회전 각도 조절용
let active = 0; // 조절 패널 위치

prev.addEventListener("click", function () {
  frame.style.transform = `rotate(${deg * ++num}deg)`;

  if (active === 0) {
    active = len - 1;
  } else {
    active--;
  }

  for (let el of articleArr) {
    el.classList.remove("on");

    articleArr[active].classList.add("on");
    console.log(active);
    currentMusic = active;
  }
  articleArr[active].classList.remove("on");
});

next.addEventListener("click", function () {
  frame.style.transform = `rotate(${deg * --num}deg)`;
  if (active === len - 1) {
    active = 0;
  } else {
    active++;
  }

  for (let el of articleArr) {
    el.classList.remove("on");

    articleArr[active].classList.add("on");
    // console.log(active);
    // console.log(articleArr);

    // console.log(articleArr[active]);
    el.querySelector("audio").pause();
    console.log(el);
  }

  const pause = articleArr[active];
  console.log(pause);
});

let before = 0;
//cd 모양 사진 회전 & 음악 재생
for (let el of articleArr) {
  const play = el.querySelector(".play");
  const pause = el.querySelector(".pause");
  const reload = el.querySelector(".reload");

  play.addEventListener("click", function (e) {
    // if (before === 0) {
    //   before = e.target;
    // } else if (before !== e.target) {
    //   before.closest("article").querySelector("audio").pause();
    //   before.closest("article").querySelector(".pic").classList.remove("on");
    //   before = e.target;
    // }

    el.querySelector(".pic").classList.add("on");
    el.querySelector("audio").play();
  });
  pause.addEventListener("click", function (e) {
    e.target.closest("article").querySelector(".pic").classList.remove("on");
    el.querySelector("audio").pause();
  });

  reload.addEventListener("click", function () {
    el.querySelector(".pic").classList.add("on");
    el.querySelector("audio").load();
    el.querySelector("audio").play();
  });
}
