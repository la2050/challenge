---
title: How to vote in the 2020 My LA2050 Grants Challenge
body_class: blueberry
main_class: standard-layout
footer_image: true
---

<h1>
  Public Voting
</h1>

<div class="introduction" markdown="1">

{% if site.phase < site.FINALISTS_ANNOUNCED %}

Starting **{{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }}** ({{ site.VOTES_BEING_ACCEPTED_TIME }}), you can vote for the finalists on this website.<br />You can cast five votes, one per [goal category](/about/#goals).

<p class="action" markdown="1">
  <a href="{{ site.mailing_list_url }}">Get updates</a>
</p>

{% elsif site.phase == site.FINALISTS_ANNOUNCED %}

Starting **{{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }}** ({{ site.VOTES_BEING_ACCEPTED_TIME }}), you can vote for the finalists on this website.<br />You can cast five votes, one per [goal category](/about/#goals).

<p class="action" markdown="1">
  <a href="/finalists/">Check out the finalists!</a>
</p>
<p style="font-size: inherit; margin-top: 2.25em;">
  <small style="font-size: 0.875em;">You can vote by pressing the “Vote for this proposal” button on any finalist page.</small>
</p>

{% elsif site.phase == site.VOTES_BEING_ACCEPTED %}

Vote by <strong>{{ site.VOTING_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }}</strong> ({{ site.VOTING_PERIOD_ENDED_TIME }}).
<br />
You can cast five votes, one per [goal category](/about/#goals).

<p class="action" markdown="1">
  <a href="/finalists/">Check out the finalists!</a>
</p>
<p style="font-size: inherit; margin-top: 2.25em;">
  <small style="font-size: 0.875em;">You can vote by pressing the “Vote for this proposal” button on any finalist page.</small><br />
  <small style="font-size: 0.875em;">You can also visit the <a href="/vote/form/">voting form</a> directly.</small>
</p>

{% elsif site.phase == site.VOTING_PERIOD_ENDED %}

Public voting is complete.

<small>
  Winners will be announced on 
  <span class="avoid-break">
    <strong>{{ site.WINNERS_ANNOUNCED_DATE | date: "%A, %B %-d, %Y" }}</strong>.
  </span>
</small>

{% if site.finalists_chosen_by_public_vote %}
<p class="action" markdown="1">
  <a href="/entries/">Check out the entries</a>
</p>
{% else %}
<p class="action" markdown="1">
  <a href="/finalists/">Check out the finalists</a>
</p>
{% endif %}

{% elsif site.phase == site.FINALISTS_ANNOUNCED %}

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

{% elsif site.phase == site.WINNERS_ANNOUNCED %}

The winners have been announced!

<p class="action">
  <a href="/winners/">Check out the winners</a>
</p>

{% endif %}

</div>


### Help us choose our winners!

**25 finalists** will be selected by Social Venture Partners Los Angeles (our evaluation partner), and the <span class="avoid-break">final award levels will be determined through public vote.</span>

All 25 finalists will be awarded a grant. In each category:
* First place will receive $100,000
* Second place will receive $50,000
* Third place will receive $25,000
* Fourth place will receive $15,000
* Fifth place will receive $10,000

The winners will represent a diverse set of issues, strategies, and tactics. Winners will be selected using the following criteria:

* Impact on chosen [LA2050 goals and metrics](/about/#goals)
* Feasibility of proposal
* Impact on people served
* Overall application quality


### Rules

* Voting begins on {{ site.VOTES_BEING_ACCEPTED_DATE | date: "%A, %B %-d, %Y" }} ({{ site.VOTES_BEING_ACCEPTED_TIME }}) and closes {{ site.VOTING_PERIOD_ENDED_DATE | date: "%A, %B %-d, %Y" }} ({{ site.VOTING_PERIOD_ENDED_TIME }}).
* Members of the public may vote once per goal category for a total of five votes.
* Voters must be at least 14 years old and a US resident.
* To participate in the My LA2050 Grants Challenge, voters must sign in with their mobile phone, email address, or Facebook account.
* Voters signing in by phone will receive an SMS text message with a confirmation code to enter.
* Voters signing in by email will be sent an email message with a confirmation link to press.

### Questions

If you have any questions about the information on this page, [please review our FAQs](/faqs) or send us an email at [connect@la2050.org](mailto:connect@la2050.org).

