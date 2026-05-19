define("userserviceBookingController", {
    //Type your controller code here 
});
define("serviceBookingControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for ButtonCancel **/
    AS_Button_c144ef5f12e34d2485fbd5c815276144: function AS_Button_c144ef5f12e34d2485fbd5c815276144(eventobject) {
        var self = this;
        // 'this.view' points to the current form
        var form = this.view;
        // Clear text fields
        form.TextFieldCstFullName.text = "";
        form.TextFieldCstHouse.text = "";
        form.TextFieldCstCity.text = "";
        form.TextFieldCstPincode.text = "";
        form.TextFieldCstEmail.text = "";
        form.TextFieldCstContact.text = "";
        form.TextFieldCstApartment.text = "";
        // Reset dropdowns / listboxes
        form.ListBoxState.selectedKey = "0"; // default key
        form.ListBoxCountry.selectedKey = "0";
    },
    /** onClick defined for ButtonSubmit **/
    AS_Button_fbe1ad3ab48849f0b27256efa3c5fe2e: function AS_Button_fbe1ad3ab48849f0b27256efa3c5fe2e(eventobject) {
        var self = this;

        function INVOKE_SERVICE_g28f52f7f1c6449fbcd5d0ba23e9df3d_Callback(status, rentokil_db_service_request_trx_create) {
            if (rentokil_db_service_request_trx_create.opstatus.opstatus == 0) {
                alert("ok");
            }
        }
        if (rentokil_db_service_request_trx_create_inputparam == undefined) {
            var rentokil_db_service_request_trx_create_inputparam = {};
        }
        rentokil_db_service_request_trx_create_inputparam["serviceID"] = "NewService$rentokil_db_service_request_trx_create";
        rentokil_db_service_request_trx_create_inputparam["customer_name"] = self.view.TextFieldCstFullName.text;
        rentokil_db_service_request_trx_create_inputparam["location_name"] = self.view.TextFieldCstHouse.text;
        rentokil_db_service_request_trx_create_inputparam["city"] = self.view.TextFieldCstCity.text;
        rentokil_db_service_request_trx_create_inputparam["pin"] = self.view.TextFieldPincode.text;
        rentokil_db_service_request_trx_create_inputparam["service_description"] = self.view.TextAreaDes.text;
        rentokil_db_service_request_trx_create_inputparam["email_id"] = self.view.TextFieldCstEmail.text;
        rentokil_db_service_request_trx_create_inputparam["phone"] = self.view.TextFieldCstContactNumber.text;
        rentokil_db_service_request_trx_create_inputparam["pest_control_type_name"] = self.view.ListBoxServiceType.selectedKeyValues[0][1];
        rentokil_db_service_request_trx_create_inputparam["state"] = self.view.ListBoxState.masterData[0][1];
        rentokil_db_service_request_trx_create_inputparam["country"] = self.view.ListBoxCountry.masterData[0][1];
        rentokil_db_service_request_trx_create_inputparam["address"] = self.view.TextFieldCstAppartment.text;
        var rentokil_db_service_request_trx_create_httpheaders = {};
        rentokil_db_service_request_trx_create_inputparam["httpheaders"] = rentokil_db_service_request_trx_create_httpheaders;
        var rentokil_db_service_request_trx_create_httpconfigs = {};
        rentokil_db_service_request_trx_create_inputparam["httpconfig"] = rentokil_db_service_request_trx_create_httpconfigs;
        NewService$rentokil_db_service_request_trx_create = mfintegrationsecureinvokerasync(rentokil_db_service_request_trx_create_inputparam, "NewService", "rentokil_db_service_request_trx_create", INVOKE_SERVICE_g28f52f7f1c6449fbcd5d0ba23e9df3d_Callback);
    },
    /** onTouchStart defined for CstCountryLabel **/
    AS_Label_bed4af43f81b441f87a076564685e36e: function AS_Label_bed4af43f81b441f87a076564685e36e(eventobject, x, y) {
        var self = this;
        voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
    },
    /** onSelection defined for ListBoxCountry **/
    AS_ListBox_ace82d3c177e426cb9538fd5df3da32c: function AS_ListBox_ace82d3c177e426cb9538fd5df3da32c(eventobject) {
        var self = this;
        var customerCountry = txtCustomerCountry;
    },
    /** onSelection defined for ListBoxState **/
    AS_ListBox_cad5f926a9a14a86a42823195d643caf: function AS_ListBox_cad5f926a9a14a86a42823195d643caf(eventobject) {
        var self = this;
        var customerState = txtCustomerState;
    },
    /** onSelection defined for ListBoxServiceType **/
    AS_ListBox_f04a1c951a1546a7b25c182150a58381: function AS_ListBox_f04a1c951a1546a7b25c182150a58381(eventobject) {
        var self = this;
        var customerServicetype = CustomerServicetype;
    },
    /** onTextChange defined for TextAreaDes **/
    AS_TextArea_he31a516f1964dd595de7b66886d9380: function AS_TextArea_he31a516f1964dd595de7b66886d9380(eventobject) {
        var self = this;
        var customerServiceDes = txtCustomerServiceDes;
    },
    /** onTextChange defined for TextFieldCstHouse **/
    AS_TextField_bce4abcd437c41699d274d4096a7752d: function AS_TextField_bce4abcd437c41699d274d4096a7752d(eventobject, changedtext) {
        var self = this;
        var customerHouseNo = txtCustomerHouseNo;
    },
    /** onTextChange defined for TextFieldCstCity **/
    AS_TextField_c688264974e44f95b99724a845562cfa: function AS_TextField_c688264974e44f95b99724a845562cfa(eventobject, changedtext) {
        var self = this;
        var customerCity = txtCustomerCity;
    },
    /** onTextChange defined for TextFieldPincode **/
    AS_TextField_cc0073c3c357480784586db0f3caa3cd: function AS_TextField_cc0073c3c357480784586db0f3caa3cd(eventobject, changedtext) {
        var self = this;
        var customerPin = txtCustomerPin;
    },
    /** onTextChange defined for TextFieldCstAppartment **/
    AS_TextField_de8592cf758943799cd252e7ba0be4b4: function AS_TextField_de8592cf758943799cd252e7ba0be4b4(eventobject, changedtext) {
        var self = this;
        var customerAppartment = txtCustomerAppartment;
    },
    /** onTextChange defined for TextFieldCstContactNumber **/
    AS_TextField_ec458bad1f8d487c92e2e8f0a7d20c36: function AS_TextField_ec458bad1f8d487c92e2e8f0a7d20c36(eventobject, changedtext) {
        var self = this;
        var customerNumber = txtCustomerNumber;
    },
    /** onTextChange defined for TextFieldCstFullName **/
    AS_TextField_i72f50cd485c42abb4b25a431ab9ed03: function AS_TextField_i72f50cd485c42abb4b25a431ab9ed03(eventobject, changedtext) {
        var self = this;
        var customerName = txtCustomerName;
    }
});
define("serviceBookingController", ["userserviceBookingController", "serviceBookingControllerActions"], function() {
    var controller = require("userserviceBookingController");
    var controllerActions = ["serviceBookingControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
