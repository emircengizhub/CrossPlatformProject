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
  Image,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const MyScreen = (probs) => {
  if (probs.loading) {
    return (
      <View>
        <ActivityIndicator></ActivityIndicator>
      </View>
    );
  } else {
    var names_data = [];
    console.log(probs.mydata[0]);

    for (let i = 0; i < probs.mydata[0].length; i++) {
      let tmp_dic = {
        key: i,
        title: probs.mydata[0][i]["title"],
      };
      names_data.push(tmp_dic);
    }

    return (
      <SafeAreaView>
        <View>
          <Text style={{ textAlign: "center", fontSize: 40, paddingLeft: 10 }}>
            PhotosAlbum
          </Text>
          <FlatList
            data={names_data}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={{ color: "black", textAlign: "center" }}>
                  {item.title}
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.key}
          />
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  item: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "orange",
    fontSize: 54,
  },
  text: {
    fontSize: 40,
  },
});

var post_id = 0;
var is_loading = true;

const loadPostData = async (post_id) => {
  var my_url =
    "https://jsonplaceholder.typicode.com/albums/" +
    post_id.toString() +
    "/photos";
  const response = await fetch(my_url);
  var my_data = [];
  const data = await response.json();
  my_data.push(data);
  return my_data;
};

var post_data = null;
var navigator = null;

class AlbumInfo extends Component {
  constructor(probs) {
    post_id = probs.navigation.state.params.id;
    navigator = probs.navigation;
    super();
  }

  post_data = loadPostData(post_id).then((value) => {
    post_data = value;
    is_loading = false;
    this.setState({});
  });

  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
        <MyScreen
          loading={is_loading}
          mydata={post_data}
          navigator={navigator}
        ></MyScreen>
      </View>
    );
  }
}

export default AlbumInfo;
