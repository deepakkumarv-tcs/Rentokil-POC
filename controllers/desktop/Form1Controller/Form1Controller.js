define({ 

  //Type your controller code here 
  clonedRawData: [],

  onNavigate: function() {
    this.fetchTableDataFromServer();
  },
  fetchTableDataFromServer: function() {

    try {
      // 1. Grab the default initialization client instance
      const client = kony.sdk.getCurrentInstance();

      // 2. Point to your specific Integration Service name
      const integrationService = client.getIntegrationService("NewService");
      const operationName = "rentokil_db_service_request_trx_get";
      const inputParams = {}; 
      const headers = {};

      // 3. Fire the request explicitly
      integrationService.invokeOperation(
        operationName, 
        headers, 
        inputParams, 
        this.onApiSuccess.bind(this), 
        this.onApiFailure.bind(this)
      );

    } catch (exception) {
      //kony.application.dismissLoadingScreen();
      alert("SDK Initialization Exception: " + exception.message);
    }
  },
  onApiSuccess: function(response) {
    //kony.application.dismissLoadingScreen();
    // opstatus 0 means successful execution in Volt MX
    if (response && response.opstatus === 0) {
      this.clonedRawData = response.service_request_trx || [];
      this.bindDataToSegment(this.clonedRawData);
    } else {
      alert("Service error: " + JSON.stringify(response));
    }
  },

  onApiFailure: function(error) {
    //kony.application.dismissLoadingScreen();
    alert("Network invocation failed: " + JSON.stringify(error));
  },
  bindDataToSegment: function(dataArray) {

    // Transform the raw backend array into Segment row structures
    const segmentData = dataArray.map((item, index) => {
      let statusSkin = "statusNew";
      let btnText = 'Assign';
      if (item.service_status === "Completed") {
        statusSkin = "statusCompleted";
        btnText = '';
      }

      if (item.service_status === "In Progress") {
        statusSkin = "statsInprogress";
        btnText = 'Re-assign';
      }
      if (item.service_status === "Assigned") {
        statusSkin = "statusAssigned";
         btnText = 'Re-assign';
      }

      return {
        // Map short summary keys to your template column labels
        "lbBookingid": { 
          text: item.sr_id || "" },
        "lbCustomer": {
          text: item.customer_name || "" },
        "lbDateTime": {
          text: "20-5-2026" },
        "lbTechnician": {
          text: item.technician_id || "" },
        "lbStatus": { 
         
          text: item.service_status || "" },

        // Contextually bind the specific row index to the button click handler
        "btnAction": { 
          text: btnText || '', 
          onClick: this.onRowButtonClick.bind(this, index),
          
        }
      };
    });

    // Update the UI table segment
    this.view.SegmentBookingTable.setData(segmentData);
  },

  onRowButtonClick: function(selectedIndex) {
    // Pull the specific object containing *all* extended fields from the array
    const completeRowDetails = this.clonedRawData[selectedIndex];

    // Pass the target object directly to the next page controller
    const navigationObject = new kony.mvc.Navigation("SupervisorForm");
    navigationObject.navigate(completeRowDetails);
  }


});