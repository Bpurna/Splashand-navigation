import React, { Component } from 'react';
import { Text, View, StyleSheet, BackHandler, FlateList } from 'react-native';
import { Footer, Container, FooterTab, Button, Item } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const Data = [
    {
        title: 'JS',
        id: '01'
    },
    {
        title: 'RN',
        id: '02'
    },
    {
        title: 'HTML',
        id: ' 03'
    }
]

export default class Home extends Component {
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
                        Welcome to Home
                    </Text>
                    <FlateList
                        data={Data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <Text>
                            {item.title}
                        </Text>}
                    />
                </View>
                <Footer>
                    <FooterTab style={{ backgroundColor: 'white', height: 50, borderColor: 'black', borderRadius: 2 }}>
                        <Button>
                            <Icon name="file-o" size={30} color="black" onPress={() => Actions.User()} />
                        </Button>
                        <Button>
                            <Icon name="edit" size={30} color="black" onPress={() => Actions.Data()} />
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