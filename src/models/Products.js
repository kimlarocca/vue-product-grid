export class Product {
    constructor(product_obj) {
        this.name = product_obj.masterData.current.name.en || "";
        this.image_url = this.parseImageURL(product_obj);
        this.description = product_obj.masterData.current.description.en || "";
        this.price = this.parsePrice(product_obj);
        this.badge = this.parseBadge(product_obj);
    }

    parseImageURL(product_obj = {}) {
        let images_obj_arr = product_obj.masterData.current.masterVariant.images || [],
            image_url = (images_obj_arr.length && ('url' in images_obj_arr[0])) ? images_obj_arr[0].url : 'https://1b0bbb9e89b4713adcc7-aea4cee2cb18344b328e3a03eff3ec4f.ssl.cf1.rackcdn.com/ece4edb2868a8225.cro-U2aFaCJE.jpg';
        return image_url;
        //with more time, we can add in support for multiple images
    }

    parsePrice(product_obj = {}) {
        let price_arr = product_obj.masterData.current.masterVariant.prices || [],
            price = (price_arr[0] && ('centAmount' in price_arr[0].value)) ? price_arr[0].value.centAmount : '';
        return price / 100;
        //probably should do more checks on this instead of just dividing by 100, but ran out of time
    }

    parseBadge(product_obj = {}) {
        let badge_arr = product_obj.masterData.current.masterVariant.attributes || [],
            badge = (badge_arr[1] && (badge_arr[1].value)) ? badge_arr[1].value : false;
        return badge;
    }
}