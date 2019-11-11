import { src, dest, series, watch } from "gulp";
import sourceMapsPlugin from "gulp-sourcemaps";
import babelPlugin from "gulp-babel";
import eslintPlugin from "gulp-eslint";
import plumberPlugin from "gulp-plumber";
import mochaPlugin from "gulp-mocha";
import nodemonPlugin from "gulp-nodemon";
import del from "del";
import path from "path";

const paths = {
  js: ["src/**/*.js"],
  tests: "./src/test/**/*.test.js"
};

// lint
export function lint() {
  return src(paths.js)
    .pipe(eslintPlugin())
    .pipe(eslintPlugin.format())
    .pipe(eslintPlugin.failAfterError());
}

// clean
export function clean() {
  return del(["./dist/**"]);
}

export function babel() {
  return src(paths.js)
    .pipe(sourceMapsPlugin.init())
    .pipe(babelPlugin())
    .pipe(
      sourceMapsPlugin.mapSources(sourcePath => {
        return `../src/${sourcePath}`;
      })
    )
    .pipe(sourceMapsPlugin.write("."))
    .pipe(dest("dist"));
}

export function mocha(done) {
  return src(paths.tests, {
    read: false
  })
    .pipe(
      plumberPlugin({
        // eslint-disable-next-line func-names
        errorHandler(error) {
          console.log(error.message);
          this.emit("end");
        }
      })
    )
    .pipe(
      mochaPlugin({
        reporter: "spec",
        ui: "bdd",
        timeout: 2000,
        require: ["@babel/register"],
        exit: true
      })
    )
    .once("end", () => {
      done();
    });
}

export function testWatch() {
  return watch(paths.js, series(clean, lint, babel, mocha));
}

// Start server with restart on file change events
export function nodemonDev() {
  nodemonPlugin({
    exec: "node-inspector & node --inspect",
    script: path.join("dist", "index.js"),
    ext: "js",
    ignore: ["node_modules/**/*.js", "dist/**/*.js"],
    tasks: ["build"],
    verbose: true
  });
}

export const build = series(clean, lint, babel);
export const test = series(clean, lint, babel, mocha);
export const start = series(lint, clean, babel, nodemonDev);
