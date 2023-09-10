# Demo UI
![]("/../Screenshot/Screenshot.png")

# how to run
1. make an .env file 
    ```js
    REACT_APP_API_BASE_URL=http://yourapihost
    ```
2. make an .env file 
    ```powershell
    npm i
    ```
3. make an .env file 
    ```powershell
    npm start
    ```
4. hit the localhost:3000 on your machine 

# Run with docker

1. build the Docker image
    ```powershell
    docker build -t react-nginx-app .
    ```
2. run the Docker image
    ```powershell
    docker run -p 3000:80 react-nginx-app.
    ```
3. hit the localhost:3000 on your machine 