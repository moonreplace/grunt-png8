# grunt-png8

> Convert png32, png24 to png8, and reserve all alpha transparent

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-png8 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-png8');
```

## The "png8" task

### Overview
In your project's Gruntfile, add a section named `ls` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  png8: {
    options: {
      'ext': '-test.png' //As the converted ext name
    },
    filelist: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.ext
A string value that is used to as the output extend name.

### Usage Examples
```js
grunt.initConfig({
  png8: {
    options: {
      'ext': '-test.png' //As the converted ext name
    },
    filelist: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```
## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
