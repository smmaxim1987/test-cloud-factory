import React, { useEffect, useRef } from "react";
import { SafeAreaView, View } from "react-native";
import { QuotetsTableTicker } from "features/quotes";
import { useNavigation } from "@react-navigation/native";
import { Button, Loading, Headline, Container, Alert } from "ui";
import { observer } from "mobx-react-lite";
import { tickerStore } from "./model";
import { styles } from "./styles";
import { paths } from "constants/paths";

export const QuotesScreen: React.FC = observer(() => {
  const { items, isLoading, getList, errors } = tickerStore;
  const { navigate } = useNavigation();
  const handleGotoAbout = () => navigate(paths.about() as never);
  const listInterval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    if (items.length > 0 && !listInterval.current) {
      listInterval.current = setInterval(getList, 5000);
    }
    return () => {
      listInterval.current && clearInterval(listInterval.current);
    };
  }, [items]);

  return (
    <SafeAreaView style={styles.root}>
      <Container>
        <View style={styles.head}>
          <Headline title="Котировки" />
        </View>
        <View style={styles.body}>
          {isLoading && items.length === 0 ? (
            <Loading />
          ) : !!errors ? (
            <Alert severity="error">Ошибка: {errors}</Alert>
          ) : (
            <QuotetsTableTicker style={styles.body} items={items} />
          )}
        </View>
        <View style={styles.foot}>
          <Button onPress={handleGotoAbout}>Вернуться</Button>
        </View>
      </Container>
    </SafeAreaView>
  );
});
