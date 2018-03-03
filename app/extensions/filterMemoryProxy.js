Ext.define('TestGridApp.extensions.FilterMemoryProxy', {
    extend: 'Ext.data.proxy.Memory',
    alias: 'proxy.filtermemory',

    // createCustomFilterFn: function (filters)
    // {
    //     if (!filters) {
    //         return Ext.returnTrue;
    //     }
    //     return function (candidate)
    //     {
    //         var items = filters.isCollection ? filters.items : filters,
    //             length = items.length,
    //             i, filter;
    //         for (i = 0; i < length; i++) {
    //             filter = items[i];
    //             if (!filter.getDisabled() && candidate.get(filter.getProperty()).toLowerCase().indexOf(
    //                     filter.getValue().toLowerCase()) !== -1) {
    //                 return true;
    //             }
    //         }
    //         return false;
    //     };
    // },

    // read: function(operation) {
    //     var me = this,
    //         resultSet = me.getReader().read(me.getData()),
    //         records = resultSet.getRecords(),
    //         sorters = operation.getSorters(),
    //         grouper = operation.getGrouper(),
    //         filters = operation.getFilters(),
    //         start = operation.getStart(),
    //         limit = operation.getLimit(),
    //         meta;

    //     // Apply filters, sorters, and start/limit options 
    //     if (operation.process(resultSet, null, null, false) !== false) {
    //         // Filter the resulting array of records 
    //         if (filters && filters.length) {
    //             // Total will be updated by setting records
    //             resultSet.setRecords(records = Ext.Array.filter(records, me.createCustomFilterFn(filters)));
    //             resultSet.setTotal(records.length);
    //         }
 
    //         // Remotely, grouper just mean top priority sorters 
    //         if (grouper) {
    //             // Must concat so as not to mutate passed sorters array which could be the items property of the sorters collection 
    //             sorters = sorters ? sorters.concat(grouper) : sorters;
    //         }
 
    //         // Sort by the specified grouper and sorters 
    //         if (sorters && sorters.length) {
    //             resultSet.setRecords(records = Ext.Array.sort(records, Ext.util.Sortable.createComparator(sorters)));
    //         }
 
    //         // Reader reads the whole passed data object. 
    //         // If successful and we were given a start and limit, slice the result. 
    //         if (me.getEnablePaging() && start !== undefined && limit !== undefined) {
 
    //             // Attempt to read past end of memory dataset - convert to failure 
    //             if (start >= resultSet.getTotal()) {
    //                 resultSet.setConfig({
    //                     success: false,
    //                     records: [],
    //                     total: 0
    //                 });
    //             }
    //             // Range is valid, slice it up. 
    //             else {
    //                 resultSet.setRecords(Ext.Array.slice(records, start, start + limit));
    //             }
    //         }
    //         operation.setCompleted();
 
    //         // If a JsonReader detected metadata, process it now. 
    //         // This will fire the 'metachange' event which the Store processes to fire its own 'metachange' 
    //         if (meta = resultSet.getMetadata()) {
    //             me.onMetaChange(meta);
    //         }
    //     }
    // }
});