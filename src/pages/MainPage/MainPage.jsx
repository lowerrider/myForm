import Divider from "../../ui/Divider/Divider";
import Container from "../../ui/Container/Container";
import Header from "../../ui/Header/Header/Header";
import MainForm from "../../ui/MainForm/MainForm";
import PageWrapper from "../../ui/PageWrapper/PageWrapper";
import ButtonLink from "../../ui/ButtonLink/ButtonLink";
import { ROUTES } from "../../constants/constants";
import cn from "./Mainpage.module.scss";

function MainPage() {
  return (
    <PageWrapper>
      <Container classname={cn.wrapper}>
        <Header />
        <Divider />
        <MainForm />
        <ButtonLink path={ROUTES.createForm} content="Начать" />
      </Container>
    </PageWrapper>
  );
}

export default MainPage;
