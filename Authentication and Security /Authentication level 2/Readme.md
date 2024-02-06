
## Run this code in Postgres Query table

```SQL
CREATE TABLE users(
id SERIAL PRIMARY KEY,
email VARCHAR(100) NOT NULL UNIQUE,
password VARCHAR(100)
)
```


## Run the below to install node modules

To install node modules run the below command

```bash
  npm i
```


## Data Base Connection

Make sure that the below DataBase connection in the Solution.js is changed accordingly. The Database which I have used in postgreSQL. Specially write the database name and password accordingly.

```javascript
  const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "brba",
  port: 5432,
});
```


## Run the below command to execute the project



```bash
  node solution.js
```

