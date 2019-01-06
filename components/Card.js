import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import SuitAndNumber from './SuitAndNumber';

export default class Card extends React.Component {
  render() {
    const { handleHigherLowerSelect, currentCard } = this.props;
    if (currentCard === null) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            onPress={handleHigherLowerSelect.bind({}, 'higher')}
            style={styles.btnContainer}
          >
            <SuitAndNumber style={{ left: 0, top: 0 }} currentCard={currentCard} />
            <Text style={styles.higherLowerText}>HIGHER</Text>
          </TouchableOpacity>
          <View style={styles.borderBottom} />
          <TouchableOpacity
            onPress={handleHigherLowerSelect.bind({}, 'lower')}
            style={styles.btnContainer}
          >
            <Text style={styles.higherLowerText}>LOWER</Text>
            <SuitAndNumber style={{ right: 0, bottom: 0 }} currentCard={currentCard} reverse={true} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: Colors.white,
  },
  cardContainer: {
    flex: 1,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    backgroundColor: Colors.gameBackgroundColor,
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  higherLowerText: {
    fontFamily: 'space-mono',
    color: Colors.lightGreen,
    fontSize: 90,
  },
  borderBottom: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
