import { MyButtonBase } from "./my-button.common";
export declare class MyButton extends MyButtonBase {
    nativeView: UIButton;
    createNativeView(): Object;
    initNativeView(): void;
    disposeNativeView(): void;
}
