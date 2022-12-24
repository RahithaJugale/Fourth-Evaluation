function addCat(){
    var categoryName = document.getElementById('#categoryname').value;
    var categoryDescription = document.getElementById('#categoryDescription').value;

    console.log(categoryName);
    console.log(categoryDescription);
    localStorage.setItem("CategoryName", categoryName);
    localStorage.setItem("CategoryDescription", categoryDescription);

};