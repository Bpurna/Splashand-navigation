import React, { Component } from 'react';
import { Text, View, StyleSheet, BackHandler, FlatList } from 'react-native';
import SplashScreen from 'react-native-smart-splash-screen';
import { Footer, Container, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

export default class Bluetooth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

    BackHandler.addEventListener('hardwareBackPress', function () {
      Actions.Bluetooth();
      return true;
    })

    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 800,
      delay: 200,
    });
  }
  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <FlatList
            data={this.state.data}
            keyExtractor={(x, item) => item}
            renderItem={({ item }) =>
              <View style={{ justifyContent: 'center', paddingTop: 30, borderRadius: 2 , height: 40, width: 80}}>
                <Text style={{ color: 'red', height: 40, width: 80 }}>
                  {item.title}
                </Text>}
              </View>}
          />
        </View>
        <Footer>
          <FooterTab style={{ backgroundColor: 'white', height: 50, borderColor: 'black', borderRadius: 2 }}>
            <Button>
              <Icon name="home" size={30} color="black" onPress={() => Actions.Datafetch()} />
            </Button>
            <Button>
              <Icon name="user" size={30} color="black" onPress={() => Actions.User()} />
            </Button>
            <Button>
              <Icon name="file-o" size={30} color="black" onPress={() => Actions.Data()} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
