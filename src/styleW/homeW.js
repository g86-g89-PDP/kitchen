import styled from "styled-components";

const Home = styled.div`
  display: flex;
  transition: 0.3s;

  /* asosiy qismi */
  .rightPage1 {
    width: 400px !important;
    min-height: 100vh;
    background-color: #1f1d2b !important;
    padding: 14px;

    .ub-w_620px {
      width: 320px !important;
    }

    .topWord {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 140%;
      color: #ffffff;
    }
    .btnLight {
      background: #ea7c69;
      border-radius: 8px;
      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 0px 8px;
      color: white;
    }
    .btnDark {
      background: #1f1d2b;
      border: 1px solid #393c49;
      box-sizing: border-box;
      border-radius: 8px;
      flex: none;
      order: 1;
      flex-grow: 0;
      margin: 0px 8px;
      color: #ea7c69;
    }
  }
  .homeHead {
    flex: 1;
    padding: 10px 15px;
    .homeHeadSm {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .dashboardName {
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 140%;
      color: #ffffff;
      margin-bottom: 0;
    }
    .date {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
      color: #e0e6e9;
      margin: 0;
    }
    .HeaderInpCard {
      width: 200px;
      .HeaderInp {
        background: #2d303e;
        border: 1px solid #393c49;
        box-sizing: border-box;
        border-radius: 8px;
      }
    }
  }
  .MuiButtonBase-root {
    background: #2d303e;
    color: #ea7c69;
    font-weight: 600;
    font-size: 10px;
    padding: 0 0 0 0 !important;
    margin: 0 0 0 0 !important;
    width: 50%;
  }
  .MuiTabs-flexContainer {
    background: #2d303e;
    box-shadow: none !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  .MuiBox-root {
    background: #2d303e;
    padding: 0 !important;
    margin: 0 !important;
  }
  .PrivateTabIndicator-root-2 {
    background: #ea7c69;
  }
  .imgCard1 {
    margin: 10px 50px 10px 50px;
    padding: 20px 0 0 0;
    position: relative;
    .imgCard2 {
      margin-top: 30px;
      background: #1f1d2b;
      border-radius: 16px;
      min-height: 210px;
      display: flex;
      align-items: flex-end;
      padding-bottom: 10px;
      .imgword1 {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 130%;
        text-align: center;
        color: #ffffff;
        padding: 0 25px;
      }
      .imgword2 {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        text-align: center;
        color: #abbbc2;
      }
      .Img {
        width: 125px;
        height: 125px;
        object-fit: cover;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
      }
      .infMeal {
        text-align: center;
        width: 100%;
      }
    }
  }
  .makeStyles-root-1 {
    max-width: 850px !important;
  }
  .MuiTab-root {
    width: 50px !important;
  }
  .onTop {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 140%;
    color: #ffffff;
  }
  .btnTop {
    background: #1f1d2b;
    border: 1px solid #393c49;
    box-sizing: border-box;
    border-radius: 8px;
    color: #abbbc2;
  }
  .onTop {
    background-color: #2d303e;
    padding: 10px 30px 0 30px;
  }
  .jkl {
    border-bottom: 1px solid #393c49;
  }
  .todoImg {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 5px;
  }
  .todoInput {
    width: 150px;
    display: flex;
    align-items: center;
  }
  .inp {
    width: 40px;
    height: 40px;
    background: #2d303e;
    border: 1px solid #393c49;
    box-sizing: border-box;
    border-radius: 8px;
    margin: 5px;
    color: white;
  }
  .inp2 {
    width: 100%;
    height: 40px;
    background: #2d303e;
    border: 1px solid #393c49;
    box-sizing: border-box;
    border-radius: 8px;
    margin: 5px;
    color: white;
  }
  .todoAppCard {
    .imgword2 {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 140%;
      color: #abbbc2;
      margin-top: 0;
    }
    .sozlar {
      padding: 0 5px;
      width: 100%;
      display: flex;
      align-items: center !important;
      height: 100%;
      margin-top: 10px;
    }
  }
  .deleteBtn {
    background: #1f1d2b;
    border-radius: 8px;
    border: 1px solid #ff7ca3;
    color: #ff7ca3;
  }
`;
export { Home };
