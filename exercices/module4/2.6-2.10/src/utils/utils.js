const findIndexWithId = (array, id) => {
    return array.findIndex(p => p.id === id)
}

export default { findIndexWithId }