define("userCopyForm1Controller", {
    //Type your controller code here 
});
define("CopyForm1ControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTextChange defined for TextFieldCstFullName **/
    AS_TextField_efde8ff0faf14c9da584438cd6d3adc2: function AS_TextField_efde8ff0faf14c9da584438cd6d3adc2(eventobject, changedtext) {
        var self = this;
        var customerName = txtCustomerName;
    },
    /** onTextChange defined for CstEmail **/
    AS_TextField_a6770eb1b7a042cf9d62605b08206d9d: function AS_TextField_a6770eb1b7a042cf9d62605b08206d9d(eventobject, changedtext) {
        var self = this;
        var customerEmail = txtCustomerEmail;
    },
    /** onClick defined for ButtonCancel **/
    AS_Button_c523dd0add254b8c9bf19995d3aee962: function AS_Button_c523dd0add254b8c9bf19995d3aee962(eventobject) {
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
    /** onTextChange defined for TextFieldCstContactNumber **/
    AS_TextField_e99b349ebfff4421afbcd706710ac41b: function AS_TextField_e99b349ebfff4421afbcd706710ac41b(eventobject, changedtext) {
        var self = this;
        var customerNumber = txtCustomerNumber;
    },
    /** onTextChange defined for TextFieldPincode **/
    AS_TextField_e1694c3691514d34b708024cba9e7ec7: function AS_TextField_e1694c3691514d34b708024cba9e7ec7(eventobject, changedtext) {
        var self = this;
        var customerPin = txtCustomerPin;
    },
    /** onSelection defined for ListBoxCountry **/
    AS_ListBox_bf3bb80354bf498d80d8c75f2364f8c3: function AS_ListBox_bf3bb80354bf498d80d8c75f2364f8c3(eventobject) {
        var self = this;
        var customerCountry = txtCustomerCountry;
    },
    /** onTextChange defined for TextFieldCstHouse **/
    AS_TextField_ccd61b9b989543ac9fc45d96ac6e0d18: function AS_TextField_ccd61b9b989543ac9fc45d96ac6e0d18(eventobject, changedtext) {
        var self = this;
        var customerHouseNo = txtCustomerHouseNo;
    },
    /** onTextChange defined for TextFieldCstAppartment **/
    AS_TextField_i443597d6fe34f46830b782f35df2ff1: function AS_TextField_i443597d6fe34f46830b782f35df2ff1(eventobject, changedtext) {
        var self = this;
        var customerAppartment = txtCustomerAppartment;
    },
    /** onTextChange defined for TextFieldCstCity **/
    AS_TextField_gae790e473cb4d5c8cfc38ef5efda319: function AS_TextField_gae790e473cb4d5c8cfc38ef5efda319(eventobject, changedtext) {
        var self = this;
        var customerCity = txtCustomerCity;
    },
    /** onSelection defined for ListBoxServiceType **/
    AS_ListBox_b58adc021d33425a91a375ea15dbb851: function AS_ListBox_b58adc021d33425a91a375ea15dbb851(eventobject) {
        var self = this;
        var customerServicetype = CustomerServicetype;
    },
    /** onClick defined for ButtonSubmit **/
    AS_Button_f26ecf7e0f0f487d841e461abadc8921: function AS_Button_f26ecf7e0f0f487d841e461abadc8921(eventobject) {
        var self = this;

        function INVOKE_ASYNC_SERVICE_ide_onClick_c5f10d27ee02457ab386172fa1ec73cf_Callback(status, rentokil_db_service_request_trx_create) {}
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
        var rentokil_db_service_request_trx_create_httpheaders = {};
        rentokil_db_service_request_trx_create_inputparam["httpheaders"] = rentokil_db_service_request_trx_create_httpheaders;
        var rentokil_db_service_request_trx_create_httpconfigs = {};
        rentokil_db_service_request_trx_create_inputparam["httpconfig"] = rentokil_db_service_request_trx_create_httpconfigs;
        NewService$rentokil_db_service_request_trx_create = mfintegrationsecureinvokerasync(rentokil_db_service_request_trx_create_inputparam, "NewService", "rentokil_db_service_request_trx_create", INVOKE_ASYNC_SERVICE_ide_onClick_c5f10d27ee02457ab386172fa1ec73cf_Callback);
    },
    /** onSelection defined for ListBoxState **/
    AS_ListBox_jc4fc4e01b9540ea833eb8c1c9e2e89d: function AS_ListBox_jc4fc4e01b9540ea833eb8c1c9e2e89d(eventobject) {
        var self = this;
        var customerState = txtCustomerState;
    },
    /** onTextChange defined for TextAreaDes **/
    AS_TextArea_c06dbe8c1e8e4d6581f23e177abc7a88: function AS_TextArea_c06dbe8c1e8e4d6581f23e177abc7a88(eventobject) {
        var self = this;
        var customerServiceDes = txtCustomerServiceDes;
    }
});
define("CopyForm1Controller", ["userCopyForm1Controller", "CopyForm1ControllerActions"], function() {
    var controller = require("userCopyForm1Controller");
    var controllerActions = ["CopyForm1ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
