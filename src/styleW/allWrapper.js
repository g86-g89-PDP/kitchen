import styled from "styled-components";

const MainW=styled.div`
    display: flex;
    transition: 0.3s;



    /* dashboard qismi, o'zgartirish kiritmela */
    .dashboard{
        width: 100px;
        min-height: 100vh;
        background: #1F1D2B;
        position: sticky !important;
        top: 0;
        left:0;
        ul{
            list-style-type: none;
            padding: 0;
            margin: 0;
            li{
                a{
                    text-decoration: none;
                    color: #EA7C69;;
                    &:hover{
                        color: black;
                    }
                }
            }
        }
    }

    /* o'ng taraf */
    .rightPage{
        flex: 1;
        min-height: 100vh;
        width: 400px;
        background: #2D303E;

    }


`;
export {MainW}