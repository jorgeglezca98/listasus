import List from "../entity/list";

interface ListRepository {
    findById(id: number) : List | undefined ;
    findByName(name: string): Array<List>;
}

export default ListRepository