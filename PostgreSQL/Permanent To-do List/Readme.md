
## Run this code in Postgres Query table

```SQL
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL
);

INSERT INTO items (title) VALUES ('Buy milk'), ('Finish homework');
```


## Run the below to install node modules

To run tests, run the following command

```bash
  npm i
```


## Data Base Connection

Make sure that the below DataBase connection in the Solution.js is changed accordingly. Specially write the database name and password accordingly.

```javascript
  const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "brba",
  port: 5432,
});
```


## Run the below command to execute the project



```bash
  node solution.js
```

