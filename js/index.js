function generateQR() {
    const qrText = document.getElementById("qr-text").value;
    const qrCode = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrText}" alt="QR Code">`;
    document.getElementById("qr-code").innerHTML = qrCode;}
document.getElementById('downloadBtn').addEventListener('click', function() {
	var qrCodeImgSrc = document.getElementById('qrCode').getAttribute('src');
	var downloadLink = document.createElement('a');
      downloadLink.href = qrCodeImgSrc;
      downloadLink.download = 'qr_code.png'; 
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });