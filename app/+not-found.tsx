import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
    return (
        <>  
        <Stack.Screen options= {{ title: 'Oops! Not Found' }} />
        <View style={Styles.container}>
            <Link href="/" style={Styles.button}>Go back home
            </Link>
        </View>
        </>
    );
}

const Styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});