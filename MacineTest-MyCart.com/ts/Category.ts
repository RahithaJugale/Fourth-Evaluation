import { ICategory } from "./ICategory";

export class Category implements ICategory{
    name: string;
    description: string;

    constructor(name: string, description: string){
        this.name = name;
        this.description = description;
    }

    addCategory(name: string, description: string): void {
        localStorage.setItem(this.name, this.description);
    }
    editCategory(name: string): void {
        localStorage.getItem(name);
    }
    deleteCategory(name: string): void {
        throw new Error("Method not implemented.");
    }
    viewCategies(): void {
        throw new Error("Method not implemented.");
    }

}