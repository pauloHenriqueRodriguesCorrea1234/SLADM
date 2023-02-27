const errorCodeMessages = {
  'auth/wrong-password': 'Senha incorreta. Tente novamente.',
  'auth/user-not-found': 'Usuário não encontrado. Verifique o e-mail digitado.',
  'auth/network-request-failed': 'Erro de conexão. Verifique sua conexão com a internet.',
  'auth/weak-password': 'Senha fraca. A senha deve ter pelo menos 6 caracteres.',
  'auth/email-already-in-use': 'E-mail já em uso. Tente com outro e-mail.',
  'auth/invalid-email': 'E-mail inválido. Verifique o e-mail digitado.',
  'auth/maximum-user-count-exceeded': 'Número máximo de usuários atingido. Tente novamente mais tarde.',
  'auth/uid-alread-exists': 'ID de usuário já existe. Tente novamente com outro e-mail.',
  'auth/email-already-exists': 'E-mail já existe. Tente novamente com outro e-mail.',
  'auth/phone-number-already-exists': 'Número de telefone já existe. Tente novamente com outro número.',
};

export default errorCodeMessages;

// Login

/* catch (error) {
   switch (error.code) {
   case 'auth/invalid-email':
   Alert.alert('O endereço de e-mail não é válido.');
   break;
   case 'auth/user-disabled':
   Alert.alert('A conta do usuário foi desativada.');
   break;
   case 'auth/user-not-found':
   Alert.alert('Não existe uma conta com esse endereço de e-mail.');
   break;
   case 'auth/wrong-password':
   Alert.alert('Senha inválida.');
   break;
   default:
   Alert.alert('Erro ao efetuar login. Tente novamente mais tarde.');
   }
   } */

// SignUp

/* .catch((error) => {
   console.log(error.code);
   if (error.code === "auth/email-already-in-use") {
   alert("Já existi uma conta com o endereço de email fornecido.");
   return;
   }

   if (error.code === "auth/invalid-email") {
   alert("Email invalido");
   return;
   }

   if (error.code === "auth/weak-password") {
   alert("Sua senha deve ter pelo menos 6 caracteres");
   return;
   }
   if (error.code === "auth/email-already-exists") {
   alert("O e-mail fornecido já está em uso.");
   return;
   }
   if (error.code === "auth/invalid-password") {
   alert("A senha é inválida, precisa ter pelo menos 6 caracteres.");
   return;
   }

   if (error.code === "auth/weak-password") {
   alert("A senha é muito fraca.");
   return;
   } else {
   alert("Ops... Alguma coisa deu errado!");
   return;
   }
   }); */


