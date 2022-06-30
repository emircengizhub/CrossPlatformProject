import React, { Component } from "react";
import Header from "../Components/userlistpageComps/header";
import {
  Button,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Navigator from "../routes/homeStack";

const MyScreen = (props) => {
  if (props.loading) {
    return (
      <View style={styles.header}>
        <ActivityIndicator></ActivityIndicator>
      </View>
    );
  } else {
    var names_data = [];
    for (let i = 0; i < props.mydata.length; i++) {
      let tmp_dic = {
        key: props.mydata[i]["id"],
        name: props.mydata[i]["title"],
      };
      names_data.push(tmp_dic);
    }

    return (
      <View style={{ backgroundColor: "cornsilk", height: "100%" }}>
        <FlatList
          data={names_data}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text
                style={{ color: "cornsilk", textAlign: "center", fontSize: 20 }}
              >
                {item.name}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    );
  }
};

var is_loading = true;

var data = null;

const getphotoAlbums = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
};

class TodoPage extends Component {
  navigator = null;

  constructor({ navigation }) {
    navigator = navigation;
    super();
  }

  data = getphotoAlbums().then((value) => {
    is_loading = false;
    data = value;
    this.setState({});
  });

  render() {
    return (
      <View style={{ backgroundColor: "crimson " }}>
        <MyScreen
          loading={is_loading}
          mydata={data}
          navigator={navigator}
        ></MyScreen>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    marginTop: 5,
    padding: 15,
    backgroundColor: "crimson",
    fontSize: 54,
  },
  text: {
    fontSize: 40,
  },
});

export default TodoPage;
