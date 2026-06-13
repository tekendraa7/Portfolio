import { Image } from "expo-image";
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
import { aboutData, educationData } from "@/data/portfolioData";

export default function AboutScreen() {
  const scheme = useColorScheme();
  const isDark = scheme !== "light";
  const c = isDark ? colors.dark : colors.light;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: c.background }]} edges={["bottom"]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Profile */}
        <View style={[styles.profileCard, { backgroundColor: c.card, borderColor: c.border }]}>
          <Image
            source={{ uri: aboutData.profileImageUrl }}
            style={styles.avatar}
            contentFit="cover"
          />
          <Text style={[styles.name, { color: c.foreground }]}>{aboutData.name}</Text>
          <Text style={[styles.title, { color: c.primary }]}>{aboutData.title}</Text>
          <Text style={[styles.subtitle, { color: c.mutedForeground }]}>{aboutData.subtitle}</Text>
        </View>

        {/* Bio */}
        <View style={[styles.section, { borderColor: c.border }]}>
          <Text style={[styles.sectionTitle, { color: c.foreground }]}>My Story</Text>
          <Text style={[styles.longBio, { color: c.mutedForeground }]}>{aboutData.longBio}</Text>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: c.foreground }]}>Education</Text>
          {educationData.map((edu, idx) => (
            <View key={edu.id} style={styles.eduRow}>
              <View style={styles.eduTimeline}>
                <View
                  style={[
                    styles.eduDot,
                    { backgroundColor: edu.current ? c.primary : c.mutedForeground },
                  ]}
                />
                {idx < educationData.length - 1 && (
                  <View style={[styles.eduLine, { backgroundColor: c.border }]} />
                )}
              </View>
              <View
                style={[
                  styles.eduCard,
                  {
                    backgroundColor: edu.current ? c.muted : c.card,
                    borderColor: edu.current ? c.primary : c.border,
                  },
                ]}
              >
                <Text style={[styles.eduPeriod, { color: edu.current ? c.primary : c.mutedForeground }]}>
                  {edu.period}
                  {edu.current ? "  ·  Current" : ""}
                </Text>
                <Text style={[styles.eduDegree, { color: c.foreground }]}>{edu.degree}</Text>
                <Text style={[styles.eduInstitution, { color: c.mutedForeground }]}>
                  {edu.institution}
                </Text>
                <Text style={[styles.eduLocation, { color: c.mutedForeground }]}>
                  {edu.location}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 20 },
  profileCard: {
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 1,
    padding: 24,
    marginBottom: 16,
  },
  avatar: { width: 88, height: 88, borderRadius: 44, marginBottom: 12 },
  name: { fontSize: 22, fontWeight: "800" },
  title: { fontSize: 13, fontWeight: "700", marginTop: 4 },
  subtitle: { fontSize: 13, marginTop: 4, textAlign: "center" },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "700", marginBottom: 10 },
  longBio: { fontSize: 14, lineHeight: 22 },
  eduRow: { flexDirection: "row", gap: 12, marginBottom: 8 },
  eduTimeline: { width: 20, alignItems: "center" },
  eduDot: { width: 14, height: 14, borderRadius: 7, marginTop: 14 },
  eduLine: { width: 2, flex: 1, marginVertical: 4 },
  eduCard: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 1,
    padding: 14,
  },
  eduPeriod: { fontSize: 11, fontWeight: "700", textTransform: "uppercase", marginBottom: 4 },
  eduDegree: { fontSize: 15, fontWeight: "700", marginBottom: 2 },
  eduInstitution: { fontSize: 13, marginBottom: 1 },
  eduLocation: { fontSize: 12 },
});
