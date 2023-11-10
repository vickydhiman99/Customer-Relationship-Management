import {

    VIEW_ALL_BANK,
    VIEW_ALL_BANK_BY_ID,
    //bank setter constant 
    SET_BANK_NAME,
    SET_ACCOUNT_NUMBER,
    SET_ACCOUNT_HOLDER_NAME,
    SET_BRANCH,
    SET_IFSC_CODE,
    SET_BANK_ID,
    //UPI ACTION AND SETTER CONSTANT
    VIEW_ALL_UPI,
    VIEW_ALL_UPI_BY_ID,
     //UPI setter
    SET_UPI_ID,
    SET_QR_ID,
    //Templet
    VIEW_ALL_WHATSAPP_TEMPLET,
    //Templete setter
    SET_TEMP_LINK,
    SET_TEMP_NAME,
    SET_TEMP_DESC,
    //Details
    VIEW_ALL_PERSONAL_DETAILS,
    //Details setter
    SET_DETAILS_LINK,
    SET_DETAILS_NAME,
    SET_DETAILS_DESC,
    //SMS
    VIEW_ALL_SMS,
    //SMS setter
    SET_SMS_LINK,
    SET_SMS_NAME,
    SET_SMS_DESC,
    //Category
    CATEGORY,
    //Category setter
    SET_CATEGORY_ID,
    SET_CATEGORY_NAME

} from "./constant";
const initial_state = {
    //Bank
    viewAllBank: [],
    viewAllBankById: [],
    //bank setter
    setBankName: "",
    setAccountNumber: "",
    setAccountHolderName: "",
    setBranch: "",
    setIfscCode: "",
    setBankId: "",
    //upi
    viewAllUpi: [],
    viewAllUpiById: [],
    //upi setter
    setUpiId: "",
    setQrId: "",
    //Templet
    viewAllWhatsapp: [],
    //Templet setter
    set_temp_link: "",
    set_temp_name:"",
    set_temp_desc:"",

    //Details
    viewAllPersonalDetails: [],
    //Details setter
    set_details_link:"",
    set_details_name:"",
    set_details_desc:"",
    
    //SMS
    viewAllSms: [],
    //Sms setter
    set_sms_desc:"",
    set_sms_name:"",
    set_sms_desc:"",

    //Category
    category:[],
    //Category setter
    set_category_id:"",
    set_category_name:"",

};
export default function reducer(state = initial_state, action) {
    switch (action.type) {

        case VIEW_ALL_BANK:
            return state = { ...state, viewAllBank: action.payload };
        case VIEW_ALL_BANK_BY_ID:
            return state = { ...state, viewAllBankById: action.payload };
        case VIEW_ALL_UPI:
            return state = { ...state, viewAllUpi: action.payload };
        case VIEW_ALL_UPI_BY_ID:
            return state = { ...state, viewAllUpiById: action.payload };
        //BANK SETTER 
        case SET_BANK_NAME:
            return state = { ...state, setBankName: action.payload };

        case SET_ACCOUNT_NUMBER:
            return state = { ...state, setAccountNumber: action.payload };

        case SET_ACCOUNT_HOLDER_NAME:
            return state = { ...state, setAccountHolderName: action.payload };

        case SET_BRANCH:
            return state = { ...state, setBranch: action.payload };

        case SET_IFSC_CODE:
            return state = { ...state, setIfscCode: action.payload };

        case SET_BANK_ID:
            return state = { ...state, setBankId: action.payload };
        //UPI SETTER
        case SET_UPI_ID:
            return state = { ...state, setUpiId: action.payload };

        case SET_QR_ID:
            return state = { ...state, setQrId: action.payload };

        //Category
        case CATEGORY:
            return state = { ...state, category: action.payload };

        //Category setter
        case SET_CATEGORY_ID:
            return state = { ...state, set_category_id: action.payload };
        case SET_CATEGORY_NAME:
            return state = { ...state, set_category_name: action.payload };

        //Templet
        case VIEW_ALL_WHATSAPP_TEMPLET:
            return state = { ...state, viewAllWhatsapp: action.payload };

        //Templet setter
        case SET_TEMP_LINK:
            return state = { ...state, set_temp_link: action.payload };
        case SET_TEMP_NAME:
            return state = { ...state, set_temp_name: action.payload };
        case SET_TEMP_DESC:
            return state = { ...state, set_temp_desc: action.payload };

        //Details
        case VIEW_ALL_PERSONAL_DETAILS:
            return state = { ...state, viewAllPersonalDetails: action.payload };

        //Details setter
        case SET_DETAILS_LINK:
            return state = { ...state, set_details_link: action.payload };
        case SET_DETAILS_NAME:
            return state = { ...state, set_details_name: action.payload };
        case SET_DETAILS_DESC:
            return state = { ...state, set_details_desc: action.payload };

        //SMS
        case VIEW_ALL_SMS:
            return state = { ...state, viewAllSms: action.payload };

        //SMS setter
        case SET_SMS_LINK:
            return state = { ...state, set_sms_link: action.payload };
        case SET_SMS_NAME:
            return state = { ...state, set_sms_name: action.payload };
        case SET_SMS_DESC:
            return state = { ...state, set_sms_desc: action.payload };

        default:
            return state;
    }
}
