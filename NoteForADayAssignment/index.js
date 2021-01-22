'use strict'
const SwaggerExpress = require("swagger-express-mw");
const app = require("express")();
const SwaggerUi = require("swagger-tools/middleware/swagger-ui");
const env = require("dotenv")
const cors = require('cors')
env.config({ path: '.env' })
module.exports = app;
const config = {
  appRoot: __dirname,   
};

  
SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) {
    throw err;
  }
  app.use(cors());
  app.use(SwaggerUi(swaggerExpress.runner.swagger));  
  
  // install middleware
  swaggerExpress.register(app);

  var port = process.env.API_RUNNING_PORT;
    

    console.log("Application started working on port: " + port);
    app.listen(port);    
});
