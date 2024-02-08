## Econometrics
There are 4 assumptions on the sample or data:
1. ** Random Sampling **: The sample is a random sample from the population. 
2. ** Independence of Observations **: The values of one sample observation are not affected by the values of other observations.
3. ** Large Sample **: The sample is large enough to apply the Central Limit Theorem. This ensures normality if the residuals.
4. ** No Outliers **: The sample does not contain any outliers.

There are 3 assumptions on model specification:
1. ** Linear in Parameters **: The model is linear in the parameters.
2. ** No Multicollinearity **: The independent variables are not linearly dependent on each other.
3. ** No Endogeneity **: The independent variables are not correlated with the error term. This is also known as zero conditional mean of errors assumption.

There are 2 assumptions on the error term:
1. ** Constant Variance **: The variance of the error term is constant across all levels of the independent variables.
2. ** No Autocorrelation **: The error terms are not correlated with each other.
3. 
### Linearity in Parameters

#### Diagnosis of Non-Linearity
##### 1. Component plus Residual Plots
The component plus residual plot is a scatter plot of the residuals against the fitted values. If relationship between the residuals and the fitted values is linear, the plot will show no pattern. If the plot shows a pattern, it indicates 
non-linearity in the model.

#### Potential Solutions
##### 1. Polynomial Regression
Polynomial regression is a form of regression analysis in which the relationship between the independent variable x and the dependent variable y is modelled as an nth degree polynomial in x. 

##### 2. Transformation of Variables
Transforming the dependent variable or the independent variable can help in linearizing the relationship between the dependent and independent variables.

### Homoskedasticity
The observations are homoskedastic if the variance of the residuals are constant across all levels of the independent variables. 

$$
\text{Var}(\epsilon) = \sigma^2 I
$$

In presence of heteroscedasticity, the variance-covariance matrix of the errors becomes:
$$
\text{Var}(\epsilon) = \sigma^2 \Sigma
$$
Where \(\Sigma\) is a diagonal matrix with non-constant elements.

### Standard errors of the coefficients
The standard error of the coefficients (σ(β)) can be calculated using the formula:
$$
\text{Var}(\hat{\beta}) = \sigma^2 (X'X)^{-1} 
$$

In presence of heteroscedasticity, the standard errors of the coefficients become:
$$
\text{Var}(\hat{\beta}) = \sigma^2 (X' \Sigma X)^{-1}
$$


##### Diagnosis of Heteroskedasticity

Write the errors in the regression model as a function of the independent variables and their products. Then, test the joint hypothesis that the coefficients of the squared residuals are jointly equal to zero. This is known as White's test for heteroscedasticity.
$$ \epsilon_i^2 = \gamma_0 + \gamma_1X_{1i} + \gamma_2X_{2i} + \ldots + \gamma_kX_{ki} + u_i $$
Here, \(Y_i\) is the dependent variable, \(X_{1i}, X_{2i}, \ldots, X_{ki}\) are the independent variables, \(\epsilon_i\) is the original residual, \(\epsilon_i^2\) is the squared residual, and \(u_i\) is the error term for the squared residuals.
The test statistic can be calculated as:
$$ LM = nR^2 $$
where \(n\) is the sample size and \(R^2\) is the \(R^2\) from the extended regression.
You can then compare the test statistic to the critical values from the chi-squared distribution to determine whether to reject the null hypothesis of homoscedasticity.
If the test suggests the presence of heteroscedasticity, you may need to consider transformations of variables or use robust standard errors to address the issue in your regression analysis. Keep in mind that other diagnostic tests and visual inspection of residual plots should also be considered in conjunction with White's test for a more comprehensive assessment.

##### Potential Solutions
Variance stabilizing transformation: A transformation of the outcome $Y$ used to correct non-constant variance is called a “variance stabilizing transformation.”used to correct non-constant variance is called a “variance stabilizing transformation.” Again, common transformations are the natural logarithm, square root, inverse, and Box-Cox.

### No Multicollinearity
The matrix of the independent variables should have full rank. This means that the independent variables should not be linearly dependent on each other. The presence of multicollinearity can cause large standard errors and unreliable p-values. This can make it difficult to determine which predictors are important.
 
##### Diagnosis of Multicollinearity
1. **Correlation Matrix**: A correlation matrix is a table showing correlation coefficients between variables. Each cell in the table shows the correlation between two variables. The value is in the range of -1 to 1. If two variables have high correlation, it means that they have a linear relationship.
2. **Variance Inflation Factor (VIF)**: The variance inflation factor (VIF) quantifies the severity of multicollinearity in an ordinary least squares regression analysis. It provides an index that measures how much the variance (the square of the estimate’s standard deviation) of an estimated regression coefficient is increased because of collinearity. A VIF value greater than 10 is a sign of multicollinearity.

##### Potential Solutions
1. **Remove some of the highly correlated independent variables**: If you have two or more independent variables that are highly correlated, you can remove one of the variables. If you have a response variable that is highly correlated with one of the independent variables, you can remove the response variable.
2. **Combine the correlated independent variables**: If you have two or more independent variables that are highly correlated, you can combine them into a single variable. For example, if you have two variables that measure the same thing, you can average them.
3. **Use principal components**: Principal component analysis (PCA) is a statistical procedure that uses an orthogonal transformation to convert a set of observations of possibly correlated variables into a set of values of linearly uncorrelated variables called principal components. The number of principal components is less than or equal to the number of original variables. The PCs are calculated using the eigenvectors of the correlation matrix of the original variables. The PCs are linear combinations of the original variables.  The eigenvectors associated with the eigenvalues represent the factor loadings in factor analysis. 
### Bias in OLS
Suppose that a correctly specified regression models is
$$\text{Wage} = \text{education}_{i} \ \beta_{1}+ \text{age}_{i} \ \beta_{2}+ u_i$$

The model specification implies that the wage of the individual is dependent on education level as well as on age. Let \(\text{education}\) be denoted by \(X_1\), \(\text{age}\) be denoted by \(X_2\) and \(\text{Wage}\) be denoted by \(Y\) , for the sake of simplicity of notation.Suppose we exclude the age of the individual from our model specification and only regress wage on the education. The sample regression function for the above specification is:
$$ Y = X_{1} \ \hat{\beta_{1}} + \epsilon $$
Out estimator for \(\beta_1\) is:
$$\hat{\beta_{1}}=\left(X_{1}^{\mathrm{T}} X_{1}\right)^{-1} X_{1}^{\mathrm{T}} Y$$
From the true specification we have \(Y = X_{1} \ \hat{\beta_{1}} + X_{2} \ \hat{\beta_{2}} \)
Therefore, 
$$
\begin{aligned} 
\hat{\beta_{1}} &= \left(X_{1}^{\mathrm{T}} X_{1}\right)^{-1} X_{1}^{\mathrm{T}} \ \dot \ \left(X_{1} \ \hat{\beta_{1}} + X_{2} \ \hat{\beta_{2}} + \epsilon \right) \\
&= \beta_{1}\ + \ \left(X_{1}^{\mathrm{T}} X_{1}\right)^{-1} X_{1}^{\mathrm{T}} X_{2} \  \beta_{2}\ + \ \left(X_{1}^{\mathrm{T}} X_{1}\right)^{-1} X_{1}^{\mathrm{T}} \ \epsilon
\end{aligned}
$$
Take Expectations,
$$
\begin{aligned} 
\mathbf{E} \left[\hat{\beta_{1}}\right] = \beta_1 + \underbrace{\mathbf{E} \left[\left(X_{1}^{\mathrm{T}} X_{1}\right)^{-1} X_{1}^{\mathrm{T}} X_{2}\right] {\beta_{2}}}_\text{Bias}   
\end{aligned}
 $$
Note that, \(\mathbf{E}[\epsilon]=0\)
This gives us:
$$E\left[b_{1} \mid X\right]=\beta_{1}+\rho_{1.2} \beta_{2} \quad \text { where } \quad \rho_{1.2}=\left(X_{1}^{\mathrm{T}} X_{1}\right)^{-1} X_{1}^{\mathrm{T}} X_{2}$$


## Machine Learning

### Bias-Variance Tradeoff
The bias-variance tradeoff stands as a key challenge in supervised machine learning. A too-simple model might underfit that is it would not capture the signal and a too-complicated model might overfit that is it would make noisy predictions. In statistics, Bias is the difference between the expected value of an estimator (a statistical quantity calculated from the data) and the true underlying parameter being estimated.  

#### Bias
Mathematically, if $\hat{\theta}$ is an estimator for a parameter $\theta$, the bias ($\text{Bias}(\hat{\theta})$) is defined as
$$ \text{Bias}(\hat{\theta}) = \mathbf{E}[\hat{\theta}] - \theta $$
where $\mathbf{E}[\hat{\theta}]$ is the expected value (average value) of the estimator across all possible samples, and $\theta$ is the true parameter value.

#### Variance
Variance is the second moment about the mean. 

$$ \sigma^2 = \mathbf{E}[(X - \mu)^2] $$

This formula represents the expected value of the squared differences between each observation \(X\) and the mean \(\mu\). The expectation is taken over all possible values of \(X\) according to the probability distribution of \(X\).
If \(X\) is a discrete random variable with probability mass function \(P(X = x_i)\) for each value \(x_i\), the formula becomes:
$$ \sigma^2 = \sum_{i} (x_i - \mu)^2 \cdot P(X = x_i) $$
If \(X\) is a continuous random variable with probability density function \(f(x)\), the formula becomes:
$$ \sigma^2 = \int_{-\infty}^{\infty} (x - \mu)^2 \cdot f(x) \,dx $$
In summary, the variance quantifies the dispersion or spread of the random variable's values around its mean.


## Time Series Analysis

### Stationarity
A time series \( \{X_t\} \) is weakly stationary if it satisfies the following conditions for all time points \( t \), \( s \), and all time intervals \( h \):

1. **Constant Mean:**
   $$ \text{E}(X_t) = \mu $$
   The mean of the series is constant over time.

2. **Constant Variance:**
   $$ \text{Var}(X_t) = \sigma^2 $$
   The variance of the series is constant over time.

3. **Autocovariance is Time-Invariant:**
   $$ \text{Cov}(X_t, X_{t+h}) = \text{Cov}(X_{t+s}, X_{t+s+h}) $$
   The covariance between observations at different time points is only a function of the time lag \( h \), not the specific time point \( t \).

### ADF Test
The Augmented Dickey-Fuller (ADF) test is a statistical test used to assess the presence of a unit root in a time series dataset. The presence of a unit root suggests that the time series is non-stationary, meaning that its statistical properties, such as mean and variance, are not constant over time. The ADF test is commonly used in econometrics and time series analysis. The null hypothesis of the ADF test is that a unit root is present in the time series, indicating non-stationarity. The alternative hypothesis is that the time series is stationary after differencing.

The statistical definition of the ADF test can be expressed as follows:

Consider the time series \( \{X_t\} \). The null hypothesis (\(H_0\)) and alternative hypothesis (\(H_1\)) of the ADF test are defined as:

$$ H_0: \text{The time series has a unit root (non-stationary)} $$
$$ H_1: \text{The time series is stationary after differencing} $$

The ADF test is often specified in the form of a regression model:

$$ \Delta X_t = \alpha + \beta t + \gamma X_{t-1} + \delta_1 \Delta X_{t-1} + \ldots + \delta_{p-1} \Delta X_{t-p+1} + \epsilon_t $$

where:
- \( \Delta X_t \) is the differenced series.
- \( t \) is a time trend.
- \( X_{t-1} \) is the lagged value of the original series.
- \( \Delta X_{t-1}, \Delta X_{t-2}, \ldots, \Delta X_{t-p+1} \) are lagged differences.
- \( \epsilon_t \) is the error term.

The test statistic from this regression is compared to critical values from statistical tables to determine whether to reject the null hypothesis of a unit root. If the test statistic is more negative than the critical values, the null hypothesis is rejected, suggesting stationarity.

```
import statsmodels.api as sm
# Assuming your time series data is stored in a variable 'data'
result = sm.tsa.adfuller(data)
# Extracting and printing the test statistic and p-value
test_statistic, p_value, _, _, _, _ = result
print(f'Test Statistic: {test_statistic}')
print(f'P-value: {p_value}')
```
### Conditional Heteroskedasticity
A collection of random variables is heteroskedastic if there are certain groups, or subsets, of variables within the larger set that have a different variance from the remaining variables. In finance, an increase in variance maybe correlated to a further increase in variance. For instance, on a day that equities markets undergo a substantial drop, automated risk management sell orders in long only portfolios get triggered, which lead to further fall in the price of equities within these portfolios, leading to significant downward volatility. These "sell-off" periods, as well as many other forms of volatility, lead to heteroskedasticity that is serially correlated and hence conditional on periods of increased variance. Thus we say that such series are conditional heteroskedastic.


## IFRS9

 ### What is Foundation IRB?
Banks own estimation of 1-year PD and regulators prescribed LGD and EAD. If EL > Provision then excess is reduced from capital. If EL < Provision then excess is added to capital

 ### What is Advanced IRB Approach?
Advance IRB Approach: Banks own estimation of PD, LGD and EAD
Then total required capital is calculated as a fixed percentage of the estimated RWA.

 ### What is ICAAP?
To inform the board of directors of the ongoing assessment of the bank’s risk and how the bank intends to mitigate those risks. Also, to assess the current and future capital requirements.

 ### What is Tier 1 Capital?
It is also called core capital.
- It consists of bank’s equity capital and disclosed reserves.
- Minimum tier 1 capital is 6% of RWAs. It is Equals shareholder’s equity + retained earnings.
- It has two components: Common Equity Tier 1 (CET1) and Additional Tier 1 (AT1) capital.
- Under the new guidelines, the minimum CET1 capital ratio was set at 4.5%, and the minimum Tier 1 capital ratio (CET1 + AT1) was set at 6%. The total amount of reserve capital (Tier 1 and Tier 2) must be over 8%.

 ### What is Tier 2 Capital?
- Minimum tier 1 + tier 2 capital is 8% of RWAs. 
- Minimum capital adequacy ratio (including the capital conservation buffer) is 10.5% of RWAs. 
- It consists of Revaluation reserves + hybrid capital instruments + subordinate term debt + general loan loss reserves + undisclosed reserves, etc

 ### What is Tier 3 Capital?
Tier 3 capital debt used to include a greater number of subordinated issues when compared with tier 2 capital. Subordinated debt falls under other debt in payout priority if the borrower defaults. Subordinated debt is generally unsecured, meaning there is no collateral for the debt, so the issuer is left to trust that the borrower will pay them back.

 ### What is Additional Tier 1 Capital?
Additional Tier 1 capital is defined as instruments that are not common equity but are eligible for inclusion in this tier. An example of AT1 capital is a contingent convertible or hybrid security, which has a perpetual term and can be converted into equity when a trigger event occurs.

 ### What is Common Equity Tier 1 (CET1) Capital?
Common Equity Tier 1 is "the highest quality of regulatory capital, as it absorbs losses immediately when they occur," according to the Bank of International Settlements. A bank's Tier 1 capital must include a minimum ratio of 4.5% of CET1 to its RWAs. Bank for International Settlements. "Definition of capital in Basel III – Executive Summary," 

 ### What is CET 1 Ratio?
The CET1 ratio is a key measure of a bank's financial strength that is defined as the ratio of a bank's core equity capital to its total risk-weighted assets (RWA). It is a key metric of a bank's financial strength that has been adopted by the Basel Committee for Banking Supervision as a minimum standard.

 ### What is RWA?
Banks calculate risk-weighted assets by multiplying the exposure amount by the relevant risk weight for the type of loan or asset. 
- There are two components: Risk Weights and Expoosure









