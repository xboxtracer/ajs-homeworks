// TODO: write your code here
export function srotingByHp(arr) {
    if (arr[0] === undefined) {
        return 'not necesary'
    }
    arr.sort(function(a, b){
        return b.health - a.health
    })
    return arr
}