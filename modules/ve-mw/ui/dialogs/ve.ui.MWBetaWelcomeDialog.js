/*!
 * VisualEditor user interface MWBetaWelcomeDialog class.
 *
 * @copyright 2011-2014 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/*global mw */

/**
 * Dialog for welcoming new users to VisualEditor.
 *
 * @class
 * @extends OO.ui.MessageDialog
 *
 * @constructor
 * @param {OO.ui.WindowManager} manager Manager of window
 * @param {Object} [config] Configuration options
 */
ve.ui.MWBetaWelcomeDialog = function VeUiMWBetaWelcomeDialog( manager, config ) {
	// Parent constructor
	ve.ui.MWBetaWelcomeDialog.super.call( this, manager, config );
};

/* Inheritance */

OO.inheritClass( ve.ui.MWBetaWelcomeDialog, OO.ui.MessageDialog );

/* Static Properties */

ve.ui.MWBetaWelcomeDialog.static.name = 'betaWelcome';

ve.ui.MWBetaWelcomeDialog.static.size = 'medium';

ve.ui.MWBetaWelcomeDialog.static.verbose = true;

ve.ui.MWBetaWelcomeDialog.static.icon = 'help';

ve.ui.MWBetaWelcomeDialog.static.actions = [
	{
		'label': OO.ui.deferMsg( 'visualeditor-dialog-beta-welcome-action-continue' ),
		'flags': 'primary'
	}
];

/**
 * @inheritdoc
 */
ve.ui.MWBetaWelcomeDialog.prototype.getSetupProcess = function ( data ) {
	// Provide default title and message
	data = $.extend( {
		'title': ve.msg( 'visualeditor-dialog-beta-welcome-title', mw.user ),
		'message': ve.msg( 'visualeditor-dialog-beta-welcome-content', $( '#ca-edit' ).text() )
	}, data );

	return ve.ui.MWBetaWelcomeDialog.super.prototype.getSetupProcess.call( this, data );
};

/* Registration */

ve.ui.windowFactory.register( ve.ui.MWBetaWelcomeDialog );
