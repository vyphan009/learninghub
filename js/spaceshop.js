function purchase() {
    let wallet = document.querySelector(".user_crystals");
    let walletTmp = wallet.innerHTML.match(/\d/g).toString();
    walletTmp = walletTmp.split(',').join('');

    let price = document.querySelector(".active .costume_price");
    price = price.innerHTML.match(/\d/g).toString();
    price = price.split(',').join('');

    difference = walletTmp - price;
    let crystalimg = document.querySelector(".user_wallet");
    localStorage.setItem("dif", difference);
    crystalimg = crystalimg.querySelector("img");

    if (difference >= 0) {
        wallet = wallet.querySelector(".user_wallet");
        wallet.innerHTML = difference + " ";
        wallet.appendChild(crystalimg);
    }

}

