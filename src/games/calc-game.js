import game, {
  getRandomValueInRange,
  numberOfRounds,
  questions,
  answers as rigthAnswers,
} from '../index.js';

const getOperationResult = (first, second, operation) => {
  switch (operation) {
    case '+':
      return `${first + second}`;
    case '-':
      return `${first - second}`;
    case '*':
      return `${first * second}`;
    default:
      throw new Error('Unknown operand!');
  }
};

const calcGameStart = () => {
  const rule = 'What is the result of the expression?';
  const operations = ['+', '-', '*'];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstOperand = getRandomValueInRange();
    const secondOperand = getRandomValueInRange();
    const operation = operations[getRandomValueInRange(0, operations.length - 1)];

    questions.push(`${firstOperand} ${operation} ${secondOperand}`);
    rigthAnswers.push(getOperationResult(firstOperand, secondOperand, operation));
  }

  game(questions, rigthAnswers, rule);
};

export default calcGameStart;
