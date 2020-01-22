$(document).ready(function(){
  $("form#stress-form").submit(function(event){
    
    var userResponseP = []
    var userResponseN = []
    event.preventDefault();
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      
      var warningResponse = $(this).val();
      userResponseN.push(warningResponse);
      
    })
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      
      var healthResponse = $(this).val();
      userResponseN.push(healthResponse);
      
    })
    $("input:checkbox[name=coping-methods]:checked").each(function(){
      
      var copingMethods = $(this).val();
      userResponseP.push(copingMethods);
      
    })
    if(userResponseN.length >  userResponseP.length){
      $(".high-stress").show()
    }
    else if(userResponseN.length === userResponseP.length){
      $(".med-stress").show()
    }else {
      $(".low-stress").show();
    }
    
});
});