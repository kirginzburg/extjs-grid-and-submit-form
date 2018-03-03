Ext.define('TestGridApp.store.Products', {
    extend: 'Ext.data.Store',

    storeId: 'products',

    alias: 'store.products',

    model: 'TestGridApp.model.Products',

    pageSize: 5,
    autoLoad: true,
    remoteFilter: true,
    remoteSort: true,

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
        },
        enablePaging: true
    },


    //Hack for using filers with memory proxy
    //without it commented code from abstract store do not allow use filterFn
    onFilterEndUpdate: function () {
        var me = this,
            suppressNext = me.suppressNextFilter,
            filters = me.getFilters(false);

        // If the collection is not instantiated yet, it's because we are constructing.
        if (!filters) {
            return;
        }

        if (me.getRemoteFilter()) {
            //<debug>
            // me.getFilters().each(function(filter) {
            //     if (filter.getInitialConfig().filterFn) {
            //         Ext.raise('Unable to use a filtering function in conjunction with remote filtering.');
            //     }
            // });
            //</debug>
            me.currentPage = 1;
            if (!suppressNext) {
                me.load();
            }
        } else if (!suppressNext) {
            me.fireEvent('datachanged', me);
            me.fireEvent('refresh', me);
        }

        if (me.trackStateChanges) {
            // We just mutated the filter collection so let's save stateful filters from this point forward.
            me.saveStatefulFilters = true;
        }

        // This is not affected by suppressEvent.
        me.fireEvent('filterchange', me, me.getFilters().getRange());
    },
});
