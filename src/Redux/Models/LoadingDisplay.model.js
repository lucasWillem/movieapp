import { action } from "easy-peasy";

const loadingDisplayModel = {
  isLoaderVisible: false,
  setLoaderVisibility: action((state, payload) => {
    state.isLoaderVisible = payload;
  }),
};

export default loadingDisplayModel;
