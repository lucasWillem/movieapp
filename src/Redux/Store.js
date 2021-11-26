import { createStore, persist } from "easy-peasy";

import model from "./Models";

const store = createStore(persist(model));

export { store };
