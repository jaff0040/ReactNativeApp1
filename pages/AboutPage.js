import { SafeAreaView, ScrollView, Image, Button, StyleSheet, Text, View } from 'react-native';



const AboutPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>About Page</Text>
        <Image
            source={require("../assets/robot.png")}
            style={styles.image}
        />
        <Text style={[styles.description, {fontWeight:'bold'}]}>
        Hi I am Robot 2024
        </Text>
        
        <Text style={styles.paragraph}>
        We believe in shaping the future with technology that enhances everyday life. 
        Our robot is designed to assist, innovate, and inspire. 
        Whether it’s performing household tasks, offering smart companionship, 
        or streamlining business operations, our robots are engineered with cutting-edge 
        artificial intelligence and a user-friendly interface to adapt to your needs. 
        With a focus on reliability, efficiency, and continuous learning, we’re committed to 
        providing a robotic solution that not only makes life easier but also empowers you to 
        focus on what matters most. Welcome to the future, where technology and humanity thrive together.
        </Text>
        <Text style={styles.paragraph}>
        We believe in shaping the future with technology that enhances everyday life. 
        Our robot is designed to assist, innovate, and inspire. 
        Whether it’s performing household tasks, offering smart companionship, 
        or streamlining business operations, our robots are engineered with cutting-edge 
        artificial intelligence and a user-friendly interface to adapt to your needs. 
        With a focus on reliability, efficiency, and continuous learning, we’re committed to 
        providing a robotic solution that not only makes life easier but also empowers you to 
        focus on what matters most. Welcome to the future, where technology and humanity thrive together.
        </Text>
        <Text style={styles.paragraph}>
        We believe in shaping the future with technology that enhances everyday life. 
        Our robot is designed to assist, innovate, and inspire. 
        Whether it’s performing household tasks, offering smart companionship, 
        or streamlining business operations, our robots are engineered with cutting-edge 
        artificial intelligence and a user-friendly interface to adapt to your needs. 
        With a focus on reliability, efficiency, and continuous learning, we’re committed to 
        providing a robotic solution that not only makes life easier but also empowers you to 
        focus on what matters most. Welcome to the future, where technology and humanity thrive together.
        </Text>

        <View style={styles.buttonContainer}>
          <Button title="Home" onPress={() => navigation.navigate('Home')} color="#1E90FF" />
          <View style={styles.spacer} />
          <Button title="List" onPress={() => navigation.navigate('List')} color="#32CD32" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 18,
    color: '#666',
    textAlign: 'left',
    marginBottom: 30,
    paddingHorizontal: 10,
    fontFamily: 'Helvetica',
    },
  image: {
    width: 300,
    height: 300,
    borderRadius: 40,
    marginBottom: 20,
    borderColor: 'grey',
    borderWidth: 1, 
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  spacer: {
    width: 10,
  },
});
