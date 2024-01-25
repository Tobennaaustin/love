const yes = document.getElementById('yes');
const no = document.getElementById('no');
const yes_msg = document.getElementById('yes_msg');
const no_msg = document.getElementById('no_msg');

yes.addEventListener('click', () => {
    yes_msg.style.display="block";
    no_msg.style.display = "none";
});

no.addEventListener('click', () => {
    no_msg.style.display="block";
    yes_msg.style.display = "none";
});