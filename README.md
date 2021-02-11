# Duet Web Control Colors userscript

## About

Do you have multiple Duet3d printers and find yourself having a hard time distinguishing one printer from another while going back and forth between multiple tabs of the DuetWebControl UI?

Me neither! But my friend Gerard did and so here we are!

This is a [Tampermonkey](https://www.tampermonkey.net) userscript which modifies the toolbar color of the [Duet Web Control interface](https://github.com/Duet3D/DuetWebControl).

<img src="/Users/jenders/src/userscript-duetwebcontrol-colors/doc/screenshot.png" alt="screenshot" style="zoom:50%;" />

## Installation

1. If you're new to userscripts, start by installing Tampermonkey. Here's the [version for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en).

2. Next, click [duetwebcontrol-colors.user.js](duetwebcontrol-colors.user.js) and then click **Raw**. If Tampermonkey is installed correctly, it will automatically redirect you to a screen to install the script. Click **Install**. By default, the script does nothing until you configure it in the following steps.

3. Open the Tampermonkey extension dashboard. Click the **Edit** button for **Duet Web Control Colors** under the **Actions** column. In the editor, modify the script with your preferred printer names and [desired colors](https://htmlcolorcodes.com). Just remove the leading `//` and change the example names to your printers' hostnames. For best results, you should be using static DHCP for your printers.

   ```javascript
   const config = {
     // "red-printer.lan": "#FF4500",
     // "green-printer.lan": "#32CD32",
     // "blue-printer.lan": "#1E90FF",
   };
   ```

4. Finally, update the `@match` line in the top of the script with your local network configuration. By default, it will match all domains under `.lan`. Other common configurations include `.local`, `.internal`, etc. If you're unsure about this, you can just use `*://*/*` for testing but it is not recommended for general use for security/privacy reasons.

   ```javascript
   // @match        *://*.lan/*
   ```

5. Click **Save** and you're all done.

## Support

1. Star this repo. Thanks in advance.
2. Express your support for [this issue](https://github.com/Duet3D/DuetWebControl/issues/322) to get official theme support merged into the next version of [DuetWebControl](https://github.com/Duet3D/DuetWebControl).
3. Go buy one of [Gerard's Puzzle Boxes](https://bayoupuzzles.com)!

## License

This work is licensed under CC BY-NC version 4.0 https://creativecommons.org/licenses/by-nc/4.0/
© 2021, Josh Enders. Some Rights Reserved.
