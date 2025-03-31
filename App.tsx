import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Footer from "./android/app/components/Footer";
import Navbar from "./android/app/components/Navbar/Navbar";
const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <GestureHandlerRootView style={{ flex: 1 }}>
//         <NavigationContainer>
//           <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
//             <Stack.Screen name="Home" component={HomeScreen} />
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Signup" component={SignupScreen} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </GestureHandlerRootView>
//     </SafeAreaProvider>
//   );
// }

export default function App({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <main className="font-work-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <div>{children}</div>

      <Footer />
    </main>
  );
}