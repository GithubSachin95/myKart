
const controller = require('../controllers/mykart');
const appConfig = require('../config/appConfig');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const response = require('../libs/responseLibs');
let setRouter = (app)=>{
    let baseUrl = appConfig.apiVersion + '/products';
    app.get(baseUrl + '/view/all' ,  controller.getAllProducts);
    /**
	 * @api {get} /api/v1/products/view/all Get all products
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All product details Found",
	    "status": 200,
	    "data": [
					{
						productID: "string",
						name: "string",
						description: "string",
						views: number,
						deliveryMethod: "string",
						vendor: "string",
						created: "date",
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find product Details",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl + '/product/:productID' , controller.viewProductByID);
    /**
	 * @api {get} /api/v1/products/product/:productID Get a single product
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} productID The productID should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "product Found Successfully.",
	    "status": 200,
	    "data": {
	    			productID: "string",
					name: "string",
					description: "string",
					views: number,
					deliveryMethod: "string",
					vendor: "string",
					created: "date",
				}
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(baseUrl + '/create' ,urlencodedParser ,controller.createProduct);
    /**
	 * @api {post} /api/v1/products/create Create product
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} name name of the product passed as a body parameter
	 * @apiParam {String} description description of the product passed as a body parameter
	 * @apiParam {String} deliveryMethod deliveryMethod of the product passed as a body parameter
	 * @apiParam {String} vendor vendor of the product passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Created successfully",
	    "status": 200,
	    "data": [
					{
					productID: "string",
					name: "string",
					description: "string",
					views: number,
					deliveryMethod: "string",
					vendor: "string",
					created: "date",
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    app.put(baseUrl + "/:productID/edit" ,urlencodedParser, controller.editProduct);

    /**
	 * @api {put} /api/v1/products/:productID/edit Edit product by productID
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} productID productID of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "product Edited Successfully.",
	    "status": 200,
	    "data": [
					{
					productID: "string",
					name: "string",
					description: "string",
					views: number,
					deliveryMethod: "string",
					vendor: "string",
					created: "date",
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(baseUrl +'/:productID/delete' , urlencodedParser , controller.deleteProduct)
    /**
	 * @api {post} /api/v1/products/:productID/delete Delete product by productID
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} productID productID of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "product Deleted Successfully",
	    "status": 200,
	    "data": []
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */
    app.get(baseUrl + '/cart/all' , controller.getCart);
     /**
	 * @api {get} /api/v1/products/cart/all Get all products in cart
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All product details Found",
	    "status": 200,
	    "data": [
					{
						productID: "string",
						name: "string",
						description: "string",
						views: number,
						deliveryMethod: "string",
						vendor: "string",
						created: "date",
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find product Details",
	    "status": 500,
	    "data": null
	   }
	 */

    app.get(baseUrl + '/cart/:productID', controller.addProductCart);
     /**
	 * @api {get} /api/v1/products/cart/:productID Add products to cart
	 * @apiVersion 0.0.1
	 * @apiGroup get
	 *
	 * @apiParam {String} productID productID of the product passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Added successfully",
	    "status": 200,
	    "data": [
					{
					productID: "string",
					name: "string",
					description: "string",
					views: number,
					deliveryMethod: "string",
					vendor: "string",
					created: "date",
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(baseUrl + '/cart/:productID/delete' , urlencodedParser,  controller.removeProductCart);
    /**
	 * @api {post} /api/v1/products/:productID/delete Delete product by productID
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} productID productID of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "product Deleted Successfully",
	    "status": 200,
	    "data": []
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */
}

module.exports = {

    setRouter : setRouter,
}