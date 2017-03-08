import url from "uicommon/util/url";
import settings from "common/settings";

export default {
    getNavItemByPath: function(path, navigation) {
        let pathWithoutLastSlash = url.getPathWithoutLastSlash(path);

        let navItemName = Object.keys(navigation).find(function(nav) {
            return navigation[nav].uri === pathWithoutLastSlash;
        });

        return navigation[navItemName];
    },

    formatTitle: function(name) {
        return `${settings.store.name}: ${name}`;
    }
};