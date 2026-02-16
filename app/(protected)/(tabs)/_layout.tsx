import {
  Badge,
  Icon,
  Label,
  NativeTabs,
} from "expo-router/unstable-native-tabs";
import React from "react";
import { StyleSheet } from "react-native";

const TabsLayout = () => {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf={"house.fill"} drawable="ic_menu_mylocation" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <Label>Profile</Label>
        <Icon
          sf={"gearshape.arrow.trianglehead.2.clockwise.rotate.90"}
          drawable="ic_menu_manage"
        />
        <Badge>+9</Badge>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
