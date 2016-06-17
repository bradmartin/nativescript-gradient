import {ContentView} from 'ui/content-view';
import { Color } from "color";
const Orientation = android.graphics.drawable.GradientDrawable.Orientation;
const BL_TR = Orientation.BL_TR;
const BOTTOM_TOP = Orientation.BOTTOM_TOP;
const BR_TL = Orientation.BR_TL;
const LEFT_RIGHT = Orientation.LEFT_RIGHT;
const RIGHT_LEFT = Orientation.RIGHT_LEFT;
const TL_BR = Orientation.TL_BR;
const TOP_BOTTOM = Orientation.TOP_BOTTOM;
const TR_BL = Orientation.TR_BL;

declare var net, android: any;

export class Gradient extends ContentView {
    private _startColor: string;
    private _endColor: string;
    private _orientation: string;
    private _androidViewId: any;
    private _android: net.colindodd.gradientlayout.GradientRelativeLayout;

    get android(): any {
        return this._android;
    }

    get _nativeView(): any {
        return this._android;
    }

    get startColor(): string {
        return this._startColor;
    }

    set startColor(value: string) {
        this._startColor = value;
    }

    get endColor(): string {
        return this._endColor;
    }

    set endColor(value: string) {
        this._endColor = value;
    }

    get orientation(): string {
        return this._orientation;
    }

    set orientation(value: string) {
        this._orientation = value;
    }


    public _createUI() {
        this._android = new net.colindodd.gradientlayout.GradientRelativeLayout(this._context, null);

        if (!this._androidViewId) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._android.setId(this._androidViewId);

        if (this._startColor && this._endColor) {

            let start = new Color(this._startColor).android;
            let end = new Color(this._endColor).android;
            let orientation = this.setOrientation(this._orientation);

            this._android.setGradientBackgroundConfig(start, end, orientation);

        } else {
            console.log('You need to specify a startColor & endColor for the gradient.');
        }

    }


    /**
     * Set the orientation.
     */
    private setOrientation(value) {
        if (!value) {
            return TOP_BOTTOM;
        } else {

            switch (value) {
                case 'BL_TR':
                    return BL_TR;
                case 'BOTTOM_TOP':
                    return BOTTOM_TOP;
                case 'BR_TL':
                    return BR_TL;
                case 'LEFT_RIGHT':
                    return LEFT_RIGHT;
                case 'RIGHT_LEFT':
                    return RIGHT_LEFT;
                case 'TL_BR':
                    return TL_BR;
                case 'TOP_BOTTOM':
                    return TOP_BOTTOM;
                case 'TR_BL':
                    return TR_BL;
            }
        }

    }

}