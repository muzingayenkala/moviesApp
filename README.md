# moviesApp
Centbee Assesment
Attached is DB folder where the app database has been exported to in all formats. Open pgAdmin and import the database 
in whichever format you prefer.

The user details for the database are as follows:

user: 'moviesAdmin',
host: '127.0.0.1',
database: 'Movies',
password: 'admin',
port: '5432'

Also below is the SQL command to create the database should the import fail on pgAdmin:

-- Database: "Movies"

-- DROP DATABASE "Movies";

CREATE DATABASE "Movies"
  WITH OWNER = "moviesAdmin"
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'English_South Africa.1252'
       LC_CTYPE = 'English_South Africa.1252'
       CONNECTION LIMIT = -1;
GRANT ALL ON DATABASE "Movies" TO "moviesAdmin";
GRANT ALL ON DATABASE "Movies" TO public;

The SQL command to creat the table is as follows:

"CREATE TABLE movieList(id SERIAL PRIMARY KEY, Title VARCHAR(40) NOT NULL, Year VARCHAR(40) NOT NULL)"

The backend for the application is in the server folder and runs on port 3000. Navigate to that folder in command prompt and run the 
command 'nodemon' to start the server after doing an npm install in the directory from command prompt.

The ionic front end is in the app folder. Navigate into that folder and run the 'ionic serve' command after doing an npm install in the directory from command prompt.
