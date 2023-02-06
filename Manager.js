import {StyleSheet ,Text, View, ScrollView, Button, TextInput, FlatList, Modal, Pressable } from 'react-native';

const ProductItem = (props) => {
    const item = props.item;
    return(
        <>
            <Text style={styles.text}>Ten SV: {item.name}</Text>
            <Text style={styles.text}>Ma SV: {item.msv}</Text>
        </>
    );
}

const ProductList = (props) => {
    const list = props.data || [];
    return (
        <FlatList style={styles.listStyle}
            data={list}
            renderItem={({item}) => <ProductItem item ={item}/>}
            keyExtractor={(item) => item.id}
        />
    );
}
const App = (props) => {
    const route = props.route;
    const listHome = route.params.list;
    return (
        <View>
            <ProductList
            data={listHome}/>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
    },
    listStyle:{
        margin:10,
    }
});

export default App;