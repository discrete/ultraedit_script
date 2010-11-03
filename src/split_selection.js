/**
 * 
 */
var myString = UltraEdit.activeDocument.selection;

/* var needle = UltraEdit.getString("Needle?", 1); */

myString = myString.replace(/;/g, ';\r\n');

UltraEdit.activeDocument.deleteText();

UltraEdit.activeDocument.write(myString);