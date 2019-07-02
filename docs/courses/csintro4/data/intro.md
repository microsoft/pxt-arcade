# Introduction to Data Analysis

Data Analysis is the process of looking at data of previous events and using statistics to better understand the phenomena behind it. Having a better understanding of a phenomena allows for more accurate predictions and estimates of the future. Over the last few years, Data Analysis and other Data Sciences have become immensely popular in the world of business due to the rise of research in the field and lower costs of analysis. Having a better understanding of what will happen in the future allows businesses to make better decisions in the present.

## What is Data

**Data** is a collection of information which can be used as base for performing analysis and decision making. Data can come in all shapes and sizes, but traditionally, there are two types of data:
* Numerical Data
* Categorical Data

## Example #1: Numerical Data

**Numerical Data** is what is most common associated with the term data and consists of numerical values that can be used for mathematical analysis.

Examples:
* Sales of a given product
* Temperature on a given day
* Steps taken in a day

### Size of apartment vs its price

Here is the data on apartments in the local area. The chart given information about the size of an apartment vs its monthly rent

| Sqrt Ft | Rent |
|---------|------|
| 722     | 1682 |
| 1340    | 2345 |
| 900     | 1595 |
| 854     | 1622 |
| 1151    | 2015 |
| 600     | 1330 |
| 843     | 1705 |
| 650     | 1532 |
| 644     | 1329 |
| 591     | 1265 |

![Scatter Plot of Rent vs Square Feet](/static/courses/csintro4/data/rent-vs-sqft.png)

After plotting the data, it is clear that there is some correlation between the two pieces of data. Apartments that are larger appear to cost more than those that are smaller.

## Example #2: Categorical Data

**Categorical Data** consists of a data that mathematical functions cannot be applied to and is usually represented by strings or booleans.

Examples:
* City in which people live
* People's favorite color
* States in which a product is sold
* Days of the week

### Cities and Colors

Below are the results of a survey. It contains data about the name of the people taking the survey, the city that they live in, and their favorite color.

| Person    | City          | Favorite Color |
|-----------|---------------|----------------|
| Justin    | Phoenix       | Green          |
| Peter     | Columbus      | Yellow         |
| Thomas    | San Antonio   | Blue           |
| Theresa   | New York City | Black          |
| Catherine | Chicago       | Red            |
| Julia     | New York City | Green          |
| Terry     | Houston       | Brown          |
| Kevin     | Dallas        | Blue           |
| Christine | San Francisco | Purple         |
| Johnny    | Seattle       | Blue           |

Although this chart contains no numerical values but is still useful for analysis. For example, the color blue is repeated 3 times as a someones favorite color. This would imply that it is probably a very popular color for people.

![Pie Chart of Color Frequencies](/static/courses/csintro4/data/color-pie.png)