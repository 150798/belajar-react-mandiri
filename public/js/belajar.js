window.onload = function () {
    belajar();
}
function belajar() {

    fetch('book.json')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            // var databook = ""; //buat nyimpen list2nya sebelum masuk ke HTMLnya.
            // for (var i = 0; i < 2; i++) {
            //     databook += profileBookOnProgress(json[i]);
            // }
            // document.getElementById('onprogressbook').innerHTML = databook;
        })
        // handling error
        .catch(err => console.log(err))
}