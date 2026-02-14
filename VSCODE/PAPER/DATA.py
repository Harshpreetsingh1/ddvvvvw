import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import warnings
from sklearn.experimental import enable_iterative_imputer  # noqa
from sklearn.linear_model import BayesianRidge
from sklearn.impute import IterativeImputer, SimpleImputer
from sklearn.mixture import GaussianMixture
from sklearn.preprocessing import LabelEncoder
from sklearn.preprocessing import OrdinalEncoder, StandardScaler
from sklearn.model_selection import train_test_split
warnings.filterwarnings('ignore')

ciday_df = pd.read_csv('C:\Dataset\city_day.csv')
cihour_df = pd.read_csv('C:\Dataset\city_hour.csv')

city_day_df