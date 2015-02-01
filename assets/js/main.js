$(function(){
	//initialize date field
    $('#transactionDate').datetimepicker({
    	defaultDate: moment(),
        locale: 'en-ca'
    });

	$(document).on('submit', '#add-transaction', function() {
		event.preventDefault();
	  $.ajax({url: '/Transaction',
	    data: $('#add-transaction').serializeArray(),
	    type: 'post',                  
	    async: 'true',
	    dataType: 'json',
	    beforeSend: function() {
	    },
	    complete: function() {
	    },
	    success: function (result) {
	      if(result.createdAt) {
	        console.log('it worked!')                       
	      } else {
	        console.log('it didn\'t work!');
	      }
	    },
	    error: function (request,error) {
	      // This callback function will trigger on unsuccessful action               
	      console.log('Network error has occurred please try again!');
	    }
	  }); 
	  return false;
	});

});

