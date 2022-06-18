const btn = document.querySelector("#random");
const hexTitle = document.querySelector("#hex");

function generateColour() {
    let backgroundColour = "";
    let textColour = "#";
    const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    for (let num = 0; num <= 5; num++) {
        randIndex = Math.floor(Math.random() * chars.length);
        backgroundColour += chars[randIndex]

    }
    for(const char of backgroundColour) {
        let index = chars.indexOf(char);
        textColour += chars.reverse()[index];
    }


    console.log(textColour);

    backgroundColour = `#${backgroundColour}`;
    hexTitle.innerText = backgroundColour;
    document.body.style.backgroundColor = backgroundColour;
    btn.style.backgroundColor = backgroundColour;
    document.body.style.color = textColour;
    btn.style.color = textColour;
    btn.style.borderColor = textColour;

}

btn.addEventListener("click", generateColour);
