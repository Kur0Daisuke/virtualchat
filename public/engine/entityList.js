class EntityList{
    static #Entities = []

    static set ChangeEntities(data) {
        EntityList.#Entities = data;
    }
    
    static ChangeEntityData(id, data) {
        EntityList.#Entities[id] = data;
    }
}