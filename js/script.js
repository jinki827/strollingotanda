// マップにとぶボタンを押した時の関数
function openMap(buttonElement) {
  // 押されたボタンからそれぞれのURLを取得
  const googleUrl = buttonElement.getAttribute("data-google")
  const appleUrl = buttonElement.getAttribute("data-apple")

  const isiPhone = /iPhone|iPad|iPod/i.test(navigator.userAgent)

  if (isiPhone) {
    window.location.href = appleUrl
  } else {
    window.open(googleUrl, "_blank")
  }
}

// サイドメニューJS //
document.getElementById("sideButton").addEventListener("click", function() {
  this.classList.toggle("active")    // クラス追加
  document.getElementById("sideBar").classList.toggle("active")
  document.getElementById("mask").classList.toggle("active")
})


const menuLinks = document.querySelectorAll("#sideBar a")
// querySelector : CSSの指定の仕方・要素を取得できる。※該当する最初の要素だけ取得
// querySelectorAll：該当するすべての要素を取得する。node-listの形式で取得する。
// node-list：複数の要素(node)

console.log(location)
const locationData = location
menuLinks.forEach(link => {
  if (link.getAttribute("href") === locationData.pathname) {
    link.classList.add("active")
  } 
})


// トップ画面のJS //

// splide　メインビジュアル
const mainVisualEl = document.getElementById("mainVisual")
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
  }).mount()
}

// splide　historyセクション
const historyMediaEl = document.getElementById("historyMedia")
const historyTextEl = document.getElementById("historyText")

if (historyMediaEl && historyTextEl) {
  const historyMedia = new Splide(historyMediaEl, {
    speed: 800,
    arrows: false,
    pagination: true,
  })

  const historyText = new Splide(historyTextEl, {
    type: "fade",
    rewind: true,
    speed: 600,
    arrows: false,
    pagination: false,
  })

  historyMedia.sync(historyText)
  historyMedia.mount()
  historyText.mount()
}

// splide　galleryセクション
const galleryMediaEl = document.getElementById("galleryMedia")
if (galleryMediaEl) {
  new Splide(galleryMediaEl, {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: 20,
    padding: 50,
    breakpoints: {
      1060:{
        gap: 30,
        padding:50,
        fixedWidth:300
      }
    },
    autoplay: true,
    speed: 1000,
    pagination: true,
  }).mount()
}


// history画面のＪＳ //
document.querySelectorAll(`.splideHistory`).forEach(slide => {
  new Splide(slide, {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: 30,
    padding: 100,
    breakpoints: {
      1700:{
        perPage: 2,
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
  }).mount()
})
