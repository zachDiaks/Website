import BlogPost from '../components/BlogPost'
import Header from '../components/Header'

export default function Benford() {
    const markdownString = `
# Power Laws and Web Scraping 1 - Benford's Law
---
When my wife and I go on a walk to Coolidge Corner, we usually stop in at our favorite bookstore: Brookline Booksmith. When I'm there, I have a bad habit of
buying Math books from the discount non-fiction table which I typically stop reading after I hit 100 pages. This time around, for $8, I picked up [The Grapes of Math](https://www.goodreads.com/book/show/13547287-the-grapes-of-math).

The book outlines some interesting patterns in nature and the math that describes them. One night, the author reminded me of two empirical laws which seem too bizarre to be real: [Zipf's Law](https://www.wikiwand.com/en/articles/Zipf%27s_law) and [Benford's Law](https://www.wikiwand.com/en/articles/Benford%27s_law). I first encountered these laws in this [Vsauce video](https://www.youtube.com/watch?v=fCn8zs912OE) from 2015, around the same time when I started my undergraduate degree in Physics and began learning about power laws. I won't go into great detail to explain these laws here - for that, I recommend watching that video. 
However, I'll summarize them briefly:
- **Benford's Law** states that the leading digit of a number in any naturally occurring set of numbers (e.g. income statements, population data, social media metrics) is likely to be small with exponentially decreasing probability as the digit increases (less wordy explanation below).
- **Zipf's Law** states that the frequency of a word in a corpus of text is inversely proportional to the rank of that word. In other words, the second most common word appears $1/2$ as often as the most common word. The third most common word appears $1/3$ as often as the most common word... you get the picture. 

Some old guy, angry at Quantum Mechanics, once said "God does not play dice with the universe." The existence of such laws make this quote hard to argue with, and is always striking to me.
The shock value is also greater when you can observe these behaviors in your everyday life. Which led me to my main question here:
>Do the bodies of text I encounter on a day-to-day basis also follow these distributions?

I'm currently a Quality Engineer at MathWorks, supporting the [Sensor Fusion and Tracking Toolbox](https://www.mathworks.com/help/fusion/index.html). I've been meaning to learn more about web scraping, so I set off to investigate just how Zipfian and Benfordian the documentation for our toolbox is!

## The Experiment
---
At work, I sometimes use [Playwright](https://playwright.dev/python/) when testing web applications. Playwright can also be used to read in contents of web pages and understand the hierarchical structure of a website, making it a great tool for web scraping!

So the setup is simple:
1. Start with the landing page for our documentation
2. Iterate over all subpages, extracting the contents of each page
3. Save off the contents into a series of text files
4. Analyze the text in those files!

A couple of rules for the game:
1. For words, I'm considering any text containing ONLY letters a-z separated by a space. To stretch the limits of Zipf's law, and since this is technical documentation, I'm considering function/class/property names to also be words.
2. For numbers, we consider any numeric string (integer/non-integer, positive, negative) to be numbers in the dataset. We strip the sign for negative numbers since Benford's Law is more focused with the magnitude of numbers and doesn't really care about direction/sign.
As you'll see later in the analysis, we only consider digits 1-9, but I did extract numbers with leading zeros (e.g. 0.1) for further analysis down the road.

If you're interested in the code for the web scraping or data analysis, check out [this repository](https://github.com/zachDiaks/mw-benfords-law) (namely, \`Main.ipynb\` and \`buildData.py\`).
I might do a write up on the logistics one day, and if you're lucky I'll update the README ;)

## The Results
---
### Expectations for Adherence to Benford's Law
Benford's Law is a bit simpler to visually represent, so we'll start our analysis there. This law predicts that for any naturally occurring set of numbers, the leading digit of any number in that set is likely to be small. How likely is determined by the following distribution:
$$
P(d) = \\log_{10}(1 + \\frac{1}{d})
$$

Where $P(d)$ is the probability of the leading digit of a number in the dataset being some digit $d$ (bounded from 1-9). 
Those familiar with logarithms will recognize the implications of this distribution: as the digit increases, the probability of it being the leading digit some number in the dataset **decreases exponentially**.

Numerically, this looks like:
| d | P(d)|
|:---|:---|
|1| 30.10%|
|2| 17.61%|
|3| 12.49%|
|4| 9.69%|
|5| 7.92%|
|6| 6.69%|
|7| 5.80%|
|8| 5.12%|
|9| 4.58%|
 
### So, how did we do?
---
To analyze our adherence to this law, we extract all of the numbers from the raw text of each web page, then extract the first digit of each of those numbers. We plot a histogram for the occurrence of each leading digit, and overlay the expected digit count. This expected count is computed as:
$$
E(d) = N * P(d)
$$

where $N$ is the total amount of numbers found in our dataset. Here are the results:

![Benford Result](https://raw.githubusercontent.com/zachDiaks/mw-benfords-law/main/BenfordResult.png)

By the eye-test, our distribution follows Benford's law pretty closely! Slight deviations are natural in real datasets, but how much deviation is too much to consider your dataset no longer adherent to a natural law? 

    For this, we can leverage some common statistical tests:
1. Chi-squared test
2. Mean Absolute Deviation (MAD) test

I was originally going to go with a simple chi-squared test since this is what I'm familiar with from undergrad. However, some quick Googling told me that MAD is a more common and reliable statistical test for Benford's law adherence since it is sample-size independent. Chi-squared tests can be sensitive to large datasets where small deviations begin to become statistically significant.

A MAD test checks the average deviation of observations against their expected values, and is computed as:
$$
\\text{MAD} = \\frac{\\sum_{i=1}^{K} |O_i - E_i|}{K}
$$

Where $O_i$ represents the observation for some digit $i$ and $E_i$ is the expected value for that same digit. For our use case, $K = 9$ since we're only considering digits 1-9.

Dr. Mark Nigrini in his book "Benford's Law: Applications for Forensic Accounting, Auditing, and Fraud Detection", poses the following thresholds for conformity to Benford's Law **for forensic accounting**:

| Mean Absolute Deviation (MAD) Range | Conformity Level |
| :--- | :--- |
| 0.000 to 0.006 | Close conformity |
| 0.006 to 0.012 | Acceptable conformity |
| 0.012 to 0.015 | Marginally acceptable conformity |
| Above 0.015 | Non-conformity |

Our dataset has $\\text{MAD} = 0.0137$ which falls into the "Marginally acceptable" range for MAD which, at least to me, makes sense. 

Firstly, we're not doing any forensic accounting so these ranges are likely a bit strict to begin with for our acceptance criteria for technical documentation. I doubt the IRS is going to be auditing our documentation for cooking our books. And secondly, like we mentioned before, our dataset has some "human-injected" numbers which are often repeated (copyright dates, default values for certain parameters, physical constants) which are likely to skew the dataset. This analysis hasn't been done for this particular blog post, but I might come back and update this on a rainy day if I ever do a deep dive!

Again, it's worth pausing to challenge our assumptions. Are we just making excuses to make a cool-looking blog post with a nice checkmark at the end saying "Yay, we adhere to the law! Don't look over here at this ugly data which might say that we don't"? It is a somewhat subjective call to determine which MAD ranges constitute adherence to the law. However, since our dataset passes the eye-test and since these ranges are well-established for forensic accounting (where these ranges are pretty strict), I feel comfortable saying that:
 > Our dataset adheres to Benford's Law!
#### Future Work
While our dataset shows adherence to Benford's law, it also contains a large set of numbers which we haven't considered yet: those with 0 as the leading digit! Benford's law doesn't describe where these numbers should fall on the distribution.

Additionally, as mentioned before, there are *some* deviations from the law. It'd be interesting to see if there are any patterns which dominate to cause this deviation.

Finally, another practice which is followed to have a higher level of confidence when evaluating Benford's Law adherence is to evaluate the distribution of the **second** digit of each number in the dataset. Benford's Law describes that for increasing $N$ where $N$ is the location of the digit that we're analyzing in a number, the curve gets flatter and flatter, eventually approaching a uniform distribution.

## Next up, Zipf's Law
---
In my next post, I'll analyze our documentation's adherence to Zipf's Law! Here's a cool picture to entice you to keep reading!

![Zipf Result](https://raw.githubusercontent.com/zachDiaks/mw-benfords-law/main/ZipfResult.png)
`
    return (
        <div>
            <Header />
            <BlogPost contents={markdownString}/>
        </div>
    )
}