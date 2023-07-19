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

// klik akan mengatur ualng waktu
document.getElementById("backTimer").addEventListener("click", () => {
    clearInterval(stopInterval);
    document.getElementById("timer").style.marginLeft = "200%";
    document.querySelector("form").style.marginLeft = "0%";
}); // End


// membuka setting
document.getElementById("setting").addEventListener("click", () => {
    document.getElementById("settingPage").style.top = "50%"
})

// atur volume
document.getElementById("ranged").addEventListener("input", () => {
    document.getElementById("numVol").innerText = document.getElementById("ranged").value;
    localStorage.setItem('rangeValue', document.getElementById("ranged").value);
})

window.addEventListener('load', function () {
    var rangeValue = localStorage.getItem('rangeValue');
    if (rangeValue) {
        document.getElementById("ranged").value = rangeValue;
    }
});

// tutup setting
document.getElementById("tutupSet").addEventListener("click", () => {
    document.getElementById("settingPage").style.top = "-200%"
})

// mematikan suara saat timeout
document.getElementById("buttonStopMusic").addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    document.getElementById("stopMusic").style.top = "-200%";
    document.getElementById("showTimer").style.display = "none";
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