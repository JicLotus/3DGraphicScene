
function PataNave (){
	
	//El numero de filas 	
	var alturaPata = 0.5;
	patita = new CilindroGrid(0.03,alturaPata);
	patita.setColor(102,51,0);
	patita.inicializar();

	base = new CilindroGrid(0.15,0.05);
	base.setColor(255,255,255);
	base.inicializar();	


	var matrizPataNave = mat4.create();


	this.draw = function(matrizNaveEspacial){


		var desplazamientoHorizontal = Math.cos(Math.PI/4)*alturaPata;
		var desplazamientoVertical = Math.sin(Math.PI/4)*alturaPata;
		
		mat4.identity(matrizPataNave);

		mat4.translate(matrizPataNave, matrizNaveEspacial, [-desplazamientoHorizontal, 0.0, -desplazamientoVertical]);
		mat4.rotate(matrizPataNave, matrizPataNave, Math.PI/4, [0,1,0]);


		patita.draw(matrizPataNave);
		
		mat4.identity(matrizPataNave);
		mat4.translate(matrizPataNave, matrizNaveEspacial, [-desplazamientoHorizontal,0.0,-desplazamientoVertical-alturaPata/20]);
		base.draw(matrizPataNave);


	}              



	this.inicializar = function()
	{

	}

}
