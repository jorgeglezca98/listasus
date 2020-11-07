
class List {

    constructor(private id: number, 
                private author: string, 
                private name: string, 
                private category: string, 
                private likes: number, 
                private elements: Array<string>) {}

    get getId() : number {
        return this.id
    }

    get getAuthor() : string {
        return this.author
    }

    get getName() : string {
        return this.name
    }

    get getCategory() : string {
        return this.category
    }

    get getLikes() : number {
        return this.likes
    }

    get getElements() : Array<string> {
        return this.elements
    }
}

export default List