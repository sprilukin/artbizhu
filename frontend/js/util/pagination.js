import settings from "../../../common/settings";

export default {
    getOffsetByPage: function(page) {
        page = page ? Number(page) : 0;

        return settings.pagination.limit * page;
    }
};