$( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content",
      collapsible: true,
      icons: false,
      beforeActivate: function(event, ui) {
        a = ui;  
        console.log(ui);
        
        ui.oldHeader.parent().next().removeClass('faq__tophighlight');
        ui.oldHeader.parent().removeClass('faq__tophighlight');

        ui.newHeader.parent().next().addClass('faq__tophighlight');
        ui.newHeader.parent().addClass('faq__tophighlight');
      }
    });
  } );