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
import { blogPostsData } from "@/data/portfolioData";

export default function BlogScreen() {
  const scheme = useColorScheme();
  const isDark = scheme !== "light";
  const c = isDark ? colors.dark : colors.light;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: c.background }]} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: c.foreground }]}>Blog</Text>
          <Text style={[styles.headerSub, { color: c.mutedForeground }]}>
            Articles, notes &amp; learnings
          </Text>
        </View>

        {/* Posts */}
        <View style={styles.list}>
          {blogPostsData.map((post) => (
            <View
              key={post.id}
              style={[styles.card, { backgroundColor: c.card, borderColor: c.border }]}
            >
              <View style={styles.cardMeta}>
                <View style={styles.metaLeft}>
                  <Ionicons name="calendar-outline" size={12} color={c.mutedForeground} />
                  <Text style={[styles.metaText, { color: c.mutedForeground }]}>{post.date}</Text>
                </View>
                <View style={styles.metaLeft}>
                  <Ionicons name="time-outline" size={12} color={c.mutedForeground} />
                  <Text style={[styles.metaText, { color: c.mutedForeground }]}>{post.readTime}</Text>
                </View>
              </View>

              <Text style={[styles.cardTitle, { color: c.foreground }]}>{post.title}</Text>
              <Text style={[styles.cardExcerpt, { color: c.mutedForeground }]}>{post.excerpt}</Text>

              <View style={styles.tagsRow}>
                {post.tags.map((tag) => (
                  <View
                    key={tag}
                    style={[styles.tag, { backgroundColor: c.muted }]}
                  >
                    <Text style={[styles.tagText, { color: c.primary }]}>{tag}</Text>
                  </View>
                ))}
              </View>
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
  list: { paddingHorizontal: 16, gap: 12 },
  card: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
  },
  cardMeta: { flexDirection: "row", gap: 16, marginBottom: 8 },
  metaLeft: { flexDirection: "row", alignItems: "center", gap: 4 },
  metaText: { fontSize: 12 },
  cardTitle: { fontSize: 16, fontWeight: "700", lineHeight: 22, marginBottom: 6 },
  cardExcerpt: { fontSize: 13, lineHeight: 19, marginBottom: 10 },
  tagsRow: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  tag: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  tagText: { fontSize: 11, fontWeight: "700" },
});
