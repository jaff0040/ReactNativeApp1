import { SafeAreaView, Text, Button, StyleSheet, View } from 'react-native';


const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hello React Native</Text>
        <Text style={[styles.paragraph, {fontWeight:'bold',fontSize: 20, textAlign: 'center',color: '#666'}]}>Welcome to my project</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          title="About Page"
          onPress={() => navigation.navigate('About')}
          color="#1E90FF"
        />

        <View style={styles.spacer} />
        <Button 
          title="List Page"
          onPress={() => navigation.navigate('List')}
          color="#32CD32"
        />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 80,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    paddingBottom: 20,
  },
  buttonContainer: {
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  spacer: {
    height: 40,
  },

});
