import { questions } from './data/questions';

console.log('Total questions:', questions.length);
console.log('Mock-exam questions:', questions.filter(q => q.examSlug === 'mock-exam').length);
console.log('Practice-test-1 questions:', questions.filter(q => q.examSlug === 'practice-test-1').length);
console.log('Practice-test-2 questions:', questions.filter(q => q.examSlug === 'practice-test-2').length);
console.log('Practice-test-3 questions:', questions.filter(q => q.examSlug === 'practice-test-3').length);
