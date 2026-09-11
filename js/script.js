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

let locationPath = location.pathname
if (locationPath.endsWith('/')) {
  locationPath += "index.html"
}
console.log(locationPath)

// 実装時に、全体のpathを取得してきてしまうので、ページのファイルパスだけに絞った。
menuLinks.forEach(link => {
  
  // ページ遷移したら、activeクラスを外して、サイドバーを隠す
  link.addEventListener("click", function() {
    sideButtonEl.classList.remove("active")
    sideBarEl.classList.remove("active")
    maskEl.classList.remove("active")
  })
  
  // サイドバーのリンクボタンで現在のページにリンク先が同じボタンクラスに activeクラスをつけてアイコンを置くための目印にする
  const linkPath = link.pathname
  console.log(link.pathname)
  if (linkPath === locationPath) {
    link.classList.add("active")
  } 
  
})






// トップ画面のJS //

// メインビジュアル
// splide 制御
const mainVisualEl = document.getElementById("mainVisual")
if (mainVisualEl) {
  const mainVisualsplide = new Splide(mainVisualEl, {
    type: "fade",
    rewind: true, // 最後までいったら、最初に巻き戻る
    autoplay: true,
    interval: 6000,
    speed: 2000,
    pauseOnHover: false,
    arrows: false,
    pagination: false, // 下部のドットナビゲーションを非表示する
  })
  
  // マウント前にmounted イベントをセットして、フェードインしようとする。
  mainVisualsplide.on("mounted", () => {
    mainVisualEl.classList.add("isLoaded")
  })
  
  mainVisualsplide.mount()
}


// Spotセクション 
// マップのdialogの制御
const mapDialogEl = document.getElementById("mapDialog")
const openDialogButtonEl = document.getElementById("openDialogButton")
const closeDialogButtonEl = document.getElementById("closeDialogButton")

// mapボタンを押して、ダイアログを開く
openDialogButtonEl.addEventListener("click", () => {
  mapDialogEl.showModal()
})
// 「×」ボタンを押して、ダイアログを閉じる
closeDialogButtonEl.addEventListener("click", () => {
  mapDialogEl.close()
})
// 背景を押しても、ダイアログを閉じる
mapDialogEl.addEventListener("click", (event) => {
  if (event.target === mapDialogEl) {
    mapDialogEl.close()
  }
})

// GoogleMapを開く関数
function openMap(buttonElement) {
  // 押されたボタンからGoogleMapのURLを取得して新しいタブで開く
  const googleUrl = buttonElement.getAttribute("data-google")
  window.open(googleUrl, "_blank")
  // apple版のMapアプリに誘導うる機能は削除。iPhoneユーザーもgoogleMap使ってる
}




// historyセクション
// splide 制御
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

// galleryセクション
// splide 制御
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




// 各要素をフェードインさせる処理
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // 対象の要素が画面内に入ったか判定
    if (entry.isIntersecting) {
      // 画面内に入ったら、`isActive` クラスを付与して、フェードイン
      entry.target.classList.add("isActive")

      // 初回だけ実行したいので、一度表示されたら要素の監視を解除する
      observer.unobserve(entry.target)
    }
  })
  }, {
    // オプション設定
    rootMargin: '0px 0px -100px 0px'  // 画面の下から100px 分入ったタイミングで発火させるときれいらしい
})

// `.fadeIn`など　動作をつけたいクラスを持つすべての要素を監視対象に登録する
document.querySelectorAll(".fadeIn, .slideInLeft, .slideInRight, .charFadeIn").forEach(el => {
  observer.observe(el)
})





// historyPageのＪＳ //
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
