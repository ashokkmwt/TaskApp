const generateId = () => {
    const id = Math.ceil(Math.random() * 1000000);
    return id
}

export default generateId;