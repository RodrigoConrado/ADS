angular.module("Eventos").controller("EventosController", function($scope){
	

	$scope.eventos = [
		{
			
			img: "http://www.zeronave.com/attachments/a39c50677376dd146658c2dab7b449a6c336f7a8/store/fedecab39799be2c1b7874e509535e7ff3224201b48c1faca9c98ca9071e/poster_image.jpg"
		},
		{
			img: "http://www.zeronave.com/attachments/a39c50677376dd146658c2dab7b449a6c336f7a8/store/fedecab39799be2c1b7874e509535e7ff3224201b48c1faca9c98ca9071e/poster_image.jpg"


		},
		{
			img: "http://www.zeronave.com/attachments/a39c50677376dd146658c2dab7b449a6c336f7a8/store/fedecab39799be2c1b7874e509535e7ff3224201b48c1faca9c98ca9071e/poster_image.jpg"
		},
		{
			img: "http://www.zeronave.com/attachments/a39c50677376dd146658c2dab7b449a6c336f7a8/store/fedecab39799be2c1b7874e509535e7ff3224201b48c1faca9c98ca9071e/poster_image.jpg"
		},
		{
			img: "http://www.zeronave.com/attachments/a39c50677376dd146658c2dab7b449a6c336f7a8/store/fedecab39799be2c1b7874e509535e7ff3224201b48c1faca9c98ca9071e/poster_image.jpg"

		},
		{
			img: "http://www.zeronave.com/attachments/a39c50677376dd146658c2dab7b449a6c336f7a8/store/fedecab39799be2c1b7874e509535e7ff3224201b48c1faca9c98ca9071e/poster_image.jpg"

		},
		{
			img: "http://www.zeronave.com/attachments/a39c50677376dd146658c2dab7b449a6c336f7a8/store/fedecab39799be2c1b7874e509535e7ff3224201b48c1faca9c98ca9071e/poster_image.jpg"

		},
		{
			img: "http://www.zeronave.com/attachments/a39c50677376dd146658c2dab7b449a6c336f7a8/store/fedecab39799be2c1b7874e509535e7ff3224201b48c1faca9c98ca9071e/poster_image.jpg"
			
		}
		
	];

	$scope.novoEvento = {};

	

	$scope.adicionarEvento = function(){
		var evento = angular.copy($scope.novoEvento);
		
		$scope.eventos.push(evento);

		$scope.novoEvento = {};
	}
});