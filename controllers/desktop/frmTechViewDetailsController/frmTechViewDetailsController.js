define({ 
 //Type your controller code here 
  fetchServiceData: function(id) {
	operationName =  "rentokil_db_service_request_trx_get";
   
    if (rentokil_db_service_request_trx_get_inputparam == undefined) {
        var rentokil_db_service_request_trx_get_inputparam = {
          "$filter": "sr_id eq "+id
        };
    }
    rentokil_db_service_request_trx_get_inputparam["serviceID"] = "db_integration_service$rentokil_db_service_request_trx_get";
    var rentokil_db_service_request_trx_get_httpheaders = {};
    rentokil_db_service_request_trx_get_inputparam["httpheaders"] = rentokil_db_service_request_trx_get_httpheaders;
    var rentokil_db_service_request_trx_get_httpconfigs = {};
    rentokil_db_service_request_trx_get_inputparam["httpconfig"] = rentokil_db_service_request_trx_get_httpconfigs;
    NewService$rentokil_db_service_request_trx_get = mfintegrationsecureinvokerasync(rentokil_db_service_request_trx_get_inputparam, "NewService", "rentokil_db_service_request_trx_get", this.callback);
    },
  callback: function(status, response) {
     voltmx.print("API Response: " + JSON.stringify(response));
	 var self = this;
     var data = response.service_request_trx;
     if (data && data.length > 0) {
		var custName = data[0].customer_name;
       var emailID = data[0].email_id;
       var contact = data[0].phone;
       var address = data[0].address;
       var area = data[0].service_area;
       var note = data[0].service_notes;
	   var sr_id = data[0].sr_id;
       self.view.custName.text = custName;
       self.view.emailContent.text = emailID;
       self.view.contactContent.text = contact;
       self.view.addressContent.text = address;
       self.view.serviceArea.text = area;
       self.view.serviceNote.text = note;
       self.view.viewBookingId.text = sr_id;
     }
   }, 
  failureCallback: function(error) {
        voltmx.print("Error: " + JSON.stringify(error));
    },
  updateStatus: function() {
    var self = this;

    function updateCallback(status, response) {
        console.log('updateResponse ', status, response);
        if (response.opstatus === 0) {
          const userData = {
            message: "Job is accepted"
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
    var id = self.view.viewBookingId.text;  // Must be string/number
    // Technician name (selected value from dropdown)
    


    // Set serviceID for VoltMX
    rentokil_db_service_request_trx_update_inputparam["serviceID"] = "NewService$rentokil_db_service_request_trx_update";
    rentokil_db_service_request_trx_update_inputparam["sr_id"] = Number(id);
    rentokil_db_service_request_trx_update_inputparam["service_status"] = "In Progress";

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

 });