const canvasDiv = document.getElementById("canvasDiv");
const qrDiv = document.getElementById("qrDiv");
const inputText = document.getElementById("inputText");
const qrText = document.getElementById("qrText");

function generateCode() {
    if(inputText.value == ""){
        alert("Please enter your text");
    } else {
        var qr = new QRious({
            element: canvasDiv,
            value: inputText.value,
            foreground: "green",
            size: 200,
          });

        qrDiv.style.display = "inline-block";

        qrText.innerText = inputText.value;

        inputText.value = "";
    }
}

function closeQr() {
    qrDiv.style.display = "none";
    qrText.innerText = "";
}