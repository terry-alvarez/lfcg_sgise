const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SGISE API Documentation',
      version: '1.0.0',
      description: 'API REST para Sistema de Gestión de Ingreso y Salida de Estudiantes',
      contact: {
        name: 'Terry Alvarez',
        email: 'halvarez.lfcg@gmail.com',
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 5000}`,
        description: 'Servidor de Desarrollo',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

export default swaggerOptions;
