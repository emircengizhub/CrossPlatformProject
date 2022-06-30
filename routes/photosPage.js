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
import Navigator from "./homeStack";

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
      <View style={{ backgroundColor: "black", height: "100%" }}>
        <FlatList
          data={names_data}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Button
                onPress={() => {
                  props.navigator.navigate("PhotosInfoPage", {
                    id: item.key,
                  });
                }}
                title={item.name}
                color="blue"
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

const getPhotos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await response.json();
  return data;
};

class PhotosPage extends Component {
  navigator = null;

  constructor({ navigation }) {
    navigator = navigation;
    super();
  }

  data = getPhotos().then((value) => {
    is_loading = false;
    data = value;
    this.setState({});
  });

  render() {
    return (
      <View style={{ backgroundColor: "red" }}>
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
    backgroundColor: "yellow",
    fontSize: 54,
  },
  text: {
    textAlign: "center",
    fontSize: 40,
  },
});

export default PhotosPage;
