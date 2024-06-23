document.addEventListener('DOMContentLoaded', function() {
    const qrContainer = document.getElementById('qrcode');
    const generateBtn = document.getElementById('generate');
    const downloadBtn = document.getElementById('download');
    const resetBtn = document.getElementById('reset');
    const textInput = document.getElementById('text');

    let qrCode;

    generateBtn.addEventListener('click', () => {
        const text = textInput.value.trim();
        if (text) {
            qrContainer.innerHTML = '';
            qrCode = new QRCode(qrContainer, {
                text: text,
                width: 128,
                height: 128
            });
            downloadBtn.disabled = false;
        }
    });

    downloadBtn.addEventListener('click', () => {
        if (qrCode) {
            const canvas = qrContainer.querySelector('canvas');
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'qrcode.png';
            link.click();
        }
    });

    resetBtn.addEventListener('click', () => {
        textInput.value = '';
        qrContainer.innerHTML = '';
        downloadBtn.disabled = true;
    });

    textInput.addEventListener('input', () => {
        downloadBtn.disabled = true;
    });
});
