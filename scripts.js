function functionSoma() {
	var a = Math.round(prompt("Informe o valor de a: ", 10));
	var b = Math.round(prompt("Informe o valor de b: ", 5));
	var soma = a+b;
	
	alert("O valor de a + b é: " + soma);
}

document.getElementById('addTaskButton').addEventListener('click', function() {
	let taskInput = prompt("Qual nova tarefa deseja adicionar?", "Programar");
	let taskList = document.getElementById('taskList');
	let newTask = document.createElement('li');
	newTask.textContent = taskInput;
	taskList.appendChild(newTask);
	taskInput.value = '';
})