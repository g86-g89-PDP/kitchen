import styled from "styled-components";


export const TabsWrapper = styled.div`
        display: inline-block;
   
        .header {
        width: 273px;
        height: 299px;
        display: flex;
        justify-content: center;
        align-items: center !important;
        padding-bottom: 50px;
        margin-top: 45px;
        border: 2px solid #EA7C69;
        .btn{
             color: #EA7C69 !important;
        }
    }

    .card-container {
        height: 300px;
        width: 300px;
        
    }

    .card-wrapper {
        width: 221px;
        height: 299px;
        display: flex;
        flex-direction: column;
        text-align: center !important;
        border: 1px solid #323441;
    }

    .card-top {
        width: 100%;
        height: 2%;
    }

    .task-holder {
        width: 100%;
        height: 400px;
        padding: 10px 10px;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .card-header {
        /* margin-top: 10px;
        margin-bottom: 10px; */
        margin: 0 auto;
        width: 80px;
        height: 30px;
        padding: 1px 1px !important;
        text-align: center;
        color: white;
        font-weight: bold;
    }

    .buFlex{
        display: flex;
    }

    .task-container {
        height: 600px;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding-top: 40px ;
    }
    .food{
        width: 143px;
        height: 140px;
        object-fit: cover;
        margin: 0 auto;
    }
    .margin {
        right: 34%;
        background-color: #50343A;
        width: 100%;
        height: 50px;
        left: 1px;
        bottom: 0;
        
        i {
            margin: 15px;
            color: #9D5851 !important;
        }
    }

    @media screen and (max-width: 600px){
        .header{
            width: 200px;
            margin-left: 40px;
        }
        .buFlex{
            display: flex;
            flex-direction: column;
        }
      
    }

    /* .task-container{
        width: 100%;
        height: 400px;
      
    
    }
    li{
        display: inline-block;
        list-style-type: none;
        background-color: yellow;
        margin: 20px;
        padding: 10px;
    } */
`;