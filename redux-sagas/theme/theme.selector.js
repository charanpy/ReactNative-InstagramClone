import { createSelector } from 'reselect';

const selectTheme = (state) => state.theme;

export const selectBackground = createSelector(
  [selectTheme],
  (theme) => theme.background
);

export const selectColor = createSelector(
  [selectTheme],
  (theme) => theme.color
);
