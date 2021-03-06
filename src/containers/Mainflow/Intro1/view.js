import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Intro1() {
  return (
    <ImageBackground
      source={require('../../../assets/images/start_back.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}
    >
      <Text style={styles.uptext}>글로벌 최초 디지털 자산 랜던 리워드</Text>
      <TouchableOpacity
        style={styles.midback}
        onPress={() => alert('버튼 클릭')}
      >
        <Text style={styles.midbtn}>RAMDOM</Text>
      </TouchableOpacity>
      <Image
        source={require('../../../assets/images/start_title.png')}
        style={{
          zIndex: 3,
          height: '80%',
          width: '80%',
          resizeMode: 'contain',
          alignSelf: 'center',
          position: 'relative',
          top: -210,
        }}
      />
      <Image
        source={require('../../../assets/images/start_content.png')}
        style={{
          zIndex: 4,
          height: '60%',
          width: '60%',
          resizeMode: 'contain',
          alignSelf: 'center',
          position: 'absolute',
          top: 190,
        }}
      />
      <Text style={styles.samllText}>
        DIGITAL ASSET REWORD SYSTEM @ TOUCHCON
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  uptext: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 125,
    marginBottom: 22,
  },
  midbtn: {
    color: '#FFFFFF',
    fontSize: 12,
    alignSelf: 'center',
    paddingTop: 5,
  },
  midback: {
    backgroundColor: '#F08F35',
    width: 79,
    height: 30,
    alignSelf: 'center',
    borderRadius: 20,
  },
  samllText: {
    height: '100%',
    width: '100%',
    fontSize: 7,
    fontWeight: 'bold',
    position: 'absolute',
    top: 630,
    left: 120,
  },
});
