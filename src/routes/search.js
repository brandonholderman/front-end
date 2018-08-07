import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import colors from '../assets/colors.js'
import metrics from '../themes/metrics.js'

import Navbar from '../components/Navbar';
import StaticInfo from '../components/static-info';
import FullWidthContainer from '../components/FullWidthContainer';

class Search extends React.Component {
  render() {
    return (
      <View style={styles.pageContainer}>
        <View style={styles.contentContainer}>
          <FullWidthContainer flex={columnContainerFlex}>
            <Button
              title='Go To Landing'
              onPress={() => this.props.navigation.navigate('Landing')}
            />
          </FullWidthContainer>

          <StaticInfo
            containerFlex={columnContainerFlex}
          />

        </View>
        <Navbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1
  },
  contentContainer: {
    marginBottom: metrics.navbarMargin,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.transparent,
  },
  text: {
    color: colors.darktext
  }
});

// This value is equal to 1/(number of FullWidthContainer components)
// It ensures the components will be equally distributed on the screen
const columnContainerFlex = .25;

export default Search;
