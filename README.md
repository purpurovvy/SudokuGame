# Sudoku Game 🎮

The app is written in: React, Redux, Typescript, Styled-components technolgies. It generate a new sudoku game every time you visit the page.
There is an option to create own game if correct schema will be provided. <br />
Please keep in mind that board is 9x9 so maximum index of column and row is 8. The maximum value in block is 9.<br />
That's why wrong inputs will be omitted eg. "[10][0]:2" or "[0][0]:10".<br />

## Project structure

All components are in catalogue "components". There is special subcataloge "styled-components" which contains generic components used in whole project. You can spotted them later with prefix S e.g. <S.Container>.
The biggest components base on 3 files: 

  - Name}.tsx - core part of component which is exported
  
  - {Name}Styled.ts - styling parts which are use only in particular component
  
  - use{Name}.ts - contains logic of component

Catalog global contains global theme, values and typings used across of project

Catalog store include whole logic for Redux

Catalog sudokuLogic embrace all logic which responsible for algorithms in the game + tests.

Catalog utils currently have only one utils which is regex function. However maybe it will be extended in feature.

## Project installation

The installation process is typical for any React application: </br>
1. Download code </br>
2. npm install </br>
3. npm run start

## Enjoy and have fun! Url: https://purpurovvy.github.io/SudokuGame/ 😄
