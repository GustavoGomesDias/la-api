import App from './app';

const port = 3001;
App.listen(port, () => {
  console.log(`Server is running at ${port}`);
  console.log(`CTRL + click in localhost: ${port}`);
});
