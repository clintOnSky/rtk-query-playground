import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../redux/feature/store";

export default function () {
  return (
    <Provider store={store}>
      <Stack initialRouteName="home">
        <Stack.Screen name="home" />
        <Stack.Screen name="get-all-posts" />
        <Stack.Screen name="[id]" />
        <Stack.Screen name="delete-by-id" />
        <Stack.Screen name="create-post" />
      </Stack>
    </Provider>
  );
}
