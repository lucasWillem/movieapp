import { createStore, persist } from "easy-peasy";

import models from "./Models";

const store = createStore(persist(models));

export { store };
