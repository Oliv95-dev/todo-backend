require('dotenv').config();

module.exports = {
  development:{
    username: 'olivka',
    password: 'pass',
    database: 'tododev',
    use_env_variables: 'DB_DEV_URL',
    dialect: 'postgres',
  },
  test:{
    username: 'olivka',
    password: 'pass',
    database: 'tododev',
    use_env_variables: 'DB_TEST_URL',
    dialect: 'postgres',
  },
  production:{
    username: 'olivka',
    password: 'pass',
    database: 'tododev',
    use_env_variables: 'DB_PROD_URL',
    dialect: 'postgres',
  }
}