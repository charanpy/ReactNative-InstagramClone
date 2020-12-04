import { createSelector } from "reselect";

const selectAlert = state => state.alert;

export const selectAlertMessage = createSelector(
     [selectAlert],
     alert => alert
)