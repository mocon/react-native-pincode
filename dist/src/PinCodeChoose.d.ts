/// <reference types="react" />
import * as React from 'react';
import { PinStatus } from './PinCode';
/**
 * Pin Code Choose PIN Page
 */
export declare type IProps = {
    storePin: any;
    titleChoose: string;
    subtitleChoose: string;
    titleConfirm: string;
    subtitleConfirm: string;
    buttonNumberComponent: any;
    passwordLength?: number;
    passwordComponent: any;
    titleAttemptFailed?: string;
    titleConfirmFailed?: string;
    subtitleError?: string;
    colorPassword?: string;
    numbersButtonOverlayColor?: string;
    buttonDeleteComponent: any;
    titleComponent: any;
    subtitleComponent: any;
    pinCodeKeychainName: string;
    styleContainer?: any;
    styleButtonCircle?: any;
    styleTextButton?: any;
    styleCircleHiddenPassword?: any;
    styleRowButtons?: any;
    styleColumnButtons?: any;
    styleEmptyColumn?: any;
    styleViewTitle?: any;
    styleTextTitle?: any;
    styleTextSubtitle?: any;
    styleContainerPinCode?: any;
    styleColumnDeleteButton?: any;
    styleDeleteButtonColorShowUnderlay?: string;
    styleDeleteButtonColorHideUnderlay?: string;
    styleDeleteButtonIcon?: string;
    styleDeleteButtonSize?: number;
    styleDeleteButtonText?: any;
};
export declare type IState = {
    status: PinStatus;
    pinCode: string;
};
declare class PinCodeChoose extends React.PureComponent<IProps, IState> {
    constructor(props: IProps);
    endProcessCreation: (pinCode: string) => void;
    endProcessConfirm: (pinCode: string) => Promise<void>;
    cancelConfirm: () => void;
    render(): JSX.Element;
}
export default PinCodeChoose;
