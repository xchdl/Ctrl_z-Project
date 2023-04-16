const form = document.querySelector('form');
const msg = document.getElementById('msg');

form.addEventListener('submit', (s) => {
	s.preventDefault();
	const email = form.email.value;

	if (email === '') {
		msg.textContent = 'Please enter a valid email address.';
		msg.style.color = 'red';
	} 
    
    
    else {

		msg.textContent = 'A link to reset your password has been sent to your email address.';
		msg.style.color = 'green';
		form.reset();
	}
});
