import React, { useState, memo, lazy } from "react";
import TaskIcon from "@mui/icons-material/Task";
import WarningOutlinedIcon from "@mui/icons-material/WarningOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import { Box, Tab, TableCell, Tabs } from "@mui/material";
import TabPanel from "../tabPannel/TabPannel";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import { a11yProps } from "../../utils";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AllTask from "../allTask";
import Failedtasks from "../failedTask";
import IdleTasks from "../idleTask";
import DoneTasks from "../doneTasks";

const TodoList = () => {
  const theme = useTheme();
  const [swiperValue, setSwiperValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSwiperValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setSwiperValue(index);
  };

  return (
    <div
      className={
        "fixed flex rounded-md flex-col items-center h-1/2  top-[30%] border w-1/2 shadow-lg bg-white box"
      }
    >
      <div className={"w-full p-4 bg-gray-300 overflow-auto min-h-full "}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={swiperValue}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={swiperValue} index={0} dir={theme.direction}>
            <div className={"w-full mb-4"}>
              <span className={"text-3xl font-bold text-gray-600"}>
                All Tasks
              </span>
            </div>
            <TableContainer className={"bg-gray-100 rounded-lg"}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <span className={"font-bold text-gray-800"}>
                        todo detail
                      </span>
                    </TableCell>
                    <TableCell align="center">
                      {" "}
                      <span className={"font-bold text-gray-800"}>number</span>
                    </TableCell>
                    <TableCell align="center">
                      {" "}
                      <span className={"font-bold text-gray-800"}>todo id</span>
                    </TableCell>
                    <TableCell align="center">
                      {" "}
                      <span className={"font-bold text-gray-800"}>
                        todo name
                      </span>
                    </TableCell>
                    <TableCell align="center">
                      {" "}
                      <span className={"font-bold text-gray-800"}>
                        change todoStatus
                      </span>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <AllTask tabPanelIndex={0} />
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel value={swiperValue} index={1} dir={theme.direction}>
            <Failedtasks tabPanelIndex={1} />
          </TabPanel>
          <TabPanel value={swiperValue} index={2} dir={theme.direction}>
            <IdleTasks tabPanelIndex={2} />
          </TabPanel>
          <TabPanel value={swiperValue} index={3} dir={theme.direction}>
            <DoneTasks tabPanelIndex={3} />
          </TabPanel>
        </SwipeableViews>
      </div>
      <Box
        className={
          "flex sticky bottom-0  bg-gray-200 shadow-lg justify-between items-center  w-full"
        }
        sx={{ width: "100%" }}
      >
        <Box sx={{ paddingBottom: 0, borderColor: "divider" }}>
          <Tabs
            style={{ paddingBottom: 0 }}
            value={swiperValue}
            onChange={handleChange}
          >
            <Tab
              icon={
                <AssignmentIcon
                  className={"text-blue-600 hover:cursor-pointer"}
                />
              }
              {...a11yProps(0)}
            />
            <Tab
              icon={
                <WarningOutlinedIcon
                  className={"text-red-700 hover:cursor-pointer"}
                />
              }
              {...a11yProps(1)}
            />
            <Tab
              icon={
                <WorkHistoryOutlinedIcon
                  className={"text-amber-400 hover:cursor-pointer"}
                />
              }
              {...a11yProps(2)}
            />
            <Tab
              icon={
                <TaskIcon className={"text-green-700 hover:cursor-pointer"} />
              }
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
      </Box>
    </div>
  );
};

export default memo(TodoList);
