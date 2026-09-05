// マップにとぶボタンを押した時の関数
function openMap(buttonElement) {
  // 押されたボタンからそれぞれのURLを取得
  const googleUrl = buttonElement.getAttribute("data-google");
  const appleUrl = buttonElement.getAttribute("data-apple");

  const isiPhone = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isiPhone) {
    window.location.href = appleUrl;
  } else {
    window.open(googleUrl, "_blank");
  }
}

// トップ画面のＪＳ //

// splide　メインビジュアル
const mainVisualEl = document.querySelector("#mainVisual");
if (mainVisualEl) {
  new Splide(mainVisualEl, {
    type: "fade",
    rewind: true, // 最後までいったら、最初に巻き戻る
    autoplay: true,
    interval: 6000,
    speed: 2000,
    pauseOnHover: false,
    arrows: false,
    pagination: false, // 下部のドットナビゲーションを非表示する
  }).mount();
}

// splide　historyセクション
const historyMediaEl = document.querySelector("#historyMedia");
const historyTextEl = document.querySelector("#historyText");

if (historyMediaEl && historyTextEl) {
  const historyMedia = new Splide(historyMediaEl, {
    autoplay: true,
    speed: 800,
    arrows: false,
    pagination: true,
  });

  const historyText = new Splide(historyTextEl, {
    type: "fade",
    rewind: true,
    speed: 600,
    arrows: false,
    pagination: false,
  });

  historyMedia.sync(historyText);
  historyMedia.mount();
  historyText.mount();
}

// splide　galleryセクション
const galleryMediaEl = document.querySelector("#galleryMedia");
if (galleryMediaEl) {
  new Splide(galleryMediaEl, {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: 10,
    autoplay: true,
    speed: 800,
    pagination: true,
  }).mount();
}


// history画面のＪＳ //
document.querySelectorAll(`.splideHistory`).forEach(slide => {
  new Splide(slide, {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: 30,
    padding: 100,
    // fixedWidth: 750,
    breakpoints: {
      1350:{
        perPage: 2,
        gap: 40,
      },
      875: {
        gap: 30,
        padding:50,
        fixedWidth:300
      }
    },
    autoplay: true,
    speed: 1000,
    arrows: false,
    pagination: true,
  }).mount();
});
