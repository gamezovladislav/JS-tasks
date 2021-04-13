function Person(name) {
	var self = this;

	this.name = name;

	this.introduceTo = function (target) {
		return 'Hello ' + target + ', I am ' + self.name;
	};
}

var vladimir = new Person('Vladimir');

//////////////////////

/**
 * Реализовать функцию spy, которая позволяет "шпионить" за указанной функцией.
 *
 * Список данных, которые можно узнать о работе целевой функции:
 * * {boolean} hasBeenCalled - была ли вызвана целевая функция
 * * {number} calls - количество вызовов целевой функции после начала слежения
 * * {Array<any>} lastCallArguments - массив с аргументами последнего вызова
 * * {any} lastReturn - возвращенное значения последнего вызова
 *
 * Шпионаж не должен отменять работу целевой функции.
 * Она должна по-прежнему также работать.
 *
 * @param {function} targetFn целевая функция шпионажа
 * @returns {function} функция, подставляемая вместо целевой
 */
function spy(targetFn) {

    const proxyFn = function (...args) {
        const returnedValue = targetFn(...args);
        this.hasBeenCalled = true;
        this.calls++;
        this.lastCallArguments = [...args];
        this.lastReturn = returnedValue;
        return returnedValue;
    };

    proxyFn.hasBeenCalled = false;
    proxyFn.calls = 0;
    proxyFn.lastCallArguments = undefined;
    proxyFn.lastReturn = undefined;

    return proxyFn;
}

// Создаем шпиона на функцию "vladimir.introduceTo"
vladimir.introduceTo = spy(vladimir.introduceTo);

console.log(vladimir.introduceTo.hasBeenCalled); // -> false

console.log(vladimir.introduceTo('Lola')); // -> Hello Lola, I am Vladimir

console.log(vladimir.introduceTo.hasBeenCalled); // -> true
console.log(vladimir.introduceTo.calls); // -> 1
console.log(vladimir.introduceTo.lastCallArguments); // -> ["Lola"];
console.log(vladimir.introduceTo.lastReturn); // -> "Hello Lola, I am Vladimir"



