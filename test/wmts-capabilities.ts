import WMTSCapabilities from 'ol/format/WMTSCapabilities';

const parser = new WMTSCapabilities();

fetch('data/WMTSCapabilities.xml')
    .then(response => response.text())
    .then(text => {
        const result = parser.read(text);
        const logEl = document.getElementById('log');
        if (logEl) logEl.innerText = JSON.stringify(result, null, 2);
    });
