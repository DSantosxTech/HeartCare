import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginForm from '../../components/SignInForm';
import ResetPasswordForm from '../../components/ResetPassword';
import { styles } from './styles';

import * as Animatable from 'react-native-animatable';
import { logar } from '../../api/LogInToAccount';
import { enviarRecuperacaoSenha } from '../../api/PasswordRecovery';
import { propsStack } from '../../routes/Models';
import { useAuth } from '../../hooks/Auth';

const Login = () => {
  const { signIn} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const { navigate } = useNavigation<propsStack>();

  const handleLogin = () => {
    setLoading(true);
    signIn({email, password})
  };

  const handleResetPassword = () => {
    setLoading(true);
    enviarRecuperacaoSenha(resetEmail)
      .then(() => {
        setLoading(false);
        alert('Um email de recuperação de senha foi enviado.');
      })
      .catch((error: { message: any; }) => {
        setLoading(false);
        alert(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleForgotPassword = () => {
    setShowResetPassword(true);
  };


  const handleBackToLogin = () => {
    setShowResetPassword(false);
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      {showResetPassword ? (
        <ResetPasswordForm
          resetEmail={resetEmail}
          setResetEmail={setResetEmail}
          handleResetPassword={handleResetPassword}
          loading={loading}
          handleBackToLogin={handleBackToLogin}
        />
      ) : (
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isPasswordVisible={isPasswordVisible}
          togglePasswordVisibility={togglePasswordVisibility}
          handleLogin={handleLogin}
          loading={loading}
          handleForgotPassword={handleForgotPassword}
        />
      )}
    
    </View>
  );
};

export default Login;
