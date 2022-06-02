$( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content",
      collapsible: true,
      icons: false,
      activate: function(event, ui) {
        a = ui;  
        console.log(ui);
      }
    });
  } );