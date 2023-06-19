import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Container from "../../ui/Container/Container";
import PageWrapper from "../../ui/PageWrapper/PageWrapper";
import TabBar from "../../ui/TabBar/TabBar";
import FormStepOne from "../../ui/Forms/FormStepOne/FormStepOne";
import FormStepTwo from "../../ui/Forms/FormStepTwo/FormStepTwo";
import FormStepThree from "../../ui/Forms/FormStepThree/FormStepThree";
import Modal from "../../ui/Modal/Modal";
import {
  INITIAL_VALUES,
  REQUEST_STATUS,
  REQUEST_URL,
  TABS,
} from "../../constants/constants";
import cn from "./CreateFormPage.module.scss";

function CreateFormPage() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [data, setData] = useState(INITIAL_VALUES);
  const [showModal, setShowModal] = useState(false);
  const [modalStatus, setModalStatus] = useState(REQUEST_STATUS.error);

  const formOne = useForm({
    defaultValues: data,
    mode: "all",
  });

  const formTwo = useForm({
    defaultValues: data,
    mode: "all",
  });

  const formThree = useForm({
    defaultValues: data,
    mode: "all",
  });

  function triggerClick(form, tab) {
    form.trigger().then((res) => {
      if (res) {
        setActiveTab(tab);
      }
    });
  }

  function changeActiveTab(tab) {
    const tabKey = tab.key;
    const activeTabKey = activeTab.key;
    if (tabKey - 1 === activeTabKey || tabKey + 1 === activeTabKey) {
      switch (tabKey) {
        case TABS[1].key:
          triggerClick(formOne, tab);
          break;
        case TABS[2].key:
          triggerClick(formTwo, tab);
          break;
        default:
          setActiveTab(tab);
      }
    }
  }

  function formattedData(data) {
    const { advantages, radio, checkbox, ...restData } = data;
    const formattedAdventages = advantages.map((el) => el.value);
    const formatedCheckboxes = checkbox.map((el) => Number(el));
    return {
      ...restData,
      advantages: formattedAdventages,
      radio: Number(radio),
      checkbox: formatedCheckboxes,
    };
  }

  async function onSubmit(formData) {
    const requestData = { ...data, ...formData };
    try {
      const res = await axios.post(REQUEST_URL, formattedData(requestData));
      setModalStatus(res.data.status);
      setShowModal(true);
    } catch (er) {
      console.error(er);
    }
  }

  return (
    <PageWrapper>
      <Container classname={cn.wrapper}>
        <TabBar
          activeTab={activeTab}
          tabs={TABS}
          onTabClick={changeActiveTab}
        />
        <div className={cn.container}>
          {activeTab.key === TABS[0].key && (
            <FormStepOne
              onForvardClick={() => setActiveTab(TABS[1])}
              initialValues={data}
              setData={setData}
              formOne={formOne}
            />
          )}
          {activeTab.key === TABS[1].key && (
            <FormStepTwo
              onClickForward={() => setActiveTab(TABS[2])}
              onClickBack={() => setActiveTab(TABS[0])}
              formTwo={formTwo}
              initialValues={data}
              setData={setData}
            />
          )}
          {activeTab.key === TABS[2].key && (
            <FormStepThree
              formThree={formThree}
              onClickBack={() => setActiveTab(TABS[1])}
              onSubmitForm={onSubmit}
            />
          )}
        </div>
      </Container>
      {showModal && (
        <Modal modalStatus={modalStatus} onClose={() => setShowModal(false)} />
      )}
    </PageWrapper>
  );
}

export default CreateFormPage;
