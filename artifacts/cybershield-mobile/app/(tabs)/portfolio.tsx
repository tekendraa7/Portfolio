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
import { projectsData, techSkills } from "@/data/portfolioData";

export default function PortfolioScreen() {
  const scheme = useColorScheme();
  const isDark = scheme !== "light";
  const c = isDark ? colors.dark : colors.light;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: c.background }]} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: c.foreground }]}>Portfolio</Text>
          <Text style={[styles.headerSub, { color: c.mutedForeground }]}>
            Skills, tools &amp; projects
          </Text>
        </View>

        {/* Skills */}
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionLabel, { color: c.foreground }]}>Technical Skills</Text>
          <View style={styles.skillsGrid}>
            {techSkills.map((skill) => (
              <View
                key={skill.name}
                style={[styles.skillChip, { backgroundColor: c.muted, borderColor: c.border }]}
              >
                <Ionicons
                  name={skill.icon as keyof typeof Ionicons.glyphMap}
                  size={14}
                  color={c.primary}
                />
                <Text style={[styles.skillName, { color: c.foreground }]}>{skill.name}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Projects */}
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionLabel, { color: c.foreground }]}>Projects</Text>
          {projectsData.map((project) => (
            <View
              key={project.id}
              style={[styles.projectCard, { backgroundColor: c.card, borderColor: c.border }]}
            >
              <Text style={[styles.projectTitle, { color: c.foreground }]}>{project.title}</Text>
              <Text style={[styles.projectDesc, { color: c.mutedForeground }]}>
                {project.description}
              </Text>
              <View style={styles.techRow}>
                {project.technologies.map((tech) => (
                  <View
                    key={tech}
                    style={[styles.techBadge, { backgroundColor: c.secondary }]}
                  >
                    <Text style={[styles.techText, { color: c.secondaryForeground }]}>{tech}</Text>
                  </View>
                ))}
              </View>
              {project.repoUrl ? (
                <View style={styles.repoRow}>
                  <Ionicons name="logo-github" size={14} color={c.mutedForeground} />
                  <Text style={[styles.repoText, { color: c.mutedForeground }]} numberOfLines={1}>
                    {project.repoUrl.replace("https://github.com/", "")}
                  </Text>
                </View>
              ) : null}
            </View>
          ))}
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
  sectionContainer: { paddingHorizontal: 16, marginBottom: 24 },
  sectionLabel: { fontSize: 17, fontWeight: "700", marginBottom: 12 },
  skillsGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  skillChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
  },
  skillName: { fontSize: 13, fontWeight: "500" },
  projectCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    marginBottom: 12,
  },
  projectTitle: { fontSize: 16, fontWeight: "700", marginBottom: 6 },
  projectDesc: { fontSize: 13, lineHeight: 19, marginBottom: 10 },
  techRow: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginBottom: 8 },
  techBadge: { paddingHorizontal: 9, paddingVertical: 3, borderRadius: 6 },
  techText: { fontSize: 11, fontWeight: "600" },
  repoRow: { flexDirection: "row", alignItems: "center", gap: 5, marginTop: 2 },
  repoText: { fontSize: 12, flex: 1 },
});
