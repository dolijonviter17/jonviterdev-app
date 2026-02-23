import Button from "@/components/button";
import Container from "@/components/container";
import Input from "@/components/input";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

function QuickAction({
  icon,
  title,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
}) {
  return (
    <Pressable className="flex-1 bg-[#141824] border border-white/10 rounded-2xl p-5 items-center">
      <View className="w-12 h-12 rounded-xl bg-black/30 items-center justify-center mb-3">
        <Ionicons name={icon} size={22} color="#B7F10A" />
      </View>
      <Text className="text-white text-sm font-semibold text-center">
        {title}
      </Text>
    </Pressable>
  );
}

export default function CreateScreen() {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");

  return (
    <Container>
      {/* Header */}
      <View className="flex-row items-center justify-between mb-8">
        <Pressable
          onPress={() => router.back()}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 items-center justify-center"
        >
          <Ionicons name="close" size={22} color="white" />
        </Pressable>

        <Text className="text-white text-lg font-semibold">Create Workout</Text>

        <View className="w-12 h-12" />
      </View>

      {/* Quick Actions */}
      <Text className="text-white text-lg font-semibold mb-4">Quick Start</Text>

      <View className="flex-row gap-4 mb-8">
        <QuickAction icon="flame-outline" title="HIIT Session" />
        <QuickAction icon="barbell-outline" title="Strength Training" />
      </View>

      <View className="flex-row gap-4 mb-8">
        <QuickAction icon="walk-outline" title="Cardio" />
        <QuickAction icon="body-outline" title="Custom Workout" />
      </View>

      {/* Divider */}
      <View className="h-[1px] bg-white/10 my-6" />

      {/* Manual Form */}
      <Text className="text-white text-lg font-semibold mb-4">
        Custom Setup
      </Text>

      <Input
        label="Workout Title"
        value={title}
        onChangeText={setTitle}
        placeholder="e.g. Leg Day"
      />

      <Input
        label="Duration (minutes)"
        value={duration}
        onChangeText={setDuration}
        placeholder="e.g. 45"
      />

      {/* Create Button */}
      <Button title="Create Workout" />
    </Container>
  );
}
