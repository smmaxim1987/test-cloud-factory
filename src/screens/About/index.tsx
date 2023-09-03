import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Headline, Container } from "ui";
import { styles } from "./styles";

export const AboutScreen: React.FC = () => {
  const navigation = useNavigation();
  const handleGotoQuotes = () => navigation.navigate("Quotes");

  return (
    <SafeAreaView style={styles.root}>
      <Container>
        <Headline title="О приложение" />
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            Тестовое задание для RN-разработчика.
          </Text>
          <Text style={styles.descriptionText}>Приложение "Котировки"</Text>
        </View>
        <Button onPress={handleGotoQuotes}>Перейти к котировкам</Button>
      </Container>
    </SafeAreaView>
  );
};
