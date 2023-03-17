import { Meal } from "../src/screens/Home";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      "new-edit-meal": undefined;
      "new-meal-created": {
        type: "POSITIVE" | "NEGATIVE";
      };
      meal: {
        meal: Meal;
      };
      stats: undefined;
      "edit-meal": {
        id: string;
      };
    }
  }
}
