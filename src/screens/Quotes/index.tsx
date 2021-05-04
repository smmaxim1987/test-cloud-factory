import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { QuotetsTableTicker } from "@features";
import { useNavigation } from "@react-navigation/native";
import { Button, Loading, Headline, Container, Alert } from "@shared/ui";
import { observer } from "mobx-react-lite";
import { tickerStore } from "./model";
import { styles } from "./useStyles";

export const QuotesScreen: React.FC = observer(() => {
  const [isInit, setIsInit] = useState<boolean>(false);
  const { items, isLoading, getList, errors } = tickerStore;
  const navigation = useNavigation();
  const handleGotoAbout = () => navigation.navigate("About");

  useEffect(() => {
    getList().finally(() => setIsInit(true));
  }, []);

  useEffect(() => {
    const getListEveryFiveSeconds: NodeJS.Timeout | null =
      Object.values(items).length > 0 ? setInterval(getList, 5000) : null;
    return () => {
      getListEveryFiveSeconds && clearInterval(getListEveryFiveSeconds);
    };
  }, [items]);

  return (
    <SafeAreaView style={styles.root}>
      <Container>
        <View style={styles.head}>
          <Headline title="Котировки" />
        </View>
        <View style={styles.body}>
          {isLoading && !isInit ? (
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
