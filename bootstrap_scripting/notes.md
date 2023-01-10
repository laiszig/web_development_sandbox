07/01/2022 Class

- JavaScript
- intro
- input/output statements
- control statements

-------

HTML & CSS are used to create static we pages
Scripting is a programming with web page

With the help of scripting we can create dynamic web pages, which will run at client side.
Dynamic web page means, adding functionality for a web page.

There are different types of scripts:
- ECMA Script > Very First Script 
- VBScript > Visual Basic Script > It will work only on IE Browser.
- JavaScript > Browser independent script language.

-------

Angular, React, Node, ... for all these languages, JavaScript is the base.

-------

JavaScript:
    - It is a script language which works on any browser.
    - Purpose: validations of the inputs
        adding client side functionality of the web page.

Scripting:
    1. No Environment to code it.
    2. No data types to declare variables.
    3. Always executes on Client Side.

Since there's no environment, we have to use HTML Structure for coding JS.

1. JS doesn't require declaration of data type,
 based on the value assigned to the variable, the type will be automatically known.

    variable = value;
    or
    var variable = value;

    x = 100; //integer
    y = 12.34; //float

    z = "JavaScript"; //String

2. To define script in HTML page, we have to use the following tag wich can be present either in <head> or in <body>
<script type ="text/javascript">
    body of the script (becomes JS lang)
</script>


3. To print anything on browser, use the following statement
document.writeln("something"/variable);

4. To print anything on browser console, use folowing statement:
    console.log("something"/variable)

5. While using Control statements, all sytaxes are the same as in Java/'C' languages.

6. Any script language is a function based script lang, so that for every task, we have create a user defined function, then that has to be called to get output.

function <function_name> ([arg])
{
    body of the function
    [return <expression>];
}
calling of function
        <function_name>([arg values]);

7. Event Handling: An event is a method which executes based on certain action done.
What are the actions:
        Event           Property
     -------------------------------
        click           onClick
        change          onChange
        doubleClick     onDoubleClick
     -------------------------------

8. While creating html forms(which include inputs), first we have to use following tag:
    <form name="name of form" method="POST/GET/">
    </form>

9. To access value from any tool, if it is under form, then, follow below given sytax:
"form.name.toolname.value"

10. To access any tag, use following method (tag must be identified by "Id" property)
document.getElementById("idname").innerHTML/innerText = value;
once we access any tag with this statement, 
to get the value:
        document.getElementById("idname").value
to assign value:
        document.getElementById("idName").inner

11. parseInt(string value): - this method conerts value into integer
12.  parseFloat(string value) :-  this method converts value into decimal.
13.  We can access tool values without formname also, here in this case tool should be identified by "Id" property.