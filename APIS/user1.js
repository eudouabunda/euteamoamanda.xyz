fetch("https://tokyo.tokyocity.repl.co/user1/386215881966878721").then((res) => res.json()).then((json) => { Object.keys(json).forEach((key) => { const elem = document.getElementsByClassName(key); elem[0].textContent = json[key]; }); }) 

