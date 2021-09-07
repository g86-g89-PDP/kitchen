import styled from "styled-components";

const MainW = styled.div`
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
            padding: 10px;
            margin: 0;
            li{
                display: flex;
                justify-content: center;
                padding: 5px;
                margin-bottom: 7px;
                background: #2D303E;
                border-radius: 8px;
                .dashboardSm{
                    background: #EA7C69;
                    box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.32);
                    border-radius: 8px;
                    width: 56px;
                    height: 56px;
                    color: #1F1D2B;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    p{
                        font-size: 25px;
                        padding: 0 0 5px 0;
                        margin: 0 !important;
                    }
                }
                a{
                    text-decoration: none;
                    color: #EA7C69;
                    padding: 10px;
                    border-radius: 10px;
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

    @media screen and (max-width:600px){
        &{
            display: block;
            overflow-x: hidden;
        }

        .dashboard{
        min-width: 100% !important;
        min-height: 100px !important;
        overflow-x: auto;
        ul{
            display: flex;
            li{
                margin:0 10px;
            }
           
        }


    }
    .rightPage{
        flex: 0;
        min-width: 100% !important;
        background: #2D303E;

    }
    }


`;
export { MainW }