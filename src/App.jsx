import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import home from '@ui5/webcomponents-icons/dist/home';
import './App.css'
import {
  Panel, Text, Title, Page, Bar, Button,
  Label, Icon, Input, SuggestionGroupItem, SuggestionItem,
  Form, FormItem, TextArea, DatePicker, FormGroup, ComboBox, Toolbar, ComboBoxItem, TabContainer, Tab
} from '@ui5/webcomponents-react';
import '@ui5/webcomponents-icons/dist/Assets.js';
import '@ui5/webcomponents-icons/dist/AllIcons';
import PZCodes from './pzc';
import '@ui5/webcomponents/dist/features/InputSuggestions.js';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import '@ui5/webcomponents-react/dist/Assets';

const initialPatientList = [
  {
    patNr: 120,
    firstName: "Max",
    lastName: "Mustermann",
    dateOfBirth: '1980-04-12',
    pzcCode: ''
  }
];

function App() {
  const [count, setCount] = useState(0);

  const [pzFilter, setPZFilter] = useState("");

  const [pzCode, setPZCode] = useState("");

  const TreatmentCodes = PZCodes.getAllPZCodes();


  const handlePZCodeInput = (event) => {
    const pzFilterValue = event.target.value;
    console.log(pzFilterValue);
    setPZFilter(pzFilterValue);
  }

  const handlePZCodeChange = (event) => {
    console.log(event);
  }

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  }


  //         footer={<Bar design="FloatingFooter" endContent={<><Button design="Positive">Accept</Button><Button design="Negative">Decline</Button><Button design="Transparent">Cancel</Button></>} startContent={<Button icon="home" title="Go Home" />} />}

  return (
    <>
      <Page
        backgroundDesign="Solid"
        header={<Bar design="Header"
          endContent={<Button icon="settings" title="Go to Settings" />}
          startContent={<Button icon="home" title="Go Home" />}>
          <Label>Behandlungsliste</Label></Bar>}
        style={{
          height: '500px'
        }}
      >
        <Toolbar>
          <ComboBox onChange={handleThemeChange}>
            <ComboBoxItem text="sap_horizon" />
            <ComboBoxItem text="sap_horizon_dark" />
            <ComboBoxItem text="sap_horizon_hcb" />
            <ComboBoxItem text="sap_horizon_hcw" />
            <ComboBoxItem text="sap_fiori_3" />
            <ComboBoxItem text="sap_fiori_3_dark" />
            <ComboBoxItem text="sap_fiori_3_hcb" />
            <ComboBoxItem text="sap_fiori_3_hcw" />
          </ComboBox>
        </Toolbar>
        <TabContainer>
          <Tab text="Behandlungen">
            <Form columnsL={2}
              columnsM={2}
              columnsS={1}
              columnsXL={2}>
              <FormGroup titleText='Patientenidentifikation'>
                <FormItem label="Pat.Nr."><Label>1</Label></FormItem>
              </FormGroup>
              <FormGroup titleText="Persönliche Daten" >

                <FormItem label="Vorname">
                  <Input type="Text" />
                </FormItem>
                <FormItem label="Nachname">
                  <Input type="Text" />
                </FormItem>
                <FormItem label="Geburtsdatum">
                  <DatePicker
                    onChange={function _a() { }}
                    onInput={function _a() { }}
                    onValueStateChange={function _a() { }}
                    primaryCalendarType="Gregorian"
                    valueState="None"
                  />
                </FormItem>
              </FormGroup>
              <FormGroup titleText="Behandlungsinformationen">
                <FormItem label="PZ Code">
                  <Input
                    icon={null}
                    onInput={handlePZCodeInput}
                    onChange={handlePZCodeChange}
                    placeholder="type anything to show suggestions"
                    showSuggestions
                    style={{
                      width: '400px'
                    }}
                    type="Text"
                    valueState="None"
                  >
                    {/* {TreatmentCodes.map((pzGroup, index) => {
            return renderPzGroup(pzGroup, index, pzFilter);
          })}; */
                      PZCodes.getFilteredPZCodes(pzFilter).map((pzGroup, index) => {
                        return renderPzGroup(pzGroup, index);
                      })
                    }


                  </Input>
                </FormItem>
                <FormItem label={<Label style={{ alignSelf: 'start', paddingTop: '0.25rem' }}>Zusätzliche Anmerkungen</Label>}>
                  <TextArea
                    placeholder="The styles of the Label of the TextArea FormItem is set to: alignSelf: 'start', paddingTop: '0.25rem'"
                    rows={5}
                  />
                </FormItem>
              </FormGroup>




            </Form>
          </Tab>
          <Tab text="Patienten">

          </Tab>
          <Tab text="PZ Codes">
            
          </Tab>
        </TabContainer>

      </Page>

    </>
  )
}



const renderPzGroup = (group, index) => {
  return <><SuggestionGroupItem text={group.groupName} key={index} /> {renderPzElements(group.elements)} </>;
}

const renderPzElements = (elements) => {
  const pzElements = elements.map((element) => {
    return (<SuggestionItem text={element.name} additionalText={element.code} id={element.code} image={deriveImageName(element)}></SuggestionItem>)
  });
  // console.log(pzElements);
  return (pzElements);
}

const deriveImageName = (element) => {
  const host = element.hospitalization;
  if (host.red && host.yellow && host.green) return "template-123.png";
  if (host.red && host.yellow) return "template-12.png";
  if (host.red) return "template-1.png";
  if (host.yellow && host.green) return "template-23.png";
  if (host.green) return "template-3.png";
  if (host.yellow) return "template-2.png";
}

const isNumeric = (toBeChecked) => {
  return !isNaN(toBeChecked);
}

export default App;
