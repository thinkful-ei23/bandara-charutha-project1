/* global $ cuid */
//eslint-disable-next-line no-unused-vars
const item = (function() {
    const validateNewBookmark = function(name) {
        if (!name) throw new TypeError('Please enter name');
    };

    const create = function(name, url, info, rating) {
        const rating = Number(rating);
        return {
            title: name,
            url: url,
            info: info,
            starRating: starRating,
            expanded: false
        };
    };
    
    return {
        validateNewBookmark, create,
    };
}());