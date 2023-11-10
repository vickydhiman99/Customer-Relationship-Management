import {
  VIEW_ALL_PRODUCT,
  VIEW_PRODUCT_BY_ID,
  SET_PRODUCT_NAME,
  PRODUCT_SHORT_ID,
  PRODUCT_PRICE,
  SET_PRODUCT_STOCK,
  SET_PRODUCT_DESC,
  SET_PRODUCT_ID

} from "./constant";
const initial_state = {
  prroduct: [],
  view_product_by_id: [],
  set_product_name: "",
  set_product_short_id: "",
  set_product_price: "",
  set_Product_stock: "",
  set_product_desc: "",
  set_product_id: ""


};
export default function reducer(state = initial_state, action) {
  switch (action.type) {


    case VIEW_ALL_PRODUCT:
      return state = { ...state, prroduct: action.payload };
    case VIEW_PRODUCT_BY_ID:
      return state = { ...state, view_product_by_id: action.payload };

    case SET_PRODUCT_NAME:
      return state = { ...state, set_product_name: action.payload };
    case PRODUCT_SHORT_ID:
      return state = { ...state, set_product_short_id: action.payload };
    case PRODUCT_PRICE:
      return state = { ...state, set_product_price: action.payload };
    case SET_PRODUCT_STOCK:
      return state = { ...state, set_Product_stock: action.payload };
    case SET_PRODUCT_DESC:
      return state = { ...state, set_product_desc: action.payload };
    case SET_PRODUCT_ID:
      return state = { ...state, set_product_id: action.payload };
    default:
      return state;


  }
}
