# Berry-Eating Corgis

In Corgiland, corgis are free to run about in open fields. By far, their favorite thing to eat is corgiberries. Corgiberries grow naturally in the fields of Corgiland with their only danger being the corgis that eat them. If a field is full of corgiberries, corgis from all over will flock to the field. As the corgis eat the berries, less berries become available. With less berries available, corgis will begin to leave for other field where there is less competition for the berries.

![Corgis in a field](/static/courses/csintro4/data/corgis.gif)

For this section, the data set ``corgidata`` will be used. This is a data set that contains population data of a given field in Corgiland. Data for each population was collected daily over the course of 3 years. Due to the limited change in day-to-day populations and the size of the data set, the populations for each week were averaged and recorded into the data set used for this section. 

``corgidata`` has the following functions and constants.

|Name| Description |
|---|---|
|``corgidata.NUMBER_OF_WEEKS: number`` | Returns the number of weeks recorded in the data set|
|``corgidata.getCorgiPopulation(week: number): number``| Returns the number of corgis in the field during the given week|
|``corgidata.getBerryPopulation(week: number): number``| Returns the number of berries in the field during the given week|


## Example #1: Plotting multiple series

When plotting data, it can be helpful to plot multiple data series at the same time. This allows for better comparison between data series. There could be patterns and relationships between data series that are only highlighted when the two series are plotted on top of each other.

```typescript-ignore
let seriesA: number[] = [0, 10, 20, 30, 20, 10, 0];
let seriesB: number[] = [70, 60, 50, 40, 50, 60, 70];
let times: number[] = [0, 10, 20, 30, 40, 50, 60];
display.plotSeries(times, seriesA);
display.plotSeries(times, seriesB);
```

By calling ``display.plotSeries`` twice 2 series of data are displayed on the chart. For this specific example, it shows that ``seriesA`` begins to decrease at the same time that ``seriesB`` begins to increase.

Although both plotSeries calls use the same array, ``times``, for the x values, it is not necessary to do so. 

## Student Task #1a: Plotting Berry and Corgi vs Time

1. Create 3 empty arrays to store data about weeks, berry population, and corgi population
2. Loop through the data and push the week, the berry population, and the corgi population during those weeks to their respective arrays
3. Plot the series of berry population with weeks as the x values
4. Plot the series of corgi population with weeks as the x values
5. Observe any patterns with the relationship between berry population and corgi population. When does the berry population start to decrease? Think about how the corgi population could affect this.



## Student Task #1b: Plotting Berry vs Corgi

1. Create 2 empty arrays to store data about berry population, and corgi population
2. Loop through the data and push the berry population, and the corgi population to their respective arrays
3. Plot the series of berry population with corgi population as the x values
4. Observe any patterns with the relationship between berry population and corgi population
5. How many corgis are there when there are the most berries? How many berries are there when there are the most corgis?

## Example #2: Normalizing Data

When looking at these two populations with time as the x axis, it can be difficult to truly understand the rise and fall patterns of both populations. The max berry population is so large that it increases the scale of the graph in such a way that makes the corgi population much smaller. One solution to this problem is to normalize the data.

**Normalizing** the data means to adjust the values so that all series have roughly the same min and max values. It's convention to have these min and max values to be 0 and 1 respectively. 

To normalize the data, simply use the function ``stats.normalize``. This function takes in the array that is to be normalized and returns the normalized array. 

```typescript-ignore
let seriesA: number[] = [0, 5000, 8000, 9000, 8000, 5000, 0];
let seriesB: number[] = [130, 80, 50, 40, 50, 80, 130];
let times: number[] = [0, 10, 20, 30, 40, 50, 60];

seriesA = stats.normalize(seriesA);
seriesB = stats.normalize(seriesB);

display.graphSeries(times, seriesA);
display.graphSeries(times, seriesB);
```

## Student Task #2: Normal Corgis

1. Copy the solution for Task #1a
2. Normalize the data so that it is easier to see both populations at the same time
