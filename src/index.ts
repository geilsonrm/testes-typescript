console.log('Iniciando aplicação...');

function logDateTime() {
    const date = new Date();
    const parsedDate = date.toISOString();
    console.log(parsedDate, `: Aplicação rodando - Teste 02`);
}

// Log inicial
logDateTime();

// Continuar executando a cada 5 segundos
setInterval(logDateTime, 5000);

// Tratamento de erros não capturados
process.on('uncaughtException', (error) => {
    console.error('Erro não tratado:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Promise não tratada:', reason);
});
