# Project-2

## Introduction
My idea for this project was to collect, analyse and visualise data on residential property prices in Australia. In the process I would look to try and identify trends and factors that influence and shape those prices. In the early stages of the project I identified several factors commonly pointed to as influencing the housing market, including interest rates, migration, household income, and unemployment rates. I aimed to assess the impact of these factors on residential property prices in Australia. A key goal of the project was to make it easily digestible - with simple and clear interactive graphs and visualisations.

## Methodology
1. Search for and collect data on property prices in Australia, along with historical data on interest rates, migration, household income, and unemployment rates.
2. Clean and reformat the data in pandas. Merge dataframes to allow for visualisations that analyse property price in comparison to the factors.
3. Create a SQL database and import data into the database. 
4. Create html and css files with layouts and styling to hold the visualisations.
5. Create visualisations using plotly, d3, and mapbox, all via javascript.
6. Publish app to Github pages.

## Original Ideas for Visualisations
1. A scatter plot with residential property price index on the y axis, with household income, unemployment rates and net migration as selectable options on the x axes. The dots on the scatter plot to contain the name of the state, with the plot to have a drop down menu to select which financial year to look at.
2. A line chart with date on the x axis and dual y axes of property price index and interest rates over the last 15 years. 
3. A vertical bar chart showing the property price index for each state over the last 5 financial years.
4. An interactive map with markers on Australian capital cities, their size proportionate to that city's property price index at the end of the 2020 financial year.

## Tools Used
Pandas
Javascript
HTML
CSS
Plotly
d3
Google Charts
PostgreSQL

## Data Sources
Property Price Index - ABS
Interest Rates - RBA/Quandl
Migration Data - ABS
Unemployment Data - ABS

