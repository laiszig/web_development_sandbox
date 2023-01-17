TypeScript :- 
-------------
JavaScript:- 
Based on JavaScript, we have some scripts

		ES5/ES6  :- ECMA Script 
		TypeScript 

Based on above two scripts, there are different script languages are evaluted in the market.

1.  TypeScript - Angular
2.  ES5/ES6    - React

the above script lang need another JS, Node JS.

These all script lang are built on the top of JavaScript. 
 
What is a typescript?

It is a programming lang which is developed based on JavaScript. 

TypeScript is a superset of JavaScript, which adds Data Types, OOPS Concepts some other features like Arrow Functions, MultiLine Strings, String Interpolation and Modules etc....

TypeScript =  JavaScript + DataTypes + OOPS Concepts + Misc. Concepts(Arrow Functions, ....)

TypeScript developed by Microsoft in the year of 2012. 

Advantages :- 
1. Static Types and Type Safety:-
Basically every variable declared with a data type. So that we can't assign another type of value to that variable. 
Here Static Type means fixing data type for a variable.
Type Safety means we can't change data type of variable.

2. Identification of Errors :- 
Typescript shows errors while coding / while compiling the program. 

3.  Classes and Interfaces
TypeScript allows to use OOPS Concepts

4.  Intellisense 
While coding automatic suggestions will be provided. i.e. syntax of statements etc.
---------------------------------------------------
Steps to install typescript :- 

1. Download and instal "Node JS".
2. With the help of NOde JS, install  "TypeScript", 
3. Now goto command prompt, then use following command to install typescript
		"npm  install typescript -g"
4. To Write program, use VSCode Software.
-----------------------------------------------------
Steps to write typescript:- 

1. Open VSCode Editor then write program of TypeScript
2. Save with .ts extension.
3. Goto Command Prompt, then compile the program as follows
	tsc <filename.ts>
4. Once it is successfully compiled, it will generate an output file having extension ".js"
5. Now execute program with following command
	node  <filename.js>
-----------------------------------------------------
Data Types :- 
		number :- it is used to declare variable with integer or float.
		string :- it is used to declare variable for set of chars.
		boolean :-  only two values(true/false).
		any  :-  it allows to store any type of value.

To declare varaible use following syntax:-
		var  <Variablename> : <data type> = <value>;

		var x:number= 100;
		var y:number=12.45;
		var str :string = "TypeScript";
		var b: boolean = true
		var n:any = 5678;
-------------------------------------------
How to create a class? 
class <classname>
{
	variable:datatype = value;

	methodname([arguments]):return type
	{
		body of the program
	}
}

Note :-  to access variable into method of the class, we have to use "this"
Object Creation :- 

var  ObjectName/ReferenceVariableName = new <classname>([parameters]);

Once object is created, we can call methods as follows

object.methodname(..)
---------------------------
Constructor :- it is a special method of the class which will be executed whenever object created for that class. 

constructor([arguments])
{
	body of the constructor
}

------------------------
Inheritance :- 

class childclassname extends parentclass
{
	body of the class
}

here also, we have 

Single Inheritance
Multi Level
Multiple
Hirarchical
Hybrid

here Multiple inheritance is not possiable b/w classes. why because a child class can inherit only one parent class. to achieve  Multiple Inheritance use "Interface". 

Interface :-  It is one type of class which has only declarations of variables and methods. 

interface <iface name>
{
	variablename:data type;
	methodname([arg]):return type;
}

once interface is created, that has to inherit to the class with "implements" keyword. 

class <classname> implements <ifacename>
{
	.....
}
-------------------------------------------------
Modules :- Modules nothing but packages in java. 

A Module is a file, which can export one or more classes to other files. The other files can import those files. 

whenever module file creating, while defining class "export" keyword has to be precded. 
those classes which preceeded with "export" can import into other classes. 

