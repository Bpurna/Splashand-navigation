import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default class Datafetch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(function (response) {
                return response.json();
            })
            .then(function (datas) {
                // console.log(datas);
            });
    }



    render() {
        return (
            <View>
                <Text>Datefetch</Text>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>
                        <Text>
                            {item.id}
                        </Text>
                    }
                />                                                                                
            </View>
        )
    }
}