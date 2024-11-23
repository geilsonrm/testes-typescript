// Função para formatar a data/hora
function getFormattedDateTime() {
    const date = new Date();
    return date.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
}
// Informações do processo
console.log(`[${getFormattedDateTime()}] Processo iniciado - PID: ${process.pid}`);
console.log(`[${getFormattedDateTime()}] Diretório de trabalho: ${process.cwd()}`);
console.log(`[${getFormattedDateTime()}] Versão do Node: ${process.version}`);
// Contador para acompanhamento
let counter = 1;
// Função para log periódico
function logStatus() {
    const memory = process.memoryUsage();
    console.log(`[${getFormattedDateTime()}] Log #${counter} - Memória: ${Math.round(memory.heapUsed / 1024 / 1024)}MB`);
    counter++;
}
// Log inicial
logStatus();
// Log a cada 3 segundos
// setInterval(logStatus, 3000);
console.log(`\nTeste:\n`, 1);
setTimeout(logStatus, 5000);
// Tratamento de erros
process.on('uncaughtException', (error) => {
    console.error(`[${getFormattedDateTime()}] Erro não tratado:`, error);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error(`[${getFormattedDateTime()}] Promise não tratada:`, reason);
});
// Tratamento de sinais do sistema
process.on('SIGTERM', () => {
    console.log(`[${getFormattedDateTime()}] Recebido sinal SIGTERM - Encerrando...`);
    process.exit(0);
});
process.on('SIGINT', () => {
    console.log(`[${getFormattedDateTime()}] Recebido sinal SIGINT - Encerrando...`);
    process.exit(0);
});
