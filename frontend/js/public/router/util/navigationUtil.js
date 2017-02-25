import url from "../../util/url";
import navigation from "../navigation";
import settings from "common/settings";

export default {
    getNavItemByPath: function(path) {
        let pathWithoutLastSlash = url.getPathWithoutLastSlash(path);

        let navItemName = Object.keys(navigation.all).find(function(nav) {
            return navigation.all[nav].uri === pathWithoutLastSlash;
        });

        return navigation.all[navItemName];
    },

    formatTitle: function(name) {
        return `${settings.store.name}: ${name}`;
    }
};