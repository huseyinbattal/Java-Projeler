val = prompt("Seyehat etmek istediğiniz ulaşım aracını seçiniz.");
const londonLocations = [
    ["Angel", "tube", "bus"],
    ["Greenwich", "bus", "river boat", "dlr", "air line", "tube"],
    ["London Bridge", "tube", "river boat"],
    ["Tower Bridge", "tube", "bus"],
]

function getTransport(arr, val) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(val)) {
            newArr.push(arr[i][0])

        }

    }    return`Gidebileceğiniz yerler: ${newArr}.`
}

console.log(getTransport(londonLocations, val));