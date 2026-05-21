define({ 
  testcall:function(id){
    let self = this;

    function INVOKE_SERVICE_Cb(status,response){
      console.log(status,response,"test")
      //Write logic of updating field data
      // Response data
      var data = response.service_request_trx;

      if (data && data.length > 0){
        const [item] = data;
        self.view.FullNameValue.text = item.customer_name;
        self.view.CountryValue.text = item.country;
        self.view.EmailIdValue.text = item.email_id;
        self.view.PropertyTypeValue.text = item.service_area;
        self.view.PestTypeValue.text = item.pest_control_type_name;
        self.view.HouseNameValue.text = item.address;
        self.view.CityValue.text = item.city;
        self.view.ContactNumberValue.text = item.phone;
        self.view.DateTimeValue.text = "21 May 2026";
        self.view.ApartmentValue.text = item.location_name;
        self.view.StateValue.text = item.State;
        self.view.PincodeValue.text = item.PIN;
        //  self.view.Location.text = item.location_id;
        self.view.CountryValue.text = item.Country;
        self.view.BookingIdValue.text = item.sr_id;
        console.log(item,"Test")
      }
    }
    //let id =2;
    if (rentokil_db_service_request_trx_get_inputparam == undefined) {
      var rentokil_db_service_request_trx_get_inputparam = {};
    }
    rentokil_db_service_request_trx_get_inputparam["serviceID"] = "NewService$rentokil_db_service_request_trx_get";
    // Query Parameter
    rentokil_db_service_request_trx_get_inputparam["$filter"] = "sr_id eq " + id;
    
    var rentokil_db_service_request_trx_get_httpheaders = {};
    rentokil_db_service_request_trx_get_inputparam["httpheaders"] = rentokil_db_service_request_trx_get_httpheaders;
    var rentokil_db_service_request_trx_get_httpconfigs = {};
    rentokil_db_service_request_trx_get_inputparam["httpconfig"] = rentokil_db_service_request_trx_get_httpconfigs;
    NewService$rentokil_db_service_request_trx_get = mfintegrationsecureinvokerasync(rentokil_db_service_request_trx_get_inputparam, "NewService", "rentokil_db_service_request_trx_get", INVOKE_SERVICE_Cb);
  },
  // Callback function that handles the response from the service
  handleServiceRequestResponse:function(status, responseData) {
    if (status === "success") {
      console.log("Service request data received:", responseData);
    } else {
      console.error("Service call failed");
    }
  }
   ,


 updateStatus: function() {
    var self = this;

    function updateCallback(status, response) {
        console.log('updateResponse ', status, response);
        if (response.opstatus === 0) {
          const userData = {
            message: "Technician is assigned."
          }
          var navObj = new kony.mvc.Navigation("popupAsg");
          navObj.navigate(userData);
        } else {
            voltmx.ui.Alert({
                message: "Failed to update service. Please try again.",
                alertType: constants.ALERT_TYPE_ERROR
            });
        }
    }

    // Prepare input parameter object
    var rentokil_db_service_request_trx_update_inputparam = {};
    
    // Service ID from form widget
    var id = self.view.BookingIdValue.text;  // Must be string/number
    // Technician name (selected value from dropdown)
    var technicianName = self.view.TechnicianValues.selectedKeyValue[1]; // Displayed value

    console.log('Technician name:', technicianName);
    console.log('Service ID:', id);

    // Set serviceID for VoltMX
    rentokil_db_service_request_trx_update_inputparam["serviceID"] = "NewService$rentokil_db_service_request_trx_update";
    rentokil_db_service_request_trx_update_inputparam["sr_id"] = Number(id);
    rentokil_db_service_request_trx_update_inputparam["technician_name"] = technicianName;
 rentokil_db_service_request_trx_update_inputparam["service_status"] = "Assigned";
    // HTTP headers and config (empty objects are fine)
    rentokil_db_service_request_trx_update_inputparam["httpheaders"] = {};
    rentokil_db_service_request_trx_update_inputparam["httpconfig"] = {};

    // Call the async service safely
    mfintegrationsecureinvokerasync(
        rentokil_db_service_request_trx_update_inputparam,
        "NewService",
        "rentokil_db_service_request_trx_update",
        updateCallback
    );
}


  // Function to invoke the service asynchronously
  // invokeServiceRequest:function() {
  //     console.log()
  //     if (typeof rentokil_db_service_request_trx_get_inputparam === "undefined") {
  //         var rentokil_db_service_request_trx_get_inputparam = {};
  //     }

  //     // Set service ID
  //     rentokil_db_service_request_trx_get_inputparam["serviceID"] = "NewService$rentokil_db_service_request_trx_get";

  //     // Set HTTP headers (currently empty)
  //     var rentokil_db_service_request_trx_get_httpheaders = {};
  //     rentokil_db_service_request_trx_get_inputparam["httpheaders"] = rentokil_db_service_request_trx_get_httpheaders;

  //     // Set HTTP configs (currently empty)
  //     var rentokil_db_service_request_trx_get_httpconfigs = {};
  //     rentokil_db_service_request_trx_get_inputparam["httpconfig"] = rentokil_db_service_request_trx_get_httpconfigs;

  //     // Call the service asynchronously
  //     NewService$rentokil_db_service_request_trx_get = mfintegrationsecureinvokerasync(
  //         rentokil_db_service_request_trx_get_inputparam,
  //         "NewService",
  //         "rentokil_db_service_request_trx_get",
  //         this.handleServiceRequestResponse.bind(this)
  //     );
  // },


});