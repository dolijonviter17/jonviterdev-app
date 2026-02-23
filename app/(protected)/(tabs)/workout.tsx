import Container from "@/components/container";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, Text, View } from "react-native";

const exercises = [
  { name: "Bench Press", sets: "4 sets", reps: "8-10 reps" },
  { name: "Incline Dumbbell Press", sets: "3 sets", reps: "10 reps" },
  { name: "Tricep Pushdown", sets: "4 sets", reps: "12 reps" },
  { name: "Overhead Extension", sets: "3 sets", reps: "10 reps" },
];

function ExerciseCard({
  name,
  sets,
  reps,
}: {
  name: string;
  sets: string;
  reps: string;
}) {
  return (
    <View className="bg-[#141824] border border-white/10 rounded-2xl p-4 mb-4">
      <Text className="text-white text-base font-semibold">{name}</Text>

      <View className="flex-row justify-between mt-3">
        <Text className="text-white/60 text-sm">{sets}</Text>
        <Text className="text-white/60 text-sm">{reps}</Text>
      </View>
    </View>
  );
}

export default function WorkoutScreen() {
  return (
    <Container>
      {/* Header */}
      <View className="flex-row items-center justify-between mb-6">
        <Text className="text-white text-2xl font-bold">Chest & Triceps</Text>

        <View className="w-12 h-12 rounded-full bg-white/5 border border-white/10 items-center justify-center">
          <Ionicons name="ellipsis-horizontal" size={20} color="white" />
        </View>
      </View>

      {/* Summary Card */}
      <View className="rounded-3xl overflow-hidden border border-white/10 mb-6">
        <LinearGradient
          colors={["rgba(255,255,255,0.08)", "rgba(0,0,0,0.3)"]}
          style={{ padding: 20 }}
        >
          <View className="flex-row justify-between mb-4">
            <View>
              <Text className="text-[#B7F10A] font-semibold">
                Total Duration
              </Text>
              <Text className="text-white text-xl font-bold mt-1">45 mins</Text>
            </View>

            <View>
              <Text className="text-[#B7F10A] font-semibold">
                Calories Burn
              </Text>
              <Text className="text-white text-xl font-bold mt-1">
                320 kcal
              </Text>
            </View>
          </View>

          {/* Progress bar */}
          <View className="mt-2">
            <View className="h-3 bg-white/10 rounded-full overflow-hidden">
              <View
                className="h-3 rounded-full"
                style={{
                  width: "35%",
                  backgroundColor: "#B7F10A",
                }}
              />
            </View>
            <Text className="text-white/50 text-xs mt-2">35% Completed</Text>
          </View>
        </LinearGradient>
      </View>

      {/* Exercise List */}
      <Text className="text-white text-lg font-semibold mb-4">Exercises</Text>

      {exercises.map((item, index) => (
        <ExerciseCard
          key={index}
          name={item.name}
          sets={item.sets}
          reps={item.reps}
        />
      ))}

      {/* Bottom Action Button */}
      <View className="absolute left-6 right-6 bottom-10">
        <Pressable>
          <LinearGradient
            colors={["#C9FF22", "#71D100"]}
            style={{
              height: 60,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text className="text-[#0B0F17] text-lg font-bold">
              Start Workout
            </Text>
          </LinearGradient>
        </Pressable>
      </View>
    </Container>
  );
}
