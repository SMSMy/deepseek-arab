// ==UserScript==
// @name       دعم العربية ديب سيك  Deepseek Arabic Support
// @name:ar      دعم العربية لـ Deepseek
// @namespace    https://github.com/nvkq
// @version      1.2
// @description  Comprehensive RTL support and Arabic typography enhancements for Deepseek Chat
// @description:ar  دعم متكامل للغة العربية وتحسينات تنسيق النصوص
// @author       smsm
// @match        https://chat.deepseek.com/*
// @icon         https://chat.deepseek.com/favicon.ico
// @grant        GM_addStyle
// @license      GPL-3.0
// @licenseURL   https://www.gnu.org/licenses/gpl-3.0.en.html
// @updateURL    https://greasyfork.org/scripts/533637/code/Deepseek%20Arabic%20Support.user.js
// @supportURL   https://github.com/YOUR_PROFILE/issues
// ==/UserScript==

(function() {
    'use strict';

    // ------ التعديلات الأساسية ------
    const arabicCSS = `
        body, .message, .input-area {
            direction: rtl;
            font-family: 'Segoe UI', 'Noto Sans Arabic', sans-serif;
            text-align: right !important;
        }

        /* تحسين المسافات البينية للعربية */
        *:not(code):not(pre) {
            letter-spacing: 0.02em !important;
            word-spacing: 0.1em !important;
        }

        /* إصلاح اتجاه الأيقونات */
        .button-group, .action-icons {
            left: 5px !important;
            right: auto !important;
        }

        /* الحفاظ على اتجاه الأكواد */
        pre, code {
            direction: ltr !important;
            text-align: left !important;
            font-family: 'JetBrains Mono', monospace !important;
        }
    `;

    // ------ تطبيق التعديلات ------
    if (typeof GM_addStyle !== "undefined") {
        GM_addStyle(arabicCSS);
    } else {
        const style = document.createElement('style');
        style.textContent = arabicCSS;
        document.head.appendChild(style);
    }

    // ------ تحميل الخطوط العربية (اختياري) ------
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

})(); // <-- 