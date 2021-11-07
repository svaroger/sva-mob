import React from 'react';
import {
  SectionList,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar
} from 'react-native';



const Item = ({ name, phone, email }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.title}>{phone}</Text>
    <Text style={styles.title}>{email}</Text>
  </View>
);

const CredentialList = ({content}) => {

  const renderItem = ({ item }) => (
     <Item
        name={item.name}
        phone={item.phone}
        email={item.email}
     />
  );

  return (
  <SafeAreaView style={styles.container}>
    <FlatList
      data={content}
      renderItem={renderItem}
      keyExtractor={ (item, index) => index.toString() }
    />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  sectionContainer: {
    borderWidth: 1,
    borderColor: 'black',
  },
  item: {
    backgroundColor: '#e7e7e7',
   padding: 20,
   marginVertical: 8,
   marginHorizontal: 16,
  },
  header: {
    fontSize: 24,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 16,
  }
});

export default CredentialList;
