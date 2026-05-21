define({ 

 //Type your controller code here 
  invokeService: function(){
    var self = this;
    if (rentokil_db_service_request_trx_get_inputparam == undefined) {
        var rentokil_db_service_request_trx_get_inputparam = {};
    }
    rentokil_db_service_request_trx_get_inputparam["serviceID"] = "NewService$rentokil_db_service_request_trx_get";
    //rentokil_db_service_request_trx_get_inputparam["$filter"] = "service_status eq Assigned";
    //rentokil_db_service_request_trx_get_inputparam["$filter"] = "service_status eq 'In Progress'";
    var rentokil_db_service_request_trx_get_httpheaders = {};
    rentokil_db_service_request_trx_get_inputparam["httpheaders"] = rentokil_db_service_request_trx_get_httpheaders;
    var rentokil_db_service_request_trx_get_httpconfigs = {};
    rentokil_db_service_request_trx_get_inputparam["httpconfig"] = rentokil_db_service_request_trx_get_httpconfigs;
    NewService$rentokil_db_service_request_trx_get = mfintegrationsecureinvokerasync(rentokil_db_service_request_trx_get_inputparam, "NewService", "rentokil_db_service_request_trx_get", this.callback);
  },
  callback: function (status, resp) {
   // debugger;
    
    const response = resp.service_request_trx;
    if(resp && response.length > 0) {
      const assignedJobs = response.filter(card=>card.service_status === "Assigned");
      const inProgressJobs = response.filter(card=>card.service_status === "In Progress");
      const assignedCardsWrapper = this.view.flxScrollContainer.flxPageContainer.flxMain.flxRightbar.flxAssignedWrapper;
      //debugger;
      const onGoingCardsWrapper = this.view.flxScrollContainer.flxPageContainer.flxMain.flxRightbar.flxOngoingWrapper;
      assignedJobs.forEach((card, index)=>{
        let jobCard = assignedCardsWrapper.jobCard.clone(`jobCard_${index}_`);
        jobCard[`jobCard_${index}_address`].text = card.address + " " + card.city;
        jobCard[`jobCard_${index}_cardName`].text = card.service_description;
        jobCard[`jobCard_${index}_labelAssigned`].text = card.service_status;
        jobCard[`jobCard_${index}_lblReqId`].text = card.sr_id;
        //Add concat of date & time mapping
        jobCard.setVisibility(true);
		assignedCardsWrapper.add(jobCard);
      });
      
      inProgressJobs.forEach((card, index)=>{
        let jobCard = onGoingCardsWrapper.jobCardOnGoing.clone(`jobCard_${index}_`);
        jobCard[`jobCard_${index}_addressOngoing`].text = card.address + " " + card.city;
        jobCard[`jobCard_${index}_cardNameOngoing`].text = card.service_description.substring(0,32);
        jobCard[`jobCard_${index}_labelOnGoing`].text = card.service_status;
        jobCard[`jobCard_${index}_lblReqIdOngoing`].text = card.sr_id;
        //Add concat of date & time mapping
		onGoingCardsWrapper.add(jobCard);
        jobCard.setVisibility(true);
      })
    }
  }

 });