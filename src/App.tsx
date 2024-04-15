import { GoalsPage, HomePage1, HomePage2, Layout, Login, Schedule, Signup, Tracker, } from "./pages";
import { Route, Routes } from "react-router-dom"


export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage1 />}
      />
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          path="/tracker"
          element={<Tracker />}
        />
        <Route
          path="/schedule"
          element={<Schedule />}
        />
      </Route>
      <Route
        path="/get-burn"
        element={<HomePage2 />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/signup"
        element={<Signup />}
      />
      <Route
        path="/goals"
        element={<GoalsPage />}
      />
    </Routes>
  )
}