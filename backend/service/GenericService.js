const settings = require("../../common/settings");

class GenericService {
    constructor(Entity) {
        this.Entity = Entity;
    }

    total(aggregation) {
        aggregation = aggregation || [];

        let total = [{
            $count: "total"
        }];

        return this.Entity.aggregate(aggregation.concat(total));
    }

    aggregate(aggregation, offset, limit) {
        aggregation = aggregation || [];

        let pagination = [{
            $skip: Number(offset) || 0
        }, {
            $limit: Number(limit) || settings.pagination.limit
        }];

        return this.Entity.aggregate(pagination.concat(aggregation));
    }

    list(aggregation, offset, limit) {
        return Promise.all([
            this.aggregate(aggregation, offset, limit),
            this.total(aggregation),
        ]).then(function(result) {
            return Promise.resolve({
                total: result[1][0].total,
                list: result[0]
            });
        });
    }

    findAll(aggregation, offset, limit) {
        return this.list(aggregation, offset, limit);
    }

    findById(id) {
        return this.Entity.findById(id).exec();
    }

    add(productJson) {
        return this.Entity.create(productJson);
    }

    updateById(id, productJson) {
        return this.Entity.findByIdAndUpdate(id, productJson);
    }

    deleteById(id) {
        return this.Entity.findByIdAndRemove(id);
    }

    deleteAll() {
        return this.Entity.remove({});
    }
}

module.exports = GenericService;
