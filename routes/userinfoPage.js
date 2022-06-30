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

const MainScreen = (probs) => {
  if (probs.loading) {
    return (
      <View>
        <ActivityIndicator></ActivityIndicator>
      </View>
    );
  } else {
    var names_data = [];
    console.log(probs.mydata);

    return (
      <View>
        <View
          style={{
            height: 80,
            justifyContent: "center",
            backgroundColor: "beige",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 24 }}>
            {probs.mydata.name}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 18 }}>
            User Information
          </Text>
        </View>
        <View
          style={{
            height: 100,
            justifyContent: "space-evenly",
            backgroundColor: "brown",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Username : {probs.mydata.username}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            E-mail : {probs.mydata.email}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Phone : {probs.mydata.phone}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Website : {probs.mydata.website}
          </Text>
        </View>
        <View
          style={{
            height: 50,
            justifyContent: "center",
            backgroundColor: "beige",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 18 }}>
            Location Information
          </Text>
        </View>
        <View
          style={{
            height: 100,
            justifyContent: "space-evenly",
            backgroundColor: "brown",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Street : {probs.mydata.address.street}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Suite : {probs.mydata.address.suite}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Zipcode : {probs.mydata.address.zipcode}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            City : {probs.mydata.address.city}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Latitude : {probs.mydata.address.geo.lat}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Longitude : {probs.mydata.address.geo.lng}
          </Text>
        </View>
        <View
          style={{
            height: 50,
            justifyContent: "center",
            backgroundColor: "beige",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 18 }}>
            Company Information
          </Text>
        </View>
        <View
          style={{
            height: 100,
            justifyContent: "space-evenly",
            fontWeight: "500",
            backgroundColor: "brown",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Company Name : {probs.mydata.company.name}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Catchphrase : {probs.mydata.company.catchPhrase}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Bs : {probs.mydata.company.bs}
          </Text>
        </View>
        <View
          style={{
            height: 1000,
            backgroundColor: "beige",
          }}
        ></View>
      </View>
    );
  }
};

var user_id = 0;
var is_loading = true;

const loadUserData = async (user_id) => {
  var my_url =
    "https://jsonplaceholder.typicode.com/users/" + user_id.toString();
  const response = await fetch(my_url);
  const data = await response.json();
  return data;
};

var user_data = null;
var navigator = null;

class UserInfo extends Component {
  constructor(probs) {
    user_id = probs.navigation.state.params.id;
    navigator = probs.navigation;
    super();
  }

  user_data = loadUserData(user_id).then((value) => {
    user_data = value;
    is_loading = false;
    this.setState({});
  });

  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
        <MainScreen
          loading={is_loading}
          mydata={user_data}
          navigator={navigator}
        ></MainScreen>
      </View>
    );
  }
}

export default UserInfo;
