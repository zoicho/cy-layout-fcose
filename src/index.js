import fcose from './fcose/index.js';

// registers the extension on a cytoscape lib ref
let register = function( cytoscape ){
  if( !cytoscape ){ return; } // can't register if cytoscape unspecified

  cytoscape( 'layout', 'fcose', fcose ); // register with cytoscape.js
};

export default register;
