import { useAuth } from "@/context/auth";
import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen = () => {
  const { user, isLoading, signIn } = useAuth();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [secure, setSecure] = React.useState(true);
  const [email, setEmail] = React.useState("");

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  // if (!user) {
  //   return <LoginForm />;
  // }
  return (
    <View className="flex-1 bg-[#4F8FCC]">
      {/* ===== HEADER ===== */}
      <View className="flex-1 items-center justify-center px-6 pt-16">
        {/* Logo */}
        <View className="bg-white/20 p-4 rounded-2xl mb-6">
          <Feather name="hexagon" size={40} color="white" />
        </View>

        <Text className="text-white text-3xl font-bold mb-2">
          Welcome back!
        </Text>

        <Text className="text-white/80 text-center text-base">
          You've been missed,{"\n"}
          Please sign in your account
        </Text>

        {/* Illustration */}
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          }}
          className="w-60 h-60 mt-8"
          resizeMode="contain"
        />
      </View>

      {/* ===== FORM CARD ===== */}
      <View className="bg-white rounded-t-3xl px-6 pt-8 pb-12 mx-1 ">
        {/* Email */}
        <Text className="text-gray-500 mb-2">Email</Text>
        <View className="flex-row items-center border border-blue-400 rounded-xl px-4 py-3 mb-6">
          <Feather name="mail" size={20} color="#9CA3AF" />
          <TextInput
            placeholder="jonviter17@gmail.com"
            value={email}
            onChangeText={setEmail}
            className="flex-1 ml-3 text-gray-800"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Password */}
        <Text className="text-gray-500 mb-2">Password</Text>
        <View className="flex-row items-center border border-blue-400 rounded-xl px-4 py-3 mb-8">
          <Feather name="lock" size={20} color="#9CA3AF" />

          <TextInput
            placeholder="••••••••"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secure}
            className="flex-1 ml-3 text-gray-800"
            placeholderTextColor="#9CA3AF"
          />

          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Feather
              name={secure ? "eye-off" : "eye"}
              size={20}
              color="#4F8FCC"
            />
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity className="bg-primary py-4 rounded-xl items-center mb-6">
          <Text className="text-white font-semibold text-lg">Login</Text>
        </TouchableOpacity>

        {/* Register */}
        <TouchableOpacity className="items-center">
          <Text className="text-blue-600 font-medium">Register ?</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center mb-4">
          <View className="flex-1 h-[1px] bg-gray-300" />
          <Text className="mx-3 text-gray-400">OR</Text>
          <View className="flex-1 h-[1px] bg-gray-300" />
        </View>

        {/* Google Login Button */}
        <TouchableOpacity
          // disabled={!request}
          onPress={() => signIn()}
          className="flex-row items-center justify-center border border-gray-300 py-4 rounded-xl mb-6"
        >
          <AntDesign name="google" size={20} color="#DB4437" />
          <Text className="ml-3 text-gray-700 font-medium text-base">
            Continue with Google
          </Text>
        </TouchableOpacity>

        {/* Register */}
        <TouchableOpacity className="items-center">
          <Text className="text-blue-600 font-medium">Register ?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
