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

const MyScreen = (probs) => {
  if (probs.loading) {
    return (
      <View>
        <ActivityIndicator></ActivityIndicator>
      </View>
    );
  } else {
    var names_data = [];
    console.log(probs.mydata[1]);

    for (let i = 0; i < probs.mydata[1].length; i++) {
      let tmp_dic = {
        key: i,
        comment: probs.mydata[1][i]["body"],
        name: probs.mydata[1][i]["email"],
      };
      names_data.push(tmp_dic);
    }

    console.log(names_data);

    return (
      <View>
        <View
          style={{
            height: 80,
            justifyContent: "center",
            backgroundColor: "darkred",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 24 }}>
            {probs.mydata[0].title}
          </Text>
        </View>
        <View
          style={{
            height: "20%",
            justifyContent: "flex-start",
            paddingTop: 10,
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 20, paddingLeft: 10 }}>
            POST
          </Text>
          <Text style={{ textAlign: "left", fontSize: 16, paddingLeft: 10 }}>
            {probs.mydata[0].body}
          </Text>
        </View>
        <View style={{ height: "80%" }}>
          <Text style={{ textAlign: "center", fontSize: 20, paddingLeft: 10 }}>
            COMMENTS
          </Text>
          <FlatList
            data={names_data}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={{ color: "blue" }}>{item.name}</Text>
                <Text>{item.comment}</Text>
              </View>
            )}
            keyExtractor={(item) => item.key}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  item: {
    marginTop: 5,
    padding: 15,
    backgroundColor: "beige",
    fontSize: 24,
  },
  text: {
    textAlign: "center",
    fontSize: 25,
  },
});

var post_id = 0;
var is_loading = true;

const loadPostData = async (post_id) => {
  var my_url =
    "https://jsonplaceholder.typicode.com/posts/" + post_id.toString();
  var my_url_comments =
    "https://jsonplaceholder.typicode.com/posts/" +
    post_id.toString() +
    "/comments";
  const response = await fetch(my_url);
  const response_comment = await fetch(my_url_comments);
  var my_data = [];
  const data = await response.json();
  const data_comment = await response_comment.json();
  my_data.push(data, data_comment);
  return my_data;
};

var post_data = null;
var navigator = null;

class UserInfo extends Component {
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

export default UserInfo;
