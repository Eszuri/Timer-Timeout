// klik setelah mengatur waktu
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    document.querySelector("button").style.display = "inline-block";
    document.getElementById("showTimer").style.display = "none";
    document.getElementById("timer").style.marginLeft = "0%";
    document.getElementById("timer").style.marginTop = "-230px";
    document.querySelector("form").style.marginLeft = "-200%";
    document.getElementById("numVol").innerText = document.getElementById("ranged").value;
    document.getElementById("showKeterangan").innerText = document.getElementById("keterangan").value;
    document.getElementById("tumbal1").innerText = document.getElementById("inputJam").value + " Jam,";
    document.getElementById("tumbal2").innerText = document.getElementById("inputMenit").value + " Menit,";
    document.getElementById("tumbal3").innerText = document.getElementById("inputDetik").value + " Detik.";
    if (document.getElementById("inputJam").value == 0 && document.getElementById("inputMenit").value == 0 && document.getElementById("inputDetik").value == 0) {
        alert("Jangan 0 Semua, paling minimal 1 detik");
        document.querySelector("form").style.marginLeft = "0%";
        document.getElementById("timer").style.marginLeft = "200%";
    }
}); // End

// variabel kosong
let jam;
let Jam;
let menit;
let detik;
let min;
let det;
let stopInterval;
let audio;
let video;
// End

// klik akan memulai waktu mundur
document.querySelector("button").addEventListener("click", () => {
    video = document.querySelector("video");
    video.play();
    video.addEventListener("ended", function () {
        video.currentTime = 0;
        video.play();
    });
    document.querySelector("button").style.display = "none";
    document.getElementById("showTimer").style.display = "flex";
    jam = document.querySelector("#inputJam").value;
    min = document.querySelector("#inputMenit").value;
    det = document.querySelector("#inputDetik").value;
    Jam = document.querySelector("#jam")
    menit = document.querySelector("#menit")
    detik = document.querySelector("#detik")
    Jam.innerHTML = parseInt(jam) + ",";
    menit.innerHTML = parseInt(min) + ",";
    detik.innerHTML = parseInt(det);
    stopInterval = setInterval(mundur, 1000);
    function mundur() {
        det -= 1;
        if (det === -1) {
            det = 59;
            min -= 1;
        }
        if (min === -1) {
            min = 59;
            jam -= 1;
        }
        if (jam === -1) {
            jam = 0;
        }
        if (jam < 1 && min < 1 && det < 1) {
            document.querySelector("button").style.display = "inline-block";
            document.querySelector("button").innerText = "MULAI ULANG";
            document.getElementById("stopMusic").style.top = "0%";
            clearInterval(stopInterval);
            video.pause();
            audio = new Audio("./timeout.wav");
            audio.play();
            audio.volume = document.getElementById("ranged").value;
            audio.addEventListener('ended', function () {
                audio.currentTime = 0; // Mengatur waktu pemutaran kembali ke awal
                audio.play();
            });
        }
        Jam.innerHTML = parseInt(jam) + ",";
        menit.innerHTML = parseInt(min) + ",";
        detik.innerHTML = parseInt(det);
    }
}); // End

// klik akan mengatur ulang waktu
document.getElementById("backTimer").addEventListener("click", () => {
    if (document.getElementById("showTimer").style.display === "flex") {
        const konfirmasi = window.confirm("waktu mundur sedang berjalan, Antum yakin akan atur ulang waktu.")
        if (konfirmasi) {
            clearInterval(stopInterval);
            document.getElementById("timer").style.marginLeft = "200%";
            document.querySelector("form").style.marginLeft = "0%";
        } else {
            document.getElementById("timer").style.marginLeft = "0%";
            document.querySelector("form").style.marginLeft = "-200%";
        }
    } else {
        document.getElementById("timer").style.marginLeft = "200%";
        document.querySelector("form").style.marginLeft = "0%";
    }
}); // End

// buka menu / list
let benar = true;
document.getElementById("menu").addEventListener("click", () => {
    if (benar) {
        document.getElementById("pageMenu").style.width = "12rem"
        benar = false;
        document.getElementById("menu").style.color = "red";
    } else {
        document.getElementById("pageMenu").style.width = "0px"
        benar = true;
        document.getElementById("menu").style.color = "";
    }
})

// membuka setting
document.getElementById("setting").addEventListener("click", () => {
    document.getElementById("settingPage").style.top = "50%";
    document.getElementById("numVol").innerText = document.getElementById("ranged").value;
    document.getElementById("menu").style.right = "-500%";
    document.getElementById("pageMenu").style.right = "-500%";
    document.getElementById("inputColor").value = localStorage.getItem('colorValue');
    document.getElementById("inputColor2").value = localStorage.getItem('colorValue2');
})
// membuka about
document.getElementById("about").addEventListener("click", () => {
    document.getElementById("aboutPage").style.top = "50%";
    document.getElementById("menu").style.right = "-500%";
    document.getElementById("pageMenu").style.right = "-500%";
})

// text atur volume
document.getElementById("ranged").addEventListener("input", () => {
    document.getElementById("numVol").innerText = document.getElementById("ranged").value;
})

// save setting
document.getElementById("saveSett").addEventListener("click", () => {
    localStorage.setItem('rangeValue', document.getElementById("ranged").value);
    localStorage.setItem('colorValue', document.getElementById("inputColor").value);
    localStorage.setItem('colorValue2', document.getElementById("inputColor2").value);
    alert("Tersimpan");
})

// load local storage
// window.addEventListener('load', function () {
document.body.style.backgroundColor = localStorage.getItem('colorValue');
document.getElementById("bgMain").style.backgroundColor = localStorage.getItem('colorValue2');
document.querySelector("footer").style.backgroundColor = localStorage.getItem('colorValue2');
document.getElementById("ranged").value = localStorage.getItem('rangeValue');
// });

// tutup setting
document.getElementById("tutupSet").addEventListener("click", () => {
    document.getElementById("settingPage").style.top = "-200%";
    document.getElementById("menu").style.right = "";
    document.getElementById("pageMenu").style.right = "";
})
// tutup about
document.getElementById("tutupAbo").addEventListener("click", () => {
    document.getElementById("aboutPage").style.top = "-200%";
    document.getElementById("menu").style.right = "";
    document.getElementById("pageMenu").style.right = "";
})

// mematikan suara saat timeout
document.getElementById("buttonStopMusic").addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    document.getElementById("stopMusic").style.top = "-200%";
    document.getElementById("showTimer").style.display = "none";
})

// preview backgound body
document.getElementById("inputColor").addEventListener("input", () => {
    document.body.style.backgroundColor = document.getElementById("inputColor").value;
})

// preview backgound content halaman
document.getElementById("inputColor2").addEventListener("input", () => {
    document.getElementById("bgMain").style.backgroundColor = document.getElementById("inputColor2").value;
    document.querySelector("footer").style.backgroundColor = document.getElementById("inputColor2").value;
})
// style footer
const foo = document.querySelector("footer");
foo.innerText = "Created By Eszuri";
foo.style.fontSize = "20px";
foo.classList.add("bg-blue-900");
foo.style.textAlign = "center";
foo.style.position = "absolute";
foo.style.left = "50%";
foo.style.bottom = "0%";
foo.style.transform = "translateX(-50%)";
foo.style.borderTop = "2px solid yellow";
foo.style.width = "95%";
// End

// style lainnya
document.body.style.color = "white";