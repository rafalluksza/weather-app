export const ADD_CITY = "ADD_CITY";
export const DELETE_CITY = "Delete City";


export const addCity = city => {
  return {
    type: ADD_CITY,
    city: city,
  };
};

export const deleteCity = id => {
  return {
    type: DELETE_CITY,
    id: id
  };
};
