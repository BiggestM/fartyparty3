import { View, StyleSheet, FlatList, Button } from 'react-native'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Spinner, Person, PersonModal, Invitations, Notifications } from './';


const personsUrl = 'https://api.gigischool.com/api/people'

const Dashboard = () => {

  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState({});

  const [person, setPerson] = useState({});
  const [personModal, setPersonModal] = useState(false);
  const [invitedPersons, setInvitedPersons] = useState([]);
  const [invitesModal, setInvitesModal] = useState(false);

  const [notificationsModal, setNotificationsModal] = useState(false);



  const getPeople = async () => {
    setLoading(true);
    const result = await axios({
        method: 'get',
        url: personsUrl,
    });
    setPeople(result.data);
    setLoading(false);
}


const addInvite = (newPerson) => {
    setInvitedPersons((prevPersons) => {
        const existingPerson = prevPersons.find(
            (person) => person.id == newPerson.id
        );
        if (!existingPerson) {
            return [...prevPersons, newPerson]
        }
        return prevPersons;
    });
};

const cleanInvites = () => {
    setInvitedPersons([]);
}


useEffect(() => {
    getPeople();
}, []);


if (loading) return <Spinner/>
return (
    <View style={styles.container}>
        <Button onPress={() => setInvitesModal(true)} title="Invited Persons"/>
        <FlatList data={people}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => <Person person={item} modalOn={() => setPersonModal(true)}
                                                  setPerson={() => setPerson(item)}/>}
                  contentContainerStyle={styles.container}
        />

        <PersonModal visible={personModal} person={person} closeModal={() => setPersonModal(false)}
                     addInvite={() => addInvite(person)}/>

        <Invitations people={invitedPersons} visible={invitesModal} closeModal={() => setInvitesModal(false)}
                     openModalNotif={() => setNotificationsModal(true)}/>

        <Notifications visible={notificationsModal} closeModal={() => setNotificationsModal(false)}
                       invitedPersons={invitedPersons} cleanInvites={() => cleanInvites()}/>

    </View>
);

}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: "center",
        paddingBottom: 50,
    },
});