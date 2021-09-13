# E-commerce Back End
This back end for e-commerce sites which uses the latest technologies. This will help managers at an internet retail company for better competition with other e-commerce companies. It includes a working Express.js API then configure it to use Sequelize to interact with a MySQL database.

## Technologies
This website is created with Visual Studio Code using node.js, express.js, mysql2, sequelize and dotenv. Project repo created here in Github.

## Installation
1. Make sure you have node.js installed on your system (if you have node.js, you have npm as well)
2. Navigate to the directory where you want the repository to be cloned in your terminal.
3. Clone the repository: in your terminal, `git clone https://github.com/rizznn/e-commerce-back-end.git`for https OR `git clone git@github.com:rizznn/e-commerce-back-end.git` for ssh
4. Navigate to the directory of the cloned repository in your terminal.
5. Create a file called  `.env`  in the root folder and add the code:
  
         DB_NAME = 'ecommerce_db'
        
         DB_USER = 'your-mysql-username'
         
         DB_PW = 'your-mysql-password'

6. Add  `.env`  to  `.gitignore`  file
7. In your terminal, type  `npm install` to install the npm modules
8. Make sure you have MySQL installed on your system
9. Go to MySQL shell by typing  `mysql -u root -p` 
10. A password will be asked to login to MySQL shell

      NOTE:     Some system might get the error message "Command not found", add the following line of code to your `.bash_profile` file (or if you’re using ZSH,                         add it to your `.zshrc` file):

          export PATH="${PATH}:/usr/local/mysql/bin/"
      

11. In MySQL shell, type  `source db/schema.sql;`  to run the file
12. Then type  `quit;`  to quit the MySQL shell
13. In your terminal, type `npm run seed` to run the seed file
14. Then run the app by typing:  `npm start`

## Usage
In your terminal, run the seed by typing `npm run seed` then `npm start` to run the app.
* User will be able to create, read, update and delete (CRUD) categories, products and tags

## Screenshots


## Contributing
Contact me or create an issue or pull request

## Questions
  To reach me for additional questions:

  Github username: rizznn 

  Github link: [https://github.com/rizznn](https://github.com/rizznn) 

  Email me at [rizzel_nolasco17@yahoo.com](mailto:rizzel_nolasco17@yahoo.com)

## Link to application repo
https://github.com/rizznn/e-commerce-back-end
