window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

document.body.style.opacity = "0";
document.body.style.transition = "opacity 1.5s";

const figure = document.getElementById("shadowFigure");

let typed = "";

document.addEventListener("keydown", (event) => {
    typed += event.key.toUpperCase();

    if (typed.length > 10) {
        typed = typed.slice(-10);
    }

    if (typed.includes("RUN")) {
        runAnimation();
    }
});

function runAnimation() {
    figure.animate(
        [
            { transform: "translateX(0px)" },
            { transform: "translateX(-250px)" },
            { transform: "translateX(0px)" }
        ],
        {
            duration: 3000,
            easing: "ease-in-out"
        }
    );
}

let friendMode = false;

figure.addEventListener("click", () => {
    friendMode = true;
    typed = "";
});

document.addEventListener("keydown", (event) => {

    if (!friendMode) return;

    typed += event.key.toUpperCase();

    if (typed.includes("FRIEND")) {

        document.body.style.transition = "1s";
        document.body.style.background = "black";

        document.body.innerHTML =
        "<div style='display:flex;justify-content:center;align-items:center;height:100vh;font-size:100px;color:white;font-family:Arial;'>Friend</div>";

        setTimeout(() => {
            location.reload();
        },3000);

    }

});