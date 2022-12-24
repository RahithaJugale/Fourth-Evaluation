export interface ICategory{
    //declare variables
    name:string;
    description:string;

    addCategory(name:string, description:string):void;
    editCategory(name:string):void;
    deleteCategory(name:string):void;
    viewCategies():void;
}