import {
  View,
  Text,
  TextInput,
  Keyboard,
  Button,
  SafeAreaView,
} from "react-native";
import React, {useState} from "react";
import SearchBar from "../Components/SearchBar";
import foods from "../consts/foods";
import DetailsCard from "../Components/DetailsCard";

export default function HomeScreen() {
  const [clicked, setClicked] = useState(false)
  const [searchPhrase, setSearchPhrase] = useState("")
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5">
        {/* Search Bar */}
        <View className='flex flex-row justify-center mt-5 w-50'>
          <SearchBar
            clicked={clicked}
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            setClicked={setClicked}
          />
        </View>

        {/* Filter */}
        {/* <Button></Button> */}

        {/* Details Card */}

          <View className='flex-1 flex h-10 w-10'>
            {foods.map((item)=>(
              DetailsCard({item})
            ))}
          </View>



      </SafeAreaView>
    </View>
  );
}
