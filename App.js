import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, Platform } from 'react-native';
import React from 'react';
// import httpGet from './components/httpGet';


export default function App() {

  async function getJoke() {
    var url = makeURL();
    try {
      let p = fetchAsync(url);
      p.then((message) => {
        if (message.type === "single") {
          alert(message.joke)
        }
        else {
          alert(message.delivery);
          alert(message.setup);
        }
      }).catch((message) => {
        console.log("Caught: " + message)
      })
    } catch (e) {
      console.log("Error: " + e);
    }
    // const { foo, bar }  = await response.then(result => result.data);
    // console.log(foo);
    // console.log(bar);
    //let joke = JSON.parse(jsonStr);
    //alert(joke.category);
  }

  async function fetchAsync(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }

  function makeURL() {
    let url = "https://v2.jokeapi.dev/joke/Any";
    return url;
  }




  return (
    <View style={{alignItems: 'center'}}>
      <SafeAreaView style={safeAreaStyle}>
        <Text style={{alignSelf: 'center', fontSize: "32"}}>Daily Joke</Text>
      </SafeAreaView>
      <View style={{paddingTop: "70%"}}>
        <Button title='Test Button' onPress={() => alert("button clicked")}/>
        <Button title='Get Joke' onPress={() => getJoke()}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

class Joke {

  category;
  delivery;
  error;
  flags;
  id;
  lang;
  safe;
  setup;
  type;

}

const safeAreaStyle = {backgroundColor: "#7FFFD4", width: "100%", height: "20%"};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    
    paddingTop: Platform.OS === "android" ? 20 : 0
  },
});


