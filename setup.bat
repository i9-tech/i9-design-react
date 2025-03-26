@echo off
chcp 65001 >nul
title Configuração do Projeto

echo ✅ Habilitando NVM...
nvm version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ NVM não encontrado! Verifique se está instalado corretamente.
    pause
    exit /b
)

echo 🔄 Verificando e instalando a última versão do Node.js...
for /f %%v in ('nvm list available ^| findstr /R "Latest LTS"') do set latestNode=%%v
nvm install latest
nvm use latest

:: 🔄 Recarregar variáveis de ambiente
set PATH=%APPDATA%\nvm;%APPDATA%\nvm\nodejs;%PATH%

echo ✅ Node.js atualizado para a versão:
node -v

echo 🔄 Verificando se o npm está instalado...
where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm não encontrado! Instalando agora...
    node -e "require('child_process').execSync('npm install -g npm', { stdio: 'inherit' })"
)

echo 🔄 Verificando se o npm está atualizado...
for /f %%v in ('npm -v') do set npmVersion=%%v
for /f %%v in ('npm show npm version') do set latestNpm=%%v

if "%npmVersion%"=="%latestNpm%" (
    echo ✅ O npm já está na última versão: %npmVersion%
) else (
    echo ⚠️ O npm está desatualizado! Atualizando para a versão %latestNpm%...
    npm install -g npm
)

echo 🔄 Instalando dependências do projeto... (essa etapa pode demorar alguns segundos)
start /B npm install

:: Aguardar um pouco para garantir que o npm install tenha terminado antes de continuar
timeout /t 5

echo 🚀 Iniciando o servidor de desenvolvimento...
start /B npm run dev


exit
