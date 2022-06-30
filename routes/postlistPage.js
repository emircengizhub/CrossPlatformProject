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
    for (let i = 0; i < 20; i++) {
      let tmp_dic = {
        key: props.mydata[i]["id"],
        name: props.mydata[i]["title"],
      };
      names_data.push(tmp_dic);
    }

    //return(<View></View>);

    console.log(names_data);
    return (
      <View style={{ backgroundColor: "bisque", height: "100%" }}>
        <FlatList
          data={names_data}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Button
                onPress={() => {
                  props.navigator.navigate("PostInfoPage", { id: item.key });
                }}
                title={item.name}
                color="brown"
              ></Button>
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

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

class PostListPage extends Component {
  navigator = null;

  constructor({ navigation }) {
    navigator = navigation;
    super();
  }

  data = getUsers().then((value) => {
    is_loading = false;
    data = value;
    this.setState({});
  });

  render() {
    return (
      <View style={{ backgroundColor: "cadetblue" }}>
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
    backgroundColor: "bisque",
    fontSize: 24,
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "500",
  },
});

export default PostListPage;
