import React, {useState, useEffect} from 'react';
import { SafeAreaView, SectionList, TextInput, StyleSheet, View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';

import Colors from '../constants/Colors';
import ContactList from '../components/ContactList';
import { getConnections } from "../redux/actions";

const Contacts = ({navigation}) => {
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch()
    const [search, setSearch] = useState('');
    const [content, setContent] = useState(contacts);

    useEffect(() => {
        dispatch(getConnections());
          console.log("Perviy");
      }, []);

    useEffect(() => {
      setContent(contacts);
        console.log("Vtoroy");
    }, [contacts]);

    useEffect(() => {
        setContent(contacts);
        setContent(content =>
          content.filter( contact =>
            contact.name.toLowerCase().includes( search.toLowerCase())
          )
        )
      }, [search])


    return (
      <>
        <TextInput
          style={styles.input}
          onChangeText={setSearch}
          placeholder="Search.."
          placeholderTextColor={Colors.grey}
          value={search}
        />

        <View style={styles.contentContainer}>
          <ContactList
            content={content}
          />
        </View>
      </>
    );
  };

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 10,
  },
  input: {
  //  borderWidth: 1,
    marginHorizontal: 20,
    backgroundColor: Colors.searchInput,
    borderColor: Colors.black,
    color: Colors.black,
    minWidth: 100,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
  }
});

export default Contacts;
