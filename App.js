import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const pallete = {
  lighterPurple: "#3D2D49"
}

export default function App() {
  return (
    <View style={styles.container} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
      <Image 
        style={styles.image}
        source={{uri: "https://external-preview.redd.it/R1F-sUVTFxYYjRskFTYCaT-fvufJxno6yHCP1Dn10f0.jpg?auto=webp&s=a808d9e6e2b6f6a5578d78d20ac650978761fc1d"}}
      />
      <Image
        style={styles.picture}
        source={{uri: "https://images-assets.nasa.gov/image/S67-50903/S67-50903~medium.jpg"}}
      />
      <Text
        style={styles.groupTitle}
      >
        Apollo Mission
      </Text>
      <Text style={styles.subTitle}>
        <Text style={styles.purp}>30</Text>
        <Text> members · </Text>
        <Text style={styles.purp}>2</Text>
        <Text> logs</Text>
      </Text>
      <Text style={styles.logHeader}>
        Logs
      </Text>
      <ScrollView style={styles.logContainer}>
      <View style={styles.log}>
          <Image source={require('./assets/img/doc.png')} style={
            styles.logImage
          }/>
        </View>
        <View style={styles.log}>
          <Image source={require('./assets/img/doc.png')} style={
            styles.logImage
          }/>
        </View>
        <View style={styles.log}>
          <Image source={require('./assets/img/doc.png')} style={
            styles.logImage
          }/>
        </View>
        <View style={styles.log}>
          <Image source={require('./assets/img/doc.png')} style={
            styles.logImage
          }/>
        </View>
        <View style={styles.log}>
          <Image source={require('./assets/img/doc.png')} style={
            styles.logImage
          }/>
        </View>
        <View style={styles.log}>
          <Image source={require('./assets/img/doc.png')} style={
            styles.logImage
          }/>
        </View>
        <View style={styles.log}>
          <Image source={require('./assets/img/doc.png')} style={
            styles.logImage
          }/>
        </View>
        <View style={styles.log}>
          <Image source={require('./assets/img/doc.png')} style={
            styles.logImage
          }/>
        </View>
        <View style={styles.log}>
          <Image source={require('./assets/img/doc.png')} style={
            styles.logImage
          }/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2535',
    overflow: 'visible'
  },
  image: {
    position: 'absolute',
    top:0,
    width: "100%",
    height:190
  },
  picture: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 14,
    borderWidth: 8,
    borderColor: "#2E2535",
    position: 'absolute',
    top:160,
    left:36,
  },
  groupTitle: {
    color: "white",
    fontSize: 26  ,
    fontFamily: "Ubuntu-Medium",
    position: "absolute",
    left: 40,
    top:290,
  },
  subTitle: {
    color: "white",
    fontSize: 21,
    fontFamily: "Ubuntu-Regular",
    position: "absolute",
    left:40,
    top: 325
  },
  purp: {
    color: "#9054F2"
  },
  logHeader: {
    color: "white",
    fontSize: 23,
    position: "absolute",
    left:40,
    top: 355,
    fontFamily: "Ubuntu-Medium"
  },
  logContainer: {
    position: "absolute",
    top: 390,
    width: "90%",
    height:"53%",
    left:19
  },
  log: {
    width: "100%",
    height:90,
    backgroundColor: pallete.lighterPurple,
    borderRadius: 14,
    marginTop: 20,
  },
  logImage: {
    backgroundColor: "#fff",
    height:60 ,
    width: 60,
    left:15,
    top: 15,
    borderRadius: 14
  }
});
