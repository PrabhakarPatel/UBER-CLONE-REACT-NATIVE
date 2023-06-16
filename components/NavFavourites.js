import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
const data = [
  {
    id: 123,
    icon: "home",
    location: "Home",
    destination: "Code Street-India,Delhi",
  },
  {
    id: 456,
    icon: "briefcase",
    location: "Work",
    destination: "kedarnath Uk 24",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View className={["bg-gray-500", { height: 0.5 }]}></View>
      )}
      renderItem={({ item: { icon, destination, location } }) => (
        <TouchableOpacity className="flex-row items-center p-5">
          <Icon
            className="mr-4 rounded-full bg-gray-300 p-3"
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text className="font-semibold text-lg">{location}</Text>
            <Text className="text-gray-500">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
