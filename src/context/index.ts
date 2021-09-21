import React from 'react';
import { Story } from '../types';

export const DataContext = React.createContext<{
  data: Story[] | null;
  setData: React.Dispatch<React.SetStateAction<Story[] | null>>;
  selectedStory: number | null;
  setSelectedStory: React.Dispatch<React.SetStateAction<number | null>>;
}>({
  data: null,
  setData: () => {},
  selectedStory: null,
  setSelectedStory: () => {},
});

export const ThemeContext = React.createContext<{
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}>({
  theme: 'light',
  setTheme: () => {},
});
