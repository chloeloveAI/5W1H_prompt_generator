function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}

/**
 * Saves initial story data (5W1H and prompt) along with AI Story.
 * This function is triggered by submitAIStory() in the client code.
 */
function saveAIStory(data) {
  const spreadsheetId = '1RZyvtyX_UfymmPRsMkeY0TtbnHLp-JlLp0O9ud6BXqM'; // Replace with your Spreadsheet ID
  const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName('Stories');

  // Append AI story details
  // Format: Timestamp, Name, SchoolLevel, AgeGroup, WHO, WHAT, WHERE, WHEN, WHY, HOW, Words, Prompt, AI_Story
  sheet.appendRow([
    new Date(),
    data.name,
    data.schoolLevel,
    data.ageGroup,
    data.who,
    data.what,
    data.where,
    data.when,
    data.why,
    data.how,
    data.words,
    data.prompt,
    data.aiStory,    // AI-generated story
    '',              // Edited story (not yet provided)
  ]);

  return 'AI-generated story saved successfully!';
}

/**
 * Saves the edited version of the story.
 * Triggered by submitEditedStory() in the client code.
 * Assumes one row per story and the edited story is appended as a new row or stored separately.
 * 
 * For simplicity, we append a new row indicating this is the edited version.
 */
function saveEditedStory(data) {
  const spreadsheetId = '1dowhFOqSEDf_SzKxGvTZMe2gc8j9uHTJuDhKk2V_nv8'; // Replace with your Spreadsheet ID
  const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName('Stories');

  // Append edited story details
  // Format: Timestamp, Name, SchoolLevel, AgeGroup, WHO, WHAT, WHERE, WHEN, WHY, HOW, Words, Prompt, AI_Story(Blank), Edited_Story
  sheet.appendRow([
    new Date(),
    data.name,
    data.schoolLevel,
    data.ageGroup,
    data.who,
    data.what,
    data.where,
    data.when,
    data.why,
    data.how,
    data.words,
    data.prompt,
    '',              // AI story blank here, since this row is for the edited version
    data.editedStory // Edited story
  ]);

  return 'Edited story saved successfully!';
}
