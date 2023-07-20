import React from "react";
import { LogBox } from "react-native";
import Routes from "./src/Routes";

LogBox.ignoreAllLogs(true);

export default function App(){
  return(
      <Routes/>
  )
}