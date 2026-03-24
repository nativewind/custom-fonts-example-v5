import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import "./global.css";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 items-center justify-center gap-4 px-6">
          <Text className="text-2xl font-bold text-gray-900">
            Custom Fonts with Nativewind v5
          </Text>

          <View className="w-full gap-3 mt-4">
            <Text className="font-inter text-lg text-gray-700">
              Inter Regular - The quick brown fox
            </Text>
            <Text className="font-inter-medium text-lg text-gray-700">
              Inter Medium - The quick brown fox
            </Text>
            <Text className="font-inter-semibold text-lg text-gray-700">
              Inter SemiBold - The quick brown fox
            </Text>
            <Text className="font-inter-bold text-lg text-gray-700">
              Inter Bold - The quick brown fox
            </Text>
            <Text className="font-inter-italic text-lg text-gray-700">
              Inter Italic - The quick brown fox
            </Text>
            <Text className="font-inter-bold-italic text-lg text-gray-700">
              Inter Bold Italic - The quick brown fox
            </Text>
          </View>

          <Text className="text-sm text-gray-400 mt-8">
            Each line uses a different font-* className
          </Text>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
