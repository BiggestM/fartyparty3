import { View, Text, StyleSheet, Image, Pressable } from 'react-native'


export default function Person({person, modalOn, setPerson, notPressable}) {


    const string = 'https://api.gigischool.com/images/' + person.avatar + '.jpg';

    const onPres = () => {
        if (notPressable) return;
        setPerson();
        modalOn();
    }


    return (
        <Pressable onPress={onPres}>
            <View style={styles.container}>
                <Image
                    src={string}
                    style={styles.image}
                />
                <View style={styles.textHeading}>
                    <View>
                        <Text style={styles.text}>First Name: {person.firstName}</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Last Name: {person.lastName}</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Gender: {person.gender}</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Age: {person.age}</Text>
                    </View>
                </View>
            </View>
        </Pressable>

    );
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 120,
        borderWidth: 10,
        borderColor: '#2A30FF',
        display: "flex",
        flexDirection: "row",
        marginBottom: 10,
    },
    image: {
        width: 50,
        height: 50,
        margin: 20,
    },
    text: {
        fontSize: 15,
    },
    textHeading: {
        margin: 10,
    },
});