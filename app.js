/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'TestGridApp.Application',

    name: 'TestGridApp',

    requires: [
        // This will automatically load all classes in the TestGridApp namespace
        // so that application classes do not need to require each other.
        'TestGridApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'TestGridApp.view.main.Main'
});
