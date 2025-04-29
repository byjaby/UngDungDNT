import React from 'react';
import HelloWorld from './LAB1/project1';
import { View } from 'react-native';
import ButtonTest from './LAB1/project2';
import ButtonTest2 from './LAB1/project3';
import PressTest from './LAB1/project4';
import FlexBox from './LAB1/project5';
import FlexBox2 from './LAB1/project6';
import FormTest from './LAB1/project7';
import ListName from './LAB1/project8';
import FormLogin from './Buoi3/FormLogin';
import Calculator from './LAB1/Calculator';
import TabNavigator from './LAB2/components/routers';
import Index from './Buoi4/Index';
import MyDrawer from './Buoi4/MyDrawer';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens, enableFreeze } from 'react-native-screens';

enableScreens();   
enableFreeze(true); 

const App = () => {
  return (
    //<HelloWorld />
    //<ButtonTest/>
    //<ButtonTest2/>
    //<PressTest/>
    //<FlexBox/>
    //<FlexBox2/>
    //<FormTest/>
    //<ListName/>
    //<FormLogin/>
    //<Calculator/>
    //<TabNavigator />
    <Index/>
    /*<NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>*/
  );
};

export default App;
