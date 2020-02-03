import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

function ResultItem(props) {
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
                style={styles.detail}
            >
                <Text>Product</Text>
                <Text>{props.product}</Text>
            </View>

            <View
                style={styles.detail}
            >
                <Text>Manufacturer</Text>
                <Text>{props.manufacturer}</Text>
            </View>
            <View
                style={styles.detail}
            >
                <Text>License No</Text>
                <Text>{props.licenseNo}</Text>
            </View>
            <View
                style={styles.detail}
            >
                <Text>License Issue Date</Text>
                <Text>{props.licenseIssueDate}</Text>
            </View>
            <View
                style={styles.detail}
            >
                <Text>License Valid Upto</Text>
                <Text>{props.licenseValidUpto}</Text>
            </View>
            <View
                style={styles.detail}
            >
                <Text>License Status</Text>
                <Text>{props.licenseStatus}</Text>
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
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        width: '90%',
        height: 30,
    }
})

export default ResultItem;
