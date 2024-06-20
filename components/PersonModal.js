import { View, Text, StyleSheet, Image, Modal, Button } from 'react-native'


export default function PersonModal({visible, person, closeModal, addInvite}) {


    const invite = () => {
        addInvite();
        closeModal();
    }

    const close = () => {
        closeModal();
    }


    const string = 'https://api.gigischool.com/images/' + person.avatar + ".jpg"

    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                <Text style={styles.heading}>Detailed information about the person:</Text>
                <Text style={styles.text}>First Name: {person.firstName}</Text>
                <Text style={styles.text}>Last Name: {person.lastName} </Text>
                <Text style={styles.text}>Interests: {person.interests} </Text>
                <Text style={styles.text}>Age: {person.age}</Text>
                <Text style={styles.text}>Gender: {person.gender} </Text>
                <View style={styles.imageHeading}>
                    <Image
                        src={string}
                        style={styles.image}
                    />
                </View>

                <View style={styles.buttons}>
                    <Button onPress={invite} title="Invite"/>
                    <Button onPress={close} title="Close"/>
                </View>
            </View>
        </Modal>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: 300,
        marginTop: 20,
    },
    heading: {
        marginTop: 40,
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    },
    text: {
        fontSize: 20,
        marginTop: 20,
    },
    image: {
        marginTop: 50,
        width: 150,
        height: 150,
    },

});