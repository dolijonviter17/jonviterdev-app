import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ContainerProps {
  btnLogout?: boolean;
  children?: React.ReactNode;
  onPressBack?: () => void;
  isSearch?: boolean | false;
  headerTitle?: string;
}
const DashboardContainer = ({ children, isSearch }: ContainerProps) => {
  const [search, setSearch] = React.useState("");

  return (
    <View className="flex-1 bg-slate-50">
      <StatusBar barStyle="light-content" translucent />

      {/* HEADER - aman notch */}
      <LinearGradient
        colors={["rgba(9,181,211,1)", "rgba(58,131,244,1)"]}
        className="rounded-b-[40px] overflow-hidden"
      >
        <SafeAreaView edges={["top"]} className="px-5 pt-2">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-white/90 text-sm">Welcome back,</Text>
              <Text className="text-white text-3xl font-semibold leading-9">
                Jonviter
              </Text>
            </View>

            <View className="flex-row items-center gap-3">
              <Pressable className="h-10 w-10 items-center justify-center rounded-full bg-white/20 active:bg-white/30">
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color="white"
                />
              </Pressable>

              <View className="h-10 w-10 items-center justify-center rounded-full bg-white/25">
                <Text className="text-white font-semibold">JD</Text>
              </View>
            </View>
          </View>

          {/* Search */}

          {isSearch && (
            <View className="mt-4 flex-row items-center rounded-2xl bg-white/20 px-4 py-3 border border-white/25">
              <Ionicons name="search-outline" size={18} color="white" />

              <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="Search orders, users, reports…"
                placeholderTextColor="rgba(255,255,255,0.7)"
                className="flex-1 ml-2 text-white text-base"
                cursorColor="white"
              />
            </View>
          )}
        </SafeAreaView>
        <View className="h-10" />
      </LinearGradient>
      <View className="-mt-8 h-8 bg-slate-50 rounded-t-[35px]" />

      {/* CONTENT */}
      {children}
    </View>
  );
};

export default DashboardContainer;

const styles = StyleSheet.create({});
