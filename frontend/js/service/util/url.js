import queryString from "query-string";

export default {
    toUrl: function(path, queryParams) {
        let query = queryParams ? `?${queryString.stringify(queryParams)}` : "";

        return `${path}${query}`;
    }
};