import Button from "@/components/button";
import Container from "@/components/container";
import Input from "@/components/input";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function EditProfileScreen() {
  const [name, setName] = useState("Jonathan Doe");
  const [email, setEmail] = useState("jonathan@email.com");
  const [height, setHeight] = useState("175");
  const [weight, setWeight] = useState("72");

  return (
    <Container>
      {/* Header */}
      <View className="flex-row items-center justify-between mb-8">
        <Pressable
          onPress={() => router.back()}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 items-center justify-center"
        >
          <Ionicons name="chevron-back" size={22} color="white" />
        </Pressable>

        <Text className="text-white text-lg font-semibold">Edit Profile</Text>

        <View className="w-12 h-12" />
      </View>

      {/* Avatar placeholder */}
      <View className="items-center mb-8">
        <LinearGradient
          colors={["#C9FF22", "#71D100"]}
          style={{
            width: 96,
            height: 96,
            borderRadius: 48,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View className="w-[88px] h-[88px] rounded-full bg-[#141824] border border-white/10 items-center justify-center">
            <Ionicons name="person" size={34} color="#B7F10A" />
          </View>
        </LinearGradient>

        <Pressable className="mt-4">
          <Text className="text-[#B7F10A] font-semibold">Change Photo</Text>
        </Pressable>
      </View>

      {/* Form */}
      <Input
        label="Full Name"
        value={name}
        onChangeText={setName}
        placeholder="Your name"
      />
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Your email"
      />

      <View className="flex-row gap-4">
        <View className="flex-1">
          <Input
            label="Height (cm)"
            value={height}
            onChangeText={setHeight}
            placeholder="e.g. 175"
          />
        </View>
        <View className="flex-1">
          <Input
            label="Weight (kg)"
            value={weight}
            onChangeText={setWeight}
            placeholder="e.g. 72"
          />
        </View>
      </View>

      {/* Save button */}
      <Button
        title="Save Changes"
        onPress={() => {
          // TODO: simpan ke state management / backend
          router.back();
        }}
        className="mt-3"
      />

      <Text className="text-white/40 text-xs text-center mt-4">
        Changes will be applied to your profile
      </Text>
    </Container>
  );
}
