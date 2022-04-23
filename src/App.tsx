import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import "./App.css";
import {
  AppShell,
  Box,
  Button,
  Header,
  Navbar,
  TextInput,
  Checkbox,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import MainApp from "./MainApp";
import ReportAvances from "./reportes/avances";
function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
function App() {
  console.log("rendered");
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainApp />}>
          <Route index element={<Navigate replace to={"reports"} />} />
          <Route path="reports">
            {/* on index route, redirect to "avances" */}
            <Route index element={<Navigate replace to={"avances"} />} />
            <Route path="avances" element={<ReportAvances />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
