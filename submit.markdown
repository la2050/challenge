---
title: Submit Your Proposal for the 2021 My LA2050 Grants Challenge
body_class: lime
main_class: standard-layout
footer_image: true
---

<h1>
  Submit Your Proposal
</h1>

{% if site.phase < site.ENTRIES_BEING_ACCEPTED %}

<div class="introduction" markdown="1">

<p>Starting <strong class="avoid-break">{{ site.ENTRIES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }}</strong> <small class="avoid-break">({{ site.ENTRIES_BEING_ACCEPTED_TIME }})</small>, <span class="avoid-break">you can submit your proposal on this website.</span></p>

{% if site.submission_url %}

<p class="action" markdown="1">
  <a href="{{ site.submission_url }}">Register</a>
</p>

{% else %}

<p class="action" markdown="1">
  <a href="{{ site.mailing_list_url }}">Get updates</a>
</p>

{% endif %}

</div>

{% elsif site.phase == site.ENTRIES_BEING_ACCEPTED %}

<div class="introduction" markdown="1">

Submissions are open! Apply by <strong>{{ site.ENTRY_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }}</strong> <small>({{ site.ENTRY_PERIOD_ENDED_TIME }})</small>.

<p class="action" markdown="1">
  <a href="{{ site.submission_url }}">Submit your idea</a>
</p>

</div>

{% elsif site.phase == site.ENTRY_PERIOD_ENDED %}

<div class="introduction" markdown="1">

The submission period is complete.

<small>
All proposals will be showcased here by <strong>{{ site.ENTRIES_SHOWN_ON_THE_WEBSITE_DATE | date: "%A, %B %-d, %Y" }}</strong>. 
Voting begins on
<span class="avoid-break">
  <strong>{{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }}</strong>.
</span>
</small>

<p class="action" markdown="1">
  <a href="{{ site.mailing_list_url }}">Get updates</a>
</p>

</div>

{% elsif site.phase == site.ENTRIES_SHOWN_ON_THE_WEBSITE %}

<div class="introduction" markdown="1">

The submission period is complete.

<small>
Voting begins on
<span class="avoid-break">
  <strong>{{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }}</strong>.
</span>
</small>

<p class="action" markdown="1">
  <a href="/entries/">Check out the proposals</a>
</p>

</div>

{% elsif site.phase == site.VOTES_BEING_ACCEPTED %}

<div class="introduction" markdown="1">

The submission period is complete.

<p style="max-width: 25em">
  <small>
  Public voting is open!
  Voting ends on
  <span class="avoid-break">
    <strong>{{ site.VOTING_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }}</strong>.
  </span>
  </small>
</p>

<p class="action" markdown="1">
  <a href="/entries/">Check out the proposals</a>
</p>

</div>

{% elsif site.phase == site.VOTING_PERIOD_ENDED %}

<div class="introduction" markdown="1">

The submission period is complete.

<small>
  Winners will be announced on 
  <span class="avoid-break">
    <strong>{{ site.WINNERS_ANNOUNCED_DATE | date: "%A, %B %-d, %Y" }}</strong>.
  </span>
</small>

<p class="action" markdown="1">
  <a href="/entries/">Check out the proposals</a>
</p>

</div>

{% elsif site.phase == site.FINALISTS_ANNOUNCED %}

<div class="introduction" markdown="1">

The finalists have been selected!

<small>
  Winners will be announced on 
  <span class="avoid-break">
    <strong>{{ site.WINNERS_ANNOUNCED_DATE | date: "%A, %B %-d, %Y" }}</strong>.
  </span>
</small>

<p class="action">
  <a href="/finalists/">Check out the finalists</a>
</p>

</div>

{% elsif site.phase == site.WINNERS_ANNOUNCED %}

<div class="introduction" markdown="1">

The winners have been announced!

<p class="action">
  <a href="/winners/">Check out the winners</a>
</p>

</div>

{% endif %}


### Resources

* The grants challenge is all about making progress on our shared goals and metrics. Read about them [here](https://la2050.org/goals). 
* We’re holding office hours via webinar on February 9, February 24, and March 16. <a href="{{ site.office_hours_url }}">Sign-up for a webinar here.</a>
* Need inspiration? Browse proposals from past My LA2050 winners on the [My LA2050 Ideas Archive](https://archive.la2050.org/search/?keywords=winner). 
* Want to prepare to submit? Check out the [application, scorecard, and rules](https://drive.google.com/drive/folders/1sKLxEqY0AMN1xpwgTKUIv-6d03puPkm4?usp=sharing). 
* Review the [scorecard](https://drive.google.com/file/d/1SFj6ON4xQ1GTcGAAv_FXalHxjmUMTwq9/view?usp=sharing) to see how your proposal will be evaluated.

{% comment %}
* Ready to submit? Check out the [entry form]({{ site.submission_url }}).
* Check out all previous [My LA2050 Grants Challenge reports](https://la2050.org/reports) delineating best practices for getting out the vote, as well as trends and reported impact.
* How have Angelenos activated in the past? Check out [these videos](https://www.facebook.com/LA2050/videos/vl.1855009431227001/1798255590244812/?type=1) on movements shaping LA. 
{% endcomment %}


### Dates and Details

Apply between {{ site.ENTRIES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }} ({{ site.ENTRIES_BEING_ACCEPTED_TIME }}) and {{ site.ENTRY_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }} ({{ site.ENTRY_PERIOD_ENDED_TIME }}) on this website. 

Your application will go through a simple moderation process to ensure that it adheres to all challenge rules. Applications that make it through the initial vetting will be published on the My LA2050 Grants Challenge website on {{ site.ENTRIES_SHOWN_ON_THE_WEBSITE_DATE | date: "%A, %B %-d, %Y" }} to allow the public to read about and engage with the proposals. Our external evaluation committee of community leaders, led by Social Venture Partners Los Angeles, will review and score applications to determine five finalists in each goal category (a total of 25 finalists).

From {{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }} ({{ site.VOTES_BEING_ACCEPTED_TIME }}) through {{ site.VOTING_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }} ({{ site.VOTING_PERIOD_ENDED_TIME }}) the 25 finalists will move on to the public voting phase. Public vote will determine the winners' final award level. First place in each category will receive $100,000, second: $50,000, third: $25,000, fourth: $15,000, and fifth: $10,000. The winners will be announced via the <a href="{{ site.mailing_list_url }}">LA2050 Newsletter</a> on {{ site.WINNERS_ANNOUNCED_DATE | date: "%A, %B %-d, %Y" }}.

View the [full timeline](/timeline).

<div class="application-process">
  <div>
    <h4 id="application-process">Application Process</h4>

    <ol>
      <li>Submit proposal</li>
      <li>Moderation period</li>
      <li>Proposals on website</li>
    </ol>

    <h4 id="voting-process">Voting Process</h4>

    <ol>
      <li>Finalists announced</li>
      <li>Vote on finalists</li>
      <li>Winners announced</li>
    </ol>
  </div>
</div>

<br />

### To apply, organizations will:

* Outline how their proposal will make progress on the [LA2050 goals and metrics](/about/#goals), including clearly defining a core issue, the desired solution to address the issue, and intended outcome for the proposed activities.
* Provide a plan that describes how the organization will advance the LA2050 goals and metrics.
* Clearly articulate the strategies and tools that will be employed to impact the target population.
* Identify collaboration partners and their respective roles. Collaboration is highly encouraged!
* Submit a detailed budget explaining how funds will be used across the one year grant period.
* Detail any additional desired, non-financial assistance needed from LA2050 to make the project a success.

### Rules

_What are the rules for submitting a proposal to the My LA2050 Grants Challenge?_

* The My LA2050 Grants Challenge is open for submissions from {{ site.ENTRIES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }} ({{ site.ENTRIES_BEING_ACCEPTED_TIME }}) through {{ site.ENTRY_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }} ({{ site.ENTRY_PERIOD_ENDED_TIME }}).
* In order to submit a proposal, [log in and complete the application form.]({{ site.submission_url }}).
* US-based non-profit organizations, for-profit companies, social enterprises, and government agencies with projects serving Los Angeles County are eligible to apply.
* Winning projects must be completed, and the grant award must be expended, within 12 months of receipt of funds.
* New projects, as well as existing and ongoing projects are eligible for submission.
* Previous applicants and winners of LA2050 grant programs may reapply.
* All projects will be featured on this site by {{ site.ENTRIES_SHOWN_ON_THE_WEBSITE_DATE | date: "%A, %B %-d, %Y" }}, and public voting will be open from {{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }} ({{ site.VOTES_BEING_ACCEPTED_TIME }}) through {{ site.VOTING_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }} ({{ site.VOTING_PERIOD_ENDED_TIME }}).
* <em>Evaluation</em>: Evaluation will take place between {{ site.ENTRIES_SHOWN_ON_THE_WEBSITE_DATE | date: "%A, %B %-d, %Y" }} and {{ site.FINALISTS_ANNOUNCED_DATE | date: "%A, %B %-d, %Y" }}. The 25 finalists (five in each goal category) will be announced before voting begins on {{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }} ({{ site.VOTES_BEING_ACCEPTED_TIME }})
* Finalists will be selected using the following criteria: impact on chosen goals and metrics, feasibility of proposal, impact on people served, and overall application quality. 
* <em>Voting</em>: Public voting will occur on this website between {{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }} ({{ site.VOTES_BEING_ACCEPTED_TIME }}) and {{ site.VOTING_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }} ({{ site.VOTING_PERIOD_ENDED_TIME }}). Voting will determine the grants awarded to the 25 finalists. First place in each goal category will receive $100,000, second: $50,000, third: $25,000, fourth: $15,000, and fifth: $10,000. 
* Winners will represent a diversity of issues and activities.
* Winners of the My LA2050 Grants Challenge will be grantees of the Goldhirsh Foundation and will be required to check-in with LA2050 periodically throughout the grant period.
* [Read all the rules](https://drive.google.com/file/d/1Ho5MPqGqCXenL-3WcYOrRYMoN5RX0ckq/view?usp=sharing)

### Regarding COVID-19 and Activity Restrictions
We understand how difficult it is to plan for a year-long grant period in our current context. 
We plan to be accommodating and flexible with our 25 winners, working with them over the course of their grant to adjust planned activities according to evolving public health guidelines and to ensure there is space to respond to emergent needs.

And, while we’d love to be optimistic and assume that in-person gatherings will be permitted sometime between now and the end of the grant period in August 2022, we can’t be sure. For that reason, please ensure that the activities described in your application align with current Los Angeles County public health guidelines, such as restrictions on in-person gatherings, except for those activities deemed essential (e.g., food distribution, medical services, etc.). 

If you anticipate that guidelines in Los Angeles County will change in the next year to allow for your organization to conduct activities that are currently restricted (e.g., in-person educational instruction) please explain on your application what you will do under both circumstances.

Please note that applications that do not account for COVID-19 restrictions and precautions may be disqualified. If you have any questions, please feel free to email connect@la2050.org.

### Questions

If you have any questions about the information on this page, [please review our FAQs](/faqs) or send us an email at [connect@la2050.org](mailto:connect@la2050.org).

{% if site.phase == site.NEW_CHALLENGE_ANNOUNCED %}

* * *

<div class="introduction" markdown="1">

<p>Starting <strong class="avoid-break">{{ site.ENTRIES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }}</strong> <small class="avoid-break">({{ site.ENTRIES_BEING_ACCEPTED_TIME }})</small>, <span class="avoid-break">you can submit your proposal on this website.</span></p>

{% if site.submission_url %}

<p class="action" markdown="1">
  <a href="{{ site.submission_url }}">Register</a>
</p>

{% else %}

<p class="action" markdown="1">
  <a href="{{ site.mailing_list_url }}">Get updates</a>
</p>

{% endif %}

{% elsif site.phase == site.ENTRIES_BEING_ACCEPTED %}

* * *

<div class="introduction" markdown="1">

The submission period has started! Apply by <strong>{{ site.ENTRY_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }}</strong> <small>({{ site.ENTRY_PERIOD_ENDED_TIME }})</small>.

<p class="action" markdown="1">
  <a href="{{ site.submission_url }}">Submit your idea</a>
</p>

</div>

{% endif %}

