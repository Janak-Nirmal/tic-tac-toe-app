import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { colors } from '../../lib/Settings';

// Menu that displays "new game" or "Join game" options
const PlayerMenu = ({ styles, textInput, handleInputChange, handleNewGame, handleJoinGame }) => {
  return (
    <View>
      <Button onPress={handleNewGame} title="New Game" type="solid" buttonStyle={styles.button} />
      <Text style={styles.text}>Join Game:</Text>

      <TextInput
        style={styles.input}
        value={textInput.value} // state {...state} {random: '', textInputValue: ''}
        onChangeText={handleInputChange}
        keyboardAppearance='dark'
        selectionColor={colors.main}
        underlineColorAndroid={colors.main}
        placeholder='Enter lobby id'
        placeholderTextColor='lightgrey'
        autoCapitalize='none'
      />

      { /* TODO: change value of textInput to be the string of the clipboard */ }
      <Image style={{ width: 30, height: 30, alignSelf: 'center' }} source={require(`../../assets/images/clipboard.png`)} />

      {textInput.err && <Text style={styles.infoText}>{textInput.err}</Text>}

      <Button
        disabled={!textInput.value.length}
        onPress={handleJoinGame}
        title="Join"
        type="solid"
        buttonStyle={styles.button}
      />
    </View>
  );
};

export default PlayerMenu;
