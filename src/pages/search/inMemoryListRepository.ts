import List from "../../domain/list/entity/list";
import ListRepository from "../../domain/list/repository/listRepository";

class InMemoryListRepository implements ListRepository {

    private lists: Array<List> = [
        new List(1, "Jorge", "Piezas de ordenador", "travel", 2634, ["Placa base", "RAM", "Procesador", "Gráfica"]),
        new List(2, "Mike", "Piezas de ordenador", "technology", 76242, ["Placa base", "RAM", "Procesador", "Gráfica"]),
        new List(3, "Jorge", "Piezas de ordenador", "nature", 5342, ["Placa base", "RAM", "Procesador", "Gráfica"]),
        new List(4, "Paco", "Piezas de ordenador", "food", 54324, ["Placa base", "RAM", "Procesador", "Gráfica"]),
        new List(5, "Miriam", "Piezas de ordenador", "food", 123432, ["Placa base", "RAM", "Procesador", "Gráfica"]),
        new List(6, "Diego", "Piezas de ordenador", "parenthood", 65876, ["Placa base", "RAM", "Procesador", "Gráfica"]),
        new List(7, "Ale", "Piezas de ordenador", "travel", 9234, ["Placa base", "RAM", "Procesador", "Gráfica"]),
        new List(8, "Ale", "Piezas de ordenador", "nature", 657, ["Placa base", "RAM", "Procesador", "Gráfica"]),
        new List(9, "Ale", "Piezas de ordenador", "technology", 154754, ["Placa base", "RAM", "Procesador", "Gráfica"]),
        new List(10, "Laura", "Piezas de ordenador", "food", 3344, ["Placa base", "RAM", "Procesador", "Gráfica"]),
        new List(11, "Paco", "Piezas de ordenador", "technology", 65672, ["Placa base", "RAM", "Procesador", "Gráfica"]),
        new List(12, "Miriam", "Piezas de ordenador", "nature", 776876, ["Placa base", "RAM", "Procesador", "Gráfica"]),
        new List(13, "Miriam", "Piezas de ordenador", "nature", 1235, ["Placa base", "RAM", "Procesador", "Gráfica"]),
        new List(14, "Laura", "Piezas de ordenador", "parenthood", 65623, ["Placa base", "RAM", "Procesador", "Gráfica"]),
        new List(15, "Laura", "Piezas de ordenador", "travel", 23454, ["Placa base", "RAM", "Procesador", "Gráfica"]),
        new List(16, "Paco", "Piezas de ordenador", "travel", 2222, ["Placa base", "RAM", "Procesador", "Gráfica"]),
        new List(17, "Ale", "Piezas de ordenador", "parenthood", 64521, ["Placa base", "RAM", "Procesador", "Gráfica"]),
        new List(18, "Laura", "Piezas de ordenador", "nature", 78663, ["Placa base", "RAM", "Procesador", "Gráfica"]),
        new List(19, "Laura", "Piezas de ordenador", "food", 3456453, ["Placa base", "RAM", "Procesador", "Gráfica"]),
        new List(20, "Diego", "Piezas de ordenador", "technology", 21233, ["Placa base", "RAM", "Procesador", "Gráfica"])
    ]

    findById(id: number): List | undefined {
        return this.lists.find((list) => list.getId === id )
    }
    
    findByName(name: string): Array<List> {
        return this.lists.filter((list) => (new RegExp(name, "i")).test(list.getName) )
    }

}

export default InMemoryListRepository