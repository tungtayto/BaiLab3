import { StyleSheet, Text, View, ScrollView, Button, TextInput, FlatList, Modal, Pressable } from 'react-native';

const App = (props) => {
    const route = props.route;
    const tenSV = route.params.name;
    const maSV = route.params.msv;
    return (
        <View>
            <Text style={styles.text}>Họ tên: {tenSV}</Text>
            <Text style={styles.text}>Mã sinh viên: {maSV}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
    },
});

export default App;