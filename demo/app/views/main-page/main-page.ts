import { Observable, EventData } from 'data/observable';
import { Page } from 'ui/page';
import { MainViewModel } from './main-view-model';
import { View } from "ui/core/view";
import { Color } from "color";
import * as app from "application";
import * as platformModule from "platform";
import * as frame from "ui/frame";

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Get the event sender 
    var page = <Page>args.object;
    page.bindingContext = new MainViewModel();

    if (app.android && platformModule.device.sdkVersion >= "21") {
        var window = app.android.startActivity.getWindow();
        window.setStatusBarColor(new Color("#000").android);
    }

}

export function gotoSub() {
    let x: frame.NavigationEntry = {
        moduleName: 'views/sub/sub',
        animated: true        
    }
    frame.topmost().navigate(x);
}