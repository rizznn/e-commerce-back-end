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
GET all categories, products and tags
![image](https://user-images.githubusercontent.com/80712058/133092676-d255bb0f-5cd5-40b6-b6aa-5095f8339eab.png)
![image](https://user-images.githubusercontent.com/80712058/133092823-d3dc6897-c90f-46a3-b985-416131c0ef64.png)
![image](https://user-images.githubusercontent.com/80712058/133092876-5a74158b-0720-4587-a860-e589f620ce14.png)


GET one category, product and tag
![image](https://user-images.githubusercontent.com/80712058/133092995-28b971b3-8a79-4507-bcc0-1c6c9b14dbfc.png)
![image](https://user-images.githubusercontent.com/80712058/133093080-0d7c8fc0-e6d7-433d-a5a4-447229147b69.png)
![image](https://user-images.githubusercontent.com/80712058/133093126-46efe222-acec-4c58-8794-62189f286400.png)


POST, PUT and DELETE a category
![image](https://user-images.githubusercontent.com/80712058/133093453-4f23e3b5-a88e-4260-a105-255be0a34b5f.png)
![image](https://user-images.githubusercontent.com/80712058/133093577-b0070db1-307b-4263-9436-6be392746aa9.png)
![image](https://user-images.githubusercontent.com/80712058/133093690-8e709656-7063-4b1f-85c4-a119f87a3655.png)

POST, PUT and DELETE a product
![image](https://user-images.githubusercontent.com/80712058/133168716-1b831533-a8c5-4241-8624-55583f352019.png)
![image](https://user-images.githubusercontent.com/80712058/133169013-1cf125cf-1f8c-4b64-a335-a93aade75f84.png)
![image](https://user-images.githubusercontent.com/80712058/133169061-6e99331f-9bea-4452-ad70-a365e843fc02.png)

POST, PUT and DELETE a tag
![image](https://user-images.githubusercontent.com/80712058/133169105-d3eaabe1-fa64-444c-9666-79a8eca2ec6e.png)
![image](https://user-images.githubusercontent.com/80712058/133169140-28fc0116-2b3d-4830-bbfe-df975e9ccc5f.png)
![image](https://user-images.githubusercontent.com/80712058/133169167-430b7f07-6bd8-4091-9ba3-219c52a0e6d4.png)


## Contributing
Contact me or create an issue or pull request

## Questions
  To reach me for additional questions:

  Github username: rizznn 

  Github link: [https://github.com/rizznn](https://github.com/rizznn) 

  Email me at [rizzel_nolasco17@yahoo.com](mailto:rizzel_nolasco17@yahoo.com)

## Link to application repo
https://github.com/rizznn/e-commerce-back-end

## Walkthrough Video
Part 1 : create schema, seed database, start application, GET all, one, POST, PUT, DELETE categories and products, and GET all, one and POST tag:       https://drive.google.com/file/d/1cmMc44DXtB2rtkxrXMi53P8nsdcmTy80/view



Part 2 continuation: POST and DELETE of tag:     https://drive.google.com/file/d/112vlLwMPh7zX5Ajefy1SXtIvtJgqyJuP/view
