import styled from "styled-components";


export const SettingsWrapper = styled.div`
  
    overflow-x: hidden !important;
    margin: 10px;
    .Manage{
        display: flex;
        .controlIcon{
            margin: 2px 4px 4px 4px;
            font-size: 20px;
        }
    }
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
                align-items: center !important;
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
    
`;