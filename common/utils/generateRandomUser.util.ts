import { v4 as uuid } from 'uuid';

export const generateRandomUser = () => {
	const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward', 'Fiona', 'George', 'Hannah', 'Ian', 'Julia'];
	return {name: names[Math.floor(Math.random() * names.length)], id: uuid()}
}