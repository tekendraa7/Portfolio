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
import { certificatesData } from "@/data/portfolioData";

export default function CertificatesScreen() {
  const scheme = useColorScheme();
  const isDark = scheme !== "light";
  const c = isDark ? colors.dark : colors.light;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: c.background }]} edges={["bottom"]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <Text style={[styles.intro, { color: c.mutedForeground }]}>
          Certifications and achievements earned along the cybersecurity journey.
        </Text>

        <View style={styles.list}>
          {certificatesData.map((cert) => (
            <View
              key={cert.id}
              style={[styles.card, { backgroundColor: c.card, borderColor: c.border }]}
            >
              <View style={styles.cardLeft}>
                <View style={[styles.iconBox, { backgroundColor: c.muted }]}>
                  <Ionicons name="ribbon" size={22} color={c.primary} />
                </View>
              </View>
              <View style={styles.cardBody}>
                <Text style={[styles.certTitle, { color: c.foreground }]}>{cert.title}</Text>
                <Text style={[styles.certIssuer, { color: c.mutedForeground }]}>{cert.issuer}</Text>
                <View style={styles.certMeta}>
                  <View style={styles.metaItem}>
                    <Ionicons name="calendar-outline" size={12} color={c.mutedForeground} />
                    <Text style={[styles.metaText, { color: c.mutedForeground }]}>{cert.date}</Text>
                  </View>
                  {cert.credentialId ? (
                    <View style={styles.metaItem}>
                      <Ionicons name="key-outline" size={12} color={c.mutedForeground} />
                      <Text style={[styles.metaText, { color: c.mutedForeground }]}>
                        #{cert.credentialId}
                      </Text>
                    </View>
                  ) : (
                    <View style={[styles.inProgressBadge, { backgroundColor: c.muted }]}>
                      <Text style={[styles.inProgressText, { color: c.primary }]}>In progress</Text>
                    </View>
                  )}
                </View>
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
  intro: { fontSize: 14, lineHeight: 20, marginBottom: 16 },
  list: { gap: 12 },
  card: {
    flexDirection: "row",
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    gap: 12,
    alignItems: "flex-start",
  },
  cardLeft: {},
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  cardBody: { flex: 1 },
  certTitle: { fontSize: 15, fontWeight: "700", marginBottom: 3 },
  certIssuer: { fontSize: 13, marginBottom: 8 },
  certMeta: { flexDirection: "row", gap: 12, flexWrap: "wrap" },
  metaItem: { flexDirection: "row", alignItems: "center", gap: 4 },
  metaText: { fontSize: 12 },
  inProgressBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 },
  inProgressText: { fontSize: 11, fontWeight: "700" },
});
