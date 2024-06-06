import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

export default function MainMessage() {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
      time: '11:21',
    },
    {
      uid: 2,
      name: 'Anurag',
      status: 'I love to Code',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
      time: '04:21',
    },
    {
      uid: 3,
      name: 'Sanket',
      status: 'Making your Gpay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
      time: '01:19',
    },
    {
      uid: 4,
      name: 'Anirudh',
      status: 'Building secure Digital Banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
      time: '11:16',
    },
    {
      uid: 5,
      name: 'Hitesh',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
      time: '00:04',
    },
    {
      uid: 6,
      name: 'Anurag',
      status: 'I love to Code',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
      time: '00:21',
    },
    {
      uid: 7,
      name: 'Sanket',
      status: 'Making your Gpay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
      time: '15:32',
    },
    {
      uid: 8,
      name: 'Anirudh',
      status: 'Building secure Digital Banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
      time: '19:21',
    },
    {
      uid: 9,
      name: 'Sanket',
      status: 'Making your Gpay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
      time: '15:32',
    },
    {
      uid: 10,
      name: 'Anirudh',
      status: 'Building secure Digital Banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
      time: '19:21',
    },
    {
      uid: 11,
      name: 'Sanket',
      status: 'Making your Gpay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
      time: '15:32',
    },
    {
      uid: 12,
      name: 'Anirudh',
      status: 'Building secure Digital Banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
      time: '19:21',
    },
  ];
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.headerText}>Chats</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {contacts.map(({uid, name, status, imageUrl, time}) => (
          <View style={styles.contactContainer} key={uid}>
            <View>
              <Image
                source={{
                  uri: imageUrl,
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.messageContainer}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '900',
                }}>
                {name}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'semibold',
                }}>
                {status}
              </Text>
            </View>
            <View style={styles.timingContainer}>
              <Text
                style={{
                  fontSize: 12,
                }}>
                {time}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'semibold',
    marginLeft: 10,
    marginTop: 6,
    marginBottom: 10,
    backgroundColor: '#075E54',
    width: 55,
    paddingLeft: 10,
    paddingRight: 3,
    borderRadius: 10,
  },
  mainContainer: {
    backgroundColor: 'white',
    height: 365,
    width: '100%',
  },
  contactContainer: {
    backgroundColor: 'white',
    height: 50,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 30,
    marginLeft: 10,
    marginTop: 3,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  timingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
});
