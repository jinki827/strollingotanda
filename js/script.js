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