fetch("https://tokyo.tokyocity.repl.co/user2/853352916072661012").then((res) => res.json()).then((json) => { Object.keys(json).forEach((key) => { const elem = document.getElementsByClassName(key); elem[0].textContent = json[key]; }); }) 