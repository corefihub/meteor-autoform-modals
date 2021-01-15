Package.describe({
    name: 'corefihub:autoform-modals',
    summary: "Create, update and delete collections with modals",
    version: "0.5.1",
    git: "https://github.com/corefihub/meteor-autoform-modals",
});

Package.onUse(function (api) {
    api.versionsFrom('1.12.1');

    api.use([
        // 'ecmascript',
        'blaze-html-templates@1.1.2',
        'less@3.0.1',
        'session',
        'coffeescript@2.4.1',
        // 'underscore',
        // 'ui',
        'aldeed:autoform@6.3.0',
        'raix:handlebar-helpers@0.2.5', // TODO remove this unmaintained package!!
        'mpowaga:string-template@0.1.0', // TODO remove this package!! makes use of "eval"!!!
    ], 'client');

    api.addFiles([
        'lib/client/modals.html',
        'lib/client/modals.less',
        'lib/client/modals.coffee',
    ], 'client');
});
