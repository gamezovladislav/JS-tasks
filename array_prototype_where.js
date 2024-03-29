/**
 * Добавить в прототип Array метод "where", который фильтрует массив также как и метод "filter",
 * но с другим принципом использования:
 *
 * 1) .where(string, any) - принимает строки и любой второй аргумент:
 * 	проверят, что для каждого элемента(объекта), свойства по имени первого аргументы равно значению второго аргумента
 *
 * 2) .where(Object) - принимает объект:
 * 	объект с парами ключ-значение для проверки каждого элемента(объекта) с каждой парой из указанного объекта,
 * 	то есть каждое поле и значение переданного объекта должно совпадать с полем и значением искомого объекта в массиве.
 */

// ////////////////////
// Примеры:
// ////////////////////

// Исходный массив
var array = [ { type: 'Dog', age: 8 }, { type: 'Cat', age: 4 }, {type: 'Dog', age: 4} ];

// Фильтрация по имению свойству и его значению
array.where('type', 'Cat'); // => [ { type: 'Cat', age: 4 } ];

// Фильтрация по объекту
array.where({ age: 4 }); // => [ { type: 'Cat', age: 4 }, {type: 'Dog', age: 4} ];
