/**
 * @OnlyCurrentDoc
 */

function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Start', 'showSidebar')
      .addToUi();
}

function onInstall(e) {
  onOpen(e);
}

function showSidebar() {
  const ui = HtmlService.createHtmlOutputFromFile('sidebar')
      .setTitle('Text Storage');
  DocumentApp.getUi().showSidebar(ui);
}

function getSelectedText() {
  const selection = DocumentApp.getActiveDocument().getSelection();
  const text = [];
  if (selection) {
    const elements = selection.getSelectedElements();
    for (let i = 0; i < elements.length; ++i) {
      if (elements[i].isPartial()) {
        const element = elements[i].getElement().asText();
        const startIndex = elements[i].getStartOffset();
        const endIndex = elements[i].getEndOffsetInclusive();

        text.push(element.getText().substring(startIndex, endIndex + 1));
      }
    }
  }
  if (!text.length) throw new Error('Please select some text.');
  return text;
}

function storeText(text) {
  const userProperties = PropertiesService.getUserProperties();
  const storedText = userProperties.getProperty('storedText');
  if (storedText) {
    userProperties.setProperty('storedText', storedText + '\n' + text);
  } else {
    userProperties.setProperty('storedText', text);
  }
}

function getStoredText() {
  const userProperties = PropertiesService.getUserProperties();
  const storedText = userProperties.getProperty('storedText');
  return storedText ? storedText.split('\n') : [];
}
function getSelectedText() {
  const selection = DocumentApp.getActiveDocument().getSelection();
  const text = [];
  if (selection) {
    const elements = selection.getSelectedElements();
    for (let i = 0; i < elements.length; ++i) {
      if (elements[i].isPartial()) {
        const element = elements[i].getElement().asText();
        const startIndex = elements[i].getStartOffset();
        const endIndex = elements[i].getEndOffsetInclusive();

        text.push(element.getText().substring(startIndex, endIndex + 1));
      }
    }
  }
  if (!text.length) throw new Error('Please select some text.');
  return text;
}
function insertText(newText) {
  const sidebarText = PropertiesService.getUserProperties().getProperty('sidebarText');
  if (sidebarText) {
    PropertiesService.getUserProperties().setProperty('sidebarText', sidebarText + '\n' + newText);
  } else {
    PropertiesService.getUserProperties().setProperty('sidebarText', newText);
  }
}



function deleteStoredText(index) {
  const userProperties = PropertiesService.getUserProperties();
  const storedText = userProperties.getProperty('storedText');
  if (storedText) {
    const textArray = storedText.split('\n');
    if (index >= 0 && index < textArray.length) {
      textArray.splice(index, 1);
      userProperties.setProperty('storedText', textArray.join('\n'));
    }
  }
}
