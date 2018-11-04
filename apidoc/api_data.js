define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/products/create",
    "title": "Create product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryMethod",
            "description": "<p>deliveryMethod of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vendor",
            "description": "<p>vendor of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Created successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\tproductID: \"string\",\n\t\t\t\t\tname: \"string\",\n\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\tviews: number,\n\t\t\t\t\tdeliveryMethod: \"string\",\n\t\t\t\t\tvendor: \"string\",\n\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/mykart.js",
    "groupTitle": "create",
    "name": "PostApiV1ProductsCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/products/:productID/delete",
    "title": "Delete product by productID",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productID",
            "description": "<p>productID of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"product Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/mykart.js",
    "groupTitle": "delete",
    "name": "PostApiV1ProductsProductidDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/products/:productID/delete",
    "title": "Delete product by productID",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productID",
            "description": "<p>productID of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"product Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/mykart.js",
    "groupTitle": "delete",
    "name": "PostApiV1ProductsProductidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/products/:productID/edit",
    "title": "Edit product by productID",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productID",
            "description": "<p>productID of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"product Edited Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\tproductID: \"string\",\n\t\t\t\t\tname: \"string\",\n\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\tviews: number,\n\t\t\t\t\tdeliveryMethod: \"string\",\n\t\t\t\t\tvendor: \"string\",\n\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/mykart.js",
    "groupTitle": "edit",
    "name": "PutApiV1ProductsProductidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/products/cart/:productID",
    "title": "Add products to cart",
    "version": "0.0.1",
    "group": "get",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productID",
            "description": "<p>productID of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Added successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\tproductID: \"string\",\n\t\t\t\t\tname: \"string\",\n\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\tviews: number,\n\t\t\t\t\tdeliveryMethod: \"string\",\n\t\t\t\t\tvendor: \"string\",\n\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/mykart.js",
    "groupTitle": "get",
    "name": "GetApiV1ProductsCartProductid"
  },
  {
    "type": "get",
    "url": "/api/v1/products/cart/all",
    "title": "Get all products in cart",
    "version": "0.0.1",
    "group": "read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All product details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tproductID: \"string\",\n\t\t\t\t\t\tname: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\tviews: number,\n\t\t\t\t\t\tdeliveryMethod: \"string\",\n\t\t\t\t\t\tvendor: \"string\",\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/mykart.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsCartAll"
  },
  {
    "type": "get",
    "url": "/api/v1/products/product/:productID",
    "title": "Get a single product",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productID",
            "description": "<p>The productID should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"product Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t\t\tproductID: \"string\",\n\t\t\t\t\tname: \"string\",\n\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\tviews: number,\n\t\t\t\t\tdeliveryMethod: \"string\",\n\t\t\t\t\tvendor: \"string\",\n\t\t\t\t\tcreated: \"date\",\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/mykart.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsProductProductid"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/all",
    "title": "Get all products",
    "version": "0.0.1",
    "group": "read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All product details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tproductID: \"string\",\n\t\t\t\t\t\tname: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\tviews: number,\n\t\t\t\t\t\tdeliveryMethod: \"string\",\n\t\t\t\t\t\tvendor: \"string\",\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/mykart.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsViewAll"
  }
] });
