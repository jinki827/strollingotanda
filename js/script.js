// マップにとぶボタンを押した時の関数
function openMap(buttonElement) {
    // 押されたボタンからそれぞれのURLを取得
    const googleUrl = buttonElement.getAttribute('data-google');
    const appleUrl = buttonElement.getAttribute('data-apple');
    
    const isiPhone = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isiPhone) {
        window.location.href = appleUrl;
    } else {
        window.open(googleUrl, '_blank');
    }
}


// トップ画面のＪＳ //

// splide　メインビジュアル
new Splide( '#mainVisual' , {
    type: 'fade',
    rewind: true,       // 最後までいったら、最初に巻き戻る
    autoplay: true,     
    interval: 6000,
    speed: 2000,
    pauseOnHover:false,
    arrows: false,
    pagination: false,    // 下部のドットナビゲーションを非表示する
}).mount();

const historyMedia = new Splide( '#historyMedia' , {
    // type: 'loop',
    speed: 800,
    arrows: false,
    pagination: true,
});

const historyText = new Splide( '#historyText' , {
    type: 'fade',
    rewind: true,
    speed: 600,
    arrows: false,
    pagination: false,
});

historyMedia.sync(historyText);
historyMedia.mount();
historyText.mount();

new Splide( '#galleryMedia' , {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: 10,
    autoplay: true,     
    // interval: 6000,
    speed: 600,
    speed: 800,
    pagination: true,
}).mount();