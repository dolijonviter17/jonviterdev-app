import MenuTile from "@/components/menu-tile";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const weekly = [
  { day: "Mon", value: 0.18 },
  { day: "Tue", value: 0.55 },
  { day: "Wed", value: 0.68 },
  { day: "Thu", value: 0.88 },
  { day: "Thu", value: 0.74 }, // (di desain ada 2 label "Thu"; kalau mau ganti "Fri", tinggal ubah)
  { day: "Fri", value: 0.42 },
  { day: "Fri", value: 0.28 },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <View className="mt-6 mb-3">
      <Text className="text-white text-xl font-semibold">{children}</Text>
    </View>
  );
}

function Divider() {
  return <View className="h-[1px] bg-white/10 my-5" />;
}

function SoftCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <View
      className={[
        "rounded-3xl border border-white/10 bg-[#141824] overflow-hidden",
        className,
      ].join(" ")}
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.35,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: 10 },
        elevation: 12,
      }}
    >
      {children}
    </View>
  );
}

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#0B0F17]">
      {/* background vignette glow */}
      <View
        pointerEvents="none"
        className="absolute -top-24 left-0 right-0 h-72"
        style={{
          backgroundColor: "transparent",
          shadowColor: "#000",
        }}
      >
        <LinearGradient
          colors={["rgba(255,255,255,0.06)", "rgba(255,255,255,0)"]}
          start={{ x: 0.1, y: 0.0 }}
          end={{ x: 0.6, y: 1.0 }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <ScrollView
        className="flex-1"
        contentContainerClassName="px-6 pt-8 pb-40"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="flex-row items-start justify-between">
          <View>
            <Text className="text-white text-4xl font-extrabold tracking-tight">
              Hi, Jonathan
            </Text>
            <Text className="text-white/55 text-base mt-2">
              Ready to crush your workout? 💪
            </Text>
          </View>

          <Pressable className="mt-2">
            <View className="w-14 h-14 rounded-full bg-white/5 border border-white/10 items-center justify-center">
              <Ionicons name="notifications-outline" size={26} color="white" />
              {/* dot */}
              <View className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#B7F10A]" />
            </View>
          </Pressable>
        </View>

        {/* Workout card */}
        <View className="mt-8">
          <SoftCard>
            <LinearGradient
              colors={[
                "rgba(255,255,255,0.08)",
                "rgba(255,255,255,0.02)",
                "rgba(0,0,0,0)",
              ]}
              start={{ x: 0.1, y: 0.1 }}
              end={{ x: 0.9, y: 0.9 }}
              style={{ padding: 20 }}
            >
              <View className="flex-row items-center gap-2">
                <Text className="text-lg">🔥</Text>
                <Text className="text-[#B7F10A] font-semibold text-lg">
                  Today’s Workout
                </Text>
              </View>

              <Text className="text-white text-4xl font-extrabold mt-4">
                Chest & Triceps
              </Text>

              <View className="flex-row items-center gap-6 mt-4">
                <View className="flex-row items-center gap-2">
                  <Ionicons
                    name="time-outline"
                    size={18}
                    color="rgba(255,255,255,0.65)"
                  />
                  <Text className="text-white/70 text-base font-semibold">
                    45 mins
                  </Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <Text className="text-base">🔥</Text>
                  <Text className="text-white/70 text-base font-semibold">
                    320 kcal
                  </Text>
                </View>
              </View>

              <Pressable
                className="mt-6"
                onPress={() => router.push("/workout-session.tsx")}
              >
                <LinearGradient
                  colors={["#C9FF22", "#71D100"]}
                  start={{ x: 0.1, y: 0.2 }}
                  end={{ x: 0.9, y: 0.9 }}
                  style={{
                    height: 56,
                    borderRadius: 28,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text className="text-[#0B0F17] text-xl font-extrabold">
                    Start Workout
                  </Text>
                </LinearGradient>
              </Pressable>
            </LinearGradient>
          </SoftCard>
        </View>

        <Divider />

        {/* Weekly progress */}
        <SectionTitle>Your Weekly Progress</SectionTitle>

        <View className="rounded-3xl border border-white/10 bg-[#0E111B] px-5 py-5">
          {/* dashed grid lines */}
          <View className="absolute left-5 right-5 top-6 h-[1px] bg-white/10" />
          <View className="absolute left-5 right-5 top-[52px] h-[1px] bg-white/10" />
          <View className="absolute left-5 right-5 top-[78px] h-[1px] bg-white/10" />

          <View className="flex-row items-end justify-between mt-2">
            {weekly.map((d, idx) => {
              const h = Math.max(8, Math.round(d.value * 110));
              const isBright = idx >= 3; // makin kanan makin bright
              return (
                <View key={idx} className="items-center w-10">
                  <LinearGradient
                    colors={
                      isBright
                        ? ["#C9FF22", "#71D100"]
                        : ["rgba(183,241,10,0.55)", "rgba(113,209,0,0.35)"]
                    }
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={{
                      width: 20,
                      height: h,
                      borderRadius: 6,
                      marginBottom: 10,
                    }}
                  />
                  <Text className="text-white/45 text-xs font-semibold">
                    {d.day}
                  </Text>
                </View>
              );
            })}
          </View>

          <View className="h-[2px] bg-white/10 mt-3" />
        </View>

        <Divider />

        {/* 4 menu tiles */}
        <View className="flex-row gap-4">
          <MenuTile
            title="Workout Plan"
            icon={<Ionicons name="calendar" size={22} color="#B7F10A" />}
          />
          <MenuTile
            title="Progress"
            icon={<Ionicons name="bar-chart" size={22} color="#B7F10A" />}
          />
        </View>

        <View className="flex-row gap-4 mt-4">
          <MenuTile
            title="Diet Plan"
            icon={<Ionicons name="nutrition" size={22} color="#B7F10A" />}
          />
          <MenuTile
            title="Find Trainer"
            icon={<Ionicons name="person" size={22} color="#B7F10A" />}
          />
        </View>
      </ScrollView>

      {/* <BottomTab /> */}
    </SafeAreaView>
  );
}
