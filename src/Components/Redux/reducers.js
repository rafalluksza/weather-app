import { ADD_CITY, DELETE_CITY } from "./actions";

const initialState = [
  {
    title: "Gorzów Wlkp.",
    latt_long: "52.732201,15.237570"
  },
  {
    title: "Warsaw",
    latt_long: "52.229675,21.012230"
  },
  {
    title: "Bielsko-Biała",
    latt_long: "49.807621,19.055840"
  }
];

const citiesList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY:
      return [...state, {...action.city}];
    case DELETE_CITY:
      return state.filter((data, i) => i !== action.id);
    default:
      return state;
  }
};

export default citiesList;
