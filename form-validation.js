const Pattern = {

 name = /^[a-zA-Z\s]{2,24}$/;
 contact = /^[0-9]{10}$/;
 email = /^[a-Z0-9\.]+@[a-z]+\.[a-z\.]{3-8}$/i;
}

const inputs = document.querySelectorAll('.wrapper input[type="text"]');

console.log(inputs);
for (let i = 0; i < inputs.length; i++) {
  console.log(inputs[i]);
  inputs[i].addEventListner("keyup", (e) => {
    console.log(e.target.name, e.target);

    validateForm(e.target.name.target);
  });
}
