import { useAuth } from "@/context/auth";
import { Form, Host, HStack, Section } from "@expo/ui/swift-ui";
import { cornerRadius, frame } from "@expo/ui/swift-ui/modifiers";
import { Image as ExpoImage } from "expo-image";
import React from "react";
import { StyleSheet } from "react-native";

const HomeScreen = () => {
  const { user, isLoading, signOut } = useAuth();

  return (
    <Host style={{ flex: 1 }}>
      <Form>
        <Section title="User Profile">
          <HStack
            modifiers={[frame({ width: 80, height: 60 }), cornerRadius(100)]}
          >
            <ExpoImage
              source={{
                uri: "https://lh3.googleusercontent.com/a/ACg8ocLuKu53BbOs_eLWAucSIX9lWRrdk0lB-jGULhOtvViUqMQ16rG0=s96-c",
              }}
              style={{ width: 80, height: 60 }}
              contentFit="fill"
            />
          </HStack>
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
