import React from "react";
import { get, isEmpty } from "lodash";
import classNames from "classnames";
import ReactDOM from "react-dom";
import "./styles.css";

import MyKeyboard from "./keyboard";

class Home extends React.Component {
  state = {
    input: {
      oximiter: "N/A",
      pb: "N/A"
    },
    keyboardOn: false,
    focusInputName: ""
  };

  componentDidMount() {
    // If you want to pass an initial value to simple-keyboard
    if (this.myKeyboard) {
      /**
       * Normally we'd use setInput(), but we use this approach
       * to set the entire input object instead
       */
      let { input } = this.state;
      this.myKeyboard.setInputObj(input);
    }
  }

  onChangeAll = inputObj => {
    console.log("Input change", inputObj);
    this.setState({
      input: inputObj
    });
  };

  setActiveInput = e => {
    this.setState({ focusInputName: e.target.name, keyboardOn: true });
  };

  render() {
    let { oximiter, pb } = this.state.input;

    return (
      <section>
        <input
          className="value"
          name="oximiter"
          value={oximiter}
          onFocus={this.setActiveInput}
        />

        <input
          className="value"
          name="pb"
          value={pb}
          onFocus={this.setActiveInput}
        />

        <div
          className={`custom-keyboard ${
            !this.state.keyboardOn ? "hidden" : ""
          }`}
        >
          <MyKeyboard
            ref={r => (this.myKeyboard = r)}
            onChangeAll={this.onChangeAll}
            inputName={this.state.focusInputName}
          />
          <button
            onClick={() => {
              this.setState({ keyboardOn: !this.state.keyboardOn });
            }}
          >
            Close
          </button>
        </div>
      </section>
    );
  }
}

export default Home;

const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);
