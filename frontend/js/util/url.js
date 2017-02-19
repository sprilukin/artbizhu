import queryString from "query-string";

export default {
    toUrl: function(path, queryParams) {
        let query = queryParams ? `?${queryString.stringify(queryParams)}` : "";

        return `${path}${query}`;
    },
    getPathWithoutLastSlash: function(path) {
        if (path && path.length > 1 && path.lastIndexOf("/") === path.length - 1) {
            return path.substring(0, path.length - 1);
        } else {
            return path;
        }
    }
};