import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {

  useFonts({
    'mMain':require('./../assets/fonts/Montserrat-Black.ttf'),
    'mBold':require('./../assets/fonts/Montserrat-Bold.ttf'),
    'mRegular':require('./../assets/fonts/Montserrat-Regular.ttf')
  })

  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
