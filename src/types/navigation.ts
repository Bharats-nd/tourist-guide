export type RootStackParamList = {
  Home: undefined;
  Places: { city: string };
  Details: { city: string; placeName: string; description: string };
};
