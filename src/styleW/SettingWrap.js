import styled from "styled-components";


export const SettingsWrapper = styled.div`
  
    overflow-x: hidden !important;
    margin: 10px;
   
    .settings{
        background-color: #1F1D2B;
        border-radius: 15px;

        .active{
            background-color: #54353B;
        }

        .menu {
        padding: 20px;
            &:hover{
                cursor: pointer;
            }
            .menuName{
                display: flex !important;
            }
          
            .menuText{
                color: #9AA7AF;
            }
        }
    }
    .tabs{
        padding: 5px;
        border-radius: 15px !important;
    }
    .MuiAppBar-colorPrimary{
        background-color: #1F1D2B !important;
    }
    .active{
        background-color: #54353B;
        border-right: 4px solid #EA7C69;
        .Discourse{
            color: #EA7C69;
        }
        h5{
            color: #EA7C69;
        }
    }   
    .Management{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .Products{
        border-radius: 15px;
        padding: 10px;
        h3{
            color: white;
        }
        .Manage{
        display: flex;
        align-items: center;
        border: 1px solid white;
        border-radius: 10px;
        padding: 0 10px 0 10px;
        cursor: pointer;
        p{
            padding-top: 12px;
        }
        .controlIcon{
            margin: 2px 4px 4px 4px;
            font-size: 20px;
        }
    }
    }
    .MuiTab-root{
        min-width: 150px;
    }

`;