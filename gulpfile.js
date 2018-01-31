/**/
var gulp=require('gulp');
var path=require('path');
var open=require('open');
var less=require('gulp-less');
var gulpOpen=require('gulp-open');
var connect=require('gulp-connect');
var webserver=require('gulp-webserver');
var gulp_webpack=require('gulp-webpack');
var webpack=require('webpack');
var webpack_config=require('./webpack.config.js');
var webpackDevServer=require('webpack-dev-server');


var host={
	path:'src',
	port:8099,
	html:'index.html'
}
 

 // connect启动服务器
// gulp.task('server',function(){
// 	connect.server();
// });

// gulp.task('server',function(){
// 	connect.server({
// 		// root:host.path,
// 		port:host.port,
// 		livereload:true,
// 	});
// });

// webserver启动服务器
// gulp.task('webserver',function(){
// 	gulp.src('')
// 		.pipe(webserver({
// 			livereload:true,
// 			port:host.port,
// 			open:true
// 		}))
// })


gulp.task('dev',function(){
	var compiler=webpack(webpack_config);
	new webpackDevServer(compiler,{
		stats:{color:true},
		historyApiFallback:true,
		inline:true,
		lazy:false,
	}).listen(host.port,'localhost',function(){
		open('http://localhost:'+host.port);
	});
})

// gulp.task('connect', function () {
//     console.log('connect------------');
//     connect.server({
//         // root: host.path,
//         port: host.port,
//         livereload: true
//     });
// });

gulp.task('open', function (done) {
    gulp.src('')
        .pipe(gulpOpen({
            uri: 'http://localhost:8098'
        }))
        .on('end', done);
});

// gulp.task('copy-index',function(){
// 	return gulp.src('src/index.html')
// 			.pipe(gulp.dest('build'))
// 			.pipe(connect.reload());
// });

// gulp.task('copy-app',function(){
// 	return gulp.src('src/app/**')
// 			.pipe(gulp.dest('build/src/app'));
// });

// gulp.task('copy-image',function(){
// 	return gulp.src('src/image/**')
// 			.pipe(gulp.dest('build/src/image'));
// });

// gulp.task('lessmin',function(){
// 	return gulp.src(['src/less/*.less'])
// 			.pipe(less())
// 			.pipe(gulp.dest('src/css'));
// })

//生成js文件
// gulp.task('build-js',function(){
// 	gulp_webpack(webpack_config,webpack)
// 		.pipe(gulp.dest('./build/js'))
// });

// 读取config
// gulp.task('config',function(){
// 	var fs=require('fs');
// 	var root='./src/js/';
// 	var config={};
// 	var dirObj=fs.readdirSync(root);

// 	dirObj.forEach(function(d){
// 		// 也代表了我们的入口节点                        
// 		config[d]=root+d;
// 	})
// 	webpack_config.entry=config;
// 	console.log(config);
// })

// 最终生成
// gulp.task('run',['config'],function(){
// 	webpack(webpack_config,function(error,status){
// 		//这里需要gulp处理过程
// 	})
// })

// gulp.task('watch',function(){
// 	gulp.watch('src/less/*.less',['lessmin','copy-index']);
// 	gulp.watch('src/js/*.js',['run','copy-index']);
// 	gulp.watch('src/image/**',['copy-image','copy-index']);
// 	gulp.watch('src/index.html',['copy-index']);
// 	gulp.watch('src/app/**',['copy-app','copy-index']);
// })

// gulp .task('concat',function(){
// 	var fs=require('fs');
// 	var root='./src/test';
// 	var dirobj=fs.readdirSync(root);//查找root下的文件夹
//
// 	dirobj.forEach(function(d){
// 		return gulp.src(path.join(root,d)+'/**')
// 				.pipe(concat(d+'.css'))
// 				.pipe(gulp.dest('./build/src/test/'+d+'/'))
// 	})
// })

gulp.task('default',['dev']);