import { Text, View, StyleSheet } from 'react-native';
import MainAppbar from '../components/MainAppbar';
import { Ionicons } from '@expo/vector-icons'


const SecondScreen = () => {
    return (
        <>
            <MainAppbar title="SecondScreen" />
            <View style={styles.container}>
                <Text>SecondScreen</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
    },
});

export default SecondScreen;