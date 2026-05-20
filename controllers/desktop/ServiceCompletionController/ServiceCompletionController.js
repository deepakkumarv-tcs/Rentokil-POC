define({ 

 //Type your controller code here 
fetchServiceDataServCompletion: function(id) {
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
       let [item] = data;
// 		var custName = data[0].customer_name;
//        var emailID = data[0].email_id;
//        var contact = data[0].phone;
//        var address = data[0].address;
//        var area = data[0].service_area;
//        var note = data[0].service_notes;
       /*
       valueCustomerName
customerPhone
servArea
techId
addr
status
desc
valueEmail
pctrlType
cityC
       
       */
       self.view.txtServiceID.text = item.sr_id;
       self.view.customerPhone.text = item.phone;
       self.view.servArea.text = item.service_area;
       self.view.techId.text = item.technician_id;
       self.view.addr.text = item.address;
       self.view.statusC.text = item.service_status;
       self.view.desc.text = item.service_description;
       self.view.valueEmail.text = item.email_id;
       self.view.pctrlType.text = item.pest_control_type_name;
       self.view.cityC.text = item.city;
     }
   }, 
  failureCallback: function(error) {
        voltmx.print("Error: " + JSON.stringify(error));
    }

 });