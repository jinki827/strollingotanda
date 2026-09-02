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

document.addEventListener('DOMContentLoaded', function () {
    new Splide( '.splide' , {
        type: 'fade',
        rewind: true,       // 最後までいったら、最初に巻き戻る
        autoplay: true,     
        interval: 6000,
        speed: 2000,
        pauseOnHover:false,
        arrows: false,
        pagination: false,    // 下部のドットナビゲーションを非表示する
    }).mount();
});