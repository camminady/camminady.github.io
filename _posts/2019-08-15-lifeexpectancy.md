---
layout: post
title: Life expectancy of different animals
---

This is my contribution for the [Reddit DataViz Battle of July](https://www.reddit.com/r/dataisbeautiful/comments/cmrz6j/battle_dataviz_battle_for_the_month_of_august/). 
The data is created with [Plotly Express](https://plot.ly/python/plotly-express/), in just a few lines of code.

Here is the final result, included as a static `.html` file. The code is added below.

{% include 2019-08-15-lifeexpextancy/temp-plot.html %}



```python
import pandas as pd
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt
df = pd.read_csv("file.csv")
df
import plotly_express as px
from plotly.offline import plot
fig = px.scatter_3d(df, x="Mass (grams)",y="Resting Heart Rate (BPM)",z="Longevity (Years)",color="Creature",
           hover_name="Creature", log_x=True,log_y=True,log_z=True,template="plotly_white",
                   width=1000, height=1000,title="Some title")
fig.update_traces(marker=dict(size=10,
                              line=dict(width=2,
                                        color='DarkSlateGrey')),
                  selector=dict(mode='markers'),
                 )
fig.update_layout(scene = dict(
                     xaxis = dict(range=[0,7],),
                     yaxis = dict(range=[1,3],),
                     zaxis = dict(range=[0,2],),),
                     )
fig.update_layout(title_text="Heart rate, mass, and longevity for different creatures",
                  title_font_size=30)

plot(fig)
```

