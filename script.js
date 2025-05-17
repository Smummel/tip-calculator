function calculateTip(){
    let tipFactor=1;
    let bill;
    let ifGenerous=false;
    let ifAngry=false;
}

const slider = document.getElementById("slider");
const output = document.getElementById("sliderValue");

slider.addEventListener("input", () => {
  output.textContent = parseFloat(slider.value).toFixed(2);
});