// Tab navigation widget
$( function() {
  $( "#tabs" ).tabs();
  $( "#tabs2" ).tabs();
} );

$( function() {
  $( "#vtabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
  $( "#vtabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
} );

$( function() {
  $( "#accordion" ).accordion({
    heightStyle: "content",
    collapsible: true,
    active: 0
  });
} );
