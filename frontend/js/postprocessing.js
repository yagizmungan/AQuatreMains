var Postprocessing = function() {
	var composer;

	var init = function() {
		// if ( App.getVrCanWork() === true ) {
		// 	composer = new THREE.EffectComposer( App.getVREffect() );
		// }
		// else{
			composer = new THREE.EffectComposer(App.getRenderer());
		// }
		composer.setSize(window.innerWidth, window.innerHeight);

		var renderPass = new THREE.RenderPass(App.getScene(), App.getCamera());
		composer.addPass(renderPass);

		// composer.addPass(somePass);

		var effectCopy = new THREE.ShaderPass(THREE.CopyShader);
		effectCopy.renderToScreen = true;
		
		composer.addPass(effectCopy);					
	};

	var getComposer = function() {
		return composer;
	};

	var update = function () {
	};

	
	// public methods
	return{
		init: init,
		getComposer: getComposer,
		update: update
	}
}();