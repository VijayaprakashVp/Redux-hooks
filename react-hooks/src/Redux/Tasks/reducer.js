import {
  UPDATE_TITLE,
  UPDATE_DESCRIPTION,
  UPDATE_SUBTASKS,
  UPDATE_STATUS,
  UPDATE_TAGS,
  UPDATE_DATE,
} from "../Tasks/action";

const initState = {
  title: "",
  description: "",
  subtasks: [],
  status: "",
  tags: { official: false, personal: false, others: false },
  date: "",
};

const TaskReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case UPDATE_TITLE: {
      return { ...store, title: payload };
    }
    case UPDATE_DESCRIPTION: {
      return { ...store, description: payload };
    }
    case UPDATE_SUBTASKS: {
      return { ...store, subtasks: [...subtasks, payload] };
    }
    case UPDATE_STATUS: {
      return { ...store, status: payload };
    }
    case UPDATE_TAGS: {
      return { ...store, tags: { ...tags, payload } };
    }
    case UPDATE_DATE: {
      return { ...store, date: payload };
    }
    default: {
      return store;
    }
  }
};
