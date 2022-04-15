export const UPDATE_TITLE = "UPDATE_TITLE";
export const UPDATE_DESCRIPTION = "UPDATE_DESCRIPTION";
export const UPDATE_SUBTASKS = "UPDATE_SUBTASKS";
export const UPDATE_STATUS = "UPDATE_STATUS";
export const UPDATE_TAGS = "UPDATE_TAGS";
export const UPDATE_DATE = "UPDATE_DATE";

export const updateTitle = () => ({
  type: UPDATE_TITLE,
});

export const updateDescription = () => ({
  type: UPDATE_DESCRIPTION,
});

export const updateSubtasks = () => ({
  type: UPDATE_SUBTASKS,
});

export const updateStatus = () => ({
  type: UPDATE_STATUS,
});

export const updateTags = () => ({
  type: UPDATE_TAGS,
});

export const updateDate = () => ({
  type: UPDATE_DATE,
});
