import { action } from "easy-peasy";

const alertsModel = {
  alertConfiguration: { isVisible: false, message: "" },
  setAlertConfiguration: action((state, payload) => {
    state.alertConfiguration = payload;
  }),
};

export default alertsModel;
