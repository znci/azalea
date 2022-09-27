const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function build() {
	return src("src/**/*.scss")
		.pipe(sass())
		.pipe(dest("css"))
}

function watchTask() {
	watch(["src/**/*.scss"], build)
}

exports.default = series(build, watchTask);