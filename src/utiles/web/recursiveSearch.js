

const recursiveSearchElement = (element,sentences) => {
    console.log(element);
    const value = element.dataset[sentences];
    if(value) return value;

    return recursiveSearchElement(element.parentELement,sentences);

}

export default recursiveSearchElement;