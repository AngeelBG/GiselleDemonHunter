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
    

    $("#concept").click(
			function() {
                    
					ponerVisible($("#myCarousel"), false);
                    ponerVisible($("#mainpage"), false);
                    ponerVisible($("#concept"), true);
					//window.scrollTo(0, 0);
					$(window).scrollTop(0);
					
				})
				
	$("#personajes-btn").click(
			function() {
							
					ponerVisible($("#myCarousel"), false);
					ponerVisible($("#mainpage"), false);
					ponerVisible($("#concept"), false);
					ponerVisible($("#personajes"), true);
			
			})
	
	$('#myModal').on('shown.bs.modal', function () {
	  $('#myInput').trigger('focus')
	})

    
})