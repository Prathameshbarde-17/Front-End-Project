let qrcode = new QRCode(document.querySelector(".qrcode"));

qrcode.makeCode("Scan ME!");

function generateQr() {
  if (
    document.querySelector("input").value === "" ||
    document.querySelector("input").value === " "
  ) {
    alert("Please enter a valid text or URL");
  } else {
    qrcode.makeCode(document.querySelector("input").value);
  }
}
