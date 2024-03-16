3. Classes and interfaces 
Typescript allows to use OOPS Concepts

4. Intelligence
While coding automatic suggestions will be provided. ie syntax of statements etc.

-----------

Steps to install typescript:
- Download and install Node JS
- With the help of Node JS, install "TypeScript"
- To write program, use VSCode Software.

Steps to write typescript:
1. Open VSCode Editor then write program of TypeScript
2. Save with .ts extension
3. Go to cmd, then compile the program as follows.
        tsc <filename.ts>

--------------

how to declar variable in typescript?
var variable : data type = value;

--------------

Constructor: 
it is a special method of the class which will be executed whenever object created for that class.

constructor ([arguments]) {
        body of the constructor
}

Here Multiple inheritance is not possible b/w classes. Because a child class can inherit only one parent class. To achieve multiple inheritance use Interface.

Interface: it is one type of class which has only declarations of variables and method

interface <iface name> {
        variablename: data type;
        methodname([arg]): return type;
}

once interface is created, inheritance is achieved with "implements" keyword


---------

Modules: 
- Modules are like packages in Java.

A Module is a file, which can export one or more classes to other files. The other files can import thos files.

whenever module file creating, while defining class "export" keyword has to be preceded.
those classes which preceeded with "export" can import into other classes.

