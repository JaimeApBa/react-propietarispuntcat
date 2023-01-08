import { AuthProvider } from "./auth/context";
import { AppRouter } from "./router/AppRouter";

export const PropietarispuntcatApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
