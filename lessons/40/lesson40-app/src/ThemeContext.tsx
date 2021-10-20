import React from 'react';
import { Themes } from 'types/Theme';

export const ThemeContext = React.createContext<Themes>(Themes.light);