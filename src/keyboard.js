import React from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

class MyKeyboard extends React.Component {
  state = {
    layoutName: "default",
    mergeDisplay: false
  };

  onKeyPress = button => {
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  handleShift = () => {
    let layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default"
    });
  };

  handleNumbers = () => {
    let layoutName = this.state.layoutName;
    this.setState({
      layoutName: layoutName === "default" ? "numbers" : "default"
    });
  };

  setInputObj = inputObj => {
    this.keyboard.keyboard.replaceInput(inputObj);
  };

  render() {
    const { layoutName, mergeDisplay } = this.state;

    return (
      <Keyboard
        ref={r => (this.keyboard = r)}
        layoutName={layoutName}
        mergeDisplay={mergeDisplay}
        inputName={this.props.inputName}
        onKeyPress={this.onKeyPress}
        onChangeAll={this.props.onChangeAll}
        preventMouseDownDefault={true}
      />
    );
  }
}

export default MyKeyboard;
