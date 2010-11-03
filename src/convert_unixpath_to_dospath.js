/**
 * 
 */
var myString = UltraEdit.activeDocument.selection;

myString = myString.replace(/\//g, '\\');

UltraEdit.activeDocument.deleteText();

UltraEdit.activeDocument.write(myString);