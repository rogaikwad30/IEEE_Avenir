# IEEE_Avenir
This repo has all the tasks done by the team "Optimistic Nerds" in the competion.

## Final Submission Link
- https://ieee-avenir-optimistic-nerds.herokuapp.com/

## Deployed Branch
- prefinal

## Features 
- Each timeline had 3d icon. 
- Use Left Mouse to rotate the came 
- Mouse scroll button to zoom in and zoom out

## Steps to setup project locally
- git clone https://github.com/rogaikwad30/IEEE_Avenir.git
- npm install
- node server.js   OR   nodemon server.js 
- head over to  http://localhost:8000/  in the browser

## Folder Structure 
- html : contains all the html files (views dir)
- public : has all static files used by html i.e.. css , js and three.js setup files and 3d icons with .gltf extenssion

## Why Node Js ?
- Only for "DEPLOYMENT" purpose to create a static server and sending html files on specified endpoints only.

## Note
- To experiment with story we have provied with 10 3d icons int the public folder. Some of them are used by the actual link but the one which are not used are bit space consuing (upto 100mbs) and causing rendering execution on server to degrade.
- You can use this icons on localhost as it will not cause rendering degradation there.
- To change icons got to 'publiic/js/*.js' file and load the icon `loader.load("../js/3dIcons/one/scene.gltf", function(gltf)` by replacing one to anything between 2 to 10. 

### Stay tuned for more three.js content......
