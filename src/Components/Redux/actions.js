export const ADD_CITY = "ADD_CITY";
export const DELETE_CITY = "Delete City";

let nextId = 3;

export const addCity = city => {
  return {
    type: ADD_CITY,
    city: { ...city,
    id: nextId++ }
  };
};

export const deleteCity = id => {
  return {
    type: DELETE_CITY,
    id: id
  };
};
