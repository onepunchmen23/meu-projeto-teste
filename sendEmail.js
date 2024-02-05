const form = document.querySelector('#form')

function sendMail(){

     const name = document.getElementById('Nome').value;
     const phone = document.getElementById('Telefone').value;
     const email = document.getElementById('Email').value;
     const regiao = document.getElementById('Região').value;

    let ebody = `
    Nome: ${Nome.value}
    Telefone: ${Telefone.value}
    Email: ${Email.value}
    Região: ${Região.value}
     
     `
    // const name = document.querySelector("#Nome");

    // const value = Nome.value;
    
    //  const telefone = document.querySelector("#Telefone");

    //  const phone = Telefone.value;

    // var body = document.getElementById("Telefone").value;
    // var SubjectLine = document.getElementById("Nome").value;
    
    window.location.href = "mailto:teste@gmail.com?subject="+ebody;
}
