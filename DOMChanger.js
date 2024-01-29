function iChangeDOM() {
	const el = document.querySelector('h1');

	el.textContent = 'new text';
	// return el;

	// Your code here
}
// если вызвать функцию здесь, будет ошибка, т.к. строка выполнится при импорте модуля в тест, а документ здесь не определен
// iChangeDOM()
export default iChangeDOM;
