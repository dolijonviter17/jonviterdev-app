import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

type SetItem = { id: string; done: boolean; reps: number; weight: number };
type Exercise = { name: string; target: string; sets: SetItem[] };

const WORKOUT: Exercise[] = [
  {
    name: "Bench Press",
    target: "4 sets • 8-10 reps",
    sets: [
      { id: "bp1", done: false, reps: 10, weight: 60 },
      { id: "bp2", done: false, reps: 10, weight: 60 },
      { id: "bp3", done: false, reps: 9, weight: 62.5 },
      { id: "bp4", done: false, reps: 8, weight: 62.5 },
    ],
  },
  {
    name: "Tricep Pushdown",
    target: "4 sets • 12 reps",
    sets: [
      { id: "tp1", done: false, reps: 12, weight: 25 },
      { id: "tp2", done: false, reps: 12, weight: 27.5 },
      { id: "tp3", done: false, reps: 12, weight: 27.5 },
      { id: "tp4", done: false, reps: 12, weight: 30 },
    ],
  },
];

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");
  return `${mm}:${ss}`;
}

function Pill({ text }: { text: string }) {
  return (
    <View className="px-3 py-2 rounded-full bg-white/5 border border-white/10">
      <Text className="text-white/70 text-xs font-semibold">{text}</Text>
    </View>
  );
}

export default function WorkoutSessionScreen() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [data, setData] = useState<Exercise[]>(WORKOUT);

  const current = data[exerciseIndex];

  const completed = useMemo(() => {
    const allSets = data.flatMap((e) => e.sets);
    const done = allSets.filter((x) => x.done).length;
    return { done, total: allSets.length };
  }, [data]);

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setSeconds((v) => v + 1), 1000);
    return () => clearInterval(t);
  }, [running]);

  const toggleSet = (setId: string) => {
    setData((prev) =>
      prev.map((ex, exIdx) => {
        if (exIdx !== exerciseIndex) return ex;
        return {
          ...ex,
          sets: ex.sets.map((s) =>
            s.id === setId ? { ...s, done: !s.done } : s,
          ),
        };
      }),
    );
  };

  const nextExercise = () => {
    setExerciseIndex((i) => Math.min(i + 1, data.length - 1));
  };
  const prevExercise = () => {
    setExerciseIndex((i) => Math.max(i - 1, 0));
  };

  return (
    <View className="flex-1 bg-[#0B0F17]">
      <ScrollView
        contentContainerClassName="px-6 pt-14 pb-36"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between mb-6">
          <Pressable
            onPress={() => router.back()}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 items-center justify-center"
          >
            <Ionicons name="chevron-back" size={22} color="white" />
          </Pressable>

          <Text className="text-white text-lg font-semibold">
            Workout Session
          </Text>

          <Pressable
            onPress={() => setRunning((v) => !v)}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 items-center justify-center"
          >
            <Ionicons
              name={running ? "pause" : "play"}
              size={20}
              color="white"
            />
          </Pressable>
        </View>

        {/* Timer + summary */}
        <View className="rounded-3xl overflow-hidden border border-white/10 mb-6">
          <LinearGradient
            colors={["rgba(255,255,255,0.08)", "rgba(0,0,0,0.35)"]}
            style={{ padding: 20 }}
          >
            <Text className="text-[#B7F10A] font-semibold">Elapsed Time</Text>
            <Text className="text-white text-5xl font-extrabold mt-2">
              {formatTime(seconds)}
            </Text>

            <View className="flex-row gap-2 mt-4 flex-wrap">
              <Pill text={`Completed ${completed.done}/${completed.total}`} />
              <Pill text={`Exercise ${exerciseIndex + 1}/${data.length}`} />
              <Pill text="Chest & Triceps" />
            </View>
          </LinearGradient>
        </View>

        {/* Current exercise */}
        <View className="bg-[#141824] border border-white/10 rounded-3xl p-5">
          <Text className="text-white text-xl font-bold">{current.name}</Text>
          <Text className="text-white/55 text-sm mt-1">{current.target}</Text>

          <View className="h-[1px] bg-white/10 my-5" />

          <Text className="text-white/80 font-semibold mb-3">Sets</Text>

          <View className="gap-3">
            {current.sets.map((s, idx) => (
              <Pressable
                key={s.id}
                onPress={() => toggleSet(s.id)}
                className="flex-row items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
              >
                <View className="flex-row items-center gap-3">
                  <View
                    className={[
                      "w-7 h-7 rounded-full border items-center justify-center",
                      s.done
                        ? "bg-[#B7F10A] border-[#B7F10A]"
                        : "bg-transparent border-white/20",
                    ].join(" ")}
                  >
                    {s.done ? (
                      <Ionicons name="checkmark" size={16} color="#0B0F17" />
                    ) : (
                      <Text className="text-white/50 text-xs font-bold">
                        {idx + 1}
                      </Text>
                    )}
                  </View>

                  <View>
                    <Text className="text-white font-semibold">
                      {s.weight} kg
                    </Text>
                    <Text className="text-white/50 text-xs">
                      Target reps: {s.reps}
                    </Text>
                  </View>
                </View>

                <Ionicons
                  name="chevron-forward"
                  size={18}
                  color="rgba(255,255,255,0.35)"
                />
              </Pressable>
            ))}
          </View>

          {/* exercise nav */}
          <View className="flex-row gap-3 mt-5">
            <Pressable
              onPress={prevExercise}
              className="flex-1 rounded-2xl border border-white/10 bg-white/5 py-4 items-center"
            >
              <Text className="text-white font-semibold">Prev</Text>
            </Pressable>
            <Pressable
              onPress={nextExercise}
              className="flex-1 rounded-2xl border border-white/10 bg-white/5 py-4 items-center"
            >
              <Text className="text-white font-semibold">Next</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      {/* Bottom actions */}
      <View className="absolute left-6 right-6 bottom-10">
        <View className="flex-row gap-3">
          <Pressable
            onPress={() => {
              // TODO: open rest timer modal
            }}
            className="flex-1 rounded-2xl border border-white/10 bg-[#141824] py-4 items-center"
          >
            <Text className="text-white font-semibold">Rest Timer</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              // TODO: persist session result
              router.back();
            }}
            className="flex-1"
          >
            <LinearGradient
              colors={["#C9FF22", "#71D100"]}
              style={{
                height: 56,
                borderRadius: 28,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text className="text-[#0B0F17] text-base font-extrabold">
                Finish
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
