import { View, StyleSheet, Modal, Button, FlatList } from 'react-native'

import Person from './Person'

export default function Invitations({people, visible, closeModal, openModalNotif}) {

    const onPres = () => {
        closeModal();
        openModalNotif();
    }

    const close = () => {
        closeModal();
    }

    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                <View style={styles.buttons}>
                    <Button onPress={onPres} title="Notifications"/>
                    <Button onPress={close} title="Close"/>
                </View>
                <FlatList data={people}
                          keyExtractor={item => item.id}
                          renderItem={({item}) => <Person person={item} notPressable={true}/>}
                          contentContainerStyle={styles.container}
                />
            </View>
        </Modal>


    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
        paddingBottom: 25,
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: 300,
        marginTop: 20,
    },


});