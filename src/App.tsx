import { GoalsPage, HomePage1, HomePage2, Layout, Login, Schedule, Signup, Tracker, } from "./pages";
import { Route, Routes } from "react-router-dom"


export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout/>}
      >
        <Route
          path=""
          element={<Tracker/>}
        />
        <Route
          path="/schedule"
          element={<Schedule/>}
        />
      </Route>
      <Route
        path="/demo-1"
        element={<HomePage1 />}
      />
      <Route
        path="/demo-2"
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