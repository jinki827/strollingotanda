// マップにとぶボタンを押した時の関数
function openMap(buttonElement) {
  // 押されたボタンからGoogleMapのURLを取得して新しいタブで開く
  const googleUrl = buttonElement.getAttribute("data-google")
  window.open(googleUrl, "_blank")
  // apple版のMapアプリに誘導うる機能は削除。iPhoneユーザーもgoogleMap使ってる
}

// サイドメニューJS //
const sideButtonEl = document.getElementById("sideButton")
const sideBarEl = document.getElementById("sideBar")
const maskEl = document.getElementById("mask")

// サイドボタンが押されたら、activeクラスを追加してサイドバー登場
sideButtonEl.addEventListener("click", function() {
  this.classList.toggle("active")    // クラス追加
  sideBarEl.classList.toggle("active")
  maskEl.classList.toggle("active")
})


const menuLinks = document.querySelectorAll("#sideBar a")
// querySelector : CSSの指定の仕方・要素を取得できる。※該当する最初の要素だけ取得
// querySelectorAll：該当するすべての要素を取得する。node-listの形式で取得する。
// node-list：複数の要素(node)

console.log(location)
const locationData = location
menuLinks.forEach(link => {
  
  // ページ遷移したら、activeクラスを外して、サイドバーを隠す
  link.addEventListener("click", function() {
    sideButtonEl.classList.remove("active")
    sideBarEl.classList.remove("active")
    maskEl.classList.remove("active")
  })
  
  // サイドバーで現在のページにactiveクラスをつけてアイコンを置くための目印にする
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

// サイドボタンがmainVisualの範囲に入ったらonMainクラスをつける処理
if (mainVisualEl && sideButtonEl) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sideButtonEl.classList.add("onMain")
      } else {
        sideButtonEl.classList.remove("onMain")
      }
    })
  },{
    rootMargin: "0px 0px -90% 0px"
  })
  observer.observe(mainVisualEl)
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
    arrows:false,
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
