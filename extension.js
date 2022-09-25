// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "sandarrow" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "sandarrow.helloWorld",
    function () {
      // The code you place here will be executed every time your command is executed

      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showWarningMessage("No active text editor found!");
        return;
      }
      const selection = editor.selection;
      const position = new vscode.Position(1, 1).translate(1, 0);
      console.log(position);
      const text = editor.document.getText(selection);
      console.log(text);
      editor.edit((edit) => {
        console.log(edit);
      });
      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World from sandarrow!");
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
