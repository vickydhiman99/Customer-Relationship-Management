import React, { Component } from "react";
import { connect } from "react-redux";
// import Vieworg from "../components/vieworg";
import {
  close_snack_bar
} from "../../../../common/snackbar/action";
import {
  addProduct,
  updateproduct,
  viewAllProduct,
  bulkDeleteProduct,
  deleteProduct,

  SetProductName,
  SetShortId,
  SetProductPrice,
  SetProductId,

  updateProductImage,
  uploadProductImage
  
  

} from "../../actions";
export class Controller extends Component {
  render() {
    return (
      <Vieworg {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    product: store.product,
    loader: store.loader,
    snackbar: store.snackbar,
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    updateProductImage:(org_id, product_img,product_id, product_img2, product_shortId, product_name, product_price, product_stock, product_desc) => {
      dispatch(updateProductImage(org_id, product_img,product_id, product_img2, product_shortId, product_name, product_price, product_stock, product_desc))
    },

    uploadProductImage:(org_id, product_img,product_img2, product_shordId, product_name, product_price,product_stock, product_desc) => {
      dispatch(uploadProductImage(org_id, product_img,product_img2, product_shordId, product_name, product_price,product_stock, product_desc))
    },


    addProduct:(org_id, product_img, product_shordId, product_name, product_price,product_stock, product_desc,) => {
      dispatch(  addProduct(org_id, product_img, product_shordId, product_name, product_price,product_stock, product_desc,))
    },
    close_snack_bar: () => {
      dispatch(close_snack_bar());
    },
    updateproduct:(org_id,product_id, product_img, product_shortId, product_name, product_price, product_stock, product_desc) => {
      dispatch(updateproduct(org_id,product_id, product_img, product_shortId, product_name, product_price, product_stock, product_desc));
    },
    viewAllProduct:(org_id) => {
      dispatch(viewAllProduct(org_id));
    },
    bulkDeleteProduct:(org_id, product_id)=> {
      dispatch(bulkDeleteProduct(org_id, product_id));
    },
    deleteProduct:(org_id, product_id) => {
      dispatch(deleteProduct(org_id, product_id));
    },



    SetProductName:(payload)=> {
      dispatch( SetProductName(payload));
    },
    SetShortId:(payload)=> {
      dispatch(SetShortId(payload));
    },
    SetProductPrice:(payload) => {
      dispatch( SetProductPrice(payload) );
    },
    SetProductId:(payload)=> {
      dispatch( SetProductId(payload));
    },
    search_product:(prroduct, e)=> {
      dispatch( search_product(prroduct, e));
    },

  }; 
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);