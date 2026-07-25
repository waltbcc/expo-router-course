import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import * as Font from "expo-font";

export default function App() {
  const [fontLoaded] = Font.useFonts({
    "Inter-Black-18": require("./assets/fonts/Inter_18pt-Regular.ttf")
  })
  if (!fontLoaded) {
    return (
      <View style={styles.container}>
          <ActivityIndicator size={30} color="#ffffff" />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Inter-Black-18',
  },
  title: {
    fontFamily: 'Inter-Black-18',
  }
});
