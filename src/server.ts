const { PORT } = require('./common/config');
const App  = require('./app');

App.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
