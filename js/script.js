function purchase(item_id) {
    const WebApp = window.Telegram.WebApp;
    fetch(`http://127.0.0.1:8000/buy?user_id=${WebApp.WebAppUser.id}&item=${item_id}`)
    .then(response => response.json())
    .then(data => {
        WebApp.showPopup({
            title  : data.title,
            message: data.message,
            buttons: [{"type":"close"}]
        })})
    .catch(error => {
    WebApp.showPopup({
        title  : "Ошибка",
        message: "Произошла неизвестная ошибка",
        buttons: [{"type":"close"}]
        })})
}

