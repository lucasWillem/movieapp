import { createStore, persist } from "easy-peasy";

import models from "./models";

const store = createStore(persist(models));

export { store };
