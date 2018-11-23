System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "aurelia.js": [
      "github:systemjs/plugin-text@0.0.4",
      "github:systemjs/plugin-text@0.0.4/text",
      "npm:aurelia-templating-binding@1.5.2",
      "npm:aurelia-templating-binding@1.5.2/aurelia-templating-binding",
      "npm:aurelia-logging@1.5.0",
      "npm:aurelia-binding@2.1.6",
      "npm:aurelia-templating@1.10.1",
      "npm:aurelia-logging@1.5.0/aurelia-logging",
      "npm:aurelia-binding@2.1.6/aurelia-binding",
      "npm:aurelia-templating@1.10.1/aurelia-templating",
      "npm:aurelia-pal@1.8.0",
      "npm:aurelia-task-queue@1.3.1",
      "npm:aurelia-metadata@1.0.4",
      "npm:aurelia-loader@1.0.0",
      "npm:aurelia-path@1.1.1",
      "npm:aurelia-dependency-injection@1.4.1",
      "npm:aurelia-pal@1.8.0/aurelia-pal",
      "npm:aurelia-task-queue@1.3.1/aurelia-task-queue",
      "npm:aurelia-metadata@1.0.4/aurelia-metadata",
      "npm:aurelia-loader@1.0.0/aurelia-loader",
      "npm:aurelia-path@1.1.1/aurelia-path",
      "npm:aurelia-dependency-injection@1.4.1/aurelia-dependency-injection",
      "npm:aurelia-logging-console@1.0.0",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console",
      "npm:aurelia-history-browser@1.2.0",
      "npm:aurelia-history-browser@1.2.0/aurelia-history-browser",
      "npm:aurelia-history@1.1.0",
      "npm:aurelia-history@1.1.0/aurelia-history",
      "npm:aurelia-templating-router@1.3.3",
      "npm:aurelia-templating-router@1.3.3/aurelia-templating-router",
      "npm:aurelia-templating-router@1.3.3/router-view",
      "npm:aurelia-templating-router@1.3.3/route-href",
      "npm:aurelia-router@1.6.3",
      "npm:aurelia-templating-router@1.3.3/route-loader",
      "npm:aurelia-router@1.6.3/aurelia-router",
      "npm:aurelia-event-aggregator@1.0.1",
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator",
      "npm:aurelia-route-recognizer@1.3.1",
      "npm:aurelia-route-recognizer@1.3.1/aurelia-route-recognizer",
      "npm:aurelia-templating-resources@1.7.1",
      "npm:aurelia-templating-resources@1.7.1/aurelia-templating-resources",
      "npm:aurelia-templating-resources@1.7.1/html-sanitizer",
      "npm:aurelia-templating-resources@1.7.1/abstract-repeater",
      "npm:aurelia-templating-resources@1.7.1/null-repeat-strategy",
      "npm:aurelia-templating-resources@1.7.1/analyze-view-factory",
      "npm:aurelia-templating-resources@1.7.1/compose",
      "npm:aurelia-templating-resources@1.7.1/with",
      "npm:aurelia-templating-resources@1.7.1/replaceable",
      "npm:aurelia-templating-resources@1.7.1/focus",
      "npm:aurelia-templating-resources@1.7.1/css-resource",
      "npm:aurelia-templating-resources@1.7.1/attr-binding-behavior",
      "npm:aurelia-templating-resources@1.7.1/binding-mode-behaviors",
      "npm:aurelia-templating-resources@1.7.1/throttle-binding-behavior",
      "npm:aurelia-templating-resources@1.7.1/debounce-binding-behavior",
      "npm:aurelia-templating-resources@1.7.1/self-binding-behavior",
      "npm:aurelia-templating-resources@1.7.1/binding-signaler",
      "npm:aurelia-templating-resources@1.7.1/update-trigger-binding-behavior",
      "npm:aurelia-templating-resources@1.7.1/repeat-utilities",
      "npm:aurelia-templating-resources@1.7.1/aurelia-hide-style",
      "npm:aurelia-templating-resources@1.7.1/if",
      "npm:aurelia-templating-resources@1.7.1/else",
      "npm:aurelia-templating-resources@1.7.1/repeat",
      "npm:aurelia-templating-resources@1.7.1/show",
      "npm:aurelia-templating-resources@1.7.1/hide",
      "npm:aurelia-templating-resources@1.7.1/sanitize-html",
      "npm:aurelia-templating-resources@1.7.1/signal-binding-behavior",
      "npm:aurelia-templating-resources@1.7.1/repeat-strategy-locator",
      "npm:aurelia-templating-resources@1.7.1/html-resource-plugin",
      "npm:aurelia-templating-resources@1.7.1/array-repeat-strategy",
      "npm:aurelia-templating-resources@1.7.1/map-repeat-strategy",
      "npm:aurelia-templating-resources@1.7.1/set-repeat-strategy",
      "npm:aurelia-templating-resources@1.7.1/number-repeat-strategy",
      "npm:aurelia-templating-resources@1.7.1/if-core",
      "npm:aurelia-templating-resources@1.7.1/dynamic-element",
      "npm:aurelia-loader-default@1.0.4",
      "npm:aurelia-loader-default@1.0.4/aurelia-loader-default",
      "npm:aurelia-bootstrapper@2.3.0",
      "npm:aurelia-bootstrapper@2.3.0/aurelia-bootstrapper",
      "npm:aurelia-polyfills@1.3.0",
      "npm:aurelia-polyfills@1.3.0/aurelia-polyfills",
      "npm:aurelia-framework@1.3.0",
      "npm:aurelia-framework@1.3.0/aurelia-framework"
    ]
  },

  map: {
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.3.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.6.0",
    "aurelia-framework": "npm:aurelia-framework@1.3.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.2.0",
    "aurelia-http-client": "npm:aurelia-http-client@1.3.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.4",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.8.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.5.2",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.7.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.3.3",
    "core-js": "npm:core-js@2.0.3",
    "gulp-util": "npm:gulp-util@3.0.8",
    "jquery": "npm:jquery@3.3.1",
    "mathjs": "npm:mathjs@5.2.3",
    "text": "github:systemjs/plugin-text@0.0.4",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.2.1"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:ansi-gray@0.1.1": {
      "ansi-wrap": "npm:ansi-wrap@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-binding@2.1.6": {
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.1"
    },
    "npm:aurelia-bootstrapper@2.3.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.3.0",
      "aurelia-history": "npm:aurelia-history@1.1.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.2.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.4",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.8.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.3.0",
      "aurelia-router": "npm:aurelia-router@1.6.3",
      "aurelia-templating": "npm:aurelia-templating@1.10.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.5.2",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.7.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.3.3"
    },
    "npm:aurelia-dependency-injection@1.4.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.5.0"
    },
    "npm:aurelia-fetch-client@1.6.0": {
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-framework@1.3.0": {
      "aurelia-binding": "npm:aurelia-binding@2.1.6",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.1",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-history-browser@1.2.0": {
      "aurelia-history": "npm:aurelia-history@1.1.0",
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-http-client@1.3.0": {
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-loader-default@1.0.4": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.5.0"
    },
    "npm:aurelia-metadata@1.0.4": {
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-pal-browser@1.8.0": {
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-polyfills@1.3.0": {
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-route-recognizer@1.3.1": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.6.3": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.1.0",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.3.1"
    },
    "npm:aurelia-task-queue@1.3.1": {
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-templating-binding@1.5.2": {
      "aurelia-binding": "npm:aurelia-binding@2.1.6",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-templating-resources@1.7.1": {
      "aurelia-binding": "npm:aurelia-binding@2.1.6",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.1",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-templating-router@1.3.3": {
      "aurelia-binding": "npm:aurelia-binding@2.1.6",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.6.3",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-templating@1.10.1": {
      "aurelia-binding": "npm:aurelia-binding@2.1.6",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.1"
    },
    "npm:beeper@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.2.1": {
      "base64-js": "npm:base64-js@1.3.0",
      "ieee754": "npm:ieee754@1.1.12"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:clone-stats@0.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:clone@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:color-support@1.1.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@2.0.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:duplexer2@0.0.2": {
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:fancy-log@1.3.2": {
      "ansi-gray": "npm:ansi-gray@0.1.1",
      "color-support": "npm:color-support@1.1.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "time-stamp": "npm:time-stamp@1.1.0"
    },
    "npm:glogg@1.0.1": {
      "sparkles": "npm:sparkles@1.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:gulp-util@3.0.8": {
      "array-differ": "npm:array-differ@1.0.0",
      "array-uniq": "npm:array-uniq@1.0.3",
      "beeper": "npm:beeper@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "chalk": "npm:chalk@1.1.3",
      "dateformat": "npm:dateformat@2.2.0",
      "fancy-log": "npm:fancy-log@1.3.2",
      "gulplog": "npm:gulplog@1.0.0",
      "has-gulplog": "npm:has-gulplog@0.1.0",
      "lodash._reescape": "npm:lodash._reescape@3.0.0",
      "lodash._reevaluate": "npm:lodash._reevaluate@3.0.0",
      "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
      "lodash.template": "npm:lodash.template@3.6.2",
      "minimist": "npm:minimist@1.2.0",
      "multipipe": "npm:multipipe@0.1.2",
      "object-assign": "npm:object-assign@3.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "replace-ext": "npm:replace-ext@0.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "through2": "npm:through2@2.0.5",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vinyl": "npm:vinyl@0.5.3"
    },
    "npm:gulplog@1.0.0": {
      "glogg": "npm:glogg@1.0.1"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:has-gulplog@0.1.0": {
      "sparkles": "npm:sparkles@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.3": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash._basetostring@3.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.escape@3.2.0": {
      "lodash._root": "npm:lodash._root@3.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.keys@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.1.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.template@3.6.2": {
      "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
      "lodash._basetostring": "npm:lodash._basetostring@3.0.1",
      "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
      "lodash.escape": "npm:lodash.escape@3.2.0",
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "lodash.restparam": "npm:lodash.restparam@3.6.1",
      "lodash.templatesettings": "npm:lodash.templatesettings@3.1.1"
    },
    "npm:lodash.templatesettings@3.1.1": {
      "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
      "lodash.escape": "npm:lodash.escape@3.2.0"
    },
    "npm:mathjs@5.2.3": {
      "complex.js": "npm:complex.js@2.0.11",
      "decimal.js": "npm:decimal.js@10.0.1",
      "escape-latex": "npm:escape-latex@1.2.0",
      "fraction.js": "npm:fraction.js@4.0.10",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "javascript-natural-sort": "npm:javascript-natural-sort@0.7.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readline": "github:jspm/nodelibs-readline@0.1.0",
      "repl": "github:jspm/nodelibs-repl@0.1.0",
      "seed-random": "npm:seed-random@2.2.0",
      "tiny-emitter": "npm:tiny-emitter@2.0.2",
      "typed-function": "npm:typed-function@1.1.0"
    },
    "npm:multipipe@0.1.2": {
      "duplexer2": "npm:duplexer2@0.0.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.3.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@2.0.0",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "npm:string_decoder@1.1.1",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:replace-ext@0.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:safe-buffer@5.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:sparkles@1.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:string_decoder@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:through2@2.0.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.6",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:typed-function@1.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vinyl@0.5.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "clone": "npm:clone@1.0.4",
      "clone-stats": "npm:clone-stats@0.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "replace-ext": "npm:replace-ext@0.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
