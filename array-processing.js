// Исходные данные
const students = [
    {
        name: 'John',
        age: 17,
        gender: "M",
        grade: 8,
        state: "Florida"
    },
    {
        name: 'Sarah',
        age: 19,
        gender: "F",
        grade: 9,
        state: "Alaska"
    },
    {
        name: 'Peter',
        age: 21,
        gender: "M",
        grade: 5,
        state: "California"
    },
    {
        name: 'Bred',
        age: 19,
        gender: "M",
        grade: 8,
        state: "Florida"
    },
    {
        name: 'Garry',
        age: 24,
        gender: "M",
        grade: 9,
        state: "Tennessee"
    },
    {
        name: 'Samantha',
        age: 14,
        gender: "F",
        grade: 7,
        state: "California"
    },
    {
        name: 'Garold',
        age: 16,
        gender: "M",
        grade: 8,
        state: "Washington"
    }
];



/**
 * ===================
 *
 * Записать выражения для подсчета и присвоения следующий данных
 *
 * ===================
 */



/**
 * [Number] количество совершеннолетних (возвраст >= 18)
 */
var adultsCount = students.filter(value => value.age >= 18).length;

/**
 * [Number] Средний бал среди всех учащихся
 */
var meanGrade = students.reduce((prev, { grade }) => prev + grade, 0) / students.length;

/**
 * [Number] Средний бал среди несовершеннолетних (возраст < 18)
 */
var teenMeanGrade = students
    .filter(st => st.age < 18)
    .reduce((prev, { grade }, _, array) => prev + grade / array.length, 0);

/**
 * [Number] Средний бал среди совершеннолетних парней
 */
var menMeanGrade = students
    .filter(student => student.age >= 18 && student.gender === 'M')
    .reduce((prev, { grade }, _, array) => prev + grade / array.length, 0);


/**
 * [Array<Srudent>] Массив учащихся, отсортированных по возрастанию балов.
 */
var studentsByGrades = students.sort((x, y) => x.grade - y.grade);


/**
 * [Array<String>] Массив имен всех учащихся
 */
var studentNames = students.map(student => student.name);


/**
 * [Array<String>] Массив имен всех девушек
 */
var girlNames = students.filter(student => student.gender === 'F')
    .map(girl => girl.name);


/**
 * [Array<String>] Имена всех штатов, в которых живут учащиеся (без повторений!)
 */
var states = students
    .reduce((unique, { state }) => {
        if (!unique.includes(state)) {
            unique.push(state);
        }
        return unique;
    }, []);


/**
 * [Array<String>] Имена всех совершеннолетних из штата California
 */
var californians = students
    .filter(student => student.state === 'California' && student.age >= 18)
    .map(student => student.name);

/**
 * [Number] Средний бал учащихся из Аляски, с именем начинающимся на "S"
 */
var alaskaSMeanGrade = students
    .filter(student => student.state === 'Alaska' && student.name[0] === 'S')
    .reduce((collected, { grade }, _, { length }) => collected + grade / length, 0);