const inputText = document.getElementById("inputText");
const canvasDiv = document.getElementById("canvasDiv");

function generateCode() {
    if(inputText.value == "") {
        alert("Please enter your text");
    } else {
        var qr = new QRious({
            element: canvasDiv,
            value: inputText.value,
            foreground: "#800080",
            size: 200,
        });

        canvasDiv.style.display = "inline-block";
    }
}