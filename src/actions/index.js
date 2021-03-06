import streams from "../apis/streams";
import history from "../history";

import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "./types";

export const singIn = (userId) => {
  return { type: SIGN_IN, payload: userId };
};

export const singOut = () => {
  return { type: SIGN_OUT };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  //getState is function
  const { userId } = getState().auth;
  //db.json to create new stream
  const response = await streams.post("/streams", { ...formValues, userId });
  //redux store to create new stream
  dispatch({ type: CREATE_STREAM, payload: response.data });
  console.log("history object", history);
  history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("streams");
  console.log("response", response);

  dispatch({ type: "FETCH_STREAMS", payload: response.data });
  history.push("/");
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};
