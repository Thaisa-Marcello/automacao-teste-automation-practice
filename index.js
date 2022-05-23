const {Builder, By, Key, util} = require("selenium-webdriver");

//Passos para realizar o login com sucesso
async function loginSucesso(){
    let driver = await new Builder().forBrowser("chrome").build();
    //Abrindo o site no navegador chrome
    await driver.get("http://automationpractice.com/index.php");
    //Encontrando o botão para iniciar login
    await driver.findElement(By.className("login")).click();
    //Inserindo e-mail
    await driver.findElement(By.id("email")).sendKeys("thamarcello@hotmail.com");
    //Inserindo senha
    await driver.findElement(By.id("passwd")).sendKeys("senha123");
    //Clicando no botão de login após inserir as credenciais
    await driver.findElement(By.id("SubmitLogin")).click();
    //Capturando o texto do elemento e salvando em uma variável
    let sucesso = driver.findElement(By.xpath('//*[@id="center_column"]/h1')).getText();
    var assert = require('assert');
    //Comparando o texto capturado na variável com o que é desejável 
    assert.equal(sucesso, "MY ACCOUNT");
    //Fechar navegador
    driver.quit
} 

//Passos para realizar um login inválido
async function loginInvalido(){
    let driver = await new Builder().forBrowser("chrome").build();
    //Abrindo o site no navegador chrome
    await driver.get("http://automationpractice.com/index.php");
    //Encontrando o botão para iniciar login
    await driver.findElement(By.className("login")).click();
    //Inserindo e-mail
    await driver.findElement(By.id("email")).sendKeys("thamarcello@hotmail.com");
    //Inserindo senha incorreta
    await driver.findElement(By.id("passwd")).sendKeys("senhaerrada");
    //Clicando no botão de login após inserir as credenciais
    await driver.findElement(By.id("SubmitLogin")).click();
    //Capturando o texto do elemento e salvando em uma variável
    let erroAuthentication = driver.findElement(By.xpath('//*[@id="center_column"]/div[1]/ol/li')).getText();
    var assert = require('assert');
    //Comparando o texto capturado na variável com o que é desejável 
    assert.equal(sucesso, "Authentication failed.");
    //Fechar navegador
    driver.quit
} 

//Passos para realizar um login em branco
async function loginBranco(){
    let driver = await new Builder().forBrowser("chrome").build();
    //Abrindo o site no navegador chrome
    await driver.get("http://automationpractice.com/index.php");
    //Encontrando o botão para iniciar login
    await driver.findElement(By.className("login")).click();
    //Clicando no botão de login sem inserir as credenciais
    await driver.findElement(By.id("SubmitLogin")).click();
    //Capturando o texto do elemento e salvando em uma variável
    let erroEmpty = driver.findElement(By.xpath('//*[@id="center_column"]/div[1]/ol/li/text()')).getText();
    var assert = require('assert');
    //Comparando o texto capturado na variável com o que é desejável 
    assert.equal(sucesso, "An email address required.");
    //Fechar navegador
    driver.quit
} 


loginSucesso();
loginInvalido();
loginBranco();