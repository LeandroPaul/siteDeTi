function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var message = document.forms["contactForm"]["message"].value;
    
    // Validar se o nome está preenchido
    if (name == "") {
        alert("Por favor, preencha o campo Nome.");
        return false;
    }
    
    // Validar se o email está no formato correto
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert("Por favor, insira um email válido.");
        return false;
    }
    
    // Validar se o telefone está no formato correto (apenas dígitos)
    var phonePattern = /^\d+$/;
    if (!phone.match(phonePattern)) {
        alert("Por favor, insira um número de telefone válido (apenas dígitos).");
        return false;
    }
    
    // Validar se a mensagem está preenchida
    if (message == "") {
        alert("Por favor, preencha o campo Mensagem.");
        return false;
    }
}