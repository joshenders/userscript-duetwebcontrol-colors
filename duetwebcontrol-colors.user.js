// ==UserScript==
// @name         Duet Web Control Colors
// @description  Modifies the toolbar color on the Duet Web Control interface
// @namespace    https://joshenders.com
// @version      v1.1.0
// @author       Josh Enders <josh.enders@gmail.com>
// @updateURL    https://raw.githubusercontent.com/joshenders/userscript-duetwebcontrol-colors/master/duetwebcontrol-colors.user.js
// @downloadURL  https://raw.githubusercontent.com/joshenders/userscript-duetwebcontrol-colors/master/duetwebcontrol-colors.user.js
// @grant        none
// @match        *://*.lan/*
// @run-at       document-end
// ==/UserScript==


(function() {
    'use strict';

    // Update with the names of your printers and color choices below
    const config = {
        // "redboi.lan": "#FF4500",
        // "greenboi.lan": "#32CD32",
        // "blueboi.lan": "#1E90FF",
    }

    if (!(window.location.hostname in config)) { return; }
    console.log("duetwebcontrol-colors.user.js active");
    const color = config[window.location.hostname];

    // toolbar
    const toolbar = document.querySelector(".v-toolbar__content");
    if (toolbar) {
        toolbar.style.backgroundColor = color;
        console.debug(`Updated toolbar background-color to ${color}`);
    } else {
        console.debug(".v-toolbar__content not found in current document")
    }

    // machine movement buttons
    const sheet = document.getElementById('vuetify-theme-stylesheet').sheet;
    if (sheet) {
        sheet.deleteRule(1);
        sheet.insertRule(`.v-application .primary { background-color: ${color} !important; border-color: ${color} !important; }`, 1);
        console.debug("Updated inline style for .v-application.primary");
    } else {
        console.debug("vuetify-theme-stylesheet not found in current document");
    }

    // const buttons = [
    //    ...document.querySelectorAll(".ml-0.primary"),
    //    ...document.querySelectorAll(".mx-0.primary")
    // ];
    // 
    // buttons.forEach(item => {
    //     item.style.backgroundColor = color;
    //     console.debug(`Updated button background-color to ${color}`);
    // });

    // macros
    const macros = document.querySelectorAll("i.blue");
    if (macros) {
        macros.forEach(item => {
            item.classList.remove('blue');
            item.style.backgroundColor = color;
            item.style.borderColor = color;
        });
        console.debug("Updated macros");
    } else {
        console.debug("Macros not found in current document")
    }
})();