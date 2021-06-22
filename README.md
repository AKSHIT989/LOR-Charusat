# LOR-Charusat
Automating the process of Letter of Recommendation for CHARUSAT

<img src="https://github.com/AKSHIT989/LOR-Charusat/blob/main/assets/LOR-Request%20page.png" width="100%"></h2>


### Process for contributing for collaborators:
NOTE: DO NOT CHANGE THE FOLDER STRUCTURE IT WON'T BE MERGED
1) For first time only 
```
git clone https://github.com/AKSHIT989/LOR-Charusat.git
cd LOR-Charusat/
```
2) Check the task list in project section https://github.com/AKSHIT989/LOR-Charusat/projects

3) For performing task you are supposed to create a branch with name associated and move the task from "To do" to "In progress".
Example: For Frontend project, To perform ``` 1:Build common components``` branch name should ```Frontend#1``` and move the card #1 from "To do" to "In progress"

You can checkout to a different branch using this command: 
```
git checkout -b <branch-name>
```

4) For working on Frontend/Backend
```
cd client/server
npm install
``` 
5) After completing your work you are supposed to push the changes back to remote
```
git add .
git commit -m "proper-message"
git push origin <branch-name>
```
Now move the task in project section from "In progress" to "Done"

6) If all things are good make a pull request but ```DON'T``` merge it directly.

7) If you are supposed to work on a different task then synchronise your local copy with remote repo and then perform task
```
git pull origin main
```
