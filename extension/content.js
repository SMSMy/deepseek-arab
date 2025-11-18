(function () {
    'use strict';

    const arabicCSS = `
        body, .message, .input-area {
            direction: rtl;
            font-family: 'Segoe UI', 'Noto Sans Arabic', sans-serif;
            text-align: right !important;
        }
        *:not(code):not(pre) {
            letter-spacing: 0.02em !important;
            word-spacing: 0.1em !important;
        }
        .button-group, .action-icons {
            left: 5px !important;
            right: auto !important;
        }
        pre, code {
            direction: ltr !important;
            text-align: left !important;
            font-family: 'JetBrains Mono', monospace !important;
        }
    `;

    const style = document.createElement('style');
    style.textContent = arabicCSS;
    document.head.appendChild(style);

    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
})();
