module.exports = function(grunt){
	[
		'grunt-cafe-mocha',
		'grunt-contrib-jshint',
		'grunt-exec',
		'grunt-link-checker'
	].forEach(function(task){
		grunt.loadNpmTasks(task);
	});
	
	
	grunt.initConfig({
		cafemocha:{
			all:{src:'qa/test-*.js',option:{ui:'tdd'},}
			},
			jshint:{
				app:['meadowlark.js','public/js/**/*.js','lib/**/*.js'],
				qa:['Gruntfile.js','public/qa/**/*.js','qa/**/*.js'],
			},
			
			//暂时无法使用  linkchecker
			exec:{
				linkchecker:{  cmd:'linkchecker http://localhost:3000'  }
			},
			
	});
			grunt.registerTask('default',['cafemocha','jshint','exec']);
			
		
	
};