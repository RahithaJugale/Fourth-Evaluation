

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
    
    $('#addCat').click(function(){
        $('#category').fadeOut();
        $('#products').fadeOut();
        $('#offers').fadeOut();
        $('#addCategory').fadeIn();
    })







//-------------------------------------------------------------------------------------------------------------------



    $('#catSumbit').click(function(){
            var categoryName = document.getElementById('#categoryname').value;
            var categoryDescription = document.getElementById('#categoryDescription').value;
        
            console.log(categoryName);
            console.log(categoryDescription);
            localStorage.setItem("CategoryName", categoryName);
            localStorage.setItem("CategoryDescription", categoryDescription);
        
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