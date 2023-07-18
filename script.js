document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    document.querySelector("button").style.display = "inline-block";
    document.getElementById("showTimer").style.display = "none";
    document.getElementById("timer").style.marginLeft = "0%";
    document.getElementById("timer").style.marginTop = "-130px";
    document.querySelector("form").style.marginLeft = "-200%";
    document.getElementById("tumbal1").innerText = document.getElementById("inputJam").value + " Jam,";
    document.getElementById("tumbal2").innerText = document.getElementById("inputMenit").value + " Menit,";
    document.getElementById("tumbal3").innerText = document.getElementById("inputDetik").value + " Detik.";
});


document.querySelector("button").addEventListener("click", () => {
    document.querySelector("button").style.display = "none";
    document.getElementById("showTimer").style.display = "flex";
    let jam = document.querySelector("#inputJam").value;
    let min = document.querySelector("#inputMenit").value;
    let det = document.querySelector("#inputDetik").value;
    let Jam = document.querySelector("#jam")
    let menit = document.querySelector("#menit")
    let detik = document.querySelector("#detik")
    Jam.innerHTML = parseInt(jam) + ",";
    menit.innerHTML = parseInt(min) + ",";
    detik.innerHTML = parseInt(det);
    let waktuInterval = 1000;
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
            clearInterval(stopInterval)
        }
        Jam.innerHTML = parseInt(jam) + ",";
        menit.innerHTML = parseInt(min) + ",";
        detik.innerHTML = parseInt(det);
    }
    let stopInterval = setInterval(mundur, waktuInterval)
    document.getElementById("backTimer").addEventListener("click", () => {
        // clearInterval(stopInterval);
        document.getElementById("timer").style.marginLeft = "200%";
        document.querySelector("form").style.marginLeft = "0%";
        jam = 0;
        min = 0;
        det = 1;
    })
});

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