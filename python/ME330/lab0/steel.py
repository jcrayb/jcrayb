import pandas as pd
import numpy as np

df = pd.read_csv('ME 330 - steel.csv')

E = 211000
offset = 0.002

diff_array = []
x_array = []

for i in range(len(df['Stress'])):
    strain = df['Strain 1'][i]
    stress = df['Stress'][i]
    
    offset_f = E*(strain-offset)-stress

    diff_array += [abs(offset_f)]
    x_array += [strain]

np_diff = np.array(diff_array)

min_index = np.where(np_diff == np.min(np_diff))[0][0]
print(df['Strain 1'][min_index], df['Stress'][min_index])

