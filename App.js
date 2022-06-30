import React, { Component } from "react";
import Header from "./Components/userlistpageComps/header";
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
import Navigator from "./routes/homeStack";
import "react-native-gesture-handler";

export default function app() {
  return <Navigator />;
}
