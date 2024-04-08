import { v4 as uuid } from 'uuid';

export const generateRandomUser = () => {
	const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward', 'Fiona', 'George', 'Hannah', 'Ian', 'Julia'];

	const randowIndex = Math.floor(Math.random() * names.length)
	const randomName = names[randowIndex]

	return {name: randomName, id: uuid()}

}