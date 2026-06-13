import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "@/constants/colors";
import { roadmapPhases } from "@/data/portfolioData";

const STATUS_COLORS = {
  completed: { bg: "#1a3a2a", text: "#4ade80", dot: "#4ade80" },
  "in-progress": { bg: "#1c2e10", text: "#a3e635", dot: "#a3e635" },
  upcoming: { bg: "#1c2e42", text: "#8ea5be", dot: "#4a5568" },
};

const STATUS_LABELS = {
  completed: "Completed",
  "in-progress": "In Progress",
  upcoming: "Upcoming",
};

export default function RoadmapScreen() {
  const scheme = useColorScheme();
  const isDark = scheme !== "light";
  const c = isDark ? colors.dark : colors.light;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: c.background }]} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: c.foreground }]}>Roadmap</Text>
          <Text style={[styles.headerSub, { color: c.mutedForeground }]}>
            6-phase cybersecurity learning path
          </Text>
        </View>

        {/* Progress bar */}
        <View style={[styles.progressContainer, { backgroundColor: c.card, borderColor: c.border }]}>
          <View style={styles.progressHeader}>
            <Text style={[styles.progressLabel, { color: c.foreground }]}>Overall Progress</Text>
            <Text style={[styles.progressPct, { color: c.primary }]}>Phase 2 of 6</Text>
          </View>
          <View style={[styles.progressTrack, { backgroundColor: c.muted }]}>
            <View style={[styles.progressFill, { backgroundColor: c.primary, width: "28%" }]} />
          </View>
        </View>

        {/* Phases */}
        <View style={styles.phases}>
          {roadmapPhases.map((phase, index) => {
            const statusStyle = STATUS_COLORS[phase.status];
            const isLast = index === roadmapPhases.length - 1;
            return (
              <View key={phase.id} style={styles.phaseRow}>
                {/* Timeline */}
                <View style={styles.timeline}>
                  <View style={[styles.dot, { backgroundColor: statusStyle.dot }]} />
                  {!isLast && (
                    <View style={[styles.line, { backgroundColor: c.border }]} />
                  )}
                </View>

                {/* Card */}
                <View
                  style={[
                    styles.phaseCard,
                    { backgroundColor: c.card, borderColor: c.border },
                    isLast ? styles.lastCard : null,
                  ]}
                >
                  <View style={styles.phaseCardHeader}>
                    <View style={styles.phaseNumberBadge}>
                      <View style={[styles.phaseNumCircle, { backgroundColor: c.muted }]}>
                        <Text style={[styles.phaseNum, { color: c.primary }]}>{phase.number}</Text>
                      </View>
                      <Text style={[styles.phaseTitle, { color: c.foreground }]}>{phase.title}</Text>
                    </View>
                    <View style={[styles.statusBadge, { backgroundColor: statusStyle.bg }]}>
                      <Text style={[styles.statusText, { color: statusStyle.text }]}>
                        {STATUS_LABELS[phase.status]}
                      </Text>
                    </View>
                  </View>

                  <Text style={[styles.phaseSubtitle, { color: c.mutedForeground }]}>
                    {phase.subtitle}
                  </Text>

                  <View style={styles.topicsRow}>
                    {phase.topics.map((topic) => (
                      <View
                        key={topic}
                        style={[styles.topicChip, { backgroundColor: c.muted }]}
                      >
                        <Ionicons name="checkmark-circle" size={12} color={c.primary} />
                        <Text style={[styles.topicText, { color: c.mutedForeground }]}>{topic}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            );
          })}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { paddingBottom: 20 },
  header: { paddingHorizontal: 16, paddingTop: 20, paddingBottom: 16 },
  headerTitle: { fontSize: 28, fontWeight: "800", letterSpacing: -0.5 },
  headerSub: { fontSize: 14, marginTop: 4 },
  progressContainer: {
    marginHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    marginBottom: 20,
  },
  progressHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  progressLabel: { fontSize: 14, fontWeight: "600" },
  progressPct: { fontSize: 14, fontWeight: "700" },
  progressTrack: { height: 6, borderRadius: 3, overflow: "hidden" },
  progressFill: { height: 6, borderRadius: 3 },
  phases: { paddingHorizontal: 16 },
  phaseRow: { flexDirection: "row", gap: 12 },
  timeline: { width: 20, alignItems: "center" },
  dot: { width: 14, height: 14, borderRadius: 7, marginTop: 14 },
  line: { width: 2, flex: 1, marginVertical: 4 },
  phaseCard: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    marginBottom: 12,
  },
  lastCard: { marginBottom: 0 },
  phaseCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
    gap: 8,
  },
  phaseNumberBadge: { flexDirection: "row", alignItems: "center", gap: 8, flex: 1 },
  phaseNumCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  phaseNum: { fontSize: 13, fontWeight: "800" },
  phaseTitle: { fontSize: 15, fontWeight: "700", flex: 1 },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8, flexShrink: 0 },
  statusText: { fontSize: 11, fontWeight: "700" },
  phaseSubtitle: { fontSize: 12, marginBottom: 10 },
  topicsRow: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  topicChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  topicText: { fontSize: 11 },
});
