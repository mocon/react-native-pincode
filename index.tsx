/// <reference path='./src/types.d.ts'/>
import * as React from 'react'
import PinCodeChoose from './src/PinCodeChoose'
import {PinStatus} from './src/PinCode'
import PinCodeEnter from './src/PinCodeEnter'
import {View, StyleSheet, AsyncStorage} from 'react-native'
import ApplicationLocked from './src/ApplicationLocked'

export type IProps = {
  buttonComponentLockedPage?: any
  buttonDeleteComponent?: any
  buttonNumberComponent?: any
  colorPassword?: string
  finishProcess?: any
  handleResultEnterPin?: any
  iconComponentLockedPage?: any
  lockedPage?: any
  maxAttempts?: number
  numbersButtonOverlayColor?: string
  onClickButtonLockedPage?: any
  passwordComponent?: any
  passwordLength?: number
  pinAttemptsAsyncStorageName?: string
  pinCodeKeychainName?: string
  pinStatus?: PinResultStatus
  status: 'choose' | 'enter' | 'locked'
  storedPin?: string
  storePin?: any
  styleMainContainer?: any
  stylePinCodeChooseContainer?: any
  stylePinCodeEnterContainer?: any
  styleLockScreenButton?: any
  styleLockScreenColorIcon?: string
  styleLockScreenMainContainer?: any
  styleLockScreenNameIcon?: string
  styleLockScreenSizeIcon?: number
  styleLockScreenText?: any
  styleLockScreenTextButton?: any
  styleLockScreenTextTimer?: any
  styleLockScreenTitle?: any
  styleLockScreenViewCloseButton?: any
  styleLockScreenViewIcon?: any
  styleLockScreenViewTextLock?: any
  styleLockScreenViewTimer?: any
  stylePinCodeButtonCircle?: any
  stylePinCodeColumnButtons?: any
  stylePinCodeColumnDeleteButton?: any
  stylePinCodeDeleteButtonColorHideUnderlay?: string
  stylePinCodeDeleteButtonColorShowUnderlay?: string
  stylePinCodeDeleteButtonIcon?: string
  stylePinCodeDeleteButtonSize?: number
  stylePinCodeDeleteButtonText?: any
  stylePinCodeEmptyColumn?: any
  stylePinCodeHiddenPasswordCircle?: any
  stylePinCodeMainContainer?: any
  stylePinCodeRowButtons?: any
  stylePinCodeTextButtonCircle?: any
  stylePinCodeTextSubtitle?: any
  stylePinCodeTextTitle?: any
  stylePinCodeViewTitle?: any
  subtitleChoose?: string
  subtitleComponent?: any
  subtitleConfirm?: string
  subtitleEnter?: string
  subtitleError?: string
  textButtonLockedPage?: string
  textDescriptionLockedPage?: string
  textTitleLockedPage?: string
  timeLocked?: number
  timePinLockedAsyncStorageName?: string
  timerComponentLockedPage?: any
  titleAttemptFailed?: string
  titleChoose?: string
  titleComponent?: any
  titleComponentLockedPage?: any
  titleConfirm?: string
  titleConfirmFailed?: string
  titleEnter?: string
  touchIDSentence?: string
}

export type IState = {
  internalPinStatus: PinResultStatus
  pinLocked: boolean
}

export enum PinResultStatus {
  initial = 'initial',
  success = 'success',
  failure = 'failure',
  locked = 'locked'
}

const timePinLockedAsyncStorageNameDefault = 'timePinLockedRNPin'
const pinAttemptsAsyncStorageNameDefault = 'pinAttemptsRNPin'

class PINCode extends React.PureComponent<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = {internalPinStatus: PinResultStatus.initial, pinLocked: false}
    this.changeInternalStatus = this.changeInternalStatus.bind(this)
    this.renderLockedPage = this.renderLockedPage.bind(this)
  }

  async componentWillMount() {
    await AsyncStorage.getItem(this.props.timePinLockedAsyncStorageName || timePinLockedAsyncStorageNameDefault).then((val) => {
      this.setState({pinLocked: !!val})
    })
  }

  changeInternalStatus = (status: PinResultStatus) => {
    if (status === PinResultStatus.initial) this.setState({pinLocked: false})
    this.setState({internalPinStatus: status})
  }

  renderLockedPage = () => {
    return (
      <ApplicationLocked
        timeToLock={this.props.timeLocked || 300000}
        textButton={this.props.textButtonLockedPage || 'Quit'}
        changeStatus={this.changeInternalStatus}
        textDescription={this.props.textDescriptionLockedPage || undefined}
        buttonComponent={this.props.buttonComponentLockedPage || null}
        timerComponent={this.props.timerComponentLockedPage || null}
        textTitle={this.props.textTitleLockedPage || undefined}
        titleComponent={this.props.titleComponentLockedPage || undefined}
        iconComponent={this.props.iconComponentLockedPage || null}
        timePinLockedAsyncStorageName={this.props.timePinLockedAsyncStorageName || timePinLockedAsyncStorageNameDefault}
        pinAttemptsAsyncStorageName={this.props.pinAttemptsAsyncStorageName || pinAttemptsAsyncStorageNameDefault}
        onClickButton={this.props.onClickButtonLockedPage || (() => {
          throw ('Quit application')
        })}
        styleButton={this.props.styleLockScreenButton}
        styleTextButton={this.props.styleLockScreenTextButton}
        styleViewTimer={this.props.styleLockScreenViewTimer}
        styleTextTimer={this.props.styleLockScreenTextTimer}
        styleTitle={this.props.styleLockScreenTitle}
        styleViewTextLock={this.props.styleLockScreenViewTextLock}
        styleViewIcon={this.props.styleLockScreenViewIcon}
        colorIcon={this.props.styleLockScreenColorIcon}
        nameIcon={this.props.styleLockScreenNameIcon}
        sizeIcon={this.props.styleLockScreenSizeIcon}
        styleMainContainer={this.props.styleLockScreenMainContainer}
        styleText={this.props.styleLockScreenText}
        styleViewButton={this.props.styleLockScreenViewCloseButton}/>
    )
  }

  render() {
    const {status, pinStatus, styleMainContainer} = this.props
    return (
      <View style={styleMainContainer ? styleMainContainer : styles.container}>
        {status === PinStatus.choose &&
        <PinCodeChoose
          storePin={this.props.storePin || null}
          titleChoose={this.props.titleChoose || '1 - Enter a PIN Code'}
          subtitleChoose={this.props.subtitleChoose || 'to keep your information secure'}
          titleConfirm={this.props.titleConfirm || '2 - Confirm your PIN Code'}
          subtitleConfirm={this.props.subtitleConfirm || ''}
          passwordComponent={this.props.passwordComponent}
          buttonNumberComponent={this.props.buttonNumberComponent}
          passwordLength={this.props.passwordLength}
          titleAttemptFailed={this.props.titleAttemptFailed}
          titleConfirmFailed={this.props.titleConfirmFailed}
          subtitleError={this.props.subtitleError}
          colorPassword={this.props.colorPassword}
          numbersButtonOverlayColor={this.props.numbersButtonOverlayColor}
          buttonDeleteComponent={this.props.buttonDeleteComponent}
          titleComponent={this.props.titleComponent}
          subtitleComponent={this.props.subtitleComponent}
          pinCodeKeychainName={this.props.pinCodeKeychainName || 'reactNativePinCode'}
          styleContainer={this.props.stylePinCodeChooseContainer}
          styleButtonCircle={this.props.stylePinCodeButtonCircle}
          styleTextButton={this.props.stylePinCodeTextButtonCircle}
          styleCircleHiddenPassword={this.props.stylePinCodeHiddenPasswordCircle}
          styleRowButtons={this.props.stylePinCodeRowButtons}
          styleColumnButtons={this.props.stylePinCodeColumnButtons}
          styleEmptyColumn={this.props.stylePinCodeEmptyColumn}
          styleViewTitle={this.props.stylePinCodeViewTitle}
          styleTextTitle={this.props.stylePinCodeTextTitle}
          styleTextSubtitle={this.props.stylePinCodeTextSubtitle}
          styleContainerPinCode={this.props.stylePinCodeMainContainer}
          styleColumnDeleteButton={this.props.stylePinCodeColumnDeleteButton}
          styleDeleteButtonColorShowUnderlay={this.props.stylePinCodeDeleteButtonColorShowUnderlay}
          styleDeleteButtonColorHideUnderlay={this.props.stylePinCodeDeleteButtonColorHideUnderlay}
          styleDeleteButtonIcon={this.props.stylePinCodeDeleteButtonIcon}
          styleDeleteButtonSize={this.props.stylePinCodeDeleteButtonSize}
          styleDeleteButtonText={this.props.stylePinCodeDeleteButtonText}
        />}
        {status === PinStatus.enter &&
        <PinCodeEnter
          title={this.props.titleEnter || 'Enter your PIN Code'}
          subtitle={this.props.subtitleEnter || ''}
          handleResult={this.props.handleResultEnterPin || null}
          maxAttempts={this.props.maxAttempts || 3}
          changeInternalStatus={this.changeInternalStatus}
          pinStatusExternal={this.props.pinStatus || PinResultStatus.initial}
          storedPin={this.props.storedPin || null}
          touchIDSentence={this.props.touchIDSentence || 'To unlock your application'}
          status={PinStatus.enter}
          finishProcess={this.props.finishProcess || null}
          buttonNumberComponent={this.props.buttonNumberComponent}
          passwordLength={this.props.passwordLength}
          passwordComponent={this.props.passwordComponent}
          titleAttemptFailed={this.props.titleAttemptFailed}
          titleConfirmFailed={this.props.titleConfirmFailed}
          subtitleError={this.props.subtitleError}
          colorPassword={this.props.colorPassword}
          numbersButtonOverlayColor={this.props.numbersButtonOverlayColor}
          buttonDeleteComponent={this.props.buttonDeleteComponent}
          titleComponent={this.props.titleComponent}
          subtitleComponent={this.props.subtitleComponent}
          timePinLockedAsyncStorageName={this.props.timePinLockedAsyncStorageName || timePinLockedAsyncStorageNameDefault}
          pinAttemptsAsyncStorageName={this.props.pinAttemptsAsyncStorageName || pinAttemptsAsyncStorageNameDefault}
          styleContainer={this.props.stylePinCodeEnterContainer}
          styleButtonCircle={this.props.stylePinCodeButtonCircle}
          styleTextButton={this.props.stylePinCodeTextButtonCircle}
          styleCircleHiddenPassword={this.props.stylePinCodeHiddenPasswordCircle}
          styleRowButtons={this.props.stylePinCodeRowButtons}
          styleColumnButtons={this.props.stylePinCodeColumnButtons}
          styleEmptyColumn={this.props.stylePinCodeEmptyColumn}
          styleViewTitle={this.props.stylePinCodeViewTitle}
          styleTextTitle={this.props.stylePinCodeTextTitle}
          styleTextSubtitle={this.props.stylePinCodeTextSubtitle}
          styleContainerPinCode={this.props.stylePinCodeMainContainer}
          styleColumnDeleteButton={this.props.stylePinCodeColumnDeleteButton}
          styleDeleteButtonColorShowUnderlay={this.props.stylePinCodeDeleteButtonColorShowUnderlay}
          styleDeleteButtonColorHideUnderlay={this.props.stylePinCodeDeleteButtonColorHideUnderlay}
          styleDeleteButtonIcon={this.props.stylePinCodeDeleteButtonIcon}
          styleDeleteButtonSize={this.props.stylePinCodeDeleteButtonSize}
          styleDeleteButtonText={this.props.stylePinCodeDeleteButtonText}
        />}
        {(pinStatus === PinResultStatus.locked ||
          this.state.internalPinStatus === PinResultStatus.locked ||
          this.state.pinLocked) &&
        (this.props.lockedPage ? this.props.lockedPage() : this.renderLockedPage())}
      </View>
    )
  }
}

export default PINCode

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
