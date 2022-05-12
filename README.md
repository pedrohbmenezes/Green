
# Api Green

Created for testing of the company Green


## API Documentation

#### Returns all services

```http
  GET /servicos
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `typeservicesId` | `number` | Service type id |
| `description` | `string` | Service description |
| `title` | `string` | service title |

#### Delete service

```http
  DELETE /servicos
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Mandatory**. The ID of the service you want to delete|

#### Create service

```http
  POST /servicos
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | |
| `description`      | `string` | |
| `date`      | `string` | |
| `repeat`      | `string` | If true, the application will use the rangelimit and rangerinit to determine the repetitions of the days of the week until the date defined as the limit |
| `repeatDay`      | `string` | Send a string with the week number separated by a comma (no spaces) where zero is Sunday and 6 is Saturday |
| `repeatLimit`      | `string` |  For security reasons the maximum number of dates supported will be 200, beyond that the application understands that an error has occurred in the parameter and will stop the repeat. |
| `typeservicesId`      | `string` | |



## install and start

```bash
  npm i
```

```bash
  npm start
```

## Database

To create the tabular models

```bash
  npx sequelize-cli db:migrate
```
To create the initial data of the tables

```bash
  npx sequelize-cli db:seed:all
```



## Used stack

**Back-end:** Node, Express





[![github](https://img.shields.io/github/followers/pedrohbrandao?style=social)](https://github.com/pedrohbrandao)

