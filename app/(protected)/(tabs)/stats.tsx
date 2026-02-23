import Container from "@/components/container";
import { StatBox } from "@/components/stat";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, Text, View } from "react-native";

const weeklyData = [40, 65, 90, 70, 55, 80, 50];

export default function StatsScreen() {
  return (
    <Container>
      {/* Header */}
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-white text-2xl font-bold">Your Stats</Text>

        <Pressable className="px-4 py-2 rounded-full bg-[#141824] border border-white/10">
          <Text className="text-white/70 text-sm">Weekly</Text>
        </Pressable>
      </View>

      {/* Calories Summary Card */}
      <View className="rounded-3xl overflow-hidden border border-white/10 mb-8">
        <LinearGradient
          colors={["rgba(255,255,255,0.08)", "rgba(0,0,0,0.3)"]}
          style={{ padding: 24 }}
        >
          <Text className="text-[#B7F10A] font-semibold">Calories Burned</Text>

          <Text className="text-white text-4xl font-extrabold mt-3">
            2,430 kcal
          </Text>

          <Text className="text-white/50 text-sm mt-2">
            +12% from last week
          </Text>
        </LinearGradient>
      </View>

      {/* Activity Chart */}
      <Text className="text-white text-lg font-semibold mb-4">Activity</Text>

      <View className="bg-[#141824] border border-white/10 rounded-3xl px-5 py-6 mb-8">
        <View className="flex-row items-end justify-between">
          {weeklyData.map((value, index) => {
            const height = value + 20;
            return (
              <View key={index} className="items-center">
                <View
                  style={{
                    height,
                    width: 18,
                    borderRadius: 8,
                    backgroundColor:
                      index >= 4 ? "#B7F10A" : "rgba(183,241,10,0.5)",
                    marginBottom: 8,
                  }}
                />
                <Text className="text-white/40 text-xs">
                  {["M", "T", "W", "T", "F", "S", "S"][index]}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      {/* Stats Grid */}
      <Text className="text-white text-lg font-semibold mb-4">Performance</Text>

      <View className="flex-row gap-4 mb-4">
        <StatBox label="Workouts" value="18" />
        <StatBox label="Hours" value="14h" />
      </View>

      <View className="flex-row gap-4">
        <StatBox label="Personal Best" value="110kg" />
        <StatBox label="Streak" value="6 days" />
      </View>
    </Container>
  );
}
