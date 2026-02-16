import LoginForm from "@/components/LoginForm";
import { useAuth } from "@/context/auth";
import React from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";

const LoginScreen = () => {
  const { user, isLoading, signOut } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!user) {
    return <LoginForm />;
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{JSON.stringify(user)}</Text>
      <Button title="Logout" onPress={() => signOut()} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
