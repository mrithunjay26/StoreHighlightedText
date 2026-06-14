# StoreHighlightedText

Google Docs add-on prototype for capturing highlighted text, storing snippets in user properties, and managing those snippets from a document sidebar.

The project is a small Apps Script workflow tool: select text in a Google Doc, pull it into the sidebar, store it for later, and remove saved snippets by index.

## What It Shows

- Google Apps Script add-on menu integration
- Google Docs selection API usage
- Sidebar UI built with HTML, CSS, and client-side JavaScript
- `PropertiesService` storage for per-user saved snippets
- Server/client communication through `google.script.run`

## User Flow

```text
Open Google Doc
  -> Add-on menu loads
  -> Open Text Storage sidebar
  -> Select text in the document
  -> Click Get Text
  -> Store selected text
  -> Review or delete stored snippets
```

## Files

```text
code.gs         Apps Script server-side logic and Docs integration
sidebar.html    Sidebar interface and client-side event handlers
README.md       Project documentation
```

## Setup

1. Create a Google Apps Script project attached to a Google Doc.
2. Copy `code.gs` into the Apps Script editor.
3. Add `sidebar.html` as an HTML file named `sidebar`.
4. Save and reload the Google Doc.
5. Open the add-on menu and launch the sidebar.

## Verification

Current checks performed:

- Parsed `code.gs` as JavaScript
- Parsed inline scripts inside `sidebar.html`
- Confirmed the project contains the expected sidebar and Apps Script entry points

## Known Maintenance Notes

- `getSelectedText` is currently defined twice in `code.gs`; the duplicate should be consolidated.
- The project does not yet include an `appsscript.json` manifest.
- There is no automated Apps Script test suite yet.

## Next Improvements

- Add an Apps Script manifest with explicit scopes
- Replace index-based deletion with clickable snippet rows
- Add copy-to-document and copy-to-clipboard actions
- Add tagging or folders for stored text snippets
- Add screenshot/GIF documentation for the sidebar workflow
- Add clasp-based deployment instructions
