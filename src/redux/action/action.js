import { ADD_PRODUCT, REMOVE_PRODUCT,FILTER_PRODUCT } from "../types/Actiontype";

export const add_product = (product, qnt) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
    qnt : qnt
  };
};

export const remove_product = (pid) => {
  return {
    type: REMOVE_PRODUCT,
     pid: pid,
  };
};



export const search_product = (search_product) => {
  
  return {
    type : FILTER_PRODUCT,
    payload : search_product
  }
}
