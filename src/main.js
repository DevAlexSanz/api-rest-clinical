import 'dotenv/config';
import routes from './Routes';
import initializeServer from './Server';

const startServer = initializeServer(routes);

export default startServer;
