const form = document.getElementById('logger');
form.addEventListener('submit', event => logger(event));


function logger(event) {
    event.preventDefault();
    const terminal = document.getElementById("terminal")
    terminal.innerHTML += `<p>[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}]<span class="terminal-log"> ${form.text.value}</span></p>`;
    form.text.value = '';
}
