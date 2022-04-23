import React from "react";
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
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
import { useScreenshot } from "./hooks/use-react-screenshot";
import { downloadBase64File } from "./utils";
function Child() {
  console.log("rendered2");

  return (
    <div>
      <h1>Child</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        consectetur, nisl eget congue consectetur, nunc nisl aliquet purus, eget
        tincidunt nisl nisl euismod erat.
      </p>
    </div>
  );
}
function MainApp() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [image, takeScreenshot] = useScreenshot({
    type: "image/png",
  });
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <AppShell
      padding={"lg"}
      navbar={
        <Navbar
          hiddenBreakpoint={"xl"}
          width={{ base: 300 }}
          hidden={true}
          height={500}
          p="xs"
        >
          {/* First section with normal height (depends on section content) */}
          <Navbar.Section>First section</Navbar.Section>

          {/* Grow section will take all available space that is not taken by first and last sections */}
          <Navbar.Section grow>Grow section</Navbar.Section>

          {/* Last section with normal height (depends on section content) */}
          <Navbar.Section>Last section</Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <h1>Company Name</h1>
        </Header>
      }
    >
      <Box>
        <Box ref={ref}>
          <Outlet />
        </Box>
        <Button
          onClick={async () => {
            let image = await takeScreenshot(ref.current!);
            if (image) downloadBase64File(image, "test.png");
          }}
        >
          Take Screenshot
        </Button>
      </Box>
    </AppShell>
  );
}

export default MainApp;
