import { createGlobalStyle } from "styled-components";
import { normalize } from "react-style-reset/string";

export const GlobalStyle = createGlobalStyle`

${normalize};
 
*{
    padding:0; 
    margin:0;
    box-sizing: border-box;
    list-style: none;
}

html{
    font-family: 'Noto Serif KR', serif;
    background:#F2F2F2;
    color:#222940;
    body{
        overflow-x: hidden;
        a{
            text-decoration: none;
            outline: none;
            color:white;
        }
        p{margin:0;}
    }
}


`;
