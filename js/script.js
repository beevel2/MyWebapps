function purchase(item_id) {
//    fetch(`http://127.0.0.1:8000/buy?user_id=${window.Telegram.WebApp.WebAppUser.id}&item=${item_id}`)
//    .then(response => response.json())
//    .then(data => {
//        window.Telegram.WebApp.showPopup({
//            title  : data.title,
//            message: data.message,
//            buttons: [{"type":"close"}]
//        })})
//    .catch(error => {
//    window.Telegram.WebApp.showPopup({
//        title  : "Ошибка",
//        message: "Произошла неизвестная ошибка",
//        buttons: [{"type":"close"}]
//        })})
    console.log(window.Telegram.WebApp)
}

