import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../redux/feature/store";

export default function () {
  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  );
}
