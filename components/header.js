import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>To do list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
    paddingTop: 80,
    height: 50,
    backgroundColor: 'green',
  },
  text: {
    fontsize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});