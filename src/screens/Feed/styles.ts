import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.BACKGROUND,
  },
 
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  addButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: theme.COLORS.BUTTON,
    width: 60,
    height: 60,
    borderRadius: 30,
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  addButtonText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },

  message: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
  },

  });
  