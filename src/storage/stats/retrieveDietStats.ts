import AsyncStorage from "@react-native-async-storage/async-storage";
import { DietStats } from "../../screens/DietStats";
import { DIET_STATS_COLLECTION } from "../storage.config";

export async function retrieveDietStats() {
  try {
    const storedStats = await AsyncStorage.getItem(DIET_STATS_COLLECTION);

    const stats: DietStats = storedStats ? JSON.parse(storedStats) : {};

    return stats;
  } catch (error) {
    throw error;
  }
}
