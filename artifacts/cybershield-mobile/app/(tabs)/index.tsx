import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "@/constants/colors";
import { aboutData, projectsData, techSkills } from "@/data/portfolioData";

export default function HomeScreen() {
  const scheme = useColorScheme();
  const isDark = scheme !== "light";
  const c = isDark ? colors.dark : colors.light;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: c.background }]} edges={["top"]}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero */}
        <LinearGradient
          colors={isDark ? ["#0d1b33", c.background] : ["#ddeeff", c.background]}
          style={styles.hero}
        >
          <Image
            source={{ uri: aboutData.profileImageUrl }}
            style={styles.avatar}
            contentFit="cover"
          />
          <Text style={[styles.name, { color: c.foreground }]}>{aboutData.name}</Text>
          <Text style={[styles.titleText, { color: c.primary }]}>{aboutData.title}</Text>
          <Text style={[styles.subtitle, { color: c.mutedForeground }]}>{aboutData.subtitle}</Text>
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={14} color={c.mutedForeground} />
            <Text style={[styles.locationText, { color: c.mutedForeground }]}>
              {aboutData.location}
            </Text>
          </View>
        </LinearGradient>

        {/* Quick stats */}
        <View style={[styles.statsRow, { backgroundColor: c.card, borderColor: c.border }]}>
          <View style={styles.statItem}>
            <Text style={[styles.statNum, { color: c.primary }]}>{techSkills.length}</Text>
            <Text style={[styles.statLabel, { color: c.mutedForeground }]}>Skills</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: c.border }]} />
          <View style={styles.statItem}>
            <Text style={[styles.statNum, { color: c.primary }]}>{projectsData.length}</Text>
            <Text style={[styles.statLabel, { color: c.mutedForeground }]}>Projects</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: c.border }]} />
          <View style={styles.statItem}>
            <Text style={[styles.statNum, { color: c.primary }]}>3rd</Text>
            <Text style={[styles.statLabel, { color: c.mutedForeground }]}>Year</Text>
          </View>
        </View>

        {/* Bio */}
        <View style={[styles.section, { backgroundColor: c.card, borderColor: c.border }]}>
          <Text style={[styles.sectionTitle, { color: c.foreground }]}>About Me</Text>
          <Text style={[styles.bio, { color: c.mutedForeground }]}>{aboutData.bio}</Text>
          <Pressable
            style={[styles.linkBtn, { borderColor: c.primary }]}
            onPress={() => router.push("/about")}
          >
            <Text style={[styles.linkBtnText, { color: c.primary }]}>Read more</Text>
            <Ionicons name="arrow-forward" size={14} color={c.primary} />
          </Pressable>
        </View>

        {/* Nav cards */}
        <Text style={[styles.navHeader, { color: c.foreground }]}>Explore</Text>

        <View style={styles.navGrid}>
          <Pressable
            style={[styles.navCard, { backgroundColor: c.card, borderColor: c.border }]}
            onPress={() => router.push("/(tabs)/portfolio")}
          >
            <View style={[styles.navIcon, { backgroundColor: c.muted }]}>
              <Ionicons name="briefcase" size={22} color={c.primary} />
            </View>
            <Text style={[styles.navCardTitle, { color: c.foreground }]}>Portfolio</Text>
            <Text style={[styles.navCardSub, { color: c.mutedForeground }]}>Skills &amp; projects</Text>
          </Pressable>

          <Pressable
            style={[styles.navCard, { backgroundColor: c.card, borderColor: c.border }]}
            onPress={() => router.push("/(tabs)/blog")}
          >
            <View style={[styles.navIcon, { backgroundColor: c.muted }]}>
              <Ionicons name="document-text" size={22} color={c.primary} />
            </View>
            <Text style={[styles.navCardTitle, { color: c.foreground }]}>Blog</Text>
            <Text style={[styles.navCardSub, { color: c.mutedForeground }]}>Articles &amp; notes</Text>
          </Pressable>

          <Pressable
            style={[styles.navCard, { backgroundColor: c.card, borderColor: c.border }]}
            onPress={() => router.push("/(tabs)/roadmap")}
          >
            <View style={[styles.navIcon, { backgroundColor: c.muted }]}>
              <Ionicons name="map" size={22} color={c.primary} />
            </View>
            <Text style={[styles.navCardTitle, { color: c.foreground }]}>Roadmap</Text>
            <Text style={[styles.navCardSub, { color: c.mutedForeground }]}>Learning path</Text>
          </Pressable>

          <Pressable
            style={[styles.navCard, { backgroundColor: c.card, borderColor: c.border }]}
            onPress={() => router.push("/certificates")}
          >
            <View style={[styles.navIcon, { backgroundColor: c.muted }]}>
              <Ionicons name="ribbon" size={22} color={c.primary} />
            </View>
            <Text style={[styles.navCardTitle, { color: c.foreground }]}>Certificates</Text>
            <Text style={[styles.navCardSub, { color: c.mutedForeground }]}>Achievements</Text>
          </Pressable>
        </View>

        {/* Connect */}
        <View style={[styles.connectRow]}>
          <Pressable
            style={[styles.connectBtn, { backgroundColor: c.primary }]}
            onPress={() => router.push("/contact")}
          >
            <Ionicons name="mail" size={16} color="#fff" />
            <Text style={styles.connectBtnText}>Contact Me</Text>
          </Pressable>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { paddingBottom: 20 },
  hero: {
    alignItems: "center",
    paddingTop: 32,
    paddingBottom: 28,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 14,
  },
  name: { fontSize: 24, fontWeight: "800", letterSpacing: -0.5, textAlign: "center" },
  titleText: { fontSize: 14, fontWeight: "700", marginTop: 4, textAlign: "center" },
  subtitle: { fontSize: 13, marginTop: 4, textAlign: "center" },
  locationRow: { flexDirection: "row", alignItems: "center", marginTop: 6, gap: 4 },
  locationText: { fontSize: 12 },
  statsRow: {
    flexDirection: "row",
    marginHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
    paddingVertical: 16,
    marginBottom: 12,
  },
  statItem: { flex: 1, alignItems: "center" },
  statNum: { fontSize: 22, fontWeight: "800" },
  statLabel: { fontSize: 11, marginTop: 2 },
  statDivider: { width: 1 },
  section: {
    marginHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle: { fontSize: 17, fontWeight: "700", marginBottom: 8 },
  bio: { fontSize: 14, lineHeight: 21 },
  linkBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 12,
    alignSelf: "flex-start",
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  linkBtnText: { fontSize: 13, fontWeight: "600" },
  navHeader: { fontSize: 17, fontWeight: "700", marginHorizontal: 16, marginBottom: 10 },
  navGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 12,
    gap: 8,
    marginBottom: 20,
  },
  navCard: {
    width: "47%",
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
  },
  navIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  navCardTitle: { fontSize: 15, fontWeight: "700" },
  navCardSub: { fontSize: 12, marginTop: 2 },
  connectRow: { paddingHorizontal: 16 },
  connectBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 12,
    paddingVertical: 14,
  },
  connectBtnText: { color: "#fff", fontSize: 15, fontWeight: "700" },
});
