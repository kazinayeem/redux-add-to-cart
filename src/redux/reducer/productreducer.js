import {
  ADD_PRODUCT,
  GET_PRODUCT,
  REMOVE_PRODUCT,
  FILTER_PRODUCT,
} from "../types/Actiontype";
import data from "../../data/MOCK_DATA.json";

const initialState = {
  data: data,
  count: 0,
  card_product: [],
  search_p: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        data: state.data,
      };

    case REMOVE_PRODUCT:
      const filter = state.card_product.filter(
        (item) => item.id !== action.pid
      );
      return {
        ...state,
        card_product: filter,
        count: state.count - 1,
      };

    case ADD_PRODUCT:
      const item = state.card_product.find((x) => x.id === action.payload.id);
      if (item) {
        return {
          ...state,
          count: state.count + 1,
          card_product: state.card_product.map((x) =>
            x.id === item.id ? {...action.payload,  qnt : x.qnt + 1} : x
          ),
        };
      } else {
        return {
          ...state,
          card_product: [
            ...state.card_product,
            { ...action.payload,  qnt : action.qnt },
          ],
          count: state.count + 1,
        };
      }


    //  console.log(newobject);

    // return {
    //   ...state,

    //   card_product: [
    //     ...state.card_product,
    //     { ...action.payload, pid: state.count + 2, qnt: action.qnt },
    //   ],
    //   count: state.count + 1,
    // };

    case FILTER_PRODUCT:
      const lowercase = action.payload.toLowerCase();

      state.search_p = lowercase;

      const search_product = state.data.filter((item) =>
        item.product_name.toLowerCase().includes(state.search_p)
      );

      return {
        ...state,
        data: search_product,
        search_p: search_product.length,
      };

    default:
      return state;
  }
};

export default reducer;
