import React, { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
import { getTodosData } from "../Redux/Todos/action";
import { useDispatch } from "react-redux";

const initState = {
  title: "",
  description: "",
  subtasks: [],
  status: "",
  tags: { official: false, personal: false, others: false },
  date: "",
};

const reducer = (store = initState, { type, payload }) => {
  switch (type) {
    case "UPDATE_TITLE": {
      return { ...store, title: payload };
    }
    case "UPDATE_DESCRIPTION": {
      return { ...store, description: payload };
    }
    case "UPDATE_SUBTASKS": {
      return { ...store, subtasks: [...store.subtasks, payload] };
    }
    case "UPDATE_STATUS": {
      return { ...store, status: payload };
    }
    case "UPDATE_TAGS": {
      return { ...store, tags: { ...store.tags, ...payload } };
    }
    case "UPDATE_DATE": {
      return { ...store, date: payload };
    }
    case "TOGGLE_SUBTASK": {
      const subtaskAfterToggle = store.subtasks.map((el) =>
        el.id === payload.id ? { ...el, subtaskStatus: payload.status } : el,
      );
      return { ...store, subtasks: subtaskAfterToggle };
    }
    case "DELETE_SUBTASK": {
      const subtaskAfterDeletion = store.subtasks.filter(
        (el) => el.id !== payload,
      );

      return { ...store, subtasks: subtaskAfterDeletion };
    }
    default: {
      return store;
    }
  }
};

export const TodosCreate = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const [subtaskInputValue, setSubtaskInputValue] = useState("");
  const ReduxDispatch = useDispatch();

  const CreateTask = () => {
    const payload = { ...state };

    fetch(`http://localhost:8080/todos`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => ReduxDispatch(getTodosData()));
  };

  const { title, description, status, date, subtasks, tags } = state;
  const { official, personal, others } = tags;

  return (
    <div>
      <br />
      <br />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) =>
          dispatch({ type: "UPDATE_TITLE", payload: e.target.value })
        }
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) =>
          dispatch({ type: "UPDATE_DESCRIPTION", payload: e.target.value })
        }
      />
      <br />
      <br />
      <div>
        <label>
          <input
            type="radio"
            checked={status === "Todo"}
            onChange={() =>
              dispatch({ type: "UPDATE_STATUS", payload: "Todo" })
            }
          />
          Todo
        </label>
        <br />
        <label>
          <input
            type="radio"
            checked={status === "InProgress"}
            onChange={() =>
              dispatch({ type: "UPDATE_STATUS", payload: "InProgress" })
            }
          />
          InProgress
        </label>
        <br />
        <label>
          <input
            type="radio"
            checked={status === "Done"}
            onChange={() =>
              dispatch({ type: "UPDATE_STATUS", payload: "Done" })
            }
          />
          Done
        </label>
        <br />
      </div>
      <br />
      <div>
        <label>
          <input
            type="checkbox"
            checked={official}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_TAGS",
                payload: { official: e.target.checked },
              });
            }}
          />
          Official
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={personal}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_TAGS",
                payload: { personal: e.target.checked },
              });
            }}
          />
          Personal
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={others}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_TAGS",
                payload: { others: e.target.checked },
              });
            }}
          />
          Others
        </label>
      </div>
      <br />
      <br />
      <div>
        <input
          type="date"
          value={date}
          onChange={(e) =>
            dispatch({ type: "UPDATE_DATE", payload: e.target.value })
          }
        />
        <br />
        <br />
        <h1>Create SubTask</h1>
        <input
          type="text"
          value={subtaskInputValue}
          onChange={(e) => {
            setSubtaskInputValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const subtask = {
              id: uuid(),
              subtaskTitle: subtaskInputValue,
              subtaskStatus: false,
            };
            dispatch({ type: "UPDATE_SUBTASKS", payload: subtask });
          }}
        >
          ADD
        </button>
        <div>
          {subtasks.map((subtask) => (
            <div key={subtask.id} style={{ display: "flex" }}>
              <label>
                <input
                  type="checkbox"
                  checked={subtask.subtaskStatus}
                  onChange={(e) =>
                    dispatch({
                      type: "TOGGLE_SUBTASK",
                      payload: { id: subtask.id, status: e.target.checked },
                    })
                  }
                />
                {subtask.subtaskTitle}
              </label>
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_SUBTASK", payload: subtask.id })
                }
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <button onClick={CreateTask}>Create Task</button>
    </div>
  );
};
