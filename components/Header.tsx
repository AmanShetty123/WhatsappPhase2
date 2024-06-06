import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Stories() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>WhatsApp</Text>
          <Image
            source={{
              uri: 'https://icons.veryicon.com/png/128/miscellaneous/general-icon-collection-linear-fillet/icon_search-9.png',
            }}
            style={{
              height: 20,
              width: 20,
              marginTop: 5,
              marginRight: 18,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 50,
  },
  headerText: {
    color: '#25D366',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 14,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 13,
  },
});
