// ==UserScript==
// @name         Duet Web Control Colors
// @description  Modifies the toolbar color on the Duet Web Control interface
// @namespace    https://joshenders.com
// @version      1.0.2
// @author       Josh Enders <josh.enders@gmail.com>
// @updateURL    https://raw.githubusercontent.com/joshenders/userscript-duetwebcontrol-colors/master/duetwebcontrol-colors.user.js
// @downloadURL  https://raw.githubusercontent.com/joshenders/userscript-duetwebcontrol-colors/master/duetwebcontrol-colors.user.js
// @grant        none
// @match        *://*.lan/*
// @run-at       document-end
// ==/UserScript==

// This work is licensed under CC BY-NC version 4.0 https://creativecommons.org/licenses/by-nc/4.0/
// © 2021, Josh Enders <josh.enders@gmail.com>. Some Rights Reserved.

(function() {
    'use strict';

    // Update with the hostnames of your printers and color choices below
    const config = {
        // "red-printer.lan": "#FF4500",
        // "green-printer.lan": "#32CD32",
        // "blue-printer.lan": "#1E90FF",
    }

    if (!(window.location.hostname in config)) { return; }
    console.debug("duetwebcontrol-colors.user.js active");

    const toolbar = document.querySelector(".v-toolbar__content");
    if (toolbar) {
        const color = config[window.location.hostname];
        toolbar.style.backgroundColor = color;
        console.debug(`Updated toolbar background-color to ${color}`);
    } else {
        console.debug(".v-toolbar__content class not found in current document")
    }
})();