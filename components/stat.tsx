import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface StatProps {
  value: string;
  label: string;
}

const StatBox = ({ value, label }: StatProps) => {
  return (
    <View className="flex-1 bg-[#141824] border border-white/10 rounded-2xl p-4">
      <Text className="text-[#B7F10A] text-xl font-bold">{value}</Text>
      <Text className="text-white/50 text-xs mt-1">{label}</Text>
    </View>
  );
};

export { StatBox };

const styles = StyleSheet.create({});
