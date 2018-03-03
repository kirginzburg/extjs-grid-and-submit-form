/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('TestGridApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    init: function () {
        let store = Ext.create('TestGridApp.store.ProductsFromFile');
        store.load();
        store.on('load', function(obj, records) {
            let store = Ext.getStore('products');
            let data = records.map((x) => {
                return x.data;
            });

            store.proxy.setData(data);
            store.load();
        }, this);
    },

    onSearchQueryChange: function (field, newValue) {
        let store = Ext.getStore('products');
        store.clearFilter();

        let filterByValue = newValue.toLowerCase();

        store.filterBy(function (record) {
            return record.data.product_name.toLowerCase().indexOf(filterByValue) > -1 ||
                record.data.user_created.toLowerCase().indexOf(filterByValue) > -1;
        });
    },

    onItemSelected: function (sender, record) {
        let formPane = Ext.create({ xtype: 'editform' });
        let view = this.getView();

        formPane.loadRecord(record);

        // let form = formPane.getForm();
        // form.setValues(record.data);
        
        view.add(formPane);
        formPane.show();
    },

    onFormSubmit: function (arguments) {
        let view = this.getView();
        let form = view.child('editform');
        if (form.isValid()) {
            //form.submit();

            let record = form.getRecord();
            let values = form.getValues();
            record.set(values);
            record.commit();
            //let store = Ext.getStore('products');
            //store.set(record);
            //store.reload();
            //store.updateR
            this.goToList();
        }
    },

    onMainlistClick: function () {
        this.goToList();
    },

    goToList() {
        let view = this.getView();
        let form = view.child('editform');
        if (form) {
            view.remove(form);
        }

        //clear selection
        let grid = this.lookupReference('mainlist');
        if (grid) {
            grid.getSelectionModel().deselectAll();
        }
    }
});
