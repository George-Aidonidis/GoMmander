const webpack = require('webpack');
const	config = require('../webpack.config');

delete config.gommanderSettings;

webpack(
	config,
	err => {
		if (err) {
			throw err;
		}
	}
);
