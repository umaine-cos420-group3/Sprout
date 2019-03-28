import React, { Component } from "react";
import { Button, Paragraph, Dialog, Portal } from "react-native-paper";

class ErrorMessage extends Component {
  state = {
    visible: this.props.visible
  };

  componentDidUpdate(prevProps) {
    if (prevProps.visible != this.props.visible) {
      this.setState({ visible: this.props.visible });
    }
  }

  _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => {
    this.setState({ visible: false });
    this.props.dismissError();
  };

  render() {
    return (
      <Portal>
        <Dialog visible={this.state.visible} onDismiss={this._hideDialog}>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{this.props.message}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={this._hideDialog}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }
}

export default ErrorMessage;
