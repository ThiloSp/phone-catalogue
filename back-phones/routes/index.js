var express = require("express");
var router = express.Router();

router.get("/phones", (req, res, next) => {
  res.send([
    {
      name: "Xiaomi Mi 8",
      id: 111,
      price: "600€",
      colours: "blue, black, white",
      weight: "0.66 lb",
      size: "6.4",
      rating: 8.2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      picture:
        "https://cdn1.smartprix.com/rx-iaYLnFDD8-w1200-h1200-q90/xiaomi-mi-8.jpg"
    },
    {
      name: "iPhone",
      id: 112,
      price: "800€",
      colours: "silver, black, white",
      weight: "0.78 lb",
      size: "5.1",
      rating: 7.7,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      picture: "https://www.t-mobile.nl/Consumer/media/images/shop/telefoons/toestelmerken/apple/iphone-8/black/dvi-front-back_Iphone_8Plus_Zwart_305x450.png"
    },
    {
      name: "Samsung Galaxy",
      id: 113,
      price: "300€",
      colours: "blue, black, white, pink",
      weight: "0.60 lb",
      size: "6.4",
      rating: 6.1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      picture:
        "https://cf1.s3.souqcdn.com/item/2017/03/29/22/34/46/83/item_XL_22344683_30264749.jpg"
    }
  ]);
});

module.exports = router;
