import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import { router, Tabs } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";

const PlusTabButton = ({
  onPress,
  accessibilityState,
}: BottomTabBarButtonProps) => {
  return (
    <View className="items-center justify-center -mt-8">
      <Pressable
        onPress={onPress}
        accessibilityState={accessibilityState}
        className="w-20 h-20 rounded-full"
        style={{
          shadowColor: "#B7F10A",
          shadowOpacity: 0.35,
          shadowRadius: 22,
          shadowOffset: { width: 0, height: 10 },
          elevation: 18,
        }}
      >
        <LinearGradient
          colors={["#C9FF22", "#71D100"]}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.9, y: 0.9 }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="add" size={34} color="#0B0F17" />
        </LinearGradient>
      </Pressable>
    </View>
  );
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#B7F10A",
        tabBarInactiveTintColor: "rgba(255,255,255,0.55)",
        tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
        tabBarStyle: {
          position: "absolute",
          left: 16,
          right: 16,
          bottom: 16,
          height: 72,
          paddingBottom: 10,
          paddingTop: 10,
          borderRadius: 32,
          backgroundColor: "rgba(14,17,27,0.95)",
          borderTopWidth: 0,
          // shadow
          shadowColor: "#000",
          shadowOpacity: 0.45,
          shadowRadius: 24,
          shadowOffset: { width: 0, height: 14 },
          elevation: 18,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="workout"
        options={{
          title: "Workout",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dumbbell" size={size} color={color} />
          ),
        }}
      />

      {/* TAB TENGAH: tombol plus */}
      <Tabs.Screen
        name="plus" // route virtual (lihat catatan di bawah)
        options={{
          title: "",
          tabBarIcon: () => null,
          tabBarButton: (props) => <PlusTabButton {...props} />,
        }}
        listeners={{
          tabPress: (e) => {
            // prevent pindah ke screen "plus"
            e.preventDefault();
            // TODO: navigasi ke modal / create screen
            router.push("/create");
          },
        }}
      />

      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

// import { Ionicons } from "@expo/vector-icons";
// import { Tabs } from "expo-router";
// import React from "react";
// import { Platform } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";

// export default function TabLayout() {
//   const insets = useSafeAreaInsets();

//   const bottom = Math.max(insets.bottom, 10);

//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,

//         tabBarActiveTintColor: "#0284c7",
//         tabBarInactiveTintColor: "#94a3b8",

//         tabBarLabelStyle: {
//           fontSize: 12,
//           marginTop: 2,
//         },

//         tabBarStyle: {
//           position: "absolute",
//           left: 16,
//           right: 16,
//           bottom: bottom, // penting: safe area
//           height: 64,
//           paddingTop: 10,
//           paddingBottom: 10,

//           borderRadius: 24,
//           borderTopWidth: 0,

//           backgroundColor: "white",

//           // shadow iOS + elevation Android
//           shadowColor: "#000",
//           shadowOpacity: 0.08,
//           shadowRadius: 12,
//           shadowOffset: { width: 0, height: 6 },
//           elevation: 10,
//         },
//       }}
//     >
//       <Tabs.Screen
//         name="home"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color, focused, size }) => (
//             <Ionicons
//               name={focused ? "home" : "home-outline"}
//               color={color}
//               size={size ?? 24}
//             />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="setting"
//         options={{
//           title: "Setting",
//           tabBarBadge: 9,
//           tabBarBadgeStyle: {
//             backgroundColor: "#ef4444",
//             color: "white",
//             fontSize: 11,
//             minWidth: 18,
//             height: 18,
//             borderRadius: 9,
//             paddingHorizontal: 6,
//             marginTop: Platform.OS === "ios" ? -2 : 0,
//           },
//           tabBarIcon: ({ color, focused, size }) => (
//             <Ionicons
//               name={focused ? "person" : "person-outline"}
//               color={color}
//               size={size ?? 24}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: "Profile",
//           tabBarBadge: 9,
//           tabBarBadgeStyle: {
//             backgroundColor: "#ef4444",
//             color: "white",
//             fontSize: 11,
//             minWidth: 18,
//             height: 18,
//             borderRadius: 9,
//             paddingHorizontal: 6,
//             marginTop: Platform.OS === "ios" ? -2 : 0,
//           },
//           tabBarIcon: ({ color, focused, size }) => (
//             <Ionicons
//               name={focused ? "person" : "person-outline"}
//               color={color}
//               size={size ?? 24}
//             />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
