import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function Navigation() {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.L_-ZAT2ikuD-FV2INSOh2wHaHa?rs=1&pid=ImgDetMain',
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.chatContainer}>
        <Text style={styles.chatText}>+ New Chat</Text>
      </View>
      <View>
        <Image
          source={{
            uri: 'https://www.pngkey.com/png/full/202-2024792_profile-icon-png.png',
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 20,
    width: 20,
    margin: 30,
  },
  chatContainer: {
    backgroundColor: '#25D366',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 20,
  },
  chatText: {
    color: 'white',
  },
});
