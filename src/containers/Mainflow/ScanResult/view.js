import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TouchableNativeFeedback,
  ScrollViewBase,
  ScrollView,
} from 'react-native';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import {LongButton} from '../../../components/Botton';

const view = ({navigation}) => {
  return (
    <WhiteSafeAreaView>
      <View style={styles.back}>
        {/* <Image source={require('../../../assets/images/result_star.png')} /> */}
        <View style={{flex: 1}}>
          <View style={styles.upperBack}>
            <Text style={styles.h1}>축하합니다.</Text>
          </View>

          <View style={styles.point}>
            <View style={styles.inner_point}>
              <View style={styles.charge_display}>
                <Text style={styles.charge_pay}>500</Text>
                <Text style={styles.right_text}>Touch</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.tach}
            onPress={() => {
              alert('버튼작동');
            }}
          >
            <Text style={styles.btn_text}>적립하기</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={{flex: 1}}>
        <View style={styles.charge}>
          <View style={styles.display}>
            <Text style={styles.charge_text}> 적립액</Text>
            <Text style={styles.charge_text}>2500</Text>
            <Text style={styles.right_text}>Touch</Text>
          </View>
        </View>
        <LongButton style={styles.go_wallet} text={'나의 지갑가기'} />
      </ScrollView>
    </WhiteSafeAreaView>
  );
};

export default view;

const styles = StyleSheet.create({
  upperBack: {
    minHeight: 71,
    backgroundColor: 'rgba(14, 15, 15, 0.8)',
  },
  h1: {
    fontSize: 30,
    color: '#ffffff',
    alignSelf: 'center',
    marginVertical: 25,
  },
  point: {
    minHeight: 123,
    marginHorizontal: 51,
    marginVertical: 39,
    borderRadius: 10,
    backgroundColor: '#c4c4c4',
  },
  charge_display: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 48,
    marginVertical: 45,
  },
  charge_pay: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  inner_point: {
    borderWidth: 2,
    borderRadius: 10,
    minHeight: 106,
    marginHorizontal: 11,
    marginVertical: 8,
    borderColor: '#ffffff',
  },
  charge: {
    height: 100,
    backgroundColor: 'rgba(14, 15, 15, 0.8)',
    marginHorizontal: 38,
    marginVertical: 70,
  },
  charge_text: {color: '#ffffff', fontSize: 20, fontWeight: 'bold'},
  right_text: {color: '#ffffff'},
  display: {
    marginHorizontal: 20,
    marginVertical: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  back: {
    width: 390,
    height: 350,
    backgroundColor: '#FD7F36',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  tach: {
    backgroundColor: '#FFFFFF',
    width: '85%',
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
  },
  go_wallet: {
    marginBottom: 32,
  },
  btn_text: {fontSize: 20, fontWeight: 'bold', color: '#FD7F36', padding: 10},
});
