import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { styles } from './styles';
import { propsStack } from '../../routes/Models';

export default function Home() {
  const { navigate } = useNavigation<propsStack>();

  return (
    <View style={styles.container}>
      <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.containerLogo}>
        <Animatable.Image
          animation="zoomIn"
          source={require('../../assets/logo.png')}
          style={{ width: '100%' }}
          resizeMode="contain"
        />
      </Animatable.View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Cuide do seu coração, a sinfonia da vida agradece.</Text>
        <Text style={styles.text}>Faça o login para começar</Text>

        <TouchableOpacity style={styles.buttonAcessar} onPress={() => navigate('Login')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
