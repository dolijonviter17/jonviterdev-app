import { useAuth } from "@/context/auth";
import { Form, Host, HStack, Section, Text, VStack } from "@expo/ui/swift-ui";
import {
  cornerRadius,
  foregroundStyle,
  frame,
} from "@expo/ui/swift-ui/modifiers";
import { Image as ExpoImage } from "expo-image";
import React from "react";
import { Button, StyleSheet } from "react-native";

const HomeScreen = () => {
  const { user, isLoading, signOut } = useAuth();
  console.log("user", user);

  return (
    <Host style={{ flex: 1 }}>
      <Form>
        <Section title="👤 User Profile">
          <HStack spacing={16}>
            <HStack
              modifiers={[frame({ width: 60, height: 60 }), cornerRadius(100)]}
            >
              <ExpoImage
                source={{
                  uri: user?.picture,
                }}
                style={{ width: 80, height: 60 }}
                contentFit="fill"
              />
            </HStack>
            <VStack alignment="leading">
              <Text
                modifiers={[foregroundStyle("#4A90E2")]}
                color="#4A90E2"
                size={22}
                weight="bold"
              >
                {"user.given_name"}
              </Text>
              <Text modifiers={[foregroundStyle("gray")]}>{"ser.name"}</Text>
            </VStack>
          </HStack>
          <Button title="Logout" onPress={() => signOut()} />
        </Section>
      </Form>
    </Host>

    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Text>{JSON.stringify(user)}</Text>
    //   <Button title="Logout" onPress={() => signOut()} />
    // </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
