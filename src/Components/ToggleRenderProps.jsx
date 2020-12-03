import { Component } from "react";


export default class ToggleRenderProps extends Component {
  state = {
    on: false,
   
  };
  toggle = () => {
    this.setState({
      on: !this.state.on,
      off: this.state.on

    });
  };
  render() {
      const { children } = this.props;
    return children ({
            on: this.state.on,
            off: !this.state.on,
            toggle: this.toggle

         }); 
  }
}