import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LockScreen } from "./src/components/Pages/LockScreen";
import { Initial } from "./src/components/Pages/Initial";
const Stack = createNativeStackNavigator();
export default function Home() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LockScreen">
          <Stack.Screen
            name="LockScreen"
            component={LockScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Initial"
            component={Initial}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5C0098",
  },
});
