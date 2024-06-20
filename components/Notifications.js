import { View, Text, StyleSheet, Modal, Button, TextInput } from 'react-native'
import axios from 'axios';


export default function Notifications ({visible, closeModal, invitedPersons, cleanInvites}) {

    const[eventTitle, setEventTitle] = ('');
    const[eventDateTime, setEventDateTime] = ('');


    const sendInvite= async () => {

        try {
            const apiUrl = 'https://api.gigischool.com/api/invite';
            const invitedPeopleIds = Object.keys(invitedPersons).map(personKey => invitedPersons[personKey].id);

            const requestData = {
                eventTitle,
                eventDateTime,
                invitedPeopleIds,
            };

            const response = await axios.post(apiUrl, requestData);
            console.log(response.data);
            cleanInvites();
            closeModal();

        } catch (error) {
            console.log(error);
        }
    }

    const close=()=>{
        closeModal();
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.container}>
                <Text style={styles.heading}>Notifications</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Event Title"
                        value={eventTitle}
                        onChangeText={setEventTitle}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Event Date/Time"
                        value={eventDateTime}
                        onChangeText={setEventDateTime}
                    />
                    <Button onPress={sendInvite} title="Invite"/>
                    <View style={styles.closeButton}>
                        <Button onPress={close} title="Close Modal"/>
                    </View>
                </View>
            </View>
        </Modal>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    inputContainer: {
        width: "100%",
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: "gray",
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    closeButton: {
        marginTop: 30,
    }



});