export function orderByProps( object, objMethod ) {
    let a = [];
    let b = [];
    for ( let key in object ) {
        b.push(key)
        for ( let anotherKey in objMethod ) {
            if ( objMethod[anotherKey] === key ) {
                a.push({key: key, value: object[key]})
            }
        }
    }
    b.sort()
    for(let key in a) {
        if(b.indexOf(a[key].key) !== -1) {
            b.splice(b.indexOf(a[key].key), 1)
        }
    }
    for(let key in b) {
        a.push({key: b[key], value: object[b[key]]})
    }
    return a
}

export function getSpecial(array) {
    let a = [];
    for(let key in array){
      const {id, name, icon, description = 'Описание недоступно'} = array[key]
      a.push({id: id, name: name, icon: icon, description: description})
    }
    return a
}