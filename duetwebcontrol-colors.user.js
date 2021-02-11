// ==UserScript==
// @name         Duet Web Control Colors
// @description  Modifies the toolbar color on the Duet Web Control interface
// @namespace    https://joshenders.com
// @version      v1.0.1
// @author       Josh Enders <josh.enders@gmail.com>
// @updateURL    https://raw.githubusercontent.com/joshenders/userscript-duetwebcontrol-colors/master/duetwebcontrol-colors.user.js
// @downloadURL  https://raw.githubusercontent.com/joshenders/userscript-duetwebcontrol-colors/master/duetwebcontrol-colors.user.js
// @grant        none
// @match        *://*.lan/*
// @run-at       document-end
// ==/UserScript==


(function() {
    'use strict';

    const config = {
        "redboi.lan": "#FF4500",
        "greenboi.lan": "#32CD32",
        "blueboi.lan": "#1E90FF",
    }

    if (window.location.hostname in config) {
        const toolbar = document.querySelector(".v-toolbar__content");
        if (toolbar) {
            toolbar.style.backgroundColor = config[window.location.hostname];
        } else {
            console.warn(".v-toolbar__content not found in current document")
        }
    }
})();