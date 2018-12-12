import React from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';
import { ImagePicker } from 'expo';

export default class App extends React.Component {
  state = {
    image: null,
    width: 200,
    height: 200,
    text: ''
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ margin: 10, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ margin: 10 }}>
          <Button
            title="Pick an image from camera roll"
            onPress={this._pickImage}
          />
        </View>

        {image &&
          <Image source={{ uri: image }} style={{ width: this.state.width, height: this.state.height, borderColor: "dodgerblue", borderRadius: 10, borderWidth: 2 }} />}

        <Text style={{ paddingBottom: 10, fontSize: 24 }}>
          {this.state.text}
        </Text>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ margin: 10 }}>
            <Button
              title="+ Width"
              onPress={this._increaseWidth}
            /></View>
          <View style={{ margin: 10 }}>
            <Button
              title="- Width"
              onPress={this._decreaseWidth}
            /></View>
          </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ margin: 10 }}>
            <Button
              title="+ Height"
              onPress={this._increaseHeight}
            /></View>
          <View style={{ margin: 10 }}>
            <Button
              title="- Height"
              onPress={this._decreaseHeight}
            /></View>
        </View>
        <View style={{ margin: 10 }}>
          <Button
            title="Reset"
            onPress={this._reset}
          /></View>
        <View style={{ margin: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Add a caption!"
            onChangeText={(text) => this.setState({ text })}
          /></View>
      </View>
    );
  }

  _increaseWidth = () => {
    this.setState({ width: this.state.width + 10 })
  }

  _decreaseWidth = () => {
    this.setState({ width: this.state.width - 10 })
  }

  _increaseHeight = () => {
    this.setState({ height: this.state.height + 10 })
  }

  _decreaseHeight = () => {
    this.setState({ height: this.state.height - 10 })
  }

  _reset = () => {
    this.setState({ width: 200, height: 200 })
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

}
