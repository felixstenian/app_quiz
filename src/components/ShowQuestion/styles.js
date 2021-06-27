import styled from 'styled-components'

export const Container = styled.div`

    background: rgba(255,255,200, 0.2);
    border: 1px solid rgba(0,0,0, 0.2);
    border-radius: 10px;
    padding: 10px;
    margin: 5px;
    margin-bottom: 10px;

  article {
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;


      h5 {
        background: #fff5af;
        padding: 0 10px;
        border: 1px solid rgba(10, 10, 10, 0.3);
        border-radius: 10px;
        text-align: center;
        font-weight: 400;
        color: #3a3a3a;
      }

      h6 {
        font-size: 1.2rem;
        padding: 2px 10px;
        border: 1px solid rgba(10, 10, 10, 0.3);
        border-radius: 10px;
        text-align: center;
        margin-top: 5px;
        font-weight: 400;
        color: #3a3a3a;
      }

      .hard {
        background: #b38adc;
      }

      .easy {
        background: #cae89a;
      }

      .medium {
        background: #7fa0ea;
      }
  }
`
