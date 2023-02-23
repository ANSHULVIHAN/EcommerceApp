import styled from "styled-components";
import img2 from '../componentss/assets/Logo-1.png';
import img3 from '../componentss/assets/equipment.png';
import img4 from '../componentss/assets/target.png';
import img5 from '../componentss/assets/Logo-1.png';

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src={img2}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src={img3}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src={img4}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src={img5}
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
          
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
 
  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
   
    font-size: 2rem;
    font-weight: bold;
  }
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
