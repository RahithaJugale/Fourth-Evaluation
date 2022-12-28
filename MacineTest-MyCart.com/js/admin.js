

$(document).ready(function(){

    //navigation bar - click options
    $('#catClick').click(function(){
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#category').fadeIn();
    })
    
    $('#prodClick').click(function(){
        $('#category').fadeOut();
        $('#offers').fadeOut();
        $('#products').fadeIn();
    })

    $('#offerClick').click(function(){
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeIn();
    })
    

    //Category - click options
    $('#addCat').click(function(){
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeIn();
    })
    
    $('#editCat').click(function(){
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeOut();
        $('#editCategory').fadeIn();
    })
    
    $('#deleteCat').click(function(){
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeOut();
        $('#editCategory').fadeOut();
        $('#viewCategory').fadeOut();
        $('#deleteCategory').fadeIn();
    })

    $('#viewCat').click(function(){
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeOut();
        $('#editCategory').fadeOut();
        $('#deleteCategory').fadeOut();
        $('#viewCategory').fadeIn();
    })

    //Product - click options
    $('#addProd').click(function(){
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeOut();
        $('#editCategory').fadeOut();
        $('#deleteCategory').fadeOut();
        $('#viewCategory').fadeOut();
        $('#addProduct').fadeIn();
    })
    
    $('#editProd').click(function(){
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
    
    $('#deleteProd').click(function(){
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
    
    $('#viewProd').click(function(){
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

    //Offers - click options
    $('#addOffer').click(function(){
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
    })
    
    $('#editOffer').click(function(){
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
    
    $('#deleteOffer').click(function(){
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
    
    $('#viewOffer').click(function(){
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




//-------------------------------------------------------------------------------------------------------------------


    $('#catSumbit').click(function(){
            var categoryName = $('#categoryname').val();
            var categoryDescription = $('#categoryDescription').val();
        
            localStorage.setItem("CategoryName", categoryName);
            localStorage.setItem("CategoryDescription", categoryDescription);
            $('#categoryname').val() = '';
            $('#categoryDescription').val() = '';
            alert("Category Added");
            $('#category').fadeIn();
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