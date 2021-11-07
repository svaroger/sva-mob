import React from 'react';
import {ListItem, Avatar} from 'react-native-elements';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import Colors from '../constants/Colors';

const ContactRow = props => {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => {
        props.onSelectStock(props);
      }}>
      <View style={styles.listItem}>
        <ListItem
          bottomDivider>
          <Avatar rounded
                  avatarStyle={{ borderWidth: 1, borderColor: Colors.greenAmount }}
                  title={props.stockName[0].toUpperCase()}
                  source={props.stockLogo}/>
          <ListItem.Content>
            <ListItem.Title>{props.stockName}</ListItem.Title>
            <ListItem.Subtitle>${props.stockPrice} {props.change ? `(${props.change}%)` : ''}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  nameText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  listItem: {
    padding: 2,
  },
});

export default ContactRow;
