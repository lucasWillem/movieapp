import { action } from "easy-peasy";

const modalModel = {
  modalConfiguration: { isVisible: false, content: {} },
  setModalConfiguration: action((state, payload) => {
    state.modalConfiguration = payload;
  }),
};

export default modalModel;
