import AsyncStorage from "@react-native-async-storage/async-storage";
import { DIET_STATS_COLLECTION } from "../storage.config";

export async function deleteDietStats() {
  try {
    await AsyncStorage.removeItem(DIET_STATS_COLLECTION);
  } catch (error) {
    throw error;
  }
}
