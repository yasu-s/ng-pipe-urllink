import { UrlLinkPipe } from './url-link.pipe';

let pipe: UrlLinkPipe;
beforeEach(() => pipe = new UrlLinkPipe());

it('exists', () => {
  expect(pipe).toBeTruthy();
});

it('shoul replace with url type strings', () => {
  [
    'http://test.com',
    'https://test.com',
    'http://test.a',
    'http://localhost',
    'http://localhost:8888',
    'http://localhost:8888',
    'http://a',
  ].forEach(arg => expect(pipe.transform(arg)).toBe(`<a href="${arg}" target="_blank">${arg}</a>`));
});

it('shoul not replace with non-url type strings', () => {
  [
    '',
    'test',
    'TEST',
    'http://',
    'https://',
    'test.com',
    'www.test.com',
    'http://_',
    'http://_.',
    'http://_._',
  ].forEach(arg => expect(pipe.transform(arg)).toBe(arg));
});
