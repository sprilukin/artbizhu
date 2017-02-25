const settings = require("../../common/settings");

module.exports = {
    create: function(Entity) {
        return {
            findAll: function(aggregation, offset, limit) {
                aggregation = aggregation || [];

                let pagination = [
                    {
                        $skip: Number(offset) || 0
                    },
                    {
                        $limit: Number(limit) || settings.pagination.limit
                    }
                ];

                return Entity.aggregate(pagination.concat(aggregation));
            },

            findById: function(id) {
                return Entity.findById(id).exec();
            },

            add: function(productJson) {
                return Entity.create(productJson);
            },

            updateById: function(id, productJson) {
                return Entity.findByIdAndUpdate(id, productJson);
            },

            deleteById: function(id) {
                return Entity.findByIdAndRemove(id);
            },

            deleteAll: function() {
                return Entity.remove({});
            }
        };
    }
};
