import React, { Component } from 'react';
import { Text, View, StyleSheet, BackHandler } from 'react-native';
import { Footer, Container, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';


export default class Data extends Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', function () {
            Actions.Bluetooth();
            return true;
        })
    }
    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Welcome to Data!
          </Text>
                </View>
                <Footer>
                    <FooterTab style={{ backgroundColor: 'white', height: 50, borderColor: 'black', borderRadius: 2 }}>
                        <Button>
                            <Icon name="user" size={30} color="black" onPress={() => Actions.Home()} />
                        </Button>
                        <Button>
                            <Icon name="file-o" size={30} color="black" onPress={() => Actions.User()} />
                        </Button>
                        <Button>
                            <Icon name="bars" size={30} color="black" onPress={() => Actions.Bluetooth()} />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
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