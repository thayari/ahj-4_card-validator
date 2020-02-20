import puppetteer from 'puppeteer';
const puppeteer = require('puppeteer');
const childProcess = require('child_process');

jest.setTimeout(30000); // default puppeteer timeout
describe('validation form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => { // открыть браузер
    browser = await puppeteer.launch({
      headless: false, // show gui
      slowMo: 100,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  }); // открыть браузер
  afterAll(async () => { // закрыть браузер
    await browser.close();
  }); // закрыть браузер

  describe('validation form', () => {
    test('should add .green class to the button for valid card number', async () => {
      await page.goto(baseUrl);
      const form = await page.$('.form-container');
      const input = await form.$('.cardnumber');
      await input.type('4276844012951422');
      const submit = await form.$('.button');
      submit.click();
      await page.waitForSelector('.green');
    });
  });
});