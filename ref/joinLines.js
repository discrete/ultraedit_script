/*
Script:   joinLines.js
Created:	2008-07-17
Modified:	2008-07-17
Author:   Robby Grossman

joinLines takes a set of selected lines and merges them into a single line.
*/

// Grab selection
var myString = UltraEdit.activeDocument.selection;

// Remove line endings.
// Remove DOS line endings.
myString = myString.replace(/\r\n/g, ' ');
// Remove MAC line endings
myString = myString.replace(/\r/g, ' ');
// Remove UNIX line endings
myString = myString.replace(/\n/g, ' ');

// Remove selection from document.
UltraEdit.activeDocument.deleteText();

// Add the modified string back into the document.
UltraEdit.activeDocument.write(myString);
