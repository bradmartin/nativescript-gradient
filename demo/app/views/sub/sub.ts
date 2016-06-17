import { Observable, EventData } from 'data/observable';
import { Page } from 'ui/page';
import { View } from "ui/core/view";
import { Color } from "color";
import * as app from "application";
import * as platformModule from "platform";
import * as frame from "ui/frame";

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded() {

    if (app.android && platformModule.device.sdkVersion >= "21") {
        var window = app.android.startActivity.getWindow();
        window.setStatusBarColor(new Color("#000").android);
    }

}

export function gotoMain() {
    let x: frame.NavigationEntry = {
        moduleName: 'views/main-page/main-page',
        animated: true        
    }
    frame.topmost().navigate(x);
}