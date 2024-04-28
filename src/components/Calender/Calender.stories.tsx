import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Calender } from './Calender';
import { action } from "@storybook/addon-actions";
const MyCalenderMeta: Meta<typeof Calender> = {
  title: 'BasicCalender',
  component: Calender,

  argTypes: {
    onCancelDate: { action: "onCancelDate" },
    onSaveDate: { action: "onSaveDate" }


  },

  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyCalenderMeta;

export const Basic: StoryObj<typeof Calender> = {};

