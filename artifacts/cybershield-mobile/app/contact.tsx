import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import React from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "@/constants/colors";
import { aboutData } from "@/data/portfolioData";

type ContactItem = {
  icon: string;
  label: string;
  value: string;
  url: string;
};

const contactItems: ContactItem[] = [
  {
    icon: "mail-outline",
    label: "Email",
    value: aboutData.email,
    url: `mailto:${aboutData.email}`,
  },
  {
    icon: "call-outline",
    label: "Phone",
    value: aboutData.phone,
    url: `tel:${aboutData.phone}`,
  },
  {
    icon: "logo-github",
    label: "GitHub",
    value: "github.com/tekendraa7",
    url: aboutData.github,
  },
  {
    icon: "logo-linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/tekendraa7",
    url: aboutData.linkedin,
  },
];

export default function ContactScreen() {
  const scheme = useColorScheme();
  const isDark = scheme !== "light";
  const c = isDark ? colors.dark : colors.light;

  const handlePress = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Cannot open link", url);
    }
  };

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: c.background }]} edges={["bottom"]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Intro */}
        <View style={[styles.introCard, { backgroundColor: c.card, borderColor: c.border }]}>
          <Text style={[styles.introTitle, { color: c.foreground }]}>
            Open to Connections
          </Text>
          <Text style={[styles.introText, { color: c.mutedForeground }]}>
            Whether you want to collaborate on a project, discuss cybersecurity, or just say hello — reach out through any of the channels below.
          </Text>
        </View>

        {/* Contact items */}
        <View style={styles.list}>
          {contactItems.map((item) => (
            <Pressable
              key={item.label}
              style={({ pressed }) => [
                styles.contactCard,
                { backgroundColor: pressed ? c.muted : c.card, borderColor: c.border },
              ]}
              onPress={() => handlePress(item.url)}
            >
              <View style={[styles.iconBox, { backgroundColor: c.muted }]}>
                <Ionicons
                  name={item.icon as keyof typeof Ionicons.glyphMap}
                  size={22}
                  color={c.primary}
                />
              </View>
              <View style={styles.contactBody}>
                <Text style={[styles.contactLabel, { color: c.mutedForeground }]}>{item.label}</Text>
                <Text style={[styles.contactValue, { color: c.foreground }]}>{item.value}</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color={c.mutedForeground} />
            </Pressable>
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
  introCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
    marginBottom: 20,
  },
  introTitle: { fontSize: 18, fontWeight: "700", marginBottom: 8 },
  introText: { fontSize: 14, lineHeight: 21 },
  list: { gap: 10 },
  contactCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    gap: 14,
  },
  iconBox: {
    width: 46,
    height: 46,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  contactBody: { flex: 1 },
  contactLabel: { fontSize: 11, fontWeight: "600", textTransform: "uppercase", letterSpacing: 0.5 },
  contactValue: { fontSize: 14, fontWeight: "500", marginTop: 2 },
});
