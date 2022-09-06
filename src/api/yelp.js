import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer mlotp3GIFZf-YmgzjOfCbILsGVKnmZdNSTfH7mK0Ii4W6wGyTUrsWOhnLFRZeIVCdCpYFuRndXvtgqRQBVNqLt0svTBWwy5mnPANLuUl8IZeiFT_06_sXeTSEGUUY3Yx",
  },
});

// yelp.get("/search");
// Client ID
// e4x-mmNiFcLRkDy0HdyXgg

// API Key
// mlotp3GIFZf-YmgzjOfCbILsGVKnmZdNSTfH7mK0Ii4W6wGyTUrsWOhnLFRZeIVCdCpYFuRndXvtgqRQBVNqLt0svTBWwy5mnPANLuUl8IZeiFT_06_sXeTSEGUUY3Yx
