require('dotenv').config();

module.exports = {
  development:{
    database: 'tododev',
    use_env_variables: 'DB_DEV_URL',
    dialect: 'postgres',
  },
  test:{
    database: 'tododev',
    use_env_variables: 'DB_TEST_URL',
    dialect: 'postgres',
  },
  production:{
    database: 'tododev',
    use_env_variables: 'DB_PROD_URL',
    dialect: 'postgres',
  }
}