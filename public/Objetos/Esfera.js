
function EsferaGrid () {

	this.grilla = new VertexGrid(30,30);

	/*
		Este método crea los puntos que componen la esfera
	*/
	this.createUniformEsfera = function(){
		
		this.grilla.position_buffer = [];
		this.grilla.color_buffer = [];
		this.grilla.texture_coord_buffer = [];
		this.grilla.normal_buffer = [];
		this.grilla.biNormal_buffer = [];
        this.grilla.tangent_buffer = [];
        
        		
		var x=0.0;
		var y=0.0;
		var z=0.0;
		
		var v=-Math.PI/2;
		var u=0.0;
		
		
		for (var j=0;j<this.grilla.rows;j++){
			
			//define los saltos en altura
			for (var i=0;i<this.grilla.cols;i++){				
				//define el paso	
				          
				x =  Math.cos(v) * Math.cos(u);
				y =  Math.cos(v) * Math.sin(u);  									
				z =  Math.sin(v);

                var imgU = 1.0 - (i / this.grilla.cols);
                var imgV = 1.0 - (j / this.grilla.rows);

				this.grilla.texture_coord_buffer.push(imgU);
                this.grilla.texture_coord_buffer.push(imgV);

				this.grilla.normal_buffer.push(x);
				this.grilla.normal_buffer.push(y);
				this.grilla.normal_buffer.push(z);

				this.grilla.biNormal_buffer.push(1.0);
				this.grilla.biNormal_buffer.push(0.0);
				this.grilla.biNormal_buffer.push(0.0);
				
				this.grilla.tangent_buffer.push(0.0);
				this.grilla.tangent_buffer.push(1.0);
				this.grilla.tangent_buffer.push(0.0);


				//Todos los vertices siempre blanco
				this.grilla.color_buffer.push(1.0);
				this.grilla.color_buffer.push(1.0);
				this.grilla.color_buffer.push(1.0);

				this.grilla.position_buffer.push(x);								
				this.grilla.position_buffer.push(y);
				this.grilla.position_buffer.push(z);		
			
				u+=(2.07 *Math.PI)/this.grilla.cols;
			}
			v+=(1.05*Math.PI)/this.grilla.rows;
			u=0;
		}	
	}

	this.draw = function(modelMatrix){
		this.grilla.draw(modelMatrix);
	}              

	this.inicializar = function()
	{
		this.createUniformEsfera();
		this.grilla.createIndexBuffer();
		this.grilla.setupWebGLBuffers();
	}
	
	this.setTexture = function(_fileName){
		this.grilla.initTexture(_fileName);
	}
	
}
            
            
