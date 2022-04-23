import {
  Box,
  Center,
  Header,
  List,
  Paper,
  Space,
  Table,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import React from "react";
import {
  ArrowDown,
  ArrowUp,
  CalendarEvent,
  Checklist,
  CheckupList,
  CircleCheck,
  CircleDashed,
  CircleOff,
  DotsCircleHorizontal,
  Messages,
  Minus,
  Urgent,
  User,
} from "tabler-icons-react";
enum Status {
  Pending = "Pending",
  InProgress = "In Progress",
  Done = "Done",
  Cancelled = "Cancelled",
}
enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}
const employees = [
  {
    id: 1,
    name: "Victor Hidalgo",
  },
  {
    id: 2,
    name: "Alexander Gonzalez",
  },
  {
    id: 3,
    name: "Juan Perez",
  },
  {
    id: 4,
    name: "Victor Hidalgo",
  },
];
const generalAdvances = [
  {
    milestones: "Arreglo logica de seleccion de cliente",
    plannedDate: new Date(2020, 8, 1),
    actualDate: new Date(2020, 8, 1),
    comments: "Lorem Ipsum",
    status: Status.Pending,
    assignedTo: employees[0],
    priority: Priority.Low,
  },
  {
    milestones: "cambiar colores para usar los de la empresa",
    plannedDate: new Date(2020, 8, 3),
    actualDate: new Date(2020, 8, 3),
    comments: "Dolor sit amet",
    status: Status.InProgress,
    assignedTo: employees[1],
    priority: Priority.Medium,
  },
  {
    milestones: "Hacer que funcione en todos los dispositivos",
    plannedDate: new Date(2020, 8, 5),
    actualDate: new Date(2020, 8, 5),
    comments: "Dolor sit amet",
    status: Status.Done,
    assignedTo: employees[2],
    priority: Priority.High,
  },
  {
    milestones: "Agregar una seccion de clientes",
    plannedDate: new Date(2020, 8, 5),
    actualDate: new Date(2020, 8, 5),
    comments: "Dolor sit amet",
    status: Status.Cancelled,
    assignedTo: employees[3],
    priority: Priority.Low,
  },
];
const weeklyAdvances = [
  {
    milestone: "Arreglar boton de cerrar sesion",
    comments: "",
    status: Status.Done,
  },
  {
    milestone: "Agregar una seccion de clientes",
    comments: "Se determino que no se necesitaba",
    status: Status.Cancelled,
  },
  {
    milestone: "Arreglo logicas de seleccion de cliente",
    comments: "Se esta analizando el motivo del problema",
    status: Status.InProgress,
  },
];

const ReportAvances = () => {
  return (
    <div>
      <Center>
        <Title>Software Development Activity Report Assesment</Title>
      </Center>

      <Center>
        <Text color="dimmed">
          This slide is 100% editable. Adapt it to your needs and capture your
          audience's attention.
        </Text>
      </Center>

      <Space h="xl" />

      <Box>
        <Title order={5}>Software Development Project XYZ</Title>
        <Table
          sx={{
            "& thead th": {
              color: "white !important",
            },
            "& th, & td": {
              "& > div": {
                display: "flex",
                justifyContent: "space-between",
              },
            },
          }}
          highlightOnHover
          striped
          verticalSpacing={"sm"}
          fontSize="md"
        >
          <thead>
            <tr>
              <th
                style={{
                  backgroundColor: "#df8141",
                }}
              >
                <div>
                  Hito
                  <CalendarEvent />
                </div>
              </th>
              <th
                style={{
                  backgroundColor: "#907669",
                }}
              >
                <div>
                  Fecha planeada
                  <CalendarEvent />
                </div>
              </th>
              <th
                style={{
                  backgroundColor: "#ca4534",
                }}
              >
                <div>
                  Asignado a
                  <User />
                </div>
              </th>

              <th
                style={{
                  backgroundColor: "#33718a",
                }}
              >
                <div>
                  Comentario
                  <Messages />
                </div>
              </th>
              <th
                style={{
                  backgroundColor: "#4a8c8c",
                }}
              >
                <div>
                  Status
                  <CheckupList />
                </div>
              </th>
              <th
                style={{
                  backgroundColor: "#4a8c8c",
                }}
              >
                <div>
                  Prioridad
                  <Urgent />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {generalAdvances.map((advances) => (
              <tr key={advances.milestones}>
                <td>{advances.milestones}</td>
                <td
                  style={{
                    textAlign: "center",
                  }}
                >
                  {advances.plannedDate.toLocaleDateString()}
                </td>
                <td>{advances.assignedTo.name}</td>
                <td>{advances.comments}</td>
                <td>
                  <div>
                    {advances.status}
                    {advances.status === Status.Pending && (
                      <CircleDashed color="gray" />
                    )}
                    {advances.status === Status.InProgress && (
                      <DotsCircleHorizontal />
                    )}
                    {advances.status === Status.Done && (
                      <CircleCheck color="green" />
                    )}
                    {advances.status === Status.Cancelled && (
                      <CircleOff color="red" />
                    )}
                  </div>
                </td>
                <td>
                  <div>
                    {advances.priority}
                    {advances.priority === Priority.Low && (
                      <ThemeIcon>
                        <ArrowDown />
                      </ThemeIcon>
                    )}
                    {advances.priority === Priority.Medium && (
                      <ThemeIcon color="yellow">
                        <Minus />
                      </ThemeIcon>
                    )}
                    {advances.priority === Priority.High && (
                      <ThemeIcon color={"red"}>
                        <ArrowUp />
                      </ThemeIcon>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Box>

      <Space h="xl" />

      <Box>
        <Paper
          sx={(theme) => ({
            backgroundColor: theme.colors.dark[1],
            color: "white",
          })}
          p={4}
        >
          <Title order={5}>Avances de la semana</Title>
        </Paper>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Hito</th>
              <th>Comentario</th>
            </tr>
          </thead>
          <tbody>
            {weeklyAdvances.map((advances) => (
              <tr key={advances.milestone}>
                <td style={{ width: 20 }}>
                  <div>
                    {advances.status === Status.Pending && (
                      <ThemeIcon>
                        {" "}
                        <CircleDashed color="gray" />
                      </ThemeIcon>
                    )}
                    {advances.status === Status.InProgress && (
                      <ThemeIcon color="blue" size={24} radius="xl">
                        <CircleDashed size={16} />
                      </ThemeIcon>
                    )}
                    {advances.status === Status.Done && (
                      <ThemeIcon color="teal" size={24} radius="xl">
                        <CircleCheck size={16} />
                      </ThemeIcon>
                    )}
                    {advances.status === Status.Cancelled && (
                      <CircleOff color="red" />
                    )}
                  </div>
                </td>
                <td>{advances.milestone}</td>
                <td>{advances.comments}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Box>
    </div>
  );
};

export default ReportAvances;
