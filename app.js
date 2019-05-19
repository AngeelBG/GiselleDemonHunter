// función que permite poner visible o no una sección div, asi conseguimos que
// la tabla se oculte cuando inciamos partida
function ponerVisible(div, visible) {
	let
	estado = visible ? "block" : "none"; // block para que se vea, o none
											// para que no se vea
	div.css({
		"display" : estado
	});
}

$(function() {
    
	$("#btn-teaser").click(
			function() {
							
					ponerVisible($("#teaser"), true);
					ponerVisible($("#concept"), false);
					ponerVisible($("#personajes"), false);
					ponerVisible($("#descargas"), false);
					ponerVisible($("#myCarousel"), false);
					ponerVisible($("#mainpage"), false);
			
			})

	$("#volver-btn").click(
			function() {
							
					ponerVisible($("#concept"), false);
					ponerVisible($("#personajes"), false);
					ponerVisible($("#descargas"), false);
					ponerVisible($("#myCarousel"), true);
					ponerVisible($("#mainpage"), true);
			
			})
			
	$("#volver2-btn").click(
			function() {
							
					ponerVisible($("#concept"), false);
					ponerVisible($("#personajes"), false);
					ponerVisible($("#descargas"), false);
					ponerVisible($("#myCarousel"), true);
					ponerVisible($("#mainpage"), true);
			
			})
			
	$("#volver3-btn").click(
			function() {
							
					ponerVisible($("#concept"), false);
					ponerVisible($("#personajes"), false);
					ponerVisible($("#descargas"), false);
					ponerVisible($("#myCarousel"), true);
					ponerVisible($("#mainpage"), true);
			
			})	
			
	$("#volver-btn-teaser").click(
			function() {
					
					ponerVisible($("#teaser"), false);
					ponerVisible($("#concept"), false);
					ponerVisible($("#personajes"), false);
					ponerVisible($("#descargas"), false);
					ponerVisible($("#myCarousel"), true);
					ponerVisible($("#mainpage"), true);
			
			})
			
    $("#concept-btn").click(
			function() {
                    
					ponerVisible($("#myCarousel"), false);
                    ponerVisible($("#mainpage"), false);
					ponerVisible($("#personajes"), false);
					ponerVisible($("#descargas"), false);
					ponerVisible($("#concept"), true);
					
			})
				
	$("#personajes-btn").click(
			function() {
							
					ponerVisible($("#myCarousel"), false);
					ponerVisible($("#mainpage"), false);
					ponerVisible($("#concept"), false);
					ponerVisible($("#personajes"), true);
					ponerVisible($("#descargas"), false);
			
			})
			
	$("#descargas-btn").click(
			function() {
							
					ponerVisible($("#myCarousel"), false);
					ponerVisible($("#mainpage"), false);
					ponerVisible($("#concept"), false);
					ponerVisible($("#personajes"), false);
					ponerVisible($("#descargas"), true);
			
			})
	
	$('#myModal').on('shown.bs.modal', function () {
	  $('#myInput').trigger('focus')
	})

    
})