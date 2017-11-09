module.exports = (neutrino, options = {}) => {
	neutrino.config.entry('index').add(path.join(neutrino.options.source, 'index.tsx'));
	neutrino.config.resolve.extensions.add('.ts').add('.tsx');
	neutrino.config.module
		.rule('typescript')
		.test(/\.tsx?$/)
			.use('awesome-typescript-loader')
				.loader('awesome-typescript-loader?silent=true');
	neutrino.config.module
		.rule('tslint')
		.test(/\.tsx?$/)
		.enforce('pre')
			.use('tslint')
				.loader('tslint-loader');
};
