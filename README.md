My portfolio project for Alx specialization

index.html: Contains the structure for the webpage and integrates the video player.
server.js: The backend Express server for serving files and handling static resources.
style.css: Custom styling for the webpage’s layout and design.

I have used OBS streaming software to input the resorces for streaming
I have tested the project locally on my computer. The code and configurations are run on UBUNTU:20.04 enviroment(wsl) on my windows computer. I have tested on Google chrome and Firefox web browsers. 

How to run the code:
prerequisites:
1. OBS streaming software 
2. Nginx with RMTP server installed on UBUNTU
3. Node Js installed 
4. Browsers for testing the output

Before running Server.js:
- Install Nginx with RMTP server so as to enable the streaming
- Run npm install to get dependencies from package.json and install them, and that will create a node_modules folder in your project

Now we are ready
- Check NGINX installation inputing command nginx -v, start NGINX and go to http://localhost to verify its running
- Now run the Node server by running the file server.js [i.e.: node server.js]
- start the streaming software

Go to your website on http://localhost:3000 and you will be able to play the streaming video

NB:-
Nginx port: 8080
Node js port: 3000
