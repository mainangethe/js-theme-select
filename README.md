# Theme Select
This is a MDN project to help get more experience in using the Ternary operator as a conditional in JS.  
The objective of the project is to avail options to the user and based on their selection; the page should display different content.

> [Visit Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

## Documentation
The project took me a total of: **1 Hour** to complete.

### HTML Overview
Here we've got an HTML `<select>` element allowing us to make different theme choices.  


### CSS Overview
Here we position the `<body>` element to be at the center of the page both vertically and horizontally.  
We also add a background gradient.  



### JS Overview
In the JavaScript, we are storing a reference to:  
1. `<html>` element to manage the background and foreground color changes.
2. `<select>` element to monitor user selection

We have two functions in the code. `colorUpdate()` and the `futureDetermination()`.

We have an event listener to the `<select>` element so that when its value is changed, the `futureDetermination()` function is run.


#### How the futureDetermination() works
When this function is run, we first set a variable called `'user_choice'` to the current value selected in the `<select>` element.  
We then use the Ternary operator conditional statement to pass different arguments to the `colorUpdate()` function dependent on what the value of choice is.

#### How the colorUpdate() works
This function requires two (2) parameters for it to work.

1. `bg_color`
2. `fg_color`

When this function is run, we first set background color of the `<html>` element to the value in `bg_color`.  
We then update the foreground color of the `<html>` element to the value in the `fg_color`.  
Lastly, we disable the `<select>` element.
