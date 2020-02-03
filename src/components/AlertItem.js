import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

function AlertItem(props) {
    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.titleContainer}
            >
                <Text
                    style={styles.title}
                >{props.title}</Text>
            </View>
            <View
                style={styles.dateContainer}
            >
                <Text
                    style={styles.date}
                >
                    {props.date}
                </Text>
            </View>
            <View
                style={styles.contentContainer}
            >
                <Text
                    style={styles.content}
                >
                    {props.content}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 8,
    },
    titleContainer: {
        padding: 30,
        height: 40,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#006600'
    },
    dateContainer: {
        alignItems: 'flex-end',
        marginRight: 10,
        marginTop: 10,
    },
    date: {
        color: '#7C7C7C'
    },
    contentContainer: {
        margin: 10,
    },
    content:{
        color:'#7C7C7C'
    }
})

export default AlertItem;