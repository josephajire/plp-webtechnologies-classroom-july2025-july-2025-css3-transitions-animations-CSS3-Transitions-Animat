/* -----------------------------------------------------------
   YIELD CALCULATION FUNCTIONS
------------------------------------------------------------*/
let yieldPerAcre = 20;

function calculateYield(acres) {
    let total = acres * yieldPerAcre;
    return total;
}

function showYield() {
    let acres = Number(document.getElementById("acreInput").value);
    let result = calculateYield(acres);

    document.getElementById("yieldResult").textContent =
        "Estimated Yield: " + result + " bags of maize.";
}

/* -----------------------------------------------------------
   JS TRIGGERING CSS ANIMATIONS
------------------------------------------------------------*/
document.getElementById("animateBtn").addEventListener("click", () => {
    let box = document.getElementById("triggerBox");

    box.classList.remove("animate-move");
    void box.offsetWidth;
    box.classList.add("animate-move");
});

/* -----------------------------------------------------------
   MODAL CONTROL
------------------------------------------------------------*/
const modal = document.getElementById("modal");

document.getElementById("openModalBtn").onclick = () => {
    modal.style.display = "block";
};

document.getElementById("closeModalBtn").onclick = () => {
    modal.style.display = "none";
};
