//index.tsx

import { useRootNavigationState, Redirect } from "expo-router";

export default function App() {
  const rootNavigationState = useRootNavigationState();
  console.log("🚀 ~ App ~ rootNavigationState:", rootNavigationState);

  if (!rootNavigationState?.key) return null;

  return <Redirect href={"/home"} />;
}
