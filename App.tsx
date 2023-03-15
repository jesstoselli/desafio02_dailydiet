import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { Loading } from "./src/components/Loading";
import theme from "./src/theme";

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { Routes } from "./src/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
