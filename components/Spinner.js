import { View, StyleSheet, Modal, ActivityIndicator } from 'react-native'
import React from 'react'

const Spinner = () => {
    return (
        <Modal visible={true}>
            <View style={styles.container}>
                <ActivityIndicator color='red' size='large'/>
            </View>
        </Modal>
    );
}

export default Spinner

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});