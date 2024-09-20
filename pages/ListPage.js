import { SafeAreaView, FlatList, Pressable, Text, StyleSheet, View } from 'react-native';

const data = [
  { id: '1', title: 'Food' },
  { id: '2', title: 'Movies' },
  { id: '3', title: 'Sports' },
  { id: '4', title: 'Animal' },
  { id: '5', title: 'Clothing' },
  { id: '6', title: 'Food' },
  { id: '7', title: 'Movies' },
  { id: '8', title: 'Sports' },
  { id: '9', title: 'Animal' },
  { id: '10', title: 'Clothing' },
];

const ListPage = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#D3D3D3' : '#FFFFFF',
        },
        styles.itemContainer,
      ]}
      onPress={() => alert(`You pressed on ${item.title}`)}
    >
      <Text style={styles.itemText}>{item.title}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>List</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.navigationContainer}>
        <Pressable style={styles.navButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navButtonText}>Home</Text>
        </Pressable>
        <Pressable style={styles.navButton} onPress={() => navigation.navigate('About')}>
          <Text style={styles.navButtonText}>About</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ListPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  header: {
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
    padding: 30,

  },
  listContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginBottom: 10,
    elevation: 3, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 10,
  },
  navButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  navButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
