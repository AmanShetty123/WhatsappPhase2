import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Stories() {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag',
      status: 'I love to Code',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket',
      status: 'Making your Gpay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh',
      status: 'Building secure Digital Banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
    {
      uid: 5,
      name: 'Hitesh',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 6,
      name: 'Anurag',
      status: 'I love to Code',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 7,
      name: 'Sanket',
      status: 'Making your Gpay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 8,
      name: 'Anirudh',
      status: 'Building secure Digital Banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.addStories}>
            <Image
              source={{
                uri: 'https://th.bing.com/th/id/R.6de1e0c57b8f64ed47f9aee9e5084f69?rik=Tqd1FJNFEFvdxA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffree-png-plus-sign-plus-sign-comments-980.png&ehk=1AcmQVGxFuJQaiuh85Nouw4b3dPsF0NbJmnU8XnmWJ4%3d&risl=&pid=ImgRaw&r=0',
              }}
              style={styles.addImage}
            />
            <Text style={styles.nameText}>Add Story</Text>
          </View>
          {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userStories}>
              <Image
                source={{
                  uri: imageUrl,
                }}
                style={styles.userImage}
              />
              <Text style={styles.nameText}>{name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  nameText: {
    color: 'black',
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginBottom: 4,
  },
  userStories: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
  },
  addStories: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    padding: 4,
  },
  addImage: {
    height: 40,
    width: 40,
    borderRadius: 25,
    marginTop: 8,
    marginBottom: 11,
  },
});
