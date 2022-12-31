

var categories = [];
var products = [];
var offers = [];
//-----------------------------CATEGORY CLASS--------------------------------------

class Category {

    constructor() {
        this.name = undefined;
        this.description = undefined;
    }

    //add category
    addCategory(name, description) {
        let newRecord = {
            name: name,
            description: description
        };
        categories.push(newRecord);

    }

    //delete category
    deleteCategory(name) {
        var index = -1;
        categories.forEach(i => {
            index++;
            if (name === i.name) {
                categories.splice(index, 1);
            }
        });
    }
}

//----------------------------------------PRODUCT CLASS-----------------------------------------

class Product {
    constructor() {
        this.name = undefined;
        this.code = undefined;
        this.specifications = undefined;
        this.description = undefined;
        this.price = undefined;
        this.category = undefined;
    }

    //add new product
    addProduct(name, code, specifications, description, price, category) {
        let newRecord = {
            name: name,
            code: code,
            specifications: specifications,
            description: description,
            price: price,
            category: category
        };
        products.push(newRecord);
    }

    //delete product
    deleteProduct(name) {
        var index = -1;
        products.forEach(i => {
            index++;
            if (name === i.name) {
                products.splice(index, 1);
            }
        });
    }
}


//--------------------------------------------OFFER CLASS----------------------------------------------

class Offer {
    constructor() {
        this.offerName = undefined;
        this.creationDate = undefined;
        this.productNameOrCode = undefined;
        this.discount = undefined;
        this.description = undefined;
        this.startDate = undefined;
        this.endDate = undefined;
    }

    //add new offer

    addOffer(offerName, creationDate, productNameOrCode, discount, description, startDate, endDate) {
        let newRecord = {
            offerName: offerName,
            creationDate: creationDate,
            productNameOrCode: productNameOrCode,
            discount: discount,
            description: description,
            startDate: startDate,
            endDate: endDate
        };
        offers.push(newRecord);
    }

    //delete offer
    deleteOffer(name) {
        var index = -1;
        offers.forEach(i => {
            index++;
            if (name === i.offerName) {
                offers.splice(index, 1);
            }
        });
    }
}



//************************************************************************************************************ */
//************************************************************************************************************ */
//************************************************************************************************************ */



$(document).ready(function () {

    //navigation bar - click options
    $('#catClick').click(function () {
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeOut();
        $('#editCategory').fadeOut();
        $('#deleteCategory').fadeOut();
        $('#viewCategory').fadeOut();
        $('#addProduct').fadeOut();
        $('#editProduct').fadeOut();
        $('#deleteProduct').fadeOut();
        $('#viewProduct').fadeOut();
        $('#addOffers').fadeOut();
        $('#editOffers').fadeOut();
        $('#deleteOffers').fadeOut();
        $('#editCategory').fadeOut();
        $('#editCatContainer').fadeOut();
        $('#category').fadeIn();
    })

    $('#prodClick').click(function () {
        $('#category').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeOut();
        $('#editCategory').fadeOut();
        $('#deleteCategory').fadeOut();
        $('#viewCategory').fadeOut();
        $('#addProduct').fadeOut();
        $('#editProduct').fadeOut();
        $('#deleteProduct').fadeOut();
        $('#viewProduct').fadeOut();
        $('#addOffers').fadeOut();
        $('#editOffers').fadeOut();
        $('#deleteOffers').fadeOut();
        $('#viewOffers').fadeOut();
        $('#products').fadeIn();
    })

    $('#offerClick').click(function () {
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#addCategory').fadeOut();
        $('#editCategory').fadeOut();
        $('#deleteCategory').fadeOut();
        $('#viewCategory').fadeOut();
        $('#addProduct').fadeOut();
        $('#editProduct').fadeOut();
        $('#deleteProduct').fadeOut();
        $('#viewProduct').fadeOut();
        $('#addOffers').fadeOut();
        $('#editOffers').fadeOut();
        $('#deleteOffers').fadeOut();
        $('#viewOffers').fadeOut();
        $('#offers').fadeIn();
    })


    //Category - click options
    $('#addCat').click(function () {
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeIn();
    })

    $('#editCat').click(function () {
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeOut();
        $('#editCategory').fadeIn();
    })

    $('#deleteCat').click(function () {
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeOut();
        $('#editCategory').fadeOut();
        $('#viewCategory').fadeOut();
        $('#deleteCategory').fadeIn();
    })

    $('#viewCat').click(function () {
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeOut();
        $('#editCategory').fadeOut();
        $('#deleteCategory').fadeOut();
        $('#viewCategory').fadeIn();
    })






    //-------------------------------------------------------------------------------------------------------------------
    //CATEGORY

    var category = new Category();

    //to add new category
    $('#catSumbit').click(function () {
        var flag = 0;
        var categoryName = $('#categoryname').val();
        var categoryDescription = $('#categoryDescription').val();


        if ((categoryName.length === 0) || (categoryName.trim().length === 0) || (!isNaN(categoryName))) {
            $('#catNameError').html('Please enter a valid name');
        } else {
            flag++;
        }

        if ((categoryDescription.length === 0) || (categoryDescription.trim().length === 0)) {
            $('#catDescriptionError').html('Please enter a valid description');
        } else {
            flag++;
        }


        if (flag === 2) {
            category.addCategory(categoryName, categoryDescription);
            $('#categoryname').val('');
            $('#categoryDescription').val('');
            alert("Category Added");
            $('#addCategory').fadeOut();
            $('#category').fadeIn();
        }
    })

    $('#categoryname').focus(function () {
        $('#catNameError').html('');
    })
    $('#categoryDescription').focus(function () {
        $('#catDescriptionError').html('');
    })


    //to view category list
    $('#viewCat').click(function () {
        $('#catViewTable').html('');
        $('#catViewTable').append('<tr><th>NAME</th><th>DESCRIPTION</th></tr>');
        categories.forEach(i => {
            $('#catViewTable').append('<tr><td>' + i.name + '</td><td>' + i.description + '</td></tr>');
        });
    })

    //-----------------------------------------------------

    //to edit category
    $('#editCat').click(function () {
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeOut();
        $('#editCategory').fadeOut();
        $('#deleteCategory').fadeOut();
        $('#viewCategory').fadeOut();
        $('#addProduct').fadeOut();
        $('#editProduct').fadeOut();
        $('#deleteProduct').fadeOut();
        $('#viewProduct').fadeOut();
        $('#addOffers').fadeOut();
        $('#editOffers').fadeOut();
        $('#deleteOffers').fadeOut();
        $('#editCategory').fadeIn();
        $('#editCatContainer').fadeIn();
        var catName;
        var catDescription;
        $('#catEditTable').html('');
        $('#catEditTable').append('<tr><th>NAME</th><th>DESCRIPTION</th></tr>');
        categories.forEach(i => {
            $('#catEditTable').append('<tr class="catEditTableRow" id="' + i.name + '"><td><a href="#">' + i.name + '</a></td><td>' + i.description + '</td></tr>');
        });

        $('.catEditTableRow').click(function () {
            $('#editCatContainer').fadeOut();
            $('#editCatForm').fadeIn();
            console.log($(this).attr("id"));
            categories.forEach(i => {
                if ($(this).attr("id") === i.name) {
                    catName = i.name;
                    catDescription = i.description;
                    $('#categorynameEdit').val(i.name);
                    $('#categoryDescriptionEdit').val(i.description);
                }
            });
        });

        $('#catEditSumbit').click(function () {
            var flag = 0;
            var categoryName = $('#categorynameEdit').val();
            var categoryDescription = $('#categoryDescriptionEdit').val();


            if ((categoryName.length === 0) || (categoryName.trim().length === 0) || (!isNaN(categoryName))) {
                $('#catNameErrorEdit').html('Please enter a valid name');
            } else {
                flag++;
            }

            if ((categoryDescription.length === 0) || (categoryDescription.trim().length === 0)) {
                $('#catDescriptionErrorEdit').html('Please enter a valid description');
            } else {
                flag++;
            }


            if (flag === 2) {

                categories.forEach(i => {
                    if (catName === i.name) {
                        i.name = categoryName;
                        i.description = categoryDescription;
                    }
                });

                //category.addCategory(categoryName, categoryDescription);
                $('#categorynameEdit').val('');
                $('#categoryDescriptionEdit').val('');
                alert("Changes Saved");
                $('#category').fadeIn();
            }
        })


    })

    //to delete a particular category 
    $('#deleteCat').click(function () {
        $('#catDeleteTable').html('');
        $('#catDeleteTable').append('<tr><th>NAME</th><th>DESCRIPTION</th></tr>');
        categories.forEach(i => {
            $('#catDeleteTable').append('<tr class="catDelTableRow" id="' + i.name + '"><td><a href="#">' + i.name + '</a></td><td>' + i.description + '</td></tr>');
        });

        $('.catDelTableRow').click(function () {
            categories.forEach(i => {
                if ($(this).attr("id") === i.name) {
                    category.deleteCategory(i.name);
                    alert(i.name + ' category deleted');
                    $('#deleteCategory').fadeOut();
                    $('#category').fadeIn();
                }
            });
        });
    })


    //************************************************************************************************************** */
    //PRODUCTS

    //Product - click options
    $('#addProd').click(function () {
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeOut();
        $('#editCategory').fadeOut();
        $('#deleteCategory').fadeOut();
        $('#viewCategory').fadeOut();
        $('#addProduct').fadeIn();
        $('#prodCatSelect').html('');
        $('#prodCatSelect').append('<option value = "default" selected disabled>Select Category...</option>');
        categories.forEach(i => {
            $('#prodCatSelect').append('<option value="' + i.name + '">' + i.name + '</option>');

        });
    })

    $('#editProd').click(function () {
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeOut();
        $('#editCategory').fadeOut();
        $('#deleteCategory').fadeOut();
        $('#viewCategory').fadeOut();
        $('#addProduct').fadeOut();
        $('#editProduct').fadeIn();
    })

    $('#deleteProd').click(function () {
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeOut();
        $('#editCategory').fadeOut();
        $('#deleteCategory').fadeOut();
        $('#viewCategory').fadeOut();
        $('#addProduct').fadeOut();
        $('#editProduct').fadeOut();
        $('#deleteProduct').fadeIn();
    })

    $('#viewProd').click(function () {
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeOut();
        $('#editCategory').fadeOut();
        $('#deleteCategory').fadeOut();
        $('#viewCategory').fadeOut();
        $('#addProduct').fadeOut();
        $('#editProduct').fadeOut();
        $('#deleteProduct').fadeOut();
        $('#viewProduct').fadeIn();
    })

    var product = new Product();

    //to add new product

    $('#ProdSumbit').click(function () {
        var flag = 0;
        var productName = $('#productname').val();
        var productCode = $('#productcode').val();
        var productSpec = $('#productSpecs').val();
        var productDesc = $('#productDescription').val();
        var productPrice = $('#productprice').val();
        var productCategory = $('#prodCatSelect').val();

        if ((productName.length === 0) || (productName.trim().length === 0) || (!isNaN(productName))) {
            $('#prodNameError').html('Please enter a valid name');
        } else {
            flag++;
        }

        if ((productCode.length === 0) || (productCode.trim().length === 0)) {
            $('#prodCodeError').html('Please enter a valid code');
        } else {
            flag++;
        }

        if ((productSpec.length === 0) || (productSpec.trim().length === 0)) {
            $('#prodSpecsError').html('Please enter a valid specification');
        } else {
            flag++;
        }

        if ((productDesc.length === 0) || (productDesc.trim().length === 0)) {
            $('#prodDescriptionError').html('Please enter a valid description');
        } else {
            flag++;
        }

        if ((productPrice.length === 0) || (isNaN(productPrice)) || (productPrice < 0)) {
            $('#prodPriceError').html('Please enter a valid Amount');
        } else {
            flag++;
        }

        if (productCategory === null) {
            $('#prodCatError').html('Please select a category');
        } else {
            flag++;
        }

        if (flag === 6) {
            product.addProduct(productName, productCode, productSpec, productDesc, productPrice, productCategory);
            alert("Product added successfully");
            $('#productname').val('');
            $('#productcode').val('');
            $('#productSpecs').val('');
            $('#productDescription').val('');
            $('#productprice').val('');
            $('#prodCatSelect').val('');
            $('#addProduct').fadeOut();
            $('#products').fadeIn();
        }

    })

    $('#productname').focus(function () {
        $('#prodNameError').html('');
    })
    $('#productcode').focus(function () {
        $('#prodCodeError').html('');
    })
    $('#productSpecs').focus(function () {
        $('#prodSpecsError').html('');
    })
    $('#productDescription').focus(function () {
        $('#prodDescriptionError').html('');
    })
    $('#productprice').focus(function () {
        $('#prodPriceError').html('');
    })


    //to view list of products
    $('#viewProd').click(function () {
        $('#prodViewTable').html('');
        $('#prodViewTable').append('<tr><th>NAME</th><th>CODE</th><th>SPECIFICATIONS</th><th>DESCRIPTION</th><th>PRICE</th><th>CATEGORY</th></tr>');
        products.forEach(i => {
            $('#prodViewTable').append('<tr><td>' + i.name + '</td><td>' + i.code + '</td><td>' + i.specifications + '</td><td>' + i.description + '</td><td>' + i.price + '</td><td>' + i.category + '</td></tr>');
        });
    })

    //to delete a particular product 
    $('#deleteProd').click(function () {
        $('#prodDeleteTable').html('');
        $('#prodDeleteTable').append('<tr><th>NAME</th><th>CODE</th><th>SPECIFICATIONS</th><th>DESCRIPTION</th><th>PRICE</th><th>CATEGORY</th></tr>');
        products.forEach(i => {
            $('#prodDeleteTable').append('<tr class="prodDelTableRow" id="' + i.name + '"><td><a href="#">' + i.name + '</a></td><td>' + i.code + '</td><td>' + i.specifications + '</td><td>' + i.description + '</td><td>' + i.price + '</td><td>' + i.category + '</td></tr>');
        });

        $('.prodDelTableRow').click(function () {
            products.forEach(i => {
                if ($(this).attr("id") === i.name) {
                    product.deleteProduct(i.name);
                    alert(i.name + ': Product deleted');
                    $('#deleteProduct').fadeOut();
                    $('#products').fadeIn();
                }
            });
        });
    })

    //to edit a product

    $('#editProd').click(function () {
        var prodName;
        $('#prodEditTable').html('');
        $('#prodEditTable').append('<tr><th>NAME</th><th>CODE</th><th>SPECIFICATIONS</th><th>DESCRIPTION</th><th>PRICE</th><th>CATEGORY</th></tr>');
        products.forEach(i => {
            $('#prodEditTable').append('<tr class="prodEditTableRow" id="' + i.name + '"><td><a href="#">' + i.name + '</a></td><td>' + i.code + '</td><td>' + i.specifications + '</td><td>' + i.description + '</td><td>' + i.price + '</td><td>' + i.category + '</td></tr>');
        });

        $('.prodEditTableRow').click(function () {
            $('#editProdContainer').fadeOut();
            $('#prodEditForm').fadeIn();
            products.forEach(i => {
                if ($(this).attr("id") === i.name) {
                    prodName = i.name;
                    $('#productnameEdit').val(i.name);
                    $('#productcodeEdit').val(i.code);
                    $('#productSpecsEdit').val(i.specifications);
                    $('#productDescriptionEdit').val(i.description);
                    $('#productpriceEdit').val(i.price);
                    $('#prodCatSelectEdit').html('');
                    $('#prodCatSelectEdit').append('<option value = "default" selected disabled>Select Category...</option>');
                    categories.forEach(i => {
                        $('#prodCatSelectEdit').append('<option value="' + i.name + '">' + i.name + '</option>');

                    });
                    $('#prodCatSelectEdit').val(i.category);
                }
            });
        })

        $('#ProdEditSumbit').click(function () {
            var flag = 0;
            var productName = $('#productnameEdit').val();
            var productCode = $('#productcodeEdit').val();
            var productSpec = $('#productSpecsEdit').val();
            var productDesc = $('#productDescriptionEdit').val();
            var productPrice = $('#productpriceEdit').val();
            var productCategory = $('#prodCatSelectEdit').val();

            if ((productName.length === 0) || (productName.trim().length === 0) || (!isNaN(productName))) {
                $('#prodNameErrorEdit').html('Please enter a valid name');
            } else {
                flag++;
            }

            if ((productCode.length === 0) || (productCode.trim().length === 0)) {
                $('#prodCodeErrorEdit').html('Please enter a valid code');
            } else {
                flag++;
            }

            if ((productSpec.length === 0) || (productSpec.trim().length === 0)) {
                $('#prodSpecsErrorEdit').html('Please enter a valid specification');
            } else {
                flag++;
            }

            if ((productDesc.length === 0) || (productDesc.trim().length === 0)) {
                $('#prodDescriptionErrorEdit').html('Please enter a valid description');
            } else {
                flag++;
            }

            if ((productPrice.length === 0) || (isNaN(productPrice)) || (productPrice < 0)) {
                $('#prodPriceErrorEdit').html('Please enter a valid Amount');
            } else {
                flag++;
            }

            if (productCategory === null) {
                $('#prodCatErrorEdit').html('Please select a category');
            } else {
                flag++;
            }

            if (flag === 6) {
                products.forEach(i => {
                    if (prodName === i.name) {
                        i.name = productName;
                        i.code = productCode;
                        i.specifications = productSpec;
                        i.description = productDesc;
                        i.price = productPrice;
                        i.category = productCategory;
                    }
                });
                //product.addProduct(productName, productCode, productSpec, productDesc, productPrice, productCategory);
                alert("Changes saved successfully");
                $('#editProduct').fadeOut();
                $('#prodEditTable').fadeOut();
                $('#products').fadeIn();
            }

        })

        $('#productnameEdit').focus(function () {
            $('#prodNameErrorEdit').html('');
        })
        $('#productcodeEdit').focus(function () {
            $('#prodCodeErrorEdit').html('');
        })
        $('#productSpecsEdit').focus(function () {
            $('#prodSpecsErrorEdit').html('');
        })
        $('#productDescriptionEdit').focus(function () {
            $('#prodDescriptionErrorEdit').html('');
        })
        $('#productpriceEdit').focus(function () {
            $('#prodPriceErrorEdit').html('');
        })

    })



    //*********************************************************************************************************** */
    //OFFERS

    var offer = new Offer();

    //Offers - click options
    $('#addOffer').click(function () {
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeOut();
        $('#editCategory').fadeOut();
        $('#deleteCategory').fadeOut();
        $('#viewCategory').fadeOut();
        $('#addProduct').fadeOut();
        $('#editProduct').fadeOut();
        $('#deleteProduct').fadeOut();
        $('#viewProduct').fadeOut();
        $('#addOffers').fadeIn();
        $('#offercreationdate').val(new Date().toISOString().slice(0, 10));
        $('#offerProdSelect').html('');
        $('#offerProdSelect').append('<option value = "default" selected disabled>Select Product...</option>');
        products.forEach(i => {
            $('#offerProdSelect').append('<option value="' + i.name + '">' + i.name + ' - ' + i.code + '</option>');

        });
    })

    $('#editOffer').click(function () {
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeOut();
        $('#editCategory').fadeOut();
        $('#deleteCategory').fadeOut();
        $('#viewCategory').fadeOut();
        $('#addProduct').fadeOut();
        $('#editProduct').fadeOut();
        $('#deleteProduct').fadeOut();
        $('#viewProduct').fadeOut();
        $('#addOffers').fadeOut();
        $('#editOffers').fadeIn();
    })

    $('#deleteOffer').click(function () {
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeOut();
        $('#editCategory').fadeOut();
        $('#deleteCategory').fadeOut();
        $('#viewCategory').fadeOut();
        $('#addProduct').fadeOut();
        $('#editProduct').fadeOut();
        $('#deleteProduct').fadeOut();
        $('#viewProduct').fadeOut();
        $('#addOffers').fadeOut();
        $('#editOffers').fadeOut();
        $('#deleteOffers').fadeIn();
    })

    $('#viewOffer').click(function () {
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeOut();
        $('#editCategory').fadeOut();
        $('#deleteCategory').fadeOut();
        $('#viewCategory').fadeOut();
        $('#addProduct').fadeOut();
        $('#editProduct').fadeOut();
        $('#deleteProduct').fadeOut();
        $('#viewProduct').fadeOut();
        $('#addOffers').fadeOut();
        $('#editOffers').fadeOut();
        $('#deleteOffers').fadeOut();
        $('#viewOffers').fadeIn();
    })


    //to add new offer

    $('#OfferSumbit').click(function () {
        var flag = 0;
        var offerName = $('#offername').val();
        var creationDate = $('#offercreationdate').val();
        var offerProductName = $('#offerProdSelect').val();
        var discount = $('#offerDiscount').val();
        var description = $('#offerDescription').val();
        var startDate = $('#offerstartdate').val();
        var endDate = $('#offerenddate').val();

        if ((offerName.length === 0) || (offerName.trim().length === 0) || (!isNaN(offerName))) {
            $('#offernameError').html('Please enter a valid offer name');
        } else {
            flag++;
        }

        if (offerProductName === null) {
            $('#offerProdSelError').html('Please select a product');
        } else {
            flag++;
        }

        if ((discount.length === 0) || (isNaN(discount)) || (discount < 0)) {
            $('#offerDiscountError').html('Please enter a valid discount %');
        } else {
            flag++;
        }

        if ((description.length === 0) || (description.trim().length === 0)) {
            $('#offerDescriptionError').html('Please enter a valid description');
        } else {
            flag++;
        }

        if (startDate.length === 0) {
            $('#offerStartDateError').html('Please choose a date');
        } else if (startDate < creationDate) {
            $('#offerStartDateError').html('Past Date cannot be selected');
        } else {
            flag++;
        }
        if (endDate.length === 0) {
            $('#offerEndDateError').html('Please choose a date');
        } else if (endDate < startDate) {
            $('#offerEndDateError').html('Please select a date greater than start date');
        } else {
            flag++;
        }
        console.log(offerProductName);

        if (flag === 6) {
            offer.addOffer(offerName, creationDate, offerProductName, discount, description, startDate, endDate);
            alert('Offer added successfully');
            $('#offername').val('');
            $('#offerProdSelect').val('');
            $('#offerDiscount').val('');
            $('#offerDescription').val('');
            $('#offerstartdate').val('');
            $('#offerenddate').val('');
            $('#addOffers').fadeOut();
            $('#offers').fadeIn();
        }


    })

    $('#offername').focus(function () {
        $('#offernameError').html('');
    })
    $('#offerProdSelect').focus(function () {
        $('#offerProdSelError').html('');
    })
    $('#offerDiscount').focus(function () {
        $('#offerDiscountError').html('');
    })
    $('#offerDescription').focus(function () {
        $('#offerDescriptionError').html('');
    })
    $('#offerstartdate').focus(function () {
        $('#offerStartDateError').html('');
    })
    $('#offerenddate').focus(function () {
        $('#offerEndDateError').html('');
    })



    //to view all offers
    $('#viewOffer').click(function () {

        $('#offerViewTable').html('');
        $('#offerViewTable').append('<tr><th>NAME</th><th>CREATION DATE</th><th>PRODUCT NAME - CODE</th><th>DISCOUNT</th><th>DESCRIPTION</th><th>START DATE</th><th>END DATE</th></tr>');
        offers.forEach(i => {
            var code;
            products.forEach(j => {
                if (i.productNameOrCode === j.name) {
                    code = j.code;
                }
            })
            $('#offerViewTable').append('<tr><td>' + i.offerName + '</td><td>' + i.creationDate + '</td><td>' + i.productNameOrCode + ' - ' + code + '</td><td>' + i.discount + '</td><td>' + i.description + '</td><td>' + i.startDate + '</td><td>' + i.endDate + '</td></tr>');
        });
    })

    //to delete a particular offer 
    $('#deleteOffer').click(function () {
        $('#offerDeleteTable').html('');
        $('#offerDeleteTable').append('<tr><th>NAME</th><th>CREATION DATE</th><th>PRODUCT NAME - CODE</th><th>DISCOUNT</th><th>DESCRIPTION</th><th>START DATE</th><th>END DATE</th></tr>');
        offers.forEach(i => {
            var code;
            products.forEach(j => {
                if (i.productNameOrCode === j.name) {
                    code = j.code;
                }
            })
            $('#offerDeleteTable').append('<tr class="offerDelTableRow" id="' + i.offerName + '"><td><a href="#">' + i.offerName + '</a></td><td>' + i.creationDate + '</td><td>' + i.productNameOrCode + ' - ' + code + '</td><td>' + i.discount + '</td><td>' + i.description + '</td><td>' + i.startDate + '</td><td>' + i.endDate + '</td></tr>');
        });

        $('.offerDelTableRow').click(function () {
            offers.forEach(i => {
                if ($(this).attr("id") === i.offerName) {
                    offer.deleteOffer(i.offerName);
                    alert(i.offerName + ': Offer deleted');
                    $('#deleteOffers').fadeOut();
                    $('#offers').fadeIn();
                }
            });
        });
    })


    //to edit a particular offer
    $('#editOffer').click(function () {
        var offerNameTemp;
        var code;
        $('#offerEditTable').html('');
        $('#offerEditTable').append('<tr><th>NAME</th><th>CREATION DATE</th><th>PRODUCT NAME - CODE</th><th>DISCOUNT</th><th>DESCRIPTION</th><th>START DATE</th><th>END DATE</th></tr>');
        offers.forEach(i => {
            products.forEach(j => {
                if (i.productNameOrCode === j.name) {
                    code = j.code;
                }
            })
            $('#offerEditTable').append('<tr class="offerEditTableRow" id="' + i.offerName + '"><td><a href="#">' + i.offerName + '</a></td><td>' + i.creationDate + '</td><td>' + i.productNameOrCode + ' - ' + code + '</td><td>' + i.discount + '</td><td>' + i.description + '</td><td>' + i.startDate + '</td><td>' + i.endDate + '</td></tr>');
        });

        $('.offerEditTableRow').click(function () {
            $('#editOfferContainer').fadeOut();
            $('#offerEditForm').fadeIn();
            offers.forEach(i => {
                if ($(this).attr("id") === i.offerName) {
                    offerNameTemp = i.offerName;
                    $('#offernameEdit').val(i.offerName);
                    $('#offercreationdateEdit').val(i.creationDate);
                    $('#offerDiscountEdit').val(i.discount);
                    $('#offerDescriptionEdit').val(i.description);
                    $('#offerstartdateEdit').val(i.startDate);
                    $('#offerenddateEdit').val(i.endDate);
                    $('#offerProdSelectEdit').html('');
                    $('#offerProdSelectEdit').append('<option value = "default" selected disabled>Select Product...</option>');
                    products.forEach(i => {
                        $('#offerProdSelectEdit').append('<option value="' + i.name + '">' + i.name + ' - ' + i.code + '</option>');

                    });
                    $('#offerProdSelectEdit').val(i.productNameOrCode);
                }
            });
        })

        $('#OfferEditSubmit').click(function () {
            var flag = 0;
            var offerNameEdit = $('#offernameEdit').val();
            var creationDateEdit = $('#offercreationdateEdit').val();
            var offerProductNameEdit = $('#offerProdSelectEdit').val();
            var discountEdit = $('#offerDiscountEdit').val();
            var descriptionEdit = $('#offerDescriptionEdit').val();
            var startDateEdit = $('#offerstartdateEdit').val();
            var endDateEdit = $('#offerenddateEdit').val();

            if ((offerNameEdit.length === 0) || (offerNameEdit.trim().length === 0) || (!isNaN(offerNameEdit))) {
                $('#offernameErrorEdit').html('Please enter a valid offer name');
            } else {
                flag++;
            }

            if (offerProductNameEdit === null) {
                $('#offerProdSelErrorEdit').html('Please select a product');
            } else {
                flag++;
            }

            if ((discountEdit.length === 0) || (isNaN(discountEdit)) || (discountEdit < 0)) {
                $('#offerDiscountErrorEdit').html('Please enter a valid discount %');
            } else {
                flag++;
            }

            if ((descriptionEdit.length === 0) || (descriptionEdit.trim().length === 0)) {
                $('#offerDescriptionErrorEdit').html('Please enter a valid description');
            } else {
                flag++;
            }

            if (startDateEdit.length === 0) {
                $('#offerStartDateErrorEdit').html('Please choose a date');
            } else if (startDateEdit < creationDateEdit) {
                $('#offerStartDateErrorEdit').html('Past Date cannot be selected');
            } else {
                flag++;
            }
            if (endDateEdit.length === 0) {
                $('#offerEndDateErrorEdit').html('Please choose a date');
            } else if (endDateEdit < startDateEdit) {
                $('#offerEndDateErrorEdit').html('Please select a date greater than start date');
            } else {
                flag++;
            }

            if (flag === 6) {
                //offer.addOffer(offerName, creationDate, offerProductName, discount, description, startDate, endDate);
                offers.forEach(i => {
                    if (i.offerName === offerNameTemp) {
                        i.offerName = offerNameEdit;
                        i.creationDate = creationDateEdit;
                        i.productNameOrCode = offerProductNameEdit;
                        i.discount = discountEdit;
                        i.description = descriptionEdit;
                        i.startDate = startDateEdit;
                        i.endDate = endDateEdit;
                        alert('Changes saved successfully');
                        $('#offerEditForm').fadeOut();
                        $('#editOffers').fadeOut();
                        $('#offers').fadeIn();
                    }
                });

            }


        })

        $('#offernameEdit').focus(function () {
            $('#offernameErrorEdit').html('');
        })
        $('#offerProdSelectEdit').focus(function () {
            $('#offerProdSelErrorEdit').html('');
        })
        $('#offerDiscountEdit').focus(function () {
            $('#offerDiscountErrorEdit').html('');
        })
        $('#offerDescriptionEdit').focus(function () {
            $('#offerDescriptionErrorEdit').html('');
        })
        $('#offerstartdateEdit').focus(function () {
            $('#offerStartDateErrorEdit').html('');
        })
        $('#offerenddateEdit').focus(function () {
            $('#offerEndDateErrorEdit').html('');
        })

    })


    /*
    //options - add/edit/del/view - click options - category
    $("#addCat").click(function(){
        window.open("addcategory.html","_self");
    })
    $("#editCat").click(function(){
        window.open("editcategory.html","_self");
    })
    $("#deleteCat").click(function(){
        window.open("deletecategory.html","_self");
    })
    $("#viewCat").click(function(){
        window.open("viewcategory.html","_self");
    })

    //options - add/edit/del/view - click options - products
    $("#addProd").click(function(){
        window.open("addproduct.html","_self");
    })
    $("#editProd").click(function(){
        window.open("editproduct.html","_self");
    })
    $("#deleteProd").click(function(){
        window.open("deleteproduct.html","_self");
    })
    $("#viewProd").click(function(){
        window.open("viewproduct.html","_self");
    })

    //options - add/edit/del/view - click options - offer
    $("#addOffer").click(function(){
        window.open("addoffer.html","_self");
    })
    $("#editOffer").click(function(){
        window.open("editoffer.html","_self");
    })
    $("#deleteOffer").click(function(){
        window.open("deleteoffer.html","_self");
    })
    $("#viewOffer").click(function(){
        window.open("viewoffer.html","_self");
    })

    */
})