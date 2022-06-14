import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber-1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
    //here lodash is used to go to the startIndex and take the items of the current page
    //slice method returns selected elements in an array, as a new array.will slice the array starting from startIndex
    //take method creates a slice of array with n elements taken from the beginning
}