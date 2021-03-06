import {createStackNavigator} from '@react-navigation/stack';
import Intro1 from '../Mainflow/Intro1/view';
import Intro2 from '../Mainflow/Intro2/view';
import Intro3 from '../Mainflow/Intro3/view';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TestButton from '../Mainflow/TestButton/view';
import TestThumbnail from '../Mainflow/TestThumbnail/view';
import {DrawerStack} from './DrawerStack';
import Wallet from '../Mainflow/Wallet/view';
import SignOut from '../Mainflow/SignOut/view';
import Pinlogin from '../Mainflow/Pinlogin/view';
import Pinsign from '../Mainflow/Pinsign/view';
import Splash from '../Application/Splash';
import Pinchg from '../Mainflow/Pinchg/view';
import Thumbnail2 from '../Mainflow/Thumbnail2/view';
import Thumbnail3 from '../Mainflow/Thumbnail3/view';
import TcConnMana from '../Mainflow/TcConnMana/view';
import MarketingInfo from '../Mainflow/MarketingInfo/view';
import Policy from '../Mainflow/Policy/view';
import TcStory from '../Mainflow/TcStory/view';
import SendMsg from '../Mainflow/SendMsg/view';
import QnA from '../Mainflow/QnA/view';
import Notice from '../Mainflow/Notice/view';
import MyInfo from '../Mainflow/MyInfo/view';
import Shopping from '../Mainflow/Shopping/view';
import Thumbnail1 from '../Mainflow/Thumbnail1/view';
import Thumbnail4 from '../Mainflow/Thumbnail4/view';
import Prepare from '../Mainflow/Prep/view';
import Signup from '../Mainflow/Signup/view';
import ScanResult from '../Mainflow/ScanResult/view';
import RandomSc from '../Mainflow/RandomSc/view';
import MyCoupon from '../Mainflow/MyCoupon/view';
import ScanHistory from '../Mainflow/ScanHistory/view';
import TouchCon from '../Mainflow/TouchCon/view';
import TouchConCh from '../Mainflow/TouchconCh/view';
import Intro4 from '../Mainflow/Intro4/view';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const RootStack = () => (
  <Stack.Navigator
    initialRouteName="TestButton"
    screenOptions={{
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
        lineHeight: 24,
        color: '#000',
        fontWeight: 'bold',
        // fontFamily: 'NotoSansKR-Regular',
      },
      headerStyle: {
        shadowOffset: {height: 0, width: 0},
        backgroundColor: '#fff',
      },
      headerBackImage: () => (
        <AntDesign
          name="left"
          size={24}
          color={'#000'}
          style={{padding: 4, alignSelf: 'center'}}
        />
      ),
      headerBackTitleVisible: false,
    }}>
    {/* ?????? ??????  start */}
    <Stack.Screen
      name="TestButton"
      component={TestButton}
      options={{headerShown: false}}
    />
    {/* ?????? ?????? end */}

    {/* ?????? ??????2  start */}
    <Stack.Screen
      name="TestThumbnail"
      component={TestThumbnail}
      options={{title: 'x ?????? ??????'}}
    />
    {/* ?????? ??????2 end */}

    {/* Intro 3 start*/}
    <Stack.Screen
      name="Intro3"
      component={Intro3}
      options={{headerShown: false}}
    />
    {/* Intro 3 end*/}

    {/* Intro 2 start*/}
    <Stack.Screen
      name="Intro2"
      component={Intro2}
      options={{headerShown: false}}
    />
    {/* Intro 2 end*/}

    {/* Intro 1 start*/}
    <Stack.Screen
      name="Intro1"
      component={Intro1}
      options={{headerShown: false}}
    />
    {/* Intro 2 end*/}

    {/* ???????????? start */}
    <Stack.Screen
      name="Main"
      component={DrawerStack}
      options={{headerShown: false}}
    />
    {/* ???????????? end */}

    {/* ------ ???????????? (????????? ??????) start */}
    <Stack.Screen
      name="Wallet"
      component={Wallet}
      options={{title: '????????? ??????'}}
    />
    {/* ------ ???????????? (????????? ??????) end */}
    {/* Sign Out start(????????????) */}
    <Stack.Screen
      name="SignOut"
      component={SignOut}
      options={{title: '????????????'}}
    />

    {/* Sign Out start(????????????) */}

    <Stack.Screen
      name="Pinlogin"
      component={Pinlogin}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Pinsign"
      component={Pinsign}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Splash"
      component={Splash}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Pinchg"
      component={Pinchg}
      options={{headerShown: false}}
    />

    <Stack.Screen
      name="Thumbnail2"
      component={Thumbnail2}
      options={{title: 'x ?????? ??????'}}
    />

    <Stack.Screen
      name="Thumbnail3"
      component={Thumbnail3}
      options={{title: 'x ?????? ??????'}}
    />
    {/* ????????? ???????????? */}
    <Stack.Screen
      name="TcConnMana"
      component={TcConnMana}
      options={{title: '????????? ?????? ??????'}}
    />
    {/* ????????? ?????? ?????? */}
    <Stack.Screen
      name="MarketingInfo"
      component={MarketingInfo}
      options={{title: '????????? ?????? ??????'}}
    />
    {/* ?????? ??? ?????????????????? ??????*/}
    <Stack.Screen
      name="Policy"
      component={Policy}
      options={{title: '?????? ??? ?????????????????? ??????'}}
    />

    <Stack.Screen
      name="TcStory"
      component={TcStory}
      options={{title: '????????? ?????????'}}
    />
    {/* 1:1 ???????????? */}
    <Stack.Screen
      name="SendMsg"
      component={SendMsg}
      options={{title: '1:1 ????????????'}}
    />

    {/* ??? ?????? > ???????????? ?????? ?????????  */}
    <Stack.Screen
      name="QnA"
      component={QnA}
      options={{title: '?????? ?????? ??????'}}
    />

    {/* ???????????? */}
    <Stack.Screen
      name="Notice"
      component={Notice}
      options={{title: '????????????'}}
    />

    <Stack.Screen
      name="MyInfo"
      component={MyInfo}
      options={{title: '??? ??????'}}
    />

    <Stack.Screen
      name="Shopping"
      component={Shopping}
      options={{title: '?????? ????????? ????????????'}}
    />
    <Stack.Screen
      name="Thumbnail1"
      component={Thumbnail1}
      options={{headerShown: false}}
    />

    <Stack.Screen
      name="Thumbnail4"
      component={Thumbnail4}
      options={{title: 'x ?????? ??????'}}
    />

    <Stack.Screen
      name="Prep"
      component={Prepare}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Intro"
      component={MyTabs}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Signup"
      component={Signup}
      options={{headerShown: false}}
    />

    {/*------?????? ?????? start---------  */}
    <Stack.Screen
      name="ScanResult"
      component={ScanResult}
      options={{
        title: '',
        headerStyle: {backgroundColor: '#FD7F36'},
        headerTintColor: '#fff',
      }}
    />
    {/*------?????? ?????? end---------  */}

    {/* ------- ???????????? start --------- */}
    <Stack.Screen
      name="RandomSc"
      component={RandomSc}
      options={{
        title: '???????????? ?????? ?????????!',
        headerStyle: {backgroundColor: '#FD7F36'},
        headerTintColor: '#fff',
      }}
    />
    {/* ------- ???????????? end --------- */}

    {/* ------ ??? ?????? start */}
    <Stack.Screen
      name="MyCoupon"
      component={MyCoupon}
      options={{
        title: '?????????',
        headerStyle: {backgroundColor: '#FD7F36'},
        headerTintColor: '#fff',
      }}
    />
    {/* ------ ??? ?????? end */}

    {/*---------???????????? start---------  */}
    <Stack.Screen
      name="ScanHistory"
      component={ScanHistory}
      options={{title: '?????? ????????????'}}
    />

    {/*---------???????????? end ----------  */}

    {/* ----- ????????? start-------- */}
    <Stack.Screen
      name="TouchCon"
      component={TouchCon}
      options={{title: '????????? ??????'}}
    />
    {/*---- ?????????  end---- */}
    {/* ----- ???????????????  start-------- */}
    <Stack.Screen
      name="TouchConCh"
      component={TouchConCh}
      options={{title: '????????? ??????'}}
    />
    {/*---- ???????????????  end---- */}
    <Stack.Screen
      name="Intro4"
      component={Intro4}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Intro1"
      tabBar={() => null}
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen name="Intro1" component={Intro1} />
      <Tab.Screen name="Intro2" component={Intro2} />
      <Tab.Screen name="Intro3" component={Intro3} />
    </Tab.Navigator>
  );
}

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Main"
//       tabBar={() => null}
//       screenOptions={{
//         tabBarShowLabel: false,
//       }}>
//       <Tab.Screen name="Main" component={Main} />
//       <Tab.Screen name="TouchCon" component={TouchCon} />
//     </Tab.Navigator>
//   );
// }

export default RootStack;
