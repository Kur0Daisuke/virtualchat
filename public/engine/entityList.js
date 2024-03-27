class EntityList{
    static #Entities = null;

    static set SetEntities(data) {
        EntityList.#Entities = Object.keys(data).map((key) => data[key]);
    }

    static get Entites() { return EntityList.#Entities }
}