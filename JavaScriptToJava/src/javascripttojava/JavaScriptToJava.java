/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package javascripttojava;

//libraries/addlibrary -> plugin.jar z jre/lib
import netscape.javascript.*;

/**
 *
 * @author Tomek
 */
//in oryginal public class Dog{}
public class JavaScriptToJava {

 

    public String dogBreed;
    public String dogColor;
    public String dogSex;
 
    // define the class constructor
    public JavaScriptToJava(JSObject jsDog){
        // use try...catch to handle JSExceptions here
        this.dogBreed = (String)jsDog.getMember("breed");
        this.dogColor = (String)jsDog.getMember("color");
        this.dogSex = (String)jsDog.getMember("sex");
        /*Notice that the getMember method of JSObject is used to access the properties of 
         * the JavaScript object. The previous example uses getMember to assign the value 
         * of the JavaScript property jsDog.breed to the Java data member JavaDog.dogBreed.

Note: A more realistic example would place the call to getMember inside a try...catch
* statement to handle errors of type JSException. See Handling JavaScript Exceptions 
* in Java for more information*/
        
        }
    
    
    
    public static void main(String[] args)   {
       
        
    }
    
}