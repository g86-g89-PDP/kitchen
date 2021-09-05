import styled from "styled-components";

export const DashboardsWrapper = styled.div`
  background-color: #242424;
  .container {
    margin-top: 0;
    width: 100%;
    height: 100vh;
    color: white !important;
  }

  .card {
    background-color: black;
  }
  .summery-card {
    padding: 16px;

    position: static;

    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .img1 {
    margin-right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .client {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 8px;
  }
  .head1 {
    display: flex;
    justify-content: space-around;
  }

  h6 {
    text-align: center;
  }
  /* Base / Dark Bg 2 */

  .butt button {
    border-radius: 20px;
    color: green;
  }
  .w-100 {
    border-color: red;
    color: red;
  }
  li {
    overflow: hidden;
  }
`;
