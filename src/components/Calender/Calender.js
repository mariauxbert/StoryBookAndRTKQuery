import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

export const Calender = ({ onSaveDate, onCancelDate }) => {
  const [selected, setSelected] = useState('');

  return (
    <View>
      <Calendar
        onTouchCancel={() => alert('nmnm')}
        onDayPress={day => {
          console.log("selected day", day);
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true, }
        }}
      />



      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingHorizontal: 12,
        }}
      >
        <TouchableOpacity
          onPress={() => onSaveDate(selected)}
          style={{
            backgroundColor: "green",
            padding: 8,
            margin: 12,
            alignItems: "center",
            width: "45%",
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              textTransform: "uppercase",
              textAlign: "center",
            }}

          >
            SAVE SELECTED DATE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onCancelDate(null)}
          style={{
            backgroundColor: "red",
            padding: 8,
            margin: 12,
            alignItems: "center",
            width: "45%",
            borderRadius: 8,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            CANCEL
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

