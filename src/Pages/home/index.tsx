import { Header } from "../../Components/Header";
import { Restaurants } from "../../Components/Restaurants";
import { MainContainer } from "../../GlobalStyle";

export const Home = () => {
  return (
    <>
      <Header size="big" />
      <div className="container">
        <MainContainer>
          <Restaurants />
        </MainContainer>
      </div>
    </>
  );
};
