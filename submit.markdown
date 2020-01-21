---
title: Submit Your Proposal for the 2020 My LA2050 Grants Challenge
body_class: lime
main_class: standard-layout
---

<h1>
  Submit Your Proposal
</h1>

{% if site.phase < site.ENTRIES_BEING_ACCEPTED %}

<div class="introduction" markdown="1">

<p class="max-width: 23em">Starting <strong class="avoid-break">{{ site.ENTRIES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }}</strong> <small class="avoid-break">(9am Pacific Time)</small>, <span class="avoid-break">you can submit your proposal on this website.</span></p>

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

Submissions are open! Apply by <strong>{{ site.ENTRY_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }}</strong> <small>(5 pm, Pacific Time)</small>.

<p class="action" markdown="1">
  <a href="{{ site.submission_url }}">Submit your idea</a>
</p>

</div>

{% elsif site.phase == site.ENTRY_PERIOD_ENDED %}

<div class="introduction" markdown="1">

The submission period is complete.

<small>
Entries will be showcased here by <strong>{{ site.ENTRIES_SHOWN_ON_THE_WEBSITE_DATE | date: "%A, %B %-d, %Y" }}</strong>. 
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
  <a href="/entries/">Check out the entries</a>
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
  <a href="/entries/">Check out the entries</a>
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
  <a href="/entries/">Check out the entries</a>
</p>

</div>

{% elsif site.phase == site.FINALISTS_ANNOUNCED %}

<div class="introduction" markdown="1">

The finalists have been announced!

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
* <a href="https://forms.gle/mM4rLE6RChcSwmM3A">Sign-up for an information session.</a> We will be holding office hours webinars on February 13th, February 27th, or March 12th and an in-person information session on February 26th.
* Need inspiration? Browse proposals from past My LA2050 winners on the [My LA2050 Ideas Archive](https://archive.la2050.org/search/?keywords=winner). 
* Ready to submit? Check out the [entry form](LINK)
* Review the [scorecard](LINK) to see how your proposal will be evaluated

{% comment %}
* Check out all previous [My LA2050 Grants Challenge reports](https://la2050.org/reports) delineating best practices for getting out the vote, as well as trends and reported impact.
* How have Angelenos activated in the past? Check out [these videos](https://www.facebook.com/LA2050/videos/vl.1855009431227001/1798255590244812/?type=1) on movements shaping LA. 
{% endcomment %}


### Dates

Apply between {{ site.ENTRIES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }} (9am Pacific Time) and {{ site.ENTRY_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }} (5pm, Pacific Time) on this website. 

Your application will go through a simple moderation process to ensure that it adheres to all challenge rules. Applications that make it through the initial vetting will be published on the My LA2050 Grants Challenge website on {{ site.ENTRIES_SHOWN_ON_THE_WEBSITE_DATE | date: "%A, %B %-d, %Y" }} to allow the public to read about and engage with the proposals.

From {{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }} (9am Pacific Time) through {{ site.VOTING_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }} (5pm Pacific Time), all submissions will be voted on by the public. Public voting will surface 50 finalists - the top 10 submissions in each goal category. The Goldhirsh Foundation will then select two winners from each goal category, to be announced on {{ site.WINNERS_ANNOUNCED_DATE | date: "%A, %B %-d, %Y" }}.

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
* Clearly articulate the strategies and tools that will be employed.
* Identify collaboration partners and their respective roles. Collaboration is highly encouraged!
* Submit a detailed budget explaining how funds will be used across the one year grant period.
* Detail any additional desired, non-financial assistance needed from LA2050 to make the project a success.

### Rules

_What are the rules for submitting a proposal to the My LA2050 Grants Challenge?_

* The My LA2050 Grants Challenge is open for submissions from {{ site.ENTRIES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }} (9am Pacific Time) through {{ site.ENTRY_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }} (midnight, Pacific Time).
* In order to submit a proposal, log-in and complete the application form.
* US-based non-profit, for-profit, social enterprises, and government agencies with projects serving Los Angeles County are eligible to apply.
* Winning projects must be completed, and the grant award must be expended within 12 months.
* Ongoing projects are eligible for submission.
* Previous applicants and winners of LA2050 grant programs may reapply.
* <mark>All projects will be featured on this site by {{ site.ENTRIES_SHOWN_ON_THE_WEBSITE_DATE | date: "%A, %B %-d, %Y" }}, and public voting will be open from {{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }} (9am Pacific Time) through {{ site.VOTING_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }} (5pm Pacific Time).</mark>
* <mark><em>Public vote</em>: The public will vote on all submissions to the grants challenge. The top 10 submissions in each goal category garnering the most votes will be finalists (50 total).</mark>
* <mark><em>Winner selection</em>: From the pool of 50 finalists, Goldhirsh Foundation staff and board will select two winners from each goal category (10 total).</mark>
* Applications will be selected using the following criteria: impact on the LA2050 goal and metrics, overall quality of submission, innovation, feasibility, and collaborative spirit.
* Winners of the My LA2050 Grants Challenge will be grantees of the Goldhirsh Foundation and will be required to participate in at least one check-in with an LA2050 team member per month.
* [Read all the rules](http://la2050.s3-us-west-1.amazonaws.com/comfy/cms/files/135/files/original/2019GrantsChallengeRules.pdf)

### Questions

If you have any questions about the information on this page, [please review our FAQs](/faqs) or send us an email at [connect@la2050.org](mailto:connect@la2050.org).

{% if site.phase == site.NEW_CHALLENGE_ANNOUNCED %}

* * *

<div class="introduction" markdown="1">

<p class="max-width: 23em">Starting <strong class="avoid-break">{{ site.ENTRIES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }}</strong> <small class="avoid-break">(9am Pacific Time)</small>, <span class="avoid-break">you can submit your proposal on this website.</span></p>

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

The submission period has started! Apply by <strong>{{ site.ENTRY_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }}</strong> <small>(midnight Pacific Time)</small>.

<p class="action" markdown="1">
  <a href="{{ site.submission_url }}">Submit your idea</a>
</p>

</div>

{% endif %}

