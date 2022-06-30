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

var navigator = null;

class HomeMenu extends Component {
  constructor(probs) {
    navigator = probs.navigation;
    super();
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: "lightblue",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <Button
            title="To Do List"
            onPress={() => {
              navigator.navigate("TodoPage");
            }}
          ></Button>
        </View>
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <Button
            title="UserList"
            onPress={() => {
              navigator.navigate("UserListPage");
            }}
          ></Button>
        </View>
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <Button
            title="Posts"
            onPress={() => {
              navigator.navigate("PostListPage");
            }}
          ></Button>
        </View>
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <Button
            title="Photos"
            onPress={() => {
              navigator.navigate("PhotosPage");
            }}
          ></Button>
        </View>
      </View>
    );
  }
}

export default HomeMenu;
