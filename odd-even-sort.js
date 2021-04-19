// Дан массив
const array = [2, 21, 10, 12, 4, 17, 3, 20, 15, 1, 7];

/*
 * Отсортировать элементы по возрастанию,
 * Но(!),
 * чтобы сначала шли все нечетные элементы, а затем после них все четные.
 */

/*
 * Например, для указанного массива
 * ожидаемый результат:
 * [1, 3, 7, 15, 17, 21, 2, 4, 10, 12, 20]
 */

// ////////////////////////////////////////////////////////
// 1. Реализация любым способом
//
// Реализовать, используя всё, что необходимо, чтобы получился отсортированный массив

/* Здесь код первой реализации */

// Разделим массив на 2 подмассива, отсортируем каждые и просто "склеим"
const separation = array.reduce((separation, value) => {
    separation[value % 2].push(value);
    return separation;
}, [[], []]);
separation[0].sort(( x, y) => x - y);
separation[1].sort(( x, y) => x - y);

const sortedArray = [...separation[1], ...separation[0]];

// ////////////////////////////////////////////////////////
// 2. Сортировка через метод .sort()
//
// Реализовать сортировку, используя только один вызов метода sort

// Пример использования
array.sort(compareFunction); // После этого массив уже отсортирован
console.log(array.sort(compareFunction));
console.log(array.sort(compareFunctionOnlyTern));
/*
 * Решение задания сводится к реализации функции compareFunction
 */
function compareFunction(a, b) {
    if (a % 2) {
        if (b % 2) {
            return a - b;
        }
        return -1;
    }
    if (b % 2) {
        return 1;
    }
    return a - b;
}

function compareFunctionOnlyTern(a, b) {
    return a % 2
        ? b % 2
            ? a - b
            : -1
        : b % 2
            ? 1
            : a - b;
}
