your .env file should look like this:

```
PGDATABASE=week6cado_db
PGUSER=yourusername
PGPASSWORD=yourpassword
```

if you have `DATABASE_URL` in `.env` file remove it because we were getting errors and we don't know why but removing it helped.

then tun `psql` in your terminal:
1. type `CREATE DATABASE week6cado_db`.
2. then connect to databse `\c week6cado_db`
3. then initilise `\i source/database/init.sql`.
4. then grant priviliges:
  * `GRANT ALL PRIVILEGES ON DATABASE week6cado_db TO your-username;`
  * `GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO your-username;`