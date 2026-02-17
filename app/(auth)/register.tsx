import { SignUpForm } from "@/components/sign-up-form";
import React from "react";
import { StyleSheet, View } from "react-native";

const RegisterScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <SignUpForm />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
